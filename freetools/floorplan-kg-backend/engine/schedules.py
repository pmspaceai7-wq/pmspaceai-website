"""Schedule (table) extraction from plan sheets.

Ruled-line table finding gives us cells, but CAD-exported schedules rarely
land on a clean grid: in the sample door schedule pdfplumber splits the header
as ``['Type', 'Mark W', 'idth', 'Height', 'Comments']`` and then packs mark and
width into one body cell. Trusting that grid yields garbage columns.

So the grid is used only to *locate* schedules; the columns are re-derived from
header keywords and the body rows are re-tokenised. Opening schedules (doors,
windows) get a typed parser because they drive the takeoff; anything else is
passed through as generic rows so it can still be exported to CSV/Excel.
"""

from __future__ import annotations

import re
from dataclasses import dataclass, field
from typing import Dict, List, Optional

from .dimensions import find_dimensions, parse_dimension
from .extract import Page
from .textnorm import normalize

_HEADER_KEYWORDS = [
    "Mark", "Type", "Width", "Height", "Thickness", "Count", "Qty", "Quantity",
    "Size", "Description", "Comments", "Remarks", "Notes", "Level", "Area",
    "Material", "Finish", "Model", "Manufacturer", "Room", "Number", "Head",
    "Frame", "Glazing", "Operation", "Rough Opening", "Sill",
]

_KIND_PATTERNS = [
    ("door", re.compile(r"\bDOOR\s+SCHEDULE\b")),
    ("window", re.compile(r"\bWINDOW\s+SCHEDULE\b")),
    ("room", re.compile(r"\bROOM\s+(?:FINISH\s+)?SCHEDULE\b")),
    ("area", re.compile(r"\b(?:SQ\.?\s*FOOTAGE|SQUARE\s+FOOTAGE|AREA\s+SCHEDULE)\b")),
    ("equipment", re.compile(r"\b(?:EQUIPMENT|APPLIANCE|FIXTURE|PLUMBING)\s+SCHEDULE\b")),
    ("finish", re.compile(r"\bFINISH\s+SCHEDULE\b")),
    ("generic", re.compile(r"\bSCHEDULE\b")),
]

_DIM_TOKEN = re.compile(r"\d+\s*['′][^\"″]*[\"″]|\d+(?:\.\d+)?\s*[\"″]|\d+\s*['′]")


@dataclass
class Schedule:
    id: str
    title: str
    kind: str
    page: int
    columns: List[str]
    rows: List[Dict[str, Optional[str]]] = field(default_factory=list)
    warnings: List[str] = field(default_factory=list)

    @property
    def row_count(self) -> int:
        return len(self.rows)

    def to_dict(self) -> dict:
        return {
            "id": self.id,
            "title": self.title,
            "kind": self.kind,
            "page": self.page,
            "columns": self.columns,
            "rows": self.rows,
            "rowCount": self.row_count,
            "warnings": self.warnings,
        }


def _cells(row) -> List[str]:
    return [normalize(c or "") for c in (row or [])]


def _joined(row) -> str:
    return " ".join(c for c in _cells(row) if c).strip()


def _classify(title: str) -> Optional[str]:
    upper = title.upper()
    for kind, pattern in _KIND_PATTERNS:
        if pattern.search(upper):
            return kind
    return None


def _derive_columns(header_text: str) -> List[str]:
    """Recover logical columns from a header row whose cells were mis-split.

    ``"Type Mark W idth Height Comme nts"`` -> ``[Type, Mark, Width, Height,
    Comments]``. Works by scanning for known keywords in the de-spaced header,
    which survives arbitrary cell-boundary damage.
    """
    squashed = re.sub(r"\s+", "", header_text).lower()
    found: List[tuple] = []
    for keyword in _HEADER_KEYWORDS:
        key = keyword.replace(" ", "").lower()
        start = 0
        while True:
            idx = squashed.find(key, start)
            if idx < 0:
                break
            found.append((idx, keyword))
            start = idx + len(key)
    found.sort()
    columns: List[str] = []
    consumed_to = -1
    for idx, keyword in found:
        if idx < consumed_to:
            continue  # "Rough Opening" swallowed a nested keyword
        columns.append(keyword)
        consumed_to = idx + len(keyword.replace(" ", ""))
    return columns


_OPENING_ROW = re.compile(
    r"^(?P<type>.*?)\s*(?P<mark>\d{1,3})\s+"
    r"(?P<width>\d+\s*['′][^\s]*[\"″]|\d+(?:\.\d+)?\s*[\"″])\s+"
    r"(?P<height>\d+\s*['′][^\s]*[\"″]|\d+(?:\.\d+)?\s*[\"″])"
    r"\s*(?P<comments>.*)$"
)


def _parse_opening_row(text: str) -> Optional[Dict[str, Optional[str]]]:
    m = _OPENING_ROW.match(text.strip())
    if not m:
        return None
    width = parse_dimension(m.group("width"))
    height = parse_dimension(m.group("height"))
    if width is None or height is None:
        return None
    return {
        "Type": m.group("type").strip() or None,
        "Mark": m.group("mark"),
        "Width": m.group("width").strip(),
        "Height": m.group("height").strip(),
        "Comments": m.group("comments").strip() or None,
        "_widthInches": round(width, 2),
        "_heightInches": round(height, 2),
        "_areaSqFt": round(width * height / 144.0, 3),
    }


def _generic_row(columns: List[str], cells: List[str]) -> Optional[Dict[str, Optional[str]]]:
    values = [c for c in cells if c]
    if not values:
        return None
    row: Dict[str, Optional[str]] = {}
    for i, col in enumerate(columns):
        row[col] = values[i] if i < len(values) else None
    extra = values[len(columns):]
    if extra:
        row["_extra"] = " ".join(extra)
    return row


def extract_schedules(page: Page) -> List[Schedule]:
    """Every schedule table detected on one page."""
    out: List[Schedule] = []
    for t_index, table in enumerate(page.tables or []):
        if not table or len(table) < 2:
            continue

        title, title_row = "", -1
        for r_index, row in enumerate(table[:3]):
            candidate = _joined(row)
            if candidate and _classify(candidate):
                title, title_row = candidate, r_index
                break
        if not title:
            continue

        kind = _classify(title) or "generic"
        body = table[title_row + 1:]
        if not body:
            continue

        columns = _derive_columns(_joined(body[0]))
        if len(columns) >= 2:
            data_rows = body[1:]
        else:
            columns, data_rows = [], body

        schedule = Schedule(
            id=f"schedule:{page.number}:{t_index}",
            title=title,
            kind=kind,
            page=page.number,
            columns=columns or ["Value"],
        )

        typed = kind in ("door", "window")
        for row in data_rows:
            cells = _cells(row)
            text = " ".join(c for c in cells if c).strip()
            if not text:
                continue
            parsed = _parse_opening_row(text) if typed else None
            if parsed is None:
                if typed:
                    schedule.warnings.append(f"unparsed row: {text[:60]}")
                parsed = _generic_row(schedule.columns, cells)
            if parsed:
                schedule.rows.append(parsed)

        if typed and schedule.rows:
            schedule.columns = ["Mark", "Type", "Width", "Height", "Comments"]
        if schedule.rows:
            out.append(schedule)

    return out


def extract_all(pages: List[Page]) -> List[Schedule]:
    seen: set = set()
    out: List[Schedule] = []
    for page in pages:
        for schedule in extract_schedules(page):
            # The same title block repeats on every sheet of a set; a schedule
            # with an identical title and identical rows is the same schedule.
            key = (schedule.kind, schedule.title, len(schedule.rows),
                   str(schedule.rows[:2]))
            if key in seen:
                continue
            seen.add(key)
            out.append(schedule)
    return out
