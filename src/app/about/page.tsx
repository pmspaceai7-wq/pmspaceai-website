import { Metadata } from "next";
import AboutPage from "./AboutPage";

export const metadata: Metadata = {
  title: "About Space AI | Construction Intelligence Platform",
  description:
    "Space AI is an AI-native construction platform combining project management, AI agents, workflow automation, BIM, procurement, and predictive analytics.",
  keywords: [
    "about space ai",
    "construction ai platform",
    "ai construction management",
    "pmspace ai",
    "construction intelligence platform",
    "ai project management construction",
  ],
  alternates: {
    canonical: "https://pmspace.ai/about/",
  },
  openGraph: {
    title: "About Space AI | AI-Native Construction Intelligence Platform",
    description:
      "Discover how Space AI is transforming construction management with AI agents, workflow automation, BIM, procurement intelligence, and predictive analytics.",
    url: "https://pmspace.ai/about/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Space AI | AI-Native Construction Intelligence Platform",
    description:
      "Space AI unifies project management, AI agents, document intelligence, BIM, and predictive analytics into one construction platform.",
  },
};

export default function Page() {
  return <AboutPage />;
}
