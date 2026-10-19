# GEO & SEO Integration Report

Generated: 2026-05-22

## Summary
Cloned and reviewed three public repositories that could help improve pmspace.ai's GEO and SEO performance. This report summarizes findings and gives prioritized, actionable recommendations for integrating these tools and practices into pmspace.ai.

## Repositories inspected

1. geo-seo-claude — https://github.com/zubair-trabzada/geo-seo-claude
   - Purpose: A Claude Code skill focused on GEO-first SEO for AI-powered search (ChatGPT, Claude, Perplexity, Google AI Overviews).
   - Key features: GEO audits, citability scoring, AI crawler checks, llms.txt generation, brand mention scanning, schema generation, PDF/markdown reporting.
   - Notable artifacts: `scripts/` (fetch_page.py, citability_scorer.py, llmstxt_generator.py, generate_pdf_report.py), `schema/` templates (JSON-LD), `skills/` orchestration.
   - Strength: Comprehensive, production-ready orchestration for GEO audits and client reports; includes scoring methodology and report generation.

2. SEO_Agent — https://github.com/carlosazilado/SEO_Agent
   - Findings: Repository content appears to be a game/ESP utility (Battlefield) and not relevant to GEO/SEO for websites. Not recommended for integration.

3. geo-ai-agent — https://github.com/pauloeduardo1991/geo-ai-agent
   - Purpose: AI-driven content auditing and H1/SEO suggestions aimed at GEO recommendations and content improvements.
   - Key features: URL crawling, H1 analysis, GEO suggestions, packaged agent with UI and scripts.
   - Strength: Lightweight content optimization agent — useful for scaling content-level audits and H1/metadata correction.

## High-level recommendations (prioritized)

1. Quick wins (1-2 days)
   - Generate and publish `llms.txt` for pmspace.ai using `geo-seo-claude`'s `llmstxt_generator.py` or skill; ensure AI crawlers are allowed in `robots.txt` where appropriate.
   - Add or review core JSON-LD schemas: Organization, LocalBusiness, Website SearchAction, and SoftwareApplication (use `geo-seo-claude/schema/` templates as a starting point).
   - Run an initial `/geo quick` style audit (or `geo-ai-agent` crawl) to identify H1 issues and low-hanging content fixes; prioritize pages with commercial/geo intent.

2. Technical stabilization (1-2 weeks)
   - Run `geo-seo-claude` full audit for the top 100 landing pages; export the client-ready markdown report and convert to PDF for stakeholders.
   - Verify `robots.txt` and AI crawler access; update `llms.txt` and header metadata for pages requiring AI visibility.
   - Implement structured data on key templates (landing pages, services, locations) and validate with Rich Results Test / schema validators.

3. Content & authority (2-6 weeks)
   - Use `geo-ai-agent` or `geo-seo-claude` content module to score citability and rewrite top pages to match AI-citable block length (134–167 words), include fact-rich passages and clear entity signals.
   - Run brand mention scanning (from `geo-seo-claude`) across YouTube, LinkedIn, Reddit, and patched sources; produce outreach plan to increase authoritative citations on those platforms.

4. Monitoring & operations (ongoing)
   - Schedule weekly automated GEO audits and store monthly deltas (the `geo-seo-claude` repo design includes a `reports` folder concept; adopt similarly).
   - Create dashboards for GEO score, AI-citation frequency, and top pages losing/gaining AI citations.

## Detailed integration notes

- geo-seo-claude
  - Installation: uses a Python virtualenv under `~/.claude/skills/geo/.venv/`. On Windows, run `install-win.sh` in Git Bash.
  - Useful scripts:
    - `scripts/fetch_page.py` — reliable page fetch with rendering support.
    - `scripts/citability_scorer.py` — core of AI-citation scoring; adapt thresholds for pmspace.ai content.
    - `scripts/llmstxt_generator.py` — produce a compliant `llms.txt` file and suggestions for crawler policies.
    - `geo-report/` — templates to generate client reports.
  - Recommendation: Configure a staging run for pmspace.ai, produce a full audit, and extract actionable items into JIRA/tickets.

- geo-ai-agent
  - Good for lightweight content audits and H1 checks. Can be run locally to crawl a set of URLs and output H1/H2 mismatch reports.
  - Recommendation: Use as a quick pre-filter before running the comprehensive `geo-seo-claude` audits to reduce scope and focus on high-impact pages.

- SEO_Agent
  - Not relevant to website GEO/SEO — likely a gaming ESP project. Skip.

## Actionable implementation checklist (commands)

1. Create working folder and Python venv (example, Git Bash / WSL on Windows):

```bash
# Clone already done under external-repos
cd c:/Users/vivom/codes/spaceai/external-repos/geo-seo-claude
./install-win.sh   # (or install.sh on Linux/macOS)
```

2. Run a quick GEO snapshot:

```bash
# using the skill's CLI (example)
# note: exact command depends on CLAUDE CODE CLI availability; geo-seo-claude README shows commands like:
# /geo quick <url>
python3 scripts/fetch_page.py https://pmspace.ai
python3 scripts/llmstxt_generator.py --domain pmspace.ai --output ./llms.txt
```

3. Generate a full markdown report (example):

```bash
python3 scripts/citability_scorer.py --urls urls.txt --output report.md
python3 scripts/generate_pdf_report.py report.md report.pdf
```

4. Lightweight content/H1 scan with `geo-ai-agent`:

```bash
cd ../geo-ai-agent
# locate the agent or script in src/ai_content_optimization_agent
python3 src/ai_content_optimization_agent/run_audit.py --domain pmspace.ai --output h1-report.md
```

_NOTE: Adjust command names to match actual script names after inspecting each repo folder._

## Risk & hygiene notes

- Some tools assume Claude Code runtime (a paid/closed runtime) or special CLI; evaluate licensing, rate limits, and API keys before running at scale.
- Always run on a staging environment or throttle crawls to avoid impacting site performance.
- Validate any auto-generated schema or content before publishing — automation can introduce inaccurate structured data.

## Prioritized next steps (recommended order)

1. Run `llms.txt` generation and publish to site root — high-impact, low-effort.
2. Run `geo-ai-agent` H1/H2 audit for top 200 pages; fix critical H1/title/tag mismatches.
3. Run `geo-seo-claude` full audit for top 100 pages; produce PDF report and a prioritized action backlog.
4. Implement core JSON-LD schemas and re-run schema validation.
5. Set up weekly automated GEO audits and alerting for sudden drops in AI citations.

## Deliverables produced
- This markdown report: `reports/geo-seo-integration-report.md`
- Local clones under `external-repos/`:
  - `geo-seo-claude`
  - `SEO_Agent` (irrelevant)
  - `geo-ai-agent`

## Closing notes
These repos provide strong starting points for AI/GEO-first optimization. The `geo-seo-claude` project is the most immediately useful for enterprise-grade audits and reports; `geo-ai-agent` complements it at the content level. I can now:

- Run the recommended quick commands against pmspace.ai and produce the initial audit report.
- Extract the exact commands and parameters after confirming Python/Claude CLI availability on your machine.

Which task should I run next: `llms.txt` generation, H1 audit, or full GEO audit?