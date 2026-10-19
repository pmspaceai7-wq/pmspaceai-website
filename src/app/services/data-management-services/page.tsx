import { Metadata } from "next";
import DataManagementPage from "./DataManagementPage";


// Define the metadata for the page, including the canonical URL.
export const metadata: Metadata = {
  title: "Construction Data Management Services | Space AI",
  description:
    "Enterprise data management for construction. Data governance, cloud architecture, and analytics solutions for smarter decisions and predictive project insights.",
  keywords: [
    "construction data management",
    "construction data analytics",
    "construction data governance",
    "construction cloud solutions",
    "project data management",
  ],
  alternates: {
    canonical: "https://pmspace.ai/services/data-management-services/",
  },
  openGraph: {
    title: "Data Management Services | Space AI",
    description: "Enterprise data management solutions for construction organizations.",
    url: "https://pmspace.ai/services/data-management-services/",
    type: "website",
  },
};

export default function Page() {
  return <DataManagementPage />;
}