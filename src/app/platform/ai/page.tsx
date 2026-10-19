import ArtificialIntelligencePage from "./ArtificialIntelligencePage";
import { Metadata } from "next";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "AI Platform for Construction | Machine Learning | Space AI",
  description:
    "Space AI's intelligent platform with AI agents, predictive analytics, machine learning, and unified automation to transform construction operations.",
  keywords: [
    "construction ai platform",
    "construction machine learning",
    "ai agents construction",
    "predictive analytics construction",
    "construction intelligence platform",
  ],
  alternates: {
    canonical: "https://pmspace.ai/platform/ai/",
  },
  openGraph: {
    title: "AI Platform for Construction | Space AI",
    description: "Intelligent AI platform for construction transformation.",
    url: "https://pmspace.ai/platform/ai/",
    type: "website",
  },
};

const aiFAQs = [
  {
    question: "What AI capabilities does Space AI offer for construction?",
    answer: "Space AI provides four core AI capabilities: predictive analytics that forecast delays up to 45 days early, computer vision for progress monitoring and safety detection, natural language AI agents that answer project questions in real-time, and machine learning models that optimize resource allocation across your entire portfolio."
  },
  {
    question: "How does Space AI's predictive analytics prevent construction delays?",
    answer: "Space AI analyzes historical project data, weather patterns, supply chain status, labor availability, and RFI response rates to identify delay risks before they materialize. The platform generates predictive alerts with actionable recommendations, helping project managers take corrective action weeks in advance of potential schedule impacts."
  },
  {
    question: "Can Space AI's machine learning models learn from our company's project data?",
    answer: "Yes. Space AI's ML models continuously learn from your project data to improve predictions over time. The more projects you manage through the platform, the more accurate forecasts become for your specific project types, regions, and workflows. Custom models can be trained on your historical data for company-specific risk factors."
  },
  {
    question: "How do AI agents work in Space AI's construction platform?",
    answer: "Space AI's AI agents act as virtual project assistants that understand your project context. You can ask natural language questions like 'What is the risk of delay on Building B?' or 'Show me all open RFIs over 14 days old.' The agents analyze real-time project data and provide instant, accurate answers with supporting evidence."
  },
  {
    question: "Is Space AI's AI platform secure for sensitive construction data?",
    answer: "Absolutely. Space AI processes all AI computations within secure, SOC 2-compliant infrastructure. Your project data is encrypted at rest and in transit, never shared across clients, and all AI models are deployed in isolated environments. The platform supports role-based access controls and complete audit logging of all AI-generated recommendations."
  }
];

export default function Page() {
  return (
    <>
      <FAQSchema faqs={aiFAQs} />
      <ArtificialIntelligencePage />
    </>
  );
}
