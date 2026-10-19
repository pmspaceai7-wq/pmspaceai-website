import { Metadata } from "next";
import Link from "next/link";
import TransportationPage from "./TransportationPage";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Transportation Construction Management: Delivering Infrastructure Projects | PMspace",
  description:
    "Manage transportation infrastructure projects with AI-powered precision. Highways, rail systems, airports, and urban transit projects delivered on time and on budget with Space AI construction software.",
  keywords: [
    "transportation construction management",
    "airport construction software",
    "railway construction management",
    "highway construction software",
    "transit construction project management",
    "infrastructure project management",
    "transportation project control",
    "construction management for transportation",
  ],
  alternates: {
    canonical: "https://pmspace.ai/industries/transportation/",
  },
  openGraph: {
    title: "Transportation Construction Management: Delivering Infrastructure Projects | PMspace",
    description: "Manage highways, rail, airports, and transit projects with complete visibility and real-time control. PMspace helps transportation teams deliver infrastructure projects on time and on budget.",
    url: "https://pmspace.ai/industries/transportation/",
    type: "website",
  },
};

const transportationFAQs = [
  {
    question: "What makes transportation construction projects different from other construction projects?",
    answer: "Transportation projects are typically large-scale, long-duration, and involve multiple stakeholders including government agencies, contractors, and the public. They require extensive regulatory compliance, careful coordination across phases, and must adapt to dynamic conditions like weather and site variations."
  },
  {
    question: "How can technology improve transportation project management?",
    answer: "Digital platforms provide real-time visibility into costs, schedules, and resources. They enable centralized data management, improve stakeholder communication, enhance compliance tracking, and support proactive decision-making through integrated workflows and automation."
  },
  {
    question: "What are the main challenges in managing transportation infrastructure projects?",
    answer: "Key challenges include limited visibility into project performance, cost overruns, scheduling complexity across multiple phases, and communication gaps between diverse stakeholders. These projects also face strict regulatory requirements and unpredictable external conditions."
  },
  {
    question: "Why do traditional tools like spreadsheets fail for transportation projects?",
    answer: "Spreadsheets and disconnected systems lack real-time updates, integration capabilities, and scalability. They create fragmented data, delay decision-making, and make it difficult to manage the complexity of costs, schedules, and compliance in large infrastructure projects."
  },
  {
    question: "How does PMspace help manage transportation construction projects?",
    answer: "PMspace provides a centralized platform that integrates cost management, scheduling, document control, and collaboration. It offers real-time insights, streamlined workflows, and helps teams reduce delays, prevent cost overruns, and maintain control over all project aspects."
  }
];

export default function Page() {
  return (
    <>
      <FAQSchema faqs={transportationFAQs} />
      <TransportationPage />
      <nav aria-label="Related resources" style={{ display: "none" }}>
        <Link href="/solutions/project-management/">Construction Project Management Solutions</Link>
        <Link href="/construction-software-demo/">Book a Construction Software Demo</Link>
      </nav>
    </>
  );
}
