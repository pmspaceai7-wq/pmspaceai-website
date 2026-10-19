"""VeritasGraph integration CLI — status, push, ask.

Reads a JSON action on stdin, writes a JSON result on stdout. Always exits 0
with ``{"ok": false, "error": ...}`` on failure rather than raising, because
the whole integration is optional: the app must stay fully usable when no
Ollama runtime and no VeritasGraph engine are present.

    echo '{"action":"status"}' | python -m engine.mcp_cli
"""

from __future__ import annotations

import json
import sys
from typing import Any, Dict

from .mcp_bridge import push_to_engine, to_ingest_text, to_veritasgraph_graph


def _status() -> Dict[str, Any]:
    try:
        from studio_api.graphrag_engine import engine
    except Exception as exc:  # noqa: BLE001
        return {"ok": True, "engineAvailable": False, "reason": str(exc)}
    try:
        stats = engine.graph().get("stats", {})
    except Exception as exc:  # noqa: BLE001
        return {"ok": True, "engineAvailable": False, "reason": str(exc)}
    return {"ok": True, "engineAvailable": True, "graphStats": stats}


def _ask(payload: Dict[str, Any]) -> Dict[str, Any]:
    question = str(payload.get("question", "")).strip()
    if not question:
        return {"ok": False, "error": "question is required"}
    try:
        from studio_api.graphrag_engine import engine
    except Exception as exc:  # noqa: BLE001
        return {"ok": False, "error": f"VeritasGraph engine unavailable: {exc}"}

    import os

    model = str(payload.get("model") or os.getenv("VERITASGRAPH_MODEL", "qwen3:8b"))
    try:
        answer = engine.query(
            question, model,
            int(payload.get("maxDepth", 2)),
            int(payload.get("maxNodes", 30)),
        )
        return {"ok": True, **answer}
    except Exception as exc:  # noqa: BLE001
        return {"ok": False, "error": str(exc)}


def main(argv=None) -> int:
    try:
        payload = json.loads(sys.stdin.buffer.read().decode("utf-8") or "{}")
    except (ValueError, UnicodeDecodeError) as exc:
        json.dump({"ok": False, "error": f"invalid JSON: {exc}"}, sys.stdout)
        return 0

    action = payload.get("action", "status")

    if action == "status":
        out = _status()
    elif action == "preview":
        result = payload.get("result") or {}
        out = {"ok": True, "graph": to_veritasgraph_graph(result),
               "ingestText": to_ingest_text(result)}
    elif action == "push":
        result = payload.get("result")
        if not isinstance(result, dict):
            out = {"ok": False, "error": "result is required"}
        else:
            out = push_to_engine(result, str(payload.get("sourceType", "extracted")))
    elif action == "ask":
        out = _ask(payload)
    else:
        out = {"ok": False, "error": f"unknown action: {action!r}"}

    json.dump(out, sys.stdout, ensure_ascii=False, default=str)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
