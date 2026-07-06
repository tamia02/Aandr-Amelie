import Link from "next/link";

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const base =
    "group inline-flex items-center justify-between gap-4 px-10 py-4 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-500 ease-out";

  const styles =
    variant === "primary"
      ? "bg-moon-indigo text-cream hover:opacity-90"
      : "border border-charcoal/30 text-charcoal hover:border-moon-indigo hover:text-moon-indigo";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}
