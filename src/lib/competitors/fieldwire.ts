// src/lib/competitors/fieldwire.ts
// TASK 5: Competitor dossier — Fieldwire
import { Dossier } from "../competitorTypes";

const fieldwire: Dossier = {
  slug: "fieldwire",
  name: "Fieldwire",
  category: "field",
  positioning:
    "Field-first task management platform for construction. Strong for punch lists, daily logs, and plan viewing. Now part of Hilti Group.",
  targetAudience: [
    "Field supervisors and superintendents",
    "Subcontractors doing field execution",
    "Teams needing simple task tracking on-site",
    "General contractors managing subcontractors",
  ],
  pricing: {
    model: "Per-user/month with free tier",
    startingPrice: "Free (up to 3 projects)",
    enterpriseCost: "$39/user/month (Pro)",
    freeOption: "Yes — free tier with 3 projects",
    contract: "Monthly or annual",
  },
  featureRatings: [
    { name: "Field Usability", rating: 5 },
    { name: "Task Management", rating: 4 },
    { name: "Drawing Viewing", rating: 4 },
    { name: "Offline Capability", rating: 4 },
    { name: "Financial Management", rating: 1 },
    { name: "Scheduling", rating: 2 },
    { name: "AI / Automation", rating: 0 },
    { name: "Reporting & Analytics", rating: 2 },
  ],
  strengths: [
    "Excellent field-first design",
    "Free tier is generous for small teams",
    "Fast task creation and assignment",
    "Solid offline sync",
    "Simple enough for non-technical users",
  ],
  weaknesses: [
    "Very limited project management features",
    "No financial management or budgeting",
    "No scheduling or Gantt capabilities",
    "Acquired by Hilti — future direction uncertain",
    "No AI or automation",
  ],
  bestFor: [
    "Field teams needing task management",
    "Small subcontractors on a budget",
    "Teams wanting quick punch list tracking",
    "Organizations already using Hilti products",
  ],
  notIdealFor: [
    "Teams needing full project management",
    "Firms requiring financial management",
    "Organizations wanting AI-driven insights",
    "Complex projects with scheduling needs",
  ],
  commonComplaints: [
    "Too simple for full project management",
    "Reporting is very limited",
    "No financial or budgeting tools",
    "Hilti acquisition creates uncertainty",
    "Limited integrations",
  ],
  migrationNotes: [
    "Tasks and plans exportable via API",
    "Drawing sets download as PDFs",
    "Migration takes 1–2 weeks for field data",
    "Photo and document exports available",
  ],
  keywordCount: 25,
  summedVolume: 1050,
  hasPage: false,
  recommendedFormats: [
    "singular-alternative",
    "plural-alternatives",
    "vs",
  ],
};

export default fieldwire;
