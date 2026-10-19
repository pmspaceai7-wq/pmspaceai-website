import { Metadata } from "next";
import GlossaryPage from "./GlossaryPage";

export const metadata: Metadata = {
  title: "Construction AI Glossary | Terms & Definitions | Space AI",
  description:
    "Comprehensive glossary of AI terms in construction: machine learning, predictive analytics, intelligent automation, and more for construction management.",
  keywords: [
    "construction AI glossary",
    "AI construction terms",
    "machine learning construction",
    "construction technology definitions",
    "predictive analytics construction",
    "BIM AI glossary",
  ],
  alternates: {
    canonical: "https://pmspace.ai/resources/glossary/",
  },
  openGraph: {
    title: "Glossary of Construction AI | Space AI",
    description: "Your complete guide to AI terminology in construction and project management.",
    url: "https://pmspace.ai/resources/glossary/",
    type: "website",
  },
};

export default function Page() {
  return <GlossaryPage />;
}
