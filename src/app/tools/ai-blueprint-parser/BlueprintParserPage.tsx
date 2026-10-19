"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import KnowledgeGraphView from "./KnowledgeGraphView";
import {
  FileSearch,
  Upload,
  Copy,
  Check,
  Printer,
  FileText,
  LayoutTemplate,
  Image as ImageIcon,
  Loader2,
  AlertTriangle,
  FileSpreadsheet,
  Wand2,
  ArrowRight,
} from "lucide-react";

type TextItem = {
  str: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

type PageTable = {
  rowCount: number;
  colCount: number;
  rows: string[][];
};

type PageResult = {
  pageNum: number;
  text: string;
  items: TextItem[];
  tables: PageTable[];
  thumbnail: string;
};

type ExtractionSummary = {
  totalPages: number;
  rooms: number;
  dimensions: number;
  openings: number;
  fixtures: number;
  schedules: number;
  scheduleRows: number;
  measuredAreaSqFt: number;
  takeoffLines: number;
  nodeCount?: number;
  edgeCount?: number;
  nodesByType?: Record<string, number>;
  edgesByType?: Record<string, number>;
};

type RoomData = {
  id: string;
  name: string;
  page: number;
  widthDisplay?: string | null;
  heightDisplay?: string | null;
  sizeRaw?: string | null;
  areaSqFt?: number | null;
  perimeterFeet?: number | null;
  fixtures?: string[];
  source?: string;
};

type ScheduleData = {
  id: string;
  title: string;
  kind?: string;
  page: number;
  columns: string[];
  rows: Array<Record<string, string | number | null>>;
  rowCount: number;
  warnings: string[];
};

type TakeoffLine = {
  id: string;
  csiSection: string;
  category: string;
  description: string;
  quantity: number;
  unit: string;
  basis: string;
  confidence: string;
};

type GraphNode = {
  id: string;
  type: string;
  label: string;
  properties?: Record<string, unknown>;
  provenance?: { extractor?: string; page?: number; sourceText?: string };
};

type GraphEdge = {
  id: string;
  source: string;
  target: string;
  type: string;
  properties?: Record<string, unknown>;
};

type ExtractionResult = {
  metadata?: {
    engineVersion?: string;
    processedAt?: string;
    originalFilename?: string;
    processingMethod?: string;
    totalPages?: number;
    durationMs?: number;
  };
  summary?: ExtractionSummary;
  pages?: Array<{
    page: number;
    rooms?: RoomData[];
    dimensions?: Array<{ raw?: string; display?: string; page?: number }>;
    openings?: Array<{ code?: string; label?: string; page?: number; roomId?: string }>;
    fixtures?: Array<{ code?: string; label?: string; category?: string; page?: number; roomId?: string }>;
  }>;
  schedules?: ScheduleData[];
  takeoff?: {
    lines?: TakeoffLine[];
    assumptions?: Record<string, number>;
    totals?: { lineCount?: number; byUnit?: Record<string, number>; byCategory?: Record<string, number> };
  };
  graph?: { nodes?: GraphNode[]; edges?: GraphEdge[]; stats?: { nodeCount?: number; edgeCount?: number; nodesByType?: Record<string, number>; edgesByType?: Record<string, number> } };
};

const TOLERANCE = 6;
const COL_TOLERANCE = 14;
const THUMB_SCALE = 0.6;

function clusterBy<T>(items: T[], key: (item: T) => number, tolerance: number): T[][] {
  if (items.length === 0) return [];
  const sorted = [...items].sort((a, b) => key(a) - key(b));
  const groups: T[][] = [[sorted[0]]];
  for (let i = 1; i < sorted.length; i++) {
    const current = sorted[i];
    const lastGroup = groups[groups.length - 1];
    const lastKey = key(lastGroup[lastGroup.length - 1]);
    if (key(current) - lastKey <= tolerance) {
      lastGroup.push(current);
    } else {
      groups.push([current]);
    }
  }
  return groups;
}

function buildTables(items: TextItem[]): PageTable[] {
  if (items.length === 0) return [];

  // Group text items into rows by approximate y position.
  const rowGroups = clusterBy(items, (i) => i.y, TOLERANCE);
  const rows = rowGroups
    .map((group) => group.sort((a, b) => a.x - b.x))
    .sort((a, b) => a[0].y - b[0].y);

  // Determine column positions by clustering every item's x coordinate.
  const allXs = items.map((i) => i.x);
  const colClusters = clusterBy(allXs, (x) => x, COL_TOLERANCE);
  const columns = colClusters
    .map((cluster) => cluster.reduce((sum, x) => sum + x, 0) / cluster.length)
    .sort((a, b) => a - b);

  if (columns.length < 2 || rows.length < 2) return [];

  const tableRows: string[][] = rows.map((rowItems) => {
    const cells: string[] = new Array(columns.length).fill("");
    for (const item of rowItems) {
      let bestIndex = 0;
      let bestDist = Infinity;
      for (let c = 0; c < columns.length; c++) {
        const dist = Math.abs(item.x - columns[c]);
        if (dist < bestDist) {
          bestDist = dist;
          bestIndex = c;
        }
      }
      if (bestDist <= COL_TOLERANCE * 1.5) {
        cells[bestIndex] = cells[bestIndex] ? `${cells[bestIndex]} ${item.str}` : item.str;
      }
    }
    return cells;
  });

  // Filter out rows that are mostly empty.
  const filledRows = tableRows.filter((row) => row.some((cell) => cell.trim()));
  if (filledRows.length < 2) return [];

  return [
    {
      rowCount: filledRows.length,
      colCount: columns.length,
      rows: filledRows,
    },
  ];
}

function rawTextFromItems(items: TextItem[]): string {
  if (items.length === 0) return "";
  const rowGroups = clusterBy(items, (i) => i.y, TOLERANCE);
  const rows = rowGroups
    .map((group) => group.sort((a, b) => a.x - b.x))
    .sort((a, b) => a[0].y - b[0].y);
  return rows
    .map((row) => row.map((item) => item.str).join(" "))
    .join("\n");
}

const BlueprintParserPage = () => {
  const [projectName, setProjectName] = useState("");
  const [ocrMode, setOcrMode] = useState<"native" | "native-tables">("native-tables");
  const [file, setFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<PageResult[] | null>(null);
  // Complete ExtractionResult from the floorplan-kg backend (via /api/blueprint-parser).
  const [extraction, setExtraction] = useState<ExtractionResult | null>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "rooms" | "schedules" | "takeoff" | "graph">("overview");
  const [copied, setCopied] = useState(false);

  const pdfjsRef = useRef<unknown | null>(null);

  useEffect(() => {
    let cancelled = false;
    import("pdfjs-dist").then((mod) => {
      if (cancelled) return;
      const pdfjs = mod as unknown as { GlobalWorkerOptions: { workerSrc: string } };
      pdfjs.GlobalWorkerOptions.workerSrc = "/assets/pdf.worker.min.mjs";
      pdfjsRef.current = pdfjs;
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const summary = extraction?.summary ?? null;
  const extractionComplete = extraction !== null;
  const rooms: RoomData[] = useMemo(
    () => (extraction?.pages ?? []).flatMap((p) => p.rooms ?? []),
    [extraction]
  );
  const takeoffLines: TakeoffLine[] = extraction?.takeoff?.lines ?? [];
  const graphNodes: GraphNode[] = extraction?.graph?.nodes ?? [];
  const graphEdges: GraphEdge[] = extraction?.graph?.edges ?? [];

  const allText = useMemo(() => {
    if (!extraction) return "";
    return JSON.stringify(extraction.summary ?? {}, null, 2);
  }, [extraction]);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const dropped = e.dataTransfer.files?.[0];
    if (dropped && dropped.type === "application/pdf") {
      setFile(dropped);
      setResults(null);
      setError(null);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setResults(null);
      setError(null);
    }
  };

  const parseFile = async () => {
    if (!file) return;
    setLoading(true);
    setError(null);
    setResults(null);
    setExtraction(null);
    setProgress("Uploading to backend…");

    try {
      const form = new FormData();
      form.append("file", file);
      form.append("documentType", "floorplan");

      setProgress("Processing with floorplan-kg engine…");
      const res = await fetch("https://spaceai-llmpc.ngrok.app/floorbackend/process", {
        method: "POST",
        body: form,
      });
      const payload = await res.json();
      if (!res.ok) {
        setError(payload.error ?? `Request failed with status ${res.status}`);
        return;
      }
      // Full ExtractionResult from the copied floorplan-kg backend.
      setExtraction(payload as ExtractionResult);
      setActiveTab("overview");
    } catch (err) {
      console.error(err);
      setError(
        "Could not parse the PDF. Make sure it is a valid PDF and try again."
      );
    } finally {
      setLoading(false);
      setProgress("");
    }
  };

  const copyAll = async () => {
    if (!allText) return;
    try {
      await navigator.clipboard.writeText(allText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-blue-500/30">
      <main className={`container mx-auto max-w-6xl px-4 ${extractionComplete ? "py-8 md:py-10" : "py-24 md:py-32"}`}>
        {!extractionComplete && (
          <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <FileSearch className="w-4 h-4" />
            Free AI Blueprint Parser
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Turn Construction Drawings into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Structured Data
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            Upload PDF blueprints, civil plans, or DOT sheets. Preview extracted
            text, tables, and page evidence — no signup required.
          </p>
          </div>
        )}

        {!extractionComplete && (
          <div className="max-w-2xl mx-auto">
          {/* Form */}
          <div className="space-y-6 bg-gray-900/50 p-6 md:p-8 rounded-2xl border border-white/10 h-fit">
            <h2 className="text-2xl font-semibold mb-2">Step 1 — Upload Drawings</h2>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                Project Name{" "}
                <span className="text-white/40 font-normal">(optional)</span>
              </label>
              <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="e.g. DOT Highway 101 Widening"
                className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                OCR Mode
              </label>
              <select
                value={ocrMode}
                onChange={(e) => setOcrMode(e.target.value as typeof ocrMode)}
                className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none appearance-none"
              >
                <option value="native">Native only</option>
                <option value="native-tables">Native + table detection</option>
              </select>
              <p className="text-xs text-white/40 mt-2">
                Native mode extracts embedded text from vector PDFs. Scanned
                image OCR is coming soon.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                Drawing File
              </label>
              <div
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                  dragActive
                    ? "border-blue-500 bg-blue-500/10"
                    : "border-white/20 bg-black hover:border-white/40"
                }`}
              >
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <Upload className="w-10 h-10 text-white/30 mx-auto mb-3" />
                <p className="text-white/70 font-medium">
                  {file ? file.name : "Click or drag a PDF blueprint here"}
                </p>
                <p className="text-xs text-white/40 mt-2">
                  PDF only · Max 50 MB recommended
                </p>
              </div>
            </div>

            <button
              onClick={parseFile}
              disabled={!file || loading}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-bold text-white hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {progress || "Parsing…"}
                </>
              ) : (
                <>
                  <Wand2 className="w-4 h-4" />
                  Extract Drawings
                </>
              )}
            </button>

            {error && (
              <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                <p className="text-sm text-red-200">{error}</p>
              </div>
            )}

            <p className="text-xs text-white/40 text-center">
              Files are sent to the blueprint engine for extraction.
            </p>
          </div>
          </div>
        )}

          {/* Output — real floorplan-kg ExtractionResult */}
        <div className={`min-h-[520px] bg-black/40 border border-white/10 rounded-2xl overflow-hidden ${extractionComplete ? "w-full" : "max-w-2xl mx-auto mt-6"}`}>
            {!extraction && !loading && (
              <div className="h-full min-h-[520px] flex flex-col items-center justify-center text-center p-10">
                <ImageIcon className="w-16 h-16 text-white/20 mb-4" />
                <p className="text-white/50 font-medium text-lg">
                  Your extracted drawing data will appear here
                </p>
                <p className="text-white/30 text-sm mt-2 max-w-sm">
                  Upload a PDF blueprint and click “Extract Drawings” to see
                  rooms, schedules, takeoff, and the knowledge graph.
                </p>
              </div>
            )}

            {loading && (
              <div className="h-full min-h-[520px] flex flex-col items-center justify-center text-center p-10">
                <Loader2 className="w-12 h-12 text-blue-500 animate-spin mb-4" />
                <p className="text-white/70 font-medium text-lg">
                  {progress || "Parsing your drawings…"}
                </p>
              </div>
            )}

            {extraction && summary && (
              <div className="flex flex-col h-full min-h-[520px]">
                {/* Summary header */}
                <div className="border-b border-white/10 p-5 md:p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold">
                        {projectName || file?.name || "Blueprint extraction"}
                      </h3>
                      <p className="text-sm text-white/50">
                        {summary.totalPages} page{summary.totalPages === 1 ? "" : "s"} ·{" "}
                        {summary.rooms} room{summary.rooms === 1 ? "" : "s"} ·{" "}
                        {summary.schedules} schedule{summary.schedules === 1 ? "" : "s"} ·{" "}
                        {summary.takeoffLines} takeoff lines
                      </p>
                      {extraction.metadata && (
                        <p className="text-xs text-white/40 mt-1">
                          Engine v{extraction.metadata.engineVersion ?? "—"} ·{" "}
                          {extraction.metadata.processingMethod ?? "pymupdf"} ·{" "}
                          {extraction.metadata.durationMs ?? "—"} ms
                          {extraction.metadata.originalFilename
                            ? ` · ${extraction.metadata.originalFilename}`
                            : ""}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={copyAll}
                        className="inline-flex items-center gap-2 bg-gray-900 text-white font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity text-sm"
                      >
                        {copied ? (
                          <>
                            <Check className="w-4 h-4 text-green-400" /> Copied
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" /> Copy summary
                          </>
                        )}
                      </button>
                      <button
                        onClick={() => window.print()}
                        className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                      >
                        <Printer className="w-4 h-4" /> Print / Save PDF
                      </button>
                    </div>
                  </div>

                  {/* Tabs */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {[
                      { id: "overview", label: "Overview", icon: FileText },
                      { id: "rooms", label: `Rooms (${rooms.length})`, icon: LayoutTemplate },
                      { id: "schedules", label: `Schedules (${extraction.schedules?.length ?? 0})`, icon: FileSpreadsheet },
                      { id: "takeoff", label: `Takeoff (${takeoffLines.length})`, icon: FileSearch },
                      { id: "graph", label: "Knowledge Graph", icon: ImageIcon },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as typeof activeTab)}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          activeTab === tab.id
                            ? "bg-blue-600 text-white"
                            : "bg-white/5 text-white/70 hover:bg-white/10"
                        }`}
                      >
                        <tab.icon className="w-4 h-4" />
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tab content */}
                <div className="flex-1 overflow-auto p-5 md:p-6">
                  {activeTab === "overview" && (
                    <div className="space-y-5">
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {[
                          ["Pages", summary.totalPages],
                          ["Rooms", summary.rooms],
                          ["Dimensions", summary.dimensions],
                          ["Openings", summary.openings],
                          ["Fixtures", summary.fixtures],
                          ["Schedules", summary.schedules],
                          ["Schedule rows", summary.scheduleRows],
                          ["Measured area (sq ft)", summary.measuredAreaSqFt],
                          ["Takeoff lines", summary.takeoffLines],
                          ["Graph nodes", summary.nodeCount ?? extraction.graph?.stats?.nodeCount ?? graphNodes.length],
                          ["Graph edges", summary.edgeCount ?? extraction.graph?.stats?.edgeCount ?? graphEdges.length],
                        ].map(([label, value]) => (
                          <div
                            key={label as string}
                            className="bg-gray-900/50 border border-white/10 rounded-xl p-4"
                          >
                            <p className="text-xs text-white/40 uppercase tracking-wider">{label}</p>
                            <p className="text-xl font-bold mt-1">{String(value)}</p>
                          </div>
                        ))}
                      </div>
                      {(summary.nodesByType || extraction.graph?.stats?.nodesByType) && (
                        <div className="bg-gray-900/50 border border-white/10 rounded-xl p-5">
                          <h4 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-3">
                            Node types
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {Object.entries(
                              (summary.nodesByType ?? extraction.graph?.stats?.nodesByType ?? {}) as Record<string, number>
                            ).map(([t, n]) => (
                              <span key={t} className="text-xs bg-white/5 border border-white/10 rounded-full px-3 py-1 text-white/70">
                                {t}: {n}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      {(summary.edgesByType || extraction.graph?.stats?.edgesByType) && (
                        <div className="bg-gray-900/50 border border-white/10 rounded-xl p-5">
                          <h4 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-3">
                            Edge types
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {Object.entries(
                              (summary.edgesByType ?? extraction.graph?.stats?.edgesByType ?? {}) as Record<string, number>
                            ).map(([t, n]) => (
                              <span key={t} className="text-xs bg-white/5 border border-white/10 rounded-full px-3 py-1 text-white/70">
                                {t}: {n}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === "rooms" && (
                    <div className="space-y-4">
                      {rooms.length === 0 && (
                        <p className="text-sm text-white/40 italic">No rooms detected in this drawing.</p>
                      )}
                      {rooms.map((room) => (
                        <div key={room.id} className="bg-gray-900/50 border border-white/10 rounded-xl p-5">
                          <h4 className="font-semibold">{room.name}</h4>
                          <p className="text-xs text-white/40 mt-1">Page {room.page} · {room.source ?? "label"}</p>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3 text-sm">
                            <div><p className="text-xs text-white/40">Labelled size</p><p className="text-white/80">{room.sizeRaw ?? ([room.widthDisplay, room.heightDisplay].filter(Boolean).join(" × ") || "—")}</p></div>
                            <div><p className="text-xs text-white/40">Measured area</p><p className="text-white/80">{room.areaSqFt != null ? `${room.areaSqFt} sq ft` : "—"}</p></div>
                            <div><p className="text-xs text-white/40">Perimeter</p><p className="text-white/80">{room.perimeterFeet != null ? `${room.perimeterFeet} ft` : "—"}</p></div>
                            <div><p className="text-xs text-white/40">Fixtures</p><p className="text-white/80">{room.fixtures?.length ? room.fixtures.join(", ") : "—"}</p></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === "schedules" && (
                    <div className="space-y-6">
                      {(!extraction.schedules || extraction.schedules.length === 0) && (
                        <p className="text-sm text-white/40 italic">No schedules detected in this drawing.</p>
                      )}
                      {(extraction.schedules ?? []).map((sched) => (
                        <div key={sched.id} className="bg-gray-900/50 border border-white/10 rounded-xl p-5 overflow-x-auto">
                          <h4 className="font-semibold">{sched.title}</h4>
                          <p className="text-xs text-white/40 mt-1">Page {sched.page}{sched.kind ? ` · ${sched.kind}` : ""} · {sched.rowCount} rows</p>
                          <table className="w-full text-sm text-left text-white/80 mt-4">
                            <thead>
                              <tr className="border-b border-white/10">
                                {sched.columns.map((col) => (
                                  <th key={col} className="py-2 px-3 text-xs uppercase tracking-wider text-white/40 font-semibold">{col}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {sched.rows.map((row, rIdx) => (
                                <tr key={rIdx} className="border-b border-white/10 last:border-0">
                                  {sched.columns.map((col) => (
                                    <td key={col} className="py-2 px-3 align-top min-w-[100px]">
                                      {row[col] ?? <span className="text-white/20">—</span>}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          {sched.warnings?.length > 0 && (
                            <div className="mt-3 space-y-1">
                              {sched.warnings.map((w, i) => (
                                <p key={i} className="text-xs text-amber-300/90">⚠ {w}</p>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === "takeoff" && (
                    <div className="space-y-4">
                      {takeoffLines.length === 0 && (
                        <p className="text-sm text-white/40 italic">No takeoff lines produced for this drawing.</p>
                      )}
                      {extraction.takeoff?.totals && (
                        <div className="flex flex-wrap gap-2 text-xs">
                          {Object.entries(extraction.takeoff.totals.byCategory ?? {}).map(([c, n]) => (
                            <span key={c} className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-white/70">{c}: {n}</span>
                          ))}
                        </div>
                      )}
                      <div className="overflow-x-auto bg-gray-900/50 border border-white/10 rounded-xl">
                        <table className="w-full text-sm text-left text-white/80">
                          <thead>
                            <tr className="border-b border-white/10">
                              {["CSI", "Category", "Description", "Qty", "Unit", "Basis", "Conf."].map((h) => (
                                <th key={h} className="py-3 px-3 text-xs uppercase tracking-wider text-white/40 font-semibold whitespace-nowrap">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {takeoffLines.map((line) => (
                              <tr key={line.id} className="border-b border-white/10 last:border-0">
                                <td className="py-2 px-3 font-mono text-xs whitespace-nowrap">{line.csiSection}</td>
                                <td className="py-2 px-3 whitespace-nowrap">{line.category}</td>
                                <td className="py-2 px-3 min-w-[200px]">{line.description}</td>
                                <td className="py-2 px-3 text-right font-mono">{line.quantity}</td>
                                <td className="py-2 px-3">{line.unit}</td>
                                <td className="py-2 px-3 text-white/60">{line.basis}</td>
                                <td className="py-2 px-3"><span className={`text-xs rounded-full px-2 py-0.5 ${line.confidence === "high" ? "bg-green-500/15 text-green-300" : line.confidence === "medium" ? "bg-amber-500/15 text-amber-300" : "bg-red-500/15 text-red-300"}`}>{line.confidence}</span></td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {activeTab === "graph" && (
                    <div className="space-y-5">
                      <div className="bg-gray-900/50 border border-white/10 rounded-xl p-5">
                        <h4 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-3">Knowledge Graph</h4>
                        <KnowledgeGraphView
                          nodes={graphNodes}
                          edges={graphEdges}
                          nodesByType={extraction.graph?.stats?.nodesByType as Record<string, number> | undefined}
                        />
                      </div>
                      <div className="bg-gray-900/50 border border-white/10 rounded-xl p-5">
                        <h4 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-3">Edges (first 50)</h4>
                        <div className="space-y-2 max-h-96 overflow-auto font-mono text-xs text-white/60">
                          {graphEdges.slice(0, 50).map((e) => (
                            <p key={e.id} className="border-b border-white/5 pb-1 last:border-0">{e.source} —[{e.type}]→ {e.target}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            )}
          </div>

        {!extractionComplete && (
          <>
        {/* How it works */}
        <section className="mt-24 pt-16 border-t border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              How the Blueprint Parser Works
            </h2>
            <p className="text-white/60">
              Convert PDF construction drawings into editable text and table
              previews in three simple steps — directly in your browser.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Upload your PDF",
                description:
                  "Select a blueprint, civil plan, or DOT sheet. The file stays on your device; no server upload is needed.",
              },
              {
                title: "Extract text & tables",
                description:
                  "Native PDF parsing reads embedded text and detects aligned rows and columns to rebuild tables automatically.",
              },
              {
                title: "Review page evidence",
                description:
                  "Browse extracted text, preview tables, and see page thumbnails side-by-side for quick verification.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-900/50 border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Platform CTA */}
        <section className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-3">
              Unlock AI-powered drawing intelligence
            </h3>
            <p className="text-white/60 mb-6 max-w-xl mx-auto">
              Space AI connects parsed drawings to schedules, quantities, RFIs,
              and cost workflows — so your plans never sit in a silo.
            </p>
            <Link href="/construction-software-demo/">
              <span className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300">
                Book a demo <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </section>
          </>
        )}
      </main>
    </div>
  );
};

export default BlueprintParserPage;
