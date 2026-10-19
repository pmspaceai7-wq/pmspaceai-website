"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Search, BookOpen, ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { glossaryTerms, categories, GlossaryTerm } from "@/lib/glossaryTerms";

export default function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null);

  const filteredTerms = glossaryTerms.filter((term) => {
    const matchesSearch =
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const groupedTerms = filteredTerms.reduce((acc, term) => {
    const firstLetter = term.term[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(term);
    return acc;
  }, {} as Record<string, GlossaryTerm[]>);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-10 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-4">
            <BookOpen className="w-12 h-12 text-purple-400" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
            Glossary of Construction AI
          </h1>
          <p className="text-base md:text-lg text-white/70 font-light mb-6 max-w-3xl mx-auto">
            Your comprehensive guide to artificial intelligence terminology in
            construction and project management. Understand the technology
            transforming our industry.
          </p>
        </motion.div>
      </section>

      {/* Search and Filter */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search Input */}
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Search terms..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50"
              />
            </div>
            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
            >
              {categories.map((category) => (
                <option key={category} value={category} className="bg-gray-900">
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Results count */}
          <p className="text-white/60 mb-8">
            Showing {filteredTerms.length} of {glossaryTerms.length} terms
          </p>
        </div>
      </section>

      {/* Glossary Terms */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          {Object.keys(groupedTerms)
            .sort()
            .map((letter) => (
              <motion.div
                key={letter}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold text-purple-400 mb-4 sticky top-0 bg-black py-2">
                  {letter}
                </h2>
                <div className="space-y-4">
                  {groupedTerms[letter].map((term, index) => (
                    <div
                      key={index}
                      className="bg-gray-900/50 border border-white/10 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() =>
                          setExpandedTerm(
                            expandedTerm === term.term ? null : term.term
                          )
                        }
                        className="w-full p-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                      >
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            {term.term}
                          </h3>
                          <span className="text-sm text-purple-400">
                            {term.category}
                          </span>
                        </div>
                        {expandedTerm === term.term ? (
                          <ChevronDown className="w-5 h-5 text-white/60" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-white/60" />
                        )}
                      </button>
                      {expandedTerm === term.term && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="px-4 pb-4 border-t border-white/10"
                        >
                          <p className="text-white/80 mt-4">{term.definition}</p>
                          {term.relatedTerms && term.relatedTerms.length > 0 && (
                            <div className="mt-4">
                              <p className="text-sm text-white/60 mb-2">
                                Related terms:
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {term.relatedTerms.map((related, i) => (
                                  <span
                                    key={i}
                                    className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm cursor-pointer hover:bg-purple-500/30"
                                    onClick={() => {
                                      setSearchTerm(related);
                                      setExpandedTerm(null);
                                    }}
                                  >
                                    {related}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/30 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            See These Technologies in Action
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Ready to experience AI-powered construction management? Book a demo
            to see how Space AI brings these concepts to life.
          </p>
          <Link href="/construction-software-demo/">
            <button className="bg-white text-black font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors">
              Book a Demo
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
