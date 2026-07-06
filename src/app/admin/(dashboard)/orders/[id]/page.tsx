import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { formatINR } from "@/lib/money";
import { ORDER_STATUSES } from "@/lib/order-status";
import { updateOrderStatus } from "@/lib/actions/admin-orders";

export const dynamic = "force-dynamic";

export default async function AdminOrderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const order = await prisma.order.findUnique({
    where: { id },
    include: { items: true },
  });

  if (!order) notFound();

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="font-serif text-2xl text-charcoal">
        Order #{order.id.slice(-8).toUpperCase()}
      </h1>
      <p className="mt-1 text-sm text-charcoal/60">
        Placed {order.createdAt.toLocaleString("en-IN")}
      </p>

      <form action={updateOrderStatus} className="mt-6 flex items-center gap-3 bg-cream p-5">
        <input type="hidden" name="orderId" value={order.id} />
        <label className="text-xs font-semibold uppercase tracking-[0.15em] text-charcoal/60">
          Status
        </label>
        <select
          name="status"
          defaultValue={order.status}
          className="border border-charcoal/20 bg-transparent px-3 py-2 text-sm capitalize"
        >
          {ORDER_STATUSES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-moon-indigo px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-cream hover:opacity-90"
        >
          Update
        </button>
      </form>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div className="bg-cream p-6">
          <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-charcoal/50">
            Customer
          </h2>
          <p className="mt-3 text-sm">
            {order.customerName}
            <br />
            {order.email}
            <br />
            {order.phone}
          </p>
        </div>
        <div className="bg-cream p-6">
          <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-charcoal/50">
            Delivery address
          </h2>
          <p className="mt-3 text-sm">
            {order.addressLine1}
            {order.addressLine2 ? `, ${order.addressLine2}` : ""}
            <br />
            {order.city}, {order.state} {order.pincode}
          </p>
        </div>
      </div>

      <div className="mt-6 bg-cream p-6">
        <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-charcoal/50">
          Items
        </h2>
        <ul className="mt-4 space-y-3">
          {order.items.map((item) => (
            <li key={item.id} className="flex justify-between text-sm">
              <span>
                {item.name} × {item.qty}
              </span>
              <span>{formatINR(item.totalCents)}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 space-y-1 border-t border-charcoal/10 pt-4 text-sm">
          <div className="flex justify-between text-charcoal/70">
            <span>Subtotal</span>
            <span>{formatINR(order.subtotalCents)}</span>
          </div>
          <div className="flex justify-between text-charcoal/70">
            <span>Shipping</span>
            <span>{order.shippingCents === 0 ? "Free" : formatINR(order.shippingCents)}</span>
          </div>
          <div className="flex justify-between pt-1 font-medium">
            <span>Total</span>
            <span>{formatINR(order.totalCents)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
