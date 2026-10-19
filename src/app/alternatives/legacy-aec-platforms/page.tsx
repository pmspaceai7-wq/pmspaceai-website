import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  GitBranch,
  Layers3,
  Network,
  Workflow,
  Zap,
} from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";
import { pageFAQs } from "@/lib/page-faqs";
import { pageStats } from "@/lib/page-stats";
import { pageQuotes } from "@/lib/page-quotes";
import SystemOfIntelligence from "@/sections/SystemofIntelligence";
import MigrationCta from "@/components/MigrationCta";

const SITE_URL = "https://pmspace.ai";

export const metadata: Metadata = {
  title: "Legacy AEC Platform Alternative | AI-Native | Space AI",
  description:
    "Replace legacy AEC platforms like Procore, Autodesk, Aconex, and Asite with an AI-native construction platform. Modernize your workflow with Space AI today.",
  keywords: [
    "legacy AEC platform alternative",
    "AI native construction platform",
    "modernize construction software",
    "AI in construction",
    "replacing legacy construction software",
    "AI-first construction management",
  ],
  alternates: {
    canonical: `${SITE_URL}/alternatives/legacy-aec-platforms/`,
  },
  openGraph: {
    title: "Legacy AEC Platform Alternative | AI-Native | Space AI",
    description:
      "Replace legacy AEC platforms with Space AI's AI-native construction intelligence. Compare now.",
    url: `${SITE_URL}/alternatives/legacy-aec-platforms/`,
    type: "article",
  },
};

const legacyWeaknesses = [
  "AI Transformation Complexity",
  "Legacy Workflow Architecture",
  "Historically Workflow-First",
];

const intelligenceCapabilities = [
  "Understanding Project Context",
  "Identifying Hidden Dependencies",
  "Predicting Risks and Delays",
  "Automating Coordination Workflows",
  "Generating Intelligent Schedules",
  "Enabling AI-Assisted Decision Making",
  "Creating Cross-Disciplinary Construction Insights",
];

const futureArchitecture = [
  "BIM Knowledge Graphs",
  "Semantic Relationships",
  "Cross-Disciplinary Intelligence",
  "Automated Schedule Reasoning",
  "Design-to-Execution Intelligence",
];

const aiFirstLayer = [
  "Machine Learning",
  "Natural Language Processing",
  "Predictive Analytics",
  "AI Agents",
  "Workflow Orchestration",
  "Context Reasoning",
];

const strengths = [
  "Clean-Sheet AI-Native Architecture",
  "Potentially Disruptive Intelligence Layer",
  "Flexible Orchestration",
  "Predictive Construction Operations",
];

const chooseSpaceAi = [
  "You Want Predictive Construction Intelligence",
  "You Are Building AI-Driven Workflows",
  "BIM Semantic Reasoning Matters",
  "You Need Cross-Platform Orchestration",
  "You Want Autonomous Scheduling Potential",
  "You Envision a Future Construction Operating Intelligence System",
];

const spaceAiFocusAreas = [
  {
    title: "AI Copilots",
    description: "Assist teams with faster project decisions, follow-ups, and construction context.",
    icon: Zap,
  },
  {
    title: "Autonomous Workflows",
    description: "Move routine coordination from manual handoffs to intelligent execution.",
    icon: Workflow,
  },
  {
    title: "Predictive Scheduling",
    description: "Surface schedule risk earlier and help teams act before delays compound.",
    icon: GitBranch,
  },
  {
    title: "Contextual BIM Intelligence",
    description: "Connect BIM data with schedule, cost, field, and document context.",
    icon: Layers3,
  },
  {
    title: "Cross-Platform Orchestration",
    description: "Coordinate across tools instead of trapping project intelligence in silos.",
    icon: Network,
  },
  {
    title: "Agentic AI Systems",
    description: "Lay the foundation for AI agents that reason across construction workflows.",
    icon: CheckCircle,
  },
];

const faqs = pageFAQs["/alternatives/legacy-aec-platforms"];
const stats = pageStats["/alternatives/legacy-aec-platforms"];
const quotes = pageQuotes["/alternatives/legacy-aec-platforms"];

export default function LegacyAECPlatformsAlternativePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <FAQSchema faqs={faqs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "The Legacy AEC Platform Alternative: An AI-Native Construction Platform",
            description:
              "Space AI is an AI-native alternative to legacy AEC platforms, focused on predictive construction intelligence, BIM reasoning, and autonomous workflows.",
            author: {
              "@type": "Organization",
              name: "Space AI",
              url: SITE_URL,
            },
            publisher: {
              "@type": "Organization",
              name: "Space AI",
              url: SITE_URL,
            },
            mainEntityOfPage: `${SITE_URL}/alternatives/legacy-aec-platforms/`,
          }),
        }}
      />

      <div className="py-10">
        <div className="container mx-auto max-w-6xl px-4 pt-10 sm:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Space AI vs Legacy AEC Platforms — AI-Native Construction Intelligence
          </h1>
        </div>
        <SystemOfIntelligence
          showAlternativeViewMore={false}
          showRecordComparison={false}
          showSupportSections={false}
        />
      </div>

      <section className="container mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="border border-red-300/20 bg-red-500/10 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-200">
              Legacy AEC Products
            </p>
            <h2 className="mt-4 text-3xl font-semibold">Digitize construction and operations.</h2>
            <p className="mt-4 leading-7 text-white/72">
              Products like Procore, Autodesk Forma / ACC, Aconex, Asite, and
              Fieldwire help teams manage projects, route work, and maintain project
              records.
            </p>
          </article>
          <article className="border border-green-300/25 bg-green-400/10 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-green-200">
              Space AI
            </p>
            <h2 className="mt-4 text-3xl font-semibold">Operationalizes construction intelligence.</h2>
            <p className="mt-4 leading-7 text-white/78">
              Space AI aims to help teams predict and optimize projects by connecting
              fragmented data into contextual, real-time, and actionable AI-driven
              decision-making.
            </p>
          </article>
        </div>
      </section>

      <section className="border-y border-cyan-300/10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),linear-gradient(180deg,rgba(15,23,42,0.62),rgba(0,0,0,0.95))]">
        <div className="container mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
              What Space AI Is Focusing On
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              The construction industry is moving beyond traditional project records.
            </h2>
            <p className="mt-5 text-base leading-7 text-white/72">
              While many legacy platforms still center on documentation and workflow tracking,
              Space AI focuses on the intelligence layer construction teams will need next.
            </p>
            <div className="mt-7 border-l border-cyan-300/35 pl-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                From Record Keeping
              </p>
              <p className="mt-2 text-xl font-semibold text-cyan-100">
                Toward predictive, contextual, and autonomous construction operations.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {spaceAiFocusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <article
                  key={area.title}
                  className="group min-h-[152px] rounded-xl border border-white/10 bg-black/38 p-5 transition hover:border-cyan-300/35 hover:bg-cyan-300/[0.06]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold text-white/28">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-white">{area.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/62">{area.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-200">
              Legacy System Weakness
            </p>
            <h2 className="mt-4 text-3xl font-semibold">Why workflow-first systems hit a ceiling</h2>
          </div>
          <div className="space-y-3">
            {legacyWeaknesses.map((weakness, index) => (
              <div key={weakness} className="grid gap-4 border border-white/10 bg-black/45 p-5 sm:grid-cols-[64px_1fr]">
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-red-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-lg font-semibold text-white">{weakness}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-gradient-to-b from-purple-950/35 to-black">
        <div className="container mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-purple-200">
            Space AI
          </p>
          <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight sm:text-4xl">
            Space AI converts disconnected project data into contextual, predictive,
            and autonomous construction workflows.
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-white/74">
            Instead of treating BIM models, schedules, RFIs, documents, field updates,
            and cost data as isolated systems, Space AI aims to connect them into a
            unified intelligence layer across the project lifecycle.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {intelligenceCapabilities.map((item) => (
              <div key={item} className="border border-purple-300/20 bg-black/40 p-4">
                <Zap className="h-5 w-5 text-cyan-300" />
                <p className="mt-3 text-sm font-semibold leading-6 text-white/88">{item}</p>
              </div>
            ))}
          </div>
          <blockquote className="mt-8 border-l-2 border-cyan-300 bg-cyan-300/10 p-5 text-xl font-semibold leading-8 text-white">
            Space AI operationalizes construction intelligence by converting disconnected
            project data into contextual, predictive, and autonomous construction workflows.
          </blockquote>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-purple-200">Technology & Architecture</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Built for AI-First Construction Intelligence</h2>
          <p className="mt-3 max-w-2xl mx-auto text-white/70">Core concepts, platform capabilities, and architectural strengths that make Space AI a future-ready operating layer for construction.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article className="relative overflow-hidden rounded-2xl border border-white/6 bg-gradient-to-br from-black/40 to-black/20 p-6 hover:shadow-[0_18px_60px_rgba(125,85,255,0.08)] transition-transform hover:-translate-y-1">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-800/20">
                <Network className="h-6 w-6 text-cyan-300" />
              </div>
              <h3 className="text-lg font-semibold">Future Architecture</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {futureArchitecture.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-white/82">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-none text-green-300" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-white/60">This aligns with next-generation BIM concepts such as 4D-8D BIM plus AI.</p>
          </article>

          <article className="relative overflow-hidden rounded-2xl border border-white/6 bg-gradient-to-br from-black/40 to-black/20 p-6 hover:shadow-[0_18px_60px_rgba(103,232,249,0.06)] transition-transform hover:-translate-y-1">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-900/20">
                <Layers3 className="h-6 w-6 text-purple-300" />
              </div>
              <h3 className="text-lg font-semibold">Built AI-First</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {aiFirstLayer.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-white/82">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-none text-green-300" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="relative overflow-hidden rounded-2xl border border-white/6 bg-gradient-to-br from-black/40 to-black/20 p-6 hover:shadow-[0_18px_60px_rgba(34,211,238,0.06)] transition-transform hover:-translate-y-1">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-900/20">
                <GitBranch className="h-6 w-6 text-green-300" />
              </div>
              <h3 className="text-lg font-semibold">Space AI Strengths</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {strengths.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-white/82">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-none text-green-300" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* Detailed Feature Comparison Table */}
      <section className="container mx-auto max-w-6xl px-4 py-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Space AI vs Legacy AEC Platforms — Detailed Feature Comparison</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] bg-gray-900/50 border border-white/10 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-800/50 border-b border-white/10">
                <th className="p-4 text-left text-sm font-medium text-white/80">Feature</th>
                <th className="p-4 text-center text-sm font-medium text-purple-400">Space AI</th>
                <th className="p-4 text-center text-sm font-medium text-white/60">Legacy AEC Platforms</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: "Architecture", spaceai: "AI-native, cloud-first, microservices", competitor: "Monolithic, database-driven" },
                { feature: "AI Integration", spaceai: "Native AI throughout all features", competitor: "No AI or bolted-on analytics" },
                { feature: "Predictive Analytics", spaceai: "AI risk prediction and delay forecasting", competitor: "Descriptive reports only" },
                { feature: "Data Connectivity", spaceai: "Unified intelligence layer across all data", competitor: "Siloed modules per discipline" },
                { feature: "Scheduling", spaceai: "AI-powered predictive + prescriptive scheduling", competitor: "Manual CPM/PERT scheduling" },
                { feature: "Document Intelligence", spaceai: "AI auto-classification and smart search", competitor: "Manual document control" },
                { feature: "Workflow Automation", spaceai: "AI-powered workflow orchestration", competitor: "Manual configuration" },
                { feature: "Collaboration", spaceai: "Real-time, built-in across all features", competitor: "Separate tools, limited sharing" },
                { feature: "Setup Time", spaceai: "Operational in days", competitor: "Weeks to months to deploy" },
                { feature: "Pricing Model", spaceai: "Per-user, transparent, no hidden fees", competitor: "Per-seat + implementation + maintenance" },
                { feature: "Integrations", spaceai: "Open API — connects to any ecosystem", competitor: "Proprietary formats, limited APIs" },
                { feature: "Mobile Access", spaceai: "Full mobile app, offline-capable", competitor: "Desktop-first, limited mobile" },
              ].map((row, i) => (
                <tr key={i} className={`${i !== 11 ? "border-b border-white/5" : ""}`}>
                  <td className="p-4 text-sm text-white/80">{row.feature}</td>
                  <td className="p-4 text-sm text-white/70 text-center">{row.spaceai}</td>
                  <td className="p-4 text-sm text-white/60 text-center">{row.competitor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center text-sm text-white/50 mt-4 max-w-2xl mx-auto">
          <strong>Bottom line:</strong> Space AI replaces the fragmented, manual workflows of legacy AEC platforms with a unified AI-native operating layer that connects project data into predictive, contextual, and autonomous construction intelligence.
        </p>
      </section>

      <MigrationCta competitor="Legacy AEC Platforms" />

      {/* Cited Statistics */}
      <section className="container mx-auto max-w-6xl px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Why Industry Data Supports Switching</h2>
          <div className="space-y-4">
            {stats.map((stat, i) => (
              <p key={i} className="text-sm leading-relaxed text-white/70 bg-gray-900/30 border border-white/5 rounded-xl p-5">
                <strong className="text-white/90">{stat.claim}.</strong> According to {stat.source}, {stat.statistic}. {stat.context}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Quotes */}
      <section className="container mx-auto max-w-6xl px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">What Industry Experts Say</h2>
          <div className="space-y-6">
            {quotes.map((q, i) => (
              <div key={i} className="bg-gray-900/30 border border-white/5 rounded-xl p-6">
                <p className="text-sm leading-relaxed text-white/80 italic">
                  &ldquo;{q.quote},&rdquo; says {q.name}, {q.title} at {q.organization}.
                </p>
                <p className="text-sm text-white/60 mt-3">{q.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Removed duplicate "When to choose Space AI" section because the page already contains a "Why SPACE AI?" section. */}
    </main>
  );
}
