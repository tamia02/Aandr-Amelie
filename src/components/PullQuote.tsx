export default function PullQuote({
  children,
  tone = "dark",
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <blockquote
      className={`font-serif text-2xl leading-snug italic sm:text-3xl ${
        tone === "dark" ? "text-moon-indigo" : "text-cream"
      }`}
    >
      {children}
    </blockquote>
  );
}
