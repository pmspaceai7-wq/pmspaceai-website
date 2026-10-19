import type { Metadata } from "next";
import Link from "next/link";
import AlternativePage from "./AlternativePage";

export const metadata: Metadata = {
  title: "Autodesk Construction Cloud Alternative | Space AI vs ACC 2026",
  description: "Compare Space AI vs Autodesk Construction Cloud (ACC/BIM 360). Get better AI features, simpler pricing, and unified platform without Autodesk lock-in.",
  keywords: "Autodesk Construction Cloud alternative, BIM 360 alternative, ACC alternative, Space AI vs Autodesk, construction software",
  openGraph: { title: "Autodesk Construction Cloud Alternative | Space AI", description: "Modern alternative to Autodesk ACC with AI-powered features.", type: "website", url: "https://pmspace.ai/alternatives/autodesk-construction-cloud-alternative/" },
  alternates: { canonical: "https://pmspace.ai/alternatives/autodesk-construction-cloud-alternative/" },
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
