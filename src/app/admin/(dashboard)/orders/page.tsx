import Link from "next/link";
import { prisma } from "@/lib/db";
import { formatINR } from "@/lib/money";
import { ORDER_STATUSES } from "@/lib/order-status";
import DbUnavailableNotice from "@/components/DbUnavailableNotice";

export const dynamic = "force-dynamic";

export default async function AdminOrdersPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;
  const validStatus = ORDER_STATUSES.includes(status as never) ? status : undefined;

  let orders;
  try {
    orders = await prisma.order.findMany({
      where: validStatus ? { status: validStatus } : undefined,
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("AdminOrdersPage: database unavailable", error);
    return <DbUnavailableNotice />;
  }

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="font-serif text-2xl text-charcoal">Orders</h1>

      <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.1em]">
        <Link
          href="/admin/orders"
          className={`px-4 py-2 ${!validStatus ? "bg-moon-indigo text-cream" : "bg-cream text-charcoal/60"}`}
        >
          All
        </Link>
        {ORDER_STATUSES.map((s) => (
          <Link
            key={s}
            href={`/admin/orders?status=${s}`}
            className={`px-4 py-2 capitalize ${validStatus === s ? "bg-moon-indigo text-cream" : "bg-cream text-charcoal/60"}`}
          >
            {s}
          </Link>
        ))}
      </div>

      <ul className="mt-6 divide-y divide-charcoal/10 bg-cream">
        {orders.map((order) => (
          <li key={order.id}>
            <Link
              href={`/admin/orders/${order.id}`}
              className="flex flex-wrap items-center justify-between gap-2 px-5 py-4 text-sm hover:bg-cream-deep"
            >
              <span>
                <span className="font-medium">#{order.id.slice(-8).toUpperCase()}</span>{" "}
                <span className="text-charcoal/60">{order.customerName}</span>
              </span>
              <span className="flex items-center gap-4">
                <span className="text-charcoal/50">
                  {order.createdAt.toLocaleDateString("en-IN")}
                </span>
                <span className="text-charcoal/60 capitalize">{order.status}</span>
                <span className="font-medium">{formatINR(order.totalCents)}</span>
              </span>
            </Link>
          </li>
        ))}
        {orders.length === 0 && (
          <li className="px-5 py-4 text-sm text-charcoal/50">No orders found.</li>
        )}
      </ul>
    </div>
  );
}
