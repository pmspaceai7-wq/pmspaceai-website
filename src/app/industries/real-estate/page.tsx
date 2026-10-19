import { Metadata } from "next";
import RealEstatePage from "./RealEstatePage";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Real Estate Construction Software | Space AI",
  description:
    "AI-powered construction management for real estate developers. Track costs, predict delays, and deliver projects on time and budget.",
  keywords: [
    "real estate construction management",
    "property development software",
    "real estate project management",
    "construction software for developers",
    "commercial real estate construction",
  ],
  alternates: {
    canonical: "https://pmspace.ai/industries/real-estate/",
  },
  openGraph: {
    title: "Real Estate Construction Management Software | Space AI",
    description: "AI-powered project management for real estate developers and property managers.",
    url: "https://pmspace.ai/industries/real-estate/",
    type: "website",
  },
};

const realEstateFAQs = [
  {
    question: "How does Space AI help real estate developers manage multiple properties simultaneously?",
    answer: "Space AI provides a unified portfolio dashboard where developers can track all active projects in real-time. Each property shows live progress percentages, budget burn rates, and risk alerts. Developers can compare timelines across properties, reallocate shared resources, and generate investor-ready reports for their entire portfolio from a single login."
  },
  {
    question: "Can Space AI predict construction delays before they happen on real estate projects?",
    answer: "Yes. Space AI's predictive analytics engine analyzes historical data, weather patterns, supply chain status, and labor availability to forecast delays up to 45 days in advance. For real estate developers, this means proactively adjusting schedules, notifying buyers of realistic move-in dates, and avoiding costly penalty clauses in purchase agreements."
  },
  {
    question: "How does the platform handle cost tracking for real estate construction?",
    answer: "Space AI tracks costs in real-time against project budgets with line-item granularity. The platform automatically categorizes expenses, flags budget overruns before they escalate, and provides unit-cost comparisons across similar projects. Developers can generate cost-per-square-foot analytics and accurate pro forma updates for investors and lenders."
  },
  {
    question: "Does Space AI support residential subdivision and mixed-use development projects?",
    answer: "Absolutely. Space AI handles multi-phase subdivision projects with lot-by-lot tracking, shared infrastructure coordination, and phase-dependent scheduling. For mixed-use developments, the platform manages different construction types (retail, residential, parking) within a single project while maintaining separate budgets and timelines for each component."
  },
  {
    question: "What integrations does Space AI offer for real estate developers?",
    answer: "Space AI integrates with popular real estate tools including Procore, Yardi, MRI Software, and major accounting platforms like QuickBooks and Sage. The platform also connects with BIM tools (Revit, Navisworks), document management systems, and provides an open API for custom integrations with property management and CRM systems."
  }
];

export default function Page() {
  return (
    <>
      <FAQSchema faqs={realEstateFAQs} />
      <RealEstatePage />
    </>
  );
}

