import { Metadata } from "next";
import PressReleaseLayout from "../components/PressReleaseLayout";

export const metadata: Metadata = {
  title: "Space AI Achieves SOC 2 Type II and ISO 27001 Certifications | Press Release",
  description:
    "Space AI achieves industry-leading security certifications including SOC 2 Type II and ISO 27001, demonstrating commitment to data protection and enterprise-grade construction platform security.",
  alternates: {
    canonical: "https://pmspace.ai/press/security-certifications-2024/",
  },
  openGraph: {
    title: "Space AI Achieves SOC 2 Type II and ISO 27001 Certifications",
    description:
      "Space AI achieves industry-leading security certifications including SOC 2 Type II and ISO 27001, demonstrating commitment to data protection.",
    type: "article",
    url: "https://pmspace.ai/press/security-certifications-2024/",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Space AI Achieves SOC 2 Type II and ISO 27001 Certifications",
    datePublished: "2024-12-10",
    dateModified: "2024-12-10",
    publisher: {
      "@type": "Organization",
      name: "Space AI",
      url: "https://pmspace.ai",
    },
    url: "https://pmspace.ai/press/security-certifications-2024/",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PressReleaseLayout
        title="Space AI Achieves SOC 2 Type II and ISO 27001 Certifications"
        date="December 10, 2024"
        category="Security"
      >
        <p>
          <strong>Space AI</strong> today announced that it has achieved <strong>SOC 2 Type II</strong> and <strong>ISO/IEC 27001:2022</strong> certifications, validating the company&apos;s continued commitment to enterprise-grade security, data protection, and operational excellence for construction organizations worldwide.
        </p>
        <p>
          The certifications follow a rigorous independent audit of Space AI&apos;s security controls, policies, and procedures. SOC 2 Type II examines how a company safeguards customer data over time, covering security, availability, processing integrity, confidentiality, and privacy. ISO 27001 is the international standard for information security management systems, recognized by enterprises and government agencies around the world.
        </p>
        <h2>Meeting Enterprise Standards</h2>
        <p>
          Construction projects involve highly sensitive information, including contracts, financials, drawings, schedules, safety records, and personnel records. For enterprise customers, security certifications are often a prerequisite to adopting cloud-based software at scale. By achieving both SOC 2 Type II and ISO 27001, Space AI meets the compliance expectations of large contractors, developers, public agencies, and infrastructure owners who require verified controls.
        </p>
        <p>
          &quot;Security is not a feature—it is a foundation,&quot; said Space AI leadership. &quot;Our customers trust us with the data that runs their most important projects. These certifications demonstrate that we have the people, processes, and technology in place to protect that data at the highest standard. They also reflect the disciplined security culture we have built across the entire organization and our partner network.&quot;
        </p>
        <h2>Comprehensive Security Program</h2>
        <p>
          Space AI&apos;s security program includes end-to-end encryption, role-based access control, multi-factor authentication, continuous vulnerability monitoring, automated threat detection, secure software development practices, and regular third-party penetration testing. The company also maintains detailed incident response and business continuity plans, conducts annual security awareness training for all employees, and reviews access privileges on a quarterly basis.
        </p>
        <p>
          The platform is built on cloud infrastructure that adheres to strict physical and logical access controls. Customer data is logically separated, encrypted at rest and in transit, and backed up with geographically redundant storage. These layers of protection are designed to meet the expectations of the world&apos;s largest construction and infrastructure organizations, as well as public-sector agencies with stringent security requirements.
        </p>
        <h2>Compliance Roadmap</h2>
        <p>
          Certification reports and detailed security documentation are available to current and prospective customers under non-disclosure agreement. Space AI will continue to pursue additional compliance frameworks relevant to its global customer base, including GDPR, regional data residency requirements, and industry-specific security standards for government, defense, and critical infrastructure projects.
        </p>
      </PressReleaseLayout>
    </>
  );
}
