import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/lib/blogs";
import { docsPages } from "@/lib/docs";
import { getAllGuides } from "@/lib/guides";
import { allResources } from "@/lib/resources";

type SearchPageProps = {
  searchParams?: {
    q?: string;
  };
};

type SearchResult = {
  title: string;
  href: string;
  description: string;
  type: "Blog" | "Guide" | "Resource" | "Docs";
};

const MAX_RESULTS = 24;

function normalize(value: string) {
  return value.toLowerCase().trim();
}

function score(text: string, query: string) {
  const normalizedText = normalize(text);

  if (normalizedText === query) return 100;
  if (normalizedText.startsWith(query)) return 60;
  if (normalizedText.includes(query)) return 30;

  return 0;
}

function searchContent(query: string): SearchResult[] {
  if (!query) return [];

  const blogResults = blogPosts.map((post) => ({
    title: post.title,
    href: post.href,
    description: post.description,
    type: "Blog" as const,
    score:
      score(post.title, query) * 3 +
      score(post.description, query) * 2 +
      score(post.content, query),
  }));

  const guideResults = getAllGuides().map((guide) => ({
    title: guide.title,
    href: guide.href,
    description: guide.description,
    type: "Guide" as const,
    score:
      score(guide.title, query) * 3 +
      score(guide.description, query) * 2,
  }));

  const resourceResults = allResources.map((resource) => ({
    title: resource.title,
    href: resource.href,
    description: resource.description,
    type: "Resource" as const,
    score:
      score(resource.title, query) * 3 +
      score(resource.description, query) * 2 +
      score(resource.content, query),
  }));

  const docsResults = docsPages.map((page) => ({
    title: page.title,
    href: page.path,
    description: page.description,
    type: "Docs" as const,
    score:
      score(page.title, query) * 3 +
      score(page.description, query) * 2 +
      score(page.intro, query),
  }));

  return [...blogResults, ...guideResults, ...resourceResults, ...docsResults]
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, MAX_RESULTS)
    .map(({ score: _score, ...item }) => item);
}

export const metadata: Metadata = {
  title: "Search Space AI",
  description:
    "Search Space AI content across product pages, guides, resources, and blog articles.",
  alternates: {
    canonical: "https://pmspace.ai/search/",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = normalize(searchParams?.q || "");
  const results = searchContent(query);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/50">
            Site Search
          </p>
          <h1 className="text-4xl font-semibold tracking-tight">
            Search Space AI
          </h1>
          <p className="mt-4 max-w-3xl text-white/70">
            Search across Space AI guides, resources, and construction
            management articles.
          </p>
        </div>

        <form action="/search/" method="get" className="mb-8">
          <label htmlFor="q" className="mb-2 block text-sm text-white/70">
            Search query
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              id="q"
              name="q"
              type="search"
              defaultValue={searchParams?.q || ""}
              placeholder="Search construction AI, scheduling, cost control, guides..."
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-white/30"
            />
            <button
              type="submit"
              className="rounded-lg bg-white px-5 py-3 font-medium text-black transition hover:bg-white/90"
            >
              Search
            </button>
          </div>
        </form>

        {query ? (
          <div className="mb-6 text-sm text-white/60">
            {results.length} result{results.length === 1 ? "" : "s"} for{" "}
            <span className="text-white">&quot;{searchParams?.q}&quot;</span>
          </div>
        ) : (
          <div>
            <div className="mb-6 text-sm text-white/60">
              Enter a query above, or browse popular topics:
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "AI Construction Scheduling", href: "/usecases/ai-construction-scheduling/" },
                { label: "Document Management", href: "/construction-document-management-software/" },
                { label: "Cost Control", href: "/features/" },
                { label: "RFI Management", href: "/construction-rfi-management-software/" },
                { label: "Project Scheduling", href: "/project-scheduling-software/" },
                { label: "Enterprise Solutions", href: "/enterprise/" },
                { label: "Pricing", href: "/pricing/" },
                { label: "Procore Alternative", href: "/alternatives/procore-alternative/" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:border-white/30 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-4">
          {results.map((result) => (
            <article
              key={`${result.type}-${result.href}`}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-2 text-xs uppercase tracking-[0.18em] text-white/40">
                {result.type}
              </div>
              <h2 className="text-xl font-semibold">
                <Link href={result.href} className="hover:text-white/80">
                  {result.title}
                </Link>
              </h2>
              <p className="mt-3 text-white/70">{result.description}</p>
              <Link
                href={result.href}
                className="mt-4 inline-block text-sm text-cyan-300 hover:text-cyan-200"
              >
                Open page
              </Link>
            </article>
          ))}
        </div>

        {query && results.length === 0 ? (
          <div>
            <div className="mb-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-white/70">
              No results matched your search. Try broader terms or browse these popular pages:
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Features & Capabilities", href: "/features/", desc: "Explore all Space AI features" },
                { title: "Construction Document Management", href: "/construction-document-management-software/", desc: "AI-powered document control" },
                { title: "Project Scheduling", href: "/project-scheduling-software/", desc: "Gantt charts & critical path" },
                { title: "Pricing Plans", href: "/pricing/", desc: "Free, Professional & Enterprise" },
                { title: "Construction AI Guide", href: "/guides/ai-construction-management-complete-guide/", desc: "Complete guide to AI in construction" },
                { title: "All Resources", href: "/resources/", desc: "White papers, webinars & more" },
              ].map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-white/30"
                >
                  <h3 className="font-medium text-white">{page.title}</h3>
                  <p className="mt-1 text-sm text-white/60">{page.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </main>
  );
}
