"use client";

import { useState } from "react";
import { ImageIcon } from "lucide-react";

type ImageSlotProps = {
  src: string;
  alt: string;
  label?: string;
  path?: string;
  aspect?: string;
  className?: string;
};

export function ImageSlot({
  src,
  alt,
  label,
  path,
  aspect = "aspect-[4/3]",
  className = "",
}: ImageSlotProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className={`flex ${aspect} w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-forest-100 to-skyline-200 px-4 text-center ${className}`}
        role="img"
        aria-label={alt}
        title={path ? `Add image at ${path}` : undefined}
      >
        <ImageIcon className="text-forest-700/30" size={28} strokeWidth={1.5} />
        {label && (
          <span className="font-mono text-[11px] uppercase tracking-wide text-forest-700/50">
            {label}
          </span>
        )}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setErrored(true)}
      className={`${aspect} w-full object-cover ${className}`}
    />
  );
}
