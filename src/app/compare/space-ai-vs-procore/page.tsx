import { Metadata } from "next";
import SpaceVsPage from "@/components/SpaceVsPage";
import { vsComparisons } from "@/lib/vsComparisons";

export const metadata: Metadata = {
  title: "Space AI vs Procore 2026 | Feature & Price Comparison",
  description:
    "Space AI vs Procore: compare pricing, AI features, implementation time, and pros & cons. See why teams switch from Procore to Space AI and save 40-60%.",
  keywords: [
    "Space AI vs Procore",
    "Procore vs Space AI",
    "Procore alternative",
    "best Procore competitor",
    "Procore pricing comparison",
  ],
  alternates: {
    canonical: "https://pmspace.ai/compare/space-ai-vs-procore/",
  },
};

export default function Page() {
  return <SpaceVsPage config={vsComparisons.procore} />;
}
