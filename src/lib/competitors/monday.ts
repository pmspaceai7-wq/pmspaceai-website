// src/lib/competitors/monday.ts
// TASK 5: Competitor dossier — Monday.com
import { Dossier } from "../competitorTypes";

const monday: Dossier = {
  slug: "monday",
  name: "Monday.com",
  category: "general-pm",
  positioning:
    "Flexible, visual work management platform used across industries. Not construction-specific; popular for general project management and CRM.",
  targetAudience: [
    "Non-technical teams needing visual project tracking",
    "Small businesses wanting quick setup",
    "Marketing and operations teams",
    "Construction teams wanting simple task management",
  ],
  pricing: {
    model: "Per-seat/month with tiered plans",
    startingPrice: "$9/seat/month (Basic)",
    enterpriseCost: "$24/seat/month (Enterprise)",
    freeOption: "Free tier for up to 2 seats",
    contract: "Monthly or annual",
  },
  featureRatings: [
    { name: "Ease of Use", rating: 5 },
    { name: "Visual Dashboards", rating: 5 },
    { name: "Customization", rating: 4 },
    { name: "Mobile Experience", rating: 4 },
    { name: "Construction-Specific Features", rating: 1 },
    { name: "Financial Management", rating: 2 },
    { name: "AI / Automation", rating: 2 },
    { name: "Reporting & Analytics", rating: 3 },
  ],
  strengths: [
    "Extremely easy to set up and use",
    "Highly visual Kanban and Gantt views",
    "Flexible for any workflow",
    "Strong automation recipes",
    "Free tier available",
  ],
  weaknesses: [
    "Not built for construction — no RFI, submittals, punch lists",
    "Construction-specific apps are third-party add-ons",
    "Limited document management for drawings",
    "No field-first mobile experience",
    "Complex pricing as team scales",
  ],
  bestFor: [
    "Teams wanting simple task tracking",
    "Non-construction workflows alongside construction",
    "Small businesses on tight budgets",
    "Organizations wanting quick time-to-value",
  ],
  notIdealFor: [
    "Teams needing construction-specific workflows",
    "Field-heavy projects requiring offline access",
    "Organizations needing drawing management",
    "Complex project scheduling with dependencies",
  ],
  commonComplaints: [
    "Too generic for construction needs",
    "Pricing gets expensive at scale",
    "Automation limits on lower plans",
    "No native construction features",
    "Reporting requires paid add-ons",
  ],
  migrationNotes: [
    "CSV export for tasks and boards",
    "API available for full data extraction",
    "Migration is simple (few construction-specific fields to map)",
    "No construction-specific data formats to worry about",
  ],
  keywordCount: 2,
  summedVolume: 100,
  hasPage: true,
  pagePath: "/alternatives/monday-alternative",
  recommendedFormats: [
    "singular-alternative",
    "plural-alternatives",
    "vs",
  ],
};

export default monday;
