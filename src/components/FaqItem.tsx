export default function FaqItem({
  question,
  children,
}: {
  question: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group border-b border-outline-variant/30 py-6">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl text-charcoal">
        {question}
        <span className="shrink-0 text-2xl leading-none text-outline transition-transform duration-300 group-open:rotate-45">
          +
        </span>
      </summary>
      <div className="mt-4 max-w-2xl text-sm leading-relaxed text-charcoal/70">
        {children}
      </div>
    </details>
  );
}
