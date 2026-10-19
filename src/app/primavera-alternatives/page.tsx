import type { Metadata } from "next";
import AlternativePage from "./AlternativePage";

export const metadata: Metadata = {
  title: "Best Primavera Alternatives for Construction 2026",
  description:
    "Explore the best Primavera P6 alternatives. Compare modern tools that improve project planning, schedule analysis, and project coordination.",
  keywords:
    "Primavera alternatives, best Primavera P6 alternatives, tools like Primavera, construction scheduling software, P6 scheduling software, construction schedule analysis software, AI construction scheduling",
  openGraph: {
    title: "Best Primavera Alternatives for Construction Scheduling 2026 | PMSpace",
    description:
      "Explore the best Primavera alternatives for construction scheduling. Compare modern tools that improve project planning, schedule analysis, and project coordination.",
    type: "website",
    url: "https://pmspace.ai/primavera-alternatives/",
  },
  alternates: {
    canonical: "https://pmspace.ai/primavera-alternatives/",
  },
};

export default function Page() {
  return <AlternativePage />;
}