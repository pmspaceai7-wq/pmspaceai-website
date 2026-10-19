import { Metadata } from "next";
import ProcoreAlternativePage from "./ProcoreAlternativePage";

export const metadata: Metadata = {
  title: "Best Procore Alternative for Construction 2026 | Space AI",
  description:
    "Looking for a Procore alternative? Space AI offers AI-driven construction management with predictive analytics and automated workflows. Switch today and save.",
  keywords: [
    "Procore alternative",
    "Procore competitor",
    "construction management software ",
    "AI construction management",
    "project management alternative",
    "construction scheduling software",
  ],
  alternates: {
    canonical: "https://pmspace.ai/alternatives/procore-alternative/",
  },
  openGraph: {
    title: "Best Procore Alternative for Construction 2026 | Space AI",
    description: "Discover why construction teams are switching from Procore to Space AI's AI-powered platform.",
    url: "https://pmspace.ai/alternatives/procore-alternative/",
    type: "website",
  },
};

export default function Page() {
  return <ProcoreAlternativePage />;
}
