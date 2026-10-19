"use client";
import { motion } from "framer-motion";
import { MessageSquareQuote, TrendingUp } from "lucide-react";
import { switcherTestimonials, SwitcherTestimonial } from "@/lib/page-quotes";

interface SwitcherTestimonialsProps {
  competitor: string;
}

// Shared section for vs/alternative pages (Task 27): customer quotes from teams
// that switched to Space AI from a specific competitor.
export default function SwitcherTestimonials({ competitor }: SwitcherTestimonialsProps) {
  const key = competitor.toLowerCase().includes("procore")
    ? "procore"
    : competitor.toLowerCase().includes("buildertrend")
      ? "buildertrend"
      : competitor.toLowerCase().includes("monday")
        ? "monday"
        : "";
  const items: SwitcherTestimonial[] = key ? switcherTestimonials[key] ?? [] : [];
  if (items.length === 0) return null;

  return (
    <section className="container mx-auto px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
          Teams That Switched from {competitor}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((q, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 rounded-2xl p-6 flex flex-col"
            >
              <MessageSquareQuote className="w-6 h-6 text-purple-400 mb-4" />
              <p className="text-sm leading-relaxed text-white/85 italic flex-grow">
                &ldquo;{q.quote}&rdquo;
              </p>
              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="text-sm font-semibold text-white">{q.name}</p>
                <p className="text-xs text-white/60">
                  {q.title}, {q.company}
                </p>
                <div className="flex items-start gap-2 mt-3 bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                  <TrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-green-300">{q.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
