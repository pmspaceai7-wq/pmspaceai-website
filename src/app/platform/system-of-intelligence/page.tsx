import SystemOfIntelligence from "@/sections/SystemofIntelligence";
import { Metadata } from "next";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Construction Intelligence Platform | System of Intelligence | Space AI",
  description:
    "Move beyond systems of record. Space AI's Construction Intelligence Platform delivers predictive analytics, machine learning, and AI-driven insights with 85-95% accuracy. Free tier available.",
  keywords: [
    "system of intelligence construction",
    "construction intelligence platform",
    "construction ai platform",
    "predictive construction analytics",
    "construction machine learning",
    "ai construction management",
    "construction data analytics",
  ],
  alternates: { canonical: "https://pmspace.ai/platform/system-of-intelligence/" },
  openGraph: {
    title: "Construction Intelligence Platform | System of Intelligence | Space AI",
    description: "Transform construction with AI-powered predictive intelligence. 85-95% prediction accuracy. 45-day advance warning.",
    url: "https://pmspace.ai/platform/system-of-intelligence/",
    type: "website",
  },
};

const intelligenceFAQs = [
  { question: "What is a System of Intelligence for construction?", answer: "A System of Intelligence goes beyond traditional Systems of Record (like spreadsheets and databases) by actively analyzing project data to generate predictions, recommendations, and automated actions. Space AI's System of Intelligence continuously learns from your projects to deliver increasingly accurate forecasts, risk assessments, and optimization suggestions." },
  { question: "How is a System of Intelligence different from construction ERP?", answer: "Traditional construction ERP systems record data after events happen — they tell you what occurred. A System of Intelligence predicts what will happen next and recommends preventive actions. While ERP reports that a project is 15% over budget, Space AI's intelligence layer would have flagged the cost trajectory weeks earlier and suggested corrective measures." },
  { question: "What data does Space AI's System of Intelligence analyze?", answer: "The platform analyzes schedule data, cost actuals vs. estimates, RFI patterns, weather forecasts, labor productivity rates, material delivery timelines, subcontractor performance history, safety incident data, and document submission patterns. All data streams are correlated to identify early warning signals that humans typically miss." },
  { question: "How does the intelligence layer improve over time?", answer: "Space AI's ML models use reinforcement learning that improves with every project. Prediction accuracy starts at 85% and typically reaches 92-95% after processing 5+ projects. The system learns company-specific patterns like typical subcontractor delay patterns, seasonal productivity variations, and common risk factors for your project types." },
  { question: "Can existing construction data be migrated into the System of Intelligence?", answer: "Yes. Space AI supports data migration from Primavera P6, MS Project, Procore, Excel, and most major construction platforms. Historical data is used to train AI models from day one, so predictions are informed by your company's actual project history rather than generic industry averages." }
];

export default function Page() {
  return (
    <>
      <FAQSchema faqs={intelligenceFAQs} />
      <SystemOfIntelligence />
    </>
  );
}
