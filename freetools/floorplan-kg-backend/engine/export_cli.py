"""Export CLI — turns an already-computed result into CSV or XLSX.

Reads ``{"result": {...}, "takeoff": {...}?}`` as JSON on stdin and writes the
file to stdout. Split from ``engine.cli`` because the web UI lets an estimator
add and edit takeoff lines by hand: the export has to reflect *their* numbers,
not a fresh run of the extractor.

    cat payload.json | python -m engine.export_cli --format xlsx > takeoff.xlsx
"""

from __future__ import annotations

import argparse
import json
import sys

from .cli import _csv_payload
from .export import build_workbook


def main(argv=None) -> int:
    parser = argparse.ArgumentParser(prog="engine.export_cli")
    parser.add_argument("--format", choices=["xlsx", "csv"], default="xlsx")
    parser.add_argument("--csv-target", default="takeoff",
                        help="takeoff | rooms | schedules | schedule:<id>")
    args = parser.parse_args(argv)

    try:
        payload = json.loads(sys.stdin.buffer.read().decode("utf-8"))
    except (ValueError, UnicodeDecodeError) as exc:
        print(f"invalid JSON payload: {exc}", file=sys.stderr)
        return 2

    result = payload.get("result")
    if not isinstance(result, dict):
        print("payload.result must be an extraction result object", file=sys.stderr)
        return 2

    takeoff = payload.get("takeoff") or result.get("takeoff") or {}
    # Client-supplied takeoff lines win, so manual edits survive the round trip.
    result = {**result, "takeoff": takeoff}

    if args.format == "xlsx":
        sys.stdout.buffer.write(build_workbook(result, takeoff))
    else:
        sys.stdout.buffer.write(_csv_payload(result, args.csv_target).encode("utf-8"))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
