// app/tools/clinic-management/page.tsx

import { Metadata } from "next";
import ClinicOperationsPage from "./ClinicOperationsPage";


// Optional: Add metadata for SEO
export const metadata: Metadata = {
  title: "Clinic Management Software with AI Automation | Space AI",
  description:
    "Run clinic operations with AI-driven scheduling, patient flow automation, compliance tracking, and performance analytics across healthcare teams.",
  keywords: [
    "healthcare construction management",
    "hospital construction software",
    "medical facility construction",
    "clinic construction management",
    "healthcare project management",
  ],
  alternates: {
    canonical: "https://pmspace.ai/tools/clinic-management/",
  },
  openGraph: {
    title: "Clinic Management Software with AI Automation | Space AI",
    description: "Streamline scheduling, workflows, and clinic performance with Space AI.",
    url: "https://pmspace.ai/tools/clinic-management/",
    type: "website",
  },
};

export default function Page() {
  return <ClinicOperationsPage />;
}
