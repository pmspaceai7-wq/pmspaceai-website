import { Metadata } from "next";
import BlueprintPage from "./BlueprintPage";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Construction Technology Blueprint | Space AI",
  description:
    "Explore Space AI's strategic blueprint for construction technology transformation. Our 3-step strategy drives digital adoption across the AECO industry.",
  keywords: [
    "construction technology strategy",
    "aeco digital transformation",
    "construction innovation blueprint",
    "construction tech roadmap",
    "aec technology strategy",
  ],
  alternates: { canonical: "https://pmspace.ai/platform/blueprint/" },
  openGraph: {
    title: "Construction Technology Blueprint | Space AI",
    description: "Strategic roadmap for AECO digital transformation.",
    url: "https://pmspace.ai/platform/blueprint/",
    type: "website",
  },
};

const blueprintFAQs = [
  { question: "What is Space AI's construction technology blueprint?", answer: "Space AI's blueprint is a 3-phase digital transformation strategy for construction companies: Phase 1 (Digitize) centralizes project data and eliminates paper processes. Phase 2 (Optimize) applies AI analytics to identify patterns and improve decision-making. Phase 3 (Predict) enables proactive management through predictive AI that anticipates problems before they occur." },
  { question: "How long does construction digital transformation take?", answer: "With Space AI's blueprint, Phase 1 (Digitize) typically takes 2-4 weeks for data migration and team onboarding. Phase 2 (Optimize) begins delivering insights within 1-2 months as the platform learns your project patterns. Phase 3 (Predict) becomes fully effective after 3-6 months when sufficient historical data enables accurate forecasting." },
  { question: "What ROI can companies expect from following the blueprint?", answer: "Companies following Space AI's blueprint typically see Phase 1 ROI within the first project through time savings (15-20 hours/week per PM). Phase 2 delivers 10-15% cost reduction through optimized resource allocation. Phase 3 generates the highest ROI with 20-30% fewer delays and 25% reduction in change orders through predictive management." },
  { question: "How does the blueprint address construction industry resistance to technology?", answer: "Space AI's blueprint is designed for gradual adoption. Phase 1 starts with familiar workflows in a modern interface, requiring minimal behavior change. Each subsequent phase adds capabilities after teams are comfortable with the current level. Built-in training modules, mobile-first design, and dedicated onboarding support ensure even technology-resistant teams adopt successfully." },
  { question: "Can mid-size contractors benefit from the blueprint or is it only for large firms?", answer: "The blueprint scales to any company size. Mid-size contractors often see faster transformation because they have fewer legacy systems to integrate and more flexible processes. Space AI's Free tier enables small teams to start Phase 1 immediately, with Professional and Enterprise tiers supporting Phases 2 and 3 as the company grows." }
];

export default function Page() {
  return (
    <>
      <FAQSchema faqs={blueprintFAQs} />
      <BlueprintPage />
    </>
  );
}
