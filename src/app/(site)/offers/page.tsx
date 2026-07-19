import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import Image from "next/image";
import MediaVisual from "@/components/MediaVisual";

export const metadata = {
  title: "Skincare Offers",
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
        <div className="w-full md:w-1/2 relative min-h-[300px] bg-cream">
          <Image 
            src="/images/acne2.png" 
            alt="The Complete Acne Set" 
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-contain p-6" 
          />
        </div>
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center items-start text-left border-l border-outline-variant/30">
          <h2 className="font-serif text-xl text-charcoal mb-4 italic">The Complete Acne Set</h2>
          <p className="text-[11px] leading-relaxed text-charcoal/70 mb-8 max-w-md">
            Experience the full spectrum of our skincare rituals. Purchase the Complete Botanical Acne Kit and receive a complimentary travel-sized glow elixir.
          </p>
          <Button href="/shop">Shop the Collection</Button>
        </div>
      </Reveal>

      <Reveal delay={200} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
        <div className="border border-outline-variant/20 bg-cream-deep/50 overflow-hidden flex flex-col">
          <div className="relative w-full aspect-[4/3]">
            <img src="/images/lavender1.png" alt="Lunar Harmony Bonus" className="w-full h-full object-cover" />
          </div>
          <div className="p-4 sm:p-8 flex flex-col items-center flex-grow text-center">
            <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-moon-indigo uppercase block mb-2 sm:mb-3">
              Gift with Purchase
            </span>
            <h3 className="font-serif text-base sm:text-lg text-charcoal mb-3 sm:mb-4 italic">
              Lunar Harmony Bonus
            </h3>
            <p className="hidden sm:block text-[11px] leading-relaxed text-charcoal/70 mb-6 flex-grow">
              Spend over ₹3500 and receive our limited-edition guided meditation and sleep ritual guide.
            </p>
            <p className="sm:hidden text-[10px] leading-relaxed text-charcoal/70 mb-4 flex-grow">
              Spend ₹3500+ for a free sleep guide.
            </p>
          </div>
        </div>
        <div className="border border-outline-variant/20 bg-cream-deep/50 overflow-hidden flex flex-col">
          <div className="relative w-full aspect-[4/3] border-b border-outline-variant/20">
            <img src="/images/royal-rose-main.png" alt="Skincare Member" className="w-full h-full object-cover" />
          </div>
          <div className="p-4 sm:p-8 flex flex-col items-center flex-grow text-center">
            <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-moon-indigo uppercase block mb-2 sm:mb-3">
              Subscription
            </span>
            <h3 className="font-serif text-base sm:text-lg text-charcoal mb-3 sm:mb-4 italic">
              Skincare Member
            </h3>
            <p className="hidden sm:block text-[11px] leading-relaxed text-charcoal/70 mb-6 flex-grow">
              Subscribe to your favorite elixirs and save 15% on every auto-replenishment order. Cancel anytime.
            </p>
            <p className="sm:hidden text-[10px] leading-relaxed text-charcoal/70 mb-4 flex-grow">
              Subscribe & save 15% on every order.
            </p>
          </div>
        </div>
        <div className="border border-outline-variant/20 bg-cream-deep/50 overflow-hidden flex flex-col">
          <div className="relative w-full aspect-[4/3] border-b border-outline-variant/20">
            <img src="/images/rose1.png" alt="Welcome Journey" className="w-full h-full object-cover" />
          </div>
          <div className="p-4 sm:p-8 flex flex-col items-center flex-grow text-center">
            <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-moon-indigo uppercase block mb-2 sm:mb-3">
              First Purchase
            </span>
            <h3 className="font-serif text-base sm:text-lg text-charcoal mb-3 sm:mb-4 italic">
              The Welcome Journey
            </h3>
            <p className="hidden sm:block text-[11px] leading-relaxed text-charcoal/70 mb-6 flex-grow">
              Receive 10% off your first holistic skincare ritual. Enter code WELCOME at checkout.
            </p>
            <p className="sm:hidden text-[10px] leading-relaxed text-charcoal/70 mb-4 flex-grow">
              10% off your first holistic ritual.
            </p>
          </div>
        </div>
        <div className="border border-outline-variant/20 bg-cream-deep/50 overflow-hidden flex flex-col">
          <div className="relative w-full aspect-[4/3] border-b border-outline-variant/20">
            <img src="/images/four1.png" alt="Rose Quartz Ritual" className="w-full h-full object-cover" />
          </div>
          <div className="p-4 sm:p-8 flex flex-col items-center flex-grow text-center">
            <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-moon-indigo uppercase block mb-2 sm:mb-3">
              Limited Edition
            </span>
            <h3 className="font-serif text-base sm:text-lg text-charcoal mb-3 sm:mb-4 italic">
              The Clay Canvas
            </h3>
            <p className="hidden sm:block text-[11px] leading-relaxed text-charcoal/70 mb-6 flex-grow">
              Buy any two pure clay masks and receive our signature botanical mixing bowl set.
            </p>
            <p className="sm:hidden text-[10px] leading-relaxed text-charcoal/70 mb-4 flex-grow">
              Buy 2 masks, get a mixing bowl set.
            </p>
          </div>
        </div>
        
        {/* Trial Pack */}
        <div className="border border-outline-variant/20 bg-cream-deep/50 overflow-hidden flex flex-col sm:flex-row sm:col-span-2 max-w-2xl mx-auto w-full">
          <div className="p-4 sm:p-8 flex flex-col items-center justify-center w-full sm:w-1/2 text-center border-b sm:border-b-0 sm:border-r border-outline-variant/20">
            <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-moon-indigo uppercase block mb-2 sm:mb-3">
              Starter Set
            </span>
            <h3 className="font-serif text-base sm:text-lg text-charcoal mb-3 sm:mb-4 italic">
              The Trial Pack
            </h3>
            <p className="text-[10px] sm:text-[11px] leading-relaxed text-charcoal/70 mb-4 sm:mb-6 flex-grow max-w-sm mx-auto">
              Experience the harmony of Aandré Amelie with our signature 5-piece trial collection.
            </p>
            <Button href="/shop/the-trial-pack" className="w-full max-w-[200px] text-[10px] sm:text-xs">Shop Trial Pack</Button>
          </div>
          <div className="relative w-full sm:w-1/2 min-h-[250px]">
            <img src="/images/trial-pack-new.png" alt="The Trial Pack" className="w-full h-full object-contain object-center" />
          </div>
        </div>
      </Reveal>
    </div>
  );
}
