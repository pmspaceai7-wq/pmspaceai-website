// components/VideoModal.tsx
"use client";

import { X } from 'lucide-react'; 
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, Suspense } from 'react';

interface VideoModalProps {
  youtubeUrl: string | null;
  title: string;
  onClose: () => void;
}

const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
};

const contentVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
    exit: { y: "100%", opacity: 0 }
};

// Convert YouTube watch URL to embed URL
const getYouTubeEmbedUrl = (url: string): string => {
  try {
    const urlObj = new URL(url);
    const videoId = urlObj.searchParams.get('v');
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    }
    return url;
  } catch {
    return url;
  }
};

// Loading skeleton for video player
const VideoSkeleton = () => (
  <div className="absolute top-0 left-0 w-full h-full bg-gray-800 animate-pulse flex items-center justify-center">
    <div className="text-white/60">Loading video...</div>
  </div>
);

// YouTube iframe component
const YouTubeEmbed = ({ url, title }: { url: string; title: string }) => {
  const embedUrl = getYouTubeEmbedUrl(url);
  
  return (
    <iframe
      src={embedUrl}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="absolute top-0 left-0 w-full h-full border-0"
      loading="lazy"
    />
  );
};

const VideoModal = ({ youtubeUrl, title, onClose }: VideoModalProps) => {
  const isOpen = !!youtubeUrl;

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={onClose} 
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
        >
          <motion.div 
            className="w-full max-w-4xl max-h-full bg-black rounded-lg shadow-2xl relative border border-white/10"
            onClick={(e) => e.stopPropagation()} 
            variants={contentVariants}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 z-50 p-2 bg-white text-black rounded-full shadow-lg hover:bg-gray-200 transition focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close video player"
            >
              <X size={24} /> 
            </button>

            <div className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">{title}</h2>
                {/* Responsive 16:9 Video Container following Next.js best practices */}
                <div className="relative pt-[56.25%] bg-gray-900 rounded-lg overflow-hidden">
                    <Suspense fallback={<VideoSkeleton />}>
                      <YouTubeEmbed url={youtubeUrl || ''} title={title} />
                    </Suspense>
                </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;