export interface Concern {
  slug: string;
  name: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  whatToLookFor: string;
  howOurProductsHelp: string;
  howToChoose: string;
  productSlugs: string[];
}

export const concerns: Concern[] = [
  {
    slug: "oily-acne",
    name: "Oily & Acne-Prone",
    seoTitle: "Natural Remedies for Oily & Acne-Prone Skin | Aandré Amelie",
    seoDescription: "Address acne and regulate sebum production naturally with organic botanical hydrosols and non-comedogenic oils. Discover our alchemical solutions.",
    intro: "Oily and acne-prone skin is often the result of overactive sebaceous glands producing excess sebum, coupled with cellular buildup. Standard cosmetic treatments rely on harsh, stripping chemicals that dehydrate the skin, signaling it to produce even more oil. Our approach balances rather than strips.",
    whatToLookFor: "Look for gentle, purifying astringents that clarify pores and regulate sebum without stripping the skin's moisture barrier. Ingredients like Mandarin hydrosol (packed with Vitamin C and Citric Acid), Rosemary, Basil, and Turmeric offer natural antimicrobial and anti-inflammatory properties. Paradoxically, non-comedogenic oils like Jojoba oil help dissolve sebum blockages and signal the skin to slow down oil production.",
    howOurProductsHelp: "We formulate with living hydrosols containing the water-soluble compounds of pure botanicals. Our solar and alchemical blends clarify pores, soothe redness, and promote moisture balance. Our Acne Shield features a custom-distilled blend of Mandarin, Rose, Rosemary, Basil, and Turmeric, stabilized with organic Jojoba oil to address breakouts while preserving the skin's acid mantle.",
    howToChoose: "If you suffer from active breakouts, heavy sebum, or post-acne marks, choose Acne Shield as your primary morning and evening toner. If your skin is highly inflamed, sensitive, or dehydrated alongside oiliness, layer Royal Rose Elixir to calm redness and infuse deeper hydration before applying Acne Shield.",
    productSlugs: ["acne-shield", "royal-rose-elixir"],
  },
  {
    slug: "sensitive-dry",
    name: "Sensitive & Dry",
    seoTitle: "Soothe Sensitive & Dry Skin Naturally | Aandré Amelie",
    seoDescription: "Restore hydration and soothe irritation with pure, organic rosewater and lavender hydrosols. Alcohol-free, preservative-free care for dry skin.",
    intro: "Sensitive and dry skin lacks the lipid protection necessary to seal in moisture, leaving the skin barrier vulnerable to environmental aggressors and prone to redness, tightness, and peeling. Standard cosmetics loaded with synthetic preservatives and alcohols exacerbate this sensitivity.",
    whatToLookFor: "Seek out pure humectants and anti-inflammatory botanical waters that draw moisture into the skin while calming cellular stress. Steam-distilled Rose hydrosol is rich in Vitamins A, C, and E, serving as a classic soothing tonic. Lavender hydrosol cools inflammation, reduces redness, and promotes cellular healing without irritation.",
    howOurProductsHelp: "Our single-origin elixirs are crafted using ancient copper alembic steam distillation, yielding exceptionally pure, therapeutic-grade hydrosols. Because they contain zero chemical preservatives, colorants, or synthetic alcohols, they respect and rebuild the skin's delicate ecosystem.",
    howToChoose: "Choose Royal Rose Elixir for deep, all-day hydration, pore refinement, and anti-aging antioxidant support. Select Glow Quinch Elixir for evening restoration, soothing sensitive flare-ups, cooling razor burns, or when you want to induce relaxation before bed.",
    productSlugs: ["royal-rose-elixir", "glow-quinch-elixir"],
  },
  {
    slug: "hair-scalp",
    name: "Hair & Scalp",
    seoTitle: "Organic Scalp Care & Hair Growth Tonic | Aandré Amelie",
    seoDescription: "Stimulate hair growth, strengthen roots, and eliminate dandruff naturally with rosemary, curry leaf, and tea tree hydrosols. Preservative-free.",
    intro: "Scalp health is the foundation of hair vitality. Concerns like hair fall, slow growth, itching, and dandruff are often caused by poor follicular circulation, excess sebum buildup, or fungal/microbial imbalances on the scalp.",
    whatToLookFor: "Look for circulation-stimulating and purifying botanicals. Rosemary hydrosol (rich in Rosmarinic Acid) is clinically shown to support follicle circulation, promoting growth. Curry Leaf strengthens shafts, while Tea Tree and Lemongrass clear debris and regulate the scalp's microbiome.",
    howOurProductsHelp: "Our scalp care represents a complete departure from sticky, heavy oils. We blend nutrient-dense botanical waters with a micro-dose of organic Jojoba oil, delivering essential fatty acids and antioxidants directly to the follicle in a lightweight leave-in mist.",
    howToChoose: "Use Vital Grow Scalp daily. Spray directly onto your damp or dry scalp, massage with your fingertips to stimulate blood flow, and let it absorb. It doubles as a light detangler and leave-in hair conditioner.",
    productSlugs: ["vital-grow-scalp"],
  },
  {
    slug: "sleep-stress",
    name: "Sleep & Stress",
    seoTitle: "Calming Lavender Aromatherapy & Sleep Tea | Aandré Amelie",
    seoDescription: "Unwind naturally with edible lavender water. Promotes deep relaxation, calms anxiety, and improves sleep quality. Pure aromatherapy.",
    intro: "True beauty radiates from a calm mind and rested body. Chronic stress and poor sleep disrupt the body's cortisol cycles, leading to cellular inflammation, accelerated skin aging, and dullness.",
    whatToLookFor: "Incorporate soothing aromatherapy and calming nervous system tonics. Lavender is renowned for its ability to reduce nervous tension, lower heart rate, and enhance slow-wave sleep. Consuming culinary-grade lavender or inhaling its aroma triggers calm.",
    howOurProductsHelp: "Our Glow Quinch Elixir is steam-distilled from organic lavender to yield an edible-grade hydrosol. It functions as both a topical skin mist and a wellness elixir that can be sipped before bed to promote serene calm from the inside out.",
    howToChoose: "Mist Glow Quinch Elixir onto your face, neck, and pillow before bed. Add 1–2 teaspoons of the elixir to a cup of warm water to brew a soothing lavender sleep tea, completing your evening wind-down ritual.",
    productSlugs: ["glow-quinch-elixir"],
  },
];

export function getConcern(slug: string): Concern | undefined {
  return concerns.find((c) => c.slug === slug);
}
