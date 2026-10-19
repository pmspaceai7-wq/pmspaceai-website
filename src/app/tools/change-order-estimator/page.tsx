import { Metadata } from "next";
import ChangeOrderEstimatorPage from "./ChangeOrderEstimatorPage";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Change Order Schedule Drift & Cost Estimator | Free Tool | Space AI",
  description:
    "Estimate budget creep and cascading schedule delay from pending change orders. Free interactive impact matrix for project managers, quantity surveyors, and cost consultants.",
  keywords: [
    "change order schedule impact estimator",
    "construction scope creep calculator",
    "change order cost estimator",
    "change order risk summary",
    "construction change order impact analysis",
  ],
  alternates: {
    canonical: "https://pmspace.ai/tools/change-order-estimator/",
  },
  openGraph: {
    title: "Change Order Schedule Drift & Cost Estimator | Space AI",
    description:
      "Model the budget creep and cascading schedule delay of pending change orders before the owner meeting.",
    url: "https://pmspace.ai/tools/change-order-estimator/",
    type: "website",
  },
};

const faqs = [
  {
    question: "What does this change order estimator calculate?",
    answer:
      "It calculates the cumulative budget-creep percentage from pending change orders, estimates the administrative labor cost to process them, and models cascading schedule delay onto downstream trades based on trade dependencies.",
  },
  {
    question: "How does the cascade delay work?",
    answer:
      "Each pending change order adds a base delay. The more downstream trades depend on the affected trade, the larger the cascading secondary delay, because crews must wait for revised scopes, approvals, and rework before they can start.",
  },
  {
    question: "Can I download the risk summary?",
    answer:
      "Yes. After entering your data, use the Print / Save as PDF button to export a formatted Change Order Risk Summary suitable for owner or client alignment meetings.",
  },
  {
    question: "How can Space AI reduce change order drift?",
    answer:
      "Space AI flags scope creep early, auto-routes change order requests, and predicts schedule impact before owners approve, reducing both budget drift and cascading delays.",
  },
];

export default function Page() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <ChangeOrderEstimatorPage />
    </>
  );
}
