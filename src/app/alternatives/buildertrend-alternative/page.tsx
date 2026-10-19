import type { Metadata } from "next";
import Link from "next/link";
import AlternativePage from "./AlternativePage";

export const metadata: Metadata = {
  title: "Buildertrend Alternative for Construction 2026 | Space AI",
  description:
    "Discover why construction teams switch from Buildertrend to Space AI for real-time cost visibility, integrated workflows, and AI-powered project management.",
  keywords:
    "Buildertrend alternative, Buildertrend competitor, construction management software, home builder software, construction CRM alternative, project cost control, construction project management",
  openGraph: {
    title: "Best Buildertrend Alternative 2026 | Space AI",
    description:
      "Why construction teams choose PMspace over Buildertrend for better cost visibility, integrated workflows, and enterprise scalability. Complete project control in one platform.",
    type: "website",
    url: "https://pmspace.ai/alternatives/buildertrend-alternative/",
  },
  alternates: {
    canonical: "https://pmspace.ai/alternatives/buildertrend-alternative/",
  },
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
