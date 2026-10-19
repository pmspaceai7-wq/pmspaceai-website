import type { Metadata, Viewport } from "next";
import Script from 'next/script';
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import WhatsAppButton from "@/components/WhatsappButton";
import PageLastUpdated from "@/components/PageLastUpdated";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import GlobalFAQSchema from "@/components/GlobalFAQSchema";
import OptionalCopilotProvider from "@/components/OptionalCopilotProvider";
import InnerPageTopBackground from "@/components/InnerPageTopBackground";

const SITE_URL = "https://pmspace.ai";
const shouldLoadAnalytics = process.env.NODE_ENV === "production";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "Space AI - AI-Powered Construction Management Software",
  description: "Space AI is an AI-powered construction management software for scheduling, cost tracking, and project delivery. Reduce delays by 23%. Start your free trial today.",
  keywords: ["construction management software", "construction project management", "AI construction software", "construction scheduling", "project management for construction", "BIM software", "construction cost management"],
  metadataBase: new URL(SITE_URL),
  verification: {
    google: "RwZwSyRwzk7fxxZPEX76qxLVVGO5np1LWzjFpBd2tV4",
  },
  openGraph: {
    title: "Space AI - AI-Powered Construction Management Software",
    description: "Space AI is an AI-powered construction management software for scheduling, cost tracking, and project delivery. Reduce delays by 23%.",
    url: SITE_URL,
    siteName: "Space AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/assets/images/og-image.jpeg`,
        width: 1200,
        height: 630,
        alt: "Space AI - AI Construction Management Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Space AI - AI-Powered Construction Management Software",
    description: "Space AI is an AI-powered construction management software for scheduling, cost tracking, and project delivery.",
    images: [`${SITE_URL}/assets/images/og-image.jpeg`],
    creator: "@pmspace0707",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
       
        {/* The GTM script is wrapped in a template literal `{`...`}` */}
        {shouldLoadAnalytics ? (
          <>
            <Script id="google-tag-manager" strategy="afterInteractive">
              {`
               (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KCTXZF6F');
              `}
            </Script>
            <Script id="google-ads-src" async src="https://www.googletagmanager.com/gtag/js?id=AW-17519634532" ></Script>
            <Script id="google-ads-init">
              {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

          gtag('config', 'AW-17519634532');
          `}
            </Script>
          </>
        ) : null}
      {/* Preload hero background image for LCP */}
      <link rel="preload" as="image" href="/assets/images/contact-ai-black-background.png" fetchPriority="high" />
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://pmspace.ai/#organization",
              name: "Space AI",
              url: "https://pmspace.ai",
              logo: "https://pmspace.ai/assets/images/icononly_transparent_nobuffer.png",
              description:
                "Space AI is an AI-powered construction management software platform for building owners, developers, and construction stakeholders. Provides scheduling, cost tracking, BIM integration, and predictive analytics for construction projects.",
              foundingDate: "2025",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              areaServed: ["IN", "US", "SG", "AE"],
              founders: [
                {
                  "@type": "Person",
                  name: "Bibin Prathap",
                  url: "https://bibinprathap.com",
                  sameAs: "https://bibinprathap.com",
                },
              ],
              sameAs: [
                "https://www.linkedin.com/company/pmspace",
                "https://x.com/pmspace0707",
                "https://www.instagram.com/space_ai77/",
                "https://www.youtube.com/@spaceai-7",
                "https://space-sign.ai",
                "https://spacecapture.ai",
                "https://spacelizit.com",
                "https://spacehr.net",
                "https://spacelean.ai",
                "https://spacenexus.net",
                "https://spacecrm.net",
                "https://github.com/bibinprathap/VeritasGraph",
              ],
              owns: [
                {
                  "@type": "SoftwareApplication",
                  name: "Space Sign",
                  url: "https://space-sign.ai",
                  applicationCategory: "BusinessApplication",
                  description: "AI-powered contract analysis and electronic signature platform for legal, sales, and compliance teams.",
                },
                {
                  "@type": "SoftwareApplication",
                  name: "Space Capture",
                  url: "https://spacecapture.ai",
                  applicationCategory: "BusinessApplication",
                  description: "AI-powered field inspection and audit software for construction and industrial teams.",
                },
                {
                  "@type": "SoftwareApplication",
                  name: "Space Lizit",
                  url: "https://spacelizit.com",
                  applicationCategory: "LegalApplication",
                  description: "AI immigration automation software for law firms handling H-1B, L-1, O-1, and EB-2 NIW petitions.",
                },
                {
                  "@type": "SoftwareApplication",
                  name: "SpaceHR",
                  url: "https://spacehr.net",
                  applicationCategory: "BusinessApplication",
                  description: "AI-powered HRMS with payroll automation, performance management, and workforce analytics.",
                },
                {
                  "@type": "SoftwareApplication",
                  name: "SpaceLean",
                  url: "https://spacelean.ai",
                  applicationCategory: "BusinessApplication",
                  description: "AI-native lean project management and construction scheduling platform with BIM integration.",
                },
                {
                  "@type": "SoftwareApplication",
                  name: "SpaceNexus",
                  url: "https://spacenexus.net",
                  applicationCategory: "BusinessApplication",
                  description: "Enterprise-grade virtual data room for M&A, capital raising, and secure legal document sharing.",
                },
                {
                  "@type": "SoftwareApplication",
                  name: "SpaceCRM",
                  url: "https://spacecrm.net",
                  applicationCategory: "BusinessApplication",
                  description: "AI-powered multi-channel CRM automating outreach across email, LinkedIn, and WhatsApp.",
                },
              ],
            }),
          }}
        />
        {/* SoftwareApplication Schema for Rich Snippets - Construction Management (with VeritasGraph entity relationship) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Space AI - AI Construction Management Software",
              applicationCategory: "BusinessApplication",
              applicationSubCategory: "Construction Project Management Software",
              operatingSystem: "Web, iOS, Android",
              url: SITE_URL,
              description: "AI-powered construction management software for scheduling, cost tracking, BIM integration, and project delivery. Designed for general contractors, project managers, and construction teams.",
              keywords: "construction management software, construction project management, AI construction software, BIM software, construction scheduling, project management for construction",
              featureList: [
                "AI search with source attribution",
                "Knowledge graph reasoning",
                "Verifiable citations on every AI answer",
              ],
              isBasedOn: {
                "@id": "https://github.com/bibinprathap/VeritasGraph#software",
                "@type": "SoftwareSourceCode",
                name: "VeritasGraph",
                codeRepository: "https://github.com/bibinprathap/VeritasGraph",
                url: "https://bibinprathap.github.io/VeritasGraph/index.html",
              },
              sameAs: [
                "https://github.com/bibinprathap/VeritasGraph",
                "https://bibinprathap.github.io/VeritasGraph/index.html",
              ],
              offers: {
                "@type": "AggregateOffer",
                lowPrice: "0",
                highPrice: "999",
                priceCurrency: "USD",
                offerCount: "3",
              },
              provider: {
                "@id": "https://pmspace.ai/#organization",
              },
              author: {
                "@type": "Person",
                name: "Bibin Prathap",
                url: "https://bibinprathap.com",
              },
              softwareHelp: {
                "@type": "CreativeWork",
                url: "https://pmspace.ai/docs/",
              },
            }),
          }}
        />
        {/* WebSite Schema for Sitelinks Search Box */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://pmspace.ai/#website",
              name: "Space AI",
              url: "https://pmspace.ai",
              isBasedOn: {
                "@id": "https://github.com/bibinprathap/VeritasGraph#software",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://pmspace.ai/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        {/* VeritasGraph SoftwareSourceCode entity - shared knowledge-graph framework */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareSourceCode",
              "@id": "https://github.com/bibinprathap/VeritasGraph#software",
              name: "VeritasGraph",
              description:
                "VeritasGraph is an open-source GraphRAG knowledge-graph framework that grounds AI answers with verifiable citations and multi-hop reasoning. Space AI uses VeritasGraph for source attribution on AI search and answers.",
              codeRepository: "https://github.com/bibinprathap/VeritasGraph",
              url: "https://bibinprathap.github.io/VeritasGraph/index.html",
              programmingLanguage: ["TypeScript", "Python"],
              license: "https://github.com/bibinprathap/VeritasGraph/blob/main/LICENSE",
              author: {
                "@type": "Person",
                name: "Bibin Prathap",
                url: "https://bibinprathap.com",
              },
            }),
          }}
        />
      </head>

      <body className={twMerge("relative bg-black font-sans", inter.variable)}>        <a href="#main-content" className="skip-link">Skip to main content</a>
        <InnerPageTopBackground />
        <div className="relative z-10">
          <Header />
          <Breadcrumbs />
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-KCTXZF6F"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          <OptionalCopilotProvider publicApiKey={process.env.NEXT_PUBLIC_COPILOTKIT_PUBLIC_API_KEY}>
            <main id="main-content" tabIndex={-1} className="page-content-density">{children}</main>
          </OptionalCopilotProvider>

          <PageLastUpdated />
          <GlobalFAQSchema />
          <WhatsAppButton/>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
