"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, Share2, Printer } from "lucide-react";

interface PressReleaseLayoutProps {
  title: string;
  date: string;
  category: string;
  children: React.ReactNode;
}

export default function PressReleaseLayout({
  title,
  date,
  category,
  children,
}: PressReleaseLayoutProps) {
  const handleShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title,
          url: window.location.href,
        });
      } catch {
        // User cancelled or share failed
      }
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <article className="container mx-auto py-16 px-4 max-w-3xl">
        {/* Back link */}
        <Link
          href="/press/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-blue-400 transition-colors mb-8 print:hidden"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Press Room
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30">
              {category}
            </span>
            <span className="flex items-center gap-1.5 text-white/50 text-sm">
              <Calendar className="w-4 h-4" />
              {date}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
            {title}
          </h1>
        </header>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-white/80 prose-strong:text-white prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-li:text-white/80">
          {children}
        </div>

        {/* About Space AI boilerplate */}
        <section className="mt-12 pt-8 border-t border-white/10" aria-label="About Space AI">
          <h2 className="text-lg font-semibold text-white mb-3">About Space AI</h2>
          <p className="text-white/70 text-sm leading-relaxed">
            Space AI is an AI-powered construction management platform that helps contractors, owners, and project teams plan, execute, and deliver complex builds with greater speed, accuracy, and control. By combining predictive analytics, intelligent scheduling, automated documentation, and real-time collaboration, Space AI turns construction data into actionable intelligence. The platform serves projects across commercial, infrastructure, healthcare, education, and industrial sectors worldwide.
          </p>
        </section>

        {/* Action bar */}
        <div className="mt-10 flex flex-wrap items-center gap-4 print:hidden">
          <Link
            href="/press/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            All Press Releases
          </Link>
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg transition-colors text-sm font-medium"
          >
            <Share2 className="w-4 h-4" />
            Share
          </button>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg transition-colors text-sm font-medium"
          >
            <Printer className="w-4 h-4" />
            Print
          </button>
        </div>
      </article>
    </main>
  );
}
