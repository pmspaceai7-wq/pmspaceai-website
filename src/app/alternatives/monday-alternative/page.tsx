import type { Metadata } from "next";
import Link from "next/link";
import AlternativePage from "./AlternativePage";

export const metadata: Metadata = {
  title: "Monday.com Alternative for Construction | Space AI",
  description: "Looking for a construction-specific Monday.com alternative? Space AI offers BIM integration and construction workflows that Monday.com lacks.",
  keywords: "Monday.com alternative, Monday.com construction, Space AI vs Monday, construction project management, work management software",
  openGraph: { title: "Monday.com Alternative for Construction | Space AI", description: "Why construction teams choose Space AI over Monday.com for industry-specific features.", type: "website", url: "https://pmspace.ai/alternatives/monday-alternative/" },
  alternates: { canonical: "https://pmspace.ai/alternatives/monday-alternative/" },
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
