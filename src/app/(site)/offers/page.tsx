import Reveal from "@/components/Reveal";
import Button from "@/components/Button";

export const metadata = {
  title: "Apothecary Offers",
  description: "Discover our current botanical offers and sets.",
};

export default function OffersPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-32 sm:px-10 lg:px-16 text-center">
      <Reveal className="mb-16">
        <span className="mb-4 block text-xs font-semibold tracking-[0.25em] text-sun-terracotta uppercase">
          Exclusive Rituals
        </span>
        <h1 className="font-serif text-5xl text-charcoal">Botanical Offers</h1>
      </Reveal>

      <Reveal delay={100} className="border border-outline-variant/30 bg-cream-deep p-12 mb-16">
        <h2 className="font-serif text-3xl text-charcoal mb-4">The Complete Alchemy Set</h2>
        <p className="text-sm text-charcoal/70 mb-8 max-w-xl mx-auto">
          Experience the full spectrum of our apothecary rituals. Purchase the Complete Botanical Kit and receive a complimentary travel-sized Glow Quinch Elixir.
        </p>
        <Button href="/shop">Shop the Collection</Button>
      </Reveal>

      <Reveal delay={200} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border border-outline-variant/20 p-8 flex flex-col items-center">
          <span className="text-[10px] font-bold tracking-widest text-moon-indigo uppercase block mb-3">
            Gift with Purchase
          </span>
          <h3 className="font-serif text-xl text-charcoal mb-4">
            Lunar Harmony Bonus
          </h3>
          <p className="text-sm text-charcoal/70 mb-6 text-center flex-grow">
            Spend over ₹3500 and receive our limited-edition guided meditation and sleep ritual guide.
          </p>
        </div>
        <div className="border border-outline-variant/20 p-8 flex flex-col items-center">
          <span className="text-[10px] font-bold tracking-widest text-moon-indigo uppercase block mb-3">
            Subscription
          </span>
          <h3 className="font-serif text-xl text-charcoal mb-4">
            Apothecary Member
          </h3>
          <p className="text-sm text-charcoal/70 mb-6 text-center flex-grow">
            Subscribe to your favorite elixirs and save 15% on every auto-replenishment order. Cancel anytime.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
