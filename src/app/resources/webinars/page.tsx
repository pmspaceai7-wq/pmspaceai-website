// Task 67: Webinars & Events Landing Page
// SEO Target: "construction software webinars", "construction management training", "Space AI events"

import { Metadata } from "next";
import WebinarsClient from "./WebinarsClient";

export const metadata: Metadata = {
  title: "Webinars & Events | Construction Management Training | Space AI",
  description:
    "Join live webinars and virtual events to master AI-powered construction management. Expert-led training sessions, product demos, and industry insights.",
  keywords:
    "construction software webinars, construction management training, Space AI events, construction technology webinars, construction industry events, PM software training",
  openGraph: {
    title: "Webinars & Events | Construction Management Training | Space AI",
    description:
      "Join live webinars and events to master AI-powered construction management.",
    type: "website",
    url: "https://pmspace.ai/resources/webinars/",
  },
  alternates: {
    canonical: "https://pmspace.ai/resources/webinars/",
  },
};

export default function WebinarsPage() {
  return <WebinarsClient />;
}
