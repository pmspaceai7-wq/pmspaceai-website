"""Command-line entry point — the interface the Next.js API routes call.

    python -m engine.cli plan.pdf --method pymupdf --out result.json
    python -m engine.cli plan.pdf --format xlsx --out takeoff.xlsx
    python -m engine.cli plan.pdf --format csv --csv-target schedules
"""

from __future__ import annotations

import argparse
import json
import sys
from typing import List

from .export import (TAKEOFF_COLUMNS, build_workbook, rows_to_csv,
                     schedule_sheet, rooms_sheet, takeoff_rows)
from .pipeline import process


def _csv_payload(result: dict, target: str) -> str:
    if target == "takeoff":
        return rows_to_csv(TAKEOFF_COLUMNS, takeoff_rows(result.get("takeoff", {})))
    if target == "rooms":
        sheet = rooms_sheet(result)
        return rows_to_csv(sheet["columns"], sheet["rows"])
    if target.startswith("schedule:"):
        wanted = target.split(":", 1)[1]
        for schedule in result.get("schedules", []):
            if schedule["id"] == wanted:
                sheet = schedule_sheet(schedule)
                return rows_to_csv(sheet["columns"], sheet["rows"])
        raise SystemExit(f"no schedule with id {wanted!r}")
    if target == "schedules":
        chunks: List[str] = []
        for schedule in result.get("schedules", []):
            sheet = schedule_sheet(schedule)
            chunks.append(f"# {schedule['title']} (sheet {schedule['page']})\r\n"
                          + rows_to_csv(sheet["columns"], sheet["rows"]))
        return "\r\n".join(chunks) or "# no schedules detected\r\n"
    raise SystemExit(f"unknown --csv-target {target!r}")


def main(argv=None) -> int:
    parser = argparse.ArgumentParser(prog="engine.cli",
                                     description="Floorplan PDF -> knowledge graph + takeoff")
    parser.add_argument("pdf")
    parser.add_argument("--method", choices=["pymupdf", "pdfplumber"], default="pymupdf")
    parser.add_argument("--format", choices=["json", "xlsx", "csv", "mcp", "ingest-text"],
                        default="json")
    parser.add_argument("--csv-target", default="takeoff",
                        help="takeoff | rooms | schedules | schedule:<id>")
    parser.add_argument("--ceiling-height", type=float, default=None,
                        help="assumed ceiling height in feet (default 8)")
    parser.add_argument("--out", default="-", help="output path, or - for stdout")
    args = parser.parse_args(argv)

    assumptions = {}
    if args.ceiling_height:
        assumptions["ceilingHeightFeet"] = args.ceiling_height

    result = process(args.pdf, args.method, assumptions or None)

    if args.format == "xlsx":
        data = build_workbook(result)
    elif args.format == "csv":
        data = _csv_payload(result, args.csv_target).encode("utf-8")
    elif args.format == "mcp":
        from .mcp_bridge import to_veritasgraph_graph
        data = json.dumps(to_veritasgraph_graph(result), indent=2).encode("utf-8")
    elif args.format == "ingest-text":
        from .mcp_bridge import to_ingest_text
        data = to_ingest_text(result).encode("utf-8")
    else:
        data = json.dumps(result, indent=2, ensure_ascii=False).encode("utf-8")

    if args.out == "-":
        sys.stdout.buffer.write(data)
    else:
        with open(args.out, "wb") as fh:
            fh.write(data)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
