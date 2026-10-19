// app/solutions/best-construction-software-for-general-contractors/page.tsx
import { Metadata } from "next";
import GCConstructionSoftwarePage from "./GCConstructionSoftwarePage";


export const metadata: Metadata = {
    title: "Best GC Software | Construction Management for General Contractors | Space AI",
  description:
    "Control risk, schedule, and cost with predictive insights. Space AI unifies field, office, and subs to deliver projects on time and budget.",
  keywords: [
    "general contractor software",
    "GC construction software",
    "contractor management software",
    "construction contractor tools",
    "best software for contractors",
  ],
  alternates: {
    canonical: "https://pmspace.ai/solutions/best-construction-software-for-general-contractors/",
  },
  openGraph: {
  title: "Best GC Software | Construction Management for General Contractors | Space AI",
    description: "Control risk, schedule, and cost with predictive insights for general contractors.",
    type: "website",
    url: "https://pmspace.ai/solutions/best-construction-software-for-general-contractors/",
  },
};

export default function Page() {
  return <GCConstructionSoftwarePage />;
}