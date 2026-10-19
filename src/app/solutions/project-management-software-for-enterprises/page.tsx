// app/solutions/project-management-software-for-enterprises/page.tsx
import { Metadata } from "next";
import EnterprisePMSoftwarePage from "./EnterprisePMSoftwarePage";


export const metadata: Metadata = {
    title: "Enterprise PM Software | Construction Portfolio Management | Space AI",
  description:
    "Enterprise-grade governance, predictive risk, and live dashboards. Align teams, de-risk portfolios, and accelerate strategic delivery.",
  keywords: [
    "enterprise project management software",
    "enterprise PM software",
    "corporate project management",
    "portfolio management software",
    "enterprise construction software",
  ],
  alternates: {
    canonical: "https://pmspace.ai/solutions/project-management-software-for-enterprises/",
  },
  openGraph: {
  title: "Enterprise PM Software | Construction Portfolio Management | Space AI",
    description: "Enterprise-grade governance, predictive risk, and live dashboards for strategic delivery.",
    type: "website",
    url: "https://pmspace.ai/solutions/project-management-software-for-enterprises/",
  },
};

export default function Page() {
  return <EnterprisePMSoftwarePage />;
}