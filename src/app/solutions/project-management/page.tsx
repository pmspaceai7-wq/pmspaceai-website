import { Metadata } from "next";
import Link from "next/link";
import BuildingProjectManagementPage from "./ProjectManagementPage";


export const metadata: Metadata = {
    title: "Construction Project Management Solution | Space AI",
  description:
    "AI construction project management: plan, track, and collaborate in real time. Predict delays, prevent overruns, and automate reporting.",
  keywords: [
    "construction project management software",
    "project management software construction",
    "construction project tracking",
    "project management platform",
    "ai project management",
  ],
  alternates: {
    canonical: "https://pmspace.ai/solutions/project-management/",
  },
  openGraph: {
  title: "Construction Project Management Solution | Space AI",
    description: "AI-powered project management for construction teams.",
    url: "https://pmspace.ai/solutions/project-management/",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <BuildingProjectManagementPage />
      <nav aria-label="Related resources" style={{ display: "none" }}>
        <Link href="/construction-project-management-system/">Construction Project Management System</Link>
        <Link href="/construction-software-demo/">Book a Construction Software Demo</Link>
      </nav>
    </>
  );
}