"use client";

import Image from "next/image";
import Reveal from "./Reveal";

const INGREDIENT_IMAGES: Record<string, string> = {
  "Rose": "/images/ingredients/rose.png",
  "Lavender": "/images/ingredients/lavender.png",
  "Mandarin": "/images/ingredients/mandarin.png",
  "Rosemary": "/images/ingredients/rosemary.png",
  "Basil": "/images/ingredients/basil.png",
  "Turmeric": "/images/ingredients/turmeric.png",
  "Turmeric Powder": "/images/ingredients/turmeric.png",
  "Jojoba Oil": "/images/ingredients/jojoba.png",
  "Lemongrass": "/images/ingredients/lemongrass.png",
  "Curry Leaf": "/images/ingredients/curry_leaf.png",
  "Tea Tree": "/images/ingredients/tea_tree.png",
  "Multani Mitti": "/images/ingredients/multani_mitti.png",
  "Pink Clay": "/images/ingredients/pink_clay.png",
  "Neem Leaf Powder": "/images/ingredients/neem.png",
  "Rose Petal Powder": "/images/ingredients/rose_petal_powder.png",
  "Sandalwood Powder": "/images/ingredients/sandalwood_powder.png",
};

export default function ProductIngredients({ ingredients }: { ingredients: string[] }) {
  if (!ingredients || ingredients.length === 0) return null;

  return (
    <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-10 lg:px-16 border-t border-outline-variant/30">
      <Reveal>
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-[0.25em] text-sun-terracotta uppercase block mb-3">
            Pure & Natural
          </span>
          <h2 className="font-serif text-3xl text-charcoal">Key Botanicals</h2>
          <p className="mt-3 text-sm text-charcoal/70 max-w-xl mx-auto italic">
            Hand-selected, earth-derived ingredients for true living skincare.
          </p>
        </div>
      </Reveal>
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-12">
        {ingredients.map((ingredient, i) => {
          const imageSrc = INGREDIENT_IMAGES[ingredient] || "/images/ingredients/rose.png";

          return (
            <Reveal key={ingredient} delay={i * 50} className="w-[140px] sm:w-[160px]">
              <div className="flex flex-col items-center group">
                <div className="relative mb-5 aspect-square w-full overflow-hidden rounded-full border border-outline-variant/30 bg-cream-deep transition-all duration-500 group-hover:border-sun-terracotta group-hover:shadow-md">
                  <Image
                    src={imageSrc}
                    alt={ingredient}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 160px, 160px"
                  />
                </div>
                <h3 className="text-center font-serif text-lg text-charcoal leading-tight">{ingredient}</h3>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
