import Link from "next/link";
import { ArrowRight, Building2, Calendar, CheckCircle, FileText, Users } from "lucide-react";

const useCases = [
  {
    title: "Planning and scheduling",
    description:
      "Coordinate look-ahead planning, baseline updates, and cross-trade handoffs in one workspace.",
    icon: Calendar,
  },
  {
    title: "Document control",
    description:
      "Keep drawings, submittals, RFIs, and site records organized with searchable workflows.",
    icon: FileText,
  },
  {
    title: "Field coordination",
    description:
      "Connect field teams, office teams, and partners around tasks, updates, and current project context.",
    icon: Users,
  },
];

const referenceNotes = [
  "This page no longer publishes fabricated customer names, testimonials, or performance metrics.",
  "Examples are shared as workflow patterns and product use cases instead of public claims.",
  "If you need customer references, the team can provide them directly during a live evaluation process.",
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-6">
            Case Studies & Use Cases
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Product use cases instead of invented customer stories
          </h1>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            We removed placeholder case-study content from this page. What remains is a simple view
            of the workflows Space AI supports across planning, field operations, and project
            coordination.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {useCases.map((useCase) => (
            <div key={useCase.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/15 text-blue-300 flex items-center justify-center mb-4">
                <useCase.icon className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-semibold mb-3">{useCase.title}</h2>
              <p className="text-white/70">{useCase.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="w-6 h-6 text-blue-300" />
            <h2 className="text-2xl md:text-3xl font-bold">What changed</h2>
          </div>
          <div className="space-y-4 text-white/75">
            {referenceNotes.map((note) => (
              <div key={note} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                <span>{note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-500/15 to-cyan-500/10 border border-blue-500/20 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need examples relevant to your team?</h2>
          <p className="text-white/70 text-lg mb-8">
            We can walk through your workflows, show the right product areas, and share reference
            context directly during a demo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/construction-software-demo/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-black rounded-xl font-semibold hover:bg-blue-400 transition-colors"
            >
              Book a Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/customers/success-stories/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-colors"
            >
              Request References
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
