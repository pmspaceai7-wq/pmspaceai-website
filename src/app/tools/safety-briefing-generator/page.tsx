import { Metadata } from "next";
import SafetyBriefingPage from "./SafetyBriefingPage";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Free OSHA Inspection Checklist & Daily Safety Talk Generator | Space AI",
  description:
    "Generate activity-specific OSHA safety checklists and 2-minute toolbox talk scripts for deep excavation, scaffolding, cranes, electrical work, and more. Print-ready sign-off sheets.",
  keywords: [
    "OSHA scaffolding inspection checklist",
    "daily safety talk generator construction",
    "OSHA trenching checklist",
    "crane safety checklist",
    "construction toolbox talk generator",
    "OSHA electrical safety checklist",
  ],
  alternates: {
    canonical: "https://pmspace.ai/tools/safety-briefing-generator/",
  },
  openGraph: {
    title: "AI Safety Briefing & OSHA Inspection Generator | Space AI",
    description:
      "Pick an activity and crew size. Instantly get an OSHA checklist and a 2-minute toolbox talk script for your morning huddle.",
    url: "https://pmspace.ai/tools/safety-briefing-generator/",
    type: "website",
  },
};

const faqs = [
  {
    question: "Is this OSHA checklist generator free?",
    answer:
      "Yes. Select a jobsite activity and crew size to generate a tailored OSHA-style checklist and toolbox talk script at no cost.",
  },
  {
    question: "Can I print the daily sign-off sheet?",
    answer:
      "Yes. Use the Print / Save as PDF button to export the checklist, toolbox talk, and sign-off lines for your safety file.",
  },
  {
    question: "What activities are covered?",
    answer:
      "Deep excavation, scaffolding, crane operations, electrical work, roofing, demolition, concrete pours, confined space, heavy equipment, and fall protection.",
  },
  {
    question: "Does this replace a site-specific safety plan?",
    answer:
      "No. This generator provides a starting checklist and talk script. Always supplement with your project's site-specific safety plan, competent person sign-off, and local regulations.",
  },
];

export default function Page() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <SafetyBriefingPage />
    </>
  );
}
