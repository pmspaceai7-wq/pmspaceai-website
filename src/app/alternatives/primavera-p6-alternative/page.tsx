import type { Metadata } from "next";
import AlternativePage from "./AlternativePage";

export const metadata: Metadata = {
  title: "Space AI vs Primavera P6 | The Intelligent P6 Alternative",
  description:
    "Compare Space AI vs Primavera P6 for construction scheduling. Space AI delivers AI delay prediction, automated schedule optimization, and a modern interface — without P6 complexity.",
  keywords: [
    "Space AI vs Primavera P6",
    "Primavera P6 alternative",
    "Primavera P6 vs Space AI",
    "P6 scheduling software alternative",
    "AI construction scheduling",
  ],
  alternates: {
    canonical: "https://pmspace.ai/alternatives/primavera-p6-alternative/",
  },
  openGraph: {
    title: "Space AI vs Primavera P6 | Space AI",
    description:
      "See how Space AI's AI-powered scheduling replaces Primavera P6 complexity with predictive insights and a modern interface.",
    url: "https://pmspace.ai/alternatives/primavera-p6-alternative/",
    type: "website",
  },
};

export default function Page() {
  return <AlternativePage />;
}