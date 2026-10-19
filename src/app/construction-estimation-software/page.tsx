import { Metadata } from "next";
import Link from "next/link";
import ConstructionEstimatingSoftwarePage from "./ConstructionEstimatingSoftwarePage";

export const metadata: Metadata = {
  title: "AI Construction Estimating Software 2026 | Space AI",
  description:
    "Best construction estimating software for contractors. AI-powered takeoffs, accurate cost databases, seamless bid integration. Create winning estimates faster.",
  keywords: [
    "construction estimating software",
    "construction cost estimating software",
    "contractor estimating software",
    "takeoff software",
    "construction estimate software",
    "building estimating software",
    "construction cost estimation",
    "estimating software for contractors",
    "digital takeoff software",
    "construction pricing software",
    "estimating and bidding software",
    "preconstruction estimating",
  ],
  alternates: {
    canonical: "https://pmspace.ai/construction-estimation-software/",
  },
  openGraph: {
    title: "AI Construction Estimating Software 2026 | Space AI",
    description:
      "AI-powered estimating for contractors. Digital takeoffs, cost databases, bid integration. Create accurate estimates faster.",
    url: "https://pmspace.ai/construction-estimation-software/",
    type: "website",
    images: [
      {
        url: "https://pmspace.ai/assets/images/construction-estimating-software.png",
        width: 1200,
        height: 630,
        alt: "Construction Estimating Software - Space AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Construction Estimating Software 2026",
    description: "Create winning estimates with AI. Free trial available.",
  },
};

export default function Page() {
  return (
    <>
      <ConstructionEstimatingSoftwarePage />
      <nav aria-label="Related resources" style={{ display: "none" }}>
        <Link href="/construction-cost-management-software/">Construction Cost Management Software</Link>
        <Link href="/construction-software-demo/">Book a Construction Software Demo</Link>
      </nav>
    </>
  );
}
