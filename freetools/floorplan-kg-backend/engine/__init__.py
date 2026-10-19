"""floorplan-kg engine — offline architectural floorplan PDF → knowledge graph.

Pure-stdlib except for the two PDF readers (PyMuPDF, pdfplumber). No network
calls, no cloud OCR, no LLM required: the graph and the quantity takeoffs are
built deterministically so they are reproducible and unit-testable.
"""

__version__ = "0.1.0"
