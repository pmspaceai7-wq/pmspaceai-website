// src/lib/competitors/autodesk-construction-cloud.ts
// TASK 5: Competitor dossier — Autodesk Construction Cloud
import { Dossier } from "../competitorTypes";

const autodesk: Dossier = {
  slug: "autodesk-construction-cloud",
  name: "Autodesk Construction Cloud",
  category: "commercial",
  positioning:
    "Autodesk's unified construction platform combining BIM 360, PlanGrid, and BuildingConnected. Strong BIM integration but complex, expensive, and ecosystem-locked.",
  targetAudience: [
    "Large commercial general contractors",
    "Design-build firms using Revit/AutoCAD",
    "Enterprise owners managing portfolios",
    "Teams requiring BIM coordination",
  ],
  pricing: {
    model: "Per-user/month with tiered plans",
    startingPrice: "$80/user/month (Docs)",
    enterpriseCost: "$250–500+/user/month (full Build + BIM Collaborate)",
    freeOption: "No free tier; limited viewer access",
    contract: "Annual required",
  },
  featureRatings: [
    { name: "BIM Integration", rating: 5 },
    { name: "Drawing Management", rating: 5 },
    { name: "Financial Management", rating: 3 },
    { name: "Scheduling", rating: 3 },
    { name: "Mobile Experience", rating: 3 },
    { name: "Ease of Use", rating: 2 },
    { name: "AI / Automation", rating: 1 },
    { name: "Reporting & Analytics", rating: 4 },
  ],
  strengths: [
    "Deep BIM and design-to-build integration",
    "Comprehensive document management",
    "Strong enterprise security (SOC 2, FedRAMP)",
    "BuildingConnected preconstruction tools",
    "Connected ecosystem across design and construction",
  ],
  weaknesses: [
    "Extremely complex — multiple products bundled together",
    "Expensive; costs add up across Docs, Build, and BIM Collaborate",
    "Vendor lock-in to Autodesk ecosystem",
    "Poor experience for non-Autodesk design tools",
    "Implementation takes months for full deployment",
  ],
  bestFor: [
    "Firms standardized on Revit/AutoCAD",
    "Large commercial projects requiring BIM coordination",
    "Enterprise portfolios needing central governance",
    "Design-build teams with integrated design workflows",
  ],
  notIdealFor: [
    "Teams using mixed design tools (SketchUp, Rhino, etc.)",
    "Small to mid-size contractors",
    "Budget-conscious organizations",
    "Teams wanting modern, intuitive UX",
  ],
  commonComplaints: [
    "Pricing is opaque and escalates quickly",
    "Too many products create confusion",
    "Implementation requires dedicated consultants",
    "Mobile experience is inconsistent",
    "Support tiers are expensive",
  ],
  migrationNotes: [
    "Full API for data export across all modules",
    "Drawing sets, RFIs, submittals, issues all exportable",
    "Migration takes 3–6 weeks depending on module usage",
    "BIM models export as standard IFC/RVT formats",
  ],
  keywordCount: 397,
  summedVolume: 156600,
  hasPage: true,
  pagePath: "/alternatives/autodesk-construction-cloud-alternative",
  recommendedFormats: [
    "singular-alternative",
    "plural-alternatives",
    "vs",
    "matrix-vs",
  ],
};

export default autodesk;
