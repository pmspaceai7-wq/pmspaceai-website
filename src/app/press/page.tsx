// Task 68: Press Room / News & Announcements Page
// SEO Target: "Space AI news", "construction software updates", "Space AI press releases"

import { Metadata } from "next";
import Link from "next/link";
import PressClient from "./PressClient";

export const metadata: Metadata = {
  title: "Press Room & News | Space AI | AI Construction Management",
  description:
    "Latest news, press releases, and announcements from Space AI. Stay updated on AI construction management innovations and company milestones.",
  keywords:
    "Space AI news, construction software press releases, Space AI announcements, construction technology updates, AI construction news",
  openGraph: {
    title: "Press Room & News | Space AI",
    description:
      "Latest news and announcements from Space AI - AI construction management.",
    type: "website",
    url: "https://pmspace.ai/press/",
  },
  alternates: {
    canonical: "https://pmspace.ai/press/",
  },
};

export default function PressPage() {
  return (
    <>
      <PressClient />
      <nav aria-label="Press related links" className="bg-black text-white pb-10">
        <div className="container mx-auto px-4 text-sm flex flex-wrap gap-3">
          <Link href="/resources/2026-construction-ai-trends/" className="text-white/80 hover:text-white underline">2026 Construction AI Trends</Link>
          <Link href="/resources/video-library/" className="text-white/80 hover:text-white underline">Video Library</Link>
          <Link href="/contact-specialists/" className="text-white/80 hover:text-white underline">Contact Specialists</Link>
        </div>
      </nav>
    </>
  );
}
