import { notFound } from "next/navigation";
import { Metadata } from "next";
import { videoPosts } from "@/lib/videos";

export const dynamicParams = false;
export const revalidate = 3600;

export async function generateStaticParams() {
  return videoPosts.map((video) => ({
    slug: video.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const video = videoPosts.find((v) => v.slug === params.slug);

  if (!video) {
    notFound();
  }

  const pageUrl = `https://pmspace.ai/videos/${video.slug}/`;

  return {
    title: `${video.title} | Space AI`,
    description: video.description,
    openGraph: {
      title: video.title,
      description: video.description,
      url: pageUrl,
      type: "video.other",
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

export default function VideoPage({ params }: { params: { slug: string } }) {
  const video = videoPosts.find((v) => v.slug === params.slug);

  if (!video) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {video.title}
            </h1>
            <p className="text-xl text-gray-300">{video.description}</p>
          </div>

          {/* Video Player */}
          <div className="mb-12 rounded-lg overflow-hidden bg-black aspect-video">
            <iframe
              width="100%"
              height="100%"
              src={`${video.youtubeUrl.replace("watch?v=", "embed/")}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Projects?
            </h2>
            <p className="text-blue-100 mb-6">
              Learn how Space AI can help you manage construction projects more efficiently.
            </p>
            <a
              href="/try-it-now/"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Start Free Trial
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
