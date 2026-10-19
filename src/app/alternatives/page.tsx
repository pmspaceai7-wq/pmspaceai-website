import type { Metadata } from "next";
import AlternativesIndexPage from "./AlternativesIndexPage";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Construction Software Alternatives | Space AI",
  description:
    "Compare Space AI to Procore, PlanGrid, Buildertrend, Primavera, and more. Find the best construction management software for your needs.",
  keywords:
    "construction software alternatives, Procore alternative, PlanGrid alternative, Buildertrend alternative, Primavera alternative, construction management comparison",
  openGraph: {
    title: "Space AI Alternatives to Popular Construction Software",
    description:
      "Compare Space AI to leading construction management platforms. See feature comparisons and find the best solution for your projects.",
    type: "website",
    url: "https://pmspace.ai/alternatives/",
  },
  alternates: {
    canonical: "https://pmspace.ai/alternatives/",
  },
};

export default function Page() {
  return (
    <>
      <AlternativesIndexPage />
      <nav aria-label="Alternative comparison links" className="bg-black text-white pb-10">
        <div className="container mx-auto px-4 text-sm flex flex-wrap gap-3">
          <Link href="/compare/construction-software-comparison/" className="text-white/80 hover:text-white underline">
            Construction Software Comparison
          </Link>
          <Link href="/contact-specialists/" className="text-white/80 hover:text-white underline">
            Talk to a Specialist
          </Link>
          <Link href="/pricing/" className="text-white/80 hover:text-white underline">
            Pricing
          </Link>
        </div>
      </nav>
    </>
  );
}
