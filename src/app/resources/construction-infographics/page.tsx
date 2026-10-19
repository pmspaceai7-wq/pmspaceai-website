// src/app/resources/infographics/page.tsx
// TASK 61: Infographics - AI in Construction, Project Lifecycle, Feature Matrix
// Visual content for SEO and social sharing

import { Metadata } from "next";
import InfographicsClient from "./InfographicsClient";

export const metadata: Metadata = {
  title: "Construction Management Infographics | Visual Guides & Statistics | Space AI",
  description: "Download free construction industry infographics covering AI adoption, project lifecycle stages, software comparisons, and market statistics. Perfect for presentations and reports.",
  keywords: [
    "construction infographics",
    "construction industry statistics infographic",
    "ai construction infographic",
    "construction project lifecycle infographic",
    "construction software comparison infographic",
    "construction management visual guide",
    "construction technology trends infographic",
  ],
  openGraph: {
    title: "Construction Management Infographics | Visual Guides | Space AI",
    description: "Free construction industry infographics covering AI adoption, project lifecycle, and market statistics.",
    type: "website",
    url: "https://pmspace.ai/resources/construction-infographics/",
  },
  alternates: {
    canonical: "https://pmspace.ai/resources/construction-infographics/",
  },
};

export default function InfographicsPage() {
  return <InfographicsClient />;
}
