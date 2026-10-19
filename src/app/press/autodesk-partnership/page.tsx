import { Metadata } from "next";
import PressReleaseLayout from "../components/PressReleaseLayout";

export const metadata: Metadata = {
  title: "Space AI Partners with Autodesk for Enhanced BIM Integration | Press Release",
  description:
    "Space AI announces deep integration partnership with Autodesk, enabling seamless BIM model coordination and issue tracking between both platforms for construction teams.",
  alternates: {
    canonical: "https://pmspace.ai/press/autodesk-partnership/",
  },
  openGraph: {
    title: "Space AI Partners with Autodesk for Enhanced BIM Integration",
    description:
      "Space AI announces deep integration partnership with Autodesk, enabling seamless BIM model coordination and issue tracking between platforms.",
    type: "article",
    url: "https://pmspace.ai/press/autodesk-partnership/",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Space AI Partners with Autodesk for Enhanced BIM Integration",
    datePublished: "2024-12-18",
    dateModified: "2024-12-18",
    publisher: {
      "@type": "Organization",
      name: "Space AI",
      url: "https://pmspace.ai",
    },
    url: "https://pmspace.ai/press/autodesk-partnership/",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PressReleaseLayout
        title="Space AI Partners with Autodesk for Enhanced BIM Integration"
        date="December 18, 2024"
        category="Partnership"
      >
        <p>
          <strong>Space AI</strong> today announced a strategic integration partnership with <strong>Autodesk</strong>, the global leader in design and make technology, to deliver enhanced building information modeling (BIM) coordination within the Space AI construction management platform. The partnership enables design and construction teams to connect Autodesk BIM models with Space AI project controls, improving visibility into model-based issues, clashes, and progress tracking.
        </p>
        <p>
          The new integration allows Space AI users to pull model metadata, issue data, and coordination views directly into project dashboards without switching applications. Field teams can view BIM-derived issues alongside schedule activities, RFIs, and change orders, while project managers can track resolution workflows from initial detection through final sign-off.
        </p>
        <h2>Closing the Gap Between Design and Construction</h2>
        <p>
          Construction projects generate enormous amounts of design data, but much of it remains siloed in modeling tools that field teams do not use daily. The Space AI–Autodesk integration addresses this gap by translating BIM intelligence into project management actions. When a clash or model issue is detected, Space AI can automatically create a tracked item, assign an owner, estimate schedule impact, and notify relevant stakeholders.
        </p>
        <p>
          &quot;Our customers have told us that the handoff between design and construction is still one of the biggest sources of risk and rework,&quot; said Space AI leadership. &quot;By integrating with Autodesk, we are bringing model coordination into the same workspace where project teams manage schedules, costs, and documentation. That connectivity is what turns BIM from a design tool into a true construction operating system.&quot;
        </p>
        <h2>Key Capabilities</h2>
        <p>
          Initial capabilities include bidirectional issue sync, model-based progress tracking, automated clash-to-RFI workflows, and embedded 3D model viewers for issue review. Teams can compare planned versus actual progress using model snapshots, track issue resolution times, and receive alerts when coordination problems threaten the schedule. Future roadmap items include quantity takeoff integration, 4D schedule visualization, and AI-powered design-change impact analysis.
        </p>
        <p>
          The integration is available now to Space AI enterprise customers using Autodesk Construction Cloud and Autodesk BIM 360. Setup is handled through a secure, token-based connection that preserves model permissions and audit trails. Implementation typically takes less than a day and does not require custom coding or middleware.
        </p>
        <h2>Shared Vision</h2>
        <p>
          Both companies share a vision of connected construction, where design intent flows seamlessly into field execution and back again. The partnership reflects a commitment to open, interoperable platforms that reduce duplicate data entry, minimize rework, and give every stakeholder a single source of truth for project coordination.
        </p>
      </PressReleaseLayout>
    </>
  );
}
