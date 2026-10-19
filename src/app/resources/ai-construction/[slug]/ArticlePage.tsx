"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight } from "lucide-react";

const ReactMarkdown = dynamic(
  () => import("react-markdown"),
  { ssr: false }
);

interface ArticlePageProps {
  title: string;
  content: string;
  readTime: string;
  category: string;
  publishDate: string;
}

export default function ArticlePage({
  title,
  content,
  readTime,
  category,
  publishDate,
}: ArticlePageProps) {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Back Link */}
          <div className="hidden">
            <Link
              href="/resources/ai-construction/"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to AI in Construction
            </Link>
          </div>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm">
              <Tag className="w-3 h-3" />
              {category}
            </span>
            <span className="inline-flex items-center gap-1 text-white/50 text-sm">
              <Clock className="w-4 h-4" />
              {readTime}
            </span>
            <span className="inline-flex items-center gap-1 text-white/50 text-sm">
              <Calendar className="w-4 h-4" />
              {new Date(publishDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-8">
            {title}
          </h1>
        </motion.div>
      </section>

      {/* Article Content */}
      <section className="container mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <article className="prose prose-invert prose-base max-w-none">
            <ReactMarkdown
              components={{
                h2: ({ children }) => (
                  <h2 className="text-xl md:text-2xl font-bold text-white mt-10 mb-4 first:mt-0">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-lg md:text-xl font-semibold text-white mt-6 mb-3">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-base text-white/80 leading-relaxed mb-4">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside space-y-2 text-base text-white/80 mb-4 pl-4">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside space-y-2 text-white/80 mb-6 pl-4">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="text-white/80">{children}</li>
                ),
                strong: ({ children }) => (
                  <strong className="text-white font-semibold">
                    {children}
                  </strong>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-purple-500 pl-4 my-6 italic text-white/70">
                    {children}
                  </blockquote>
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </article>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Experience AI in Construction?
            </h2>
            <p className="text-white/70 mb-6 max-w-xl mx-auto">
              See how Space AI brings these AI capabilities to life in your
              construction projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/construction-software-demo/">
                <button className="bg-white text-black font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                  Book a Demo
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/resources/ai-construction/">
                <button className="border border-white/40 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
                  Read More Articles
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
