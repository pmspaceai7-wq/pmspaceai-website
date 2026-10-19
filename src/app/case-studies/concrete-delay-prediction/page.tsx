import { Metadata } from "next";
import ConcreteDelayPage from "./ConcreteDelayPage";

export const metadata: Metadata = {
  title: "AI Case Study: Predicting Concrete Delays | Space AI",
  description:
    "Learn how Space AI predicted a 3-week delay in concrete pouring, saving $145,000 in project costs. Real-world predictive analytics in construction.",
  keywords: [
    "construction delay prediction",
    "ai in construction case study",
    "project management ai examples",
    "predictive analytics construction",
    "concrete pouring schedule optimization",
  ],
  alternates: {
    canonical: "https://pmspace.ai/case-studies/concrete-delay-prediction/",
  },
  openGraph: {
    title: "How AI Predicted a 3-Week Delay in Concrete Pouring",
    description: "Real-world case study: avoiding costly delays with Space AI predictive analytics.",
    url: "https://pmspace.ai/case-studies/concrete-delay-prediction/",
    type: "article",
  },
};

export default function Page() {
  return <ConcreteDelayPage/>;
}
