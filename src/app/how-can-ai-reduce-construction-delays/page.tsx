import type { Metadata } from "next";
import Link from "next/link";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "How Can AI Reduce Construction Delays? | Space AI",
  description:
    "A direct answer page on how AI can help reduce construction delays through earlier visibility, workflow coordination, and predictive insight.",
  alternates: {
    canonical: "https://pmspace.ai/how-can-ai-reduce-construction-delays/",
  },
  openGraph: {
    title: "How Can AI Reduce Construction Delays? | Space AI",
    description:
      "A practical page on how AI helps construction teams identify risks, improve coordination, and reduce project delays.",
    url: "https://pmspace.ai/how-can-ai-reduce-construction-delays/",
    type: "article",
  },
};

const faqs = [
  {
    question: "Can AI reduce construction delays?",
    answer:
      "AI can help reduce construction delays by improving schedule visibility, surfacing risk earlier, connecting project context, and reducing manual coordination friction.",
  },
  {
    question: "Does AI replace project teams?",
    answer:
      "No. AI helps project teams make decisions faster and with better context, but it does not replace the need for project leadership and operational judgment.",
  },
];

export default function AIConstructionDelaysPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <FAQSchema faqs={faqs} />
      <div className="container mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <p className="mb-4 text-sm uppercase tracking-[0.24em] text-cyan-300/80">
          Query Answer
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          How Can AI Reduce Construction Delays?
        </h1>
        <p className="mt-6 text-lg leading-8 text-white/70">
          AI can reduce construction delays by helping teams see schedule risk
          earlier, connect scattered project signals, and respond faster when
          execution begins to drift.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Earlier risk visibility</h2>
            <p className="mt-4 leading-7 text-white/75">
              Delays become easier to manage when teams can identify risk before it
              compounds. AI is most valuable when it supports earlier awareness of
              bottlenecks, sequencing problems, and emerging workflow issues.
            </p>
          </section>
          <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Connected project context</h2>
            <p className="mt-4 leading-7 text-white/75">
              Delays often grow when information is fragmented. AI helps more when
              schedules, documents, updates, and coordination signals are easier to
              understand together.
            </p>
          </section>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 p-8">
          <h2 className="text-2xl font-semibold">Related pages</h2>
          <div className="mt-4 flex flex-col gap-3 text-white/75">
            <Link href="/project-scheduling-software/" className="hover:text-white">
              Project Scheduling Software
            </Link>
            <Link href="/docs/workflows/scheduling/" className="hover:text-white">
              Scheduling Workflow Docs
            </Link>
            <Link href="/usecases/reduce-construction-rfi-delays/" className="hover:text-white">
              Reduce Construction RFI Delays
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
