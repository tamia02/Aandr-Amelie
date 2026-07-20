"use client";

import Image from "next/image";
import type { Product } from "@/data/products";
import Reveal from "./Reveal";

export default function ProductInfographics({ product }: { product: Product }) {
  let bgImage = "/images/backgrounds/bg_rose.png";
  
  if (product.slug === "glow-quinch-elixir") bgImage = "/images/backgrounds/bg_lavender.png";
  if (product.slug === "acne-shield") bgImage = "/images/backgrounds/bg_citrus_herb.png";
  if (product.slug === "vital-grow-scalp") bgImage = "/images/backgrounds/bg_rosemary.png";
  if (product.category === "Botanical Clays") bgImage = "/images/backgrounds/bg_clay.png";
  
  const composition = product.benefitSections[0];

  return (
    <section className="mx-auto max-w-[1440px] px-5 py-12 sm:px-10 lg:px-16 mt-8">
      <Reveal>
        <h2 className="mb-10 text-center text-xs font-semibold tracking-[0.2em] text-outline uppercase">
          Visual Experience
        </h2>
      </Reveal>
      
      {/* Snap Scroll Container */}
      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        
        {/* Card 1: Product Showcase */}
        <div className="relative flex-shrink-0 w-[85vw] max-w-md h-[600px] snap-center rounded-sm overflow-hidden bg-charcoal">
          <Image src={bgImage} alt="Background" fill className="object-cover opacity-40 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
          <div className="absolute inset-0 p-8 flex flex-col justify-end text-cream z-10">
            <span className="text-[10px] font-bold tracking-widest uppercase text-sun-gold mb-3">{product.category}</span>
            <h3 className="font-serif text-4xl mb-4">{product.name}</h3>
            <p className="text-sm text-cream/80 leading-relaxed font-serif italic mb-6">"{product.hook}"</p>
            {product.image && (
               <div className="relative w-full h-48 rounded overflow-hidden shadow-2xl border border-cream/10">
                  <Image src={product.image} alt={product.name} fill className="object-cover" />
               </div>
            )}
          </div>
        </div>

        {/* Card 2: Key Benefits */}
        {product.bestFor && product.bestFor.length > 0 && (
          <div className="relative flex-shrink-0 w-[85vw] max-w-md h-[600px] snap-center rounded-sm overflow-hidden bg-charcoal">
            <Image src={bgImage} alt="Background" fill className="object-cover opacity-30" />
            <div className="absolute inset-0 p-8 flex flex-col justify-center text-cream z-10 bg-charcoal/40 backdrop-blur-sm">
              <h3 className="font-serif text-3xl mb-8 border-b border-cream/20 pb-4">Key Benefits</h3>
              <div className="space-y-6">
                {product.bestFor.slice(0, 4).map((item) => (
                  <div key={item.title}>
                    <h4 className="font-serif text-lg text-sun-gold mb-1">{item.title}</h4>
                    <p className="text-sm text-cream/80 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Card 3: Clinical / Ingredients */}
        {composition && (
          <div className="relative flex-shrink-0 w-[85vw] max-w-md h-[600px] snap-center rounded-sm overflow-hidden bg-charcoal">
            <Image src={bgImage} alt="Background" fill className="object-cover opacity-30" />
            <div className="absolute inset-0 p-8 flex flex-col justify-center text-cream z-10 bg-charcoal/40 backdrop-blur-sm">
              <h3 className="font-serif text-3xl mb-6 border-b border-cream/20 pb-4">{composition.heading || "Composition"}</h3>
              {composition.intro && <p className="text-sm text-cream/90 italic mb-6">{composition.intro}</p>}
              <div className="space-y-5 overflow-y-auto pr-2" style={{ maxHeight: '350px' }}>
                {composition.items?.map((item) => (
                  <div key={item.title}>
                    <h4 className="font-serif text-md text-sun-gold mb-1">{item.title}</h4>
                    <p className="text-xs text-cream/70 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Card 4: How To Use */}
        {product.howToUse && product.howToUse.length > 0 && (
          <div className="relative flex-shrink-0 w-[85vw] max-w-md h-[600px] snap-center rounded-sm overflow-hidden bg-charcoal">
            <Image src={bgImage} alt="Background" fill className="object-cover opacity-30" />
            <div className="absolute inset-0 p-8 flex flex-col justify-center text-cream z-10 bg-charcoal/40 backdrop-blur-sm">
              <h3 className="font-serif text-3xl mb-8 border-b border-cream/20 pb-4">How To Use</h3>
              <div className="space-y-6 overflow-y-auto pr-2" style={{ maxHeight: '420px' }}>
                {product.howToUse.map((step, i) => (
                  <div key={step.label} className="flex gap-4">
                     <span className="text-sun-gold text-lg font-serif italic">{i+1}.</span>
                     <div>
                      <h4 className="font-serif text-md text-cream mb-1">{step.label}</h4>
                      <p className="text-sm text-cream/70 leading-relaxed">{step.text}</p>
                     </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Card 5: Care & Brand */}
        {product.care && (
          <div className="relative flex-shrink-0 w-[85vw] max-w-md h-[600px] snap-center rounded-sm overflow-hidden bg-charcoal">
            <Image src={bgImage} alt="Background" fill className="object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent opacity-90" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-cream z-10 text-center items-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="h-10 w-10 text-sun-gold mb-6 opacity-80">
                 <path d="M12 3c-4 3-6 6-6 10a6 6 0 0 0 12 0c0-4-2-7-6-10ZM12 22v-9" />
              </svg>
              <h3 className="font-serif text-2xl mb-4 text-sun-gold">Care & Preservation</h3>
              <p className="text-sm text-cream/80 leading-relaxed mb-8">{product.care}</p>
              <div className="w-12 h-[1px] bg-sun-gold/50 mb-6"></div>
              <p className="text-xs text-cream/50 uppercase tracking-widest">Handcrafted & Organic</p>
            </div>
          </div>
        )}

      </div>
      {/* CSS for scrollbar hide in global or inline */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}} />
    </section>
  );
}
