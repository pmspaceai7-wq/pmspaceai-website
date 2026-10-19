import { Metadata } from "next";
import SpaceAIAdvantagesPage from "./SpaceAIAdvantagesPage";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Space AI Advantages | Predictive AI for Construction",
  description:
    "Discover Space AI's competitive advantages: predictive AI, computer vision, AI agents, and real-time decision-making for construction projects.",
  keywords: [
    "construction ai advantages",
    "predictive ai construction",
    "computer vision construction",
    "ai agents construction",
    "construction technology benefits",
  ],
  alternates: { canonical: "https://pmspace.ai/platform/space-ai-advantages/" },
  openGraph: {
    title: "The Space AI Advantage | Predictive AI",
    description: "AI-powered predictive capabilities for construction excellence.",
    url: "https://pmspace.ai/platform/space-ai-advantages/",
    type: "website",
  },
};

const advantagesFAQs = [
  { question: "What makes Space AI different from other construction software?", answer: "Space AI is the only construction management platform with built-in predictive AI that forecasts delays 45 days early, computer vision for automated progress tracking, and natural language AI agents. Unlike legacy tools that simply digitize paper processes, Space AI actively prevents problems before they occur." },
  { question: "How accurate is Space AI's predictive analytics?", answer: "Space AI's predictive models achieve 92% accuracy in forecasting schedule delays, cost overruns, and safety risks. The models improve continuously as they learn from your project data, with accuracy increasing to 95%+ after processing 5 or more projects in your portfolio." },
  { question: "Can Space AI integrate with existing construction tools?", answer: "Yes. Space AI integrates with 50+ construction tools including Procore, Autodesk BIM 360, PlanGrid, Primavera P6, MS Project, Bluebeam, and major accounting platforms. The platform also provides an open REST API for custom integrations with ERP and proprietary systems." },
  { question: "How quickly can teams adopt Space AI?", answer: "Most teams are fully operational on Space AI within 2-4 weeks. The platform includes guided onboarding, data migration tools, and pre-configured templates for common project types. AI features begin delivering value from day one, even before historical data is loaded." },
  { question: "What support does Space AI provide?", answer: "Space AI provides 24/7 technical support, dedicated customer success managers for enterprise accounts, weekly training webinars, and an extensive knowledge base. Enterprise customers receive custom implementation plans, on-site training, and direct access to our engineering team." }
];

export default function Page() {
  return (
    <>
      <FAQSchema faqs={advantagesFAQs} />
      <SpaceAIAdvantagesPage />
    </>
  );
}
