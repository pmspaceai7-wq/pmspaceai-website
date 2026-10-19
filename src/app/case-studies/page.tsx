import { Metadata } from "next";
import Link from "next/link";
import CaseStudiesPage from "./CaseStudiesPage";
import { RelatedPages } from "@/components/InternalLinking";

// Task 49: Enhanced SEO metadata with industry and result keywords
export const metadata: Metadata = {
  title: "Construction Case Studies & Use Cases | Space AI",
  description:
    "Explore how Space AI supports construction planning, coordination, and document workflows. Customer references are shared directly during live evaluations.",
  keywords:
    "construction use cases, Space AI workflows, construction software references, construction planning software, document control workflows",
  openGraph: {
    title: "Construction Case Studies & Use Cases | Space AI",
    description:
      "Explore workflow examples and request customer references directly from the Space AI team.",
    url: "https://pmspace.ai/case-studies/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Case Studies & Use Cases | Space AI",
    description:
      "Explore workflow examples and request customer references directly from the Space AI team.",
  },
  alternates: {
    canonical: "https://pmspace.ai/case-studies/",
  },
};

export default function Page() {
  return (
    <>
      <CaseStudiesPage />
      <nav aria-label="Case study related links" className="bg-black text-white pb-10">
        <div className="container mx-auto px-4 text-sm flex flex-wrap gap-3">
          <Link href="/solutions/" className="text-white/80 hover:text-white underline">Solutions</Link>
          <Link href="/compare/" className="text-white/80 hover:text-white underline">Comparison Hub</Link>
          <Link href="/contact-specialists/" className="text-white/80 hover:text-white underline">Request Customer References</Link>
        </div>
      </nav>
      <section className="bg-black text-white pb-16">
        <div className="container mx-auto px-4">
          <RelatedPages
            cluster="ai-technology"
            currentPath="/case-studies"
            title="Explore Related Resources"
            maxItems={4}
          />
        </div>
      </section>
    </>
  );
}
