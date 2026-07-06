export function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-5 pt-32 pb-32 sm:px-10">
      <span className="mb-6 block text-xs font-semibold tracking-[0.2em] text-sun-terracotta uppercase">
        Legal
      </span>
      <h1 className="mb-4 font-serif text-5xl leading-tight">{title}</h1>
      <p className="mb-16 text-sm text-charcoal/50">Last updated: {lastUpdated}</p>
      <div className="space-y-10">{children}</div>
    </div>
  );
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="mb-4 font-serif text-2xl text-moon-indigo">{title}</h2>
      <div className="space-y-4 text-sm leading-relaxed text-charcoal/75">
        {children}
      </div>
    </section>
  );
}
