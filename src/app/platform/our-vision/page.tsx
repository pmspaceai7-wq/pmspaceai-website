import { Metadata } from "next";
import OurVisionPage from "./OurVisionPage";
import { FAQSchema } from "@/components/SEOSchemas";
import { RelatedPages } from "@/components/InternalLinking";

export const metadata: Metadata = {
  title: "Our Vision | AI-Powered Construction Future | Space AI",
  description:
    "Space AI's vision to transform the AECO industry. Our System of Intelligence delivers predictive analytics, automation, and unified data for construction.",
  keywords: [
    "construction technology vision",
    "ai construction future",
    "construction innovation",
    "aec technology transformation",
    "construction software vision",
  ],
  alternates: {
    canonical: "https://pmspace.ai/platform/our-vision/",
  },
  openGraph: {
    title: "Our Vision | Space AI",
    description: "Transforming construction with AI-powered intelligence and innovation.",
    url: "https://pmspace.ai/platform/our-vision/",
    type: "website",
  },
};

const visionFAQs = [
  {
    question: "What is Space AI's vision for construction?",
    answer: "Space AI envisions a construction industry powered by a true System of Intelligence, where AI-driven predictive analytics, automation, and unified data replace fragmented tools and reactive decision-making. Our goal is to make every construction project more efficient, profitable, and predictable by embedding intelligence into every workflow."
  },
  {
    question: "How does Space AI plan to transform the AECO industry?",
    answer: "Space AI is transforming the Architecture, Engineering, Construction, and Owner (AECO) industry by establishing a new paradigm: the System of Intelligence. Unlike platforms that bolt on AI as an afterthought, Space AI was built from the ground up with AI at its core, delivering real-time insights, automated risk detection, and data-driven project optimization across the entire project lifecycle."
  },
  {
    question: "What technology innovations is Space AI developing?",
    answer: "Space AI is developing advanced predictive analytics that forecast delays up to 45 days early, AI-powered scheduling optimization, automated compliance tracking, intelligent document management, and machine learning models trained on construction-specific data. Our roadmap includes generative design assistance, autonomous progress monitoring, and industry-wide benchmarking intelligence."
  },
  {
    question: "How does Space AI's vision benefit construction workers?",
    answer: "Space AI's vision directly benefits construction workers by reducing administrative burden, automating repetitive tasks like RFI tracking and report generation, and providing mobile-first tools for field teams. Workers spend less time on paperwork and more time on high-value activities, while AI-powered safety alerts and predictive scheduling help reduce workplace risks and overtime."
  },
  {
    question: "When will Space AI's full vision be realized?",
    answer: "Space AI's vision is being realized in phases. Today, our platform already delivers AI-powered project management, predictive analytics, and process automation. Our roadmap includes expanding into generative AI for design optimization, deeper BIM integration, and industry-wide intelligence networks. We continuously release new capabilities, with major milestones planned through 2027 and beyond."
  }
];

export default function Page() {
  return (
    <>
      <FAQSchema faqs={visionFAQs} />
      <OurVisionPage />
      <section className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <RelatedPages
            cluster="platform"
            currentPath="/platform/our-vision"
            title="Explore the Space AI Platform"
            maxItems={6}
          />
        </div>
      </section>
    </>
  );
}
