import { Metadata } from "next";
import ConstructionTrends2026Page from "./ConstructionTrends2026Page";

export const metadata: Metadata = {
  title: "2026 State of AI in Construction | Trends & Research Report | Space AI",
  description:
    "Download the 2026 State of AI in Construction report. Key trends in predictive scheduling, generative design, and robotics shaping construction.",
  keywords: [
    "construction ai trends 2026",
    "state of construction ai",
    "future of construction technology",
    "ai in construction report",
    "construction industry outlook 2026",
  ],
  alternates: {
    canonical: "https://pmspace.ai/resources/2026-construction-ai-trends/",
  },
  openGraph: {
    title: "2026 State of AI in Construction | Trends & Research Report | Space AI",
    description: "The definitive guide to AI adoption in construction for 2026. Data, trends, and predictions.",
    url: "https://pmspace.ai/resources/2026-construction-ai-trends/",
    type: "article",
    images: [
      {
        url: "https://pmspace.ai/assets/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "2026 Construction AI Trends",
      },
    ],
  },
};

export default function Page() {
  return <ConstructionTrends2026Page/>;
}
