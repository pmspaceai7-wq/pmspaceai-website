// src/components/KeyTakeaways.tsx
// Task 48: Key Takeaways Component for Blog Posts

import { Lightbulb, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

interface KeyTakeawaysProps {
  takeaways: string[];
  title?: string;
  variant?: "default" | "numbered" | "compact";
}

export function KeyTakeaways({ 
  takeaways, 
  title = "Key Takeaways",
  variant = "default"
}: KeyTakeawaysProps) {
  if (variant === "compact") {
    return (
      <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 p-4 my-6 rounded-r-lg">
        <h3 className="font-bold text-amber-400 mb-2 flex items-center gap-2">
          <Lightbulb className="w-4 h-4" />
          {title}
        </h3>
        <ul className="space-y-1">
          {takeaways.map((takeaway, index) => (
            <li key={index} className="text-white/80 text-sm flex items-start gap-2">
              <ArrowRight className="w-3 h-3 text-amber-400 mt-1 flex-shrink-0" />
              {takeaway}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (variant === "numbered") {
    return (
      <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-purple-400" />
          {title}
        </h3>
        <ol className="space-y-3">
          {takeaways.map((takeaway, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-full bg-purple-500/20 text-purple-400 text-sm font-bold flex items-center justify-center flex-shrink-0">
                {index + 1}
              </span>
              <span className="text-white/80 pt-0.5">{takeaway}</span>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  // Default variant
  return (
    <div className="relative my-8 overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(88,28,135,0.26),rgba(15,23,42,0.9)_48%,rgba(20,83,45,0.2))] p-5 shadow-2xl shadow-purple-950/20 sm:p-6">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-300/60 to-transparent" />
      <div className="absolute -right-16 -top-20 h-40 w-40 rounded-full bg-purple-400/10 blur-3xl" />

      <div className="relative mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-purple-300/25 bg-purple-300/15">
            <Sparkles className="h-5 w-5 text-purple-100" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-200/80">
              Summary
            </p>
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
        </div>
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-100">
          <CheckCircle className="h-3.5 w-3.5" />
          {takeaways.length} points
        </span>
      </div>

      <ul className="relative grid gap-3 md:grid-cols-2">
        {takeaways.map((takeaway, index) => (
          <li
            key={index}
            className="group flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.045] p-4 transition-colors hover:border-purple-300/25 hover:bg-white/[0.07]"
          >
            <span className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md border border-purple-300/20 bg-purple-300/10 text-sm font-bold text-purple-100">
              {index + 1}
            </span>
            <span className="pt-0.5 text-sm leading-6 text-white/78 transition-colors group-hover:text-white sm:text-base">
              {takeaway}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Summary box for top of articles
export function ArticleSummary({ 
  summary,
  readTime 
}: { 
  summary: string;
  readTime?: string;
}) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 my-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
          Quick Summary
        </span>
        {readTime && (
          <span className="text-sm text-white/50">{readTime} read</span>
        )}
      </div>
      <p className="text-white/80 leading-relaxed">{summary}</p>
    </div>
  );
}

// TL;DR Box
export function TLDR({ points }: { points: string[] }) {
  return (
    <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6 my-8">
      <h3 className="text-lg font-bold text-blue-400 mb-3">TL;DR</h3>
      <ul className="space-y-2">
        {points.map((point, index) => (
          <li key={index} className="text-white/80 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default KeyTakeaways;
