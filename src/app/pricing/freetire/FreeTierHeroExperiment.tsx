"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, FlaskConical } from "lucide-react";

const EXPERIMENT_NAME = "free_tier_value_hook_v1";
const STORAGE_KEY = "spaceai-free-tier-headline-variant";

const headlineVariants = [
  {
    id: "A",
    headline: "Bring your construction workflow into one free workspace.",
    description:
      "Upload files, design forms, and explore AI-assisted project work at no cost before choosing a production rollout.",
  },
  {
    id: "B",
    headline: "The Procore alternative you can explore at no cost.",
    description:
      "See how an AI-ready workspace handles files and forms before your team commits to production deployment.",
  },
  {
    id: "C",
    headline: "AI-powered construction management, ready to explore free.",
    description:
      "Start a test workspace with AI tokens, file management, and Form Designer access included.",
  },
  {
    id: "D",
    headline: "Move beyond spreadsheets. Start with Space AI for free.",
    description:
      "Replace scattered sample files and manual forms with one organized workspace built for evaluation.",
  },
  {
    id: "E",
    headline: "Your files, forms, and AI workspace. Start free today.",
    description:
      "Try a realistic construction workflow with an included AI token allocation and your own isolated workspace.",
  },
] as const;

type HeadlineVariant = (typeof headlineVariants)[number];

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

function findVariant(id: string | null): HeadlineVariant | undefined {
  return headlineVariants.find((variant) => variant.id === id?.toUpperCase());
}

export default function FreeTierHeroExperiment() {
  const [variant, setVariant] = useState<HeadlineVariant>(headlineVariants[0]);

  useEffect(() => {
    const previewVariant = findVariant(new URLSearchParams(window.location.search).get("headline"));
    const savedVariant = findVariant(window.localStorage.getItem(STORAGE_KEY));
    const assignedVariant =
      previewVariant ??
      savedVariant ??
      headlineVariants[Math.floor(Math.random() * headlineVariants.length)];

    if (!previewVariant && !savedVariant) {
      window.localStorage.setItem(STORAGE_KEY, assignedVariant.id);
    }

    setVariant(assignedVariant);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "free_tier_headline_impression",
      experiment: EXPERIMENT_NAME,
      variant: assignedVariant.id,
      preview: Boolean(previewVariant),
    });
  }, []);

  const trackSignupClick = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "free_tier_signup_click",
      experiment: EXPERIMENT_NAME,
      variant: variant.id,
    });
  };

  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-14 sm:pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(126,34,206,0.22),transparent_58%)]" />
      <div className="container relative mx-auto max-w-6xl">
        <div className="max-w-4xl">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/25 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300">
            <FlaskConical className="h-4 w-4" />
            Free Tier includes files, forms, and AI workspace access
          </span>
          <h1
            className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
            data-experiment={EXPERIMENT_NAME}
            data-variant={variant.id}
          >
            {variant.headline}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">
            {variant.description}
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/try-it-now/"
              onClick={trackSignupClick}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-500 to-teal-400 px-7 py-3.5 font-semibold text-white transition-opacity hover:opacity-90"
            >
              Start Free Today
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pricing/"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
            >
              View All Pricing
            </Link>
          </div>
        </div>

        <figure className="relative mt-14 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
          <Image
            src="/assets/images/free-tier-value-hook-hero.jpg"
            alt="Scattered construction plans and spreadsheets compared with an organized Space AI project dashboard."
            width={1440}
            height={700}
            className="h-auto w-full object-cover"
            priority
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent px-6 pb-7 pt-20 text-center text-2xl font-semibold text-white sm:text-3xl">
            There&apos;s a better way.
          </figcaption>
        </figure>

        <aside className="mx-auto mt-8 max-w-4xl rounded-2xl border border-purple-400/30 bg-white/[0.05] p-7 shadow-2xl shadow-purple-900/20">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-purple-300">
                Included with Free Tier
              </p>
              <div className="mt-3 flex items-end gap-3">
                <span className="text-5xl font-bold">$0</span>
                <span className="pb-2 text-white/60">test mode</span>
              </div>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/65">
              Built for product evaluation. Included AI tokens are temporary and may expire.
            </p>
          </div>
          <ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "AI token allocation",
              "Up to 5 project files",
              "Up to 5 project forms",
              "Form Designer and private workspace",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-300" />
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
