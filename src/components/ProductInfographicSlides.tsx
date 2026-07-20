import React from "react";
import Image from "next/image";
import type { Product } from "@/data/products";

export interface CustomSlide {
  id: string;
  thumbnail: React.ReactNode;
  content: React.ReactNode;
}

export function getInfographicSlides(product: Product): CustomSlide[] {
  let bgImage = "/images/backgrounds/bg_rose.png";
  if (product.slug === "glow-quinch-elixir") bgImage = "/images/backgrounds/bg_lavender.png";
  if (product.slug === "acne-shield") bgImage = "/images/backgrounds/bg_citrus_herb.png";
  if (product.slug === "vital-grow-scalp") bgImage = "/images/backgrounds/bg_rosemary.png";
  if (product.category === "Botanical Clays") bgImage = "/images/backgrounds/bg_clay.png";
  
  const composition = product.benefitSections[0];
  const slides: CustomSlide[] = [];

  // Slide 1: Key Benefits
  if (product.bestFor && product.bestFor.length > 0) {
    slides.push({
      id: "infographic-benefits",
      thumbnail: (
        <div className="relative w-full h-full">
          <Image src={bgImage} alt="Benefits" fill className="object-cover opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center p-1 bg-charcoal/40">
            <span className="text-[8px] font-bold tracking-widest text-cream uppercase text-center leading-tight">Benefits</span>
          </div>
        </div>
      ),
      content: (
        <>
          <Image src={bgImage} alt="Background" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 p-5 sm:p-8 flex flex-col justify-center text-cream z-10 bg-charcoal/40 backdrop-blur-sm">
            <h3 className="font-serif text-2xl mb-4 border-b border-cream/20 pb-2">Key Benefits</h3>
            <div className="space-y-4 overflow-y-auto pr-2 no-scrollbar" style={{ maxHeight: '75%' }}>
              {product.bestFor.map((item) => (
                <div key={item.title}>
                  <h4 className="font-serif text-base text-sun-gold mb-1">{item.title}</h4>
                  <p className="text-xs text-cream/80 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      ),
    });
  }

  // Slide 2: Clinical / Ingredients
  if (composition) {
    slides.push({
      id: "infographic-composition",
      thumbnail: (
        <div className="relative w-full h-full">
          <Image src={bgImage} alt="Composition" fill className="object-cover opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center p-1 bg-charcoal/40">
            <span className="text-[8px] font-bold tracking-widest text-cream uppercase text-center leading-tight">Inside</span>
          </div>
        </div>
      ),
      content: (
        <>
          <Image src={bgImage} alt="Background" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 p-5 sm:p-8 flex flex-col justify-center text-cream z-10 bg-charcoal/40 backdrop-blur-sm">
            <h3 className="font-serif text-2xl mb-4 border-b border-cream/20 pb-2">{composition.heading || "Composition"}</h3>
            {composition.intro && <p className="text-xs text-cream/90 italic mb-4">{composition.intro}</p>}
            <div className="space-y-4 overflow-y-auto pr-2 no-scrollbar" style={{ maxHeight: '65%' }}>
              {composition.items?.map((item) => (
                <div key={item.title}>
                  <h4 className="font-serif text-sm text-sun-gold mb-1">{item.title}</h4>
                  <p className="text-xs text-cream/70 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      ),
    });
  }

  // Slide 3: How To Use
  if (product.howToUse && product.howToUse.length > 0) {
    slides.push({
      id: "infographic-how-to-use",
      thumbnail: (
        <div className="relative w-full h-full">
          <Image src={bgImage} alt="How To Use" fill className="object-cover opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center p-1 bg-charcoal/40">
            <span className="text-[8px] font-bold tracking-widest text-cream uppercase text-center leading-tight">Ritual</span>
          </div>
        </div>
      ),
      content: (
        <>
          <Image src={bgImage} alt="Background" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 p-5 sm:p-8 flex flex-col justify-center text-cream z-10 bg-charcoal/40 backdrop-blur-sm">
            <h3 className="font-serif text-2xl mb-4 border-b border-cream/20 pb-2">How To Use</h3>
            <div className="space-y-4 overflow-y-auto pr-2 no-scrollbar" style={{ maxHeight: '75%' }}>
              {product.howToUse.map((step, i) => (
                <div key={step.label} className="flex gap-3">
                   <span className="text-sun-gold text-base font-serif italic">{i+1}.</span>
                   <div>
                    <h4 className="font-serif text-sm text-cream mb-1">{step.label}</h4>
                    <p className="text-xs text-cream/70 leading-relaxed">{step.text}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ),
    });
  }

  // Slide 4: Care & Brand
  if (product.care) {
    slides.push({
      id: "infographic-care",
      thumbnail: (
        <div className="relative w-full h-full">
          <Image src={bgImage} alt="Care" fill className="object-cover opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center p-1 bg-charcoal/40">
            <span className="text-[8px] font-bold tracking-widest text-cream uppercase text-center leading-tight">Care</span>
          </div>
        </div>
      ),
      content: (
        <>
          <Image src={bgImage} alt="Background" fill className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent opacity-90" />
          <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end text-cream z-10 text-center items-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="h-10 w-10 text-sun-gold mb-6 opacity-80">
               <path d="M12 3c-4 3-6 6-6 10a6 6 0 0 0 12 0c0-4-2-7-6-10ZM12 22v-9" />
            </svg>
            <h3 className="font-serif text-2xl mb-4 text-sun-gold">Care & Preservation</h3>
            <p className="text-sm text-cream/80 leading-relaxed mb-8">{product.care}</p>
            <div className="w-12 h-[1px] bg-sun-gold/50 mb-6"></div>
            <p className="text-xs text-cream/50 uppercase tracking-widest">Handcrafted & Organic</p>
          </div>
        </>
      ),
    });
  }

  return slides;
}
