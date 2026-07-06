export default function DbUnavailableNotice() {
  return (
    <div className="mx-auto max-w-5xl bg-cream p-6 text-sm text-charcoal/70">
      Couldn&rsquo;t reach the database. Check that <code>DATABASE_URL</code> is set correctly
      for this environment, then reload.
    </div>
  );
}
