import type { Metadata } from "next";
import Link from "next/link";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Technology | Powered by VeritasGraph | Space AI",
  description:
    "How Space AI uses VeritasGraph, an open-source GraphRAG knowledge-graph framework, to ground AI answers with verifiable citations and multi-hop reasoning.",
  alternates: {
    canonical: "https://pmspace.ai/technology/",
  },
  openGraph: {
    title: "Technology | Powered by VeritasGraph | Space AI",
    description:
      "Space AI's AI search and answers are grounded by VeritasGraph — a knowledge-graph framework that provides verifiable source attribution on every result.",
    url: "https://pmspace.ai/technology/",
    type: "website",
  },
};

const faqs = [
  {
    question: "What is VeritasGraph?",
    answer:
      "VeritasGraph is an open-source GraphRAG knowledge-graph framework. Instead of relying on similarity-based search, it reasons over a structured knowledge graph and returns every answer with a verifiable citation and reasoning path.",
  },
  {
    question: "How does Space AI use VeritasGraph?",
    answer:
      "Space AI uses VeritasGraph to power its AI search and answer engine. Every AI-generated response is grounded in a structured knowledge graph with source attribution, so you can trace exactly where each piece of information comes from.",
  },
  {
    question: "Can I verify the sources of an AI answer?",
    answer:
      "Yes. VeritasGraph provides a complete reasoning path and citations for every answer. Each claim links back to its source document, so you can independently verify the accuracy of any AI response.",
  },
  {
    question: "Does VeritasGraph run on-premise?",
    answer:
      "Yes. VeritasGraph runs 100% on-premise with zero data egress, making it suitable for sovereign, regulated, and enterprise environments where data governance is critical.",
  },
];

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <FAQSchema faqs={faqs} />
      <div className="container mx-auto max-w-5xl px-4 py-16 sm:px-6">
        {/* Hero */}
        <p className="mb-4 text-sm uppercase tracking-[0.24em] text-cyan-300/80">
          Technology
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Powered by VeritasGraph
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
          Verifiable AI with source attribution. Search and AI answers on Space AI
          are grounded by{" "}
          <a
            href="https://github.com/bibinprathap/VeritasGraph"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 hover:underline"
          >
            VeritasGraph
          </a>
          , an open-source GraphRAG knowledge-graph framework. Instead of guessing
          from similarity, VeritasGraph reasons over a structured knowledge graph
          and returns every answer with a verifiable citation and reasoning path
          — so you can trust the source of every result.
        </p>

        {/* Key capabilities */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20">
              <svg className="h-5 w-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold">Source attribution</h2>
            <p className="mt-3 text-white/70">
              Every AI answer includes a verifiable citation linking back to the
              source document, so you can independently verify accuracy.
            </p>
          </section>
          <section className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20">
              <svg className="h-5 w-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v4" />
                <path d="M12 18v4" />
                <path d="M4.93 4.93l2.83 2.83" />
                <path d="M16.24 16.24l2.83 2.83" />
                <path d="M2 12h4" />
                <path d="M18 12h4" />
                <path d="M4.93 19.07l2.83-2.83" />
                <path d="M16.24 7.76l2.83-2.83" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold">Knowledge graph reasoning</h2>
            <p className="mt-3 text-white/70">
              Multi-hop reasoning over a structured knowledge graph finds
              connections that similarity-based search misses.
            </p>
          </section>
          <section className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10 border border-green-500/20">
              <svg className="h-5 w-5 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold">Runs on-prem</h2>
            <p className="mt-3 text-white/70">
              100% local deployment with zero data egress. Sovereign, secure, and
              compliant for regulated industries.
            </p>
          </section>
        </div>

        {/* How it works */}
        <section className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 p-8">
          <h2 className="text-2xl font-semibold">How VeritasGraph works</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {[
              {
                step: "1",
                title: "Ingest",
                desc: "Documents, drawings, schedules, and project data are ingested into a structured knowledge graph.",
              },
              {
                step: "2",
                title: "Connect",
                desc: "Entities are linked — projects, documents, people, timelines, costs — forming a rich graph of relationships.",
              },
              {
                step: "3",
                title: "Reason",
                desc: "Multi-hop graph traversal finds answers across connected data, not just keyword matches.",
              },
              {
                step: "4",
                title: "Cite",
                desc: "Every answer is returned with a full reasoning path and verifiable source citations.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500/20 text-xs font-bold text-cyan-300">
                  {item.step}
                </span>
                <h3 className="mt-3 font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
          <div className="mt-6 space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl border border-white/10 bg-white/5 open:bg-white/[0.07] transition-colors"
              >
                <summary className="flex cursor-pointer items-center justify-between p-5 text-left font-medium text-white hover:text-cyan-300 transition-colors">
                  {faq.question}
                  <span className="ml-4 shrink-0 text-white/40 group-open:rotate-180 transition-transform">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </summary>
                <p className="px-5 pb-5 text-white/70">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Links */}
        <section className="mt-12 flex flex-col sm:flex-row gap-4">
          <a
            href="https://github.com/bibinprathap/VeritasGraph"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View VeritasGraph on GitHub
          </a>
          <a
            href="https://bibinprathap.github.io/VeritasGraph/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            Read VeritasGraph Documentation
          </a>
          <Link
            href="/trust/ai-claims/"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            AI Claims & Trust
          </Link>
        </section>
      </div>
    </main>
  );
}
