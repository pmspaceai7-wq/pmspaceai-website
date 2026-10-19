import { Metadata } from "next";
import EnterpriseConstructionSoftwarePage from "./EnterpriseConstructionSoftwarePage";

export const metadata: Metadata = {
  title: "Enterprise Construction Software | Portfolio Management | Space AI",
  description:
    "Enterprise-grade construction management software with AI, portfolio management, and advanced controls for large construction firms.",
  alternates: {
    canonical: "https://pmspace.ai/solutions/construction-software-for-enterprises/",
  },
};

export default function Page() {
  return <EnterpriseConstructionSoftwarePage />;
}
