"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart-context";
import { getCommerceForSlugs, type Commerce } from "@/lib/actions/products";
import { placeOrder, checkPincode } from "@/lib/actions/orders";
import { getProduct } from "@/data/products";
import { formatINR } from "@/lib/money";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";

const FREE_SHIPPING_THRESHOLD_CENTS = 49900;
const FLAT_SHIPPING_CENTS = 5000;

const emptyForm = {
  customerName: "",
  email: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  pincode: "",
};

export default function CheckoutPage() {
  const router = useRouter();
  const { items, clear } = useCart();
  const [commerce, setCommerce] = useState<Record<string, Commerce>>({});
  const [form, setForm] = useState(emptyForm);
  const [pincodeStatus, setPincodeStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (items.length === 0) return;
    getCommerceForSlugs(items.map((i) => i.slug)).then(setCommerce);
  }, [items]);

  const subtotalCents = items.reduce((sum, item) => {
    const price = commerce[item.slug]?.priceCents ?? 0;
    return sum + price * item.qty;
  }, 0);
  const shippingCents =
    subtotalCents >= FREE_SHIPPING_THRESHOLD_CENTS ? 0 : FLAT_SHIPPING_CENTS;
  const totalCents = subtotalCents + shippingCents;

  const handleField =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleCheckPincode = async () => {
    const result = await checkPincode(form.pincode);
    setPincodeStatus(result.message);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const result = await placeOrder({
      ...form,
      items: items.map((i) => ({ slug: i.slug, qty: i.qty })),
    });

    setSubmitting(false);

    if (!result.ok) {
      setError(result.error);
      return;
    }

    clear();
    router.push(`/order-confirmation/${result.orderId}`);
  };

  if (items.length === 0) {
    return (
      <div className="px-6 py-20 text-center sm:px-10 md:py-28">
        <SectionHeader eyebrow="Checkout" title="Your cart is empty" align="center" />
        <div className="mt-8 flex justify-center">
          <Button href="/shop">Shop the Collection</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 py-20 sm:px-10 md:py-28">
      <div className="mx-auto grid max-w-5xl gap-14 md:grid-cols-[1.2fr_1fr]">
        <div>
          <SectionHeader eyebrow="Checkout" title="Delivery Details" />

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div>
              <label htmlFor="customerName" className="mb-2 block text-xs font-medium tracking-wide text-charcoal/60 uppercase">
                Full Name
              </label>
              <input
                id="customerName"
                name="name"
                autoComplete="name"
                required
                value={form.customerName}
                onChange={handleField("customerName")}
                className="w-full rounded-sm border border-charcoal/20 bg-transparent px-4 py-3 text-sm focus:border-sun-terracotta-dark focus:outline-none"
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-medium tracking-wide text-charcoal/60 uppercase">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  type="email"
                  value={form.email}
                  onChange={handleField("email")}
                  className="w-full rounded-sm border border-charcoal/20 bg-transparent px-4 py-3 text-sm focus:border-sun-terracotta-dark focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-xs font-medium tracking-wide text-charcoal/60 uppercase">
                  Phone
                </label>
                <input
                  id="phone"
                  name="tel"
                  autoComplete="tel"
                  required
                  type="tel"
                  value={form.phone}
                  onChange={handleField("phone")}
                  className="w-full rounded-sm border border-charcoal/20 bg-transparent px-4 py-3 text-sm focus:border-sun-terracotta-dark focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="addressLine1" className="mb-2 block text-xs font-medium tracking-wide text-charcoal/60 uppercase">
                Address Line 1
              </label>
              <input
                id="addressLine1"
                name="address-line1"
                autoComplete="address-line1"
                required
                value={form.addressLine1}
                onChange={handleField("addressLine1")}
                className="w-full rounded-sm border border-charcoal/20 bg-transparent px-4 py-3 text-sm focus:border-sun-terracotta-dark focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="addressLine2" className="mb-2 block text-xs font-medium tracking-wide text-charcoal/60 uppercase">
                Address Line 2 (optional)
              </label>
              <input
                id="addressLine2"
                name="address-line2"
                autoComplete="address-line2"
                value={form.addressLine2}
                onChange={handleField("addressLine2")}
                className="w-full rounded-sm border border-charcoal/20 bg-transparent px-4 py-3 text-sm focus:border-sun-terracotta-dark focus:outline-none"
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <label htmlFor="city" className="mb-2 block text-xs font-medium tracking-wide text-charcoal/60 uppercase">
                  City
                </label>
                <input
                  id="city"
                  name="address-level2"
                  autoComplete="address-level2"
                  required
                  value={form.city}
                  onChange={handleField("city")}
                  className="w-full rounded-sm border border-charcoal/20 bg-transparent px-4 py-3 text-sm focus:border-sun-terracotta-dark focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="state" className="mb-2 block text-xs font-medium tracking-wide text-charcoal/60 uppercase">
                  State
                </label>
                <input
                  id="state"
                  name="address-level1"
                  autoComplete="address-level1"
                  required
                  value={form.state}
                  onChange={handleField("state")}
                  className="w-full rounded-sm border border-charcoal/20 bg-transparent px-4 py-3 text-sm focus:border-sun-terracotta-dark focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="pincode" className="mb-2 block text-xs font-medium tracking-wide text-charcoal/60 uppercase">
                  Pincode
                </label>
                <div className="flex gap-2">
                  <input
                    id="pincode"
                    name="postal-code"
                    autoComplete="postal-code"
                    required
                    value={form.pincode}
                    onChange={handleField("pincode")}
                    className="w-full rounded-sm border border-charcoal/20 bg-transparent px-4 py-3 text-sm focus:border-sun-terracotta-dark focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleCheckPincode}
                    className="shrink-0 rounded-sm border border-charcoal/20 px-3 text-xs tracking-wide uppercase hover:border-sun-terracotta-dark hover:text-sun-terracotta-dark"
                  >
                    Check
                  </button>
                </div>
                {pincodeStatus && (
                  <p className="mt-2 text-xs text-charcoal/60">{pincodeStatus}</p>
                )}
              </div>
            </div>

            <div className="rounded-sm border-l-2 border-sun-gold bg-sun-blush/20 px-5 py-4">
              <p className="text-xs font-medium tracking-[0.2em] text-sun-terracotta-dark uppercase">
                Payment Method
              </p>
              <p className="mt-1 text-sm text-charcoal/75">Cash on Delivery</p>
            </div>

            {error && <p className="text-sm text-red-700">{error}</p>}

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-moon-indigo px-7 py-4 text-xs font-semibold tracking-[0.2em] text-cream uppercase transition-opacity duration-300 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Placing Order…" : "Place Order (Cash on Delivery)"}
            </button>
          </form>
        </div>

        <div className="rounded-sm bg-cream-deep p-8">
          <h3 className="font-serif text-xl">Order Summary</h3>
          <ul className="mt-6 space-y-4">
            {items.map((item) => {
              const product = getProduct(item.slug);
              const price = commerce[item.slug]?.priceCents ?? 0;
              if (!product) return null;
              return (
                <li key={item.slug} className="flex justify-between text-sm">
                  <span className="text-charcoal/75">
                    {product.name} × {item.qty}
                  </span>
                  <span>{formatINR(price * item.qty)}</span>
                </li>
              );
            })}
          </ul>
          <div className="mt-6 space-y-2 border-t border-charcoal/10 pt-6 text-sm">
            <div className="flex justify-between text-charcoal/70">
              <span>Subtotal</span>
              <span>{formatINR(subtotalCents)}</span>
            </div>
            <div className="flex justify-between text-charcoal/70">
              <span>Shipping</span>
              <span>{shippingCents === 0 ? "Free" : formatINR(shippingCents)}</span>
            </div>
            <div className="flex justify-between pt-2 text-base font-medium">
              <span>Total</span>
              <span>{formatINR(totalCents)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
