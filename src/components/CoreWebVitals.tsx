// src/components/CoreWebVitals.tsx
// Core Web Vitals Optimization Components

"use client";

import React, { useEffect, useState } from "react";

// ============================================================================
// PRELOAD CRITICAL RESOURCES
// Add to layout.tsx head for critical CSS/fonts
// ============================================================================

export function CriticalResourceHints() {
  return (
    <>
      {/* DNS Prefetch for external domains */}
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      
      {/* Preconnect for critical external resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
    </>
  );
}

// ============================================================================
// LAZY IMAGE COMPONENT WITH BLUR PLACEHOLDER
// Optimizes LCP and CLS
// ============================================================================

interface LazyImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  blurDataURL?: string;
}

export function LazyImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
  blurDataURL,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  // Generate blur placeholder if not provided
  const defaultBlur = `data:image/svg+xml;base64,${Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <rect width="100%" height="100%" fill="#1f2937"/>
    </svg>`
  ).toString('base64')}`;
  
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: `${width}/${height}` }}
    >
      {/* Blur placeholder */}
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-gray-800 animate-pulse"
          style={{
            backgroundImage: `url(${blurDataURL || defaultBlur})`,
            backgroundSize: 'cover',
            filter: 'blur(20px)',
            transform: 'scale(1.1)',
          }}
        />
      )}
      
      {/* Actual image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={error ? '/assets/images/placeholder.png' : src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        className={`
          w-full h-full object-cover
          transition-opacity duration-300
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
        `}
      />
    </div>
  );
}

// ============================================================================
// INTERSECTION OBSERVER HOOK FOR LAZY LOADING
// ============================================================================

export function useIntersectionObserver(
  ref: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  
  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {
      rootMargin: '100px',
      ...options,
    });
    
    observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, [ref, options]);
  
  return isIntersecting;
}

// ============================================================================
// DEFER NON-CRITICAL SCRIPTS
// ============================================================================

interface DeferredScriptProps {
  src: string;
  strategy?: 'afterInteractive' | 'lazyOnload' | 'worker';
}

export function DeferredScript({ src, strategy = 'lazyOnload' }: DeferredScriptProps) {
  useEffect(() => {
    if (strategy === 'lazyOnload') {
      // Load after page is fully loaded and idle
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          const script = document.createElement('script');
          script.src = src;
          script.async = true;
          document.body.appendChild(script);
        });
      } else {
        // Fallback for Safari
        setTimeout(() => {
          const script = document.createElement('script');
          script.src = src;
          script.async = true;
          document.body.appendChild(script);
        }, 2000);
      }
    }
  }, [src, strategy]);
  
  return null;
}

// ============================================================================
// CLS PREVENTION WRAPPER
// Reserves space for dynamic content
// ============================================================================

interface AspectRatioBoxProps {
  ratio: number; // width / height, e.g., 16/9 = 1.777
  children: React.ReactNode;
  className?: string;
}

export function AspectRatioBox({ ratio, children, className = "" }: AspectRatioBoxProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{ paddingBottom: `${100 / ratio}%` }}
    >
      <div className="absolute inset-0">
        {children}
      </div>
    </div>
  );
}

// ============================================================================
// SKELETON LOADER FOR CLS PREVENTION
// ============================================================================

interface SkeletonProps {
  variant?: 'text' | 'rectangular' | 'circular';
  width?: string | number;
  height?: string | number;
  className?: string;
}

export function Skeleton({ 
  variant = 'rectangular', 
  width = '100%', 
  height = '100%',
  className = "" 
}: SkeletonProps) {
  const baseStyles = "bg-gray-800 animate-pulse";
  
  const variantStyles = {
    text: "rounded",
    rectangular: "rounded-lg",
    circular: "rounded-full",
  };
  
  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      style={{ width, height }}
    />
  );
}

// ============================================================================
// PERFORMANCE MONITORING
// ============================================================================

export function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Report Web Vitals
    const reportWebVitals = (metric: { name: string; value: number }) => {
      // Send to analytics
      if (window.gtag) {
        window.gtag('event', metric.name, {
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          event_label: 'Web Vitals',
          non_interaction: true,
        });
      }
      
      // Log in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Web Vitals] ${metric.name}:`, metric.value);
      }
    };
    
    // Observe LCP
    if ('PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        reportWebVitals({ name: 'LCP', value: lastEntry.startTime });
      });
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      
      // Observe FID
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const eventEntry = entry as PerformanceEventTiming;
          if (eventEntry.processingStart) {
            reportWebVitals({ name: 'FID', value: eventEntry.processingStart - eventEntry.startTime });
          }
        });
      });
      fidObserver.observe({ type: 'first-input', buffered: true });
      
      // Observe CLS
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as LayoutShift).hadRecentInput) {
            clsValue += (entry as LayoutShift).value;
          }
        }
        reportWebVitals({ name: 'CLS', value: clsValue });
      });
      clsObserver.observe({ type: 'layout-shift', buffered: true });
    }
  }, []);
  
  return null;
}

// Type definitions
interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default LazyImage;
