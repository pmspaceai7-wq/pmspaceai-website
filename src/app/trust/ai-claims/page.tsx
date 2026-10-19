import type { Metadata } from "next";
import Link from "next/link";
import { FAQSchema } from "@/components/SEOSchemas";
import VeritasGraphAttribution from "@/components/VeritasGraphAttribution";

export const metadata: Metadata = {
  title: "AI Claims and Trust | Space AI",
  description:
    "How Space AI talks about AI, predictive insight, workflow automation, and what teams should expect from the product in practice.",
  alternates: {
    canonical: "https://pmspace.ai/trust/ai-claims/",
  },
  openGraph: {
    title: "AI Claims and Trust | Space AI",
    description:
      "A trust page that explains how Space AI frames AI-assisted workflows, product claims, and practical expectations.",
    url: "https://pmspace.ai/trust/ai-claims/",
    type: "website",
  },
};

const faqs = [
  {
    question: "Does Space AI claim to automate construction without people?",
    answer:
      "No. Space AI should be understood as a system that supports project teams with better visibility, connected workflows, and AI-assisted decision support, not as a replacement for project leadership or human judgment.",
  },
  {
    question: "What does AI mean in Space AI?",
    answer:
      "In Space AI, AI refers to using connected project context, predictive insight, workflow intelligence, and information retrieval to help construction teams make better decisions faster.",
  },
  {
    question: "How does Space AI ensure AI answers are accurate?",
    answer:
      "Space AI is powered by VeritasGraph, an open-source GraphRAG knowledge-graph framework. Instead of guessing from similarity, VeritasGraph reasons over a structured knowledge graph and returns every answer with a verifiable citation and reasoning path — so you can trust the source of every result.",
  },
  {
    question: "Can I trace where an AI answer comes from?",
    answer:
      "Yes. Every AI answer in Space AI includes a verifiable citation and reasoning path powered by VeritasGraph. Each claim links back to its source document, so you can independently verify the accuracy of any response.",
  },
  {
    question: "Why have a trust page?",
    answer:
      "A trust page makes product claims easier to interpret and improves credibility for buyers, evaluators, and AI systems that need a clear explanation of what the product does and does not claim.",
  },
];

export default function AIClaimsTrustPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <FAQSchema faqs={faqs} />
      <div className="container mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <p className="mb-4 text-sm uppercase tracking-[0.24em] text-cyan-300/80">
          Trust
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          AI Claims and Product Trust
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
          Space AI should be easy to understand without exaggerated AI language.
          This page exists to make the product claims more precise: what the AI
          layer is meant to do, where it helps most, and why construction teams
          should evaluate it through workflows and outcomes rather than slogans.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <h2 className="text-2xl font-semibold">What Space AI should claim clearly</h2>
            <ul className="mt-4 space-y-3 text-white/75">
              <li>Better visibility across schedules, documents, and project workflows.</li>
              <li>AI-assisted decision support, not generic AI branding.</li>
              <li>Connected systems and cleaner project context.</li>
              <li>Earlier awareness of issues, risks, and coordination bottlenecks.</li>
            </ul>
          </section>
          <section className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <h2 className="text-2xl font-semibold">What buyers should look for</h2>
            <ul className="mt-4 space-y-3 text-white/75">
              <li>How the product fits actual workflows.</li>
              <li>How it supports scheduling, cost control, and document coordination.</li>
              <li>How it fits into existing software systems.</li>
              <li>Whether the product makes project work clearer and faster.</li>
            </ul>
          </section>
        </div>

        <section className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 p-8">
          <h2 className="text-2xl font-semibold">Recommended evaluation path</h2>
          <div className="mt-5 flex flex-col gap-3 text-white/75">
            <Link href="/docs/how-space-ai-works/" className="hover:text-white">
              How Space AI Works
            </Link>
            <Link href="/technology/" className="hover:text-white">
              Powered by VeritasGraph — How It Works
            </Link>
            <Link href="/docs/workflows/" className="hover:text-white">
              Workflow Documentation
            </Link>
            <Link href="/docs/integrations/" className="hover:text-white">
              Integrations
            </Link>
            <Link href="/docs/comparison-methodology/" className="hover:text-white">
              Comparison Methodology
            </Link>
          </div>
        </section>

        <VeritasGraphAttribution
          className="mt-10 rounded-3xl"
          title="Powered by VeritasGraph — Verifiable AI with Source Attribution"
          badges={[
            "Source attribution on every answer",
            "Knowledge graph multi-hop reasoning",
            "Runs on-prem / 100% local",
          ]}
        />
      </div>
    </main>
  );
}
