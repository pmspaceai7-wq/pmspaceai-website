import { Metadata } from "next";
import Link from "next/link";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Inventory Management Software for Construction | Space AI",
  description:
    "Track construction materials, stock levels, and supplier orders with AI-powered inventory management software. Reduce waste, prevent shortages, and improve procurement.",
  keywords: [
    "inventory management software",
    "construction inventory",
    "material tracking",
    "stock management",
    "procurement software",
    "construction materials",
  ],
  alternates: {
    canonical: "https://pmspace.ai/tools/inventory-management/",
  },
  openGraph: {
    title: "Inventory Management Software for Construction | Space AI",
    description:
      "Prevent material shortages and reduce waste with Space AI construction inventory management.",
    url: "https://pmspace.ai/tools/inventory-management/",
    type: "website",
  },
};

const faqs = [
  {
    question: "What does construction inventory management software do?",
    answer:
      "It tracks materials, parts, and supplies across warehouses, yards, and job sites. It provides real-time stock levels, reorder alerts, and visibility into consumption so teams can avoid shortages and overstocking.",
  },
  {
    question: "Can it track materials across multiple job sites?",
    answer:
      "Yes. Space AI inventory management supports multi-location tracking, so you can see stock levels by site, warehouse, or project and transfer materials where they are needed most.",
  },
  {
    question: "How does AI improve inventory management?",
    answer:
      "AI predicts consumption patterns, suggests optimal reorder points, flags unusual usage, and helps identify slow-moving or obsolete stock before it ties up capital.",
  },
  {
    question: "Does it integrate with procurement and accounting?",
    answer:
      "Yes. Inventory data connects to procurement workflows, purchase orders, and project cost tracking so finance and operations stay aligned.",
  },
];

export default function InventoryManagementPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <main className="bg-black text-white min-h-screen">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Inventory Management Software for Construction
            </h1>
            <p className="text-lg md:text-xl text-gray-400">
              Keep materials moving and projects on schedule with real-time inventory visibility across sites.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-16">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Avoid Material Shortages and Costly Waste
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Material delays are one of the most common causes of construction schedule slippage. At the same time, overordering ties up cash and creates waste. Construction inventory management software balances these risks by giving teams accurate, real-time visibility into stock levels, orders, and consumption.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Space AI connects inventory data with procurement, scheduling, and project cost systems so teams can reorder at the right time, allocate materials to the right site, and track usage against budget line items.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Key Capabilities
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Multi-Site Stock Tracking",
                    desc: "See inventory levels across warehouses, yards, and active job sites in one view.",
                  },
                  {
                    title: "Reorder Alerts",
                    desc: "Get notified when stock falls below thresholds to prevent job-site shortages.",
                  },
                  {
                    title: "Usage Analytics",
                    desc: "Track consumption by project, phase, or trade to improve forecasting.",
                  },
                  {
                    title: "Purchase Order Integration",
                    desc: "Connect inventory levels directly to procurement and supplier orders.",
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
                With better inventory control, project teams reduce emergency orders, minimize idle stock, and improve cash flow. Procurement teams negotiate better because they have accurate usage data. Site supervisors spend less time chasing materials and more time managing work.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Over time, the data builds a foundation for more accurate estimating and scheduling on future projects.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Related Tools
              </h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/tools/supply-chain-management-system/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Supply Chain Management
                </Link>
                <Link
                  href="/tools/equipment-checkout-app/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Equipment Checkout App
                </Link>
                <Link
                  href="/tools/construction-asset-tracking-software/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Asset Tracking Software
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
                Keep Materials Flowing
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Book a demo to see how Space AI inventory management prevents shortages and reduces waste.
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
