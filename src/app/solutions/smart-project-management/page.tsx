import { Metadata } from "next";
import SmartProjectManagementPage from "./SmartProjectManagementPage";

export const metadata: Metadata = {
    title: "Smart Project Management | AI-Powered Construction PM | Space AI",
  description: "Move from hindsight to foresight with predictive analytics. Automate tasks, prevent delays, and deliver outcomes with data-driven decisions.",
  keywords: [
    "smart project management",
    "AI project management",
    "predictive project management",
    "automated project management",
    "intelligent PM software",
  ],
  alternates: {
    canonical: "https://pmspace.ai/solutions/smart-project-management/",
  },
  openGraph: {
  title: "Smart Project Management | AI-Powered Construction PM | Space AI",
    description: "Move from hindsight to foresight with predictive analytics and automation.",
    type: "website",
    url: "https://pmspace.ai/solutions/smart-project-management/",
  },
};

export default function Page() {
  return <SmartProjectManagementPage />;
}