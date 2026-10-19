"""Tabular exports: CSV and XLSX.

The XLSX writer is hand-rolled on ``zipfile`` + minimal SpreadsheetML rather
than pulling in openpyxl. The point of this project is an air-gapped pipeline
with an auditable dependency list, and a workbook of plain cells needs about a
hundred lines of XML. Strings are written inline, so there is no shared-string
table to keep consistent.
"""

from __future__ import annotations

import csv
import io
import zipfile
from datetime import datetime, timezone
from typing import Dict, Iterable, List, Optional, Sequence
from xml.sax.saxutils import escape

Row = Sequence[object]


# --------------------------------------------------------------------- CSV
def rows_to_csv(columns: Sequence[str], rows: Iterable[Row]) -> str:
    buf = io.StringIO(newline="")
    writer = csv.writer(buf, lineterminator="\r\n")
    writer.writerow(columns)
    for row in rows:
        writer.writerow(["" if v is None else v for v in row])
    return buf.getvalue()


# -------------------------------------------------------------------- XLSX
_CONTENT_TYPES = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
<Default Extension="xml" ContentType="application/xml"/>
<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
{sheets}
</Types>"""

_ROOT_RELS = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>"""

_STYLES = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
<fonts count="2"><font><sz val="11"/><name val="Calibri"/></font><font><b/><sz val="11"/><name val="Calibri"/></font></fonts>
<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>
<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>
<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
<cellXfs count="2"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/></cellXfs>
</styleSheet>"""


def _col_ref(index: int) -> str:
    """0 -> A, 25 -> Z, 26 -> AA."""
    ref = ""
    index += 1
    while index:
        index, rem = divmod(index - 1, 26)
        ref = chr(65 + rem) + ref
    return ref


def _safe_sheet_name(name: str, taken: set) -> str:
    cleaned = "".join("_" if c in "[]:*?/\\" else c for c in (name or "Sheet")).strip() or "Sheet"
    cleaned = cleaned[:31]
    candidate, n = cleaned, 1
    while candidate.lower() in taken:
        n += 1
        suffix = f"_{n}"
        candidate = cleaned[: 31 - len(suffix)] + suffix
    taken.add(candidate.lower())
    return candidate


def _cell(ref: str, value: object, style: int) -> str:
    if value is None or value == "":
        return ""
    if isinstance(value, bool):
        value = str(value)
    if isinstance(value, (int, float)):
        return f'<c r="{ref}" s="{style}"><v>{value}</v></c>'
    text = escape(str(value))
    return f'<c r="{ref}" s="{style}" t="inlineStr"><is><t xml:space="preserve">{text}</t></is></c>'


def _sheet_xml(columns: Sequence[str], rows: Iterable[Row]) -> str:
    parts = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
             '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">',
             f'<cols><col min="1" max="{max(len(columns), 1)}" width="22" customWidth="1"/></cols>',
             "<sheetData>"]
    parts.append('<row r="1">')
    for i, col in enumerate(columns):
        parts.append(_cell(f"{_col_ref(i)}1", col, 1))
    parts.append("</row>")
    for r_index, row in enumerate(rows, start=2):
        parts.append(f'<row r="{r_index}">')
        for c_index, value in enumerate(row):
            parts.append(_cell(f"{_col_ref(c_index)}{r_index}", value, 0))
        parts.append("</row>")
    parts.append("</sheetData></worksheet>")
    return "".join(parts)


def write_xlsx(sheets: List[dict]) -> bytes:
    """``sheets`` = ``[{"name": str, "columns": [...], "rows": [[...]]}, ...]``."""
    if not sheets:
        sheets = [{"name": "Empty", "columns": ["(no data)"], "rows": []}]

    taken: set = set()
    named = [{**s, "name": _safe_sheet_name(s.get("name", ""), taken)} for s in sheets]

    overrides = "\n".join(
        f'<Override PartName="/xl/worksheets/sheet{i}.xml" '
        f'ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>'
        for i in range(1, len(named) + 1)
    )
    workbook = (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" '
        'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets>'
        + "".join(
            f'<sheet name="{escape(s["name"])}" sheetId="{i}" r:id="rId{i}"/>'
            for i, s in enumerate(named, start=1)
        )
        + "</sheets></workbook>"
    )
    workbook_rels = (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
        + "".join(
            f'<Relationship Id="rId{i}" Type="http://schemas.openxmlformats.org/'
            f'officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{i}.xml"/>'
            for i in range(1, len(named) + 1)
        )
        + f'<Relationship Id="rId{len(named) + 1}" Type="http://schemas.openxmlformats.org/'
        'officeDocument/2006/relationships/styles" Target="styles.xml"/>'
        "</Relationships>"
    )

    buf = io.BytesIO()
    with zipfile.ZipFile(buf, "w", zipfile.ZIP_DEFLATED) as zf:
        zf.writestr("[Content_Types].xml", _CONTENT_TYPES.format(sheets=overrides))
        zf.writestr("_rels/.rels", _ROOT_RELS)
        zf.writestr("xl/workbook.xml", workbook)
        zf.writestr("xl/_rels/workbook.xml.rels", workbook_rels)
        zf.writestr("xl/styles.xml", _STYLES)
        for i, sheet in enumerate(named, start=1):
            zf.writestr(
                f"xl/worksheets/sheet{i}.xml",
                _sheet_xml(sheet.get("columns", []), sheet.get("rows", [])),
            )
    return buf.getvalue()


# ------------------------------------------------- project-specific shapes
TAKEOFF_COLUMNS = ["ID", "CSI Section", "Category", "Description", "Quantity",
                   "Unit", "Basis", "Confidence", "Origin", "Sheets", "Source Nodes"]


def takeoff_rows(takeoff: dict) -> List[Row]:
    rows: List[Row] = []
    for line in takeoff.get("lines", []):
        rows.append([
            line.get("id"), line.get("csiSection"), line.get("category"),
            line.get("description"), line.get("quantity"), line.get("unit"),
            line.get("basis"), line.get("confidence"), line.get("origin", "auto"),
            ", ".join(str(p) for p in line.get("sourcePages", [])),
            ", ".join(line.get("sourceNodeIds", [])[:8]),
        ])
    return rows


def schedule_sheet(schedule: dict) -> dict:
    """One extracted schedule as a workbook sheet definition."""
    columns = [c for c in schedule.get("columns", []) if not c.startswith("_")]
    derived = sorted({k for r in schedule.get("rows", []) for k in r if k.startswith("_")})
    header = columns + [k.lstrip("_") for k in derived]
    rows = [
        [r.get(c) for c in columns] + [r.get(d) for d in derived]
        for r in schedule.get("rows", [])
    ]
    return {"name": f"P{schedule.get('page')} {schedule.get('title', 'Schedule')}",
            "columns": header, "rows": rows}


def rooms_sheet(result: dict) -> dict:
    columns = ["Sheet", "Room", "Size", "Width (in)", "Height (in)",
               "Area (SF)", "Perimeter (LF)", "Source", "Fixtures"]
    rows: List[Row] = []
    for page in result.get("pages", []):
        for room in page.get("rooms", []):
            rows.append([
                page["page"], room["name"], room.get("sizeRaw"),
                room.get("widthInches"), room.get("heightInches"),
                room.get("areaSqFt"), room.get("perimeterFeet"),
                room.get("source"), ", ".join(room.get("fixtures", [])),
            ])
    return {"name": "Rooms", "columns": columns, "rows": rows}


def summary_sheet(result: dict) -> dict:
    meta = result.get("metadata", {})
    rows: List[Row] = [["Generated", datetime.now(timezone.utc).isoformat()]]
    rows += [[k, v] for k, v in meta.items()]
    rows += [["", ""]]
    for k, v in result.get("summary", {}).items():
        if not isinstance(v, dict):
            rows.append([k, v])
    return {"name": "Summary", "columns": ["Field", "Value"], "rows": rows}


def build_workbook(result: dict, takeoff: Optional[dict] = None) -> bytes:
    """Full export: summary + rooms + every schedule + the takeoff."""
    sheets = [summary_sheet(result), rooms_sheet(result)]
    for schedule in result.get("schedules", []):
        sheets.append(schedule_sheet(schedule))
    sheets.append({
        "name": "Takeoff",
        "columns": TAKEOFF_COLUMNS,
        "rows": takeoff_rows(takeoff or result.get("takeoff", {})),
    })
    return write_xlsx(sheets)
