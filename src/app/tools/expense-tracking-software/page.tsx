import { Metadata } from "next";
import Link from "next/link";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Expense Tracking Software for Construction | Space AI",
  description:
    "Track construction expenses, receipts, and vendor payments with AI-powered categorization, approval workflows, and real-time budget visibility.",
  keywords: [
    "expense tracking software",
    "construction expense tracking",
    "receipt capture",
    "project expense management",
    "construction budgeting",
    "vendor payment tracking",
  ],
  alternates: {
    canonical: "https://pmspace.ai/tools/expense-tracking-software/",
  },
  openGraph: {
    title: "Expense Tracking Software for Construction | Space AI",
    description:
      "Control project spending with AI expense tracking, receipt capture, and budget visibility from Space AI.",
    url: "https://pmspace.ai/tools/expense-tracking-software/",
    type: "website",
  },
};

const faqs = [
  {
    question: "What is construction expense tracking software?",
    answer:
      "It is a tool that captures, categorizes, and tracks project-related spending such as materials, labor, equipment rentals, travel, and subcontractor payments. It gives project and finance teams real-time visibility into where money is going.",
  },
  {
    question: "Can it capture receipts automatically?",
    answer:
      "Yes. Space AI uses optical character recognition and AI classification to extract vendor names, amounts, dates, and categories from receipt photos and invoice uploads, reducing manual data entry.",
  },
  {
    question: "How does it help prevent budget overruns?",
    answer:
      "By comparing actual expenses against budget line items in real time, the software flags categories that are approaching or exceeding limits, giving project managers early warning before overruns become critical.",
  },
  {
    question: "Does it support approval workflows?",
    answer:
      "Yes. Expenses can be routed to project managers, controllers, or executives based on amount thresholds and project roles, ensuring proper oversight without slowing down field operations.",
  },
];

export default function ExpenseTrackingSoftwarePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <main className="bg-black text-white min-h-screen">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Expense Tracking Software for Construction
            </h1>
            <p className="text-lg md:text-xl text-gray-400">
              Capture receipts, categorize spending, and stay on budget with AI-powered expense tracking.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-16">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Control Project Spending Before It Controls You
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Construction projects involve constant spending across labor, materials, subcontractors, equipment, travel, and miscellaneous field costs. When expense tracking depends on paper receipts and delayed spreadsheets, project managers lose visibility into budget health until it is too late to correct course.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Space AI expense tracking software captures spending as it happens. Field teams upload receipts from their phones, AI extracts and categorizes the data, and dashboards show actuals against budget in real time. Finance and operations teams finally share the same view of project costs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Key Capabilities
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "AI Receipt Capture",
                    desc: "Extract vendor, amount, date, and category automatically from receipt photos and invoices.",
                  },
                  {
                    title: "Budget Comparison",
                    desc: "See actual expenses against budget line items in real time.",
                  },
                  {
                    title: "Approval Workflows",
                    desc: "Route expenses to the right approvers based on project role and amount.",
                  },
                  {
                    title: "Vendor Payment Tracking",
                    desc: "Monitor outstanding invoices and payment status across subcontractors and suppliers.",
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
                Why It Matters
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Accurate expense tracking improves cash-flow forecasting, reduces the risk of budget overruns, and simplifies month-end reconciliation. Project managers can make faster decisions about change orders and resource allocation when they trust the numbers.
              </p>
              <p className="text-gray-400 leading-relaxed">
                For finance teams, the system reduces manual entry, enforces coding consistency, and creates a clean audit trail for every project dollar spent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Related Tools
              </h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/tools/invoice-management-software/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Invoice Management Software
                </Link>
                <Link
                  href="/tools/construction-expense-management-software/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Expense Management Software
                </Link>
                <Link
                  href="/tools/roi-calculator/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  ROI Calculator
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
                Get Visibility Into Every Project Dollar
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Book a demo to see how Space AI expense tracking keeps projects on budget.
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
