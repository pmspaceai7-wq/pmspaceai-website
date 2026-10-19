"""End-to-end pipeline: PDF path in, one JSON document out.

    load_document -> per-page entity extraction -> spatial binding
                  -> schedule extraction -> knowledge graph -> takeoff
"""

from __future__ import annotations

import time
from datetime import datetime, timezone
from typing import List, Optional

from . import __version__
from .codes import detect
from .dimensions import find_dimensions
from .extract import Backend, Page, load_document
from .graph import attach_schedules, build_graph
from .rooms import assign_fixtures, extract_area_callouts, extract_rooms
from .schedules import extract_all as extract_schedules
from .takeoff import compute_takeoff


def _page_entities(page: Page) -> dict:
    """Dimensions, openings, fixtures and assemblies for one sheet."""
    dimensions, openings, fixtures, assemblies = [], [], [], []

    for run in page.runs:
        bbox = [round(v, 2) for v in run.bbox]

        for dim in find_dimensions(run.text):
            entry = dim.to_dict()
            entry["bbox"] = bbox
            entry["page"] = page.number
            dimensions.append(entry)

        for det in detect(run.text):
            entry = det.to_dict()
            entry.update({"bbox": bbox, "page": page.number, "raw": run.text})
            if det.kind == "opening":
                openings.append(entry)
            elif det.kind == "fixture":
                fixtures.append(entry)
            elif det.kind == "assembly":
                assemblies.append(entry)

    return {
        "dimensions": dimensions,
        "openings": openings,
        "fixtures": fixtures,
        "assemblies": assemblies,
    }


def process(
    pdf_path: str,
    backend: Backend = "pymupdf",
    assumptions: Optional[dict] = None,
) -> dict:
    started = time.perf_counter()
    doc = load_document(pdf_path, backend)

    pages_payload: List[dict] = []
    for page in doc.pages:
        rooms = extract_rooms(page)
        entities = _page_entities(page)

        # Openings and fixtures inherit the room whose label is nearest; this
        # is what lets the takeoff report "2 windows in the master bedroom"
        # rather than a flat count.
        assign_fixtures(rooms, entities["fixtures"])
        assign_fixtures(rooms, entities["openings"])

        pages_payload.append({
            "page": page.number,
            "width": round(page.width, 2),
            "height": round(page.height, 2),
            "textRunCount": len(page.runs),
            "rooms": [r.to_dict() for r in rooms],
            "areaCallouts": extract_area_callouts(page),
            **entities,
        })

    schedules = [s.to_dict() for s in extract_schedules(doc.pages)]

    kg = build_graph(doc, pages_payload)
    attach_schedules(kg, schedules)
    takeoff = compute_takeoff(kg, assumptions)

    total_dims = sum(len(p["dimensions"]) for p in pages_payload)
    total_rooms = sum(len(p["rooms"]) for p in pages_payload)
    measured_area = round(
        sum(r["areaSqFt"] or 0 for p in pages_payload for r in p["rooms"]), 2
    )

    return {
        "metadata": {
            "engineVersion": __version__,
            "processedAt": datetime.now(timezone.utc).isoformat(),
            "originalFilename": doc.filename,
            "sha256": doc.sha256,
            "processingMethod": doc.backend,
            "totalPages": doc.page_count,
            "durationMs": round((time.perf_counter() - started) * 1000, 1),
        },
        "summary": {
            "totalPages": doc.page_count,
            "rooms": total_rooms,
            "dimensions": total_dims,
            "openings": sum(len(p["openings"]) for p in pages_payload),
            "fixtures": sum(len(p["fixtures"]) for p in pages_payload),
            "schedules": len(schedules),
            "scheduleRows": sum(s["rowCount"] for s in schedules),
            "measuredAreaSqFt": measured_area,
            "takeoffLines": takeoff["totals"]["lineCount"],
            **kg.stats(),
        },
        "pages": pages_payload,
        "schedules": schedules,
        "graph": kg.to_dict(),
        "takeoff": takeoff,
    }
