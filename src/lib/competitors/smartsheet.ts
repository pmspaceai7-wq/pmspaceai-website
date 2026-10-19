// src/lib/competitors/smartsheet.ts
// TASK 5: Competitor dossier — Smartsheet
import { Dossier } from "../competitorTypes";

const smartsheet: Dossier = {
  slug: "smartsheet",
  name: "Smartsheet",
  category: "general-pm",
  positioning:
    "Spreadsheet-based work management platform. Popular for general PM and operations but not built for construction workflows.",
  targetAudience: [
    "Operations teams familiar with spreadsheets",
    "PMOs managing cross-functional projects",
    "Mid-market firms wanting Excel-like flexibility",
    "Construction teams using spreadsheets for tracking",
  ],
  pricing: {
    model: "Per-user/month with tiered plans",
    startingPrice: "$7/user/month (Pro)",
    enterpriseCost: "$25/user/month (Enterprise)",
    freeOption: "Free tier available (limited)",
    contract: "Monthly or annual",
  },
  featureRatings: [
    { name: "Ease of Use", rating: 4 },
    { name: "Spreadsheet Flexibility", rating: 5 },
    { name: "Automations", rating: 3 },
    { name: "Mobile Experience", rating: 3 },
    { name: "Construction-Specific Features", rating: 1 },
    { name: "Financial Management", rating: 2 },
    { name: "AI / Automation", rating: 1 },
    { name: "Reporting & Analytics", rating: 3 },
  ],
  strengths: [
    "Familiar spreadsheet interface — low learning curve",
    "Flexible for any type of tracking",
    "Strong automation and workflow rules",
    "Good for PMOs and cross-functional projects",
    "Integrates with popular business tools",
  ],
  weaknesses: [
    "Not built for construction — no RFI, submittals, drawings",
    "Spreadsheet metaphor breaks down for complex projects",
    "Limited field capabilities",
    "No offline mode",
    "No AI or predictive features",
  ],
  bestFor: [
    "Teams transitioning from Excel",
    "PMOs managing non-construction projects",
    "Operations teams needing flexible tracking",
    "Organizations wanting quick setup",
  ],
  notIdealFor: [
    "Construction field teams",
    "Teams needing drawing management",
    "Organizations wanting construction-specific workflows",
    "Budget-conscious firms (add-ons get expensive)",
  ],
  commonComplaints: [
    "Too generic for construction",
    "Add-ons for advanced features get expensive",
    "Performance degrades with large sheets",
    "No construction-specific templates",
    "Limited reporting on lower tiers",
  ],
  migrationNotes: [
    "Full API for data export",
    "Sheets export as CSV or Excel",
    "Migration is straightforward (tabular data)",
    "No construction-specific data formats to map",
  ],
  keywordCount: 4,
  summedVolume: 200,
  hasPage: true,
  pagePath: "/alternatives/smartsheet-alternative",
  recommendedFormats: [
    "singular-alternative",
    "plural-alternatives",
    "vs",
  ],
};

export default smartsheet;
