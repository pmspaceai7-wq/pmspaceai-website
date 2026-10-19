"""Knowledge-graph construction.

The graph is built **deterministically** from extracted geometry — no LLM is
involved, so the same PDF always yields the same graph and every assertion is
unit-testable. Following the VeritasGraph convention, every node and edge
carries a ``provenance`` record naming the sheet, the bounding box and the
literal source text it came from, so a downstream answer can cite its evidence
rather than assert it.

Node types
    Document, Sheet, Room, Opening, OpeningType, DoorType, Fixture,
    Assembly, Schedule, ScheduleRow, AreaCallout

Edge types
    HAS_SHEET, ON_SHEET, IN_ROOM, HAS_FIXTURE, OF_TYPE, HAS_ROW,
    SPECIFIES, ADJACENT_TO, DERIVED_FROM
"""

from __future__ import annotations

from dataclasses import dataclass, field
from typing import Dict, List, Optional

from .codes import decode_opening
from .dimensions import format_inches


@dataclass
class Node:
    id: str
    type: str
    label: str
    properties: dict = field(default_factory=dict)
    provenance: Optional[dict] = None

    def to_dict(self) -> dict:
        out = {"id": self.id, "type": self.type, "label": self.label,
               "properties": self.properties}
        if self.provenance:
            out["provenance"] = self.provenance
        return out


@dataclass
class Edge:
    id: str
    source: str
    target: str
    type: str
    properties: dict = field(default_factory=dict)
    provenance: Optional[dict] = None

    def to_dict(self) -> dict:
        out = {"id": self.id, "source": self.source, "target": self.target,
               "type": self.type, "properties": self.properties}
        if self.provenance:
            out["provenance"] = self.provenance
        return out


class KnowledgeGraph:
    def __init__(self) -> None:
        self._nodes: Dict[str, Node] = {}
        self._edges: Dict[str, Edge] = {}

    # -- mutation ---------------------------------------------------------
    def add_node(self, node: Node) -> Node:
        existing = self._nodes.get(node.id)
        if existing:
            existing.properties.update(node.properties)
            if node.provenance and not existing.provenance:
                existing.provenance = node.provenance
            return existing
        self._nodes[node.id] = node
        return node

    def add_edge(self, source: str, target: str, type_: str,
                 properties: Optional[dict] = None,
                 provenance: Optional[dict] = None) -> Optional[Edge]:
        if source not in self._nodes or target not in self._nodes or source == target:
            return None
        edge_id = f"{source}|{type_}|{target}"
        if edge_id in self._edges:
            return self._edges[edge_id]
        edge = Edge(edge_id, source, target, type_, properties or {}, provenance)
        self._edges[edge_id] = edge
        return edge

    # -- access -----------------------------------------------------------
    @property
    def nodes(self) -> List[Node]:
        return list(self._nodes.values())

    @property
    def edges(self) -> List[Edge]:
        return list(self._edges.values())

    def nodes_of(self, type_: str) -> List[Node]:
        return [n for n in self._nodes.values() if n.type == type_]

    def neighbors(self, node_id: str) -> List[str]:
        out = []
        for e in self._edges.values():
            if e.source == node_id:
                out.append(e.target)
            elif e.target == node_id:
                out.append(e.source)
        return out

    def stats(self) -> dict:
        by_type: Dict[str, int] = {}
        for n in self._nodes.values():
            by_type[n.type] = by_type.get(n.type, 0) + 1
        by_edge: Dict[str, int] = {}
        for e in self._edges.values():
            by_edge[e.type] = by_edge.get(e.type, 0) + 1
        return {
            "nodeCount": len(self._nodes),
            "edgeCount": len(self._edges),
            "nodesByType": dict(sorted(by_type.items())),
            "edgesByType": dict(sorted(by_edge.items())),
        }

    def to_dict(self) -> dict:
        return {
            "nodes": [n.to_dict() for n in self._nodes.values()],
            "edges": [e.to_dict() for e in self._edges.values()],
            "stats": self.stats(),
        }


def _prov(page: Optional[int], bbox=None, text: str = "", extractor: str = "") -> dict:
    out: dict = {"extractor": extractor}
    if page is not None:
        out["page"] = page
    if bbox:
        out["bbox"] = [round(float(v), 2) for v in bbox]
    if text:
        out["sourceText"] = text[:200]
    return out


def _overlap(a: List[float], b: List[float], pad: float) -> bool:
    return not (a[2] + pad < b[0] or b[2] + pad < a[0]
                or a[3] + pad < b[1] or b[3] + pad < a[1])


def build_graph(doc, pages_payload: List[dict]) -> KnowledgeGraph:
    """Assemble the graph from the per-page extraction payload."""
    kg = KnowledgeGraph()

    doc_id = f"doc:{doc.sha256[:12]}"
    kg.add_node(Node(
        doc_id, "Document", doc.filename,
        {"filename": doc.filename, "sha256": doc.sha256,
         "pageCount": doc.page_count, "backend": doc.backend},
        _prov(None, extractor=doc.backend),
    ))

    for page_data in pages_payload:
        page_no = page_data["page"]
        sheet_id = f"sheet:{page_no}"
        kg.add_node(Node(
            sheet_id, "Sheet", f"Sheet {page_no}",
            {"page": page_no, "width": page_data.get("width"),
             "height": page_data.get("height")},
            _prov(page_no, extractor="extract"),
        ))
        kg.add_edge(doc_id, sheet_id, "HAS_SHEET")

        # --- rooms -------------------------------------------------------
        room_nodes: List[Node] = []
        for room in page_data.get("rooms", []):
            node = kg.add_node(Node(
                room["id"], "Room", room["name"],
                {k: v for k, v in room.items() if k not in ("id", "name", "bbox", "page")},
                _prov(page_no, room.get("bbox"), room.get("sizeRaw") or room["name"], "rooms"),
            ))
            room_nodes.append(node)
            kg.add_edge(room["id"], sheet_id, "ON_SHEET")

        # Rooms whose label boxes nearly touch are almost certainly adjacent
        # spaces. This is the edge that makes multi-hop questions ("what is
        # next to the kitchen?") answerable.
        pad = 0.06 * float(page_data.get("width") or 792)
        for i, a in enumerate(room_nodes):
            for b in room_nodes[i + 1:]:
                box_a = a.provenance.get("bbox") if a.provenance else None
                box_b = b.provenance.get("bbox") if b.provenance else None
                if box_a and box_b and _overlap(box_a, box_b, pad):
                    kg.add_edge(a.id, b.id, "ADJACENT_TO",
                                {"inferredFrom": "labelProximity"})

        # --- openings ----------------------------------------------------
        for i, opening in enumerate(page_data.get("openings", [])):
            code = opening["code"]
            type_id = f"openingtype:{code}"
            info = decode_opening(code) or {}
            kg.add_node(Node(
                type_id, "OpeningType", code,
                {"code": code, **info,
                 "sizeDisplay": (f"{format_inches(info['widthInches'])} x "
                                 f"{format_inches(info['heightInches'])}") if info else None},
                _prov(page_no, extractor="codes"),
            ))
            inst_id = f"opening:{page_no}:{code}:{i}"
            kg.add_node(Node(
                inst_id, "Opening", code,
                {"code": code, "page": page_no},
                _prov(page_no, opening.get("bbox"), code, "codes"),
            ))
            kg.add_edge(inst_id, type_id, "OF_TYPE")
            kg.add_edge(inst_id, sheet_id, "ON_SHEET")
            if opening.get("roomId"):
                kg.add_edge(inst_id, opening["roomId"], "IN_ROOM")

        # --- fixtures ----------------------------------------------------
        for i, fixture in enumerate(page_data.get("fixtures", [])):
            fid = f"fixture:{page_no}:{fixture['code']}:{i}"
            kg.add_node(Node(
                fid, "Fixture", fixture["label"],
                {"code": fixture["code"], "category": fixture["category"], "page": page_no},
                _prov(page_no, fixture.get("bbox"), fixture.get("raw", fixture["code"]), "codes"),
            ))
            kg.add_edge(fid, sheet_id, "ON_SHEET")
            if fixture.get("roomId"):
                kg.add_edge(fid, fixture["roomId"], "IN_ROOM")
                kg.add_edge(fixture["roomId"], fid, "HAS_FIXTURE")

        # --- assemblies --------------------------------------------------
        for assembly in page_data.get("assemblies", []):
            aid = f"assembly:{assembly['code']}"
            kg.add_node(Node(
                aid, "Assembly", assembly["label"],
                {"code": assembly["code"], **assembly.get("attrs", {})},
                _prov(page_no, assembly.get("bbox"), assembly["code"], "codes"),
            ))
            kg.add_edge(aid, sheet_id, "ON_SHEET")

        # --- area callouts -----------------------------------------------
        for i, area in enumerate(page_data.get("areaCallouts", [])):
            aid = f"area:{page_no}:{i}"
            kg.add_node(Node(
                aid, "AreaCallout", area["label"],
                {"areaSqFt": area["areaSqFt"], "page": page_no},
                _prov(page_no, area.get("bbox"), area.get("raw", ""), "rooms"),
            ))
            kg.add_edge(aid, sheet_id, "ON_SHEET")

    return kg


def attach_schedules(kg: KnowledgeGraph, schedules: List[dict]) -> None:
    """Add schedule tables and bind their rows to opening/door types."""
    for schedule in schedules:
        sid = schedule["id"]
        kg.add_node(Node(
            sid, "Schedule", schedule["title"],
            {"kind": schedule["kind"], "page": schedule["page"],
             "columns": schedule["columns"], "rowCount": schedule["rowCount"]},
            _prov(schedule["page"], extractor="schedules"),
        ))
        kg.add_edge(sid, f"sheet:{schedule['page']}", "ON_SHEET")

        for i, row in enumerate(schedule["rows"]):
            rid = f"{sid}:row:{i}"
            mark = row.get("Mark")
            label = f"{schedule['kind'].title()} {mark}" if mark else f"Row {i + 1}"
            kg.add_node(Node(
                rid, "ScheduleRow", label,
                {k: v for k, v in row.items() if not k.startswith("_")}
                | {k: v for k, v in row.items() if k.startswith("_")},
                _prov(schedule["page"], extractor="schedules"),
            ))
            kg.add_edge(sid, rid, "HAS_ROW", {"index": i})

            if schedule["kind"] in ("door", "window") and row.get("Type"):
                type_id = f"{schedule['kind']}type:{row['Type']}"
                kg.add_node(Node(
                    type_id, "DoorType" if schedule["kind"] == "door" else "OpeningType",
                    row["Type"],
                    {"typeName": row["Type"], "widthInches": row.get("_widthInches"),
                     "heightInches": row.get("_heightInches"),
                     "areaSqFt": row.get("_areaSqFt")},
                    _prov(schedule["page"], extractor="schedules"),
                ))
                kg.add_edge(rid, type_id, "SPECIFIES")
