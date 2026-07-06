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
}) {
  if (video) {
    return (
      <div className={`relative overflow-hidden ${ratio} ${MEDIA_FRAME} ${className}`}>
        <video
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
      <div className={`relative overflow-hidden ${ratio} ${MEDIA_FRAME} ${className}`}>
        <Image
          src={image}
          alt={label ?? ""}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 40vw, 90vw"
          className="object-cover"
          style={{ objectPosition }}
        />
      </div>
    );
  }

  return (
    <GradientPlaceholder variant={variant} ratio={ratio} label={label} className={className} />
  );
}
