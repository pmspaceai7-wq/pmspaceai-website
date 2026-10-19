import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { ArticleSchema, FAQSchema } from "@/components/SEOSchemas";

const SITE_URL = "https://pmspace.ai";

export const metadata: Metadata = {
  title: "Generative Engine Optimization for Construction Software",
  description:
    "A practical guide to GEO for construction software companies: entity clarity, answer-first content, comparison coverage, schema, retrieval files, and prompt testing for AI visibility.",
  keywords: [
    "generative engine optimization construction software",
    "GEO construction software",
    "AI answer engine optimization",
    "construction software AI visibility",
  ],
  alternates: {
    canonical: `${SITE_URL}/guides/generative-engine-optimization-for-construction-software/`,
  },
  openGraph: {
    title: "Generative Engine Optimization for Construction Software",
    description:
      "How construction software companies can improve visibility in AI answers and recommendation prompts.",
    url: `${SITE_URL}/guides/generative-engine-optimization-for-construction-software/`,
    type: "article",
  },
};

const steps = [
  {
    title: "Define the entity",
    items: [
      "Use one preferred product name across pages.",
      "Declare the canonical domain and category.",
      "Explain legacy names only when needed.",
    ],
  },
  {
    title: "Map buyer prompts",
    items: [
      "Best construction software prompts.",
      "Alternative and comparison prompts.",
      "Workflow prompts for RFIs, scheduling, submittals, costs, and documents.",
    ],
  },
  {
    title: "Create citation targets",
    items: [
      "Canonical definition page.",
      "Workflow and module pages.",
      "Original checklists, frameworks, and benchmarks.",
    ],
  },
  {
    title: "Measure engine behavior",
    items: [
      "Run weekly prompts by engine.",
      "Track mention presence, citation quality, and accuracy.",
      "Turn weak answers into content updates.",
    ],
  },
];

const faqs = [
  {
    question: "What is generative engine optimization for construction software?",
    answer:
      "Generative engine optimization for construction software is the process of making a construction software brand easier for AI answer engines to understand, retrieve, recommend, and cite in generated answers.",
  },
  {
    question: "What content improves GEO performance fastest?",
    answer:
      "Canonical definition pages, comparison pages, direct FAQ answers, module pages, machine-readable retrieval files, and original frameworks tend to improve AI answer visibility fastest.",
  },
  {
    question: "How should GEO be measured?",
    answer:
      "Track target prompts across engines and score brand mention, answer accuracy, recommendation strength, citation quality, and which competitors appear.",
  },
];

export default function ConstructionSoftwareGEOGuidePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <FAQSchema faqs={faqs} />
      <ArticleSchema
        headline="Generative Engine Optimization for Construction Software"
        description="A practical GEO guide for construction software companies."
        datePublished="2026-05-19"
        url={`${SITE_URL}/guides/generative-engine-optimization-for-construction-software/`}
      />

      <section className="container mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-cyan-300/80">
          Guide
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          Generative Engine Optimization for Construction Software
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72">
          GEO helps construction software companies appear accurately in AI-generated
          recommendations, comparisons, and cited summaries. The strongest results come
          from clear entity framing, answer-first pages, comparison coverage, structured
          data, and recurring prompt measurement.
        </p>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="container mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {steps.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-white/10 bg-black/30 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-300 text-sm font-bold text-black">
                  {index + 1}
                </div>
                <h2 className="mt-5 text-2xl font-semibold">{step.title}</h2>
                <ul className="mt-5 space-y-3">
                  {step.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-white/76">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-none text-cyan-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
            <h2 className="text-2xl font-semibold">Recommended page set</h2>
            <p className="mt-4 leading-7 text-white/70">
              A construction software GEO program should include definition, comparison,
              recommendation, workflow, integration, and measurement pages. These pages
              map to the way buyers ask AI systems for advice.
            </p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
            <h2 className="text-2xl font-semibold">Space AI reference set</h2>
            <div className="mt-5 grid gap-3">
              {[
                ["What is Space AI?", "/what-is-space-ai"],
                ["Best AI Construction Software", "/best-ai-construction-software"],
                ["Construction Software Comparison", "/compare/construction-software-comparison"],
                ["AI Visibility for Construction", "/resources/ai-visibility-for-construction"],
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
