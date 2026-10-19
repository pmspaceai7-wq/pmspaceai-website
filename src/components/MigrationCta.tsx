"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Truck, FileText } from "lucide-react";

interface MigrationCtaProps {
  competitor?: string;
}

// Shared migration CTA block (Task 28): links to the "How We Migrate You" guide
// and the white-glove migration/demo path. Wired into vs, plural, and singular
// competitor pages.
export default function MigrationCta({ competitor }: MigrationCtaProps) {
  return (
    <section className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-purple-500/30 rounded-2xl p-8 md:p-10"
      >
        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              We Handle the Migration{competitor ? ` from ${competitor}` : ""}. You Handle the Build.
            </h2>
            <p className="text-white/70 mb-5 max-w-2xl">
              Projects, documents, RFIs, submittals, schedules, and contacts — our
              white-glove migration team moves it all, reconfigures your workflows,
              and keeps your team productive. Most teams go live in 1–2 weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/guides/how-we-migrate-you/">
                <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  How We Migrate You
                </button>
              </Link>
              <Link href="/construction-software-demo/">
                <button className="bg-white/10 border border-white/30 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors inline-flex items-center gap-2">
                  <Truck className="w-4 h-4" />
                  Start White-Glove Migration
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Truck className="w-16 h-16 text-purple-400/60" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
