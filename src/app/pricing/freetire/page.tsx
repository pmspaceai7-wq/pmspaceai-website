import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Clock3,
  FileText,
  HelpCircle,
  LayoutTemplate,
  LockKeyhole,
  Sparkles,
} from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";
import FreeTierHeroExperiment from "./FreeTierHeroExperiment";

const SITE_URL = "https://pmspace.ai";

const freeTierFeatures = [
  {
    icon: Sparkles,
    title: "AI tokens included",
    description:
      "Explore AI-assisted workflows using your included test-mode token allocation. Free tokens may expire.",
  },
  {
    icon: FileText,
    title: "File management",
    description:
      "Add and organize up to 5 files while evaluating how project information fits into the workspace.",
  },
  {
    icon: LayoutTemplate,
    title: "Forms and Form Designer",
    description:
      "Create up to 5 forms and explore the Form Designer for collecting structured project information.",
  },
  {
    icon: LockKeyhole,
    title: "Isolated workspace",
    description:
      "Use your own workspace for hands-on product exploration before considering production deployment.",
  },
];

const evaluationSteps = [
  {
    title: "Create your free workspace",
    description: "Start in test mode and set up a private area for product exploration.",
  },
  {
    title: "Try a representative workflow",
    description:
      "Upload a small set of files, configure a form, and use available tokens on realistic questions.",
  },
  {
    title: "Decide on production scope",
    description:
      "When your team needs live-project deployment, integrations, or onboarding, discuss an Enterprise rollout.",
  },
];

const comparisonRows = [
  {
    label: "Purpose",
    free: "Product evaluation and testing",
    enterprise: "Production deployment",
  },
  {
    label: "AI usage",
    free: "Included evaluation tokens that may expire",
    enterprise: "Scoped to organizational requirements",
  },
  {
    label: "Workspace",
    free: "Isolated test workspace",
    enterprise: "Production workspace configuration",
  },
  {
    label: "Implementation",
    free: "Self-guided exploration",
    enterprise: "Onboarding and implementation support",
  },
  {
    label: "Pricing",
    free: "$0 for test mode",
    enterprise: "Custom pricing",
  },
];

const freeTierFaqs = [
  {
    question: "Is Space AI Free Tier a production plan?",
    answer:
      "No. The Free Tier is a test-mode plan for exploring Space AI before a production rollout. Teams needing live-project deployment should discuss an Enterprise plan.",
  },
  {
    question: "What is included in the Free Tier?",
    answer:
      "The Free Tier includes an AI token allocation, file management for up to 5 files, a form builder for up to 5 forms, Form Designer access, and an isolated workspace.",
  },
  {
    question: "Do free AI tokens expire?",
    answer:
      "Free tokens are temporary and may expire. They are intended to support product evaluation rather than ongoing production use.",
  },
  {
    question: "What happens when a team is ready for production?",
    answer:
      "Teams can contact Space AI for custom Enterprise pricing based on modules, workflows, integrations, implementation, support, and access requirements.",
  },
];

export const metadata: Metadata = {
  title: "Space AI Free Tier | Free Test Mode for Construction Teams",
  description:
    "Explore Space AI in free test mode with AI tokens, up to 5 files, up to 5 forms, Form Designer access, and an isolated workspace included.",
  keywords: [
    "Space AI free tier",
    "construction software free test mode",
    "free AI construction management trial",
    "construction software pricing free plan",
  ],
  alternates: {
    canonical: `${SITE_URL}/pricing/freetire/`,
  },
  openGraph: {
    title: "Space AI Free Tier | Explore Construction AI in Test Mode",
    description:
      "Evaluate Space AI with AI tokens, file management, forms, and an isolated test workspace included.",
    url: `${SITE_URL}/pricing/freetire/`,
    type: "website",
  },
};

export default function FreeTierPricingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <FAQSchema faqs={freeTierFaqs} />
      <FreeTierHeroExperiment />

      <section className="border-y border-white/10 bg-white/[0.02] px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-teal-300">
              Included Access
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              A practical workspace for evaluating construction AI
            </h2>
            <p className="mt-4 text-white/65">
              Use the Free Tier to test the product with a focused example
              workflow, then decide whether a production deployment makes sense.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {freeTierFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-white/10 bg-black/40 p-6"
              >
                <feature.icon className="mb-5 h-8 w-8 text-purple-300" />
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="container mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-purple-300">
              Free vs Enterprise
            </p>
            <h2 className="text-3xl font-bold">Test first. Deploy with intent.</h2>
            <p className="mt-4 leading-relaxed text-white/65">
              Free Tier is designed to answer whether Space AI fits your
              workflow. Enterprise is the route for production configuration,
              implementation, integrations, and organizational support.
            </p>
            <Link
              href="/contact-sales/"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-teal-300 hover:text-teal-200"
            >
              Discuss Enterprise deployment
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <div className="grid grid-cols-[0.8fr_1fr_1fr] bg-white/[0.07] px-4 py-4 text-sm font-semibold sm:px-6">
              <span>Plan detail</span>
              <span className="text-purple-300">Free Tier</span>
              <span className="text-teal-300">Enterprise</span>
            </div>
            {comparisonRows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[0.8fr_1fr_1fr] gap-3 border-t border-white/10 px-4 py-4 text-sm sm:px-6"
              >
                <span className="font-medium text-white/80">{row.label}</span>
                <span className="text-white/65">{row.free}</span>
                <span className="text-white/65">{row.enterprise}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/[0.02] px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <Clock3 className="mx-auto mb-5 h-9 w-9 text-teal-300" />
            <h2 className="text-3xl font-bold">How to evaluate Space AI in free mode</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {evaluationSteps.map((step, index) => (
              <div key={step.title} className="rounded-xl border border-white/10 p-7">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-purple-500/15 font-semibold text-purple-300">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-white/65">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
              <HelpCircle className="h-4 w-4" />
              Free Tier FAQ
            </span>
            <h2 className="text-3xl font-bold">Questions before you start</h2>
          </div>
          <div className="space-y-4">
            {freeTierFaqs.map((faq) => (
              <div key={faq.question} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <p className="mt-3 leading-relaxed text-white/65">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="container mx-auto max-w-5xl rounded-2xl border border-purple-400/20 bg-gradient-to-r from-purple-500/15 to-teal-400/10 px-6 py-12 text-center sm:px-12">
          <Building2 className="mx-auto mb-5 h-10 w-10 text-purple-300" />
          <h2 className="text-3xl font-bold">Start with a test workspace today</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Explore the Free Tier now, or speak with the team about an
            Enterprise implementation for production workflows.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/try-it-now/"
              className="rounded-lg bg-gradient-to-r from-purple-500 to-teal-400 px-8 py-3 font-semibold hover:opacity-90"
            >
              Get Free Access
            </Link>
            <Link
              href="/contact-sales/"
              className="rounded-lg bg-white/10 px-8 py-3 font-semibold hover:bg-white/20"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Space AI Free Tier",
            applicationCategory: "BusinessApplication",
            applicationSubCategory: "Construction Management Software",
            operatingSystem: "Web",
            url: `${SITE_URL}/pricing/freetire/`,
            offers: {
              "@type": "Offer",
              name: "Free Tier",
              price: "0",
              priceCurrency: "USD",
              description: "Free test-mode access with included AI tokens that may expire.",
            },
          }),
        }}
      />
    </div>
  );
}
