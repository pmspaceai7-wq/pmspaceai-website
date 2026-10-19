import { Metadata } from "next";
import {
  Plug,
  RefreshCw,
  Webhook,
  Database,
  ShieldCheck,
  Zap,
  GitMerge,
  FileJson,
  ArrowLeftRight,
  Cloud,
  Bell,
  Lock,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Space Connectors – Integration Hub for Construction Software | Space AI",
  description:
    "Connect Space AI to Procore, Autodesk Construction Cloud, Primavera P6, BIM 360, and 50+ tools. Bi-directional sync, no-code setup, real-time webhooks.",
  alternates: {
    canonical: "https://pmspace.ai/core/space-connectors/",
  },
  openGraph: {
    title: "Space Connectors – Integration Hub | Space AI",
    description:
      "Bi-directional integrations with Procore, Autodesk, Primavera P6, BIM 360, ERP systems, and more. Keep every tool in sync without manual data entry.",
    url: "https://pmspace.ai/core/space-connectors/",
    type: "website",
  },
};

const features = [
  {
    title: "Bi-Directional Sync",
    desc: "Changes in Space AI instantly reflect in connected tools and vice versa — no duplicate entry, no stale data.",
    icon: ArrowLeftRight,
  },
  {
    title: "Real-Time Webhooks",
    desc: "Push events the moment something changes: RFI status, cost updates, schedule shifts, or document approvals.",
    icon: Webhook,
  },
  {
    title: "No-Code Connector Setup",
    desc: "Authenticate with OAuth or API key, map fields with a point-and-click UI, and go live in under 30 minutes.",
    icon: Plug,
  },
  {
    title: "Smart Field Mapping",
    desc: "AI suggests field mappings based on schema analysis, reducing setup errors and time across disparate systems.",
    icon: GitMerge,
  },
  {
    title: "Conflict Resolution Engine",
    desc: "When two systems disagree on a value, configurable rules decide which source wins — or flags it for human review.",
    icon: RefreshCw,
  },
  {
    title: "Unified Data Lake",
    desc: "All integrated data lands in a normalised project data lake, powering AI insights across every connected tool.",
    icon: Database,
  },
  {
    title: "Cloud & On-Premise",
    desc: "Connects to SaaS platforms and on-premise ERP/finance systems via secure tunnels and agent-based connectors.",
    icon: Cloud,
  },
  {
    title: "REST & GraphQL APIs",
    desc: "Build custom connectors using Space AI's documented REST and GraphQL APIs, complete with sandbox environments.",
    icon: FileJson,
  },
  {
    title: "Event-Driven Alerts",
    desc: "Subscribe to any cross-system event and trigger Slack, email, or in-app notifications for the right stakeholders.",
    icon: Bell,
  },
  {
    title: "Role-Based Data Access",
    desc: "Control which connector surfaces which data to which team — sub-contractor, owner, or internal PM.",
    icon: Lock,
  },
  {
    title: "SOC 2 & ISO 27001 Ready",
    desc: "All connector traffic is encrypted in transit and at rest. Full audit log of every sync event for compliance.",
    icon: ShieldCheck,
  },
  {
    title: "High-Throughput Pipelines",
    desc: "Handles millions of sync events per day with built-in retry logic, dead-letter queues, and backpressure management.",
    icon: Zap,
  },
];

const integrations = [
  {
    category: "Project Management",
    tools: ["Procore", "Autodesk Construction Cloud", "PlanGrid", "Buildertrend", "CoConstruct", "Asite"],
  },
  {
    category: "Scheduling & Planning",
    tools: ["Oracle Primavera P6", "MS Project", "Asta Powerproject", "Smartsheet", "Monday.com"],
  },
  {
    category: "BIM & Design",
    tools: ["Autodesk Revit", "BIM 360", "Navisworks", "Bentley ProjectWise", "Trimble Connect"],
  },
  {
    category: "Finance & ERP",
    tools: ["SAP S/4HANA", "Oracle ERP Cloud", "Viewpoint Vista", "Sage 300 CRE", "QuickBooks"],
  },
  {
    category: "Field & Safety",
    tools: ["Fieldwire", "Raken", "SafetyCulture", "ProntoForms", "GoFormz"],
  },
  {
    category: "Storage & Communication",
    tools: ["Microsoft SharePoint", "Google Drive", "Dropbox Business", "Slack", "Microsoft Teams"],
  },
];

const stacks = [
  {
    title: "Transport Layer",
    items: ["HTTPS / TLS 1.3", "WebSocket for real-time push", "SFTP for batch file transfers", "VPN tunnel for on-premise ERP"],
  },
  {
    title: "Integration Engine",
    items: ["Event-driven microservices", "Apache Kafka for event streaming", "Dead-letter queue & retry logic", "Idempotency keys on all writes"],
  },
  {
    title: "AI Mapping Layer",
    items: ["Schema inference for field mapping", "Conflict resolution rules engine", "Anomaly detection on sync drift", "LLM-assisted connector setup"],
  },
  {
    title: "Developer Tools",
    items: ["REST & GraphQL APIs", "Sandbox environment", "Postman collection included", "Webhook testing UI"],
  },
];

export default function SpaceConnectorsPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-200 text-sm">
            Space Connectors · Integration Hub
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Connect every construction tool into one unified platform
          </h1>
          <p className="text-white/70 text-lg md:text-xl">
            Bi-directional integrations with 50+ construction, BIM, ERP, and field tools. Real-time sync, AI-assisted field mapping, and zero manual data entry — so your teams always work from a single source of truth.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-white/60">
            <span className="px-3 py-1 rounded-full border border-white/15">50+ Integrations</span>
            <span className="px-3 py-1 rounded-full border border-white/15">Real-Time Webhooks</span>
            <span className="px-3 py-1 rounded-full border border-white/15">No-Code Setup</span>
            <span className="px-3 py-1 rounded-full border border-white/15">SOC 2 Ready</span>
            <span className="px-3 py-1 rounded-full border border-white/15">REST & GraphQL APIs</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/construction-software-demo/"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition"
            >
              Book a Demo
            </Link>
            <Link
              href="/integrations/"
              className="px-6 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/10 transition"
            >
              View All Integrations
            </Link>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="container mx-auto px-4 pb-12 md:pb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Everything you need to integrate your construction stack
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="p-4 rounded-xl border border-white/10 bg-white/5 hover:border-blue-400/30 transition"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="p-2 rounded-lg bg-blue-500/10 border border-blue-400/30">
                    <Icon className="w-5 h-5 text-blue-300" />
                  </span>
                  <h3 className="font-semibold">{f.title}</h3>
                </div>
                <p className="text-sm text-white/70">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Integrations catalogue */}
      <section className="container mx-auto px-4 pb-12 md:pb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Supported integrations</h2>
        <p className="text-white/60 text-center mb-8">
          Pre-built connectors ready to activate. Custom connectors available via API.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {integrations.map((group) => (
            <div
              key={group.category}
              className="p-5 rounded-xl border border-white/10 bg-white/5"
            >
              <h3 className="font-semibold text-blue-300 mb-3">{group.category}</h3>
              <ul className="space-y-1.5">
                {group.tools.map((tool) => (
                  <li key={tool} className="flex items-center gap-2 text-sm text-white/75">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400/60 flex-shrink-0" />
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Why section */}
      <section className="container mx-auto px-4 pb-12 md:pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-cyan-500/5">
            <h2 className="text-2xl font-bold mb-3">Why Space Connectors?</h2>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>• Eliminates double-entry between Procore, Primavera, and your ERP — saving 6–10 hrs/week per PM.</li>
              <li>• AI-powered field mapping reduces connector setup from days to under 30 minutes.</li>
              <li>• Real-time webhooks mean schedule changes, RFIs, and cost updates propagate instantly — no nightly batch jobs.</li>
              <li>• Unified data lake feeds Space AI&apos;s predictive delay and cost overrun engines with richer context.</li>
              <li>• Conflict resolution rules prevent silent data corruption when two systems disagree.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/5">
            <h2 className="text-2xl font-bold mb-3">How it works</h2>
            <ol className="space-y-3 text-white/70 text-sm list-none">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-xs font-bold text-blue-300">1</span>
                <span>Authenticate your tools using OAuth 2.0 or API key — no IT involvement needed for most cloud platforms.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-xs font-bold text-blue-300">2</span>
                <span>AI analyses both schemas and suggests field mappings. Review and confirm in the visual mapping UI.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-xs font-bold text-blue-300">3</span>
                <span>Choose sync direction, frequency, and conflict rules, then activate. Data begins flowing immediately.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-xs font-bold text-blue-300">4</span>
                <span>Monitor sync health, error rates, and latency from the Connectors dashboard. Alerts fire on any anomaly.</span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Tech stack */}
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

      {/* CTA */}
      <section className="container mx-auto px-4 pb-16">
        <div className="p-6 rounded-2xl border border-white/10 bg-white/5 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Ready to unify your construction stack?
          </h2>
          <p className="text-white/70 mb-6 max-w-xl mx-auto">
            See Space Connectors live — connect Procore, Primavera, and your ERP in one session and watch data sync in real time.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/construction-software-demo/"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition"
            >
              Book a demo
            </Link>
            <Link
              href="/try-it-now/"
              className="px-6 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/10 transition"
            >
              Try it now
            </Link>
            <Link
              href="/integrations/"
              className="px-6 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/10 transition"
            >
              Browse integrations
            </Link>
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="container mx-auto px-4 pb-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto pt-8">
          <h3 className="text-lg font-semibold text-white mb-4">Related Pages</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/integrations/" className="px-4 py-2 bg-gray-800/50 border border-white/10 rounded-lg text-white/80 hover:border-blue-500/50 transition-colors text-sm">
              Integrations Hub →
            </Link>
            <Link href="/core/ai-lean-construction-platform/" className="px-4 py-2 bg-gray-800/50 border border-white/10 rounded-lg text-white/80 hover:border-blue-500/50 transition-colors text-sm">
              AI Lean Construction Platform →
            </Link>
            <Link href="/features/" className="px-4 py-2 bg-gray-800/50 border border-white/10 rounded-lg text-white/80 hover:border-blue-500/50 transition-colors text-sm">
              All Features →
            </Link>
            <Link href="/construction-software-demo/" className="px-4 py-2 bg-gray-800/50 border border-white/10 rounded-lg text-white/80 hover:border-blue-500/50 transition-colors text-sm">
              Book a Demo →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

