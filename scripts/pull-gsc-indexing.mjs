#!/usr/bin/env node
import crypto from "crypto";
import fs from "fs/promises";
import os from "os";
import path from "path";

const DEFAULT_SITE = "sc-domain:pmspace.ai";
const DEFAULT_OUTPUT = "gsc-url-inspection-export.csv";
const TOKEN_URL = "https://oauth2.googleapis.com/token";
const INSPECTION_URL = "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect";
const SCOPE = "https://www.googleapis.com/auth/webmasters.readonly";

function usage() {
  console.log(`
Pull URL-level Google Search Console indexing data with the URL Inspection API.

Usage:
  node scripts/pull-gsc-indexing.mjs --urls urls.txt --credentials service_account.json
  node scripts/pull-gsc-indexing.mjs --sitemap https://pmspace.ai/sitemap.xml --credentials service_account.json

Options:
  --urls <file>              Text or CSV file containing URLs. CSV must have a url column or any full https URL in a row.
  --sitemap <url-or-file>    Sitemap XML URL or local sitemap XML file to read <loc> URLs from.
  --site <property>          GSC property, default: ${DEFAULT_SITE}
  --credentials <file>       Service account JSON path. Falls back to GOOGLE_APPLICATION_CREDENTIALS, GIS_PATH, or ~/.gis/service_account.json.
  --output <file>            Output CSV path, default: ${DEFAULT_OUTPUT}
  --limit <n>                Inspect only first n URLs.
  --delay-ms <n>             Delay between inspection calls, default: 1200.
  --help                     Show this help.

Notes:
  Google does not expose the exact Page indexing report table as a bulk API.
  This script pulls URL-level inspection data and groups it by coverageState.
`);
}

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 1) {
    const key = argv[i];
    if (key === "--help" || key === "-h") {
      args.help = true;
      continue;
    }
    if (!key.startsWith("--")) continue;
    args[key.slice(2)] = argv[i + 1];
    i += 1;
  }
  return args;
}

function base64Url(input) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function csvEscape(value) {
  const text = value == null ? "" : String(value);
  return /[",\r\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function readCredentials(file) {
  const fallback = path.join(os.homedir(), ".gis", "service_account.json");
  const credentialPath =
    file ||
    process.env.GOOGLE_APPLICATION_CREDENTIALS ||
    process.env.GIS_PATH ||
    fallback;

  const raw = await fs.readFile(credentialPath, "utf8");
  const credentials = JSON.parse(raw);
  if (!credentials.client_email || !credentials.private_key) {
    throw new Error(`Credential file is missing client_email/private_key: ${credentialPath}`);
  }
  return credentials;
}

async function getAccessToken(credentials) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const claim = {
    iss: credentials.client_email,
    scope: SCOPE,
    aud: TOKEN_URL,
    exp: now + 3600,
    iat: now,
  };

  const unsigned = `${base64Url(JSON.stringify(header))}.${base64Url(JSON.stringify(claim))}`;
  const signature = crypto
    .createSign("RSA-SHA256")
    .update(unsigned)
    .sign(credentials.private_key);
  const assertion = `${unsigned}.${base64Url(signature)}`;

  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
  });

  if (!response.ok) {
    throw new Error(`Token request failed: ${response.status} ${await response.text()}`);
  }

  const body = await response.json();
  return body.access_token;
}

async function readTextFromUrlOrFile(input) {
  if (/^https?:\/\//i.test(input)) {
    const response = await fetch(input);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${input}: ${response.status} ${await response.text()}`);
    }
    return response.text();
  }
  return fs.readFile(input, "utf8");
}

async function urlsFromSitemap(input) {
  const xml = await readTextFromUrlOrFile(input);
  const urls = [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/gi)].map((match) =>
    match[1].trim()
  );
  return [...new Set(urls)].filter((url) => /^https?:\/\//i.test(url));
}

async function urlsFromFile(input) {
  const raw = await fs.readFile(input, "utf8");
  const lines = raw.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const urls = [];

  for (const line of lines) {
    const direct = line.match(/https?:\/\/[^,\s"]+/i);
    if (direct) {
      urls.push(direct[0]);
      continue;
    }
    const columns = line.split(",").map((value) => value.trim().replace(/^"|"$/g, ""));
    const urlColumn = columns.find((value) => /^https?:\/\//i.test(value));
    if (urlColumn) urls.push(urlColumn);
  }

  return [...new Set(urls)];
}

async function inspectUrl(accessToken, siteUrl, inspectionUrl) {
  const response = await fetch(INSPECTION_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      siteUrl,
      inspectionUrl,
    }),
  });

  if (!response.ok) {
    return {
      inspectionUrl,
      apiError: `${response.status} ${await response.text()}`,
    };
  }

  const body = await response.json();
  const result = body.inspectionResult?.indexStatusResult || {};
  return {
    inspectionUrl,
    verdict: result.verdict,
    coverageState: result.coverageState,
    robotsTxtState: result.robotsTxtState,
    indexingState: result.indexingState,
    pageFetchState: result.pageFetchState,
    lastCrawlTime: result.lastCrawlTime,
    googleCanonical: result.googleCanonical,
    userCanonical: result.userCanonical,
    referringUrls: (result.referringUrls || []).join(" | "),
    sitemap: (result.sitemap || []).join(" | "),
    apiError: "",
  };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help || (!args.urls && !args.sitemap)) {
    usage();
    process.exit(args.help ? 0 : 1);
  }

  const siteUrl = args.site || DEFAULT_SITE;
  const output = args.output || DEFAULT_OUTPUT;
  const delayMs = Number(args["delay-ms"] || 1200);
  const limit = args.limit ? Number(args.limit) : undefined;

  const credentials = await readCredentials(args.credentials);
  const accessToken = await getAccessToken(credentials);

  let urls = args.sitemap ? await urlsFromSitemap(args.sitemap) : await urlsFromFile(args.urls);
  if (limit) urls = urls.slice(0, limit);

  if (urls.length === 0) {
    throw new Error("No URLs found to inspect.");
  }

  console.log(`Inspecting ${urls.length} URLs for ${siteUrl}`);
  const rows = [];
  for (let i = 0; i < urls.length; i += 1) {
    const url = urls[i];
    console.log(`[${i + 1}/${urls.length}] ${url}`);
    rows.push(await inspectUrl(accessToken, siteUrl, url));
    if (i < urls.length - 1 && delayMs > 0) await sleep(delayMs);
  }

  const headers = [
    "inspectionUrl",
    "verdict",
    "coverageState",
    "robotsTxtState",
    "indexingState",
    "pageFetchState",
    "lastCrawlTime",
    "googleCanonical",
    "userCanonical",
    "referringUrls",
    "sitemap",
    "apiError",
  ];

  const csv = [
    headers.join(","),
    ...rows.map((row) => headers.map((header) => csvEscape(row[header])).join(",")),
  ].join("\n");
  await fs.writeFile(output, csv, "utf8");

  const summary = rows.reduce((acc, row) => {
    const key = row.apiError ? "API error" : row.coverageState || "Unknown";
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  console.log(`\nWrote ${output}`);
  console.log("Summary:");
  for (const [key, count] of Object.entries(summary).sort((a, b) => b[1] - a[1])) {
    console.log(`- ${key}: ${count}`);
  }
}

main().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
