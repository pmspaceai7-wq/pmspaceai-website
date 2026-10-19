import { Metadata } from "next";
import EnterprisePage from "./EnterprisePage";


export const metadata: Metadata = {
  title: "Enterprise Construction Management Software | Space AI",
  description:
    "Enterprise construction management with advanced scalability, security, SSO, and custom integrations for large-scale projects and ENR 400 contractors.",
  keywords: [
    "enterprise construction software",
    "enterprise project management",
    "large scale construction management",
    "construction software for enterprises",
    "enterprise construction technology",
    "ENR 400 construction software",
  ],
  alternates: {
    canonical: "https://pmspace.ai/enterprise/",
  },
  openGraph: {
    title: "Enterprise Construction Management | Space AI",
    description: "Enterprise-grade construction management with AI. SSO, custom integrations, unlimited users.",
    url: "https://pmspace.ai/enterprise/",
    type: "website",
  },
};

export default function Page() {
  return <EnterprisePage />;
}