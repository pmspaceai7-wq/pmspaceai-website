import { Metadata } from "next";
import SpaceAIPage from "./PmspaceAIPage";


export const metadata: Metadata = {
    title: "Construction Management Solution | Space AI Platform",
  description:
    "AI construction management with predictive analytics and real-time collaboration. Reduce delays by 45% and cut costs by 23%.",
  keywords: [
    "construction management solution",
    "construction management platform",
    "ai construction management",
    "construction project management system",
    "construction management system",
  ],
  alternates: {
    canonical: "https://pmspace.ai/solutions/construction-management/",
  },
  openGraph: {
  title: "Construction Management Solution | Space AI Platform",
    description: "AI-powered construction management with predictive analytics and intelligent automation.",
    url: "https://pmspace.ai/solutions/construction-management/",
    type: "website",
  },
};

export default function Page() {
  return <SpaceAIPage />;
}