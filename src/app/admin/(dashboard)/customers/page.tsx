import { prisma } from "@/lib/db";
import { formatINR } from "@/lib/money";
import DbUnavailableNotice from "@/components/DbUnavailableNotice";

export const dynamic = "force-dynamic";

export default async function AdminCustomersPage() {
  let customers;
  try {
    customers = await prisma.customer.findMany({
      include: {
        orders: {
          select: { totalCents: true },
          where: { status: { not: "cancelled" } },
        },
      },
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("AdminCustomersPage: database unavailable", error);
    return <DbUnavailableNotice />;
  }

  const customersWithStats = customers.map((c) => {
    const totalCents = c.orders.reduce((sum, order) => sum + order.totalCents, 0);
    return { ...c, totalCents, orderCount: c.orders.length };
  }).sort((a, b) => b.totalCents - a.totalCents);

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="font-serif text-2xl text-charcoal">Customers</h1>
      <p className="mt-1 text-sm text-charcoal/60">
        {customersWithStats.length} registered customer{customersWithStats.length === 1 ? "" : "s"}.
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
            {customersWithStats.map((c) => (
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
                  {c.createdAt.toLocaleDateString("en-IN")}
                </td>
              </tr>
            ))}
            {customersWithStats.length === 0 && (
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
