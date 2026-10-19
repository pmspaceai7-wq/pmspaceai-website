import { Metadata } from "next";
import ResidentialConstructionSoftwarePage from "./ResidentialConstructionSoftwarePage";

export const metadata: Metadata = {
  title: "Best Residential Construction Software 2026 | Home Builder Software | Space AI",
  description:
    "Top-rated residential construction software for home builders, remodelers & custom home contractors. AI-powered scheduling, client portal, selection management. Start free today.",
  keywords: [
    "residential construction software",
    "home builder software",
    "residential construction management software",
    "custom home builder software",
    "home construction software",
    "residential project management software",
    "home remodeling software",
    "residential contractor software",
    "house building software",
    "new home construction software",
    "home builder project management",
    "residential scheduling software",
  ],
  alternates: {
    canonical: "https://pmspace.ai/residential-construction-software/",
  },
  openGraph: {
    title: "Best Residential Construction Software 2026 | Space AI",
    description:
      "AI-powered software for home builders. Client portal, selections, scheduling & more. Start free.",
    url: "https://pmspace.ai/residential-construction-software/",
    type: "website",
    images: [
      {
        url: "https://pmspace.ai/assets/images/residential-construction-software.png",
        width: 1200,
        height: 630,
        alt: "Residential Construction Software - Space AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Residential Construction Software 2026",
    description: "Build homes smarter with AI. Free trial available.",
  },
};

export default function Page() {
  return <ResidentialConstructionSoftwarePage />;
}
