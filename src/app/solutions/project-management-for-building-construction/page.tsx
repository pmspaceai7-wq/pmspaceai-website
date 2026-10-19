// app/solutions/project-management-for-building-construction/page.tsx
import { Metadata } from "next";
import BuildingPMPage from "./BuildingPMPage";


export const metadata: Metadata = {
  title: "Project Management for Building Construction | Space AI",
  description:
    "Gain live visibility, automate reporting, and forecast issues early. Space AI aligns stakeholders and protects budgets on every building project.",
  keywords: [
    "building construction project management",
    "construction PM software",
    "building project software",
    "construction scheduling software",
    "building management platform",
  ],
  alternates: {
    canonical: "https://pmspace.ai/solutions/project-management-for-building-construction/",
  },
  openGraph: {
    title: "Project Management for Building Construction | Space AI",
    description: "Gain live visibility, automate reporting, and forecast issues early on building projects.",
    type: "website",
    url: "https://pmspace.ai/solutions/project-management-for-building-construction/",
  },
};

export default function Page() {
  return <BuildingPMPage />;
}