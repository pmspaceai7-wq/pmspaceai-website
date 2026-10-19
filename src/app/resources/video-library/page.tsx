// src/app/resources/video-library/page.tsx
// TASK 59: Video Content Hub - Product demos, feature walkthroughs, testimonials
// SEO-optimized video resource page for construction management software

import { Metadata } from "next";
import VideoLibraryClient from "./VideoLibraryClient";

export const metadata: Metadata = {
  title: "Construction Management Video Library | Demos | Space AI",
  description: "Watch product demos, feature walkthroughs, and customer testimonials for Space AI. Learn how AI transforms construction project management.",
  keywords: [
    "construction management software demo",
    "project management software tutorial",
    "construction software walkthrough",
    "space ai demo video",
    "ai construction management demo",
    "construction software training videos",
    "project management tutorial videos",
    "construction technology demos",
  ],
  openGraph: {
    title: "Construction Management Software Video Library | Space AI",
    description: "Watch product demos, feature walkthroughs, and customer success stories. Learn how Space AI AI transforms construction project management.",
    type: "website",
    url: "https://pmspace.ai/resources/video-library/",
    images: [{ url: "/assets/images/projectmanagementdashboard.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Management Software Video Library | Space AI",
    description: "Watch product demos and tutorials for AI-powered construction management.",
  },
  alternates: {
    canonical: "https://pmspace.ai/resources/video-library/",
  },
};

export default function VideoLibraryPage() {
  return <VideoLibraryClient />;
}
