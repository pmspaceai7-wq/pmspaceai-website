import { Metadata } from "next";
import Link from "next/link";
import OilAndGasPage from "./OilAndGasPage";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Oil & Gas Construction Software | Space AI",
  description:
    "AI construction management for oil & gas projects. Manage upstream to downstream energy builds with safety compliance and predictive analytics.",
  keywords: [
    "oil and gas construction management",
    "energy construction software",
    "oil gas project management",
    "refinery construction management",
    "pipeline construction software",
  ],
  alternates: {
    canonical: "https://pmspace.ai/industries/oil-and-gas/",
  },
  openGraph: {
    title: "Oil & Gas Construction Management Software | Space AI",
    description: "AI-powered project management for energy and oil & gas construction.",
    url: "https://pmspace.ai/industries/oil-and-gas/",
    type: "website",
  },
};

const oilGasFAQs = [
  {
    question: "How does Space AI manage safety compliance on oil and gas construction sites?",
    answer: "Space AI integrates HSE (Health, Safety, and Environment) protocols directly into project workflows. The platform tracks permit-to-work systems, monitors safety training certifications, enforces lockout/tagout procedures, and generates real-time safety dashboards. Automated alerts flag non-compliance before incidents occur, helping maintain OSHA and API safety standards."
  },
  {
    question: "Can Space AI handle pipeline construction across multiple jurisdictions?",
    answer: "Yes. Space AI supports linear construction projects like pipelines with mile-marker-based progress tracking, right-of-way management, and multi-jurisdictional permit coordination. The platform automatically adjusts schedules based on environmental windows, easement requirements, and regulatory constraints across state and federal boundaries."
  },
  {
    question: "How does the platform manage turnaround and shutdown scheduling for refineries?",
    answer: "Space AI's turnaround module optimizes shutdown scheduling by analyzing equipment criticality, maintenance history, and production impact. The platform coordinates thousands of concurrent tasks across multiple units, manages craft labor allocation, and uses AI to compress turnaround duration while maintaining safety and quality standards."
  },
  {
    question: "Does Space AI support offshore construction project management?",
    answer: "Absolutely. Space AI handles offshore construction with weather-window optimization, vessel scheduling, and logistics coordination for remote locations. The platform manages hook-up and commissioning sequences, tracks fabrication progress at onshore yards, and coordinates sail-away schedules with offshore installation campaigns."
  },
  {
    question: "What cost savings do energy companies achieve with Space AI?",
    answer: "Energy companies using Space AI typically achieve 20-30% reduction in project overruns, 35% fewer safety incidents through predictive monitoring, and 15-25% improvement in turnaround efficiency. For a $500M refinery expansion, this translates to $75-125M in savings from avoided delays, rework, and safety-related shutdowns."
  }
];

export default function Page() {
  return (
    <>
      <FAQSchema faqs={oilGasFAQs} />
      <OilAndGasPage />
      <nav aria-label="Related resources" style={{ display: "none" }}>
        <Link href="/solutions/construction-software-for-enterprises/">Enterprise Construction Software</Link>
        <Link href="/construction-software-demo/">Book a Construction Software Demo</Link>
      </nav>
    </>
  );
}

