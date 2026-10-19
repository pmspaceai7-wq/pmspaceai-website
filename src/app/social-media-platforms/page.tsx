import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, Megaphone, ShieldCheck, Users } from "lucide-react";
import {
  additionalSocialPlatforms,
  socialPlatforms,
  suppliedProfilePlatformNames,
} from "@/lib/socialPlatforms";

const SITE_URL = "https://pmspace.ai";
const PAGE_URL = `${SITE_URL}/social-media-platforms/`;

export const metadata: Metadata = {
  title: "Space AI Social Media Platforms | Official Profiles",
  description:
    "Find official Space AI profiles and registered social platforms, including LinkedIn, X, Instagram, YouTube, Threads, Quora, and Reddit.",
  keywords: [
    "Space AI social media platforms",
    "Space AI LinkedIn",
    "Space AI YouTube",
    "Space AI Instagram",
    "Space AI X",
    "Space AI Facebook",
    "Space AI Reddit",
    "Space AI Threads",
    "Space AI Quora",
    "official Space AI profiles",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Space AI Social Media Platforms",
    description:
      "Connect through official Space AI profiles and explore additional community and discovery platforms.",
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/assets/images/og-image.jpeg`,
        width: 1200,
        height: 630,
        alt: "Space AI official social media platforms",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Space AI Social Media Platforms",
    description: "Find official Space AI profiles and registered social and discovery platforms.",
    images: [`${SITE_URL}/assets/images/og-image.jpeg`],
  },
};

export default function SocialMediaPlatformsPage() {
  const suppliedPlatformNameSet = new Set(suppliedProfilePlatformNames);
  const suppliedAdditionalPlatforms = suppliedProfilePlatformNames
    .map((platformName) =>
      additionalSocialPlatforms.find((platform) => platform.name === platformName)
    )
    .filter((platform): platform is (typeof additionalSocialPlatforms)[number] => Boolean(platform));
  const publishedAdditionalPlatforms = additionalSocialPlatforms.filter(
    (platform) => platform.status !== "directory"
  );
  const orderedAdditionalPlatforms = [
    ...suppliedAdditionalPlatforms,
    ...publishedAdditionalPlatforms.filter(
      (platform) => !suppliedPlatformNameSet.has(platform.name) && platform.status === "registered"
    ),
    ...publishedAdditionalPlatforms.filter(
      (platform) => !suppliedPlatformNameSet.has(platform.name) && platform.status === "listing"
    ),
  ];
  const orderedSocialPlatformDirectory = [...socialPlatforms, ...orderedAdditionalPlatforms];
  const registeredPlatformCount = additionalSocialPlatforms.filter(
    (platform) => platform.status === "registered"
  ).length;
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Space AI Social Media Platforms",
    description: "Official Space AI profiles and additional social and discovery platforms.",
    url: PAGE_URL,
    itemListElement: orderedSocialPlatformDirectory.map((platform, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: platform.name,
      url: platform.href,
    })),
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Space AI",
    url: SITE_URL,
    sameAs: socialPlatforms.map((platform) => platform.href),
  };

  return (
    <main className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <section className="relative py-20 sm:py-24 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(140,69,255,0.28),transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.08),transparent_35%,rgba(249,115,22,0.06))]" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70">
              <ShieldCheck className="h-4 w-4 text-purple-300" />
              Official Space AI profiles
            </div>
            <h1 className="text-4xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-purple-300 sm:text-5xl md:text-6xl">
              Space AI Social Media Platforms
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              Follow Space AI across our official channels for construction AI insights, product updates,
              platform demos, and company announcements. Explore additional social and community
              platforms below as new profile links are published.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
              <span className="rounded-full border border-purple-300/25 bg-purple-400/10 px-4 py-2 text-purple-200">
                {socialPlatforms.length} official channels
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-white/70">
                {orderedSocialPlatformDirectory.length} platforms listed
              </span>
              <span className="rounded-full border border-green-300/20 bg-green-300/10 px-4 py-2 text-green-200">
                {registeredPlatformCount} registered links
              </span>
            </div>
          </div>

          <div className="mt-14 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-purple-300">Verified links</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">Official Space AI profiles</h2>
            </div>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {socialPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[260px] flex-col justify-between rounded-xl border border-white/10 bg-black/35 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]"
              >
                <div>
                  <div
                    className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/5"
                    style={{ color: platform.color }}
                  >
                    <platform.icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">{platform.name}</h2>
                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.16em] text-purple-300">
                    {platform.handle}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-white/65">{platform.description}</p>
                </div>
                <div className="mt-8 flex items-center justify-between text-sm font-medium text-white">
                  <span>Open profile</span>
                  <ExternalLink className="h-4 w-4 text-white/50 transition-colors group-hover:text-white" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-purple-300">
              More platforms
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">Social, community, and discovery links</h2>
            <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
              Registered Space AI platforms and confirmed public listings are identified below.
              Placeholder platform-only destinations are hidden until a profile link is published.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {orderedAdditionalPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={platform.label}
                className="group flex min-h-[208px] flex-col rounded-xl border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5"
                    style={{ color: platform.color }}
                  >
                    <platform.icon className="h-5 w-5" />
                  </div>
                  <span
                    className={
                      platform.status === "listing" || platform.status === "registered"
                        ? "rounded-full border border-green-300/20 bg-green-300/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-green-200"
                        : "rounded-full border border-white/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45"
                    }
                  >
                    {platform.status === "registered"
                      ? "Registered"
                      : platform.status === "listing"
                        ? "Listing"
                        : "Platform"}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{platform.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-white/60">{platform.description}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/75 group-hover:text-white">
                  {platform.status === "registered"
                    ? "Open registered link"
                    : platform.status === "listing"
                      ? "View listing"
                      : "Visit platform"}
                  <ExternalLink className="h-3.5 w-3.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/10 py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Product Updates",
                description: "Track releases, demos, feature launches, and platform improvements.",
                icon: Megaphone,
              },
              {
                title: "Construction AI Insights",
                description: "Learn how AI, BIM, visual intelligence, and automation change project delivery.",
                icon: Users,
              },
              {
                title: "Official Channels",
                description: "Use this page to verify Space AI profiles before following or sharing.",
                icon: ShieldCheck,
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                <item.icon className="mb-5 h-7 w-7 text-purple-300" />
                <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-6 rounded-xl border border-purple-400/25 bg-purple-950/20 p-6 sm:flex-row sm:items-center md:p-8">
            <div>
              <h2 className="text-2xl font-bold text-white">Looking for Space AI resources?</h2>
              <p className="mt-2 text-sm text-white/65">
                Explore product guides, videos, case studies, templates, and documentation.
              </p>
            </div>
            <Link
              href="/resources/"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90"
            >
              View resources
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
