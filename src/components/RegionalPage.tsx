"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, ShieldCheck, Sparkles, Building2, Globe2 } from "lucide-react";
import type { RegionContent } from "@/lib/regionalPages";

export function RegionalPage({ region }: { region: RegionContent }) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-teal-500/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-white/80">
              <Sparkles className="w-4 h-4 text-teal-300" />
              {region.hero.eyebrow}
            </div>
            <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              {region.hero.title}
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-3xl mx-auto">
              {region.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href={region.hero.primaryCta.href}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black font-semibold shadow-lg shadow-purple-500/20"
              >
                {region.hero.primaryCta.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={region.hero.secondaryCta.href}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 text-white font-semibold hover:border-teal-400/60"
              >
                {region.hero.secondaryCta.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {region.hero.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                  <div className="text-2xl font-semibold text-teal-200">{stat.value}</div>
                  <div className="text-white/70 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-14 border-t border-white/5 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-6">
            <ShieldCheck className="w-5 h-5 text-teal-300" />
            <h2 className="text-2xl font-semibold">Built for this region</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {region.differentiators.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-black/40 p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-1 text-teal-300" />
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-white/70 leading-relaxed">{item.description}</p>
                    {item.stat ? (
                      <p className="mt-3 text-sm text-teal-200 font-semibold">{item.stat}</p>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance + finance */}
      <section className="py-14">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {region.compliance.map((block) => (
            <div key={block.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="w-5 h-5 text-purple-300" />
                <h3 className="text-xl font-semibold">{block.title}</h3>
              </div>
              <ul className="space-y-2 text-white/80">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-teal-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Case study */}
      <section className="py-14 border-t border-white/5 bg-white/5">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-100 text-sm font-semibold">
              <Building2 className="w-4 h-4" /> Case study
            </div>
            <h3 className="mt-4 text-2xl font-semibold">{region.caseStudy.title}</h3>
            <p className="text-white/70 text-sm mt-1">{region.caseStudy.location}</p>
            <p className="mt-4 text-white/80 leading-relaxed">{region.caseStudy.summary}</p>
            <ul className="mt-4 space-y-2 text-white/80">
              {region.caseStudy.metrics.map((m) => (
                <li key={m} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-purple-300" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-white/80 italic border-l-2 border-teal-400 pl-3">
              “{region.caseStudy.quote}”
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/60 p-6">
            <h4 className="text-lg font-semibold flex items-center gap-2">
              <MapPin className="w-5 h-5 text-teal-300" /> Cities & corridors
            </h4>
            <p className="text-white/60 text-sm mt-2">Where teams are using Space AI in this region.</p>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
              {region.cities.map((city) => (
                <span key={city} className="text-sm text-white/80 rounded-full border border-white/10 px-3 py-2 bg-white/5">
                  {city}
                </span>
              ))}
            </div>
            <div className="mt-6 border-t border-white/5 pt-4">
              <h5 className="text-md font-semibold flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-purple-300" /> {region.partnerships.title}
              </h5>
              <p className="text-white/70 text-sm mt-1">{region.partnerships.description}</p>
              <ul className="mt-3 space-y-2 text-white/80">
                {region.partnerships.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-teal-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Keyword block */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <h4 className="text-lg font-semibold mb-4">Regional keywords we cover</h4>
          <div className="flex flex-wrap gap-2">
            {region.keywordsBlock.map((kw) => (
              <span key={kw} className="px-3 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/80">
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related links for crawl depth and buyer journey */}
      <section className="pb-14">
        <div className="container mx-auto px-4">
          <h4 className="text-lg font-semibold mb-4">Explore Next</h4>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/pricing/" className="text-white/80 hover:text-white underline">Pricing</Link>
            <Link href="/contact-specialists/" className="text-white/80 hover:text-white underline">Contact Specialists</Link>
            <Link href="/resources/2026-construction-ai-trends/" className="text-white/80 hover:text-white underline">2026 Construction AI Trends</Link>
            <Link href="/resources/video-library/" className="text-white/80 hover:text-white underline">Video Library</Link>
            <Link href="/construction-newsletter/" className="text-white/80 hover:text-white underline">Construction Newsletter</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
