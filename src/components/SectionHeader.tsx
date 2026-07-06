export default function SectionHeader({
  eyebrow,
  title,
  align = "left",
  tone = "dark",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "text-center" : "text-left"} ${className}`}
    >
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-medium tracking-[0.25em] uppercase ${
            tone === "dark" ? "text-sun-terracotta-dark" : "text-sun-blush"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-balance font-serif text-4xl leading-[1.15] font-normal sm:text-5xl ${
          tone === "dark" ? "text-charcoal" : "text-cream"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
