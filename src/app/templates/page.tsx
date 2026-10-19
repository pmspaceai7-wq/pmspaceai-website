import { Metadata } from "next";
import TemplatesPage from "./TemplatesPage";

export const metadata: Metadata = {
  title: "Free Construction Project Templates | Space AI",
  description: "Download free construction project templates: Gantt charts, RFI forms, daily logs, safety checklists, and budget trackers for project managers.",
  keywords: "construction templates, project management templates, RFI template, Gantt chart template, construction daily log, safety checklist, budget template",
  openGraph: {
    title: "Free Construction Project Templates | Space AI",
    description: "Professional construction templates for project managers. Download Gantt charts, RFI forms, daily logs, and more.",
    url: "https://pmspace.ai/templates/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Construction Project Templates | Space AI",
    description: "Professional construction templates for project managers.",
  },
  alternates: {
    canonical: "https://pmspace.ai/templates/",
  },
};

export default function Page() {
  return <TemplatesPage />;
}
