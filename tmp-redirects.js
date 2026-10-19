import cfg from "./next.config.mjs";
const redirects = await cfg.redirects();
const sources = redirects.map(r=>r.source);
const chain = redirects.filter(r=> sources.includes(r.destination));
console.log('Total redirects', redirects.length);
console.log('Chains', chain.length);
for(const r of chain){console.log(`${r.source} -> ${r.destination}`);}
