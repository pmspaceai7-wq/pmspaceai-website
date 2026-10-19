// src/components/LastUpdated.tsx
// Task 45: Last Updated Component - Show freshness signals on content

import { Calendar, RefreshCw } from "lucide-react";

interface LastUpdatedProps {
  datePublished: string;
  dateModified?: string;
  showIcon?: boolean;
  className?: string;
}

export function LastUpdated({ 
  datePublished, 
  dateModified,
  showIcon = true,
  className = ""
}: LastUpdatedProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const displayDate = dateModified || datePublished;
  const isUpdated = dateModified && dateModified !== datePublished;

  return (
    <div className={`flex items-center gap-2 text-sm text-white/60 ${className}`}>
      {showIcon && (
        isUpdated ? (
          <RefreshCw className="w-4 h-4" />
        ) : (
          <Calendar className="w-4 h-4" />
        )
      )}
      <span>
        {isUpdated ? "Last updated: " : "Published: "}
        <time dateTime={displayDate}>{formatDate(displayDate)}</time>
      </span>
    </div>
  );
}

// Badge style for prominent display
export function LastUpdatedBadge({ 
  datePublished, 
  dateModified 
}: LastUpdatedProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const displayDate = dateModified || datePublished;
  const isUpdated = dateModified && dateModified !== datePublished;

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-sm">
      <RefreshCw className="w-3.5 h-3.5 text-green-400" />
      <span className="text-green-400 font-medium">
        {isUpdated ? "Updated" : "Published"}: {formatDate(displayDate)}
      </span>
    </div>
  );
}

// Compact inline version
export function LastUpdatedInline({ 
  datePublished, 
  dateModified 
}: Omit<LastUpdatedProps, "showIcon" | "className">) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <time 
      dateTime={dateModified || datePublished}
      className="text-white/50 text-sm"
    >
      {formatDate(dateModified || datePublished)}
    </time>
  );
}

export default LastUpdated;
