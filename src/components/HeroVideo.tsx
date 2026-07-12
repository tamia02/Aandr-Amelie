"use client";

import { useEffect, useRef } from "react";

interface HeroVideoProps {
  src: string;
  poster?: string;
  className?: string;
}

export default function HeroVideo({ src, poster, className }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Attempt to force play the video when the component mounts
    if (videoRef.current) {
      // Explicitly set muted to true to bypass browser autoplay policies
      // React sometimes fails to apply this attribute properly during hydration
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      
      // Small timeout to ensure it plays after React has fully settled
      const timeoutId = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play().catch((err) => {
            console.warn("Video autoplay failed:", err);
          });
        }
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
