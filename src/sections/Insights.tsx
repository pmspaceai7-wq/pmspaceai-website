"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, BookOpen, CalendarDays, Linkedin } from "lucide-react";

export type HomepageBlogPost = {
  slug: string;
  title: string;
  description: string;
  imageSrc: string | null;
  href: string;
  datePublished?: string;
  linkedinPostUrl?: string;
  linkedinOrigin?: boolean;
};

type InsightsProps = {
  posts: HomepageBlogPost[];
};

const formatDate = (date?: string) =>
  date
    ? new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }).format(new Date(`${date}T00:00:00`))
    : "Editorial";

export const Insights = ({ posts }: InsightsProps) => {
  return (
    <section id="insights" className="relative overflow-hidden bg-gradient-to-b from-black via-[#07040f] to-black py-10 md:py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(140,69,255,0.18),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(251,146,60,0.08),transparent_34%)]" />
      <div className="absolute left-1/2 top-8 h-32 w-[560px] -translate-x-1/2 rounded-full bg-[#8c45ff]/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-purple-300">
              <BookOpen className="h-4 w-4" />
              Latest Insights
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Latest from the{" "}
              <span className="inline-block pb-1 bg-gradient-to-r from-purple-200 via-violet-300 to-orange-200 bg-clip-text text-transparent">
                Space AI Blog
              </span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Practical construction intelligence, project controls, and AI workflow guidance.
            </p>
          </div>

          <Link
            href="/blogs/"
            className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/15 bg-gradient-to-b from-[#190d2e] to-[#4a208a] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/25"
          >
            View more
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => {
            const isLinkedInPost = Boolean(post.linkedinPostUrl || post.linkedinOrigin);

            return (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="h-full"
              >
                <Link
                  href={post.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.055] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#8c45ff]/45 hover:bg-[#190d2e]/35"
                >
                  <div className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-[#8c45ff]/70 to-transparent" />
                  <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-white/10 bg-white/[0.04]">
                    {post.imageSrc ? (
                      <Image
                        src={post.imageSrc}
                        alt={`${post.title} visual representation`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover object-top opacity-90 transition-transform duration-500 group-hover:scale-[1.025] group-hover:opacity-100"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-white/[0.03]">
                        <BookOpen className="h-8 w-8 text-purple-200/35" />
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-4 flex items-center justify-between gap-3 text-xs text-white/55">
                      <span className="inline-flex items-center gap-1.5 font-medium text-white/70">
                        {isLinkedInPost ? (
                          <Linkedin className="h-3.5 w-3.5 text-[#69a9eb]" />
                        ) : (
                          <BookOpen className="h-3.5 w-3.5 text-purple-300" />
                        )}
                        {isLinkedInPost ? "LinkedIn Post" : "Guide"}
                      </span>
                      <time className="inline-flex items-center gap-1.5" dateTime={post.datePublished}>
                        <CalendarDays className="h-3.5 w-3.5" />
                        {formatDate(post.datePublished)}
                      </time>
                    </div>

                    <h3 className="mb-3 text-lg font-semibold leading-snug text-white">
                      {post.title}
                    </h3>
                    <p className="mb-5 line-clamp-3 flex-1 text-sm leading-6 text-white/60">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between border-t border-white/10 pt-4 text-sm font-medium text-white/70 transition-colors group-hover:text-white">
                      Read article
                      <ArrowUpRight className="h-4 w-4 text-white/40 transition-colors group-hover:text-purple-200" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
