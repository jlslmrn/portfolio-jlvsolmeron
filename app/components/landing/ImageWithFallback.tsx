"use client";

import { useState } from "react";
import type { ImgHTMLAttributes } from "react";

interface ImageWithFallbackProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export function ImageWithFallback({ src, alt, className, ...props }: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`bg-muted flex items-center justify-center ${className ?? ""}`}>
        <span className="text-muted-foreground text-sm">Image unavailable</span>
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} onError={() => setError(true)} {...props} />;
}

