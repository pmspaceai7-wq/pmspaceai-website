import { Metadata } from "next";
import GeneralContractorPage from "./GeneralContractorPage";

export const metadata: Metadata = {
    title: "Construction Software for General Contractors | Industry Guide | Space AI",
  description:
    "AI construction management for general contractors. Coordinate subcontractors, predict delays 45 days early, and manage projects from one platform.",
  keywords: [
    "construction software for general contractors",
    "general contractor project management software",
    "best general contractor software",
    "subcontractor coordination software",
    "construction scheduling software",
  ],
  alternates: {
    canonical: "https://pmspace.ai/industries/general-contractors/",
  },
  openGraph: {
  title: "Construction Software for General Contractors | Industry Guide | Space AI",
    description:
      "AI-powered project management for general contractors — scheduling, documents, and predictive delay detection in one platform.",
    url: "https://pmspace.ai/industries/general-contractors/",
    type: "website",
  },
};

export default function Page() {
  return <GeneralContractorPage />;
}
