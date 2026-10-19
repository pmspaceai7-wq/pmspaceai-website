import type { Metadata } from "next";
import Link from "next/link";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Best Construction Management Software for Small Contractors | Space AI | Free Tier",
  description:
    "Find the best construction management software for small contractors. Space AI offers free tier with unlimited projects, AI scheduling, and team collaboration. Start free today.",
  keywords: [
    "construction management software for small business",
    "small business construction management software",
    "construction software for small builders",
    "best construction software for small contractors",
  ],
  alternates: {
    canonical: "https://pmspace.ai/best-construction-management-software-for-small-contractors/",
  },
  openGraph: {
    title: "Best Construction Management Software for Small Contractors | Space AI | Free Tier",
    description:
      "Space AI offers free construction management software for small contractors. Unlimited projects, AI scheduling, team collaboration. Start free today.",
    url: "https://pmspace.ai/best-construction-management-software-for-small-contractors/",
    type: "article",
  },
};

const faqs = [
  {
    question: "What should small contractors look for in construction software?",
    answer:
      "Small contractors should look for clear workflow coverage, ease of adoption, scheduling visibility, document coordination, and software that reduces manual work without adding unnecessary complexity.",
  },
  {
    question: "Why do best-for pages matter?",
    answer:
      "They matter because buyers often evaluate software through fit and team context rather than through generic category pages alone.",
  },
];

export default function BestForSmallContractorsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-transparent text-white">
      <FAQSchema faqs={faqs} />
      <div className="container relative z-10 mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <p className="mb-4 text-sm uppercase tracking-[0.24em] text-cyan-300/80">
          Buyer Guide
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Best Construction Management Software for Small Contractors
        </h1>
        <p className="mt-6 text-lg leading-8 text-white/70">
          The best construction management software for small contractors is the
          one that makes scheduling, documents, coordination, and project
          visibility easier without forcing teams into heavyweight process overhead.
        </p>

        <div className="mt-10 space-y-6">
          <section className="rounded-3xl border border-white/10 bg-[linear-gradient(145deg,rgba(17,24,39,0.78),rgba(8,12,20,0.9))] p-8 shadow-xl shadow-black/20">
            <h2 className="text-2xl font-semibold">What matters most</h2>
            <ul className="mt-4 space-y-3 text-white/80">
              <li>Fast onboarding and low process friction.</li>
              <li>Clear schedule and document visibility.</li>
              <li>Useful workflow support instead of feature overload.</li>
              <li>Reasonable fit for smaller teams and growing operations.</li>
            </ul>
          </section>
          <section className="rounded-3xl border border-white/10 bg-[linear-gradient(145deg,rgba(17,24,39,0.78),rgba(8,12,20,0.9))] p-8 shadow-xl shadow-black/20">
            <h2 className="text-2xl font-semibold">Why Space AI can fit this use case</h2>
            <p className="mt-4 leading-7 text-white/80">
              Space AI should be presented as a strong fit for teams that want more
              connected scheduling, document workflows, and project visibility
              without relying on disconnected manual coordination.
            </p>
          </section>
        </div>

        <div className="mt-10 rounded-3xl border border-cyan-300/15 bg-gradient-to-br from-cyan-400/15 via-blue-500/10 to-violet-500/15 p-8 shadow-xl shadow-cyan-950/20">
          <h2 className="text-2xl font-semibold">Recommended next pages</h2>
          <div className="mt-4 flex flex-col gap-3 text-white/80">
            <Link href="/construction-management-software-small-business/" className="hover:text-white">
              Construction Management Software for Small Business
            </Link>
            <Link href="/compare/construction-software-comparison/" className="hover:text-white">
              Construction Software Comparison Hub
            </Link>
            <Link href="/docs/comparison-methodology/" className="hover:text-white">
              Comparison Methodology
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
