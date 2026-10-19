export type StandardComparisonSection = {
  key: string;
  title: string;
  purpose: string;
};

export const standardComparisonSections: StandardComparisonSection[] = [
  {
    key: "overview",
    title: "Overview",
    purpose:
      "Explain the buyer context, the two products being compared, and the main evaluation question.",
  },
  {
    key: "best-fit-buyer",
    title: "Best-fit buyer",
    purpose:
      "Describe which team type, company size, workflow maturity, or adoption profile each option fits best.",
  },
  {
    key: "feature-differences",
    title: "Feature differences",
    purpose:
      "Compare product capabilities through workflow value instead of a raw checklist alone.",
  },
  {
    key: "pricing-context",
    title: "Pricing context",
    purpose:
      "Explain how buyers should interpret pricing, implementation effort, and total cost of ownership.",
  },
  {
    key: "migration-notes",
    title: "Migration notes",
    purpose:
      "Clarify switching considerations, implementation risk, data migration, and adoption path.",
  },
  {
    key: "faq",
    title: "FAQ",
    purpose:
      "Answer buyer and answer-engine questions directly with concise, citation-ready answers.",
  },
];

export const comparisonMethodLinks = [
  {
    title: "Comparison Methodology",
    href: "/docs/comparison-methodology/",
  },
  {
    title: "Construction Software Comparison Hub",
    href: "/compare/construction-software-comparison/",
  },
  {
    title: "Best for Small Contractors",
    href: "/best-construction-management-software-for-small-contractors/",
  },
];
