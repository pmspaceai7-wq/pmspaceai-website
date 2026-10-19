import { Metadata } from "next";
import ComparisonPage from "./ComparisonPage";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Space AI vs Traditional Platforms | Future-Ready Solutions",
  description:
    "How Space AI outperforms legacy systems. Compare predictive intelligence, automation, and data integration to future-proof your project delivery.",
  keywords: [
    "Space AI comparison",
    "construction software comparison",
    "Space AI vs competitors",
    "project management comparison",
    "construction platform comparison",
  ],
  alternates: {
    canonical: "https://pmspace.ai/compare/",
  },
  openGraph: {
    title: "Space AI vs Traditional Platforms | Future-Ready Solutions",
    description: "Compare Space AI's predictive intelligence with legacy construction systems.",
    type: "website",
    url: "https://pmspace.ai/compare/",
  },
};

export default function Page() {
  return (
    <>
      <ComparisonPage />
      <nav aria-label="Comparison related links" className="bg-black text-white pb-10">
        <div className="container mx-auto px-4 text-sm flex flex-wrap gap-3">
          <Link href="/compare/construction-software-comparison/" className="text-white/80 hover:text-white underline">Construction Software Comparison</Link>
          <Link href="/alternatives/" className="text-white/80 hover:text-white underline">Alternatives</Link>
          <Link href="/pricing/" className="text-white/80 hover:text-white underline">Pricing</Link>
        </div>
      </nav>
    </>
  );
}
