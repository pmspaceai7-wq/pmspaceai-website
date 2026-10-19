import { Metadata } from "next";
import DigitalTransformationPage from "./DigitalTransformationPage";


// Define the metadata for the page, including the canonical URL.
export const metadata: Metadata = {
  title: "Digital Transformation for Construction | Space AI Services",
  description:
    "Space AI helps construction teams adopt modern software, automation, and data practices — reducing delays, cutting costs, and unlocking predictable project outcomes across portfolios.",
  keywords: [
    "digital transformation construction",
    "construction technology consulting",
    "construction software implementation",
    "construction process automation",
    "construction digital strategy",
  ],
  alternates: {
    canonical: "https://pmspace.ai/services/digital-transformation-services/",
  },
  openGraph: {
    title: "Digital Transformation for Construction | Space AI",
    description: "Modernize your construction operations with AI-powered digital transformation.",
    url: "https://pmspace.ai/services/digital-transformation-services/",
    type: "website",
  },
};

export default function Page() {
  return <DigitalTransformationPage />;
}