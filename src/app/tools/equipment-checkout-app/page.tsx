import { Metadata } from "next";
import Link from "next/link";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Equipment Checkout App for Construction | Space AI",
  description:
    "Streamline tool and equipment checkouts with a mobile app built for construction crews. Track accountability, reduce losses, and speed up field operations.",
  keywords: [
    "equipment checkout app",
    "tool checkout app",
    "construction equipment app",
    "asset checkout",
    "mobile equipment tracking",
    "construction crew tools",
  ],
  alternates: {
    canonical: "https://pmspace.ai/tools/equipment-checkout-app/",
  },
  openGraph: {
    title: "Equipment Checkout App for Construction | Space AI",
    description:
      "Let crews check tools and equipment in and out from the field with Space AI's mobile checkout app.",
    url: "https://pmspace.ai/tools/equipment-checkout-app/",
    type: "website",
  },
};

const faqs = [
  {
    question: "How does the equipment checkout app work?",
    answer:
      "Crews scan a QR code or select an asset from their phone to check it out. The app records who has it, where it is, and when it is due back. Supervisors can see real-time availability and overdue items.",
  },
  {
    question: "Can it work offline on job sites?",
    answer:
      "Yes. The app captures checkout data locally when connectivity is poor and syncs automatically when the device reconnects, so field work is never blocked.",
  },
  {
    question: "What happens if equipment is damaged?",
    answer:
      "Users can attach photos and notes to damage or maintenance requests during checkout or return, creating a clear accountability trail and faster repair workflow.",
  },
  {
    question: "Does it integrate with asset tracking?",
    answer:
      "Yes. The checkout app feeds directly into Space AI asset tracking, so location, utilization, and maintenance data stay synchronized across the platform.",
  },
];

export default function EquipmentCheckoutAppPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <main className="bg-black text-white min-h-screen">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Equipment Checkout App
            </h1>
            <p className="text-lg md:text-xl text-gray-400">
              A mobile-first checkout experience that keeps construction crews accountable and equipment moving.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-16">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Simplify Field Equipment Handoffs
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Construction crews borrow and return tools and equipment multiple times per day. Paper sign-out sheets and spreadsheet logs are slow, error-prone, and hard to enforce. The Space AI Equipment Checkout App replaces those manual processes with a simple mobile interface that works where crews work.
              </p>
              <p className="text-gray-400 leading-relaxed">
                With a few taps, workers can check out assets, see what is available, and return items with condition notes and photos. Supervisors get instant visibility into who has what, which items are overdue, and where equipment is needed next.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Key Features
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Mobile Scan Checkout",
                    desc: "Scan QR codes or barcodes to check tools in and out in seconds.",
                  },
                  {
                    title: "Availability View",
                    desc: "Crews see what tools are on-site, checked out, or reserved.",
                  },
                  {
                    title: "Condition Reporting",
                    desc: "Attach photos and notes for damage or maintenance needs at return.",
                  },
                  {
                    title: "Overdue Alerts",
                    desc: "Automatic reminders help supervisors recover assets and reassign them.",
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
                Built for Field Conditions
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                The app is designed for dusty, busy job sites. The interface is simple enough to use without training, works offline when needed, and syncs with the central platform. It reduces the morning bottleneck of finding tools and the end-of-day scramble to account for equipment.
              </p>
              <p className="text-gray-400 leading-relaxed">
                For operations leaders, the checkout data feeds into utilization and maintenance reports, turning a daily friction point into a source of operational intelligence.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Related Tools
              </h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/tools/construction-asset-tracking-software/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Asset Tracking Software
                </Link>
                <Link
                  href="/tools/inventory-management/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Inventory Management
                </Link>
                <Link
                  href="/tools/admin-panels/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Admin Panels
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
                Equip Your Crews for Speed
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Book a demo to see how the Equipment Checkout App reduces tool loss and keeps crews productive.
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
