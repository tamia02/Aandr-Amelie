"use client";

import { useState, useRef, useEffect } from "react";
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
  customSlides,
}: {
  images?: string[];
  fallbackImage?: string;
  video?: string;
  poster?: string;
  variant?: PlaceholderVariant;
  label?: string;
  customSlides?: { id: string; thumbnail: React.ReactNode; content: React.ReactNode }[];
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);

  // Create an array of all media items
  const allMedia: { type: "video" | "image" | "custom"; id?: string; src?: string; poster?: string; content?: React.ReactNode; thumbnail?: React.ReactNode }[] = [];
  
  if (video) {
    allMedia.push({ type: "video", id: "video", src: video, poster });
  }
  
  const imageList = images.length > 0 ? images : (fallbackImage ? [fallbackImage] : []);
  imageList.forEach((img, i) => allMedia.push({ type: "image", id: `img-${i}`, src: img }));
  
  if (customSlides) {
    customSlides.forEach((slide) => allMedia.push({ type: "custom", id: slide.id, content: slide.content, thumbnail: slide.thumbnail }));
  }
  
  // Sync scroll when clicking thumbnails
  useEffect(() => {
    if (carouselRef.current) {
      const width = carouselRef.current.clientWidth;
      const currentScrollIndex = Math.round(carouselRef.current.scrollLeft / width);
      
      if (currentScrollIndex !== selectedIndex) {
        setIsAutoScrolling(true);
        carouselRef.current.scrollTo({
          left: width * selectedIndex,
          behavior: "smooth",
        });
        
        const timer = setTimeout(() => setIsAutoScrolling(false), 300);
        return () => clearTimeout(timer);
      }
    }
  }, [selectedIndex]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (isAutoScrolling) return;
    const scrollLeft = e.currentTarget.scrollLeft;
    const width = e.currentTarget.clientWidth;
    const index = Math.round(scrollLeft / width);
    if (index !== selectedIndex) {
      setSelectedIndex(index);
    }
  };

  if (allMedia.length === 0) {
    return <MediaVisual variant={variant} label={label} ratio="aspect-[4/5]" />;
  }

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
                  className="h-full w-full object-contain bg-cream-deep/30"
                  muted
                  playsInline
                />
              ) : media.type === "image" ? (
                <Image
                  src={media.src!}
                  alt={`${label} thumbnail ${i + 1}`}
                  fill
                  className="object-contain bg-cream-deep/30"
                  sizes="96px"
                />
              ) : (
                <div className="w-full h-full bg-charcoal overflow-hidden">
                  {media.thumbnail}
                </div>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Main Display Area (Swipeable on mobile) */}
      <div 
        ref={carouselRef}
        onScroll={handleScroll}
        className={`relative flex-1 aspect-[4/5] flex overflow-x-auto md:overflow-hidden snap-x snap-mandatory no-scrollbar ${MEDIA_FRAME} group bg-cream-deep/30`}
      >
        {allMedia.map((media, i) => (
          <div key={`${media.type}-${i}-main`} className="relative min-w-full h-full snap-center snap-always flex-shrink-0">
            {media.type === "video" ? (
              <MediaVisual
                video={media.src}
                poster={media.poster}
                label={label}
                ratio="aspect-auto h-full"
                priority={i === 0}
                className="h-full w-full"
              />
            ) : media.type === "image" ? (
              <Image
                src={media.src!}
                alt={label ?? "Product Image"}
                fill
                quality={95}
                priority={i === 0}
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-contain"
              />
            ) : (
              <div className="w-full h-full relative overflow-hidden bg-charcoal">
                {media.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
