"""Bridge from the deterministic floorplan graph into VeritasGraph.

Why bother, when the graph is already built?

The floorplan graph answers *structured* questions exactly ("how many
Single-Flush doors?"). It cannot answer *natural-language, cross-document*
questions ("does the door schedule contradict the marks on the plan, and which
sheet shows it?"). Handing the finished graph to VeritasGraph adds that layer
without giving up determinism: the geometry is still machine-derived, the LLM
only reasons over it, and VeritasGraph's ``[doc#chunk]`` citations resolve back
to the ``provenance`` records we attached to every node.

Two integration points, both optional and both local-only:

``to_veritasgraph_graph``
    Emits the generic node/edge JSON that ``GraphRAGEngine.import_graph``
    accepts, tagged ``source_type="extracted"`` so a reviewer's curated edits
    outrank it on merge.

``to_ingest_text``
    A flat prose rendering for ``veritasgraph_ingest_document`` when you would
    rather the LLM re-extract entities than trust the import path.
"""

from __future__ import annotations

from typing import Any, Dict, List, Optional


def _describe(node: dict) -> str:
    props = node.get("properties") or {}
    parts: List[str] = [f"{node.get('type')} '{node.get('label')}'"]
    for key in ("sizeRaw", "areaSqFt", "perimeterFeet", "code", "operation",
                "sizeDisplay", "category", "typeName", "widthInches",
                "heightInches", "rowCount", "kind", "Mark", "Width", "Height"):
        if props.get(key) not in (None, "", [], {}):
            parts.append(f"{key}={props[key]}")
    prov = node.get("provenance") or {}
    if prov.get("page"):
        parts.append(f"sheet={prov['page']}")
    if prov.get("sourceText"):
        parts.append(f"source text: \"{prov['sourceText']}\"")
    return "; ".join(parts)


def to_veritasgraph_graph(result: dict, title: Optional[str] = None) -> Dict[str, Any]:
    """Convert a pipeline result into VeritasGraph's generic import format."""
    graph = result.get("graph", {})
    meta = result.get("metadata", {})
    nodes = []
    for node in graph.get("nodes", []):
        nodes.append({
            "id": node["id"],
            "name": node["label"],
            "type": node["type"],
            "description": _describe(node),
            "provenance": node.get("provenance"),
            **{k: v for k, v in (node.get("properties") or {}).items()
               if v not in (None, "", [], {})},
        })
    edges = [
        {"source": e["source"], "target": e["target"], "relation": e["type"]}
        for e in graph.get("edges", [])
    ]
    return {
        "title": title or f"Floorplan — {meta.get('originalFilename', 'unknown')}",
        "description": (
            f"Deterministically extracted architectural floorplan graph from "
            f"{meta.get('originalFilename')} ({meta.get('totalPages')} sheet(s)), "
            f"engine v{meta.get('engineVersion')}."
        ),
        "version": meta.get("sha256", "")[:12],
        "nodes": nodes,
        "edges": edges,
    }


def to_ingest_text(result: dict) -> str:
    """Flat prose rendering for ``veritasgraph_ingest_document``."""
    meta = result.get("metadata", {})
    out: List[str] = [
        f"Floorplan document: {meta.get('originalFilename')} "
        f"({meta.get('totalPages')} sheets, extracted with {meta.get('processingMethod')}).",
        "",
    ]

    for page in result.get("pages", []):
        rooms = page.get("rooms", [])
        if not rooms:
            continue
        out.append(f"Sheet {page['page']} rooms:")
        for room in rooms:
            if room.get("areaSqFt"):
                out.append(
                    f"- {room['name']} measures {room.get('sizeRaw')} "
                    f"({room['areaSqFt']} square feet, perimeter "
                    f"{room.get('perimeterFeet')} linear feet)."
                    + (f" It contains: {', '.join(room['fixtures'])}."
                       if room.get("fixtures") else "")
                )
            else:
                out.append(f"- {room['name']} is labelled on sheet {page['page']} without a size.")
        out.append("")

    for schedule in result.get("schedules", []):
        out.append(f"{schedule['title']} (sheet {schedule['page']}, "
                   f"{schedule['rowCount']} rows):")
        for row in schedule.get("rows", []):
            pairs = ", ".join(f"{k}={v}" for k, v in row.items()
                              if not k.startswith("_") and v)
            out.append(f"- {pairs}")
        out.append("")

    takeoff = result.get("takeoff", {})
    if takeoff.get("lines"):
        out.append("Quantity takeoff:")
        for line in takeoff["lines"]:
            out.append(
                f"- {line['description']}: {line['quantity']} {line['unit']} "
                f"({line['confidence']} confidence; {line['basis']})."
            )
    return "\n".join(out)


def push_to_engine(result: dict, source_type: str = "extracted") -> Dict[str, Any]:
    """Import the graph into the running VeritasGraph engine.

    Kept behind a lazy import and a caught ImportError: the whole pipeline must
    stay usable with nothing but the two PDF libraries installed.
    """
    try:
        from studio_api.graphrag_engine import engine
    except Exception as exc:  # noqa: BLE001
        return {"ok": False, "error": f"VeritasGraph engine unavailable: {exc}"}

    payload = to_veritasgraph_graph(result)
    try:
        stats = engine.import_graph(
            payload, fmt="generic", source_type=source_type,
            title=payload["title"], origin_version=payload["version"],
        )
        return {"ok": True, **stats}
    except Exception as exc:  # noqa: BLE001
        return {"ok": False, "error": str(exc)}
