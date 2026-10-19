import { toolsData } from "./core";
import { getAllGuideArticles } from "./guideArticles";

export interface Guide {
  id: string;
  slug: string;
  title: string;
  description: string;
  imageSrc: string;
  href: string;
  author: string;
  date: string;
  readTime: string;
}

const DEFAULT_GUIDE_IMAGE = "/assets/images/crm.jpg";

const transformToolsToGuides = (): Guide[] => {
  return toolsData.map((tool) => ({
    id: tool.id,
    slug: tool.slug,
    title: tool.title,
    description: tool.description,
    imageSrc: tool.imageSrc,
    href: `/guides/${tool.slug}`,
    author: "SPACE AI Team",
    date: "2026-04-30",
    readTime: "5 min read",
  }));
};

const transformArticlesToGuides = (): Guide[] => {
  return getAllGuideArticles().map((article) => ({
    id: `article-${article.slug}`,
    slug: article.slug,
    title: article.title,
    description: article.description,
    imageSrc: article.imageSrc || DEFAULT_GUIDE_IMAGE,
    href: `/guides/${article.slug}`,
    author: "SPACE AI Team",
    date: "2026-04-30",
    readTime: article.readTime,
  }));
};

const mergeGuidesBySlug = (...groups: Guide[][]): Guide[] => {
  const merged = new Map<string, Guide>();

  groups.flat().forEach((guide) => {
    if (!merged.has(guide.slug)) {
      merged.set(guide.slug, guide);
    }
  });

  return Array.from(merged.values());
};

export const guidesData: Guide[] = mergeGuidesBySlug(
  transformToolsToGuides(),
  transformArticlesToGuides()
);

export const getAllGuides = () => guidesData;

export const getGuideBySlug = (slug: string) => {
  return guidesData.find((guide) => guide.slug === slug);
};
