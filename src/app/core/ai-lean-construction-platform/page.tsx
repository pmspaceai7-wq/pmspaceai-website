import { Metadata } from "next";
import { CheckCircle2, Cpu, BrainCircuit, Zap, Workflow, CalendarClock, ShieldAlert, BarChart3, Bot, Camera, Mic, LineChart, Layers, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Lean Construction Platform | Space AI",
  description:
    "Lean Construction AI: auto-build pull plans, detect constraints, predict delays, and coach teams in real time. 10x faster than manual tools.",
  alternates: {
    canonical: "https://pmspace.ai/core/ai-lean-construction-platform/",
  },
  openGraph: {
    title: "AI Lean Construction Platform | 10× Planning & Risk Automation",
    description:
      "AI decision engine for Last Planner, pull planning, constraint management, live PPC prediction, CV progress, and autonomous lean coaching.",
    url: "https://pmspace.ai/core/ai-lean-construction-platform/",
    type: "website",
  },
};

const features = [
  { title: "AI Constraint Detection", desc: "Reads RFIs, submittals, specs, drawings, and site photos to flag blockers before they hit the schedule.", icon: ShieldAlert },
  { title: "Auto Pull Planning", desc: "Uploads programme + drawings to generate sequences, dependencies, trades, and milestones in minutes.", icon: Workflow },
  { title: "Live PPC Predictor", desc: "Predicts PPC weeks ahead with probability, delay risk score, and constraint likelihood.", icon: BarChart3 },
  { title: "Smart Lookahead", desc: "Continuously updates 6‑week lookahead when design/RFIs/materials change; proposes resequencing & parallel paths.", icon: CalendarClock },
  { title: "Trade Coordination AI", desc: "Understands handoffs, zones, and responsibilities; auto-detects trade clashes.", icon: Layers },
  { title: "Voice Site Updates", desc: "Field crews speak progress; AI converts to structured progress and constraints.", icon: Mic },
  { title: "CV Progress Tracking", desc: "Computer vision on photos/drone imagery to detect installed elements and % complete against plan/BIM.", icon: Camera },
  { title: "Constraint Heatmap", desc: "Visualizes design, procurement, and access blockers ranked by time/cost impact.", icon: LineChart },
  { title: "Lean Waste Detection", desc: "AI spots waiting, rework, overproduction, and idle labour with quantified cost impact.", icon: Zap },
  { title: "AI Daily Huddle", desc: "Auto-builds yesterday/today/blockers/risks agenda for morning meetings.", icon: Bot },
  { title: "Predictive Delay Engine", desc: "Forecasts delays using weather, productivity, supply chain, and history; suggests mitigations.", icon: ShieldAlert },
  { title: "BIM-Aware Lean Planning", desc: "Understands components and dependencies from Revit/IFC for 4D-aware pull plans.", icon: BrainCircuit },
  { title: "Risk-Adjusted Scheduling", desc: "Dynamically shifts tasks based on probability and exposure while respecting resource limits.", icon: Cpu },
  { title: "Subcontractor Intelligence", desc: "Cross-project reliability and productivity scores for every trade.", icon: Users },
  { title: "Autonomous Lean Coach", desc: "Continuously recommends process tweaks and automations to improve flow.", icon: CheckCircle2 },
];

const stacks = [
  { title: "Frontend", items: ["React + Tailwind", "Drag-and-drop planning board", "Real-time heatmaps", "Offline-friendly mobile"] },
  { title: "Backend", items: ["Node/Python services", "Graph DB for dependencies", "Event bus for live updates", "Postgres for ops data"] },
  { title: "AI Layer", items: ["LLM for docs/RFIs/specs", "CV for progress detection", "Time-series forecasting for PPC/delays", "Constraint classifier"] },
  { title: "Integrations", items: ["Autodesk Construction Cloud", "Procore", "Primavera P6 / MS Project", "Drone/photo sources", "IoT sensors"] },
];

export default function LeanConstructionOSPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-400/30 text-purple-200 text-sm">
            Lean OS · 10× better than SPACE Lean
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            AI Lean Construction Platform that plans, predicts, and coaches automatically
          </h1>
          <p className="text-white/70 text-lg md:text-xl">
            Real-time decision engine combining Last Planner, pull planning, constraint management, CV progress, and predictive risk intelligence—built to deliver higher PPC with fewer meetings and less manual data entry.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-white/60">
            <span className="px-3 py-1 rounded-full border border-white/15">Pull Planning AI</span>
            <span className="px-3 py-1 rounded-full border border-white/15">Constraint Intelligence</span>
            <span className="px-3 py-1 rounded-full border border-white/15">Predictive PPC</span>
            <span className="px-3 py-1 rounded-full border border-white/15">Computer Vision Progress</span>
            <span className="px-3 py-1 rounded-full border border-white/15">Autonomous Lean Coach</span>
          </div>
          <div className="mx-auto mt-10 max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-purple-950/30">
            <Image
              src="/assets/images/og-image.jpeg?v=20260505"
              alt="AI Lean Construction Platform overview"
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-12 md:pb-16">
        <div className="grid md:grid-cols-3 gap-4">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="p-4 rounded-xl border border-white/10 bg-white/5 hover:border-purple-400/30 transition">
                <div className="flex items-center gap-3 mb-2">
                  <span className="p-2 rounded-lg bg-purple-500/10 border border-purple-400/30">
                    <Icon className="w-5 h-5 text-purple-300" />
                  </span>
                  <h3 className="font-semibold">{f.title}</h3>
                </div>
                <p className="text-sm text-white/70">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-12 md:pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-cyan-500/5">
            <h2 className="text-2xl font-bold mb-3">Why it’s 10× vs SPACE Lean</h2>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>• AI builds and maintains pull plans instead of manual sticky-note workflows.</li>
              <li>• Constraint detection is automatic from RFIs/specs/photos instead of user-entered forms.</li>
              <li>• PPC and delay risks are predicted ahead of time, not just tracked historically.</li>
              <li>• Voice + CV remove manual site data entry; meetings auto-prepped by AI.</li>
              <li>• Cross-project learning lifts trade reliability and reduces waste portfolio-wide.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-fuchsia-500/5">
            <h2 className="text-2xl font-bold mb-3">System architecture</h2>
            <p className="text-white/70 text-sm mb-3">Data layer: BIM, schedules, RFIs, site reports, cost, IoT, photos.</p>
            <p className="text-white/70 text-sm mb-3">AI layer: schedule optimizer, constraint classifier, CV progress, risk predictor, LLM document engine.</p>
            <p className="text-white/70 text-sm">Decision layer: generates lookahead, resequencing options, risk-adjusted schedules, huddle summaries, and autonomous coach actions.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-12 md:pb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Tech stack</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stacks.map((block) => (
            <div key={block.title} className="p-4 rounded-xl border border-white/10 bg-white/5">
              <h3 className="font-semibold mb-3">{block.title}</h3>
              <ul className="space-y-2 text-sm text-white/70">
                {block.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16">
        <div className="p-6 rounded-2xl border border-white/10 bg-white/5 text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to see Lean OS in action?</h2>
          <p className="text-white/70 mb-6">
            Compare it to SPACE Lean side-by-side and watch AI generate your pull plan, detect constraints, and prep tomorrow’s huddle in minutes.
          </p>
          <div className="flex gap-3 justify-center">
            <Link href="/construction-software-demo/" className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold">
              Book a demo
            </Link>
            <Link href="/try-it-now/" className="px-6 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/10">
              Try it now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

