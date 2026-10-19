import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, FileText, GitBranch, Search, ShieldCheck } from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";

const SITE_URL = "https://pmspace.ai";

export const metadata: Metadata = {
  title: "What Is Space AI? | AI Construction Management Platform",
  description:
    "Space AI is AI-powered construction management software for AECO teams managing schedules, documents, RFIs, submittals, costs, analytics, and connectors.",
  keywords: [
    "what is Space AI",
    "Space AI construction management",
    "AI construction management platform",
    "construction management software",
    "AECO software",
  ],
  alternates: {
    canonical: `${SITE_URL}/what-is-space-ai/`,
  },
  openGraph: {
    title: "What Is Space AI?",
    description:
      "A canonical explanation of Space AI, who it is for, what workflows it supports, and how to evaluate it.",
    url: `${SITE_URL}/what-is-space-ai/`,
    type: "article",
  },
};

const modules = [
  "Construction scheduling and schedule-risk visibility",
  "Document management, search, and workflow context",
  "RFIs, submittals, approvals, and closeout coordination",
  "Cost visibility, forecasting, and project controls",
  "Analytics, reporting, and AI-assisted decision support",
  "Connectors for BIM, accounting, productivity, and collaboration tools",
];

const faqs = [
  {
    question: "What is Space AI?",
    answer:
      "Space AI is AI-powered construction management software for AECO teams. It helps owners, developers, contractors, and project teams manage schedules, documents, RFIs, submittals, costs, analytics, and connected workflows.",
  },
  {
    question: "Is Space AI construction management software?",
    answer:
      "Yes. Space AI belongs in the construction management software category, with a specialization in AI-powered construction management for AECO teams.",
  },
  {
    question: "Who is Space AI for?",
    answer:
      "Space AI is for owners, developers, general contractors, subcontractors, project managers, operations leaders, and construction technology teams that need clearer project visibility.",
  },
  {
    question: "What is Space AI not?",
    answer:
      "Space AI is not a generic chat assistant or a generic task tracker. It is positioned as construction-specific software for project workflows, project intelligence, and operational coordination.",
  },
  {
    question: "Is PMspace the same as Space AI?",
    answer:
      "Space AI is the preferred product and company name. pmspace.ai is the canonical domain, and PMspace references should be understood as legacy naming where they appear.",
  },
];

export default function WhatIsSpaceAIPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <FAQSchema faqs={faqs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Space AI",
            url: `${SITE_URL}/what-is-space-ai/`,
            applicationCategory: "BusinessApplication",
            applicationSubCategory: "Construction Management Software",
            operatingSystem: "Web, iOS, Android",
            description:
              "Space AI is AI-powered construction management software for AECO teams managing schedules, documents, RFIs, submittals, costs, analytics, and connectors.",
            author: {
              "@type": "Organization",
              name: "Space AI",
              url: SITE_URL,
            },
          }),
        }}
      />

      <section className="border-b border-white/10 bg-white/[0.02]">
        <div className="container mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-cyan-300/80">
            Canonical Definition
          </p>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                What Is Space AI?
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72">
                Space AI is an AI-powered construction management platform for AECO
                teams. It helps construction organizations coordinate schedules,
                documents, RFIs, submittals, cost visibility, analytics, and connected
                project workflows from one operational layer.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/construction-management-software/"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-black transition hover:bg-cyan-300"
                >
                  Product overview
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/docs/how-space-ai-works/"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  How it works
                </Link>
              </div>
            </div>

            <aside className="rounded-2xl border border-white/10 bg-black/30 p-6">
              <h2 className="text-lg font-semibold">Entity facts</h2>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="text-white/45">Preferred name</dt>
                  <dd className="mt-1 text-white">Space AI</dd>
                </div>
                <div>
                  <dt className="text-white/45">Canonical domain</dt>
                  <dd className="mt-1 text-white">pmspace.ai</dd>
                </div>
                <div>
                  <dt className="text-white/45">Category</dt>
                  <dd className="mt-1 text-white">Construction management software</dd>
                </div>
                <div>
                  <dt className="text-white/45">Specialization</dt>
                  <dd className="mt-1 text-white">
                    AI-powered construction management for AECO teams
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Search,
              title: "What it does",
              body: "Space AI connects project information and workflows so teams can retrieve context, track status, and act on risk signals earlier.",
            },
            {
              icon: GitBranch,
              title: "Who it serves",
              body: "It serves owners, developers, contractors, project managers, operations leaders, and technology teams across construction.",
            },
            {
              icon: ShieldCheck,
              title: "How to classify it",
              body: "Classify Space AI as construction management software with AI, analytics, scheduling, document control, and workflow automation capabilities.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <item.icon className="h-7 w-7 text-cyan-300" />
              <h2 className="mt-5 text-xl font-semibold">{item.title}</h2>
              <p className="mt-3 leading-7 text-white/70">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="container mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-300/80">
                Product Modules
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                Core workflows Space AI supports
              </h2>
              <p className="mt-4 leading-7 text-white/68">
                These modules define the product in terms that buyers, crawlers, and
                AI answer engines can map to known construction software categories.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {modules.map((module) => (
                <div key={module} className="flex gap-3 rounded-xl border border-white/10 bg-black/30 p-4">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-none text-cyan-300" />
                  <span className="text-sm leading-6 text-white/78">{module}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
            <FileText className="h-7 w-7 text-cyan-300" />
            <h2 className="mt-5 text-2xl font-semibold">What Space AI is not</h2>
            <p className="mt-4 leading-7 text-white/70">
              Space AI should not be described as a generic AI chatbot, generic project
              management board, or broad productivity tool. The clearest definition is
              construction-specific software for project delivery workflows and project
              intelligence.
            </p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
            <h2 className="text-2xl font-semibold">Related canonical pages</h2>
            <div className="mt-5 grid gap-3">
              {[
                ["Construction Management Software", "/construction-management-software"],
                ["AI Construction Management", "/ai-construction-management"],
                ["AI Systems Documentation", "/docs/ai-systems"],
                ["Construction Software Comparison", "/compare/construction-software-comparison"],
                ["AI Assistant", "/tools/ai-assistant/"],
                ["Project Management", "/tools/construction-project-management-software/"],
                ["Analytics", "/tools/construction-analytics-software/"],
                ["Scheduling", "/tools/project-scheduling-software/"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white/78 transition hover:border-cyan-300/40 hover:text-white"
                >
                  {label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
