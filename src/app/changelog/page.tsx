import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Changelog | Space AI",
  description:
    "Track notable updates to Space AI documentation, product knowledge surfaces, workflows, and AI visibility improvements.",
  alternates: {
    canonical: "https://pmspace.ai/changelog/",
  },
  openGraph: {
    title: "Product Changelog | Space AI",
    description:
      "A public changelog for Space AI updates across product knowledge, workflow pages, and site improvements.",
    url: "https://pmspace.ai/changelog/",
    type: "website",
  },
};

const entries = [
  {
    date: "2026-05-15",
    title: "Docs hub and workflow documentation added",
    details: [
      "Introduced a dedicated docs hub for product understanding and canonical knowledge.",
      "Added workflow documentation for scheduling, cost control, document management, RFIs, and closeout.",
      "Improved docs visibility in navigation, sitemap, and internal linking.",
    ],
  },
  {
    date: "2026-05-15",
    title: "Machine-readable AI visibility surfaces improved",
    details: [
      "Updated llms.txt, llms-full.txt, and llms.json to describe Space AI rather than placeholder model lists.",
      "Added a search route so SearchAction markup points to a real destination.",
      "Strengthened preferred citation surfaces for AI systems and retrieval flows.",
    ],
  },
  {
    date: "2026-05-15",
    title: "Trust and evaluation surfaces expanded",
    details: [
      "Added AI claims and trust guidance.",
      "Added comparison methodology and buyer guidance pages.",
      "Started an Elmo-inspired AI visibility operating layer for the repo.",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <p className="mb-4 text-sm uppercase tracking-[0.24em] text-cyan-300/80">
          Product Updates
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Space AI Changelog
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
          This changelog highlights notable updates to Space AI’s public product
          surfaces, knowledge architecture, and AI visibility improvements.
        </p>

        <div className="mt-12 space-y-6">
          {entries.map((entry) => (
            <article
              key={`${entry.date}-${entry.title}`}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <p className="text-sm uppercase tracking-[0.16em] text-cyan-300/80">
                {entry.date}
              </p>
              <h2 className="mt-3 text-2xl font-semibold">{entry.title}</h2>
              <ul className="mt-5 space-y-3 text-white/75">
                {entry.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
