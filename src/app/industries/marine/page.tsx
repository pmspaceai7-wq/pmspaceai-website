import { Metadata } from "next";
import MarineProjectsPage from "./MarineProjectsPage";


export const metadata: Metadata = {
  title: "Marine Construction Software | Space AI",
  description:
    "AI construction management for marine projects. Manage shipbuilding, offshore structures, and port development with precision tracking.",
  keywords: [
    "marine construction management",
    "shipyard construction software",
    "port construction management",
    "offshore construction software",
    "marine project management",
  ],
  alternates: {
    canonical: "https://pmspace.ai/industries/marine/",
  },
  openGraph: {
    title: "Marine Construction Management Software | Space AI",
    description: "AI-powered project management for marine and offshore construction.",
    url: "https://pmspace.ai/industries/marine/",
    type: "website",
  },
};

export default function Page() {
  return <MarineProjectsPage />;
}
