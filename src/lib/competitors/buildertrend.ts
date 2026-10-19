// src/lib/competitors/buildertrend.ts
// TASK 5: Competitor dossier — Buildertrend
import { Dossier } from "../competitorTypes";

const buildertrend: Dossier = {
  slug: "buildertrend",
  name: "Buildertrend",
  category: "residential",
  positioning:
    "All-in-one residential construction platform for home builders, remodelers, and specialty contractors. Strong client portal and selection management; limited for commercial use.",
  targetAudience: [
    "Custom home builders",
    "Residential remodelers",
    "Specialty subcontractors (HVAC, plumbing, electrical)",
    "Small residential firms needing client-facing tools",
  ],
  pricing: {
    model: "Flat monthly fee with optional per-user add-ons",
    startingPrice: "$499/month",
    enterpriseCost: "$999/month (includes premium features)",
    freeOption: "No free tier",
    contract: "Monthly or annual available",
  },
  featureRatings: [
    { name: "Client Portal", rating: 5 },
    { name: "Selection Management", rating: 5 },
    { name: "Scheduling", rating: 3 },
    { name: "Financial Management", rating: 4 },
    { name: "Mobile Experience", rating: 3 },
    { name: "Ease of Use", rating: 4 },
    { name: "AI / Automation", rating: 0 },
    { name: "Reporting & Analytics", rating: 2 },
  ],
  strengths: [
    "Excellent client portal for homeowner communication",
    "Strong selection and allowance management",
    "Flat monthly pricing — predictable costs",
    "Built-in CRM and lead management",
    "QuickBooks and accounting integrations",
  ],
  weaknesses: [
    "Limited for commercial or multi-family projects",
    "Reporting and dashboards are basic",
    "No AI or predictive analytics",
    "Outdated UI compared to modern SaaS tools",
    "Weak drawing and document management",
  ],
  bestFor: [
    "Custom home builders under 50 projects/year",
    "Teams needing client-facing communication tools",
    "Residential remodelers wanting selection tracking",
    "Firms prioritizing ease of use over depth",
  ],
  notIdealFor: [
    "Commercial general contractors",
    "Teams needing advanced scheduling (Gantt, critical path)",
    "Organizations wanting AI-driven insights",
    "Large enterprises with complex multi-project portfolios",
  ],
  commonComplaints: [
    "Reporting is limited compared to competitors",
    "Mobile app feels dated and slow",
    "Customization options are restricted",
    "Customer support response times vary",
    "No real-time analytics or predictive features",
  ],
  migrationNotes: [
    "CSV export available for contacts, projects, and financials",
    "Documents require manual download and re-upload",
    "Migration typically takes 1–2 weeks",
    "Selection sheets and change orders need manual re-entry",
  ],
  keywordCount: 83,
  summedVolume: 3650,
  hasPage: true,
  pagePath: "/alternatives/buildertrend-alternative",
  recommendedFormats: [
    "singular-alternative",
    "plural-alternatives",
    "vs",
    "matrix-vs",
  ],
};

export default buildertrend;
