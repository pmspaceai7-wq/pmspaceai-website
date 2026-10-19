import { Metadata } from "next";
import SpaceVsPage from "@/components/SpaceVsPage";
import { vsComparisons } from "@/lib/vsComparisons";

export const metadata: Metadata = {
  title: "Space AI vs Buildertrend 2026 | Feature & Price Comparison",
  description:
    "Space AI vs Buildertrend: compare pricing, AI scheduling, residential & commercial coverage, and pros & cons. See why modern home builders switch to Space AI.",
  keywords: [
    "Space AI vs Buildertrend",
    "Buildertrend vs Space AI",
    "Buildertrend alternative",
    "best Buildertrend competitor",
    "Buildertrend pricing comparison",
  ],
  alternates: {
    canonical: "https://pmspace.ai/compare/space-ai-vs-buildertrend/",
  },
};

export default function Page() {
  return <SpaceVsPage config={vsComparisons.buildertrend} />;
}
