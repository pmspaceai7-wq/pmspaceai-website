import type { Metadata } from "next";
import PluralAlternativesPage from "@/components/PluralAlternativesPage";
import { pluralAlternativesConfig } from "@/lib/pluralAlternatives";

export const metadata: Metadata = {
  title: "Best Procore Alternatives 2026 | 6 Options Compared | Space AI",
  description:
    "Looking for Procore alternatives? Compare 6 real options including Space AI, Buildertrend, Autodesk Construction Cloud, PlanGrid, Fieldwire, and CoConstruct — with pricing, pros, cons, and use-case recommendations.",
  keywords: [
    "Procore alternatives",
    "best Procore alternatives",
    "tools like Procore",
    "Procore alternative 2026",
    "Procore vs Buildertrend",
    "cheaper Procore alternative",
  ],
  alternates: {
    canonical: "https://pmspace.ai/alternatives/procore-alternatives/",
  },
  openGraph: {
    title: "Best Procore Alternatives 2026 | Space AI",
    description:
      "6 real Procore alternatives compared — pricing, pros, cons, and who each is best for. Space AI leads with AI-powered construction management.",
    url: "https://pmspace.ai/alternatives/procore-alternatives/",
    type: "website",
  },
};

export default function Page() {
  return <PluralAlternativesPage config={pluralAlternativesConfig.procore} />;
}
