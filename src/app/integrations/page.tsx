import type { Metadata } from "next";
import IntegrationsPage from "./IntegrationsPage";

export const metadata: Metadata = {
  title: "Space AI Integrations | Connect Your Construction Software",
  description:
    "Space AI integrates with 50+ tools including Autodesk, Revit, Microsoft 365, QuickBooks, and Sage. Connect your software for seamless workflows.",
  keywords:
    "Space AI integrations, construction software integrations, Autodesk integration, Revit integration, BIM integration, accounting integration, QuickBooks construction, Sage integration",
  openGraph: {
    title: "Space AI Integrations | Connect Your Construction Software",
    description:
      "Connect Space AI with 50+ tools you already use. Autodesk, Revit, Microsoft 365, QuickBooks, and more.",
    type: "website",
    url: "https://pmspace.ai/integrations/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Space AI Integrations",
    description:
      "Connect Space AI with 50+ construction tools for seamless workflows.",
  },
  alternates: {
    canonical: "https://pmspace.ai/integrations/",
  },
};

export default function Page() {
  return <IntegrationsPage />;
}
