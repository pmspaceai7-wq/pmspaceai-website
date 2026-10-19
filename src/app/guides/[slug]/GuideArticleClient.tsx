"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle, Clock, Tag } from "lucide-react";
import type { GuideArticle } from "@/lib/guideArticles";

interface Props {
  article: GuideArticle;
}

export default function GuideArticleClient({ article }: Props) {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <header className="relative overflow-hidden border-b border-white/10 px-4 pb-16 pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.12),transparent_55%)]" />
        <div className="container relative z-10 mx-auto max-w-4xl">
          <Link
            href="/guides/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            All Guides
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-sm text-purple-300">
                <Tag className="h-3.5 w-3.5" />
                {article.category}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70">
                <Clock className="h-3.5 w-3.5" />
                {article.readTime}
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
              {article.title}
            </h1>
            <p className="max-w-3xl text-xl leading-relaxed text-white/70">
              {article.intro}
            </p>
          </motion.div>
        </div>
      </header>

      <main className="container mx-auto max-w-3xl space-y-16 px-4 py-16">
        {article.sections.map((section, index) => (
          <section key={`${article.slug}-${index}`}>
            <h2 className="mb-6 text-3xl font-bold">{section.heading}</h2>
            {section.paragraphs.map((paragraph, paragraphIndex) => (
              <p
                key={`${article.slug}-${index}-${paragraphIndex}`}
                className="mb-4 text-lg leading-relaxed text-white/80"
              >
                {paragraph}
              </p>
            ))}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="mt-4 space-y-2">
                {section.bullets.map((bullet, bulletIndex) => (
                  <li
                    key={`${article.slug}-${index}-bullet-${bulletIndex}`}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                    <span className="text-white/80">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <section className="rounded-xl border border-white/10 bg-gray-900 p-8">
          <h3 className="mb-4 text-2xl font-bold">Key Takeaways</h3>
          <ul className="space-y-2">
            {article.takeaways.map((takeaway, index) => (
              <li
                key={`${article.slug}-takeaway-${index}`}
                className="flex items-start gap-2"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                <span className="text-white/80">{takeaway}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-8 text-center sm:p-12">
          <div className="relative z-10">
            <h2 className="mb-4 text-3xl font-bold">See Space AI in Action</h2>
            <p className="mx-auto mb-8 max-w-xl text-white/60">
              Explore how these ideas translate into faster project decisions,
              stronger control, and more predictable delivery.
            </p>
            <Link
              href="/construction-software-demo/"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:bg-white/90"
            >
              Book a Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}


