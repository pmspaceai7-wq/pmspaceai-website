import { Metadata } from "next";
import ProcorePricingComparisonPage from "./ProcorePricingComparisonPage";

export const metadata: Metadata = {
  title: "Procore Pricing 2026: Complete Cost Breakdown vs Space AI | Save 40-60%",
  description:
    "Procore pricing starts at $375/user/month. Compare Procore's hidden costs, per-user fees, and enterprise pricing vs Space AI's transparent AI-powered alternative. Free tier available.",
  keywords: [
    "procore pricing",
    "procore cost",
    "procore pricing per user",
    "how much does procore cost",
    "procore subscription cost",
    "procore enterprise pricing",
    "procore vs pmspace pricing",
    "procore alternative pricing",
    "construction software pricing",
    "procore monthly cost",
  ],
  alternates: {
    canonical: "https://pmspace.ai/compare/procore-pricing/",
  },
  openGraph: {
    title: "Procore Pricing 2026: Full Cost Breakdown & Cheaper Alternatives",
    description:
      "Complete Procore pricing guide. See real costs, hidden fees, and how Space AI saves construction teams 40-60% with AI-powered features included.",
    url: "https://pmspace.ai/compare/procore-pricing/",
    type: "article",
    images: [
      {
        url: "https://pmspace.ai/assets/images/procore-pricing-comparison.png",
        width: 1200,
        height: 630,
        alt: "Procore Pricing vs Space AI Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Procore Pricing 2026: Save 40-60% with Space AI",
    description: "Complete cost breakdown of Procore vs Space AI. See why teams are switching.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Page() {
  return <ProcorePricingComparisonPage />;
}
