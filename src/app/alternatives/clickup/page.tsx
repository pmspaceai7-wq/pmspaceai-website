import type { Metadata } from "next";
import AlternativePage from "./AlternativePage";

export const metadata: Metadata = {
  title: "ClickUp Alternative for Construction | Space AI vs ClickUp 2026",
  description: "Compare Space AI vs ClickUp for construction management. Get industry-specific features, BIM integration, and construction workflows ClickUp lacks.",
  keywords: "ClickUp alternative, ClickUp construction, Space AI vs ClickUp, construction project management, work management software",
  openGraph: { title: "ClickUp Alternative for Construction | Space AI", description: "Purpose-built construction management vs generic project tool.", type: "website", url: "https://pmspace.ai/alternatives/clickup/" },
  alternates: { canonical: "https://pmspace.ai/alternatives/clickup/" },
};

export default function Page() { return <AlternativePage />; }
