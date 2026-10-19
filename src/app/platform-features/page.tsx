import { Metadata } from "next";
import PlatformFeaturesPage from "./PlatformFeaturesPage";

export const metadata: Metadata = {
  title: "Platform Features | Space AI Construction Management",
  description:
    "Discover Space AI's comprehensive AI-powered tools that revolutionize construction management with predictive analytics, intelligent automation, and real-time project insights.",
  keywords: [
    "Space AI features",
    "construction management features",
    "AI platform features",
    "predictive analytics features",
    "construction software capabilities",
  ],
  alternates: {
    canonical: "https://pmspace.ai/platform-features/",
  },
  openGraph: {
    title: "Platform Features | Space AI Construction Management",
    description: "Discover Space AI's comprehensive suite of AI-powered construction management tools.",
    type: "website",
    url: "https://pmspace.ai/platform-features/",
  },
};


export default function Page() {
  return <PlatformFeaturesPage/>;
}
