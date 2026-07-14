"use client";

import { useState } from "react";
import Image from "next/image";
import MediaVisual from "./MediaVisual";
import { MEDIA_FRAME } from "@/lib/frame";
import { PlaceholderVariant } from "./GradientPlaceholder";

export default function ProductGallery({
  images = [],
  fallbackImage,
  video,
  poster,
  variant = "dawn",
  label,
}: {
  images?: string[];
  fallbackImage?: string;
  video?: string;
  poster?: string;
  variant?: PlaceholderVariant;
  label?: string;
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Create an array of all media items
  const allMedia: { type: "video" | "image"; src: string; poster?: string }[] = [];
  
  if (video) {
    allMedia.push({ type: "video", src: video, poster });
  }
  
  const imageList = images.length > 0 ? images : (fallbackImage ? [fallbackImage] : []);
  imageList.forEach((img) => allMedia.push({ type: "image", src: img }));
  
  if (allMedia.length === 0) {
    return <MediaVisual variant={variant} label={label} ratio="aspect-[4/5]" />;
  }

  const selectedMedia = allMedia[selectedIndex];

  return (
    <div className="flex flex-col-reverse gap-4 md:flex-row h-full">
      {/* Thumbnails Strip */}
      {allMedia.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar md:flex-col md:w-20 md:overflow-y-auto md:pb-0 lg:w-24">
          {allMedia.map((media, i) => (
            <button
              key={`${media.type}-${i}`}
              onClick={() => setSelectedIndex(i)}
              className={`relative flex-shrink-0 w-16 h-20 md:w-full md:h-24 lg:h-28 overflow-hidden ${MEDIA_FRAME} border transition-all duration-300 ease-out ${
                selectedIndex === i
                  ? "border-sun-terracotta opacity-100"
                  : "border-transparent opacity-60 hover:opacity-100 hover:border-outline-variant/50"
              }`}
              aria-label={`View ${label} media ${i + 1}`}
            >
              {media.type === "video" ? (
                <video
                  src={media.src}
                  poster={media.poster}
                  className="h-full w-full object-cover"
                  muted
                  playsInline
                />
              ) : (
                <Image
                  src={media.src}
                  alt={`${label} thumbnail ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Main Display Area */}
      <div className={`relative flex-1 aspect-[4/5] overflow-hidden ${MEDIA_FRAME} group bg-cream-deep/30`}>
        <div className="absolute inset-0">
          {selectedMedia.type === "video" ? (
            <MediaVisual
              video={selectedMedia.src}
              poster={selectedMedia.poster}
              label={label}
              ratio="aspect-auto h-full"
              priority
              className="h-full w-full"
            />
          ) : (
            <Image
              src={selectedMedia.src}
              alt={label ?? "Product Image"}
              fill
              quality={95}
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
              style={{ objectPosition: "50% 25%" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
