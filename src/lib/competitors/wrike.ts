// src/lib/competitors/wrike.ts
// TASK 5: Competitor dossier — Wrike
import { Dossier } from "../competitorTypes";

const wrike: Dossier = {
  slug: "wrike",
  name: "Wrike",
  category: "general-pm",
  positioning:
    "Enterprise work management platform for cross-functional teams. Strong for marketing and creative teams; not construction-specific.",
  targetAudience: [
    "Marketing and creative teams",
    "Enterprise PMOs",
    "Professional services firms",
    "Construction teams wanting general PM tools",
  ],
  pricing: {
    model: "Per-user/month with tiered plans",
    startingPrice: "$9.80/user/month (Team)",
    enterpriseCost: "$24.80/user/month (Enterprise)",
    freeOption: "Free tier available",
    contract: "Monthly or annual",
  },
  featureRatings: [
    { name: "Ease of Use", rating: 4 },
    { name: "Customization", rating: 4 },
    { name: "Collaboration", rating: 4 },
    { name: "Reporting & Analytics", rating: 4 },
    { name: "Construction-Specific Features", rating: 1 },
    { name: "Financial Management", rating: 2 },
    { name: "AI / Automation", rating: 2 },
    { name: "Mobile Experience", rating: 3 },
  ],
  strengths: [
    "Strong collaboration and proofing tools",
    "Good reporting and dashboards",
    "Flexible for any workflow",
    "Enterprise-grade security",
    "Available in 14 languages",
  ],
  weaknesses: [
    "Not built for construction",
    "No RFI, submittals, or drawing management",
    "Construction templates are limited",
    "Complex pricing with many tiers",
    "No field-first mobile experience",
  ],
  bestFor: [
    "Marketing and creative teams",
    "Enterprise organizations wanting cross-functional PM",
    "Professional services firms",
    "Teams needing strong collaboration features",
  ],
  notIdealFor: [
    "Construction field teams",
    "Organizations needing construction-specific workflows",
    "Budget-conscious firms",
    "Teams wanting offline mobile access",
  ],
  commonComplaints: [
    "Too generic for construction needs",
    "Pricing escalates with add-ons",
    "Mobile app is limited",
    "Steep learning curve for advanced features",
    "No construction-specific integrations",
  ],
  migrationNotes: [
    "Full API for data export",
    "Tasks and projects exportable as CSV",
    "Migration is straightforward",
    "No construction-specific data formats",
  ],
  keywordCount: 2,
  summedVolume: 100,
  hasPage: true,
  pagePath: "/alternatives/wrike-alternative",
  recommendedFormats: [
    "singular-alternative",
    "plural-alternatives",
    "vs",
  ],
};

export default wrike;
