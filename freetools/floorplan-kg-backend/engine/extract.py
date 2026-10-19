"""PDF -> geometry-aware text runs.

Everything downstream (rooms, schedules, the graph) consumes ``TextRun``s, so
the choice of PDF backend stays an implementation detail. Both backends emit
the same shape and the same coordinate convention: PDF points, origin at the
top-left of the page, ``[x0, y0, x1, y1]``.
"""

from __future__ import annotations

import hashlib
from dataclasses import dataclass, field
from typing import List, Literal, Optional

from .textnorm import normalize

Backend = Literal["pymupdf", "pdfplumber"]


@dataclass
class TextRun:
    text: str
    bbox: List[float]
    page: int
    raw: str = ""

    @property
    def cx(self) -> float:
        return (self.bbox[0] + self.bbox[2]) / 2.0

    @property
    def cy(self) -> float:
        return (self.bbox[1] + self.bbox[3]) / 2.0

    @property
    def height(self) -> float:
        return abs(self.bbox[3] - self.bbox[1])

    def to_dict(self) -> dict:
        return {"text": self.text, "bbox": [round(v, 2) for v in self.bbox], "page": self.page}


@dataclass
class Page:
    number: int
    width: float
    height: float
    runs: List[TextRun] = field(default_factory=list)
    tables: List[List[List[Optional[str]]]] = field(default_factory=list)


@dataclass
class Document:
    path: str
    filename: str
    backend: Backend
    sha256: str
    pages: List[Page] = field(default_factory=list)

    @property
    def page_count(self) -> int:
        return len(self.pages)


def _sha256(path: str) -> str:
    h = hashlib.sha256()
    with open(path, "rb") as fh:
        for block in iter(lambda: fh.read(1 << 20), b""):
            h.update(block)
    return h.hexdigest()


def _extract_pymupdf(path: str) -> List[Page]:
    import pymupdf  # PyMuPDF >= 1.24 exposes the non-deprecated name

    pages: List[Page] = []
    with pymupdf.open(path) as doc:
        for index, page in enumerate(doc, start=1):
            rect = page.rect
            out = Page(number=index, width=rect.width, height=rect.height)
            for block in page.get_text("dict").get("blocks", []):
                for line in block.get("lines", []):
                    spans = line.get("spans", [])
                    if not spans:
                        continue
                    raw = "".join(s.get("text", "") for s in spans)
                    text = normalize(raw)
                    if not text:
                        continue
                    x0 = min(s["bbox"][0] for s in spans)
                    y0 = min(s["bbox"][1] for s in spans)
                    x1 = max(s["bbox"][2] for s in spans)
                    y1 = max(s["bbox"][3] for s in spans)
                    out.runs.append(TextRun(text, [x0, y0, x1, y1], index, raw))
            pages.append(out)
    return pages


def _extract_pdfplumber(path: str) -> List[Page]:
    import pdfplumber

    pages: List[Page] = []
    with pdfplumber.open(path) as pdf:
        for index, page in enumerate(pdf.pages, start=1):
            out = Page(number=index, width=float(page.width), height=float(page.height))
            for word in page.extract_words(use_text_flow=True, keep_blank_chars=False):
                text = normalize(word["text"])
                if not text:
                    continue
                out.runs.append(
                    TextRun(
                        text,
                        [float(word["x0"]), float(word["top"]),
                         float(word["x1"]), float(word["bottom"])],
                        index,
                        word["text"],
                    )
                )
            try:
                out.tables = page.extract_tables() or []
            except Exception:  # malformed table grids should never kill a page
                out.tables = []
            pages.append(out)
    return pages


def load_document(path: str, backend: Backend = "pymupdf") -> Document:
    """Read ``path`` into the backend-neutral :class:`Document` model.

    Tables are always sourced from pdfplumber — PyMuPDF has no comparable ruled
    -line table finder, and schedules are the whole point of the table pass —
    so a ``pymupdf`` run does a second, table-only pdfplumber pass.
    """
    if backend not in ("pymupdf", "pdfplumber"):
        raise ValueError(f"unknown backend: {backend!r}")

    pages = _extract_pymupdf(path) if backend == "pymupdf" else _extract_pdfplumber(path)

    if backend == "pymupdf":
        try:
            import pdfplumber

            with pdfplumber.open(path) as pdf:
                for page, plumber_page in zip(pages, pdf.pages):
                    try:
                        page.tables = plumber_page.extract_tables() or []
                    except Exception:
                        page.tables = []
        except Exception:
            pass

    import os

    return Document(
        path=path,
        filename=os.path.basename(path),
        backend=backend,
        sha256=_sha256(path),
        pages=pages,
    )
