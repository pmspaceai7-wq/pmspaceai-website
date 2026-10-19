// src/lib/competitors/coconstruct.ts
// TASK 5: Competitor dossier — CoConstruct
import { Dossier } from "../competitorTypes";

const coconstruct: Dossier = {
  slug: "coconstruct",
  name: "CoConstruct",
  category: "residential",
  positioning:
    "Client management and selection platform for custom home builders. Now part of Buildertrend parent company. Strong for client communication but limited PM depth.",
  targetAudience: [
    "Custom home builders",
    "High-end residential remodelers",
    "Builders wanting client-facing selection tools",
    "Small residential firms",
  ],
  pricing: {
    model: "Per-user/month",
    startingPrice: "$99/user/month",
    enterpriseCost: "$199/user/month",
    freeOption: "No free tier",
    contract: "Annual required",
  },
  featureRatings: [
    { name: "Client Communication", rating: 5 },
    { name: "Selection Management", rating: 5 },
    { name: "Financial Management", rating: 3 },
    { name: "Scheduling", rating: 2 },
    { name: "Mobile Experience", rating: 3 },
    { name: "Ease of Use", rating: 4 },
    { name: "AI / Automation", rating: 0 },
    { name: "Reporting & Analytics", rating: 2 },
  ],
  strengths: [
    "Excellent client communication tools",
    "Best-in-class selection and allowance management",
    "Built for the custom home builder workflow",
    "Simple, intuitive interface",
    "Good for managing homeowner expectations",
  ],
  weaknesses: [
    "Very limited for commercial projects",
    "No drawing management",
    "Scheduling is basic",
    "Being absorbed into Buildertrend ecosystem",
    "No AI or automation",
  ],
  bestFor: [
    "Custom home builders doing 10–30 projects/year",
    "Teams wanting strong client communication",
    "Builders needing selection tracking",
    "Firms prioritizing client experience over PM depth",
  ],
  notIdealFor: [
    "Commercial contractors",
    "Teams needing full project management",
    "Organizations wanting drawing management",
    "Budget-conscious firms",
  ],
  commonComplaints: [
    "Too limited outside custom home building",
    "Being merged into Buildertrend creates uncertainty",
    "No drawing management",
    "Scheduling is too basic for complex projects",
    "Pricing is high for the feature set",
  ],
  migrationNotes: [
    "Contact and project data exportable",
    "Selection sheets need manual recreation",
    "Migration takes 1–2 weeks",
    "Client communication history preserved on export",
  ],
  keywordCount: 5,
  summedVolume: 250,
  hasPage: true,
  pagePath: "/alternatives/coconstruct-alternative",
  recommendedFormats: [
    "singular-alternative",
    "plural-alternatives",
    "vs",
  ],
};

export default coconstruct;
