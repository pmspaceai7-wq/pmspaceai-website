import { Metadata } from "next";
import Link from "next/link";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Supply Chain Management System for Construction | Space AI",
  description:
    "Orchestrate procurement, logistics, and supplier performance with AI-driven supply chain management software for construction projects.",
  keywords: [
    "supply chain management system",
    "construction supply chain",
    "procurement software",
    "material logistics",
    "supplier management",
    "construction procurement",
  ],
  alternates: {
    canonical: "https://pmspace.ai/tools/supply-chain-management-system/",
  },
  openGraph: {
    title: "Supply Chain Management System for Construction | Space AI",
    description:
      "Unify procurement, logistics, and supplier data with Space AI supply chain management.",
    url: "https://pmspace.ai/tools/supply-chain-management-system/",
    type: "website",
  },
};

const faqs = [
  {
    question: "What is a construction supply chain management system?",
    answer:
      "It is software that coordinates procurement, supplier relationships, material deliveries, and logistics across construction projects. It gives teams visibility into orders, inventory, and supplier performance from one platform.",
  },
  {
    question: "How does AI improve construction supply chains?",
    answer:
      "AI analyzes historical delivery data, demand signals, and supplier performance to predict shortages, recommend optimal order timing, and flag suppliers with rising risk profiles.",
  },
  {
    question: "Can it track orders across multiple suppliers?",
    answer:
      "Yes. Space AI consolidates purchase orders, delivery schedules, and invoices from multiple suppliers into a single coordinated view tied to project schedules.",
  },
  {
    question: "Does it help with cost control?",
    answer:
      "Yes. By improving order accuracy, reducing rush orders, and surfacing supplier pricing trends, teams can better control material costs and protect project margins.",
  },
];

export default function SupplyChainManagementSystemPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <main className="bg-black text-white min-h-screen">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Supply Chain Management System for Construction
            </h1>
            <p className="text-lg md:text-xl text-gray-400">
              Coordinate procurement, logistics, and suppliers to keep materials flowing and projects on schedule.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-16">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Connect the Dots Across Procurement and Delivery
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Construction supply chains involve many moving parts: suppliers, distributors, fabricators, freight, site receiving, and storage. When these are managed in separate spreadsheets and inboxes, delays and miscommunication become routine. A supply chain management system brings everything into one coordinated view.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Space AI connects procurement data with project schedules, inventory levels, and supplier performance. Teams can see what is ordered, what is in transit, what has been received, and what is at risk before it impacts the critical path.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Key Capabilities
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Supplier Performance Tracking",
                    desc: "Score suppliers on delivery reliability, quality, and responsiveness.",
                  },
                  {
                    title: "Order & Delivery Visibility",
                    desc: "Track purchase orders, shipments, and site deliveries in real time.",
                  },
                  {
                    title: "AI Demand Forecasting",
                    desc: "Anticipate material needs based on schedule, consumption, and lead times.",
                  },
                  {
                    title: "Procurement Workflows",
                    desc: "Route requisitions, approvals, and purchase orders through configurable workflows.",
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
                Business Impact
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Better supply chain visibility reduces downtime caused by missing materials, cuts rush-order premiums, and strengthens supplier negotiations. Project managers can align procurement with the schedule, and procurement teams can plan based on actual project needs rather than guesswork.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Over time, the system builds a supplier scorecard and cost history that informs smarter sourcing decisions on future projects.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Related Tools
              </h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/tools/inventory-management/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Inventory Management
                </Link>
                <Link
                  href="/tools/expense-tracking-software/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Expense Tracking
                </Link>
                <Link
                  href="/tools/construction-analytics-software/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Analytics Software
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
                Take Control of Your Supply Chain
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Book a demo to see how Space AI supply chain management prevents material delays and controls costs.
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
