import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";
import VeritasGraphAttribution from "@/components/VeritasGraphAttribution";
import type { DocPage } from "@/lib/docs";

export default function DocDetailPage({ page }: { page: DocPage }) {
  return (
    <main className="min-h-screen bg-black text-white">
      <FAQSchema faqs={page.faqs} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: page.title,
            description: page.description,
            url: `https://pmspace.ai${page.path}`,
            datePublished: "2026-01-01",
            dateModified: "2026-08-14",
            author: {
              "@type": "Organization",
              name: "Space AI",
              url: "https://pmspace.ai",
            },
            publisher: {
              "@type": "Organization",
              name: "Space AI",
              url: "https://pmspace.ai",
            },
          }),
        }}
      />

      <div className="container mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="mb-8">
          <Link href="/docs/" className="text-sm text-cyan-300 hover:text-cyan-200">
            Docs Home
          </Link>
        </div>

        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-[0.22em] text-cyan-300/80">
            {page.eyebrow}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {page.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/70">{page.intro}</p>
        </div>

        <div className="space-y-10">
          {page.sections.map((section) => (
            <section
              key={section.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
              <p className="mt-4 leading-7 text-white/70">{section.body}</p>
              {section.bullets && section.bullets.length > 0 ? (
                <ul className="mt-5 space-y-3 text-white/75">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <section className="mt-14 rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 p-8">
          <h2 className="text-2xl font-semibold text-white">Related pages</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {page.related.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-2xl border border-white/10 bg-black/20 p-5 transition-all hover:border-cyan-400/30 hover:bg-black/30"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  {item.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-300">
                  Open page
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <VeritasGraphAttribution className="mt-14" />
      </div>
    </main>
  );
}
