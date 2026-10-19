// src/lib/keywordFormats.ts
// TASK 2: Map comparative keywords to the four page formats.
// Provides a keyword->page-format classifier plus a generated matrix
// derived from the cleaned keyword catalog (src/lib/keywordCatalog.ts).

import { keywordCatalog, KeywordEntry } from "./keywordCatalog";

export type PageFormat = "singular-alternative" | "plural-alternatives" | "vs" | "matrix-vs";

export interface PageFormatDef {
  id: PageFormat;
  label: string;
  urlPattern: string;
  exampleKeywords: string[];
  description: string;
}

export const PAGE_FORMATS: PageFormatDef[] = [
  {
    id: "singular-alternative",
    label: "[Competitor] Alternative",
    urlPattern: "/alternatives/[competitor]",
    exampleKeywords: ["[Competitor] alternative", "switch from [Competitor]"],
    description: "User actively looking to switch from a specific competitor.",
  },
  {
    id: "plural-alternatives",
    label: "[Competitor] Alternatives",
    urlPattern: "/alternatives/[competitor]-alternatives",
    exampleKeywords: ["[Competitor] alternatives", "tools like [Competitor]"],
    description: "User researching options, earlier in the journey.",
  },
  {
    id: "vs",
    label: "You vs [Competitor]",
    urlPattern: "/compare/space-ai-vs-[competitor]",
    exampleKeywords: ["Space AI vs [Competitor]", "[Competitor] vs Space AI"],
    description: "User directly comparing us to a specific competitor.",
  },
  {
    id: "matrix-vs",
    label: "[Competitor A] vs [Competitor B]",
    urlPattern: "/compare/[competitor-a]-vs-[competitor-b]",
    exampleKeywords: ["Procore vs Buildertrend"],
    description: "User comparing two competitors, with us as the third option.",
  },
];

// Phrase signals that map a keyword to a page format.
const SIGNALS: { format: PageFormat; pattern: RegExp }[] = [
  {
    format: "plural-alternatives",
    pattern: /\b(alternatives?|tools? like|software like|similar to|comparable to|replacements for)\b/,
  },
  {
    format: "singular-alternative",
    pattern: /\balternative to\b|\bvs\b|\bversus\b|\bcompare\b|\bcomparison\b|\bsubstitute\b|\bcompetitor\b|\bswitch from\b|\bmove from\b|\baway from\b/,
  },
  {
    format: "matrix-vs",
    pattern: /\bvs\.?\b|\bversus\b|\bcompare\b|\bcomparison\b|\bor\b/,
  },
  {
    format: "vs",
    pattern: /\bspace\s*ai\b|\bpmspace\b/,
  },
];

/**
 * Classify a single keyword into the best-fit page format.
 * Order matters: more specific intent (plural/singular) is checked first.
 */
export function classifyKeywordFormat(keyword: string): PageFormat {
  const k = keyword.toLowerCase();
  for (const sig of SIGNALS) {
    if (sig.pattern.test(k)) return sig.format;
  }
  // Fallback: comparative by nature but no competitor signal -> singular alternative
  return "singular-alternative";
}

export interface FormatMatrixRow {
  keyword: string;
  avgMonthlySearches: number;
  competition: string;
  score: number;
  format: PageFormat;
}

/**
 * Generate the keyword->page-format matrix from the cleaned catalog.
 * Only includes keywords that carry comparative intent or a competitor term.
 */
export function buildFormatMatrix(): FormatMatrixRow[] {
  const competitorTerms =
    /procore|buildertrend|plangrid|plan grid|autodesk|construction cloud|monday|smartsheet|fieldwire|coconstruct|wrike|clickup|asana|asite|oracle|primavera|trello|jira|jobber|houzz|acc /i;
  return keywordCatalog
    .filter((k: KeywordEntry) => k.intent === "comparative" || competitorTerms.test(k.keyword))
    .map((k: KeywordEntry) => ({
      keyword: k.keyword,
      avgMonthlySearches: k.avgMonthlySearches,
      competition: k.competition,
      score: k.score,
      format: classifyKeywordFormat(k.keyword),
    }));
}

/**
 * Precomputed matrix used across the app.
 */
export const formatMatrix: FormatMatrixRow[] = buildFormatMatrix();

/** Count of keywords mapped to each format. */
export function formatCounts(): Record<PageFormat, number> {
  const counts: Record<PageFormat, number> = {
    "singular-alternative": 0,
    "plural-alternatives": 0,
    vs: 0,
    "matrix-vs": 0,
  };
  for (const row of formatMatrix) counts[row.format]++;
  return counts;
}

/** Top keywords for a given format, by score. */
export function keywordsForFormat(format: PageFormat, limit = 25): FormatMatrixRow[] {
  return formatMatrix
    .filter((r) => r.format === format)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}