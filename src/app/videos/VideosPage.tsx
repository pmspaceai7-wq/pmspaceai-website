// app/videos/VideosPage.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { VideoPost } from "@/lib/videos";
import { Play } from "lucide-react";
import VideoModal from "@/components/VideoModal";

const VideosPage = ({ videoPosts }: { videoPosts: VideoPost[] }) => {
  const [selectedVideo, setSelectedVideo] = useState<VideoPost | null>(null);

  const openModal = (video: VideoPost) => {
    if (video.youtubeUrl) {
      setSelectedVideo(video);
      document.body.style.overflow = "hidden";
    }
  };

  const closeModal = () => {
    setSelectedVideo(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section id="videos" className="relative min-h-screen overflow-hidden bg-black py-10 sm:py-12 md:py-16">
      <div className="absolute inset-0 bg-[url('/assets/stars.png')] bg-repeat opacity-45" />
      <div className="absolute inset-0 bg-[url('/assets/images/contact-ai-black-background.png')] bg-cover bg-center opacity-55" />
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_0%,rgba(140,69,255,0.32)_0%,rgba(14,0,36,0.38)_45%,transparent_75%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(45%_35%_at_18%_28%,rgba(251,146,60,0.18)_0%,transparent_72%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(45%_35%_at_86%_78%,rgba(37,99,235,0.18)_0%,transparent_72%)]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center sm:mb-16"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
            Think Space AI
          </p>
          <h1 className="mb-4 bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgba(74,32,138,.55))] bg-clip-text pb-3 text-3xl font-bold tracking-tighter text-transparent sm:text-4xl md:mb-5 md:text-5xl">
            Space AI Video Gallery
          </h1>
          <p className="mx-auto max-w-3xl text-base font-light text-white/75 sm:text-lg">
            Watch our expert videos covering project planning, scheduling, risk management, and AI-powered solutions.
          </p>
        </motion.div>

        <h2 className="text-2xl font-bold text-white text-center mb-8">Video Library</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videoPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <button
                onClick={() => openModal(post)}
                className="group relative flex h-full w-full flex-col overflow-hidden rounded-lg border border-white/10 bg-black/45 text-left shadow-[0_18px_70px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-300/40 hover:bg-black/55 focus:outline-none focus:ring-2 focus:ring-orange-300"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  {post.imageSrc ? (
                    <div className="relative h-full w-full">
                      <Image
                        src={post.imageSrc}
                        alt={`${post.title} video thumbnail`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/45 transition duration-300 group-hover:bg-black/25">
                        <Play
                          className="text-white opacity-90 transition duration-300 group-hover:scale-110"
                          size={48}
                          fill="white"
                          strokeWidth={1}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-500 to-gray-600">
                      <div className="text-center text-white/80">
                        No Thumbnail Available
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-grow flex-col p-6">
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    <Link
                      href={`/videos/${post.slug}/`}
                      className="hover:text-orange-300 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-white/65 group-hover:text-white/85 sm:text-base">
                    {post.description}
                  </p>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <VideoModal
        youtubeUrl={selectedVideo?.youtubeUrl ?? null}
        title={selectedVideo?.title ?? ""}
        onClose={closeModal}
      />
    </section>
  );
};

export default VideosPage;
