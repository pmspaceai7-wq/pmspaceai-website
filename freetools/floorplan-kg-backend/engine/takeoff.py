"""Deterministic quantity takeoff over the knowledge graph.

Every line item is a pure function of graph nodes, and records:

* ``basis`` — the arithmetic in words, so an estimator can check it by hand;
* ``sourceNodeIds`` — the graph nodes the number came from, so the UI can
  highlight the evidence on the sheet;
* ``confidence`` — ``high`` when the figure comes from a schedule table,
  ``medium`` when derived from a labelled room size, ``low`` when it rests on
  an assumption such as default ceiling height.

The numbers are the *measured* quantity. Waste factors, labour and pricing are
deliberately out of scope: an estimator's workbook owns those.
"""

from __future__ import annotations

from dataclasses import dataclass, field, asdict
from typing import Dict, List, Optional

DEFAULT_ASSUMPTIONS = {
    "ceilingHeightFeet": 8.0,
    "studSpacingInches": 16.0,
    "platesPerWall": 3.0,  # one sole plate + double top plate
}

# Rooms that get no interior wall/ceiling finish in a residential takeoff.
_UNFINISHED = {"GARAGE", "PATIO", "PORCH", "DECK", "CRAWL SPACE"}


@dataclass
class TakeoffLine:
    id: str
    csiSection: str
    category: str
    description: str
    quantity: float
    unit: str
    basis: str
    confidence: str
    sourceNodeIds: List[str] = field(default_factory=list)
    sourcePages: List[int] = field(default_factory=list)
    origin: str = "auto"

    def to_dict(self) -> dict:
        d = asdict(self)
        d["quantity"] = round(self.quantity, 2)
        return d


def _is_unfinished(name: str) -> bool:
    upper = (name or "").upper()
    return any(token in upper for token in _UNFINISHED)


def compute_takeoff(kg, assumptions: Optional[dict] = None) -> dict:
    """Return ``{"lines": [...], "assumptions": {...}, "totals": {...}}``."""
    opts = {**DEFAULT_ASSUMPTIONS, **(assumptions or {})}
    ceiling = float(opts["ceilingHeightFeet"])
    spacing = float(opts["studSpacingInches"])
    plates = float(opts["platesPerWall"])

    lines: List[TakeoffLine] = []

    # ---------------------------------------------------------------- rooms
    rooms = [n for n in kg.nodes_of("Room") if n.properties.get("areaSqFt")]
    finished = [r for r in rooms if not _is_unfinished(r.label)]

    for room in sorted(rooms, key=lambda n: n.label):
        area = float(room.properties["areaSqFt"])
        perimeter = float(room.properties.get("perimeterFeet") or 0.0)
        page = room.properties.get("page") or (room.provenance or {}).get("page")
        pages = [page] if page else []
        size = room.properties.get("sizeRaw") or ""

        lines.append(TakeoffLine(
            id=f"to:floor:{room.id}", csiSection="09 60 00", category="Flooring",
            description=f"Floor finish — {room.label}",
            quantity=area, unit="SF",
            basis=f"labelled room size {size} = {area:.2f} SF",
            confidence="medium", sourceNodeIds=[room.id], sourcePages=pages,
        ))

        if _is_unfinished(room.label) or perimeter <= 0:
            continue

        wall_area = perimeter * ceiling
        lines.append(TakeoffLine(
            id=f"to:wall:{room.id}", csiSection="09 29 00", category="Gypsum Board",
            description=f"Wall board — {room.label}",
            quantity=wall_area, unit="SF",
            basis=(f"perimeter {perimeter:.2f} LF x assumed ceiling "
                   f"{ceiling:g} FT = {wall_area:.2f} SF (openings not deducted)"),
            confidence="low", sourceNodeIds=[room.id], sourcePages=pages,
        ))
        lines.append(TakeoffLine(
            id=f"to:ceil:{room.id}", csiSection="09 51 00", category="Ceilings",
            description=f"Ceiling finish — {room.label}",
            quantity=area, unit="SF",
            basis=f"equal to floor area {area:.2f} SF",
            confidence="medium", sourceNodeIds=[room.id], sourcePages=pages,
        ))
        lines.append(TakeoffLine(
            id=f"to:base:{room.id}", csiSection="06 22 00", category="Finish Carpentry",
            description=f"Base trim — {room.label}",
            quantity=perimeter, unit="LF",
            basis=f"room perimeter {perimeter:.2f} LF (door openings not deducted)",
            confidence="medium", sourceNodeIds=[room.id], sourcePages=pages,
        ))

    # -------------------------------------------------------------- framing
    if finished:
        total_perimeter = sum(float(r.properties.get("perimeterFeet") or 0) for r in finished)
        assemblies = kg.nodes_of("Assembly")
        member = assemblies[0].properties.get("code") if assemblies else "2x4"
        stud_count = total_perimeter * 12.0 / spacing
        ids = [r.id for r in finished] + [a.id for a in assemblies]
        lines.append(TakeoffLine(
            id="to:framing:studs", csiSection="06 11 00", category="Rough Carpentry",
            description=f"{member} wall studs",
            quantity=stud_count, unit="EA",
            basis=(f"{total_perimeter:.2f} LF of wall x 12 / {spacing:g}\" o.c. "
                   f"= {stud_count:.0f} studs (no corner/opening adjustment)"),
            confidence="low", sourceNodeIds=ids,
        ))
        lines.append(TakeoffLine(
            id="to:framing:plates", csiSection="06 11 00", category="Rough Carpentry",
            description=f"{member} wall plates",
            quantity=total_perimeter * plates, unit="LF",
            basis=f"{total_perimeter:.2f} LF x {plates:g} plates (sole + double top)",
            confidence="low", sourceNodeIds=ids,
        ))

    # ---------------------------------------------------------------- doors
    door_rows = [n for n in kg.nodes_of("ScheduleRow")
                 if n.properties.get("Mark") and n.properties.get("_widthInches")
                 and n.label.lower().startswith("door")]
    by_type: Dict[str, List] = {}
    for row in door_rows:
        by_type.setdefault(row.properties.get("Type") or "Unspecified", []).append(row)

    for type_name, rows in sorted(by_type.items()):
        marks = sorted(rows, key=lambda r: int(r.properties["Mark"]))
        sizes = sorted({f"{r.properties.get('Width')} x {r.properties.get('Height')}"
                        for r in marks})
        pages = sorted({r.properties.get("page") or (r.provenance or {}).get("page")
                        for r in marks if (r.provenance or {}).get("page")})
        lines.append(TakeoffLine(
            id=f"to:door:{type_name}", csiSection="08 14 00", category="Doors",
            description=f"Door — {type_name} ({'; '.join(sizes)})",
            quantity=float(len(marks)), unit="EA",
            basis=("door schedule marks "
                   + ", ".join(r.properties["Mark"] for r in marks)),
            confidence="high", sourceNodeIds=[r.id for r in marks], sourcePages=pages,
        ))

    # -------------------------------------------------------------- windows
    window_counts: Dict[str, List[str]] = {}
    for opening in kg.nodes_of("Opening"):
        window_counts.setdefault(opening.properties["code"], []).append(opening.id)

    types = {n.properties.get("code"): n for n in kg.nodes_of("OpeningType")}
    for code, ids in sorted(window_counts.items()):
        type_node = types.get(code)
        props = type_node.properties if type_node else {}
        width = props.get("widthInches")
        height = props.get("heightInches")
        pages = sorted({int(i.split(":")[1]) for i in ids})
        label = props.get("sizeDisplay") or code
        lines.append(TakeoffLine(
            id=f"to:window:{code}", csiSection="08 50 00", category="Windows",
            description=f"Window {code} — {props.get('operation', 'Unknown')} {label}",
            quantity=float(len(ids)), unit="EA",
            basis=f"{len(ids)} tag instance(s) of {code} on sheet(s) "
                  + ", ".join(str(p) for p in pages),
            confidence="medium", sourceNodeIds=ids, sourcePages=pages,
        ))
        if width and height:
            area = len(ids) * width * height / 144.0
            lines.append(TakeoffLine(
                id=f"to:window-area:{code}", csiSection="08 50 00", category="Windows",
                description=f"Window area {code}",
                quantity=area, unit="SF",
                basis=f"{len(ids)} x ({width}\" x {height}\") / 144 = {area:.2f} SF",
                confidence="medium", sourceNodeIds=ids, sourcePages=pages,
            ))

    # ------------------------------------------------------------- fixtures
    fixture_groups: Dict[tuple, List[str]] = {}
    fixture_pages: Dict[tuple, set] = {}
    for fixture in kg.nodes_of("Fixture"):
        key = (fixture.properties.get("category", "Fixture"), fixture.label)
        fixture_groups.setdefault(key, []).append(fixture.id)
        fixture_pages.setdefault(key, set()).add(fixture.properties.get("page"))

    csi_by_category = {
        "Appliance": "11 30 00", "Plumbing": "22 40 00",
        "Electrical": "26 00 00", "Millwork": "06 41 00",
        "Architectural": "06 20 00",
    }
    for (category, label), ids in sorted(fixture_groups.items()):
        pages = sorted(p for p in fixture_pages[(category, label)] if p)
        lines.append(TakeoffLine(
            id=f"to:fixture:{category}:{label}",
            csiSection=csi_by_category.get(category, "01 00 00"),
            category=category, description=label,
            quantity=float(len(ids)), unit="EA",
            basis=f"{len(ids)} tag instance(s) detected on sheet(s) "
                  + ", ".join(str(p) for p in pages),
            confidence="medium", sourceNodeIds=ids, sourcePages=pages,
        ))

    return {
        "lines": [l.to_dict() for l in lines],
        "assumptions": opts,
        "totals": _totals(lines),
    }


def _totals(lines: List[TakeoffLine]) -> dict:
    by_unit: Dict[str, float] = {}
    by_category: Dict[str, float] = {}
    for line in lines:
        by_unit[line.unit] = round(by_unit.get(line.unit, 0.0) + line.quantity, 2)
        key = f"{line.category} ({line.unit})"
        by_category[key] = round(by_category.get(key, 0.0) + line.quantity, 2)
    return {
        "lineCount": len(lines),
        "byUnit": dict(sorted(by_unit.items())),
        "byCategory": dict(sorted(by_category.items())),
    }
