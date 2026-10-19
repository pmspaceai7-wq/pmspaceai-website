import { Metadata } from "next";
import RiskCalculatorPage from "./RiskCalculatorPage";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Construction Delay Risk Calculator and Mitigation Planner | Space AI",
  description:
    "Estimate your project's delay risk score instantly. Free AI-powered calculator to assess construction schedule risks based on scope and complexity.",
  keywords: [
    "construction risk calculator",
    "project delay estimator",
    "construction schedule risk assessment",
    "ai construction tools",
    "project management calculator",
  ],
  alternates: {
    canonical: "https://pmspace.ai/tools/construction-delay-risk-calculator/",
  },
  openGraph: {
    title: "Construction Delay Risk Calculator | Space AI",
    description: "What's your project's risk score? Calculate potential delay risks in seconds with Space AI.",
    url: "https://pmspace.ai/tools/construction-delay-risk-calculator/",
    type: "website",
  },
};

const riskFAQs = [
  {
    question: "How accurate is the construction risk score?",
    answer: "The risk score is an estimate based on industry standard factors including project complexity, duration, and location. For a precise predictive analysis, we recommend using the full Space AI platform which analyzes your specific schedule logic and historical performance."
  },
  {
    question: "What factors contribute to construction delays?",
    answer: "Common factors include supply chain disruptions, labor shortages, weather events, scope creep, and design clashes. This calculator weighs these based on your project type and location."
  },
  {
    question: "Is this risk calculator free to use?",
    answer: "Yes, this Construction Delay Risk Calculator is completely free. Space AI provides this as a resource to help project managers identify potential pitfalls early in the planning process."
  },
  {
    question: "How should teams use this score in planning?",
    answer: "Use the score as an early warning signal during preconstruction and baseline scheduling. Teams should apply targeted mitigation actions like weather buffers, subcontractor sequencing controls, and faster RFI turnaround plans based on the risk profile."
  },
  {
    question: "Can this support monthly risk reviews?",
    answer: "Yes. Re-running the calculator during milestone reviews helps teams track risk shifts as project scope, procurement status, and execution conditions change."
  }
];

export default function Page() {
  return (
    <>
      <FAQSchema faqs={riskFAQs} />
      <RiskCalculatorPage/>
    </>
  );
}
