import { Metadata } from "next";
import Link from "next/link";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Construction Supply Chain Management Software | Space AI",
  description:
    "Streamline procurement, logistics, and supplier management with AI-powered construction supply chain software from Space AI.",
  keywords: [
    "construction supply chain management software",
    "construction procurement software",
    "material management construction",
    "supplier management construction",
    "construction logistics software",
    "AI supply chain construction",
  ],
  alternates: {
    canonical: "https://pmspace.ai/tools/construction-supply-chain-management-software/",
  },
  openGraph: {
    title: "Construction Supply Chain Management Software | Space AI",
    description:
      "Gain end-to-end visibility across suppliers, materials, and logistics with AI-driven procurement and inventory orchestration.",
    url: "https://pmspace.ai/tools/construction-supply-chain-management-software/",
    type: "website",
  },
};

const faqs = [
  {
    question: "What is construction supply chain management software?",
    answer:
      "It is a platform that helps construction teams manage procurement, suppliers, material deliveries, inventory, and logistics from a single coordinated view.",
  },
  {
    question: "How does AI improve supply chain visibility?",
    answer:
      "AI analyzes order statuses, delivery histories, inventory levels, and external risk signals to predict shortages, flag delays, and recommend alternative suppliers or schedules.",
  },
  {
    question: "Can Space AI track supplier performance?",
    answer:
      "Yes. Space AI captures delivery times, quality incidents, pricing trends, and compliance data to build supplier scorecards and support better procurement decisions.",
  },
  {
    question: "Does it integrate with inventory management?",
    answer:
      "Yes. Supply chain and inventory data are connected so teams can match material orders to on-site stock levels, reduce over-ordering, and avoid job-site shortages.",
  },
];

export default function ConstructionSupplyChainManagementSoftwarePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <main className="bg-black text-white min-h-screen">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Construction Supply Chain Management Software
            </h1>
            <p className="text-lg md:text-xl text-gray-400">
              Connect procurement, logistics, inventory, and supplier performance into one AI-powered supply chain command center.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-16">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Why Supply Chain Visibility Matters
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Material delays and supply chain disruptions are among the most common causes of construction schedule slip. Orders are placed across multiple vendors, deliveries arrive unpredictably, and site teams often lack visibility into what is coming and when. Without a unified system, procurement decisions are made in spreadsheets and phone calls.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Space AI construction supply chain management software integrates procurement, inventory, logistics, and supplier data so teams can plan material flows proactively, avoid shortages, and reduce downtime caused by missing resources.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Key Capabilities
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Procurement Orchestration",
                    desc: "Manage purchase orders, approvals, and vendor communications in one place with automated status tracking.",
                  },
                  {
                    title: "Supplier Performance Scorecards",
                    desc: "Track delivery reliability, quality, pricing, and compliance to make data-driven sourcing decisions.",
                  },
                  {
                    title: "Delivery & Logistics Tracking",
                    desc: "Monitor material shipments and delivery schedules so site teams know exactly when resources will arrive.",
                  },
                  {
                    title: "Shortage & Delay Prediction",
                    desc: "Use AI to anticipate supply constraints and recommend alternative suppliers, substitutions, or schedule adjustments.",
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
                With better supply chain visibility, procurement teams can negotiate from a position of knowledge, project managers can plan around realistic delivery dates, and site teams can avoid the idle time that eats into labor productivity.
              </p>
              <p className="text-gray-400 leading-relaxed">
                The result is fewer material delays, lower carrying costs, stronger supplier relationships, and more reliable project schedules across the portfolio.
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
                  href="/tools/supply-chain-management-system/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Supply Chain Management System
                </Link>
                <Link
                  href="/tools/equipment-checkout-app/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Equipment Checkout App
                </Link>
                <Link
                  href="/tools/ai-recommendation-engine/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  AI Recommendation Engine
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
                Book a demo to see how Space AI supply chain management reduces delays and material risk.
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
