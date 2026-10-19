import { Metadata } from "next";
import CracksInFoundationPage from "./CracksInFoundationPage";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Construction Industry Challenges | AECO Problems | Space AI",
  description:
    "Discover how Space AI addresses core construction industry challenges -- from flawed planning to outdated systems -- using intelligent automation and AI.",
  keywords: [
    "construction industry challenges",
    "aeco industry problems",
    "construction technology gaps",
    "construction planning issues",
    "construction software problems",
  ],
  alternates: { canonical: "https://pmspace.ai/platform/cracks-in-foundation/" },
  openGraph: {
    title: "Construction Industry Challenges | Space AI",
    description: "Addressing core AECO inefficiencies with intelligent automation.",
    url: "https://pmspace.ai/platform/cracks-in-foundation/",
    type: "website",
  },
};

const challengesFAQs = [
  { question: "What are the biggest challenges facing the construction industry today?", answer: "The construction industry faces persistent challenges including low productivity growth (only 1% annually vs. 3.6% for manufacturing), $1.6 trillion in annual waste from inefficiency, 80% of megaprojects exceeding budgets, chronic skilled labor shortages, and fragmented technology systems that prevent data-driven decision making." },
  { question: "Why is construction productivity so low compared to other industries?", answer: "Construction productivity lags because the industry relies heavily on manual processes, disconnected software tools, and reactive management. Unlike manufacturing which automated decades ago, construction still depends on spreadsheets, email, and paper-based workflows for critical decisions. Space AI addresses this gap with predictive AI and unified automation." },
  { question: "How does Space AI solve construction technology fragmentation?", answer: "Space AI provides a single platform that unifies project scheduling, cost management, document control, field reporting, and analytics. Rather than requiring 5-10 separate tools, teams work from one source of truth with AI connecting data across all project functions. This eliminates manual data transfer and conflicting information." },
  { question: "What is the cost of construction inefficiency?", answer: "The construction industry loses an estimated $1.6 trillion annually to inefficiency, representing approximately 30% of total construction spending. For a typical $100M project, this means $30M in avoidable waste from rework, delays, material waste, and administrative overhead. Space AI's predictive capabilities can recover 15-25% of this loss." },
  { question: "How can construction companies start their digital transformation?", answer: "The most effective approach is to start with a unified platform like Space AI rather than adding point solutions. Begin with scheduling and cost management, then expand to predictive analytics and automation. Most companies see ROI within the first project through reduced delays, fewer change orders, and better resource utilization." }
];

export default function Page() {
  return (
    <>
      <FAQSchema faqs={challengesFAQs} />
      <CracksInFoundationPage />
    </>
  );
}
