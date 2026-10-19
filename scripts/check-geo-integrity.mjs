import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

const ROOT = process.cwd();
const SRC_DIRS = ["src/app", "src/components", "src/sections", "src/lib"];
const INTERNAL_LINK_SCAN_EXCLUDES = new Set(["src/app/sitemap.ts"]);
const SPECIAL_GENERATED_ROUTES = new Set(["/sitemap.xml", "/robots.txt"]);
const CONTENT_LIBS = ["src/lib/blogs.ts", "src/lib/resources.ts", "src/lib/apps.ts", "src/lib/software.ts", "src/lib/whitePapers.ts"];
const ASSET_EXTENSIONS = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".json", ".md", ".xml", ".txt"]);

const failures = [];

function addFailure(title, details) {
  failures.push({ title, details });
}

function walkFiles(dir, files = []) {
  const absDir = path.join(ROOT, dir);
  if (!fs.existsSync(absDir)) return files;

  for (const entry of fs.readdirSync(absDir, { withFileTypes: true })) {
    if (["node_modules", ".git", ".next"].includes(entry.name)) continue;
    const abs = path.join(absDir, entry.name);
    if (entry.isDirectory()) {
      walkFiles(path.relative(ROOT, abs), files);
    } else if (ASSET_EXTENSIONS.has(path.extname(entry.name))) {
      files.push(abs);
    }
  }

  return files;
}

function readFile(relativePath) {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf8");
}

function normalizePathname(value) {
  if (!value || value.startsWith("http") || value.startsWith("#") || value.startsWith("mailto:") || value.startsWith("tel:")) {
    return null;
  }

  const pathname = value.split(/[?#]/)[0].trim();
  if (!pathname.startsWith("/")) return null;
  return pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

function discoverStaticRoutes() {
  const appDir = path.join(ROOT, "src/app");
  const routes = new Set();
  const dynamicPatterns = [];

  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const hasPage = entries.some((entry) => /^page\.(t|j)sx?$/.test(entry.name));
    const rel = path.relative(appDir, dir).replace(/\\/g, "/");

    if (hasPage && !rel.includes("[") && rel !== "api") {
      const routeParts = rel.split("/").filter((part) => part && !part.startsWith("("));
      routes.add(routeParts.length ? `/${routeParts.join("/")}` : "/");
    } else if (hasPage && rel.includes("[") && rel !== "api") {
      const routeParts = rel.split("/").filter((part) => part && !part.startsWith("("));
      const pattern = routeParts
        .map((part) => {
          if (/^\[\.\.\..+\]$/.test(part)) return ".+";
          if (/^\[.+\]$/.test(part)) return "[^/]+";
          return part.replace(/[.+?^${}()|[\]\\]/g, "\\$&");
        })
        .join("/");
      dynamicPatterns.push(new RegExp(`^/${pattern}$`));
    }

    for (const entry of entries) {
      if (entry.isDirectory() && entry.name !== "api") {
        walk(path.join(dir, entry.name));
      }
    }
  }

  if (fs.existsSync(appDir)) walk(appDir);
  return { routes, dynamicPatterns };
}

function collectGeneratedContentRoutes() {
  const routes = new Set();
  const hrefPattern = /(?:^|[\s,{])["']?href["']?\s*:\s*["'](\/[^"']+)["']/gm;

  for (const lib of CONTENT_LIBS) {
    if (!fs.existsSync(path.join(ROOT, lib))) continue;
    const source = readFile(lib);
    for (const match of source.matchAll(hrefPattern)) {
      const pathname = normalizePathname(match[1]);
      if (pathname) routes.add(pathname);
    }
  }

  return routes;
}

function collectInternalStringPaths() {
  const paths = new Map();
  const literalPattern = /["'`]((?:\/(?!\/)[^"'`\s<>{}]+))["'`]/g;

  for (const dir of SRC_DIRS) {
    for (const file of walkFiles(dir)) {
      const relativeFile = path.relative(ROOT, file).replace(/\\/g, "/");
      if (INTERNAL_LINK_SCAN_EXCLUDES.has(relativeFile)) continue;
      const source = fs.readFileSync(file, "utf8");
      for (const match of source.matchAll(literalPattern)) {
        const pathname = normalizePathname(match[1]);
        if (!pathname) continue;
        if (!paths.has(pathname)) paths.set(pathname, []);
        paths.get(pathname).push(relativeFile);
      }
    }
  }

  return paths;
}

function redirectPatternMatches(source, pathname) {
  if (source === pathname) return true;
  if (!source.includes(":")) return false;

  const escaped = source
    .replace(/[.+?^${}()|[\]\\]/g, "\\$&")
    .replace(/\\:path\\\*/g, ".*")
    .replace(/\\:slug\\\*/g, ".*")
    .replace(/\\:[^/]+/g, "[^/]+");

  return new RegExp(`^${escaped}$`).test(pathname);
}

async function loadRedirects() {
  const configUrl = pathToFileURL(path.join(ROOT, "next.config.mjs")).href;
  const config = (await import(`${configUrl}?cacheBust=${Date.now()}`)).default;
  return typeof config.redirects === "function" ? await config.redirects() : [];
}

function extractAssetRefs() {
  const refs = new Map();
  const assetPattern = /(?:https?:\/\/pmspace\.ai)?(\/assets\/images\/[^"'`\s<>)\]}]+)/g;
  const files = [
    ...SRC_DIRS.flatMap((dir) => walkFiles(dir)),
    path.join(ROOT, "public/video-sitemap.xml"),
    path.join(ROOT, "public/image-sitemap.xml"),
  ].filter((file) => fs.existsSync(file));

  for (const file of files) {
    const source = fs.readFileSync(file, "utf8");
    for (const match of source.matchAll(assetPattern)) {
      const assetPath = match[1].replace(/[.,;]+$/, "").split(/[?#]/)[0];
      if (assetPath.includes("*") || assetPath.includes("${")) continue;
      if (!refs.has(assetPath)) refs.set(assetPath, []);
      refs.get(assetPath).push(path.relative(ROOT, file).replace(/\\/g, "/"));
    }
  }

  return refs;
}

function checkDuplicateKeys() {
  const duplicateMessages = [];

  for (const lib of CONTENT_LIBS) {
    if (!fs.existsSync(path.join(ROOT, lib))) continue;
    const source = readFile(lib);
    const keys = {
      id: [...source.matchAll(/(?:^|[\s,{])["']?id["']?\s*:\s*(\d+)/gm)].map((m) => m[1]),
      slug: [...source.matchAll(/(?:^|[\s,{])["']?slug["']?\s*:\s*["']([^"']+)["']/gm)].map((m) => m[1]),
    };

    for (const [key, values] of Object.entries(keys)) {
      const seen = new Set();
      const duplicates = [...new Set(values.filter((value) => (seen.has(value) ? true : (seen.add(value), false))))];
      for (const value of duplicates) {
        duplicateMessages.push(`${lib}: duplicate ${key} "${value}"`);
      }
    }
  }

  if (duplicateMessages.length) {
    addFailure("Duplicate content library keys", duplicateMessages);
  }
}

const redirects = await loadRedirects();
const redirectSources = redirects.map((redirect) => redirect.source);
const { routes: staticRoutes, dynamicPatterns } = discoverStaticRoutes();
const generatedContentRoutes = collectGeneratedContentRoutes();
const internalPaths = collectInternalStringPaths();

for (const redirect of redirects) {
  const destination = normalizePathname(redirect.destination);
  if (!destination || destination.includes(":")) continue;

  const destinationExists =
    SPECIAL_GENERATED_ROUTES.has(destination) ||
    staticRoutes.has(destination) ||
    generatedContentRoutes.has(destination) ||
    dynamicPatterns.some((pattern) => pattern.test(destination));
  if (!destinationExists) {
    addFailure("Redirect destination does not resolve to a known route", [
      `${redirect.source} -> ${redirect.destination}`,
    ]);
  }
}

const redirectLinkedPaths = [];
for (const [pathname, files] of internalPaths.entries()) {
  if (redirectSources.some((source) => redirectPatternMatches(source, pathname))) {
    redirectLinkedPaths.push(`${pathname} referenced by ${[...new Set(files)].slice(0, 4).join(", ")}`);
  }
}
if (redirectLinkedPaths.length) {
  addFailure("Internal paths should link directly to canonical destinations, not redirect sources", redirectLinkedPaths);
}

const missingAssets = [];
for (const [assetPath, files] of extractAssetRefs().entries()) {
  if (!fs.existsSync(path.join(ROOT, "public", assetPath))) {
    missingAssets.push(`${assetPath} referenced by ${[...new Set(files)].slice(0, 4).join(", ")}`);
  }
}
if (missingAssets.length) {
  addFailure("Referenced image assets are missing from public/", missingAssets);
}

checkDuplicateKeys();

if (failures.length) {
  console.error("GEO integrity check failed:");
  for (const failure of failures) {
    console.error(`\n${failure.title}`);
    for (const detail of failure.details.slice(0, 50)) {
      console.error(`- ${detail}`);
    }
    if (failure.details.length > 50) {
      console.error(`- ...and ${failure.details.length - 50} more`);
    }
  }
  process.exit(1);
}

console.log("GEO integrity check passed.");
