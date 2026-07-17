import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import MediaVisual from "@/components/MediaVisual";

export const metadata = {
  title: "Apothecary Offers",
  description: "Discover our current botanical offers and sets.",
};

export default function OffersPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-12 sm:px-10 lg:px-16 text-center">
      <Reveal className="mb-8 border-y border-sun-terracotta/20 py-8">
        <span className="mb-2 block text-[10px] font-semibold tracking-[0.25em] text-sun-terracotta uppercase">
          Exclusive Rituals
        </span>
        <h1 className="font-serif text-2xl text-charcoal italic">Botanical Offers</h1>
      </Reveal>

      <Reveal delay={100} className="border border-outline-variant/30 bg-cream-deep mb-8 overflow-hidden flex flex-col md:flex-row items-stretch">
        <div className="w-full md:w-1/2 relative min-h-[300px]">
          <img 
            src="/images/acne2.png" 
            alt="Complete Acne Set" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
        </div>
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center items-start text-left border-l border-outline-variant/30">
          <h2 className="font-serif text-xl text-charcoal mb-4 italic">The Complete Acne Set</h2>
          <p className="text-[11px] leading-relaxed text-charcoal/70 mb-8 max-w-md">
            Experience the full spectrum of our apothecary rituals. Purchase the Complete Botanical Acne Kit and receive a complimentary travel-sized glow elixir.
          </p>
          <Button href="/shop">Shop the Collection</Button>
        </div>
      </Reveal>

      <Reveal delay={200} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border border-outline-variant/20 bg-cream-deep/50 overflow-hidden flex flex-col">
          <div className="relative w-full aspect-[4/3]">
            <img src="/images/lavender1.png" alt="Lunar Harmony Bonus" className="w-full h-full object-cover" />
          </div>
          <div className="p-8 flex flex-col items-center flex-grow text-center">
            <span className="text-[10px] font-bold tracking-widest text-moon-indigo uppercase block mb-3">
              Gift with Purchase
            </span>
            <h3 className="font-serif text-lg text-charcoal mb-4 italic">
              Lunar Harmony Bonus
            </h3>
            <p className="text-[11px] leading-relaxed text-charcoal/70 mb-6 flex-grow">
              Spend over ₹3500 and receive our limited-edition guided meditation and sleep ritual guide.
            </p>
          </div>
        </div>
        <div className="border border-outline-variant/20 bg-cream-deep/50 overflow-hidden flex flex-col">
          <div className="relative w-full aspect-[4/3] border-b border-outline-variant/20">
            <img src="/images/royal-rose-main.png" alt="Apothecary Member" className="w-full h-full object-cover" />
          </div>
          <div className="p-8 flex flex-col items-center flex-grow text-center">
            <span className="text-[10px] font-bold tracking-widest text-moon-indigo uppercase block mb-3">
              Subscription
            </span>
            <h3 className="font-serif text-lg text-charcoal mb-4 italic">
              Apothecary Member
            </h3>
            <p className="text-[11px] leading-relaxed text-charcoal/70 mb-6 flex-grow">
              Subscribe to your favorite elixirs and save 15% on every auto-replenishment order. Cancel anytime.
            </p>
          </div>
        </div>
        <div className="border border-outline-variant/20 bg-cream-deep/50 overflow-hidden flex flex-col">
          <div className="relative w-full aspect-[4/3] border-b border-outline-variant/20">
            <img src="/images/clay5.png" alt="Welcome Journey" className="w-full h-full object-cover" />
          </div>
          <div className="p-8 flex flex-col items-center flex-grow text-center">
            <span className="text-[10px] font-bold tracking-widest text-moon-indigo uppercase block mb-3">
              First Purchase
            </span>
            <h3 className="font-serif text-lg text-charcoal mb-4 italic">
              The Welcome Journey
            </h3>
            <p className="text-[11px] leading-relaxed text-charcoal/70 mb-6 flex-grow">
              Receive 10% off your first holistic skincare ritual. Enter code WELCOME at checkout.
            </p>
          </div>
        </div>
        <div className="border border-outline-variant/20 bg-cream-deep/50 overflow-hidden flex flex-col">
          <div className="relative w-full aspect-[4/3] border-b border-outline-variant/20">
            <img src="/images/multani-mitti1.png" alt="Rose Quartz Ritual" className="w-full h-full object-cover" />
          </div>
          <div className="p-8 flex flex-col items-center flex-grow text-center">
            <span className="text-[10px] font-bold tracking-widest text-moon-indigo uppercase block mb-3">
              Limited Edition
            </span>
            <h3 className="font-serif text-lg text-charcoal mb-4 italic">
              The Clay Canvas
            </h3>
            <p className="text-[11px] leading-relaxed text-charcoal/70 mb-6 flex-grow">
              Buy any two pure clay masks and receive our signature botanical mixing bowl set.
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
