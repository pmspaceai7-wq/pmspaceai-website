import { Metadata } from "next";
import AIConstructionHubPage from "./AIConstructionHubPage";

export const metadata: Metadata = {
  title: "AI in Construction | Articles, Research & Industry Insights | Space AI",
  description:
    "Explore AI in construction: AI-driven scheduling, predictive analytics, machine learning, and trends shaping the industry's future.",
  keywords: [
    "AI in construction",
    "construction AI",
    "future of construction",
    "AI construction management",
    "construction technology trends",
    "predictive analytics construction",
    "machine learning construction",
  ],
  alternates: {
    canonical: "https://pmspace.ai/resources/ai-construction/",
  },
  openGraph: {
    title: "AI in Construction | Articles, Research & Industry Insights | Space AI",
    description: "Deep-dive articles on how AI is transforming the construction industry.",
    url: "https://pmspace.ai/resources/ai-construction/",
    type: "website",
  },
};

export default function Page() {
  return <AIConstructionHubPage />;
}
