import { MEDIA_FRAME } from "@/lib/frame";

const VARIANTS = {
  sun: "bg-[linear-gradient(135deg,var(--sun-blush)_0%,var(--sun-gold)_50%,var(--sun-terracotta)_100%)]",
  moon: "bg-[linear-gradient(135deg,var(--moon-lavender)_0%,var(--moon-sage)_55%,var(--moon-indigo)_100%)]",
  dawn: "bg-[linear-gradient(135deg,var(--sun-gold)_0%,var(--sun-blush)_35%,var(--moon-lavender)_70%,var(--moon-indigo)_100%)]",
} as const;

export type PlaceholderVariant = keyof typeof VARIANTS;

export default function GradientPlaceholder({
  variant = "dawn",
  ratio = "aspect-[4/5]",
  label,
  className = "",
}: {
  variant?: PlaceholderVariant;
  ratio?: string;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`grain relative overflow-hidden ${ratio} ${VARIANTS[variant]} ${MEDIA_FRAME} ${className}`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <SunMoonMark className="h-[28%] w-[28%] opacity-90" />
      </div>
      {label && (
        <span className="absolute bottom-5 left-1/2 w-full -translate-x-1/2 px-4 text-center font-serif text-sm italic tracking-wide text-cream/90">
          {label}
        </span>
      )}
    </div>
  );
}

function SunMoonMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="38"
        cy="50"
        r="22"
        stroke="currentColor"
        strokeWidth="1"
        className="text-cream/70"
      />
      <path
        d="M62 28a22 22 0 0 1 0 44 22 22 0 0 1-9-42 22 22 0 0 1 9-2Z"
        stroke="currentColor"
        strokeWidth="1"
        className="text-cream/70"
      />
    </svg>
  );
}
