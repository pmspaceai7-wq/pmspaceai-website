import type { Metadata } from "next";
import Link from "next/link";
import AlternativePage from "./AlternativePage";

export const metadata: Metadata = {
  title: "Wrike Alternative for Construction | Space AI vs Wrike 2026",
  description: "Compare Space AI vs Wrike for construction project management. Get BIM integration, construction-specific workflows, and industry features Wrike lacks.",
  keywords: "Wrike alternative, Wrike construction, Space AI vs Wrike, construction project management, work management software",
  openGraph: { title: "Wrike Alternative for Construction | Space AI", description: "Construction-specific alternative to Wrike project management.", type: "website", url: "https://pmspace.ai/alternatives/wrike-alternative/" },
  alternates: { canonical: "https://pmspace.ai/alternatives/wrike-alternative/" },
};

export default function Page() {
  return (
    <>
      <AlternativePage />
      <nav aria-label="Related resources" style={{ display: "none" }}>
        <Link href="/alternatives/">All Construction Software Alternatives</Link>
        <Link href="/construction-software-demo/">Book a Construction Software Demo</Link>
      </nav>
    </>
  );
}
