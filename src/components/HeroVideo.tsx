"use client";

interface HeroVideoProps {
  src: string;
  poster?: string;
  className?: string;
}

export default function HeroVideo({ src, poster, className }: HeroVideoProps) {
  // Using dangerouslySetInnerHTML ensures that autoplay, muted, and playsinline 
  // are actually rendered in the DOM from the very start, which fixes iOS/Safari
  // and general React hydration issues with video autoplay.
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: `
          <video
            src="${src}"
            ${poster ? `poster="${poster}"` : ""}
            autoplay
            muted
            loop
            playsinline
            aria-hidden="true"
            style="width: 100%; height: 100%; object-fit: cover; object-position: center;"
          ></video>
        `,
      }}
    />
  );
}
