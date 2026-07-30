import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal — Botanical Skincare Guides",
  description:
    "Ingredient science and rituals for rosewater, lavender, jojoba, and rosemary — the research behind every Aandré Amelie formula.",
  alternates: {
    canonical: "https://www.aandreamelie.com/journal",
  },
};

export default function JournalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
