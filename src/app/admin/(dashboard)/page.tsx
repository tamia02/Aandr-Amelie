import Link from "next/link";
import { prisma } from "@/lib/db";
import { formatINR } from "@/lib/money";
import DbUnavailableNotice from "@/components/DbUnavailableNotice";

export const dynamic = "force-dynamic";

const LOW_STOCK_THRESHOLD = 10;

export default async function AdminDashboardPage() {
  let orderCount, pendingCount, revenueAgg, lowStockProducts, recentOrders;
  try {
    [orderCount, pendingCount, revenueAgg, lowStockProducts, recentOrders] =
      await Promise.all([
        prisma.order.count(),
        prisma.order.count({ where: { status: "pending" } }),
        prisma.order.aggregate({
          _sum: { totalCents: true },
          where: { status: { not: "cancelled" } },
        }),
        prisma.product.findMany({
          where: { stock: { lt: LOW_STOCK_THRESHOLD } },
          orderBy: { stock: "asc" },
        }),
        prisma.order.findMany({
          orderBy: { createdAt: "desc" },
          take: 5,
        }),
      ]);
  } catch (error) {
    console.error("AdminDashboardPage: database unavailable", error);
    return <DbUnavailableNotice />;
  }

  const stats = [
    { label: "Total orders", value: orderCount },
    { label: "Pending", value: pendingCount },
    { label: "Revenue", value: formatINR(revenueAgg._sum.totalCents ?? 0) },
    { label: "Low stock items", value: lowStockProducts.length },
  ];

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="font-serif text-2xl text-charcoal">Dashboard</h1>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-cream p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-charcoal/50">
              {stat.label}
            </p>
            <p className="mt-2 font-serif text-2xl text-charcoal">{stat.value}</p>
          </div>
        ))}
      </div>

      {lowStockProducts.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-charcoal/50">
            Low stock
          </h2>
          <ul className="mt-3 space-y-2">
            {lowStockProducts.map((p) => (
              <li key={p.slug} className="flex justify-between bg-cream px-5 py-3 text-sm">
                <span>{p.slug}</span>
                <span className="font-medium text-red-700">{p.stock} left</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-charcoal/50">
            Recent orders
          </h2>
          <Link href="/admin/orders" className="text-xs font-semibold text-moon-indigo hover:underline">
            View all →
          </Link>
        </div>
        <ul className="mt-3 divide-y divide-charcoal/10 bg-cream">
          {recentOrders.map((order) => (
            <li key={order.id}>
              <Link
                href={`/admin/orders/${order.id}`}
                className="flex items-center justify-between px-5 py-4 text-sm hover:bg-cream-deep"
              >
                <span>
                  <span className="font-medium">#{order.id.slice(-8).toUpperCase()}</span>{" "}
                  <span className="text-charcoal/60">{order.customerName}</span>
                </span>
                <span className="flex items-center gap-4">
                  <span className="text-charcoal/60 capitalize">{order.status}</span>
                  <span className="font-medium">{formatINR(order.totalCents)}</span>
                </span>
              </Link>
            </li>
          ))}
          {recentOrders.length === 0 && (
            <li className="px-5 py-4 text-sm text-charcoal/50">No orders yet.</li>
          )}
        </ul>
      </div>
    </div>
  );
}
