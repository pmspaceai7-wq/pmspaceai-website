import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Space AI',
  description: 'The page you are looking for does not exist. Explore our construction management software solutions.',
};

export default function NotFound() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Visual */}
        <div className="mb-12">
          <h1 className="text-8xl md:text-9xl font-bold text-blue-600 mb-4">404</h1>
          <p className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</p>
          <p className="text-lg text-gray-400 mb-8">
            The page you&apos;re looking for doesn&apos;t exist or may have been moved. Please check the URL or explore our platform below.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
          >
            Go to Homepage
          </Link>
          <Link
            href="/construction-management-software/"
            className="inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-3 rounded-lg transition-transform duration-300 ease-in-out"
          >
            Explore Solutions
          </Link>
        </div>

        {/* Quick Links Section */}
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
          <h2 className="text-xl font-bold mb-6">Popular Pages</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <li>
              <Link href="/construction-software-demo/" className="text-blue-400 hover:text-blue-300 transition-colors">
                → Book a Demo
              </Link>
            </li>
            <li>
              <Link href="/features/" className="text-blue-400 hover:text-blue-300 transition-colors">
                → Features
              </Link>
            </li>
            <li>
              <Link href="/alternatives/" className="text-blue-400 hover:text-blue-300 transition-colors">
                → Compare Alternatives
              </Link>
            </li>
            <li>
              <Link href="/pricing/" className="text-blue-400 hover:text-blue-300 transition-colors">
                → Pricing
              </Link>
            </li>
            <li>
              <Link href="/blogs/" className="text-blue-400 hover:text-blue-300 transition-colors">
                → Construction Insights
              </Link>
            </li>
            <li>
              <Link href="/contact-sales/" className="text-blue-400 hover:text-blue-300 transition-colors">
                → Contact Sales
              </Link>
            </li>
          </ul>
        </div>

        {/* SEO Text */}
        <div className="mt-12 text-sm text-gray-500">
          <p>
            If you believe this is an error, please <Link href="/contact-sales/" className="text-blue-400 hover:text-blue-300">contact our support team</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
