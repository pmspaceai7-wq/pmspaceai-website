import { Metadata } from "next";
import AIAppDevelopmentPage from "./AIAppDevelopmentPage";


// Define the metadata for the page, including the canonical URL.
export const metadata: Metadata = {
  title: "AI Application Development for Construction | Space AI Services",
  description:
    "Custom AI-powered construction software development. Machine learning, predictive analytics, and intelligent automation solutions for the construction industry.",
  keywords: [
    "ai app development construction",
    "construction ai solutions",
    "machine learning construction",
    "predictive analytics construction software",
    "custom construction software development",
  ],
  alternates: {
    canonical: "https://pmspace.ai/services/ai-app-development/",
  },
  openGraph: {
    title: "AI Application Development | Space AI Services",
    description: "Custom AI solutions for construction: machine learning, predictive analytics, automation.",
    url: "https://pmspace.ai/services/ai-app-development/",
    type: "website",
  },
};

export default function Page() {
  return <AIAppDevelopmentPage />;
}