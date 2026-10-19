import { Metadata } from "next";
import Link from "next/link";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Construction Asset Tracking Software | Equipment & Tools | Space AI",
  description:
    "Track construction equipment, tools, and machinery in real time with Space AI asset tracking software. Reduce losses, improve utilization, and simplify maintenance.",
  keywords: [
    "construction asset tracking software",
    "equipment tracking",
    "tool tracking",
    "machinery management",
    "construction fleet management",
    "asset utilization",
  ],
  alternates: {
    canonical: "https://pmspace.ai/tools/construction-asset-tracking-software/",
  },
  openGraph: {
    title: "Construction Asset Tracking Software | Equipment & Tools | Space AI",
    description:
      "Know where every tool and machine is with Space AI construction asset tracking software.",
    url: "https://pmspace.ai/tools/construction-asset-tracking-software/",
    type: "website",
  },
};

const faqs = [
  {
    question: "What is construction asset tracking software?",
    answer:
      "It is a system that monitors the location, status, and usage of construction equipment, tools, and vehicles. It helps teams reduce loss, improve utilization, schedule maintenance, and assign accountability across job sites.",
  },
  {
    question: "Can it track both small tools and heavy equipment?",
    answer:
      "Yes. Space AI supports tracking for everything from hand tools and power equipment to heavy machinery and vehicles, using barcode, QR code, or RFID-based checkouts combined with mobile access.",
  },
  {
    question: "How does asset tracking reduce costs?",
    answer:
      "By preventing loss, reducing unnecessary rentals, extending asset life through scheduled maintenance, and improving crew accountability, teams typically see measurable savings in equipment spend.",
  },
  {
    question: "Is mobile access available for field crews?",
    answer:
      "Yes. Field teams can check assets in and out, report condition issues, and request maintenance directly from their phones, even when connectivity is limited.",
  },
];

export default function ConstructionAssetTrackingSoftwarePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <main className="bg-black text-white min-h-screen">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Construction Asset Tracking Software
            </h1>
            <p className="text-lg md:text-xl text-gray-400">
              Know where every tool, machine, and vehicle is across your projects with real-time asset tracking.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-16">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Stop Losing Track of Critical Equipment
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Construction equipment and tools move constantly between job sites, storage yards, and maintenance bays. Without a clear tracking system, tools go missing, machines sit idle, and crews waste time searching for what they need. Construction asset tracking software gives operations teams a single, real-time view of every asset.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Space AI connects checkout records, maintenance schedules, utilization data, and site assignments so managers can optimize deployment, reduce losses, and hold crews accountable without adding administrative burden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Core Features
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Real-Time Location",
                    desc: "See which site, yard, or crew has each asset at any moment.",
                  },
                  {
                    title: "Checkout & Returns",
                    desc: "Mobile check-in and check-out with photos, condition notes, and timestamps.",
                  },
                  {
                    title: "Maintenance Scheduling",
                    desc: "Track service intervals, overdue maintenance, and repair history automatically.",
                  },
                  {
                    title: "Utilization Reports",
                    desc: "Identify underused equipment and optimize rentals, purchases, and transfers.",
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
                Who Benefits
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Site supervisors benefit from faster morning rollouts because they know exactly what equipment is available. Operations managers reduce rental and replacement costs by improving utilization. Maintenance teams prevent breakdowns with proactive service scheduling. Finance teams get accurate asset records for depreciation and job costing.
              </p>
              <p className="text-gray-400 leading-relaxed">
                The result is a more efficient fleet, fewer lost tools, and lower total cost of asset ownership.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Related Tools
              </h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/tools/equipment-checkout-app/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Equipment Checkout App
                </Link>
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
                  Supply Chain Management
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
                Take Control of Your Assets
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                See how Space AI asset tracking reduces equipment loss and improves utilization across your projects.
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
