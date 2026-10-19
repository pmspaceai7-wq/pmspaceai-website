import type { Metadata } from "next";
import AlternativePage from "./AlternativePage";

export const metadata: Metadata = {
  title: "PlanGrid Alternative | Space AI vs PlanGrid Comparison 2026",
  description:
    "Looking for a PlanGrid alternative? Space AI offers superior AI construction management, better BIM integration, and lower costs. Compare features now.",
  keywords:
    "PlanGrid alternative, PlanGrid replacement, better than PlanGrid, Space AI vs PlanGrid, construction management software, blueprint management",
  openGraph: {
    title: "PlanGrid Alternative | Space AI vs PlanGrid Comparison",
    description:
      "Discover why construction teams are switching from PlanGrid to Space AI for better AI features and cost savings.",
    type: "website",
    url: "https://pmspace.ai/alternatives/plangrid-alternative/",
  },
  alternates: {
    canonical: "https://pmspace.ai/alternatives/plangrid-alternative/",
  },
};

export default function Page() {
  return <AlternativePage />;
}
