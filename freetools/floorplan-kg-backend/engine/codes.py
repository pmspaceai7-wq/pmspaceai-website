"""Symbol, tag and code detection on plan sheets.

Three families, each with its own semantics for takeoff:

* **Opening codes** — ``3040SH`` encodes a 3'-0" x 4'-0" single-hung window.
  Decoding the digits gives a real size, not just a string, which is what makes
  a window takeoff possible without touching the schedule table.
* **Fixture / appliance tags** — ``REF``, ``DW``, ``WH``, ``HB`` and the
  spelled-out equivalents.
* **Assembly tags** — ``2 X 6`` stud walls, ``11-7/8" I-JOIST``.
"""

from __future__ import annotations

import re
from dataclasses import dataclass
from typing import Dict, List

# 3040SH / 2030SH: WWHH + 2-3 letter operation suffix.
_OPENING = re.compile(r"\b(?P<w>[0-9]{2})(?P<h>[0-9]{2})(?P<op>[A-Z]{2,3})\b")

# Generic manufacturer/cabinet code: DB24, SB42FH, MW30.
_GENERIC = re.compile(r"\b[A-Z]{2,4}[0-9]{2,4}[A-Z]{0,3}\b")

# 2 X 6 / 2x6 stud and plate callouts.
_ASSEMBLY = re.compile(r"\b(?P<a>[2468])\s*[Xx]\s*(?P<b>[2-9]|1[02])\b")

OPENING_OPS: Dict[str, str] = {
    "SH": "Single Hung",
    "DH": "Double Hung",
    "SL": "Slider",
    "FX": "Fixed",
    "CS": "Casement",
    "AW": "Awning",
    "PD": "Patio Door",
}

# tag -> (canonical name, takeoff category)
FIXTURE_TAGS: Dict[str, tuple] = {
    "REF": ("Refrigerator", "Appliance"),
    "DW": ("Dishwasher", "Appliance"),
    "WH": ("Water Heater", "Plumbing"),
    "HB": ("Hose Bibb", "Plumbing"),
    "WC": ("Water Closet", "Plumbing"),
    "MW": ("Microwave", "Appliance"),
}

FIXTURE_PHRASES: Dict[str, tuple] = {
    "RANGE": ("Range", "Appliance"),
    "WALL OVEN": ("Wall Oven", "Appliance"),
    "REFRIGERATOR": ("Refrigerator", "Appliance"),
    "FREEZER": ("Freezer", "Appliance"),
    "DISHWASHER": ("Dishwasher", "Appliance"),
    "WASHER": ("Clothes Washer", "Appliance"),
    "DRYER": ("Clothes Dryer", "Appliance"),
    "ICE MKR": ("Ice Maker", "Appliance"),
    "UTILITY SINK": ("Utility Sink", "Plumbing"),
    "SHOWER": ("Shower", "Plumbing"),
    "WATER HEATER": ("Water Heater", "Plumbing"),
    "ELECT. PANEL": ("Electrical Panel", "Electrical"),
    "ELECTRICAL PANEL": ("Electrical Panel", "Electrical"),
    "HALF WALL": ("Half Wall", "Architectural"),
    "ARCHED OPENING": ("Arched Opening", "Architectural"),
    "BUILT-IN BOOKSHELF": ("Built-in Bookshelf", "Millwork"),
    "BOOKSHELF": ("Built-in Bookshelf", "Millwork"),
    "HAND RAIL": ("Hand Rail", "Architectural"),
    "LINEN": ("Linen Storage", "Millwork"),
    "DRAWERS": ("Drawer Bank", "Millwork"),
    "PANTRY": ("Pantry", "Millwork"),
}

# Phrases that name a room, never a fixture — checked before FIXTURE_PHRASES.
_ROOMISH = {"PANTRY"}


@dataclass(frozen=True)
class Detection:
    kind: str           # "opening" | "fixture" | "assembly" | "code"
    code: str
    label: str
    category: str
    attrs: dict

    def to_dict(self) -> dict:
        return {
            "kind": self.kind,
            "code": self.code,
            "label": self.label,
            "category": self.category,
            **({"attrs": self.attrs} if self.attrs else {}),
        }


def decode_opening(code: str):
    """``3040SH`` -> width/height in inches plus the operation name."""
    m = _OPENING.fullmatch(code.upper())
    if not m:
        return None
    op = m.group("op")
    if op not in OPENING_OPS:
        return None
    # "30" reads as 3'-0", not 30 inches — first digit is feet, second inches.
    def _ft_in(pair: str) -> int:
        return int(pair[0]) * 12 + int(pair[1])

    return {
        "widthInches": _ft_in(m.group("w")),
        "heightInches": _ft_in(m.group("h")),
        "operation": OPENING_OPS[op],
        "operationCode": op,
    }


def detect(text: str) -> List[Detection]:
    """All symbol detections in a single normalised text run."""
    if not text:
        return []
    upper = text.upper()
    seen: set = set()
    out: List[Detection] = []

    def add(det: Detection) -> None:
        key = (det.kind, det.code)
        if key not in seen:
            seen.add(key)
            out.append(det)

    for m in _OPENING.finditer(upper):
        info = decode_opening(m.group(0))
        if info:
            add(Detection("opening", m.group(0), f"{info['operation']} Window", "Window", info))

    for m in _GENERIC.finditer(upper):
        code = m.group(0)
        if decode_opening(code):
            continue
        add(Detection("code", code, code, "Tag", {}))

    for phrase, (label, category) in FIXTURE_PHRASES.items():
        if phrase in _ROOMISH:
            continue
        if re.search(rf"(?<![A-Z]){re.escape(phrase)}(?![A-Z])", upper):
            add(Detection("fixture", phrase, label, category, {}))

    for tag, (label, category) in FIXTURE_TAGS.items():
        if re.search(rf"(?<![A-Z0-9]){tag}(?![A-Z0-9])", upper):
            add(Detection("fixture", tag, label, category, {}))

    for m in _ASSEMBLY.finditer(upper):
        code = f"{m.group('a')}x{m.group('b')}"
        add(Detection("assembly", code, f"{code} Framing Member", "Framing",
                      {"nominalDepthInches": int(m.group("b"))}))

    return out
