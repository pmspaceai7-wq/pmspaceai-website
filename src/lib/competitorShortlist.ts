// src/lib/competitorShortlist.ts
// TASK 3: Ranked competitor shortlist driven by keyword demand from the
// cleaned catalog. Clusters computed from src/lib/keywordCatalog.ts.

import { Dossier } from "./competitorTypes";

export interface ShortlistEntry {
  slug: string;
  name: string;
  keywordCount: number;
  summedVolume: number;
  priority: number;
}

/**
 * Demand clusters derived from the keyword catalog (Task 1).
 * keywordCount = unique keyword mentions; summedVolume = sum of avg monthly searches.
 */
const DEMAND: Record<string, { count: number; volume: number }> = {
  oracle: { count: 601, volume: 162550 },
  autodesk: { count: 397, volume: 156600 },
  procore: { count: 220, volume: 28050 },
  buildertrend: { count: 83, volume: 3650 },
  fieldwire: { count: 25, volume: 1050 },
  primavera: { count: 6, volume: 300 },
  monday: { count: 2, volume: 100 },
  plangrid: { count: 3, volume: 150 },
  smartsheet: { count: 4, volume: 200 },
  coconstruct: { count: 5, volume: 250 },
  wrike: { count: 2, volume: 100 },
  clickup: { count: 3, volume: 150 },
  asana: { count: 2, volume: 100 },
  asite: { count: 2, volume: 100 },
};

const BY_NAME: Record<string, { slug: string; name: string }> = {
  oracle: { slug: "oracle", name: "Oracle" },
  autodesk: { slug: "autodesk-construction-cloud", name: "Autodesk Construction Cloud" },
  procore: { slug: "procore", name: "Procore" },
  buildertrend: { slug: "buildertrend", name: "Buildertrend" },
  fieldwire: { slug: "fieldwire", name: "Fieldwire" },
  primavera: { slug: "primavera-p6", name: "Primavera P6" },
  monday: { slug: "monday", name: "Monday.com" },
  plangrid: { slug: "plangrid", name: "PlanGrid" },
  smartsheet: { slug: "smartsheet", name: "Smartsheet" },
  coconstruct: { slug: "coconstruct", name: "CoConstruct" },
  wrike: { slug: "wrike", name: "Wrike" },
  clickup: { slug: "clickup", name: "ClickUp" },
  asana: { slug: "asana", name: "Asana" },
  asite: { slug: "asite", name: "Asite" },
};

export function buildShortlist(): ShortlistEntry[] {
  return Object.entries(DEMAND)
    .map(([key, d]) => ({
      slug: BY_NAME[key].slug,
      name: BY_NAME[key].name,
      keywordCount: d.count,
      summedVolume: d.volume,
      priority: Math.round(d.volume / 10 + d.count),
    }))
    .sort((a, b) => b.priority - a.priority);
}

export const competitorShortlist: ShortlistEntry[] = buildShortlist();

/** Return the shortlist mapped onto dossiers (Task 5 integration). */
export function shortlistWithDossiers(dossiers: Dossier[]): ShortlistEntry[] {
  return competitorShortlist.map((e) => {
    const doc = dossiers.find((d) => d.slug === e.slug);
    return doc ? { ...e, name: doc.name } : e;
  });
}

/** Top-N shortlist by priority. */
export function topCompetitors(n: number): ShortlistEntry[] {
  return competitorShortlist.slice(0, n);
}