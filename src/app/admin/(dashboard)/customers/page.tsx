import { prisma } from "@/lib/db";
import { formatINR } from "@/lib/money";

export const dynamic = "force-dynamic";

export default async function AdminCustomersPage() {
  const orders = await prisma.order.findMany({
    where: { status: { not: "cancelled" } },
    orderBy: { createdAt: "desc" },
  });

  const byEmail = new Map<
    string,
    { name: string; email: string; phone: string; orderCount: number; totalCents: number; lastOrderAt: Date }
  >();

  for (const order of orders) {
    const existing = byEmail.get(order.email);
    if (existing) {
      existing.orderCount += 1;
      existing.totalCents += order.totalCents;
    } else {
      byEmail.set(order.email, {
        name: order.customerName,
        email: order.email,
        phone: order.phone,
        orderCount: 1,
        totalCents: order.totalCents,
        lastOrderAt: order.createdAt,
      });
    }
  }

  const customers = Array.from(byEmail.values()).sort(
    (a, b) => b.totalCents - a.totalCents,
  );

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="font-serif text-2xl text-charcoal">Customers</h1>
      <p className="mt-1 text-sm text-charcoal/60">
        Derived from order history — {customers.length} unique customer{customers.length === 1 ? "" : "s"}.
      </p>

      <div className="mt-6 overflow-x-auto bg-cream">
        <table className="w-full min-w-[560px] text-sm">
          <thead>
            <tr className="border-b border-charcoal/10 text-left text-xs font-semibold uppercase tracking-[0.1em] text-charcoal/50">
              <th className="px-5 py-3">Customer</th>
              <th className="px-5 py-3">Orders</th>
              <th className="px-5 py-3">Lifetime value</th>
              <th className="px-5 py-3">Last order</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.email} className="border-b border-charcoal/10 last:border-0">
                <td className="px-5 py-4">
                  <p className="font-medium">{c.name}</p>
                  <p className="text-xs text-charcoal/50">
                    {c.email} · {c.phone}
                  </p>
                </td>
                <td className="px-5 py-4">{c.orderCount}</td>
                <td className="px-5 py-4">{formatINR(c.totalCents)}</td>
                <td className="px-5 py-4 text-charcoal/60">
                  {c.lastOrderAt.toLocaleDateString("en-IN")}
                </td>
              </tr>
            ))}
            {customers.length === 0 && (
              <tr>
                <td className="px-5 py-4 text-charcoal/50" colSpan={4}>
                  No customers yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
