import { Metadata } from "next";
import SoftwareIntegrationPage from "./SoftwareIntegrationPage";


// Define the metadata for the page, including the canonical URL.
export const metadata: Metadata = {
  title: "Construction Software Integration Services | Space AI",
  description:
    "End-to-end construction software integration services. EAI, API, and AI-driven integration to streamline data flow and maximize operational efficiency.",
  keywords: [
    "construction software integration",
    "construction system integration",
    "enterprise application integration",
    "construction technology integration",
    "software integration services",
  ],
  alternates: {
    canonical: "https://pmspace.ai/services/software-integration-services/",
  },
  openGraph: {
    title: "Software Integration Services | Space AI",
    description: "Seamless construction software integration for unified operations.",
    url: "https://pmspace.ai/services/software-integration-services/",
    type: "website",
  },
};

export default function Page() {
  return <SoftwareIntegrationPage />;
}
