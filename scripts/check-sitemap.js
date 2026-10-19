const fs = require('fs');
const xml = fs.readFileSync('sitemap_live.xml','utf8');
const locs = [...xml.matchAll(/<loc>([\s\S]*?)<\/loc>/g)].map(m=>m[1]);
const sitemapSource = fs.readFileSync('src/app/sitemap.ts','utf8');
const redirectBlock = sitemapSource.match(/const REDIRECT_SOURCES = new Set<string>\(\[([\s\S]*?)\]\);/);

if (!redirectBlock) {
  throw new Error('Could not find REDIRECT_SOURCES in src/app/sitemap.ts');
}

const actualRedirSources = new Set(
  [...redirectBlock[1].matchAll(/"([^"]+)"/g)].map((match) => match[1])
);
const domain = 'https://pmspace.ai';
const exact = locs.filter(u => {
  const path = u.replace(domain,'').replace(/\/$/,'');
  return actualRedirSources.has(path);
});
console.log('Exact redirect-source matches in sitemap:', exact.length);
if (exact.length) exact.forEach(u => console.log('  PROBLEM:', u));
console.log('Total URLs:', locs.length);
