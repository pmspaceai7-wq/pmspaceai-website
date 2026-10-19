import React from "react";
import { CheckCircle, Info } from "lucide-react";

interface PageSummaryProps {
  answer: string;
  citations: string[];
  title?: string;
}

export default function PageSummary({ answer, citations, title = "Quick Summary" }: PageSummaryProps) {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center">
            <Info className="w-6 h-6 text-purple-400" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-white">{title}</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-3">Direct Answer</h3>
            <p className="text-lg text-white/90 leading-relaxed">
              {answer}
            </p>
          </div>
          
          <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-4">Citation Ready</h3>
            <ul className="space-y-3">
              {citations.map((citation, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-white/70">
                  <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                  <span>{citation}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
