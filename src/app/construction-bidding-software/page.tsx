import { Metadata } from "next";
import ConstructionBiddingSoftwarePage from "./ConstructionBiddingSoftwarePage";

export const metadata: Metadata = {
  title: "Best Construction Bidding Software 2026 | Space AI",
  description:
    "Best construction bidding software for contractors and subcontractors. AI-powered bid analysis, automated invitations, proposal management. Win more bids today.",
  keywords: [
    "construction bidding software",
    "bid management software",
    "contractor bidding software",
    "subcontractor bidding software",
    "construction bid management",
    "bid invitation software",
    "construction proposal software",
    "bid tracking software",
    "construction bid software",
    "preconstruction software",
    "bid leveling software",
    "subcontractor prequalification",
  ],
  alternates: {
    canonical: "https://pmspace.ai/construction-bidding-software/",
  },
  openGraph: {
    title: "AI Construction Bidding Software 2026 | Space AI",
    description:
      "AI-powered bid management for contractors. Automated invitations, bid analysis, win more projects. Start free.",
    url: "https://pmspace.ai/construction-bidding-software/",
    type: "website",
    images: [
      {
        url: "https://pmspace.ai/assets/images/construction-bidding-software.png",
        width: 1200,
        height: 630,
        alt: "Construction Bidding Software - Space AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Construction Bidding Software 2026",
    description: "Win more bids with AI-powered bid management. Free trial available.",
  },
};

export default function Page() {
  return <ConstructionBiddingSoftwarePage />;
}
