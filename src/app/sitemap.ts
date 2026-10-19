import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";
import { getAllBlogPosts } from "@/lib/blogs";
import { getAllVideoPosts } from "@/lib/videos";
import { getAllDocPaths } from "@/lib/docs";
import { getAllGuides } from "@/lib/guides";
import { getAllGuideArticles } from "@/lib/guideArticles";
import { getAllTools } from "@/lib/core";
import { appsData } from "@/lib/apps";
import { softwareData } from "@/lib/software";
import { whitePapersData } from "@/lib/whitePapers";
import { roleSolutions } from "@/lib/roleSolutions";

export const dynamic = "force-static";

const SITE_URL = "https://pmspace.ai";
const APP_DIR = path.join(process.cwd(), "src", "app");
const CONFIG_PATH = path.join(process.cwd(), "next.config.mjs");

// Pages that must never appear in the XML sitemap
const EXCLUDED_PATHS = new Set([
  "/", // handled separately with top priority
  "/search", // robots: noindex
  "/sitemap", // human-readable HTML sitemap (robots: noindex)
  "/404",
]);

/**
 * Parse redirect `source:` entries out of next.config.mjs so redirect-source
 * URLs never end up in the sitemap (they resolve via 308, which hurts SEO).
 */
function getRedirectSourceMatchers(): RegExp[] {
  let config = "";
  try {
    config = fs.readFileSync(CONFIG_PATH, "utf8");
  } catch {
    return [];
  }

  // Only parse `source:` entries inside the redirects() function body.
  // headers() also uses `source:` (e.g. '/:path*') — those must NOT be
  // treated as redirects or they'd match everything and wipe the sitemap.
  const redirectsStart = config.indexOf("async redirects()");
  if (redirectsStart === -1) return [];
  const redirectsEnd = config.indexOf("async ", redirectsStart + 20);
  const block = config.slice(redirectsStart, redirectsEnd > redirectsStart ? redirectsEnd : undefined);

  const matchers: RegExp[] = [];
  const regex = /source:\s*["'`]([^"'`]+)["'`]/g;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(block)) !== null) {
    const source = match[1];
    if (!source.startsWith("/") || source.includes("sitemap")) continue;
    // Skip sources with Next.js param patterns (/:path*, :slug, etc.) —
    // those are header/rewrite sources, not redirect sources.
    if (source.includes(":")) continue;
    const pattern = source
      .replace(/[.+^${}()|[\]\\]/g, "\\$&")
      .replace(/:[^/]+\*/g, ".*")
      .replace(/:[^/]+/g, "[^/]+");
    matchers.push(new RegExp(`^${pattern}/?$`));
  }
  return matchers;
}

const isRedirectSource = (route: string, matchers: RegExp[]) =>
  matchers.some((matcher) => matcher.test(route));

/**
 * Recursively discover static App Router pages (page.tsx / page.ts),
 * skipping dynamic segments, api routes, route groups, and private folders.
 */
function discoverStaticPages(): string[] {
  const routes: string[] = [];

  const walk = (dir: string) => {
    let entries: fs.Dirent[];
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const name = entry.name;
        if (
          name.startsWith("[") ||
          name.startsWith("(") ||
          name.startsWith("_") ||
          name === "api" ||
          name === "node_modules"
        ) {
          continue;
        }
        walk(path.join(dir, name));
      } else if (entry.name === "page.tsx" || entry.name === "page.ts") {
        const rel = path.relative(APP_DIR, dir).replace(/\\/g, "/");
        routes.push(rel ? `/${rel}` : "/");
      }
    }
  };

  walk(APP_DIR);
  return routes;
}

const withTrailingSlash = (route: string) =>
  route === "/" ? "/" : route.endsWith("/") ? route : `${route}/`;

function toEntry(route: string, priority: number): MetadataRoute.Sitemap[number] {
  return {
    url: `${SITE_URL}${withTrailingSlash(route)}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "daily" : "weekly",
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const redirectMatchers = getRedirectSourceMatchers();

  // 1. Static pages (auto-discovered; includes /technology)
  const staticRoutes = discoverStaticPages()
    .filter((route) => !EXCLUDED_PATHS.has(route))
    .filter((route) => !isRedirectSource(route, redirectMatchers));

  const topLevel = staticRoutes.filter((r) => r.split("/").filter(Boolean).length === 1);
  const nested = staticRoutes.filter((r) => r.split("/").filter(Boolean).length > 1);

  const entries: MetadataRoute.Sitemap = [
    toEntry("/", 1.0),
    ...topLevel.map((route) => toEntry(route, 0.8)),
    ...nested.map((route) => toEntry(route, 0.7)),
  ];

  // 2. Dynamic content routes from canonical data sources
  const dynamicRoutes: Array<{ route: string; priority: number }> = [];

  for (const post of getAllBlogPosts()) {
    if (post?.slug) dynamicRoutes.push({ route: `/blogs/${post.slug}`, priority: 0.6 });
  }
  for (const video of getAllVideoPosts()) {
    if (video?.slug) dynamicRoutes.push({ route: `/videos/${video.slug}`, priority: 0.6 });
  }
  for (const docPath of getAllDocPaths()) {
    if (docPath) dynamicRoutes.push({ route: docPath, priority: 0.7 });
  }
  for (const guide of getAllGuides()) {
    if (guide?.slug) dynamicRoutes.push({ route: `/guides/${guide.slug}`, priority: 0.7 });
  }
  for (const article of getAllGuideArticles()) {
    if (article?.slug) dynamicRoutes.push({ route: `/guides/${article.slug}`, priority: 0.7 });
  }
  for (const tool of getAllTools()) {
    const route = tool?.href || (tool?.slug ? `/core/${tool.slug}` : null);
    if (route) dynamicRoutes.push({ route, priority: 0.7 });
  }
  for (const app of appsData) {
    if (app?.slug) dynamicRoutes.push({ route: `/apps/${app.slug}`, priority: 0.7 });
  }
  for (const mod of softwareData) {
    if (mod?.slug) dynamicRoutes.push({ route: `/software/${mod.slug}`, priority: 0.7 });
  }
  for (const paper of whitePapersData) {
    if (paper?.slug) dynamicRoutes.push({ route: `/white-papers/${paper.slug}`, priority: 0.7 });
  }
  for (const solution of roleSolutions) {
    if (solution?.slug) dynamicRoutes.push({ route: `/solutions/${solution.slug}`, priority: 0.7 });
  }

  // 3. Filter redirect sources + dedupe
  const seen = new Set<string>(entries.map((e) => e.url));
  for (const { route, priority } of dynamicRoutes) {
    const normalized = route.endsWith("/") ? route.slice(0, -1) : route;
    if (isRedirectSource(normalized, redirectMatchers)) continue;
    const url = `${SITE_URL}${withTrailingSlash(normalized)}`;
    if (seen.has(url)) continue;
    seen.add(url);
    entries.push(toEntry(normalized, priority));
  }

  return entries;
}
