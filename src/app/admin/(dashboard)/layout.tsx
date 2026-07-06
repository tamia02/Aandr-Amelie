import Link from "next/link";
import { adminLogout } from "@/lib/actions/admin-auth";

const NAV_LINKS = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/orders", label: "Orders" },
  { href: "/admin/products", label: "Products" },
  { href: "/admin/customers", label: "Customers" },
];

export default function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-cream-deep">
      <header className="flex items-center justify-between border-b border-charcoal/10 bg-cream px-6 py-4 sm:px-10">
        <div className="flex items-center gap-10">
          <span className="font-serif text-lg text-charcoal">Aandré Amelie</span>
          <nav className="flex gap-6 text-xs font-semibold uppercase tracking-[0.15em] text-charcoal/60">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-moon-indigo">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <form action={adminLogout}>
          <button
            type="submit"
            className="text-xs font-semibold uppercase tracking-[0.15em] text-charcoal/60 hover:text-moon-indigo"
          >
            Log out
          </button>
        </form>
      </header>
      <main className="flex-1 px-6 py-10 sm:px-10">{children}</main>
    </div>
  );
}
