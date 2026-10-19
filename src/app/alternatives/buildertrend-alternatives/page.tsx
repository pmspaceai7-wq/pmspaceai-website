import type { Metadata } from "next";
import PluralAlternativesPage from "@/components/PluralAlternativesPage";
import { pluralAlternativesConfig } from "@/lib/pluralAlternatives";

export const metadata: Metadata = {
  title: "Best Buildertrend Alternatives 2026 | 6 Options Compared | Space AI",
  description:
    "Looking for Buildertrend alternatives? Compare 6 real options including Space AI, Procore, CoConstruct, PlanGrid, Monday.com, and Fieldwire — with pricing, pros, cons, and use-case recommendations.",
  keywords: [
    "Buildertrend alternatives",
    "best Buildertrend alternatives",
    "tools like Buildertrend",
    "Buildertrend alternative 2026",
    "cheaper Buildertrend alternative",
    "Buildertrend vs CoConstruct",
  ],
  alternates: {
    canonical: "https://pmspace.ai/alternatives/buildertrend-alternatives/",
  },
  openGraph: {
    title: "Best Buildertrend Alternatives 2026 | Space AI",
    description:
      "6 real Buildertrend alternatives compared — pricing, pros, cons, and who each is best for. Space AI adds AI scheduling to residential and commercial work.",
    url: "https://pmspace.ai/alternatives/buildertrend-alternatives/",
    type: "website",
  },
};

export default function Page() {
  return <PluralAlternativesPage config={pluralAlternativesConfig.buildertrend} />;
}
