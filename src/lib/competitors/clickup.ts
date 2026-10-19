// src/lib/competitors/clickup.ts
// TASK 5: Competitor dossier — ClickUp
import { Dossier } from "../competitorTypes";

const clickup: Dossier = {
  slug: "clickup",
  name: "ClickUp",
  category: "general-pm",
  positioning:
    "All-in-one productivity platform replacing multiple tools. Popular with startups and tech teams; not construction-specific.",
  targetAudience: [
    "Startups and tech teams",
    "Small businesses wanting one tool for everything",
    "Teams wanting high customization",
    "Construction teams wanting simple task management",
  ],
  pricing: {
    model: "Per-user/month with tiered plans",
    startingPrice: "$7/user/month (Unlimited)",
    enterpriseCost: "$12/user/month (Business)",
    freeOption: "Free tier available",
    contract: "Monthly or annual",
  },
  featureRatings: [
    { name: "Ease of Use", rating: 3 },
    { name: "Customization", rating: 5 },
    { name: "Feature Depth", rating: 5 },
    { name: "Value for Money", rating: 5 },
    { name: "Construction-Specific Features", rating: 1 },
    { name: "Financial Management", rating: 2 },
    { name: "AI / Automation", rating: 3 },
    { name: "Mobile Experience", rating: 3 },
  ],
  strengths: [
    "Extremely customizable — works for any workflow",
    "Generous free tier",
    "Built-in docs, whiteboards, and chat",
    "Strong automation engine",
    "Aggressive pricing",
  ],
  weaknesses: [
    "Too complex — feature overload",
    "Not built for construction workflows",
    "No drawing management or RFIs",
    "Performance issues with large datasets",
    "Learning curve is steep",
  ],
  bestFor: [
    "Tech-savvy teams wanting maximum flexibility",
    "Startups on tight budgets",
    "Organizations wanting to replace multiple tools",
    "Teams that value customization over simplicity",
  ],
  notIdealFor: [
    "Construction field teams",
    "Non-technical users",
    "Teams needing construction-specific features",
    "Organizations wanting simple, focused tools",
  ],
  commonComplaints: [
    "Too many features — overwhelming",
    "Performance degrades with large workspaces",
    "Not intuitive for non-technical users",
    "No construction-specific capabilities",
    "Constant feature changes",
  ],
  migrationNotes: [
    "Full API for data export",
    "Tasks and spaces exportable",
    "Migration is straightforward",
    "No construction-specific data formats",
  ],
  keywordCount: 3,
  summedVolume: 150,
  hasPage: true,
  pagePath: "/alternatives/clickup",
  recommendedFormats: [
    "singular-alternative",
    "plural-alternatives",
    "vs",
  ],
};

export default clickup;
