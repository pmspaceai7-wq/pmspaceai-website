import { Metadata } from "next";
import IntelligenceCenterPage from "../usecases/IntelligenceCenterPage";
import { Suspense } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Construction Software Use Cases | Space AI Success Stories",
  description:
    "See how construction teams use Space AI to reduce delays, cut costs, and improve project outcomes. Real case studies from industry leaders.",
  keywords: [
    "construction software use cases",
    "construction management case studies",
    "ai construction success stories",
    "project management examples",
    "construction technology roi",
  ],
  alternates: {
    canonical: "https://pmspace.ai/usecases/",
  },
  openGraph: {
    title: "Construction Software Use Cases | Space AI",
    description: "Real success stories from construction teams using AI to transform project delivery.",
    url: "https://pmspace.ai/usecases/",
    type: "website",
  },
};

export default function Page() {
  return (
    <Suspense fallback={
        <div className="flex justify-center items-center h-screen bg-black text-white">
            <div className="text-center">
                <h1 className="text-xl">Loading Use Cases...</h1>
            </div>
        </div>
    }>
      <IntelligenceCenterPage/>
      <nav aria-label="Use case related links" className="bg-black text-white pb-10">
        <div className="container mx-auto px-4 text-sm flex flex-wrap gap-3">
          <Link href="/tools/ai-assistant/" className="text-white/80 hover:text-white underline">AI Assistant Tool</Link>
          <Link href="/tools/clinic-management/" className="text-white/80 hover:text-white underline">Clinic Management Tool</Link>
          <Link href="/tools/invoice-management-software/" className="text-white/80 hover:text-white underline">Invoice Management Software</Link>
        </div>
      </nav>
    </Suspense>
  );
}
