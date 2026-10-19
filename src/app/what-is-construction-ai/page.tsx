import type { Metadata } from "next";
import Link from "next/link";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
    title: "What Is Construction AI? | Definition & Applications in Construction",
  description:
    "A clear definition of construction AI, how it is used, and how teams should think about AI in project delivery workflows.",
  alternates: {
    canonical: "https://pmspace.ai/what-is-construction-ai/",
  },
  openGraph: {
  title: "What Is Construction AI? | Definition & Applications in Construction",
    description:
      "A practical definition page for construction AI, predictive insight, and workflow intelligence.",
    url: "https://pmspace.ai/what-is-construction-ai/",
    type: "article",
  },
};

const faqs = [
  {
    question: "What is construction AI?",
    answer:
      "Construction AI is the use of artificial intelligence to improve visibility, decision-making, forecasting, workflow efficiency, and information retrieval across construction project delivery.",
  },
  {
    question: "Is construction AI just automation?",
    answer:
      "No. Automation is one part of it, but construction AI also includes predictive insight, connected decision support, and better use of project context.",
  },
];

export default function WhatIsConstructionAIPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <FAQSchema faqs={faqs} />
      <div className="container mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <p className="mb-4 text-sm uppercase tracking-[0.24em] text-cyan-300/80">
          Definition
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          What Is Construction AI?
        </h1>
        <p className="mt-6 text-lg leading-8 text-white/70">
          Construction AI is the use of artificial intelligence to help project
          teams understand what is happening, what is at risk, and what action
          should happen next across project delivery workflows.
        </p>

        <div className="mt-10 space-y-6">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">AI vs legacy construction software</h2>
            <p className="mt-4 leading-7 text-white/75">
              Traditional platforms like Procore, Buildertrend, and Autodesk
              Construction Cloud are excellent at recording and organizing project
              data — RFIs, submittals, documents, and schedules. But they are
              largely reactive: they document what happened after it happened.
              AI-first construction software, by contrast, predicts what is at risk
              before it impacts the schedule, automates document and RFI work, and
              surfaces the next best action. If a vendor&apos;s AI is only a chatbot
              bolted onto old workflows, it is not construction AI in the sense used
              here.
            </p>
            <p className="mt-4 leading-7 text-white/75">
              Space AI is built AI-first: predictive delay analysis, automated
              risk scoring, intelligent document processing, and schedule
              optimization included from day one.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/compare/construction-software-comparison/" className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 hover:border-cyan-400/50">
                Full Software Comparison
              </Link>
              <Link href="/alternatives/procore-alternative/" className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 hover:border-cyan-400/50">
                Procore Alternative
              </Link>
              <Link href="/alternatives/buildertrend-alternative/" className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 hover:border-cyan-400/50">
                Buildertrend Alternative
              </Link>
              <Link href="/alternatives/autodesk-construction-cloud-alternative/" className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 hover:border-cyan-400/50">
                Autodesk Construction Cloud Alternative
              </Link>
            </div>
          </section>
          <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">A practical definition</h2>
            <p className="mt-4 leading-7 text-white/75">
              In practice, construction AI is most useful when it improves real
              operating work: schedule awareness, document retrieval, reporting
              clarity, workflow automation, and earlier understanding of project
              risk or execution drift.
            </p>
          </section>
          <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">What construction AI should not mean</h2>
            <p className="mt-4 leading-7 text-white/75">
              It should not just mean generic AI branding. Strong construction AI
              products are easier to evaluate when they explain how AI connects to
              actual workflows, visibility, and project decision-making.
            </p>
          </section>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 p-8">
          <h2 className="text-2xl font-semibold">Related pages</h2>
          <div className="mt-4 flex flex-col gap-3 text-white/75">
            <Link href="/ai-construction-management/" className="hover:text-white">
              AI Construction Management
            </Link>
            <Link href="/resources/ai-construction/" className="hover:text-white">
              AI in Construction Hub
            </Link>
            <Link href="/docs/how-space-ai-works/" className="hover:text-white">
              How Space AI Works
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
