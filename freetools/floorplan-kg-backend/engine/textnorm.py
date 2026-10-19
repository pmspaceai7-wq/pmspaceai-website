"""Normalisation for the text CAD exporters actually emit.

Two artefacts show up constantly in architectural PDFs and both wreck naive
regex extraction:

* **Quadrupled glyphs** — Revit/AutoCAD title-block text frequently round-trips
  as ``FFFF....LLLL....RRRR`` instead of ``F.L.R``. Every character is repeated
  a fixed number of times.
* **Mirrored runs** — text rotated 180 degrees is extracted right-to-left, so
  ``PROJECT #:`` arrives as ``:# TCEJORP``.
"""

from __future__ import annotations

import re

_WS = re.compile(r"[ \t ]+")


def _collapse_token(token: str, factor: int) -> str:
    runs = [(m.group(1), len(m.group(0))) for m in re.finditer(r"(.)\1*", token)]
    if len(runs) < 2 or not all(n % factor == 0 for _, n in runs):
        return token
    return "".join(ch * (n // factor) for ch, n in runs)


def collapse_repeats(text: str, factor: int = 4) -> str:
    """Undo ``FFFF....`` style glyph repetition, token by token.

    Applied only where *every* character run in a token is an exact multiple of
    ``factor``, so genuine doubles ("BOOKKEEPER") are left alone. Whitespace is
    not repeated by the exporter, so tokens are handled independently rather
    than testing the string as a whole.
    """
    if not text or factor < 2:
        return text
    parts = re.split(r"(\s+)", text)
    collapsed = [p if p.strip() == "" else _collapse_token(p, factor) for p in parts]
    out = "".join(collapsed)
    # Require the string to at least halve, otherwise an incidental run like
    # "2000 SF" could be rewritten by coincidence.
    return out if out != text and len(out) * 2 <= len(text) else text


_MIRROR_HINT = re.compile(r"\b(?:TCEJORP|EPYT|ELUDEHCS|NALP|LLAW|ROOLF|HTUOS|EMAN)\b")


def looks_mirrored(text: str) -> bool:
    """True when the run reads as reversed English (rotated-text artefact)."""
    return bool(_MIRROR_HINT.search(text.upper()))


def unmirror(text: str) -> str:
    return text[::-1]


def normalize(text: str) -> str:
    """Canonicalise a single extracted text run."""
    if text is None:
        return ""
    out = text.replace("’", "'").replace("′", "'")
    out = out.replace("”", '"').replace("″", '"')
    out = out.replace("–", "-").replace("—", "-")
    out = out.replace("\n", " ")
    out = collapse_repeats(out.strip())
    if looks_mirrored(out):
        out = unmirror(out)
    return _WS.sub(" ", out).strip()


def is_noise(text: str) -> bool:
    """Reject title-block soup that carries no extractable semantics."""
    if not text:
        return True
    letters = [c for c in text if c.isalpha()]
    if len(text) > 40 and len(letters) / max(len(text), 1) < 0.35:
        return True
    return False
