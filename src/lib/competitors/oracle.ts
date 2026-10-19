// src/lib/competitors/oracle.ts
// TASK 5: Competitor dossier — Oracle (Construction & Engineering)
import { Dossier } from "../competitorTypes";

const oracle: Dossier = {
  slug: "oracle",
  name: "Oracle",
  category: "enterprise-erp",
  positioning:
    "Enterprise ERP and construction suite (Primavera + Aconex + JD Edwards). Dominant for large-scale capital projects but extremely complex and expensive.",
  targetAudience: [
    "Large enterprise contractors ($500M+ revenue)",
    "Oil & gas and infrastructure firms",
    "Government and defense contractors",
    "Organizations needing integrated ERP + construction",
  ],
  pricing: {
    model: "Per-user/month with enterprise licensing",
    startingPrice: "$250+/user/month",
    enterpriseCost: "$500–1,500+/user/month (full suite)",
    freeOption: "No free tier",
    contract: "Multi-year enterprise agreements",
  },
  featureRatings: [
    { name: "Enterprise Scale", rating: 5 },
    { name: "Financial Integration", rating: 5 },
    { name: "BIM Integration", rating: 4 },
    { name: "Scheduling (Primavera)", rating: 5 },
    { name: "Ease of Use", rating: 1 },
    { name: "Mobile Experience", rating: 2 },
    { name: "AI / Automation", rating: 1 },
    { name: "Value for Money", rating: 1 },
  ],
  strengths: [
    "Unmatched enterprise scale and reliability",
    "Deep ERP integration (financials, HR, procurement)",
    "Primavera P6 is industry standard for complex scheduling",
    "Strong for large capital projects",
    "Global support and implementation network",
  ],
  weaknesses: [
    "Extremely expensive — often $1M+ annually for full suite",
    "Years-long implementation cycles",
    "Interfaces are decades old",
    "No AI or modern automation",
    "Requires dedicated admin team",
  ],
  bestFor: [
    "Fortune 500 contractors",
    "Government and defense construction programs",
    "Oil & gas capital projects",
    "Organizations needing ERP + construction integration",
  ],
  notIdealFor: [
    "Small to mid-size contractors",
    "Teams wanting modern UX",
    "Budget-conscious organizations",
    "Residential and light commercial",
  ],
  commonComplaints: [
    "Pricing is prohibitive for most firms",
    "Implementation takes 1–3 years",
    "User experience is decades behind modern SaaS",
    "Support is expensive and slow",
    "Too complex for most construction workflows",
  ],
  migrationNotes: [
    "Full API and data export capabilities",
    "Primavera schedules export as XER/XML",
    "Migration from Oracle is complex (heavy customization)",
    "Takes 3–6 months for full migration",
  ],
  keywordCount: 601,
  summedVolume: 162550,
  hasPage: false,
  recommendedFormats: [
    "singular-alternative",
    "plural-alternatives",
    "matrix-vs",
  ],
};

export default oracle;
