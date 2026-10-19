import { Metadata } from "next";
import DubaiMegaProjectsPage from "./DubaiMegaProjectsPage";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Construction AI Software for Dubai Mega-Projects | Space AI",
  description:
    "AI for Dubai mega-projects: bilingual scheduling, heat-adaptive planning, and municipality compliance for GCC construction teams.",
  keywords: [
    "dubai construction software",
    "mega project management ai",
    "gcc construction tools",
    "dubai municipality compliance software",
    "arabic construction software",
    "building dubai skylines",
  ],
  alternates: {
    canonical: "https://pmspace.ai/locations/dubai-mega-projects/",
  },
  openGraph: {
    title: "Construction AI Software for Dubai Mega-Projects",
    description: "The only AI platform built for the scale, heat, and complexity of Dubai's construction market.",
    url: "https://pmspace.ai/locations/dubai-mega-projects/",
    type: "website",
  },
};

const dubaiFAQs = [
  {
    question: "Is Space AI approved by Dubai Municipality?",
    answer: "Space AI generates submissions that are fully compliant with Dubai Municipality, RTA, and Civil Defense standards. Our document control system tracks NOCs and approval versions automatically."
  },
  {
    question: "Does the software support Arabic and English?",
    answer: "Yes, Space AI is fully bilingual. You can generate snag lists, daily reports, and handover documents in both Arabic and English to ensure seamless communication between diverse site teams and authorities."
  },
  {
    question: "Can it handle heat-adaptive scheduling?",
    answer: "Yes. Our AI schedule optimizer automatically adjusts productivity rates and breaks based on historical and forecast temperature data, ensuring realistic timelines during Dubai's summer months."
  }
];

export default function Page() {
  return (
    <>
      <FAQSchema faqs={dubaiFAQs} />
      <DubaiMegaProjectsPage/>
    </>
  );
}
