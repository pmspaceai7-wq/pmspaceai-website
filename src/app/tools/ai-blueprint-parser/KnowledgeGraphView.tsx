"use client";

import { useMemo, useRef, useState } from "react";

// Ported from floorplan-kg/web/src/components/GraphView.tsx (SVG column layout,
// type colors, legend filter, node provenance). Adds zoom + pan controls while
// keeping the original rendering approach.

export type KGNode = {
  id: string;
  type: string;
  label: string;
  properties?: Record<string, unknown>;
  provenance?: { extractor?: string; page?: number; bbox?: number[]; sourceText?: string };
};

export type KGEdge = {
  id: string;
  source: string;
  target: string;
  type: string;
  properties?: Record<string, unknown>;
};

const TYPE_COLORS: Record<string, string> = {
  Document: "#f0883e",
  Sheet: "#8957e5",
  Room: "#4f9dff",
  Opening: "#3fb950",
  OpeningType: "#238636",
  DoorType: "#1f6feb",
  Fixture: "#db6d28",
  Assembly: "#a371f7",
  Schedule: "#d29922",
  ScheduleRow: "#bb8009",
  AreaCallout: "#39c5cf",
};

const COLUMN_ORDER = [
  "Document", "Sheet", "Room", "Fixture", "Opening", "OpeningType",
  "Assembly", "AreaCallout", "Schedule", "ScheduleRow", "DoorType",
];

const MAX_RENDERED = 400;

function colorFor(type: string): string {
  return TYPE_COLORS[type] ?? "#8b949e";
}

export default function KnowledgeGraphView({
  nodes: allNodes,
  edges: allEdges,
  nodesByType,
}: {
  nodes: KGNode[];
  edges: KGEdge[];
  nodesByType?: Record<string, number>;
}) {
  const [hidden, setHidden] = useState<Set<string>>(new Set());
  const [selected, setSelected] = useState<KGNode | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const dragRef = useRef<{ x: number; y: number; px: number; py: number } | null>(null);

  const types = useMemo(() => {
    const fromData = new Set(allNodes.map((n) => n.type));
    if (nodesByType) Object.keys(nodesByType).forEach((t) => fromData.add(t));
    return Array.from(fromData).sort(
      (a, b) => COLUMN_ORDER.indexOf(a) - COLUMN_ORDER.indexOf(b)
    );
  }, [allNodes, nodesByType]);

  const { positions, nodes, edges, truncated, width, height } = useMemo(() => {
    const visible = allNodes.filter((n) => !hidden.has(n.type));
    const capped = visible.slice(0, MAX_RENDERED);
    const ids = new Set(capped.map((n) => n.id));
    const columns = new Map<string, KGNode[]>();
    for (const node of capped) {
      const list = columns.get(node.type) ?? [];
      list.push(node);
      columns.set(node.type, list);
    }
    const ordered = Array.from(columns.keys()).sort(
      (a, b) => COLUMN_ORDER.indexOf(a) - COLUMN_ORDER.indexOf(b)
    );
    const colGap = 150;
    const rowGap = 24;
    const tallest = Math.max(1, ...ordered.map((t) => (columns.get(t) ?? []).length));
    const pos = new Map<string, { x: number; y: number }>();
    ordered.forEach((type, colIndex) => {
      const list = columns.get(type) ?? [];
      const columnHeight = (list.length - 1) * rowGap;
      const top = ((tallest - 1) * rowGap - columnHeight) / 2;
      list.forEach((node, i) => {
        pos.set(node.id, { x: 70 + colIndex * colGap, y: 50 + top + i * rowGap });
      });
    });
    return {
      positions: pos,
      nodes: capped,
      edges: allEdges.filter((e) => ids.has(e.source) && ids.has(e.target)),
      truncated: visible.length - capped.length,
      width: Math.max(360, 70 + ordered.length * colGap),
      height: Math.max(220, 100 + (tallest - 1) * rowGap),
    };
  }, [allNodes, allEdges, hidden]);

  function toggleType(type: string) {
    setSelected(null);
    setHidden((prev) => {
      const next = new Set(prev);
      if (next.has(type)) next.delete(type);
      else next.add(type);
      return next;
    });
  }

  return (
    <div>
      <div className="flex items-center justify-between gap-3 flex-wrap mb-3">
        <p className="text-sm text-white/60">
          {allNodes.length} nodes • {allEdges.length} edges
          <span className="text-white/30"> · {nodes.length} rendered — click a node for provenance</span>
        </p>
        <div className="flex items-center gap-2">
          <button onClick={() => setZoom((z) => Math.min(3, +(z + 0.2).toFixed(2)))} className="text-xs bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-white/70 hover:bg-white/10">+</button>
          <span className="text-xs text-white/40 font-mono w-12 text-center">{Math.round(zoom * 100)}%</span>
          <button onClick={() => setZoom((z) => Math.max(0.3, +(z - 0.2).toFixed(2)))} className="text-xs bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-white/70 hover:bg-white/10">−</button>
          <button onClick={() => { setZoom(1); setPan({ x: 0, y: 0 }); }} className="text-xs bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-white/70 hover:bg-white/10">Reset</button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => toggleType(type)}
            aria-pressed={!hidden.has(type)}
            className="text-xs rounded-full px-3 py-1.5 border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 transition-colors"
            style={{ opacity: hidden.has(type) ? 0.4 : 1 }}
          >
            <i style={{ background: colorFor(type), width: 9, height: 9, borderRadius: "50%", display: "inline-block", marginRight: 6 }} />
            {type} ({nodesByType?.[type] ?? allNodes.filter((n) => n.type === type).length})
          </button>
        ))}
      </div>

      {truncated > 0 && (
        <p className="text-xs text-amber-300/90 mb-3">
          Showing first {MAX_RENDERED} nodes; {truncated} more hidden. Toggle types above to narrow the view.
        </p>
      )}

      <div
        className="rounded-xl border border-white/10 bg-black overflow-auto cursor-grab active:cursor-grabbing"
        style={{ maxHeight: 560 }}
        onMouseDown={(e) => { dragRef.current = { x: e.clientX, y: e.clientY, px: pan.x, py: pan.y }; }}
        onMouseMove={(e) => {
          if (!dragRef.current) return;
          setPan({ x: dragRef.current.px + (e.clientX - dragRef.current.x), y: dragRef.current.py + (e.clientY - dragRef.current.y) });
        }}
        onMouseUp={() => { dragRef.current = null; }}
        onMouseLeave={() => { dragRef.current = null; }}
        onWheel={(e) => {
          if (!e.ctrlKey && !e.metaKey) return;
          e.preventDefault();
          setZoom((z) => Math.min(3, Math.max(0.3, +(z - Math.sign(e.deltaY) * 0.1).toFixed(2))));
        }}
      >
        <svg
          width={width * zoom + Math.abs(pan.x)}
          height={height * zoom}
          viewBox={`${-pan.x} ${-pan.y} ${width} ${height}`}
          role="img"
          aria-label="Floorplan knowledge graph"
        >
          <g transform={`scale(${zoom})`}>
            <g stroke="rgba(255,255,255,0.18)" strokeWidth="1" opacity="0.7">
              {edges.map((edge) => {
                const a = positions.get(edge.source);
                const b = positions.get(edge.target);
                if (!a || !b) return null;
                return <line key={edge.id} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />;
              })}
            </g>
            <g>
              {nodes.map((node) => {
                const p = positions.get(node.id);
                if (!p) return null;
                const isSelected = selected?.id === node.id;
                return (
                  <g key={node.id}>
                    <circle
                      cx={p.x}
                      cy={p.y}
                      r={isSelected ? 8 : 5}
                      fill={colorFor(node.type)}
                      stroke={isSelected ? "#fff" : "none"}
                      strokeWidth="2"
                      style={{ cursor: "pointer" }}
                      onClick={() => setSelected(node)}
                    >
                      <title>{`${node.type}: ${node.label}`}</title>
                    </circle>
                  </g>
                );
              })}
            </g>
          </g>
        </svg>
      </div>
      <p className="text-xs text-white/30 mt-2">Drag to pan · Ctrl/Cmd + scroll to zoom · Click a node to inspect provenance</p>

      {selected && (
        <div className="mt-4 bg-gray-900/50 border border-white/10 rounded-xl p-5">
          <div className="flex items-start justify-between gap-3">
            <h4 className="font-semibold">{selected.type} — {selected.label}</h4>
            <button onClick={() => setSelected(null)} className="text-xs bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-white/70 hover:bg-white/10">Close</button>
          </div>
          <p className="font-mono text-xs text-white/40 mt-1 break-all">{selected.id}</p>
          {selected.provenance && (
            <p className="text-sm text-white/60 mt-2">
              <strong className="text-white/80">Provenance:</strong> extractor{" "}
              <code className="font-mono text-xs">{selected.provenance.extractor}</code>
              {selected.provenance.page != null && <> · sheet {selected.provenance.page}</>}
              {selected.provenance.bbox && <> · bbox [{selected.provenance.bbox.map((v) => Number(v).toFixed(0)).join(", ")}]</>}
              {selected.provenance.sourceText && <> · source text “{selected.provenance.sourceText}”</>}
            </p>
          )}
          {selected.properties && Object.keys(selected.properties).length > 0 && (
            <table className="w-full text-sm mt-3">
              <tbody>
                {Object.entries(selected.properties).map(([key, value]) => (
                  <tr key={key} className="border-t border-white/5">
                    <td className="py-1.5 pr-3 text-white/40 text-xs w-40">{key}</td>
                    <td className="py-1.5 font-mono text-xs text-white/70 break-all">{JSON.stringify(value)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}
