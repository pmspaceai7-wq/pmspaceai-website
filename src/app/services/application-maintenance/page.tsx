import { Metadata } from "next";
import ApplicationMaintenancePage from "./ApplicationMaintenencePage";


// Define the metadata for the page, including the canonical URL.
export const metadata: Metadata = {
  title: "Construction Software Maintenance & Support | Space AI Services",
  description:
    "24/7 application maintenance and support for construction software. Keep your platform reliable, secure, and running at peak performance with Space AI.",
  keywords: [
    "construction software maintenance",
    "construction software support",
    "application maintenance services",
    "construction tech support",
    "software support services",
  ],
  alternates: {
    canonical: "https://pmspace.ai/services/application-maintenance/",
  },
  openGraph: {
    title: "Application Maintenance & Support | Space AI",
    description: "24/7 maintenance and support for your construction software platform.",
    url: "https://pmspace.ai/services/application-maintenance/",
    type: "website",
  },
};

export default function Page() {
  return <ApplicationMaintenancePage />;
}