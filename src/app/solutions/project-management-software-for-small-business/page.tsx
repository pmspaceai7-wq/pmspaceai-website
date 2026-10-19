import { Metadata } from "next";
import SmallBusinessPMSoftwarePage from "./SmallBusinessPMSoftwarePage";

export const metadata: Metadata = {
  title: "Small Business PM Software | Construction Project Tools | Space AI",
  description:
    "Affordable project management software designed for small construction businesses. Simple, powerful, and budget-friendly.",
  alternates: {
    canonical: "https://pmspace.ai/solutions/project-management-software-for-small-business/",
  },
};

export default function Page() {
  return <SmallBusinessPMSoftwarePage />;
}
