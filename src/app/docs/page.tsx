import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";
import VeritasGraphAttribution from "@/components/VeritasGraphAttribution";
import { bestStartPages, docsIndexGroups } from "@/lib/docs";

export const metadata: Metadata = {
  title: "Space AI Docs | Product Knowledge Hub for Construction Teams",
  description:
    "Explore Space AI documentation, workflows, integrations, onboarding, comparisons, and product knowledge for AI-powered construction management.",
  keywords: [
    "Space AI docs",
    "construction software documentation",
    "AI construction management docs",
    "construction workflow guides",
    "Space AI knowledge base",
  ],
  alternates: {
    canonical: "https://pmspace.ai/docs/",
  },
  openGraph: {
    title: "Space AI Docs | Product Knowledge Hub",
    description:
      "The central knowledge hub for Space AI product workflows, guides, resources, and comparison pages.",
    url: "https://pmspace.ai/docs/",
    type: "website",
  },
};

const docsFAQs = [
  {
    question: "What is the Space AI Docs hub?",
    answer:
      "The Space AI Docs hub is the central knowledge layer for Space AI. It organizes product understanding, workflows, integrations, onboarding, and comparison guidance into one canonical location.",
  },
  {
    question: "What should buyers read first?",
    answer:
      "Buyers should start with Construction Management Software, AI Construction Management, How Space AI Works, and Getting Started with Space AI to understand product fit and workflow relevance quickly.",
  },
  {
    question: "Why does a docs hub help AI visibility?",
    answer:
      "A docs hub helps AI visibility because it gives answer engines a clearer set of canonical pages to retrieve, summarize, and cite when they need to explain what Space AI does and who it is for.",
  },
  {
    question: "How does Space AI verify its AI answers?",
    answer:
      "Every AI answer on Space AI is grounded by VeritasGraph, an open-source GraphRAG knowledge-graph framework. Each answer is returned with a verifiable citation and reasoning path that links back to its source document — a schedule, RFI, contract, or cost record — so teams can independently confirm accuracy before acting on it.",
  },
  {
    question: "What is VeritasGraph and how does it power Space AI?",
    answer:
      "VeritasGraph is an open-source knowledge-graph framework that provides source attribution for Space AI search and answers. Instead of guessing from similarity, it reasons over a structured knowledge graph and returns every answer with a citation and a multi-hop reasoning path. Source code: https://github.com/bibinprathap/VeritasGraph. Documentation: https://bibinprathap.github.io/VeritasGraph/index.html",
  },
  {
    question: "Why does source attribution matter for AI answers in construction?",
    answer:
      "Construction decisions depend on traceable records — contracts, RFIs, submittals, cost logs, and schedules. Knowledge-graph source attribution lets every AI claim be traced back to its source document, which makes AI output auditable for regulated, government, and enterprise buyers instead of a black box.",
  },
];

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <FAQSchema faqs={docsFAQs} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Space AI Docs",
            description:
              "The product knowledge hub for Space AI documentation, workflows, integrations, and evaluation.",
            url: "https://pmspace.ai/docs/",
          }),
        }}
      />

      <div className="container mx-auto px-4 py-16 sm:px-6">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-cyan-300/80">
            Space AI Docs
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            The Product Knowledge Hub for Space AI
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            This docs hub gives Space AI a clearer canonical surface for buyers,
            researchers, and AI systems. It explains what the product is, how it
            works, which workflows it supports, how it fits into existing systems,
            and which pages matter most when evaluating the platform.
          </p>
        </div>

        <section className="mb-16 rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 p-8">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-cyan-300/80">
              Best Pages To Start With
            </p>
            <h2 className="text-3xl font-semibold text-white">
              The most canonical learning path for new buyers
            </h2>
            <p className="mt-3 text-white/70">
              These pages provide the fastest path to understanding what Space AI
              is, how it works, and how to evaluate it.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {bestStartPages.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-2xl border border-white/10 bg-black/20 p-5 transition-all hover:border-cyan-400/30 hover:bg-black/30"
              >
                <div className="mb-3 inline-flex rounded-xl bg-cyan-400/10 p-3 text-cyan-300">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  {item.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-300">
                  Open page
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {docsIndexGroups.map((group) => (
          <section key={group.title} className="mb-16">
            <div className="mb-8 max-w-3xl">
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-cyan-300/80">
                {group.eyebrow}
              </p>
              <h2 className="text-3xl font-semibold text-white">{group.title}</h2>
              <p className="mt-3 text-white/70">{group.description}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-cyan-400/30 hover:bg-white/10"
                >
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/70">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-300">
                    Open page
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <section className="rounded-3xl border border-white/10 bg-black/20 p-8">
          <h2 className="text-3xl font-semibold text-white">
            Why this hub matters for AI visibility
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold text-white">Canonical knowledge</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                AI systems prefer clear, structured answer surfaces over scattered
                marketing claims.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold text-white">Clear positioning</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Buyers and answer engines need an obvious explanation of what Space
                AI is, how it works, and why it is different.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold text-white">Better retrieval paths</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Workflow, integration, and comparison pages give Space AI more
                precise retrieval targets for high-intent queries.
              </p>
            </div>
          </div>
        </section>

        <VeritasGraphAttribution className="mt-16" />
      </div>
    </main>
  );
}
