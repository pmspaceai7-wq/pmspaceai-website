import { Metadata } from "next";
import ToolsSection from "./ToolSection";


export const metadata: Metadata =  {
  title: "Space AI Core | AI Platform for Construction Management",
  description:
    "Space AI Core: all-in-one AI construction platform with workflow automation, document processing, BIM integration, and unified data management.",
  keywords: [
    "ai construction platform",
    "construction workflow automation",
    "intelligent document processing construction",
    "bim integration software",
    "construction data platform",
    "unified construction software",
  ],
  alternates: {
    canonical: "https://pmspace.ai/core/",
  },
  openGraph: {
    title: "Space AI Core | Unified AI Construction Platform",
    description: "All-in-one AI platform: workflow automation, document processing, BIM, and data integration.",
    url: "https://pmspace.ai/core/",
    type: "website",
  },
}


export default function Page() {
  return <ToolsSection/>;
}

