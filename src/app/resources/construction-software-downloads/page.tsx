import { Metadata } from "next";
import DownloadsClient from "./DownloadsClient";

export const metadata: Metadata = {
  title: "Free Construction Management Resources | Space AI",
  description: "Download free construction management resources: buyer's guides, templates, whitepapers, ROI calculators, and checklists for project managers.",
  keywords: [
    "construction management templates",
    "construction software buyer's guide",
    "construction project templates free",
    "construction ROI calculator",
    "construction whitepaper",
    "project management checklist construction",
    "construction software evaluation template",
    "free construction resources",
    "construction project checklist template",
  ],
  openGraph: {
    title: "Free Construction Management Resources | Templates & Tools | Space AI",
    description: "Download free construction management templates, guides, and tools. Essential resources for construction project managers.",
    type: "website",
    url: "https://pmspace.ai/resources/construction-software-downloads/",
  },
  alternates: {
    canonical: "https://pmspace.ai/resources/construction-software-downloads/",
  },
};

export default function DownloadsPage() {
  return <DownloadsClient />;
}
