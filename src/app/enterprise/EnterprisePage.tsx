// src/app/enterprise/EnterprisePage.tsx

"use client";

import { useState } from "react";
import { pricingPlans, faqs } from "@/sections/dummyData";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Only keep the Enterprise plan from the dummy data
const enterprisePlan = pricingPlans.find(plan => plan.id === 'enterprise');

export default function EnterprisePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Check if enterprisePlan is found. If not, return a fallback UI.
  // This prevents the 'possibly undefined' TypeScript error.
  if (!enterprisePlan) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-xl text-gray-400">Enterprise plan data not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Side Image */}
      <section className="relative overflow-hidden bg-black text-white min-h-fit py-4 lg:py-8">
        {/* Background radial gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(140,69,255,0.15),transparent_70%)]"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4">
                Do more with{" "}
                <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Enterprise
                </span>
              </h1>
              <p className="text-base sm:text-lg text-white/70 mb-6 leading-relaxed">
                Customize your plan, pricing and security settings on our Enterprise Edition.
                <span className="block mt-2">Request a demo today.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/construction-software-demo/">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    Contact sales
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </motion.div>
                </Link>
              </div>
            </motion.div>

            {/* Right Image/Mockup */}
            <motion.div
              className="relative mt-4 lg:mt-0"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="relative w-full h-auto min-h-[400px] mx-auto rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/assets/images/constructionsoftwareforenterprises.png"
                  alt="Enterprise dashboard"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Enhanced Enterprise Features Section */}
      <section className="py-6 lg:py-8 bg-black text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 bg-clip-text text-transparent mb-4 py-4">
                Enterprise Plan
              </h2>
              <p className="text-lg text-gray-300">
                {enterprisePlan.description}
              </p>
            </div>
            <div className="bg-gray-900 rounded-3xl p-8 border border-gray-700 shadow-xl">
              <div className="text-center mb-8">
                <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 bg-clip-text text-transparent mb-2 py-4">
                  {enterprisePlan.price}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {enterprisePlan.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-green-500 w-5 h-5 mt-1 flex-shrink-0" />
                    <span className="text-gray-200 text-base">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 text-center">
                <Link href="/construction-software-demo/">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    {enterprisePlan.cta}
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </motion.div>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-20 lg:py-10 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Find quick answers to common questions about our enterprise platform and custom solutions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.id} className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-gray-600 hover:scale-[1.02]">
                <button
                  onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
                  className="w-full px-6 lg:px-8 py-6 text-left flex justify-between items-center text-lg lg:text-xl font-semibold hover:bg-gray-800/50 transition-all duration-300 group"
                >
                  <span className="text-gray-100 group-hover:text-white transition-colors pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeFaq === faq.id
                        ? 'bg-blue-500 text-white rotate-180'
                        : 'bg-gray-700 text-gray-400 group-hover:bg-gray-600 group-hover:text-gray-300'
                    }`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${
                  activeFaq === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 lg:px-8 pb-6">
                    <div className="border-t border-gray-700 pt-6">
                      <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-4">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Construction Management?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of construction professionals who trust Space AI to deliver projects on time and under budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* The a tags here are fine because they are not nested */}
            <a href="/construction-software-demo/" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Sales
            </a>
            <a href="/construction-software-demo/" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Request A Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}