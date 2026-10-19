import { Metadata } from "next";
import CommercialHighRisePage from "./CommercialHighRisePage";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Commercial High-Rise AI Tools | Construction Management | Space AI",
  description:
    "Optimize vertical construction with Space AI. Specialized tools for high-rise logistics, crane scheduling, and safety compliance in commercial towers.",
  keywords: [
    "commercial high-rise construction software",
    "high-rise project management",
    "vertical construction tools",
    "commercial building ai",
    "crane scheduling software",
    "skyscraper construction management",
  ],
  alternates: {
    canonical: "https://pmspace.ai/industries/commercial-high-rise/",
  },
  openGraph: {
    title: "Commercial High-Rise AI Tools | Space AI",
    description: "AI-powered management for commercial high-rise and vertical construction projects.",
    url: "https://pmspace.ai/industries/commercial-high-rise/",
    type: "website",
  },
};

const highRiseFAQs = [
  {
    question: "How does Space AI handle vertical logistics?",
    answer: "Space AI includes a specialized 'Vertical Logistics' module that optimizes crane hook time and elevator schedules. It creates a 4D plan to ensure material deliveries align with the floor-by-floor construction cycle, preventing bottlenecks at the hoist."
  },
  {
    question: "Can it track concrete pour cycles for high-rises?",
    answer: "Yes. The platform tracks pour cycles against the schedule in real-time. It uses AI to predict cure times based on weather and suggests the optimal start time for the next formwork lift to maintain the target floor-per-week cycle."
  },
  {
    question: "Does it support MEP coordination for tall buildings?",
    answer: "Absolutely. Space AI flags potential clashes in MEP risers and shafts before construction begins. It also coordinates MEP rough-in sequences with the structural progress to ensure trades aren't working on top of each other in tight core areas."
  }
];

export default function Page() {
  return (
    <>
      <FAQSchema faqs={highRiseFAQs} />
      <CommercialHighRisePage/>
    </>
  );
}

