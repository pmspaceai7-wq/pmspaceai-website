// components/BlogsPage.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, BookOpen, CalendarDays, Linkedin, Sparkles } from "lucide-react";
import { BlogPost } from "@/lib/blogs";
import { pmspaceAuthors } from "@/components/AuthorSchema";

const BlogsPage = ({ blogPosts }: { blogPosts: BlogPost[] }) => {
  const isLinkedInPost = (post: BlogPost) =>
    Boolean(post.linkedinPostUrl || post.linkedinOrigin);
  const sortedPosts = [...blogPosts].sort((a, b) =>
    (b.datePublished || "").localeCompare(a.datePublished || "")
  );
  const formatDate = (date?: string) =>
    date
      ? new Intl.DateTimeFormat("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }).format(new Date(`${date}T00:00:00`))
      : "Editorial";

  return (
    <section id="blogs" className="relative min-h-screen overflow-hidden border-t border-white/10 bg-transparent py-10 text-white sm:py-12">
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-8 max-w-5xl border-b border-white/10 px-5 pb-7 text-center sm:mb-10 sm:px-8"
        >
          <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-orange-300/25 bg-orange-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-orange-200">
            <Sparkles className="h-4 w-4" />
            Construction AI Insights
          </div>
          <h1 className="mx-auto max-w-3xl pb-2 text-4xl font-bold leading-[1.18] text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-purple-300 sm:text-5xl md:text-6xl">
            Space AI Blog
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            Practical construction intelligence, project controls, and AI workflow guidance.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm">
            <span className="rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-blue-100">
              {sortedPosts.length} articles
            </span>
            <span className="rounded-full border border-purple-300/20 bg-purple-400/10 px-4 py-2 text-purple-100">
              AI project controls
            </span>
            <span className="rounded-full border border-orange-300/20 bg-orange-400/10 px-4 py-2 text-orange-100">
              Field-ready guidance
            </span>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sortedPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: Math.min(index * 0.025, 0.16) }}
              className="h-full"
            >
              <Link
                href={post.href}
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(145deg,rgba(17,24,39,0.92),rgba(8,12,20,0.94))] shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/35 hover:shadow-blue-950/30"
              >
                  <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-white/10 bg-[#10151a]">
                    {post.imageSrc ? (
                      <Image
                        src={post.imageSrc}
                        alt={`${post.title} visual representation`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-white/[0.03]">
                        <BookOpen className="h-8 w-8 text-white/25" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-80" />
                  </div>

                  <div className="flex flex-grow flex-col p-5">
                    <div className="mb-4 flex items-center justify-between gap-3 text-xs text-white/60">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-medium text-white/75">
                        {isLinkedInPost(post) ? (
                          <Linkedin className="h-3.5 w-3.5 text-[#69a9eb]" />
                        ) : (
                          <BookOpen className="h-3.5 w-3.5 text-cyan-300" />
                        )}
                        {isLinkedInPost(post) ? "LinkedIn Post" : "Guide"}
                      </span>
                      <time className="inline-flex items-center gap-1.5 text-white/55" dateTime={post.datePublished}>
                        <CalendarDays className="h-3.5 w-3.5" />
                        {formatDate(post.datePublished)}
                      </time>
                    </div>
                    <h2 className="mb-3 text-xl font-semibold leading-snug text-white transition-colors group-hover:text-blue-100">
                      {post.title}
                    </h2>
                    <p className="mb-5 line-clamp-3 flex-grow text-sm leading-6 text-white/65">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between border-t border-white/10 pt-4">
                      {(() => {
                        const author =
                          pmspaceAuthors[post.author || "pmspace-team"] ||
                          pmspaceAuthors["pmspace-team"];
                        return (
                          <div className="flex min-w-0 items-center gap-2.5">
                            {author.image && (
                              <div className="relative h-8 w-8 flex-shrink-0 overflow-hidden rounded-full bg-white/10">
                                <Image
                                  src={author.image}
                                  alt={author.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            )}
                            <span className="truncate text-sm text-white/70">{author.name}</span>
                          </div>
                        );
                      })()}
                      <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition-colors group-hover:border-blue-300/30 group-hover:bg-blue-400/10">
                        <ArrowUpRight className="h-4 w-4 text-white/45 transition-colors group-hover:text-blue-200" />
                      </span>
                    </div>
                  </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsPage;
