import { Metadata } from "next";
import MainContent from "./ConstructionSolution";
export const metadata: Metadata = {
    title: "AI Powered Construction Solutions | Project Success | Space AI",
  description:
    "Predict delays, cut overruns, and optimize resources with Space AI. See equipment, materials, and risk insights in real time across every job site.",
  keywords: [
    "AI construction solutions",
    "construction project success",
    "construction optimization",
    "construction resource management",
    "job site management software",
  ],
  alternates: {
    canonical: "https://pmspace.ai/solutions/construction-solutions/",
  },
  openGraph: {
  title: "AI Powered Construction Solutions | Project Success | Space AI",
    description: "Predict delays, cut overruns, and optimize resources across every job site.",
    type: "website",
    url: "https://pmspace.ai/solutions/construction-solutions/",
  },
};

export default function Page() {
  return <MainContent/>;
}