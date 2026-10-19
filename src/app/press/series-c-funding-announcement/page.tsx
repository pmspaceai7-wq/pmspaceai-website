import { Metadata } from "next";
import PressReleaseLayout from "../components/PressReleaseLayout";

export const metadata: Metadata = {
  title: "Space AI Prepares for Series C Growth Round to Accelerate AI Development | Press Release",
  description:
    "Space AI announces preparations for a Series C funding round. Expected investment will fuel expansion of AI capabilities, product development, and international market growth in construction technology.",
  alternates: {
    canonical: "https://pmspace.ai/press/series-c-funding-announcement/",
  },
  openGraph: {
    title: "Space AI Prepares for Series C Growth Round to Accelerate AI Development",
    description:
      "Space AI announces preparations for a Series C funding round to fuel expansion of AI capabilities and international market growth.",
    type: "article",
    url: "https://pmspace.ai/press/series-c-funding-announcement/",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Space AI Prepares for Series C Growth Round to Accelerate AI Development",
    datePublished: "2025-01-08",
    dateModified: "2025-01-08",
    publisher: {
      "@type": "Organization",
      name: "Space AI",
      url: "https://pmspace.ai",
    },
    url: "https://pmspace.ai/press/series-c-funding-announcement/",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PressReleaseLayout
        title="Space AI Prepares for Series C Growth Round to Accelerate AI Development"
        date="January 8, 2025"
        category="Funding"
      >
        <p>
          <strong>Space AI</strong> today announced that it is preparing for a <strong>Series C growth financing round</strong> to accelerate product development, expand its AI research organization, and scale international go-to-market operations. The company is engaged in discussions with institutional investors and expects to finalize the round in the coming quarters.
        </p>
        <p>
          The anticipated funding will support Space AI&apos;s mission to build the most intelligent construction management platform in the world. Priority investment areas include advancing the Space AI Copilot, expanding predictive analytics capabilities, deepening platform integrations, and growing local teams in high-demand markets such as the Middle East, North America, and Southeast Asia.
        </p>
        <h2>Capitalizing on Market Momentum</h2>
        <p>
          Space AI has experienced strong growth over the past year, surpassing 10,000 active projects, opening a regional headquarters in Dubai, launching enterprise analytics, and being named a G2 Leader. The Series C round is intended to build on that momentum and position the company to capture increasing demand for AI-native construction software among large contractors and asset owners who need better predictability and control.
        </p>
        <p>
          &quot;We are at an inflection point in construction technology,&quot; said Space AI leadership. &quot;The industry is moving from digitization to intelligence, and Space AI is well positioned to lead that transition. This expected investment will allow us to move faster, hire world-class AI and engineering talent, and deliver even more value to the teams building the world&apos;s most complex projects. We are excited about the conversations we are having with investors who share our long-term vision.&quot;
        </p>
        <h2>Planned Use of Proceeds</h2>
        <p>
          Proceeds from the Series C round are expected to fund three primary areas. First, continued investment in AI and machine learning research to improve predictive accuracy and expand the capabilities of the Space AI Copilot. Second, product engineering to broaden the platform&apos;s coverage of construction workflows, including procurement, quality management, and sustainability reporting. Third, expansion of sales, marketing, and customer success teams to support a growing global customer base.
        </p>
        <p>
          The company also intends to invest in its partner ecosystem, providing resellers and system integrators with additional training, co-marketing resources, and implementation tooling. This will help Space AI reach more customers through trusted local advisors who understand regional construction markets.
        </p>
        <h2>Forward-Looking Statement</h2>
        <p>
          Space AI will provide additional updates on the financing as discussions progress. The company remains focused on execution, customer success, and responsible growth as it scales toward its next phase. There is no assurance that the anticipated financing will be completed on the terms described, or at all.
        </p>
      </PressReleaseLayout>
    </>
  );
}
