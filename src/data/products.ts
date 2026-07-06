export interface BenefitItem {
  title: string;
  description: string;
}

export interface BenefitSection {
  heading: string;
  intro?: string;
  items?: BenefitItem[];
}

export interface UseStep {
  label: string;
  text: string;
}

export interface Product {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  hook: string;
  placeholder: "sun" | "moon" | "dawn";
  image?: string;
  heroVideo?: string;
  heroPoster?: string;
  description: string;
  afterShaveBenefit?: string;
  bestFor: BenefitItem[];
  healthBoost?: BenefitItem[];
  benefitSections: BenefitSection[];
  howToUse: UseStep[];
  care: string;
}

export const CARE_INSTRUCTIONS =
  "Store the 100ml mist bottle in a cool place (max 25°C). Close the lid tightly immediately after use. Contains no preservatives — regular use and proper storage are essential.";

export const products: Product[] = [
  {
    slug: "royal-rose-elixir",
    name: "Royal Rose Elixir",
    category: "The Elixirs",
    tagline: "Sip on Wellness, Sniff on Wellness, Shine from Within",
    hook: "A beauty ritual, sipped, sniffed, and worn.",
    placeholder: "dawn",
    image: "/images/royal-rose-elixir.jpg",
    heroVideo: "/videos/royal-rose-elixir.mp4",
    heroPoster: "/images/royal-rose-elixir.jpg",
    description:
      "Delivers deep hydration and soothing relief, reducing discoloration and refining pores. Ideal for all skin types, this toner enhances skin texture, evens tone, and promotes a radiant, balanced complexion.",
    bestFor: [
      {
        title: "Sensitive Skin",
        description: "Soothes and reduces redness and irritation",
      },
      {
        title: "Dry Skin",
        description: "Hydrates and maintains moisture balance",
      },
      {
        title: "Oily Skin",
        description: "Balances oil production and refines pores",
      },
      {
        title: "Combination Skin",
        description: "Helps even out skin tone and texture",
      },
      {
        title: "Mature Skin",
        description: "Provides anti-aging benefits and improves elasticity",
      },
    ],
    healthBoost: [
      {
        title: "Sip on Wellness",
        description:
          "Soothes digestion, eases acid reflux, alleviates headaches, and lifts mood — with a subtle floral flavor in food and drink.",
      },
      {
        title: "Sniff on Wellness",
        description:
          "Calming and stress-reducing, with an uplifting aroma that supports emotional balance and relaxation.",
      },
    ],
    benefitSections: [
      {
        heading: "Clinical Benefits",
        intro:
          "Packed with Vitamin C to boost collagen and shield skin from daily stressors; Vitamin A renews skin cells; B vitamins soothe inflammation and support hydration.",
      },
    ],
    howToUse: [
      {
        label: "As a Toner",
        text: "After cleansing, morning and evening, to tighten pores and firm skin.",
      },
      {
        label: "Refreshing Mist",
        text: "Anytime for a quick revitalizing refresh.",
      },
      {
        label: "Health Drink",
        text: "1–2 tablespoons each morning on an empty stomach, or add to your water bottle.",
      },
      {
        label: "Eye Care",
        text: "Use as eye drops 2–3 times daily to relieve fatigue.",
      },
      {
        label: "Flavor Enhancer",
        text: "Add to kheer, gulab jamun, shakes, and smoothies.",
      },
      { label: "Aromatherapy", text: "A few drops in a diffuser." },
      {
        label: "Instant Rose Tea",
        text: "1–2 tablespoons in warm water.",
      },
    ],
    care: CARE_INSTRUCTIONS,
  },
  {
    slug: "glow-quinch-elixir",
    name: "Glow Quinch Elixir",
    category: "Lunar Calm",
    image: "/images/stitch/lunar-clarifying-mist.jpg",
    tagline: "A Gentle Hug for Skin and Senses",
    hook: "A gentle hug for skin and senses.",
    placeholder: "moon",
    description:
      "Soothes and calms, easing stress and anxiety while giving skin a refreshing burst of hydration. Balances complexion, reduces redness, and tightens pores naturally. Calming lavender relaxes the mind and improves sleep, with mild antiseptic qualities for minor skin irritations.",
    afterShaveBenefit:
      "Cools and soothes irritated skin, easing redness and helping prevent post-shave bumps or infection.",
    bestFor: [
      {
        title: "Sensitive Skin",
        description: "Calms irritation and reduces redness",
      },
      { title: "Dry Skin", description: "Hydration and moisture balance" },
      { title: "Oily Skin", description: "Balances oil and refines pores" },
      {
        title: "Combination Skin",
        description: "Maintains equilibrium between different skin areas",
      },
    ],
    healthBoost: [
      {
        title: "Sip on Wellness",
        description:
          "Best taken before bed. Lavender promotes relaxation and reduces anxiety for better sleep, enhances mood, and its anti-inflammatory properties support appetite, calm nausea and bloating, and overall digestive health. Consult a healthcare provider before adding new supplements to your diet.",
      },
    ],
    benefitSections: [
      {
        heading: "Clinical Benefits",
        items: [
          {
            title: "Vitamin A",
            description: "Supports skin repair and regeneration",
          },
          {
            title: "Vitamin C",
            description: "Antioxidant protection, brightens skin",
          },
          { title: "Vitamin E", description: "Additional antioxidant support" },
          {
            title: "Lactic Acid",
            description: "Gently exfoliates, improves texture",
          },
          {
            title: "Citric Acid",
            description: "Balances skin pH, enhances efficacy",
          },
        ],
      },
    ],
    howToUse: [
      {
        label: "Skin Care",
        text: "Use as a refreshing face mist or toner; a natural alternative to alcohol-based aftershave.",
      },
      {
        label: "Hair Care",
        text: "Apply to roots after shampooing, when hair is semi-dry.",
      },
      {
        label: "Food & Beverages",
        text: "Add to cooked dishes and drinks for flavor and nutrition.",
      },
      {
        label: "Herbal Tea",
        text: "1–2 teaspoons (8–10 drops) in warm water for a calming lavender tea.",
      },
    ],
    care: CARE_INSTRUCTIONS,
  },
  {
    slug: "acne-shield",
    name: "Acne Shield",
    category: "Solar Clarity",
    image: "/images/stitch/radiant-sun-serum.jpg",
    tagline: "Clear, Calm, Balanced — Naturally",
    hook: "Clear, calm, balanced — naturally.",
    placeholder: "sun",
    description:
      "The Ultimate Skin Revitalizing Blend — a fusion of Mandarin, Rose, Rosemary, Basil, and Turmeric hydrosols with nourishing jojoba oil. Tones and tightens, controls excess oil, mattifies the complexion, and helps prevent breakouts, while soothing and hydrating to reduce redness.",
    afterShaveBenefit:
      "Soothes and calms post-shave, reducing irritation and redness while providing deep hydration.",
    bestFor: [
      {
        title: "Oily Skin",
        description: "Controls excess oil and sebum, balances and mattifies",
      },
      {
        title: "Acne-Prone Skin",
        description:
          "Reduces acne marks, soothes irritation, helps prevent breakouts",
      },
      {
        title: "Sensitive Skin",
        description:
          "Calms redness and inflammation while maintaining hydration",
      },
      {
        title: "Normal Skin",
        description: "Enhances moisture balance and overall skin health",
      },
    ],
    benefitSections: [
      {
        heading: "Key Ingredients",
        items: [
          {
            title: "Mandarin Hydrosol",
            description:
              "Balances oily skin, reduces acne marks, revitalizes with Vitamin C; regulates sebum with Citric Acid",
          },
          {
            title: "Rose Hydrosol",
            description:
              "Soothes inflammation, hydrates, maintains moisture balance; rich in Vitamin A & C",
          },
          {
            title: "Rosemary Hydrosol",
            description:
              "Enhances circulation, tones, natural astringent; Rosmarinic Acid refines pores",
          },
          {
            title: "Basil Hydrosol",
            description:
              "Purifies and balances, reduces blemishes; Vitamin K and Magnesium",
          },
          {
            title: "Turmeric Hydrosol",
            description:
              "Calms inflammation, reduces redness, evens tone; antioxidant-rich Curcumin",
          },
          {
            title: "Jojoba Oil",
            description:
              "Deep moisture, regulates oil production, supports repair; Vitamin E and B",
          },
        ],
      },
    ],
    howToUse: [
      {
        label: "As a Toner",
        text: "After cleansing, apply with a cotton pad or mist directly onto skin to balance and prep.",
      },
      {
        label: "For Hydration & Soothing",
        text: "Mist throughout the day, especially in dry environments or after sun exposure.",
      },
      {
        label: "Soothing Treatment",
        text: "Apply directly to irritated or inflamed areas; leave a few minutes before rinsing if needed.",
      },
      {
        label: "As an After-Shave",
        text: "Apply to freshly shaved skin to soothe, balance tone, and tighten pores.",
      },
    ],
    care: CARE_INSTRUCTIONS,
  },
  {
    slug: "vital-grow-scalp",
    name: "Vital Grow Scalp",
    category: "Root Ritual",
    image: "/images/stitch/umbra-night-balm.jpg",
    tagline: "Strength and Shine, Rooted in Nature",
    hook: "Strength and shine, rooted in nature.",
    placeholder: "moon",
    description:
      "A hand-crafted Hair and Scalp Revitalizer blending premium hydrosols with jojoba oil to rejuvenate and protect hair from environmental damage — combining Rosemary, Lemongrass, Curry Leaf, Basil, and Tea Tree with nourishing jojoba oil.",
    bestFor: [],
    benefitSections: [
      {
        heading: "Product Benefits",
        items: [
          {
            title: "Strengthens & Revitalizes",
            description:
              "Rosemary and Curry Leaf stimulate hair growth and fortify strands root to tip; Tea Tree purifies the scalp and reduces dandruff and irritation.",
          },
          {
            title: "Balances & Refreshes",
            description:
              "Lemongrass and Basil control excess oil, enhance shine, and keep the scalp clean and refreshed.",
          },
          {
            title: "Soothes & Protects",
            description:
              "Jojoba oil deeply moisturizes and balances oil production without clogging pores; Vitamin E calms irritation and redness.",
          },
        ],
      },
      {
        heading: "Key Ingredients",
        items: [
          {
            title: "Rosemary Hydrosol",
            description:
              "Circulation, hair growth, combats dandruff (Rosmarinic Acid)",
          },
          {
            title: "Lemongrass Hydrosol",
            description:
              "Natural astringent, brightens hair, regulates oil (Citric Acid, Vitamin C)",
          },
          {
            title: "Curry Leaf Hydrosol",
            description:
              "Nourishes and strengthens hair, soothes scalp, protects against oxidative stress (Beta-Carotene, minerals)",
          },
          {
            title: "Basil Hydrosol",
            description: "Purifies and balances scalp, reduces dandruff (Vitamin K, Magnesium)",
          },
          {
            title: "Tea Tree Hydrosol",
            description:
              "Antimicrobial protection, reduces irritation, maintains cleanliness (Terpinen-4-ol)",
          },
          {
            title: "Jojoba Oil",
            description: "Deep moisture, regulates sebum, aids healing (Vitamin E)",
          },
        ],
      },
    ],
    howToUse: [
      {
        label: "For Hair & Scalp",
        text: "After washing, mist onto damp hair and scalp, massage gently, let air-dry.",
      },
      {
        label: "Scalp Treatment",
        text: "Apply directly to areas of irritation or dryness, massage, leave a few minutes before rinsing.",
      },
      {
        label: "As a Leave-In Treatment",
        text: "Light mist as a leave-in for hydration, detangling, and a refreshing boost.",
      },
    ],
    care: CARE_INSTRUCTIONS,
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
