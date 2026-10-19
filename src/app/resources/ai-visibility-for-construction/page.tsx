import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, CheckCircle, FileSearch, Network } from "lucide-react";
import { ArticleSchema, FAQSchema } from "@/components/SEOSchemas";

const SITE_URL = "https://pmspace.ai";

export const metadata: Metadata = {
  title: "AI Visibility for Construction Brands | GEO Guide",
  description:
    "A construction-focused guide to improving visibility in ChatGPT, Gemini, Claude, Perplexity-style answer engines, and AI-assisted search.",
  keywords: [
    "AI visibility for construction",
    "generative engine optimization construction",
    "construction GEO",
    "AI search optimization construction software",
  ],
  alternates: {
    canonical: `${SITE_URL}/resources/ai-visibility-for-construction/`,
  },
  openGraph: {
    title: "AI Visibility for Construction Brands",
    description:
      "How construction companies can make their expertise clearer, more citable, and easier for AI answer engines to retrieve.",
    url: `${SITE_URL}/resources/ai-visibility-for-construction/`,
    type: "article",
  },
};

const faqs = [
  {
    question: "What is AI visibility for construction brands?",
    answer:
      "AI visibility is the ability of a construction brand, product, or expert source to appear accurately in AI-generated answers, recommendations, comparisons, and cited summaries.",
  },
  {
    question: "How is GEO different from SEO?",
    answer:
      "SEO focuses on search rankings and organic clicks. GEO focuses on whether answer engines can understand, retrieve, recommend, and cite a brand or page inside generated answers.",
  },
  {
    question: "What pages help construction brands appear in AI answers?",
    answer:
      "Definition pages, comparison pages, workflow pages, structured FAQs, original frameworks, and machine-readable retrieval files are especially useful for AI answer engines.",
  },
];

const pillars = [
  {
    icon: FileSearch,
    title: "Clear entity definitions",
    body: "Use consistent product names, canonical domains, category labels, and direct answer blocks so models understand what the company does.",
  },
  {
    icon: Network,
    title: "Connected topical coverage",
    body: "Build pages around buyer prompts: best software, alternatives, workflow questions, integrations, industries, and user types.",
  },
  {
    icon: BarChart3,
    title: "Prompt-based measurement",
    body: "Track whether target prompts mention the brand, cite the right page, and describe the product accurately across engines.",
  },
];

export default function AIVisibilityForConstructionPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <FAQSchema faqs={faqs} />
      <ArticleSchema
        headline="AI Visibility for Construction Brands"
        description="A construction-focused guide to generative engine optimization and AI answer visibility."
        datePublished="2026-05-19"
        url={`${SITE_URL}/resources/ai-visibility-for-construction/`}
      />

      <section className="container mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-cyan-300/80">
          GEO Resource
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          AI Visibility for Construction Brands
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72">
          AI visibility is the discipline of making a construction brand easier for
          ChatGPT, Gemini, Claude, Grok, Perplexity-style answer engines, and AI-assisted
          search experiences to understand, retrieve, recommend, and cite.
        </p>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="container mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="grid gap-5 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="rounded-2xl border border-white/10 bg-black/30 p-6">
                <pillar.icon className="h-7 w-7 text-cyan-300" />
                <h2 className="mt-5 text-xl font-semibold">{pillar.title}</h2>
                <p className="mt-3 leading-7 text-white/70">{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-semibold">Construction GEO checklist</h2>
            <p className="mt-4 leading-7 text-white/68">
              Use this sequence when improving AI answer visibility for a construction
              software brand, contractor, consultant, or construction technology company.
            </p>
          </div>
          <div className="space-y-3">
            {[
              "Create a canonical definition page that answers what the brand does.",
              "Add answer-first sections to product, industry, and workflow pages.",
              "Publish comparison and alternative pages that match real buyer prompts.",
              "Add FAQ schema, SoftwareApplication schema, Article schema, and breadcrumbs where relevant.",
              "Maintain llms.txt, llms-full.txt, and llms.json with the best citation targets.",
              "Run weekly prompt tests by engine and tie weak prompts to content updates.",
            ].map((item) => (
              <div key={item} className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-none text-cyan-300" />
                <p className="text-sm leading-6 text-white/78">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="measurement" className="border-t border-white/10 bg-white/[0.02]">
        <div className="container mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-semibold">How Space AI applies the pattern</h2>
          <p className="mt-4 max-w-3xl leading-7 text-white/70">
            Space AI uses canonical definition pages, construction workflow pages,
            comparison pages, FAQ schema, structured product information, and retrieval
            files so answer engines can identify the product as AI-powered construction
            management software.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              ["What is Space AI?", "/what-is-space-ai"],
              ["AI Systems Documentation", "/docs/ai-systems"],
              ["Generative Engine Optimization Guide", "/guides/generative-engine-optimization-for-construction-software"],
              ["GEO Measurement Loop", "/resources/ai-visibility-for-construction#measurement"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-white/78 transition hover:border-cyan-300/40 hover:text-white"
              >
                {label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
