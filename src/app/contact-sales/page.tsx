import { Suspense } from 'react';
import { Metadata } from 'next';
import ContactForm from './ContactSalespage';

export const metadata: Metadata = {
  title: "Contact Sales | Space AI Construction Management Software",
  description: "Get in touch with Space AI sales. Learn how our AI construction platform can streamline your projects, reduce costs, and improve efficiency.",
  keywords: [
    "construction software sales",
    "Space AI pricing",
    "construction management demo",
    "enterprise construction software",
  ],
  alternates: {
    canonical: "https://pmspace.ai/contact-sales/",
  },
  openGraph: {
    title: "Contact Space AI Sales Team",
    description: "Discover how AI-powered construction management can transform your projects.",
    type: "website",
    url: "https://pmspace.ai/contact-sales/",
  },
};

// Fallback component to show while the client component loads
const LoadingFallback = () => (
  <div className="min-h-screen bg-black text-white py-16 flex items-center justify-center">
    <div className="text-center p-12 text-white/70">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-purple-500 mx-auto mb-4"></div>
      <p>Loading your customized request form...</p>
    </div>
  </div>
);

// This is the Server Component page
export default function ContactSalesPage() {
  return (
    // FIX: The Suspense Boundary resolves the useSearchParams build error
    <Suspense fallback={<LoadingFallback />}>
      <ContactForm />
    </Suspense>
  );
}