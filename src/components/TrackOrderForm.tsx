"use client";

import { useState } from "react";
import { trackOrder } from "@/lib/actions/track";
import { formatINR } from "@/lib/money";

type OrderStatus = Awaited<ReturnType<typeof trackOrder>>["order"];

export default function TrackOrderForm() {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [order, setOrder] = useState<OrderStatus | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setOrder(null);

    const result = await trackOrder(orderId, email);

    if (result.success && result.order) {
      setOrder(result.order);
    } else {
      setError(result.error || "Failed to retrieve order.");
    }

    setLoading(false);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="border border-outline-variant/30 bg-cream-deep p-8 space-y-6">
        <p className="text-sm text-charcoal/70 text-center mb-6">
          Enter your Order ID and the email address used at checkout to see the current status of your shipment.
        </p>

        <div className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="orderId" className="text-[10px] font-bold tracking-[0.2em] text-charcoal/50 uppercase mb-2">
              Order ID
            </label>
            <input
              type="text"
              id="orderId"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              required
              className="bg-transparent border-b border-outline-variant/50 py-2 text-sm text-charcoal outline-none focus:border-moon-indigo transition-colors"
              placeholder="e.g. cm1a2b3c..."
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-[10px] font-bold tracking-[0.2em] text-charcoal/50 uppercase mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-transparent border-b border-outline-variant/50 py-2 text-sm text-charcoal outline-none focus:border-moon-indigo transition-colors"
              placeholder="you@example.com"
            />
          </div>
        </div>

        {error && (
          <p className="text-sm text-red-500 text-center">{error}</p>
        )}

        <button 
          type="submit" 
          disabled={loading} 
          className="w-full bg-moon-indigo text-cream py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-4"
        >
          {loading ? "Searching..." : "Track Order"}
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
      </form>

      {order && (
        <div className="mt-8 border border-outline-variant/30 bg-cream-deep p-8">
          <h3 className="font-serif text-2xl text-charcoal mb-4 border-b border-outline-variant/30 pb-4">Order Details</h3>
          
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-xs text-charcoal/60 uppercase tracking-widest mb-1">Status</p>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-moon-indigo/10 text-moon-indigo capitalize">
                {order.status}
              </span>
            </div>
            <div className="text-right">
              <p className="text-xs text-charcoal/60 uppercase tracking-widest mb-1">Date</p>
              <p className="text-sm text-charcoal font-medium">
                {new Date(order.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs text-charcoal/60 uppercase tracking-widest mb-2 border-b border-outline-variant/20 pb-2">Items</p>
            {order.items.map((item, index) => (
              <div key={index} className="flex justify-between items-center text-sm">
                <span className="text-charcoal">{item.qty}x {item.name}</span>
                <span className="text-charcoal/70">{formatINR(item.totalCents)}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-4 border-t border-outline-variant/30 flex justify-between items-center">
            <span className="font-semibold text-charcoal">Total</span>
            <span className="font-serif text-lg text-moon-indigo">{formatINR(order.totalCents)}</span>
          </div>
        </div>
      )}
    </>
  );
}
