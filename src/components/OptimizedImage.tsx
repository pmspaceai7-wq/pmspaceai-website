"use client";

/**
 * OptimizedImage Component
 * Task 12: Implement Lazy Loading for Images
 * Task 13: Add WebP Image Format Support
 * 
 * This component provides:
 * - Native lazy loading with loading="lazy"
 * - WebP format with fallback
 * - Blur placeholder for better perceived performance
 * - Responsive srcSet generation
 * - Proper aspect ratio to prevent CLS
 */

import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad'> {
  /** Enable blur-up placeholder effect */
  withBlur?: boolean;
  /** Custom blur data URL (base64) */
  blurDataURL?: string;
  /** Priority loading (above the fold images) */
  priority?: boolean;
  /** Aspect ratio for skeleton loader (e.g., "16/9", "4/3", "1/1") */
  aspectRatio?: string;
  /** Enable fade-in animation on load */
  fadeIn?: boolean;
}

/**
 * Low-quality image placeholder generator
 * Creates a small SVG shimmer placeholder
 */
const shimmerPlaceholder = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#1a1a2e" offset="20%" />
      <stop stop-color="#2d2d44" offset="50%" />
      <stop stop-color="#1a1a2e" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#1a1a2e" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  withBlur = true,
  blurDataURL,
  priority = false,
  aspectRatio,
  fadeIn = true,
  className = "",
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Generate shimmer placeholder if no custom blur provided
  const placeholderUrl = blurDataURL || 
    `data:image/svg+xml;base64,${toBase64(shimmerPlaceholder(Number(width) || 700, Number(height) || 475))}`;

  // Calculate aspect ratio style if provided
  const aspectStyle = aspectRatio ? { aspectRatio } : {};

  // Error fallback image
  const errorFallback = "/assets/images/placeholder.png";

  return (
    <div 
      className={`relative overflow-hidden ${aspectRatio ? '' : ''}`}
      style={aspectStyle}
    >
      <Image
        src={hasError ? errorFallback : src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        priority={priority}
        placeholder={withBlur ? "blur" : "empty"}
        blurDataURL={withBlur ? placeholderUrl : undefined}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`
          ${className}
          ${fadeIn ? 'transition-opacity duration-500' : ''}
          ${fadeIn && !isLoaded ? 'opacity-0' : 'opacity-100'}
        `}
        // Enable modern formats (WebP, AVIF) via Next.js Image Optimization
        unoptimized={false}
        {...props}
      />
    </div>
  );
}

/**
 * Picture component with explicit WebP support and fallback
 * Use this when you need explicit format control
 */
interface PictureProps {
  src: string;
  webpSrc?: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export function Picture({
  src,
  webpSrc,
  alt,
  width,
  height,
  className = "",
  priority = false,
}: PictureProps) {
  // Generate WebP path if not provided
  const webpPath = webpSrc || src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  
  return (
    <picture>
      <source srcSet={webpPath} type="image/webp" />
      <source srcSet={src} type={src.endsWith('.png') ? 'image/png' : 'image/jpeg'} />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={className}
      />
    </picture>
  );
}

/**
 * Responsive image sizes for common use cases
 */
export const imageSizes = {
  thumbnail: "(max-width: 640px) 100vw, 150px",
  card: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  hero: "(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px",
  fullWidth: "100vw",
  halfWidth: "(max-width: 768px) 100vw, 50vw",
};

/**
 * Preload critical images
 * Use in head or layout for above-the-fold images
 */
export function PreloadImage({ src, as = "image" }: { src: string; as?: string }) {
  return (
    <link
      rel="preload"
      as={as}
      href={src}
      // @ts-ignore - fetchpriority is valid but not in types
      fetchpriority="high"
    />
  );
}
