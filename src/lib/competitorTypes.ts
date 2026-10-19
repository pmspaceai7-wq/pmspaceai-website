// src/lib/competitorTypes.ts
// TASK 3 & 5: Shared types for competitor shortlist and research dossiers.
// Single source of truth so all alternative/vs pages render consistent data.

export interface CompetitorPricing {
  model: string;
  startingPrice: string;
  enterpriseCost: string;
  freeOption: string;
  contract: string;
}

export interface FeatureRating {
  name: string;
  /** 1-5 rating relative to our product */
  rating: number;
}

export interface Dossier {
  /** Stable lowercase slug used in URLs and lookup keys. */
  slug: string;
  name: string;
  category: "commercial" | "residential" | "general-pm" | "field" | "enterprise-erp" | "acd";
  positioning: string;
  targetAudience: string[];
  pricing: CompetitorPricing;
  featureRatings: FeatureRating[];
  strengths: string[];
  weaknesses: string[];
  bestFor: string[];
  notIdealFor: string[];
  commonComplaints: string[];
  migrationNotes: string[];
  /** Key stats for demand ranking (Task 3). */
  keywordCount: number;
  summedVolume: number;
  hasPage: boolean;
  pagePath?: string;
  recommendedFormats: string[];
}