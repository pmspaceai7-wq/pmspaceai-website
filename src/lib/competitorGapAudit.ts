// src/lib/competitorGapAudit.ts
// TASK 4: Audit of current competitor page coverage vs. format vs. keyword
// demand. Flags gaps where no page exists despite demand.

import { PAGE_FORMATS, PageFormat } from "./keywordFormats";
import { competitorShortlist } from "./competitorShortlist";

export interface GapRow {
  competitorSlug: string;
  competitorName: string;
  demandVolume: number;
  hasSingular: boolean;
  hasPlural: boolean;
  hasVsPage: boolean;
  pagePath?: string;
  gapFormats: PageFormat[];
}

/** Currently shipped pages under /alternatives and /compare. */
const EXISTING_ALTERNATIVE_PAGES = [
  "asite",
  "autodesk-construction-cloud",
  "buildertrend",
  "coconstruct",
  "monday",
  "plangrid",
  "procore",
  "smartsheet",
  "wrike",
  "clickup",
];

const EXISTING_COMPARE_PAGES = [
  "construction-software-comparison",
  "procore-pricing",
  "procore-vs-buildertrend",
];

const COMPETITOR_ORDER: { slug: string; name: string; volume: number }[] =
  competitorShortlist.map((c) => ({
    slug: c.slug,
    name: c.name,
    volume: c.summedVolume,
  }));

/**
 * Build the page-vs-format-vs-demand gap table.
 * A competitor within `hasBaseSlug` list is deemed covered for the singular
 * alternative format; plural and vs formats are separate flags.
 */
export function buildGapAudit(): GapRow[] {
  return COMPETITOR_ORDER.map((c) => {
    const hasSingular = EXISTING_ALTERNATIVE_PAGES.includes(c.slug);
    const hasPlural = false; // No plural pages exist yet.
    const hasVs = EXISTING_COMPARE_PAGES.some(
      (p) => p.includes(`-vs-${c.slug}`) || p.includes(`${c.slug}-vs-`)
    );
    const gapFormats: PageFormat[] = [];
    if (!hasSingular) gapFormats.push("singular-alternative");
    if (!hasPlural) gapFormats.push("plural-alternatives");
    if (!hasVs) gapFormats.push("vs");
    return {
      competitorSlug: c.slug,
      competitorName: c.name,
      demandVolume: c.volume,
      hasSingular,
      hasPlural,
      hasVsPage: hasVs,
      pagePath: hasSingular ? `/alternatives/${c.slug}-alternative` : undefined,
      gapFormats,
    };
  }).sort((a, b) => {
    const gapScore = (r: GapRow) => r.demandVolume * r.gapFormats.length;
    return gapScore(b) - gapScore(a);
  });
}

export const competitorGapAudit: GapRow[] = buildGapAudit();

/** Human-readable summary of gaps. */
export function gapSummary(): string[] {
  return competitorGapAudit
    .filter((r) => r.gapFormats.length > 0 && r.demandVolume > 0)
    .map(
      (r) =>
        `${r.competitorName} (vol ${r.demandVolume}): missing ${r.gapFormats.join(", ")}`
    );
}

/** Pages with zero page coverage at all — candidates for the next build phase. */
export function uncoveredCompetitors(): GapRow[] {
  return competitorGapAudit.filter(
    (r) => r.gapFormats.length === 3 && r.demandVolume > 0
  );
}

/** Number of pages needed to reach full format coverage (3 formats each). */
export function coverageStats(): {
  totalCompetitors: number;
  existingPages: number;
  pagesToBuild: number;
} {
  let existing = 0;
  let toBuild = 0;
  for (const r of competitorGapAudit) {
    if (r.hasSingular || r.hasVsPage || r.hasPlural) existing++;
    toBuild += r.gapFormats.length;
  }
  return {
    totalCompetitors: competitorGapAudit.length,
    existingPages: existing,
    pagesToBuild: toBuild,
  };
}