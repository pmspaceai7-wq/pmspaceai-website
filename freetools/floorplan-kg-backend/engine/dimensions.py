"""Architectural dimension parsing.

Handles the notations that actually appear on the sample sheets:

    3'-0"        feet + inches, hyphenated (Revit default)
    11'-8 3/4"   feet + inches + fraction
    27'6"        feet + inches, unhyphenated
    5'           feet only
    34 1/2"      inches + fraction
    10"          plain inches

``Floorplan-Dimractor``'s parser only accepted whitespace between the foot mark
and the inches, so ``11'-8 3/4"`` silently degraded to 8.75 inches instead of
140.75. That off-by-a-storey error is why this module exists.
"""

from __future__ import annotations

import re
from dataclasses import dataclass, asdict
from typing import List, Optional

FOOT = r"['′’]"
INCH = r"[\"″”]"

_MASTER = re.compile(
    rf"""
    (?<![\d/.])
    (?:
        (?P<ft>\d{{1,4}})\s*{FOOT}
        (?:\s*-\s*|\s*)
        (?:
            (?P<ft_in>\d{{1,2}}(?:\.\d+)?)
            (?:\s+(?P<ft_fn>\d{{1,2}})\s*/\s*(?P<ft_fd>\d{{1,2}}))?
            \s*{INCH}
        )?
      |
        (?P<in>\d{{1,4}}(?:\.\d+)?)
        (?:\s+(?P<in_fn>\d{{1,2}})\s*/\s*(?P<in_fd>\d{{1,2}}))?
        \s*{INCH}
    )
    """,
    re.VERBOSE,
)

# "27'6\" X 12'0\"" — a room-size pair on one run.
_PAIR = re.compile(
    rf"(?P<a>\d+\s*{FOOT}[^X×x]*?{INCH}|\d+\s*{FOOT})\s*[X×x]\s*"
    rf"(?P<b>\d+\s*{FOOT}[^,\n]*?{INCH}|\d+\s*{FOOT})"
)


@dataclass(frozen=True)
class Dimension:
    raw: str
    inches: float
    feet: float
    start: int
    end: int

    def to_dict(self) -> dict:
        d = asdict(self)
        d["display"] = format_inches(self.inches)
        return d


def _frac(n: Optional[str], d: Optional[str]) -> float:
    if not n or not d:
        return 0.0
    try:
        den = float(d)
        return float(n) / den if den else 0.0
    except ValueError:
        return 0.0


def _value(m: "re.Match[str]") -> Optional[float]:
    if m.group("ft") is not None:
        total = float(m.group("ft")) * 12.0
        if m.group("ft_in") is not None:
            total += float(m.group("ft_in"))
            total += _frac(m.group("ft_fn"), m.group("ft_fd"))
        return total
    if m.group("in") is not None:
        return float(m.group("in")) + _frac(m.group("in_fn"), m.group("in_fd"))
    return None


def parse_dimension(text: str) -> Optional[float]:
    """Parse the first dimension in ``text`` and return inches, or None."""
    for m in _MASTER.finditer(text or ""):
        v = _value(m)
        if v is not None and v > 0:
            return round(v, 4)
    return None


def find_dimensions(text: str) -> List[Dimension]:
    """Return every dimension token in ``text``, left to right."""
    out: List[Dimension] = []
    for m in _MASTER.finditer(text or ""):
        v = _value(m)
        if v is None or v <= 0:
            continue
        out.append(
            Dimension(
                raw=m.group(0).strip(),
                inches=round(v, 4),
                feet=round(v / 12.0, 4),
                start=m.start(),
                end=m.end(),
            )
        )
    return out


def find_size_pair(text: str):
    """Return ``(width_in, height_in, raw)`` for a ``W x H`` room size run."""
    m = _PAIR.search(text or "")
    if not m:
        return None
    a = parse_dimension(m.group("a"))
    b = parse_dimension(m.group("b"))
    if a is None or b is None:
        return None
    return a, b, m.group(0).strip()


def format_inches(inches: float) -> str:
    """Render inches back as ``12'-6 1/2"`` for human-facing output."""
    if inches is None:
        return ""
    sign = "-" if inches < 0 else ""
    total = abs(inches)
    feet = int(total // 12)
    rem = total - feet * 12
    whole = int(rem)
    frac = rem - whole
    sixteenths = int(round(frac * 16))
    if sixteenths == 16:
        whole += 1
        sixteenths = 0
    if whole == 12:
        feet += 1
        whole = 0
    parts = f"{whole}"
    if sixteenths:
        num, den = sixteenths, 16
        while num % 2 == 0 and den % 2 == 0:
            num //= 2
            den //= 2
        parts += f" {num}/{den}"
    return f'{sign}{feet}\'-{parts}"'
