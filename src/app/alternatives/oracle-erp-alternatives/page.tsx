import type { Metadata } from "next";
import PluralAlternativesPage from "@/components/PluralAlternativesPage";
import { pluralAlternativesConfig } from "@/lib/pluralAlternatives";

export const metadata: Metadata = {
  title: "Oracle ERP vs Construction ERP | Best Oracle Alternatives 2026 | Space AI",
  description:
    "Compare Oracle Fusion Cloud ERP with 6 construction-native platforms. See why construction teams replace finance-first ERPs with Space AI, Procore, Autodesk Construction Cloud, and more.",
  keywords: [
    "Oracle ERP alternative",
    "Oracle Fusion Cloud ERP",
    "Oracle ERP for construction",
    "construction ERP",
    "Oracle Fusion Financials alternative",
    "Oracle ERP software",
    "best Oracle alternatives",
  ],
  alternates: {
    canonical: "https://pmspace.ai/alternatives/oracle-erp-alternatives/",
  },
  openGraph: {
    title: "Oracle ERP vs Construction ERP | Space AI",
    description:
      "6 Oracle ERP alternatives compared for construction teams — pricing, pros, cons, and who each is best for.",
    url: "https://pmspace.ai/alternatives/oracle-erp-alternatives/",
    type: "website",
  },
};

export default function Page() {
  return <PluralAlternativesPage config={pluralAlternativesConfig.oracle} />;
}
