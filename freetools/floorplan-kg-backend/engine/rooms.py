"""Room recognition and geometric pairing.

A plan sheet stores a room as two unrelated text runs: a name
(``MASTER BDRM``) and, usually just below it, a size (``13'6" X 15'6"``).
Nothing in the PDF links them — the association is purely spatial, so we
rebuild it by nearest-neighbour search with a strong preference for the size
run sitting directly beneath the name.

Multi-line names (``BREAKFAST`` / ``NOOK``) are stitched first, otherwise the
size would bind to the wrong half of the label.
"""

from __future__ import annotations

import re
from dataclasses import dataclass, field
from typing import Dict, List, Optional

from .dimensions import find_size_pair, format_inches
from .extract import Page, TextRun

ROOM_KEYWORDS = {
    "BEDROOM", "BDRM", "MASTER", "BATH", "BATHROOM", "KITCHEN", "LIVING",
    "DINING", "FAMILY", "GARAGE", "CLOSET", "LAUNDRY", "OFFICE", "FOYER",
    "ENTRY", "HALL", "HALLWAY", "PANTRY", "PATIO", "PORCH", "DECK", "NOOK",
    "BREAKFAST", "UTILITY", "STORAGE", "STOR", "DEN", "STUDY", "MUDROOM",
    "ROOM", "SUITE", "LOFT", "BASEMENT", "ATTIC", "STAIRS", "MECH", "WIC",
}

# Callouts that are ALL-CAPS but are notes/fixtures, never rooms.
_NOT_A_ROOM = {
    "RANGE", "WALL OVEN", "UTILITY SINK", "REFRIGERATOR", "HALF WALL",
    "ARCHED OPENING", "BUILT-IN", "BOOKSHELF", "SHOWER", "LINEN", "DW",
    "DRAWERS", "FREEZER", "WASHER", "DRYER", "WH", "SEAT", "EGRESS", "REF",
    "VENT", "HAND RAIL", "ELECT. PANEL", "ICE", "MKR", "HB", "TYP",
}

_NAME_RE = re.compile(r"^[A-Z][A-Z0-9 .'/&-]{1,28}$")
_UNIT = r"(?:SQUARE\s*FEET|SQ\.?\s*F(?:EE)?T|SQ\.?\s*FT|S\.?F\.?)"
# Both orders occur on real sheets: "914 SQUARE FEET" and "TOTAL SQUARE FEET: 84".
_AREA_RE = re.compile(rf"(?P<n>[\d,]+(?:\.\d+)?)\s*{_UNIT}\b")
_AREA_SUFFIX_RE = re.compile(rf"{_UNIT}\s*[:=]\s*(?P<n>[\d,]+(?:\.\d+)?)\b")


@dataclass
class Room:
    id: str
    name: str
    page: int
    bbox: List[float]
    widthInches: Optional[float] = None
    heightInches: Optional[float] = None
    areaSqFt: Optional[float] = None
    perimeterFeet: Optional[float] = None
    sizeRaw: Optional[str] = None
    source: str = "label+size"
    fixtures: List[str] = field(default_factory=list)

    def to_dict(self) -> dict:
        return {
            "id": self.id,
            "name": self.name,
            "page": self.page,
            "bbox": [round(v, 2) for v in self.bbox],
            "widthInches": self.widthInches,
            "heightInches": self.heightInches,
            "widthDisplay": format_inches(self.widthInches) if self.widthInches else None,
            "heightDisplay": format_inches(self.heightInches) if self.heightInches else None,
            "areaSqFt": self.areaSqFt,
            "perimeterFeet": self.perimeterFeet,
            "sizeRaw": self.sizeRaw,
            "source": self.source,
            "fixtures": self.fixtures,
        }


def _slug(text: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")


def is_room_name(text: str) -> bool:
    if text in _NOT_A_ROOM or not _NAME_RE.match(text):
        return False
    words = re.split(r"[ /]+", re.sub(r"[.'&-]", " ", text))
    return any(w in ROOM_KEYWORDS for w in words if w)


def _stitch(runs: List[TextRun]) -> List[TextRun]:
    """Merge a name split across two stacked lines (``BREAKFAST`` + ``NOOK``)."""
    merged: List[TextRun] = []
    used: set = set()
    for i, a in enumerate(runs):
        if i in used:
            continue
        best = None
        for j, b in enumerate(runs):
            if j <= i or j in used or b.page != a.page:
                continue
            gap = b.bbox[1] - a.bbox[3]
            # Two halves of one label sit on consecutive baselines, centred on
            # each other. Anything looser is two different rooms.
            if -1.0 <= gap <= a.height * 0.6 and abs(a.cx - b.cx) <= a.height * 1.2:
                if is_room_name(f"{a.text} {b.text}"):
                    best = (j, b)
                    break
        if best:
            j, b = best
            used.add(j)
            merged.append(
                TextRun(
                    f"{a.text} {b.text}",
                    [min(a.bbox[0], b.bbox[0]), a.bbox[1], max(a.bbox[2], b.bbox[2]), b.bbox[3]],
                    a.page,
                )
            )
        else:
            merged.append(a)
    return merged


def extract_rooms(page: Page) -> List[Room]:
    """Rooms on one page, with sizes bound by spatial nearest-neighbour."""
    name_runs = _stitch([r for r in page.runs if is_room_name(r.text)])
    size_runs = [(r, find_size_pair(r.text)) for r in page.runs]
    size_runs = [(r, s) for r, s in size_runs if s]

    # Globally greedy matching: score every (name, size) pair, then take them
    # cheapest-first. Per-name first-come assignment cascades — one room
    # stealing its neighbour's size shifts every label after it.
    candidates = []
    for ni, run in enumerate(name_runs):
        h = max(run.height, 6.0)
        for si, (srun, _) in enumerate(size_runs):
            if srun.page != run.page:
                continue
            dx = abs(srun.cx - run.cx)
            dy = srun.cy - run.cy
            if dx > h * 3.5 or dy < -h * 1.5 or dy > h * 4.0:
                continue
            # Size below the name is the drafting convention; above costs double.
            candidates.append((dx * 1.6 + (dy if dy >= 0 else -dy * 2.0), ni, si))
    candidates.sort()

    name_to_size: Dict[int, int] = {}
    taken_sizes: set = set()
    for _, ni, si in candidates:
        if ni in name_to_size or si in taken_sizes:
            continue
        name_to_size[ni] = si
        taken_sizes.add(si)

    rooms: List[Room] = []
    counts: Dict[str, int] = {}

    for ni, run in enumerate(name_runs):
        base = _slug(run.text)
        counts[base] = counts.get(base, 0) + 1
        rid = f"room:{page.number}:{base}" + (f":{counts[base]}" if counts[base] > 1 else "")

        room = Room(id=rid, name=run.text, page=page.number, bbox=list(run.bbox))
        si = name_to_size.get(ni)
        if si is not None:
            srun, (w, h, raw) = size_runs[si]
            room.widthInches = round(w, 2)
            room.heightInches = round(h, 2)
            room.areaSqFt = round(w * h / 144.0, 2)
            room.perimeterFeet = round(2 * (w + h) / 12.0, 2)
            room.sizeRaw = raw
            room.bbox = [
                min(run.bbox[0], srun.bbox[0]), min(run.bbox[1], srun.bbox[1]),
                max(run.bbox[2], srun.bbox[2]), max(run.bbox[3], srun.bbox[3]),
            ]
        else:
            room.source = "label-only"
        rooms.append(room)

    return rooms


def extract_area_callouts(page: Page) -> List[dict]:
    """Sheet-level ``914 SQUARE FEET`` / ``TOTAL SQUARE FEET: 84`` notes.

    On sets where rooms carry no ``W x H`` label these callouts are the only
    reliable area figure, so they are kept as an independent evidence stream
    rather than folded into rooms.
    """
    out: List[dict] = []
    for run in page.runs:
        upper = run.text.upper()
        m = _AREA_SUFFIX_RE.search(upper) or _AREA_RE.search(upper)
        if not m:
            continue
        try:
            value = float(m.group("n").replace(",", ""))
        except ValueError:
            continue
        label = (upper[: m.start()] + upper[m.end():]).strip(" :.-") or "AREA"
        out.append({
            "label": label,
            "areaSqFt": value,
            "page": page.number,
            "bbox": [round(v, 2) for v in run.bbox],
            "raw": run.text,
        })
    return out


def assign_fixtures(rooms: List[Room], fixtures: List[dict]) -> None:
    """Attach each fixture to the room whose label centre is nearest."""
    sized = [r for r in rooms if r.areaSqFt]
    pool = sized or rooms
    for fx in fixtures:
        bbox = fx.get("bbox")
        if not bbox or not pool:
            continue
        fx_cx = (bbox[0] + bbox[2]) / 2.0
        fx_cy = (bbox[1] + bbox[3]) / 2.0
        best = min(
            (r for r in pool if r.page == fx.get("page")),
            key=lambda r: ((r.bbox[0] + r.bbox[2]) / 2 - fx_cx) ** 2
            + ((r.bbox[1] + r.bbox[3]) / 2 - fx_cy) ** 2,
            default=None,
        )
        if best is not None:
            fx["roomId"] = best.id
            if fx.get("label") not in best.fixtures:
                best.fixtures.append(fx.get("label"))
