// src/lib/competitors/primavera-p6.ts
// TASK 5: Competitor dossier — Primavera P6 (Oracle)
import { Dossier } from "../competitorTypes";

const primavera: Dossier = {
  slug: "primavera-p6",
  name: "Primavera P6",
  category: "enterprise-erp",
  positioning:
    "Industry-standard enterprise scheduling tool owned by Oracle. Dominant for complex capital projects; extremely powerful but notoriously difficult to use.",
  targetAudience: [
    "Project controls and scheduling specialists",
    "Large EPC contractors",
    "Infrastructure and megaproject teams",
    "Organizations needing CPM scheduling",
  ],
  pricing: {
    model: "Per-user/month (part of Oracle suite)",
    startingPrice: "$250+/user/month",
    enterpriseCost: "$400–800/user/month",
    freeOption: "No free tier",
    contract: "Annual (Oracle license)",
  },
  featureRatings: [
    { name: "Scheduling Depth", rating: 5 },
    { name: "Resource Management", rating: 5 },
    { name: "Enterprise Scale", rating: 5 },
    { name: "Ease of Use", rating: 1 },
    { name: "Mobile Experience", rating: 1 },
    { name: "AI / Automation", rating: 0 },
    { name: "Reporting & Analytics", rating: 3 },
    { name: "Integration Flexibility", rating: 2 },
  ],
  strengths: [
    "Unmatched scheduling depth and CPM capabilities",
    "Handles 100,000+ activity schedules",
    "Industry standard for megaprojects",
    "Strong resource loading and leveling",
    "Earned value management built in",
  ],
  weaknesses: [
    "Extremely steep learning curve (weeks of training)",
    "Outdated, desktop-era interface",
    "Very expensive licensing",
    "No modern collaboration features",
    "No AI or automation",
  ],
  bestFor: [
    "Megaprojects ($1B+) requiring detailed CPM scheduling",
    "Project controls teams with dedicated schedulers",
    "Government and infrastructure programs",
    "Organizations with existing Oracle licenses",
  ],
  notIdealFor: [
    "Small to mid-size projects",
    "Teams wanting modern, intuitive UX",
    "Budget-constrained organizations",
    "Residential and light commercial",
  ],
  commonComplaints: [
    "Worst UX of any enterprise software",
    "Training costs exceed software cost",
    "No cloud-native experience",
    "Too complex for most construction projects",
    "Requires dedicated P6 administrators",
  ],
  migrationNotes: [
    "Schedules export as XER, XML, or CSV",
    "Resource data exportable via API",
    "Migration to Space AI takes 1–2 weeks",
    "Common pain: resource calendars need manual recreation",
  ],
  keywordCount: 6,
  summedVolume: 300,
  hasPage: false,
  recommendedFormats: [
    "singular-alternative",
    "plural-alternatives",
    "vs",
  ],
};

export default primavera;
