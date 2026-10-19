import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Try Space AI Free | AI Construction Management Software Demo",
  description: "Start your free trial of Space AI. No credit card required. Experience intelligent scheduling, document processing, and predictive analytics.",
  keywords: [
    "free construction software trial",
    "Space AI demo",
    "construction management free trial",
    "AI project management demo",
    "construction software demo",
  ],
  alternates: {
    canonical: "https://pmspace.ai/try-it-now/",
  },
  openGraph: {
    title: "Try Space AI Free - AI Construction Management",
    description: "Start your free trial. No credit card required. Experience AI-powered construction management.",
    type: "website",
    url: "https://pmspace.ai/try-it-now/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Try Space AI Free - AI Construction Management",
    description: "Start your free trial. No credit card required.",
  },
};

export default function TryItNowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
