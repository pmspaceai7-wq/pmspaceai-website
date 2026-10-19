import { Metadata } from "next";
import CommercialConstructionSoftwarePage from "./CommercialConstructionSoftwarePage";

export const metadata: Metadata = {
  title: "Commercial Construction Software 2026 | Enterprise Project Management | Space AI",
  description:
    "Best commercial construction software for enterprise contractors and general builders. AI-powered project management, document control, and multi-site coordination with predictive analytics. Start free.",
  keywords: [
    "commercial construction software",
    "commercial construction management software",
    "commercial project management software",
    "commercial contractor software",
    "commercial building software",
    "enterprise construction software",
    "commercial construction scheduling software",
    "commercial construction project management",
    "large scale construction software",
    "multi-project construction software",
    "commercial building project management",
    "commercial general contractor software",
  ],
  alternates: {
    canonical: "https://pmspace.ai/commercial-construction-software/",
  },
  openGraph: {
    title: "Best Commercial Construction Software 2026 | Space AI",
    description:
      "AI-powered software for commercial contractors. Document control, multi-site management, enterprise reporting. Start free.",
    url: "https://pmspace.ai/commercial-construction-software/",
    type: "website",
    images: [
      {
        url: "https://pmspace.ai/assets/images/commercial-construction-software.png",
        width: 1200,
        height: 630,
        alt: "Commercial Construction Software - Space AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Commercial Construction Software 2026",
    description: "Enterprise-grade construction management with AI. Free trial available.",
  },
};

export default function Page() {
  return <CommercialConstructionSoftwarePage />;
}
