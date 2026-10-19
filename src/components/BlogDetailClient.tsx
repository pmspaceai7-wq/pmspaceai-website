// components/BlogDetailClient.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  Copy,
  Facebook,
  Linkedin,
  Mail,
  MessageCircle,
  Quote,
  Share2,
  X,
} from "lucide-react";
import { ReactNode, useMemo, useState } from "react";
import remarkGfm from "remark-gfm";
import { BlogPost } from "@/lib/blogs";
import { ArticleWithAuthorSchema, pmspaceAuthors } from "@/components/AuthorSchema";
import { KeyTakeaways } from "@/components/KeyTakeaways";

const ReactMarkdown = dynamic(
  () => import("react-markdown"),
  { ssr: false }
);

const textFromChildren = (children: ReactNode): string => {
  if (typeof children === "string" || typeof children === "number") {
    return String(children);
  }
  if (Array.isArray(children)) {
    return children.map(textFromChildren).join("");
  }
  return "";
};

const slugifyHeading = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const formatDisplayDate = (date?: string) =>
  date
    ? new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(new Date(`${date}T00:00:00`))
    : "Editorial";

export default function BlogDetailClient({
  post,
  prevPost,
  nextPost,
}: {
  post: BlogPost;
  prevPost?: BlogPost;
  nextPost?: BlogPost;
}) {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const hasValidImage = (imageSrc: string | null | undefined): boolean =>
    !!(imageSrc && imageSrc.trim() !== "");

  const normalizedContent = post.content
    .replace(/\[H1\]\s*/g, "\n# ")
    .replace(/\[H2\]\s*/g, "\n## ")
    .replace(/\[H3\]\s*/g, "\n### ");

  const articleContent = normalizedContent.trimStart().replace(/^#\s+.*(?:\r?\n)+/, "").trim();
  const author = (post.author ? pmspaceAuthors[post.author] : null) ?? pmspaceAuthors["pmspace-team"];
  const isGraphDbArticle = post.slug === "how-knowledge-graph-powers-construction-ai";
  const isFreeTierDemoArticle = post.slug === "space-ai-free-tier-youtube-demo";
  const isSiteProgressArticle = post.slug === "site-progress-reporting-ai-bim-automation";
  const postUrl = `https://pmspace.ai/blogs/${post.slug}/`;
  const shareText = `${post.title} | Space AI`;
  const readTime = Math.max(3, Math.ceil(post.content.trim().split(/\s+/).length / 220));

  const shareLinks = useMemo(
    () => [
      {
        name: "LinkedIn",
        href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`,
        icon: Linkedin,
        color: "text-[#69a9eb]",
      },
      {
        name: "Facebook",
        href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`,
        icon: Facebook,
        color: "text-[#8ab4ff]",
      },
      {
        name: "WhatsApp",
        href: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${postUrl}`)}`,
        icon: MessageCircle,
        color: "text-[#25D366]",
      },
      {
        name: "Email",
        href: `mailto:?subject=${encodeURIComponent(shareText)}&body=${encodeURIComponent(`${post.description}\n\n${postUrl}`)}`,
        icon: Mail,
        color: "text-purple-300",
      },
    ],
    [post.description, postUrl, shareText]
  );

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(postUrl);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const markdownComponents = {
    p: ({ children }: { children?: ReactNode }) => (
      <p className="mt-6 text-base leading-8 text-white/80 first:mt-0 sm:text-lg">
        {children}
      </p>
    ),
    h2: ({ children }: { children?: ReactNode }) => {
      const text = textFromChildren(children);
      const id = slugifyHeading(text);
      return (
        <h2 id={id} className="mt-16 scroll-mt-24 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {children}
        </h2>
      );
    },
    h3: ({ children }: { children?: ReactNode }) => {
      const text = textFromChildren(children);
      const id = slugifyHeading(text);
      return (
        <h3 id={id} className="mt-12 scroll-mt-24 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {children}
        </h3>
      );
    },
    a: ({ href, children }: { href?: string; children?: ReactNode }) => (
      <a
        href={href}
        className="font-medium text-purple-300 underline decoration-purple-500/40 transition-colors hover:text-purple-100"
      >
        {children}
      </a>
    ),
    ul: ({ children }: { children?: ReactNode }) => (
      <ul className="mt-6 grid gap-3 pl-0 text-base leading-8 text-white/80 sm:text-lg [&>li]:relative [&>li]:rounded-lg [&>li]:border [&>li]:border-purple-300/15 [&>li]:bg-white/[0.035] [&>li]:py-3 [&>li]:pl-11 [&>li]:pr-4 [&>li]:shadow-lg [&>li]:shadow-purple-950/10 [&>li]:transition-colors [&>li]:before:absolute [&>li]:before:left-4 [&>li]:before:top-[1.05rem] [&>li]:before:h-2.5 [&>li]:before:w-2.5 [&>li]:before:rounded-full [&>li]:before:bg-purple-300 [&>li]:before:shadow-[0_0_18px_rgba(216,180,254,0.55)] [&>li]:hover:border-purple-300/30 [&>li]:hover:bg-white/[0.055]">
        {children}
      </ul>
    ),
    ol: ({ children }: { children?: ReactNode }) => (
      <ol className="mt-6 space-y-3 pl-6 text-base leading-8 text-white/80 list-decimal marker:text-purple-300 sm:text-lg">
        {children}
      </ol>
    ),
    li: ({ children }: { children?: ReactNode }) => (
      <li className="text-base leading-8 text-white/80 sm:text-lg">{children}</li>
    ),
    strong: ({ children }: { children?: ReactNode }) => (
      <strong className="font-semibold text-white">{children}</strong>
    ),
    blockquote: ({ children }: { children?: ReactNode }) => (
      <blockquote className="relative mt-10 overflow-hidden rounded-lg border border-purple-300/20 bg-[linear-gradient(135deg,rgba(88,28,135,0.22),rgba(15,23,42,0.88))] px-6 py-6 pl-16 text-white/82 shadow-xl shadow-purple-950/20 sm:px-8 sm:py-7 sm:pl-20">
        <Quote className="absolute left-5 top-6 h-7 w-7 text-purple-200/70 sm:left-7" />
        <div className="[&_p]:m-0 [&_p]:text-base [&_p]:leading-8 [&_p]:text-white/82 [&_p]:sm:text-lg">
          {children}
        </div>
      </blockquote>
    ),
    table: ({ children }: { children?: ReactNode }) => (
      <div className="not-prose my-10 overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] shadow-xl shadow-purple-950/10">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-left text-sm text-white/75">
            {children}
          </table>
        </div>
      </div>
    ),
    thead: ({ children }: { children?: ReactNode }) => (
      <thead className="bg-purple-400/15 text-xs uppercase tracking-[0.14em] text-purple-100">
        {children}
      </thead>
    ),
    tbody: ({ children }: { children?: ReactNode }) => (
      <tbody className="divide-y divide-white/10">{children}</tbody>
    ),
    tr: ({ children }: { children?: ReactNode }) => (
      <tr className="transition-colors hover:bg-white/[0.04]">{children}</tr>
    ),
    th: ({ children }: { children?: ReactNode }) => (
      <th className="whitespace-nowrap px-4 py-3 font-semibold">{children}</th>
    ),
    td: ({ children }: { children?: ReactNode }) => (
      <td className="min-w-[160px] px-4 py-4 align-top leading-6 text-white/72">
        {children}
      </td>
    ),
  };

  const graphDbKnowledgeGraph = isGraphDbArticle
    ? {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": "https://pmspace.ai/#organization",
            name: "PMSPACE AI",
            url: "https://pmspace.ai",
            logo: {
              "@type": "ImageObject",
              url: "https://pmspace.ai/assets/images/pmspace-logo.png",
            },
          },
          {
            "@type": "WebSite",
            "@id": "https://pmspace.ai/#website",
            url: "https://pmspace.ai",
            name: "PMSPACE AI",
            publisher: {
              "@id": "https://pmspace.ai/#organization",
            },
          },
          {
            "@type": "TechArticle",
            "@id": `https://pmspace.ai/blogs/${post.slug}#article`,
            headline: post.title,
            description: post.description,
            datePublished: post.datePublished,
            dateModified: post.dateModified || post.datePublished,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": postUrl,
            },
            isPartOf: {
              "@id": "https://pmspace.ai/#website",
            },
            author: {
              "@type": "Person",
              name: author.name,
            },
            publisher: {
              "@id": "https://pmspace.ai/#organization",
            },
            about: [
              { "@type": "Thing", name: "Graph Database Technology" },
              { "@type": "Thing", name: "Knowledge Graph" },
              { "@type": "Thing", name: "Construction Intelligence" },
              { "@type": "Thing", name: "Project Risk Analysis" },
            ],
            mentions: [
              { "@type": "Thing", name: "Dependency Graph" },
              { "@type": "Thing", name: "Impact Analysis" },
              { "@type": "Thing", name: "Root Cause Analysis" },
            ],
          },
        ],
      }
    : null;

  return (
    <main className="min-h-screen bg-[#080512] px-4 py-8 text-white sm:px-6 sm:py-12">
      {post.datePublished && (
        <ArticleWithAuthorSchema
          title={post.title}
          description={post.description}
          author={author}
          datePublished={post.datePublished}
          dateModified={post.dateModified}
          image={post.imageSrc || undefined}
          url={postUrl}
          sourceUrl={post.linkedinPostUrl}
        />
      )}
      {graphDbKnowledgeGraph && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graphDbKnowledgeGraph) }}
        />
      )}

      <div className="mx-auto max-w-6xl overflow-hidden rounded-lg border border-white/10 bg-[#05030d] shadow-2xl shadow-purple-950/30">
        <div className="relative bg-[radial-gradient(circle_at_70%_8%,rgba(124,58,237,0.28),transparent_30%),linear-gradient(135deg,rgba(15,7,35,0.98),rgba(5,3,13,0.98))]">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px] opacity-20" />

          <div className="relative z-10 px-5 py-7 sm:px-8 lg:px-14 lg:py-10">
            <article className="min-w-0">
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className={`mx-auto max-w-4xl text-center font-semibold leading-tight text-white ${
                  isSiteProgressArticle ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl"
                }`}
              >
                {isSiteProgressArticle ? (
                  <>
                    AI Site Progress Reporting:
                    <br />
                    From Manual Updates to 4D BIM Automation
                  </>
                ) : (
                  post.title
                )}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="mx-auto mt-4 max-w-3xl text-center text-sm leading-7 text-white/62 sm:text-base"
              >
                {post.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.14 }}
                className="mx-auto mt-5 flex max-w-4xl flex-col items-center justify-center gap-4 border-y border-white/10 py-3 sm:flex-row sm:flex-wrap"
              >
                <div className="flex min-w-0 flex-wrap items-center justify-center gap-4 text-sm text-white/70">
                  <div className="flex min-w-0 items-center gap-3">
                    {author.image && (
                      <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full bg-white/10">
                        <Image src={author.image} alt={author.name} fill className="object-cover" />
                      </div>
                    )}
                    <span className="font-medium text-white/85">{author.name}</span>
                  </div>
                  <span className="hidden h-5 w-px bg-white/15 sm:block" />
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-purple-300" />
                    {formatDisplayDate(post.datePublished)}
                  </span>
                  <span className="text-white/45">{readTime} min read</span>
                </div>

                <button
                  type="button"
                  onClick={() => setIsShareOpen(true)}
                  className="inline-flex w-fit items-center gap-2 rounded-md border border-purple-400/30 bg-purple-500/15 px-4 py-2 text-xs font-semibold text-purple-100 transition-colors hover:border-purple-300/60 hover:bg-purple-500/25"
                >
                  <Share2 className="h-4 w-4" />
                  Share article
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.16 }}
                className="mx-auto mt-6 w-full md:w-[84%]"
              >
                <div
                  className="relative w-full overflow-hidden rounded-lg border border-white/10 bg-black/30 shadow-2xl shadow-purple-950/20"
                  style={{
                    aspectRatio: post.imageAspectRatio || "16 / 9",
                  }}
                >
                  {hasValidImage(post.imageSrc) ? (
                    <Image
                      src={post.imageSrc!}
                      alt={post.title}
                      fill
                      sizes="(min-width: 1280px) 1024px, 100vw"
                      className="object-contain"
                    />
                  ) : (
                    <div className="flex h-full min-h-[240px] items-center justify-center bg-purple-500/10 text-white/45">
                      No image available
                    </div>
                  )}
                </div>
              </motion.div>

              <div className="mx-auto mt-10 w-full border-t border-white/10 pt-10 md:w-[80%]">
                <section className="prose prose-invert max-w-none text-base leading-8 text-white/70 prose-headings:scroll-mt-24 prose-headings:text-white prose-h2:mt-10 prose-h2:text-2xl prose-h3:text-xl prose-a:text-purple-300 prose-a:no-underline hover:prose-a:text-purple-100 prose-strong:text-white prose-blockquote:border-purple-400/30 prose-blockquote:text-white/70 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5">
                  {post.keyTakeaways && post.keyTakeaways.length > 0 && (
                    <div className="not-prose mb-8">
                      <KeyTakeaways takeaways={post.keyTakeaways} title="Key Takeaways" />
                    </div>
                  )}

                  <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                    {articleContent}
                  </ReactMarkdown>
                </section>

                {isFreeTierDemoArticle && (
                  <div className="not-prose mt-10 rounded-lg border border-purple-300/20 bg-purple-500/10 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-200">
                        Free Tier demo
                      </p>
                      <h2 className="mt-3 text-2xl font-semibold text-white">
                        Watch the walkthrough, then try Space AI free.
                      </h2>
                      <p className="mt-3 text-sm leading-6 text-purple-100/75">
                        See forms, files, and project data in the YouTube demo, or start directly from the free tier page.
                      </p>
                      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                        <a
                          href="https://www.youtube.com/watch?v=ZV14hsbxR1Q"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-lg border border-purple-300/40 bg-white/10 px-5 py-3 text-sm font-semibold text-purple-100 transition-colors hover:bg-purple-400/20"
                        >
                          Watch demo video
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </a>
                        <Link
                          href="/try-it-now/"
                          className="inline-flex items-center justify-center gap-2 rounded-lg bg-purple-400 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(168,85,247,0.28)] transition-colors hover:bg-purple-300"
                        >
                          Try it now free
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </article>
          </div>
        </div>

        <div className="grid gap-4 border-t border-white/10 bg-[#060411] px-5 py-6 sm:px-8 md:grid-cols-2 lg:px-14">
          {prevPost ? (
            <Link
              href={`/blogs/${prevPost.slug}`}
              className="group rounded-lg border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-purple-300/30 hover:bg-purple-500/10"
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                <ArrowLeft className="h-4 w-4" />
                Previous
              </span>
              <p className="mt-3 text-sm font-medium leading-6 text-white/72 group-hover:text-white">
                {prevPost.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {nextPost ? (
            <Link
              href={`/blogs/${nextPost.slug}`}
              className="group rounded-lg border border-white/10 bg-white/[0.03] p-4 text-right transition-colors hover:border-purple-300/30 hover:bg-purple-500/10"
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                Next
                <ArrowRight className="h-4 w-4" />
              </span>
              <p className="mt-3 text-sm font-medium leading-6 text-white/72 group-hover:text-white">
                {nextPost.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>

      {isShareOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <button
            type="button"
            aria-label="Close share modal"
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={() => setIsShareOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="share-modal-title"
            className="relative w-full max-w-md rounded-lg border border-slate-200 bg-white p-5 text-slate-950 shadow-2xl shadow-purple-950/30"
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <h2 id="share-modal-title" className="text-lg font-semibold text-slate-950">
                  Share this article
                </h2>
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Share the current blog post link.
                </p>
              </div>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setIsShareOpen(false)}
                className="rounded-md border border-slate-200 p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-950"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {shareLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-purple-300 hover:bg-purple-50 hover:text-slate-950"
                >
                  <item.icon className={`h-4 w-4 ${item.color}`} />
                  {item.name}
                </a>
              ))}
            </div>

            <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-3">
              <p className="break-all text-xs leading-5 text-slate-500">{postUrl}</p>
              <button
                type="button"
                onClick={handleCopyLink}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-purple-500"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? "Copied" : "Copy link"}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </main>
  );
}
