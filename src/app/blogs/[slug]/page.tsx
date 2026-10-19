// app/blogs/[slug]/page.tsx

import { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';
import BlogDetailClient from '@/components/BlogDetailClient';
import VeritasGraphAttribution from '@/components/VeritasGraphAttribution';
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/blogs';

const SITE_URL = 'https://pmspace.ai';

// Allow runtime params so we can handle legacy slugs at request time
export const dynamicParams = true;
export const revalidate = 3600;

// Generate metadata with canonical URL for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    if (params.slug === 'free-tier-construction-management-software-launch-playbook') {
      permanentRedirect('/blogs/free-tier-construction-management-software-launch');
    }
    if (params.slug === 'ai-for-schedule-slippage') {
      permanentRedirect('/blogs/how-ai-predicts-construction-delays');
    }
    notFound();
  }
  const canonicalUrl = `${SITE_URL}/blogs/${params.slug}/`;
  const absoluteImageUrl = post.imageSrc
    ? new URL(post.imageSrc, SITE_URL).toString()
    : `${SITE_URL}/assets/images/og-image.jpeg`;
  const imageAspectRatio = post.imageAspectRatio || '';
  const [imageWidth, imageHeight] = imageAspectRatio
    .split('/')
    .map((part) => Number.parseInt(part.trim(), 10));
  const ogImage = {
    url: absoluteImageUrl,
    secureUrl: absoluteImageUrl,
    width: Number.isFinite(imageWidth) ? imageWidth : 1200,
    height: Number.isFinite(imageHeight) ? imageHeight : 630,
    alt: `${post.title} | Space AI`,
    type: absoluteImageUrl.endsWith('.png') ? 'image/png' : 'image/jpeg',
  };

  return {
    title: `${post.title} | Space AI`,
    description: post.description || `Read about ${post.title} on the Space AI construction management blog.`,
    keywords: [
      'construction management blog',
      'Space AI insights',
      'construction technology',
      'project management tips',
      post.title.toLowerCase(),
      ...(post.targetKeyword ? [post.targetKeyword] : []),
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${post.title} | Space AI`,
      description: post.description,
      siteName: 'Space AI',
      type: 'article',
      url: canonicalUrl,
      images: [ogImage],
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified || post.datePublished,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Space AI`,
      description: post.description,
      images: [absoluteImageUrl],
      creator: '@pmspace0707',
    },
  };
}

// Generate static params for all blog posts (deduplicated)
export async function generateStaticParams() {
  const allPosts = getAllBlogPosts();
  const seen = new Set<string>();
  return allPosts
    .filter((post) => {
      if (seen.has(post.slug)) return false;
      seen.add(post.slug);
      return true;
    })
    .map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    if (params.slug === 'free-tier-construction-management-software-launch-playbook') {
      permanentRedirect('/blogs/free-tier-construction-management-software-launch');
    }
    if (params.slug === 'ai-for-schedule-slippage') {
      permanentRedirect('/blogs/how-ai-predicts-construction-delays');
    }
    notFound();
  }

  const allPosts = getAllBlogPosts();

  // Find the index of the current post
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);

  // Determine previous and next posts
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : undefined;
  const nextPost = currentIndex >= 0 && currentIndex < allPosts.length - 1
    ? allPosts[currentIndex + 1]
    : undefined;

  return (
    <>
      <BlogDetailClient post={post} prevPost={prevPost} nextPost={nextPost} />

      {/* VeritasGraph attribution section */}
      <section className="bg-black text-white py-12">
        <div className="container mx-auto max-w-5xl px-4">
          <VeritasGraphAttribution />
        </div>
      </section>
    </>
  );
}
