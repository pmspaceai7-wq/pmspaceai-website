import { blogTemplateHtml, blogTemplateStyles } from '@/lib/blogTemplateHtml';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PMSPACE AI — Decision Intelligence Platform | Space AI',
  description:
    'Bring every construction workflow together with SPACE AI. Powered by the Construction Query Engine (CQE), it delivers instant answers, intelligent automation and connected project insights.',
  openGraph: {
    title: 'Think Construction. Think Space AI — Decision Intelligence Platform',
    description:
      'Bring every construction workflow together with SPACE AI. Powered by the Construction Query Engine (CQE), it delivers instant answers, intelligent automation and connected project insights.',
  },
  alternates: {
    canonical: 'https://pmspace.ai/blogs/think-construction-space-ai-decision-intelligence-platform/',
  },
};

export default function BlogPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: blogTemplateStyles }} />
      <div
        className="blog-template"
        dangerouslySetInnerHTML={{ __html: blogTemplateHtml }}
      />
    </>
  );
}
