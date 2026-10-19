// src/lib/competitors/plangrid.ts
// TASK 5: Competitor dossier — PlanGrid (Autodesk)
import { Dossier } from "../competitorTypes";

const plangrid: Dossier = {
  slug: "plangrid",
  name: "PlanGrid",
  category: "field",
  positioning:
    "Field-first construction management tool acquired by Autodesk in 2019. Strong drawing management and offline capability; now integrated into Autodesk Construction Cloud.",
  targetAudience: [
    "Field teams and superintendents",
    "Commercial general contractors",
    "Subcontractors doing field-intensive work",
    "Teams already using Autodesk products",
  ],
  pricing: {
    model: "Per-user/month (part of Autodesk suite)",
    startingPrice: "$55/user/month",
    enterpriseCost: "$75–100/user/month (bundled with ACC)",
    freeOption: "No free tier",
    contract: "Annual (Autodesk contract)",
  },
  featureRatings: [
    { name: "Drawing Management", rating: 5 },
    { name: "Offline Functionality", rating: 5 },
    { name: "Field Usability", rating: 5 },
    { name: "Financial Management", rating: 2 },
    { name: "Scheduling", rating: 2 },
    { name: "AI / Automation", rating: 0 },
    { name: "Reporting & Analytics", rating: 3 },
    { name: "Client Portal", rating: 1 },
  ],
  strengths: [
    "Best-in-class drawing management and hyperlinks",
    "Robust offline sync for field teams",
    "Automatic sheet version detection",
    "Simple, field-friendly interface",
    "Deep integration with Autodesk ecosystem",
  ],
  weaknesses: [
    "No financial management or budgeting tools",
    "Limited scheduling capabilities",
    "Being sunset into Autodesk Construction Cloud",
    "No AI or automation features",
    "Reporting is basic compared to dedicated PM tools",
  ],
  bestFor: [
    "Field teams needing fast drawing access",
    "Subcontractors doing daily issue tracking",
    "Teams already on Autodesk ecosystem",
    "Projects with complex drawing sets (500+ sheets)",
  ],
  notIdealFor: [
    "Teams needing financial management",
    "Firms wanting a standalone PM solution",
    "Organizations avoiding vendor lock-in",
    "Budget-constrained teams",
  ],
  commonComplaints: [
    "Being absorbed into ACC creates uncertainty",
    "Pricing increased after Autodesk acquisition",
    "Loses functionality outside Autodesk ecosystem",
    "Limited RFI and submittal workflows",
    "No roadmap clarity for standalone PlanGrid",
  ],
  migrationNotes: [
    "Drawing sets export as standard formats (PDF, DWG)",
    "Tasks and issues exportable via API",
    "Migration to Space AI takes 1–2 weeks",
    "Field data (photos, markups) preserved on export",
  ],
  keywordCount: 3,
  summedVolume: 150,
  hasPage: true,
  pagePath: "/alternatives/plangrid-alternative",
  recommendedFormats: [
    "singular-alternative",
    "plural-alternatives",
    "vs",
  ],
};

export default plangrid;
