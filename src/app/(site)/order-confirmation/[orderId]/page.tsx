import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { formatINR } from "@/lib/money";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";

export default async function OrderConfirmationPage({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const { orderId } = await params;
  const order = await prisma.order.findUnique({
    where: { id: orderId },
    include: { items: true },
  });

  if (!order) notFound();

  // Full contact/address details are only shown to the browser that just
  // placed the order (proven by a short-lived cookie set in placeOrder()).
  // Anyone arriving via a stale/shared link sees order + item details only.
  const hasFreshAccess = (await cookies()).get(`order_access_${order.id}`) !== undefined;

  return (
    <div className="px-6 py-8 sm:px-10 md:py-28">
      <div className="mx-auto max-w-2xl">
        <SectionHeader
          eyebrow="Thank You"
          title="Your ritual is on its way."
          align="center"
        />
        <p className="mt-6 text-center text-base leading-relaxed text-charcoal/75">
          Order <span className="font-medium text-charcoal">#{order.id.slice(-8).toUpperCase()}</span>{" "}
          confirmed — we&rsquo;ll deliver to your door with Cash on Delivery.
          {hasFreshAccess && <> A confirmation has been noted against {order.email}.</>}
        </p>

        <div className="mt-12 rounded-sm bg-cream-deep p-8">
          <h3 className="font-serif text-xl">Order Summary</h3>
          <ul className="mt-6 space-y-4">
            {order.items.map((item) => (
              <li key={item.id} className="flex justify-between text-sm">
                <span className="text-charcoal/75">
                  {item.name} × {item.qty}
                </span>
                <span>{formatINR(item.totalCents)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-2 border-t border-charcoal/10 pt-6 text-sm">
            <div className="flex justify-between text-charcoal/70">
              <span>Subtotal</span>
              <span>{formatINR(order.subtotalCents)}</span>
            </div>
            <div className="flex justify-between text-charcoal/70">
              <span>Shipping</span>
              <span>
                {order.shippingCents === 0 ? "Free" : formatINR(order.shippingCents)}
              </span>
            </div>
            <div className="flex justify-between pt-2 text-base font-medium">
              <span>Total</span>
              <span>{formatINR(order.totalCents)}</span>
            </div>
          </div>

          <div className="mt-6 border-t border-charcoal/10 pt-6 text-sm text-charcoal/70">
            <p className="font-medium text-charcoal">Delivering to</p>
            {hasFreshAccess ? (
              <p className="mt-1">
                {order.customerName}
                <br />
                {order.addressLine1}
                {order.addressLine2 ? `, ${order.addressLine2}` : ""}
                <br />
                {order.city}, {order.state} {order.pincode}
              </p>
            ) : (
              <p className="mt-1">{order.city}, {order.state}</p>
            )}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/shop">Continue Shopping</Button>
        </div>
      </div>
    </div>
  );
}
