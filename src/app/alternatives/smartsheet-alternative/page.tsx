import type { Metadata } from "next";
import Link from "next/link";
import AlternativePage from "./AlternativePage";

export const metadata: Metadata = {
  title: "Smartsheet Alternative for Construction | Space AI",
  description: "Compare Space AI vs Smartsheet for construction management. Get BIM integration, construction-specific features, and AI automation that Smartsheet lacks.",
  keywords: "Smartsheet alternative, Smartsheet construction, Space AI vs Smartsheet, construction spreadsheet alternative, project management software",
  openGraph: { title: "Smartsheet Alternative for Construction | Space AI", description: "Why construction teams choose Space AI over Smartsheet.", type: "website", url: "https://pmspace.ai/alternatives/smartsheet-alternative/" },
  alternates: { canonical: "https://pmspace.ai/alternatives/smartsheet-alternative/" },
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
