import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';
import { getResource, getSlugsForCategory } from '@/lib/resources';

// Define the category for this page type
const CATEGORY = 'tools';

// Reject any slug not in generateStaticParams — returns 404 automatically
export const dynamicParams = false;
export const revalidate = 3600;

// Generate static pages at build time
export async function generateStaticParams() {
  return getSlugsForCategory(CATEGORY);
}

// Generate comprehensive metadata for SEO and social sharing
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const resource = getResource(CATEGORY, params.slug);

  if (!resource) {
    notFound();
  }

  // Assuming your domain is example.com, replace with your actual domain
  const pageUrl = `https://pmspace.ai/tools/${resource.slug}/`;

  return {
    title: `${resource.title} | Intelligence Center`,
    description: resource.description,
    keywords: resource.keywords || [],
    openGraph: {
      title: resource.title,
      description: resource.description,
      url: pageUrl,
      type: 'website',
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

export default function ResourceDetailPage({ params }: { params: { slug: string } }) {
  const resource = getResource(CATEGORY, params.slug);

  // If no resource is found, show the 404 page
  if (!resource) {
    notFound();
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <main className="container mx-auto px-4 py-12 sm:py-16">
        {/* Back Link */}
        <div className="hidden">
          <Link href="/usecases/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Use Cases</span>
          </Link>
        </div>

        {/* Section 1: Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          {/* Left Column: Text Content & CTA */}
          <div className="flex flex-col space-y-6 text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              {resource.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0">
              {resource.content}
            </p>
            <div className="pt-4">
              <Link
                href="/construction-software-demo/"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <span>Book A Demo</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Main Image */}
          <div className="w-full h-auto">
            <Image
              src={resource.image}
              alt={resource.title}
              width={720}
              height={480}
              className="rounded-xl shadow-2xl shadow-blue-900/20 border border-gray-800 object-cover w-full h-auto"
              priority // Load the main image faster
            />
          </div>
        </section>

        {/* Dynamically generate feature sections (Stacked Layout) */}
        {resource.features?.map((feature, index) => (
          <section key={index} className="flex flex-col gap-8 mb-24 items-center"> {/* Changed to flex-col */}
            {/* Image at the top */}
            <div className="w-full max-w-3xl h-auto"> {/* Added max-w-3xl for better control of image width */}
              <Image
                src={feature.image}
                alt={feature.title}
                width={720}
                height={480}
                className="rounded-xl shadow-2xl shadow-blue-900/20 border border-gray-800 object-cover w-full h-auto"
              />
            </div>
            {/* Text Content below the image */}
            <div className="flex flex-col space-y-4 text-center max-w-3xl"> {/* Added max-w-3xl for text alignment */}
              <h2 className="text-3xl md:text-4xl font-bold">
                {feature.title}
              </h2>
              <p className="text-lg text-gray-400">
                {feature.description}
              </p>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
