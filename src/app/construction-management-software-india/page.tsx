import type { Metadata } from "next";
import { regionalPages, REGIONAL_ALTERNATES } from "@/lib/regionalPages";
import { RegionalPage } from "@/components/RegionalPage";

const region = regionalPages.india;

export const metadata: Metadata = {
  title: region.metaTitle,
  description: region.metaDescription,
  keywords: region.keywords,
  alternates: {
    canonical: region.canonical,
    languages: REGIONAL_ALTERNATES,
  },
  openGraph: {
    title: region.metaTitle,
    description: region.metaDescription,
    url: region.canonical,
    type: "website",
    images: [
      {
        url: region.ogImage || `${region.canonical}/og.png`,
        width: 1200,
        height: 630,
        alt: region.metaTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: region.metaTitle,
    description: region.metaDescription,
    images: [region.ogImage || `${region.canonical}/og.png`],
  },
};

export default function Page() {
  return <RegionalPage region={region} />;
}
