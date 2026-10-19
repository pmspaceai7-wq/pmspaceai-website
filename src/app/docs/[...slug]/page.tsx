import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DocDetailPage from "@/components/docs/DocDetailPage";
import { getDocPageBySlug, getDocsStaticParams } from "@/lib/docs";

type PageProps = {
  params: {
    slug: string[];
  };
};

export const revalidate = 3600;

export function generateStaticParams() {
  return getDocsStaticParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const page = getDocPageBySlug(params.slug);

  if (!page) return {};

  return {
    title: `${page.title} | Space AI Docs`,
    description: page.description,
    alternates: {
      canonical: `https://pmspace.ai${page.path}`,
    },
    openGraph: {
      title: `${page.title} | Space AI Docs`,
      description: page.description,
      url: `https://pmspace.ai${page.path}`,
      type: "article",
    },
  };
}

export default function DynamicDocsPage({ params }: PageProps) {
  const page = getDocPageBySlug(params.slug);

  if (!page) {
    notFound();
  }

  return <DocDetailPage page={page} />;
}
