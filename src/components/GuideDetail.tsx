"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { Guide } from '@/lib/guides';

export default function GuideDetailClient({ guide }: { guide: Guide }) {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Enhanced background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-black bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-30"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10"></div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>

      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Back navigation */}
        <div className="mb-8">
          <Link 
            href="/guides/" 
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Guides</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-5xl mx-auto mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6 pb-4">
            {guide.title}
          </h1>
          
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-6">
            {guide.description}
          </p>

          {/* Guide metadata */}
          <div className="flex justify-center gap-6 text-sm text-white/60">
            <span>By {guide.author}</span>
            <span>•</span>
            <span>{guide.date}</span>
            <span>•</span>
            <span>{guide.readTime}</span>
          </div>
        </div>

        {/* Main content section */}
        <div className="max-w-4xl mx-auto">
          {/* Image Section */}
          {guide.imageSrc && (
            <div className="relative w-full h-96 rounded-xl overflow-hidden mb-12 border border-white/10">
              <Image
                src={guide.imageSrc}
                alt={guide.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Content Section */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 sm:p-12">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
              <p className="text-white/70 leading-relaxed mb-8">
                {guide.description}
              </p>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8">Getting Started</h2>
              <p className="text-white/70 leading-relaxed">
                Learn how to get the most out of this feature by exploring the key concepts and best practices outlined in this comprehensive guide.
              </p>

              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/guides/" 
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-200"
                  >
                    ← Back to Guides
                  </Link>
                  <Link 
                    href="/contact-sales/" 
                    className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200"
                  >
                    Get Started →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
