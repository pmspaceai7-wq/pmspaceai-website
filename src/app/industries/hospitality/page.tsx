import { Metadata } from "next";
import HospitalityPage from "./HospitalityPage";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Hospitality Construction Software | Space AI",
  description:
    "AI construction management for hotels & resorts. Build hospitality venues with precision scheduling, quality control, and on-time delivery.",
  keywords: [
    "hospitality construction management",
    "hotel construction software",
    "resort construction management",
    "hospitality project management",
    "hotel renovation software",
  ],
  alternates: {
    canonical: "https://pmspace.ai/industries/hospitality/",
  },
  openGraph: {
    title: "Hospitality Construction Management Software | Space AI",
    description: "AI-powered project management for hotel and resort construction.",
    url: "https://pmspace.ai/industries/hospitality/",
    type: "website",
  },
};

const hospitalityFAQs = [
  {
    question: "What is hospitality construction management software?",
    answer: "Hospitality construction management software is an AI-powered platform designed specifically for hotel, resort, and entertainment venue construction projects. It handles brand-standard compliance, guest-experience-driven design coordination, and renovation scheduling while minimizing operational disruption to existing properties."
  },
  {
    question: "How does Space AI handle hotel renovation projects with minimal guest disruption?",
    answer: "Space AI uses AI-powered phased scheduling to plan renovations floor-by-floor or wing-by-wing, ensuring occupied areas remain undisturbed. The platform coordinates trade sequencing to minimize noise during peak guest hours and tracks real-time progress so property managers can accurately communicate timelines to guests."
  },
  {
    question: "Can Space AI manage brand standard compliance for hotel chains?",
    answer: "Yes. Space AI includes customizable brand compliance checklists that ensure every finish, fixture, and design element meets the hotel chain's standards. The platform flags deviations during construction and generates compliance reports for franchise approval, reducing costly post-construction rework by up to 40%."
  },
  {
    question: "How does the platform handle multi-property hospitality portfolios?",
    answer: "Space AI provides a portfolio dashboard that tracks progress, budget, and timelines across multiple hotel or resort projects simultaneously. Property owners can compare performance metrics, share resources between projects, and standardize processes across their entire hospitality portfolio from a single platform."
  },
  {
    question: "What ROI can hospitality developers expect from using Space AI?",
    answer: "Hospitality developers using Space AI typically see 15-25% reduction in project timelines, 20-30% fewer change orders through predictive analytics, and up to 35% improvement in budget accuracy. For a typical $50M hotel project, this translates to $5-8M in savings from avoided delays and rework."
  }
];

export default function Page() {
  return (
    <>
      <FAQSchema faqs={hospitalityFAQs} />
      <HospitalityPage />
    </>
  );
}

