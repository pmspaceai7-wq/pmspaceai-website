import { Metadata } from "next";
import InefficiencyPage from "./InefficiencyPage";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Construction Inefficiency Solutions | Space AI",
  description:
    "Address the $1.6T construction inefficiency problem. Predictive planning, real-time insights, and automation to boost productivity and reduce waste.",
  keywords: [
    "construction inefficiency solutions",
    "construction productivity tools",
    "construction waste reduction",
    "construction automation",
    "construction process improvement",
  ],
  alternates: { canonical: "https://pmspace.ai/platform/inefficiency/" },
  openGraph: {
    title: "Construction Inefficiency Solutions | Space AI",
    description: "AI-powered tools to eliminate construction inefficiency and boost productivity.",
    url: "https://pmspace.ai/platform/inefficiency/",
    type: "website",
  },
};

const inefficiencyFAQs = [
  { question: "How much does construction inefficiency cost the industry?", answer: "Construction inefficiency costs the global industry an estimated $1.6 trillion annually. This includes $400B+ in rework, $300B+ in scheduling delays, $250B+ in material waste, and significant losses from poor communication and fragmented data. For individual firms, inefficiency typically adds 25-35% to true project costs." },
  { question: "What are the main sources of construction inefficiency?", answer: "The primary sources are: poor scheduling and planning (responsible for 35% of waste), rework from communication failures (25%), material waste and mismanagement (20%), administrative overhead from manual processes (15%), and equipment and labor idle time (5%). Space AI addresses all five categories through AI-powered optimization." },
  { question: "How does Space AI reduce construction rework?", answer: "Space AI reduces rework by 30-40% through three mechanisms: predictive clash detection that identifies design conflicts before construction, automated specification compliance checking that catches errors during submittal review, and real-time quality tracking that flags deviations from standards immediately rather than during final inspections." },
  { question: "Can Space AI measure and track productivity improvements?", answer: "Yes. Space AI provides real-time productivity dashboards that track labor productivity rates, equipment utilization, material waste percentages, schedule performance indices, and cost performance indices. The platform benchmarks your performance against industry averages and your own historical data to quantify improvement over time." },
  { question: "What productivity gains can construction companies expect?", answer: "Companies using Space AI typically see 20-30% improvement in labor productivity, 35% reduction in material waste, 25% fewer schedule delays, and 15-20 hours per week saved per project manager on administrative tasks. For a 100-person construction firm, this translates to over $2M in annual productivity gains." }
];

export default function Page() {
  return (
    <>
      <FAQSchema faqs={inefficiencyFAQs} />
      <InefficiencyPage />
    </>
  );
}
