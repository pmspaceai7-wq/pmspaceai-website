import { Metadata } from "next";
import DataManagementPage from "./DataManagementPage";

export const metadata: Metadata = {
  title: "Intelligent Data Management | Space AI Solutions",
  description:
    "Streamline structured and unstructured data with Space AI's Intelligent Data Management—unlock insights, automate workflows, and drive project success.",
  keywords: [
    "intelligent data management",
    "construction data management",
    "project data automation",
    "structured data management",
    "Space AI data solutions",
  ],
  alternates: {
    canonical: "https://pmspace.ai/solutions/data-management/",
  },
  openGraph: {
    title: "Intelligent Data Management | Space AI Solutions",
    description: "Streamline structured and unstructured data with Space AI's Intelligent Data Management.",
    type: "website",
    url: "https://pmspace.ai/solutions/data-management/",
  },
};




export default function Page() {
  return <DataManagementPage/>;
}
