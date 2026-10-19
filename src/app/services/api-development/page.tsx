import { Metadata } from "next";
import APIDevelopmentPage from "./APIDevelopmentPage";


// Define the metadata for the page, including the canonical URL.
export const metadata: Metadata = {
  title: "Construction API Development & Integration | Space AI Services",
  description:
    "Custom API development for construction software. Connect your systems, eliminate data silos, and enable intelligent automation across your entire project lifecycle with Space AI.",
  keywords: [
    "construction api development",
    "construction software integration",
    "api integration services",
    "construction data integration",
    "custom construction api",
  ],
  alternates: {
    canonical: "https://pmspace.ai/services/api-development/",
  },
  openGraph: {
    title: "API Development & Integration | Space AI Services",
    description: "Custom API solutions to connect your construction technology stack.",
    url: "https://pmspace.ai/services/api-development/",
    type: "website",
  },
};

export default function Page() {
  return <APIDevelopmentPage />;
}