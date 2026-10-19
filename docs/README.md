# Space AI Website

This repository contains the Next.js website for Space AI at https://pmspace.ai.

## Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- Static content libraries in `src/lib`
- Public assets in `public/`

## Local Development
```bash
npm install
npm run dev
```

The development server runs at http://localhost:3000 by default.

## Quality Checks
```bash
npm run lint
npm run build
```

Run lint before shipping content or route changes. Run a production build after changes to metadata, static params, redirects, or sitemap generation.

## Important Files
- `src/app/layout.tsx`: global metadata, schema, header/footer shell, and optional Copilot integration.
- `src/app/sitemap.ts`: generated sitemap entries.
- `next.config.mjs`: redirect rules.
- `public/robots.txt`: crawler policy.
- `llms.txt`, `llms-full.txt`, `llms.json`: AI retrieval and GEO guidance.
- `src/lib/*.ts`: content catalogs used by dynamic pages.

## Environment
Optional:
```bash
NEXT_PUBLIC_COPILOTKIT_PUBLIC_API_KEY=
```

When this key is not set, the site renders without the Copilot wrapper rather than falling back to a public hardcoded key.

## Content Integrity Notes
Use canonical `https://pmspace.ai` URLs in metadata, schema, sitemaps, and content catalogs. Avoid linking to redirect-source paths from internal catalogs. Image and video paths should be public site paths such as `/assets/images/example.png` or `/videos/example.gif`, not filesystem-style paths like `/public/...`.
