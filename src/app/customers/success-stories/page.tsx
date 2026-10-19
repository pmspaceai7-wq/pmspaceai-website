import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle, FileText, Users } from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Customer References | Space AI",
  description:
    "Learn how Space AI supports construction teams across scheduling, document control, and field coordination. Reference conversations are shared directly during the buying process.",
  keywords:
    "Space AI customer references, construction software references, customer conversations, construction software evaluation",
  openGraph: {
    title: "Customer References | Space AI",
    description:
      "Request relevant customer references and implementation context directly from the Space AI team.",
    type: "website",
    url: "https://pmspace.ai/customers/success-stories/",
  },
  alternates: {
    canonical: "https://pmspace.ai/customers/success-stories/",
  },
};

const referenceOptions = [
  {
    title: "Relevant project context",
    description:
      "We can share reference material that matches your project type, delivery model, and operating structure.",
    icon: Building2,
  },
  {
    title: "Workflow walkthroughs",
    description:
      "See how teams use Space AI for planning, field coordination, document control, and reporting.",
    icon: FileText,
  },
  {
    title: "Live conversations",
    description:
      "For qualified opportunities, we can coordinate reference calls or tailored product walkthroughs.",
    icon: Users,
  },
];

const faqs = [
  {
    question: "Do you publish named customer testimonials on the site?",
    answer:
      "No. We are keeping public reference content lightweight and share customer context directly during live sales conversations instead.",
  },
  {
    question: "Can I request references for a specific project type?",
    answer:
      "Yes. If you are evaluating the platform, the team can tailor examples and references around the kinds of projects and workflows you manage.",
  },
  {
    question: "What can you share during evaluation?",
    answer:
      "Depending on fit and availability, we can share implementation approaches, workflow examples, product walkthroughs, and reference conversations relevant to your use case.",
  },
];

export default function SuccessStoriesPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <div className="bg-black text-white min-h-screen">
        <section className="container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-sm font-medium mb-6">
              Customer References
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Reference conversations, not placeholder testimonials
            </h1>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              We removed synthetic customer-story content from this page. If you want relevant
              references or implementation examples, we can share them directly based on your
              project type and buying stage.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 pb-16">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            {referenceOptions.map((option) => (
              <div
                key={option.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500/15 text-green-300 flex items-center justify-center mb-4">
                  <option.icon className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-semibold mb-3">{option.title}</h2>
                <p className="text-white/70">{option.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">What to expect</h2>
            <div className="space-y-4 text-white/75">
              {[
                "Discovery conversations focus on your workflows, team structure, and delivery model.",
                "Examples are shared in context instead of presenting generic public success claims.",
                "Where appropriate, we can point you to product areas, implementation patterns, and next-step conversations.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-white/70">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 pb-20">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-green-500/15 to-teal-500/10 border border-green-500/20 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need references for your evaluation?</h2>
            <p className="text-white/70 text-lg mb-8">
              We can walk through relevant workflows and coordinate the right next conversation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/construction-software-demo/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-black rounded-xl font-semibold hover:bg-green-400 transition-colors"
              >
                Book a Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-colors"
              >
                View Use Cases
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
