import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const SCAN_DIRS = ["src/app", "src/components", "src/sections", "src/lib"];
const SCAN_EXTENSIONS = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".json", ".md", ".xml", ".txt"]);
const assetPattern = /(?:https?:\/\/pmspace\.ai)?(\/assets\/images\/[^"'`\s<>)\]}]+)/g;

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const current = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(current, files);
    } else if (SCAN_EXTENSIONS.has(path.extname(entry.name))) {
      files.push(current);
    }
  }

  return files;
}

const refs = new Set();
const files = [
  ...SCAN_DIRS.flatMap((dir) => walk(path.join(ROOT, dir))),
  path.join(ROOT, "public/video-sitemap.xml"),
  path.join(ROOT, "public/image-sitemap.xml"),
].filter((file) => fs.existsSync(file));

for (const file of files) {
  const source = fs.readFileSync(file, "utf8");
  for (const match of source.matchAll(assetPattern)) {
    const assetPath = match[1].replace(/[.,;]+$/, "").split(/[?#]/)[0];
    if (assetPath.includes("*") || assetPath.includes("${")) continue;
    refs.add(assetPath);
  }
}

const fallbackSources = {
  png: path.join(ROOT, "public/assets/images/apps.png"),
  jpg: path.join(ROOT, "public/assets/images/og-image.jpeg"),
  jpeg: path.join(ROOT, "public/assets/images/og-image.jpeg"),
  svg: path.join(ROOT, "public/assets/images/print.svg"),
};

const created = [];

for (const assetPath of [...refs].sort()) {
  const target = path.join(ROOT, "public", assetPath);
  if (fs.existsSync(target)) continue;

  const ext = path.extname(assetPath).slice(1).toLowerCase();
  let source = fallbackSources[ext] || fallbackSources.png;
  if (assetPath.includes("logo") && ext === "png") {
    source = path.join(ROOT, "public/assets/images/icononly_transparent_nobuffer.png");
  }

  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(source, target);
  created.push(assetPath);
}

if (created.length) {
  console.log(created.join("\n"));
}
console.error(`created=${created.length}`);
