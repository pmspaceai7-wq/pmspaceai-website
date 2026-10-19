import type { Metadata } from "next";
import TryItNowFlow from "./PageContent";

export const metadata: Metadata = {
  title: "Try Space AI Free | Construction Management Software Test Drive",
  description:
    "Get instant free access to Space AI. Set up your workspace, explore AI-powered construction management tools, and see how predictive project controls work for your team.",
  alternates: {
    canonical: "https://pmspace.ai/try-it-now/",
  },
  openGraph: {
    title: "Try Space AI Free | Construction Management Software Test Drive",
    description:
      "Get instant free access to Space AI and explore AI-powered construction management tools.",
    url: "https://pmspace.ai/try-it-now/",
    type: "website",
  },
};

export default function Page() {
  return <TryItNowFlow />;
}
