// src/lib/competitorDossiers.ts
// TASK 5: Centralized registry of all competitor research dossiers.
// Single source of truth for all alternative/vs pages across the site.

import { Dossier } from "./competitorTypes";
import procore from "./competitors/procore";
import buildertrend from "./competitors/buildertrend";
import plangrid from "./competitors/plangrid";
import autodesk from "./competitors/autodesk-construction-cloud";
import monday from "./competitors/monday";
import smartsheet from "./competitors/smartsheet";
import fieldwire from "./competitors/fieldwire";
import coconstruct from "./competitors/coconstruct";
import wrike from "./competitors/wrike";
import clickup from "./competitors/clickup";
import oracle from "./competitors/oracle";
import primavera from "./competitors/primavera-p6";

/** All competitor dossiers, keyed by slug. */
export const competitorDossiers: Dossier[] = [
  procore,
  buildertrend,
  plangrid,
  autodesk,
  monday,
  smartsheet,
  fieldwire,
  coconstruct,
  wrike,
  clickup,
  oracle,
  primavera,
];

/** Lookup a single dossier by slug. */
export function getDossier(slug: string): Dossier | undefined {
  return competitorDossiers.find((d) => d.slug === slug);
}

/** All dossiers that do NOT have an existing page. */
export function uncoveredCompetitors(): Dossier[] {
  return competitorDossiers.filter((d) => !d.hasPage);
}

/** All dossiers that have an existing page. */
export function coveredCompetitors(): Dossier[] {
  return competitorDossiers.filter((d) => d.hasPage);
}

/** Dossiers sorted by keyword demand (volume). */
export function dossiersByDemand(): Dossier[] {
  return [...competitorDossiers].sort((a, b) => b.summedVolume - a.summedVolume);
}
