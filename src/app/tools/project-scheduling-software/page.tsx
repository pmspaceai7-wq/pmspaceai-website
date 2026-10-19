import { Metadata } from "next";
import Link from "next/link";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Project Scheduling Software for Construction | Space AI",
  description:
    "Build, optimize, and track construction schedules with AI-powered project scheduling software. Balance resources, predict delays, and keep crews productive.",
  keywords: [
    "project scheduling software",
    "construction scheduling software",
    "Gantt chart software",
    "construction planner",
    "crew scheduling",
    "project timeline software",
  ],
  alternates: {
    canonical: "https://pmspace.ai/tools/project-scheduling-software/",
  },
  openGraph: {
    title: "Project Scheduling Software for Construction | Space AI",
    description:
      "Plan and optimize construction schedules with AI sequencing and delay prediction from Space AI.",
    url: "https://pmspace.ai/tools/project-scheduling-software/",
    type: "website",
  },
};

const faqs = [
  {
    question: "What makes construction scheduling different from general scheduling?",
    answer:
      "Construction scheduling must account for trade dependencies, material lead times, weather, permit approvals, and site-specific constraints. Generic tools lack the construction-specific logic needed to manage these complexities effectively.",
  },
  {
    question: "How does AI improve project scheduling?",
    answer:
      "AI analyzes historical performance, resource availability, and risk signals to suggest optimal task sequences, flag potential delays, and recommend adjustments before the schedule slips.",
  },
  {
    question: "Can multiple team members collaborate on the schedule?",
    answer:
      "Yes. Space AI scheduling supports role-based access so project managers, superintendents, and subcontractors can view and update the schedule according to their permissions.",
  },
  {
    question: "Does it integrate with cost and resource management?",
    answer:
      "Yes. Scheduling connects to labor, equipment, and material data so plans reflect real resource constraints and cost implications.",
  },
];

export default function ProjectSchedulingSoftwarePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <main className="bg-black text-white min-h-screen">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Project Scheduling Software for Construction
            </h1>
            <p className="text-lg md:text-xl text-gray-400">
              Build realistic schedules, balance crews and resources, and stay ahead of delays with AI-powered planning.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-16">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Plan Schedules That Reflect Reality
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Construction schedules are only useful if they can adapt to the realities of the job site. Static Gantt charts become outdated quickly when weather, material delays, or trade conflicts arise. Project scheduling software keeps the plan alive by connecting it to real project data.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Space AI scheduling combines traditional critical path planning with AI-driven sequencing and delay prediction. The result is a schedule that not only shows what should happen, but also warns teams about what might go wrong before it does.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Key Capabilities
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "AI-Optimized Sequencing",
                    desc: "Generate task sequences based on trade dependencies, lead times, and resource availability.",
                  },
                  {
                    title: "Delay Prediction",
                    desc: "Identify tasks at risk of slipping before they impact the critical path.",
                  },
                  {
                    title: "Resource Balancing",
                    desc: "Align crew, equipment, and material availability with scheduled work.",
                  },
                  {
                    title: "Visual Gantt & Calendar",
                    desc: "View timelines, milestones, and dependencies in an intuitive, shareable format.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white/5 border border-white/10 rounded-xl p-6"
                  >
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Why Teams Rely on It
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Reliable scheduling is the foundation of on-time delivery. When schedules account for real constraints and update automatically, superintendents spend less time replanning and more time executing. Project owners get clearer forecasts. Subcontractors get earlier notice of conflicts.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Space AI scheduling integrates with cost, document, and risk modules so the schedule becomes a living reflection of project health rather than a static document.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Related Tools
              </h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/tools/construction-delay-risk-calculator/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Delay Risk Calculator
                </Link>
                <Link
                  href="/tools/construction-analytics-software/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Analytics Software
                </Link>
                <Link
                  href="/project-scheduling-software/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Scheduling Pillar Page
                </Link>
                <Link
                  href="/tools/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  All Tools
                </Link>
              </div>
            </section>

            <section className="text-center bg-gradient-to-r from-purple-500/20 to-teal-400/20 border border-white/10 rounded-2xl p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Build Schedules That Stay on Track
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Book a demo to see how Space AI project scheduling protects timelines and improves resource utilization.
              </p>
              <Link
                href="/construction-software-demo/"
                className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-teal-400 text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Book a Demo
              </Link>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
