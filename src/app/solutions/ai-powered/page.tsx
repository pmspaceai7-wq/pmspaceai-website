import { Metadata } from "next";
import AIPoweredPage from "./AIPoweredPage";

export const metadata: Metadata = {
  title: "AI-Powered Construction Tools | Intelligent Automation for AECO | Space AI",
  description:
    "Experience AI-powered construction management with intelligent automation. Machine learning, predictive analytics, and smart workflows for AECO projects.",
  keywords: [
    "ai powered construction management",
    "ai construction software",
    "intelligent construction automation",
    "machine learning construction",
    "ai project management",
  ],
  alternates: {
    canonical: "https://pmspace.ai/solutions/ai-powered/",
  },
  openGraph: {
    title: "AI-Powered Construction Tools | Intelligent Automation for AECO | Space AI",
    description: "Intelligent automation and AI for construction project management.",
    url: "https://pmspace.ai/solutions/ai-powered/",
    type: "website",
  },
};



export default function Page() {
  return <AIPoweredPage/>;
}
