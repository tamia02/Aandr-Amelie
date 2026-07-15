"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { MEDIA_FRAME } from "@/lib/frame";
import GradientPlaceholder, { type PlaceholderVariant } from "./GradientPlaceholder";

export default function MediaVisual({
  image,
  video,
  poster,
  variant = "dawn",
  ratio = "aspect-[4/5]",
  label,
  objectPosition = "center",
  priority = false,
  className = "",
  fit = "cover",
}: {
  image?: string;
  video?: string;
  poster?: string;
  variant?: PlaceholderVariant;
  ratio?: string;
  label?: string;
  objectPosition?: string;
  priority?: boolean;
  className?: string;
  fit?: "cover" | "contain";
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && video) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch((e) => console.warn("MediaVisual autoplay failed:", e));
    }
  }, [video]);

  if (video) {
    return (
      <div className={`relative overflow-hidden ${ratio} ${MEDIA_FRAME} ${className}`}>
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          style={{ objectPosition }}
          src={video}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          aria-label={label}
        />
      </div>
    );
  }

  if (image) {
    return (
      <div className={`relative overflow-hidden ${ratio} ${MEDIA_FRAME} ${fit === "contain" ? "bg-cream-deep/30" : ""} ${className}`}>
        <Image
          src={image}
          alt={label ?? ""}
          fill
          quality={90}
          priority={priority}
          sizes="(min-width: 1024px) 40vw, 90vw"
          className={fit === "contain" ? "object-contain" : "object-cover"}
          style={fit === "contain" ? undefined : { objectPosition }}
        />
      </div>
    );
  }

  return (
    <GradientPlaceholder variant={variant} ratio={ratio} label={label} className={className} />
  );
}
