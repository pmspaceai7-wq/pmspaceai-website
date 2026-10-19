// src/lib/competitors/procore.ts
// TASK 5: Competitor dossier — Procore
import { Dossier } from "../competitorTypes";

const procore: Dossier = {
  slug: "procore",
  name: "Procore",
  category: "commercial",
  positioning:
    "Industry-standard commercial construction management platform. Enterprise-grade with deep integrations but high cost and complex implementation.",
  targetAudience: [
    "Large commercial general contractors",
    "ENR-ranked subcontractors",
    "Owner-developers managing portfolios",
    "Enterprise teams needing audit trails",
  ],
  pricing: {
    model: "Per-user/month + implementation fee",
    startingPrice: "$375/user/month",
    enterpriseCost: "$500–1,000+/user/month",
    freeOption: "No free tier; limited pilot available on request",
    contract: "Annual required",
  },
  featureRatings: [
    { name: "Document Management", rating: 5 },
    { name: "Financial Management", rating: 4 },
    { name: "Mobile Experience", rating: 3 },
    { name: "Ease of Use", rating: 3 },
    { name: "AI / Automation", rating: 0 },
    { name: "Reporting & Analytics", rating: 4 },
    { name: "Client Portal", rating: 2 },
    { name: "Scheduling", rating: 3 },
  ],
  strengths: [
    "Comprehensive commercial feature set",
    "Strong third-party integration ecosystem",
    "Industry-standard brand recognition",
    "Enterprise-grade security and audit trails",
    "Dedicated account management at scale",
  ],
  weaknesses: [
    "Extremely expensive — implementation fees alone can exceed $50,000",
    "Steep learning curve and long onboarding",
    "No native AI or predictive capabilities",
    "Complex interface creates training overhead",
    "Annual contracts with limited flexibility",
  ],
  bestFor: [
    "Firms with $50M+ annual revenue",
    "Teams already on Autodesk ecosystem",
    "Projects requiring strict audit compliance",
    "Enterprise portfolios with dedicated admins",
  ],
  notIdealFor: [
    "Small to mid-size general contractors",
    "Residential and home builders",
    "Teams wanting AI-driven automation",
    "Budget-conscious firms",
  ],
  commonComplaints: [
    "Cost is prohibitive for mid-market",
    "Interface feels dated compared to modern SaaS tools",
    "Implementation takes months, not weeks",
    "Support response time varies by tier",
    "Mobile app is slow and limited",
  ],
  migrationNotes: [
    "Full API available for data export",
    "Documents, RFIs, submittals, schedules, contacts all exportable",
    "Migration typically takes 2–4 weeks with dedicated support",
    "Common transition pain: historical data formatting differs",
  ],
  keywordCount: 220,
  summedVolume: 28050,
  hasPage: true,
  pagePath: "/alternatives/procore-alternative",
  recommendedFormats: [
    "singular-alternative",
    "plural-alternatives",
    "vs",
    "matrix-vs",
  ],
};

export default procore;
