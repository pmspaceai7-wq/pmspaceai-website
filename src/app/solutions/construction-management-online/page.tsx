// app/solutions/construction-management-online/page.tsx
import { Metadata } from "next";
import OnlineConstructionManagementPage from "./OnlineConstructionManagementPage";


export const metadata: Metadata = {
    title: "Online Construction Management Platform | Cloud-Based | Space AI",
  description:
    "Manage schedules, documents, and teams in one place. Get predictive alerts, real-time dashboards, and automated workflows for every project stage.",
  keywords: [
    "online construction management",
    "cloud construction software",
    "web-based construction management",
    "construction platform online",
    "remote construction management",
  ],
  alternates: {
    canonical: "https://pmspace.ai/solutions/construction-management-online/",
  },
  openGraph: {
  title: "Online Construction Management Platform | Cloud-Based | Space AI",
    description: "Manage schedules, documents, and teams in one place with predictive alerts and automation.",
    type: "website",
    url: "https://pmspace.ai/solutions/construction-management-online/",
  },
};

export default function Page() {
  return <OnlineConstructionManagementPage />;
}