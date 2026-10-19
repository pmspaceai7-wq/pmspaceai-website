"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Sparkles, Star } from "lucide-react";

const testimonials = [
  {
    name: 'Robert "Bobby" Diaz',
    role: "Project Manager",
    company: "Diaz & Sons Contracting",
    profile: "14 employees",
    quote:
      "We were managing three commercial build-outs with Excel and buried emails. In two days on the Space AI free trial, our RFIs were centralized and the chaos finally stopped.",
    accent: "from-purple-600 to-indigo-700",
  },
  {
    name: "Sarah Jenkins",
    role: "Site Superintendent",
    company: "Apex Build Group",
    profile: "22 employees",
    quote:
      "I typed one sentence for a concrete safety checklist, and Space AI built a mobile-ready form in seconds. My field crew actually uses it from the job site.",
    accent: "from-blue-600 to-cyan-600",
  },
  {
    name: "Marcus Vance",
    role: "Owner & Principal",
    company: "Vance Structural Engineering & Construction",
    profile: "Small GC team",
    quote:
      "Procore was too expensive for our team. Space AI gave us a risk-free way to test real document management, contracts, and submittals from my phone.",
    accent: "from-amber-500 to-orange-600",
  },
];

const getInitials = (name: string) =>
  name
    .replace(/"/g, "")
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

const Rating = () => (
  <div className="flex gap-1 text-amber-300" aria-label="5 star review">
    {[...Array(5)].map((_, index) => (
      <Star key={index} className="h-4 w-4 fill-current" />
    ))}
  </div>
);

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  useEffect(() => {
    const timer = window.setInterval(showNext, 3000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="relative overflow-hidden py-16 sm:py-20 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(140,69,255,0.22),transparent_58%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(249,115,22,0.12),transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.05),transparent_35%,rgba(140,69,255,0.05))]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
            className="mx-auto mb-10 max-w-3xl text-center md:mb-12"
        >
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Construction Industry Customer Reviews
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base font-light leading-relaxed text-white/70">
            Small construction teams replacing spreadsheets, email threads, and enterprise tools with Space AI.
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/35 backdrop-blur-sm">
            <div className={`h-1.5 bg-gradient-to-r ${activeTestimonial.accent}`} />
            <div className="absolute right-8 top-10 hidden rounded-full border border-white/10 bg-white/[0.035] p-8 text-white/[0.04] lg:block">
              <Quote className="h-32 w-32" />
            </div>

            <div className="min-h-[380px] sm:min-h-[400px] lg:min-h-[380px]">
              <div className="relative flex min-h-full flex-col justify-between p-6 sm:p-8 lg:p-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial.name}
                    initial={{ opacity: 0, x: 36 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -36 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="relative flex min-h-0 flex-1 flex-col"
                  >
                    <div className="mb-5 flex flex-wrap items-center justify-between gap-4 sm:mb-7">
                      <Quote className="h-8 w-8 text-white/25" />
                      <Rating />
                    </div>

                    <blockquote className="max-w-3xl text-lg font-light leading-7 text-white/85 sm:text-xl sm:leading-8 md:text-2xl md:leading-10 md:line-clamp-4">
                      &ldquo;{activeTestimonial.quote}&rdquo;
                    </blockquote>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-6 flex flex-col gap-5 border-t border-white/10 pt-5 sm:mt-10 sm:pt-6 md:flex-row md:items-center md:justify-between">
                  <div className="flex min-w-0 items-center gap-3">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${activeTestimonial.accent} text-sm font-bold text-white`}
                    >
                      {getInitials(activeTestimonial.name)}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold leading-snug text-white">{activeTestimonial.name}</p>
                      <p className="text-sm leading-snug text-white/55">
                        {activeTestimonial.role}, {activeTestimonial.company}
                      </p>
                      <p className="mt-0.5 text-xs leading-snug text-white/35">{activeTestimonial.profile}</p>
                    </div>
                  </div>

                  <div className="flex w-full items-center justify-between gap-3 md:w-auto md:justify-end">
                    <button
                      type="button"
                      onClick={showPrevious}
                      aria-label="Show previous testimonial"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={showNext}
                      aria-label="Show next testimonial"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 border-t border-white/10 bg-white/[0.025] px-6 py-4">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show testimonial from ${testimonial.name}`}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeIndex ? "w-8 bg-white" : "w-2.5 bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
