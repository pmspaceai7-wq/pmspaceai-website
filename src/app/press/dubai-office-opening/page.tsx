import { Metadata } from "next";
import PressReleaseLayout from "../components/PressReleaseLayout";

export const metadata: Metadata = {
  title: "Space AI Expands to Middle East with Dubai Office Opening | Press Release",
  description:
    "Space AI opens new Dubai regional headquarters to serve growing construction technology demand across the GCC region with local support and partnerships.",
  alternates: {
    canonical: "https://pmspace.ai/press/dubai-office-opening/",
  },
  openGraph: {
    title: "Space AI Expands to Middle East with Dubai Office Opening",
    description:
      "Space AI opens new Dubai regional headquarters to serve growing construction technology demand across the GCC region.",
    type: "article",
    url: "https://pmspace.ai/press/dubai-office-opening/",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Space AI Expands to Middle East with Dubai Office Opening",
    datePublished: "2024-11-15",
    dateModified: "2024-11-15",
    publisher: {
      "@type": "Organization",
      name: "Space AI",
      url: "https://pmspace.ai",
    },
    url: "https://pmspace.ai/press/dubai-office-opening/",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PressReleaseLayout
        title="Space AI Expands to Middle East with Dubai Office Opening"
        date="November 15, 2024"
        category="Expansion"
      >
        <p>
          <strong>Space AI</strong> today announced the opening of its new regional headquarters in <strong>Dubai, United Arab Emirates</strong>, marking a major step in the company&apos;s international expansion and its commitment to serving the fast-growing construction technology market across the Gulf Cooperation Council (GCC).
        </p>
        <p>
          The Dubai office will serve as Space AI&apos;s hub for sales, customer success, implementation, and strategic partnerships in the Middle East. It will support customers in the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman, with dedicated Arabic and English-language support teams and localized onboarding programs.
        </p>
        <h2>Addressing Regional Demand</h2>
        <p>
          The GCC is home to some of the world&apos;s largest and most ambitious construction programs, including giga-projects in Saudi Arabia, smart city developments in the UAE, and major infrastructure investments across the region. These projects demand advanced project controls, real-time collaboration, and predictive analytics—capabilities that Space AI has delivered on thousands of projects globally.
        </p>
        <p>
          &quot;The Middle East is one of the most dynamic construction markets in the world,&quot; said Space AI leadership. &quot;Opening a permanent presence in Dubai allows us to work alongside our customers more closely, respond faster to local needs, and build partnerships with regional consultants, contractors, and technology providers. We see enormous opportunity to help project teams in the GCC deliver their programs more predictably and efficiently.&quot;
        </p>
        <h2>Local Team and Partnerships</h2>
        <p>
          The Dubai office will be staffed by a growing team of account executives, solution engineers, customer success managers, and implementation specialists. Space AI is also building partnerships with regional system integrators, BIM consultants, and ERP providers to ensure customers can deploy the platform within their existing technology ecosystems.
        </p>
        <p>
          The expansion follows recent customer growth in the UAE and Saudi Arabia, where Space AI is already being used on commercial, industrial, and infrastructure projects. The company plans to host regional user events, training workshops, and executive briefings from the new Dubai location starting in early 2025.
        </p>
        <h2>Commitment to the Region</h2>
        <p>
          Space AI&apos;s regional investment goes beyond a sales office. The company is hiring local talent, translating key product resources, and adapting its implementation playbooks to reflect regional contracting practices and regulatory requirements. This localized approach is intended to ensure customers in the GCC receive the same high standard of support and time-to-value that Space AI delivers in its established markets, with account teams who understand the unique dynamics of local project delivery.
        </p>
      </PressReleaseLayout>
    </>
  );
}
