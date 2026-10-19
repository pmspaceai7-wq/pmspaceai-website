import { Metadata } from "next";
import RoiCalculatorPage from "./RoiCalculatorPage";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Procore ROI Calculator & Construction Software Savings Tool | Space AI",
  description:
    "Compare legacy systems like Procore, Autodesk ACC, and Aconex against Space AI. Calculate license savings, PM hours recovered, and ROI in one interactive tool.",
  keywords: [
    "procore cost alternative",
    "procore pricing calculator",
    "construction software roi",
    "Procore ROI calculator",
    "Autodesk ACC alternative",
    "Aconex alternative",
    "construction software comparison",
  ],
  alternates: {
    canonical: "https://pmspace.ai/tools/roi-calculator/",
  },
  openGraph: {
    title: "Procore & Legacy Tech ROI Calculator | Space AI",
    description:
      "Estimate license savings and PM hours recovered by switching from Procore, ACC, or Aconex to Space AI's AI-native operating system.",
    url: "https://pmspace.ai/tools/roi-calculator/",
    type: "website",
  },
};

const faqs = [
  {
    question: "How does this ROI calculator compare Procore and Space AI?",
    answer:
      "Enter your current platform's annual license cost, seat count, and the manual reporting hours your team spends each week. The calculator estimates your total cost of ownership with the legacy platform, then compares it to Space AI as a System of Intelligence.",
  },
  {
    question: "What kind of savings can construction teams expect?",
    answer:
      "Teams typically see direct license savings plus significant time savings from automated reporting, predictive risk alerts, and consolidated workflows. The exact amount depends on seat count, project load, and current manual processes.",
  },
  {
    question: "Which legacy platforms are included?",
    answer:
      "The calculator supports Procore, Autodesk Construction Cloud, Oracle Aconex, Newforma, PlanGrid, and a generic Other option. Defaults are editable so you can match your exact contract.",
  },
  {
    question: "Is Space AI cheaper than Procore?",
    answer:
      "For most teams, Space AI offers a lower total cost of ownership because it replaces multiple disconnected tools with an AI-native operating system and automates manual reporting work that legacy systems do not address.",
  },
];

export default function Page() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <RoiCalculatorPage />
    </>
  );
}
