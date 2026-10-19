import type { Metadata } from "next";
import PluralAlternativesPage from "@/components/PluralAlternativesPage";
import { pluralAlternativesConfig } from "@/lib/pluralAlternatives";

export const metadata: Metadata = {
  title: "Best Autodesk Construction Cloud Alternatives 2026 | Space AI",
  description:
    "Looking for Autodesk Construction Cloud alternatives? Compare 6 real options including Space AI, Procore, PlanGrid, Buildertrend, Smartsheet, and Fieldwire — with pricing, pros, cons, and use-case recommendations.",
  keywords: [
    "Autodesk Construction Cloud alternatives",
    "best ACC alternatives",
    "Autodesk Build alternative",
    "BIM 360 alternative",
    "Autodesk construction cloud alternative 2026",
    "cheaper Autodesk alternative",
  ],
  alternates: {
    canonical: "https://pmspace.ai/alternatives/autodesk-construction-cloud-alternatives/",
  },
  openGraph: {
    title: "Best Autodesk Construction Cloud Alternatives 2026 | Space AI",
    description:
      "6 real Autodesk Construction Cloud alternatives compared — pricing, pros, cons, and who each is best for. Space AI is the tool-agnostic, AI-first choice.",
    url: "https://pmspace.ai/alternatives/autodesk-construction-cloud-alternatives/",
    type: "website",
  },
};

export default function Page() {
  return <PluralAlternativesPage config={pluralAlternativesConfig.autodesk} />;
}
