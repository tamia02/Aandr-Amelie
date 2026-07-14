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

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Product {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  hook: string;
  placeholder: "sun" | "moon" | "dawn";
  image?: string;
  images?: string[];
  heroVideo?: string;
  heroPoster?: string;
  description: string;
  afterShaveBenefit?: string;
  bestFor: BenefitItem[];
  healthBoost?: BenefitItem[];
  benefitSections: BenefitSection[];
  howToUse: UseStep[];
  care: string;
  // SEO & UX Extensions
  seoTitle: string;
  seoDescription: string;
  faqs: FAQItem[];
  concernSlugs: string[];
  ingredientsList: string[];
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
    image: "/images/rosemain.png",
    images: [
      "/images/rosemain.png",
      "/images/rose1.png",
      "/images/rose2.png",
      "/images/rose3.png"
    ],
    heroVideo: "/videos/royal-rose-elixir.mp4?v=2",
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
    seoTitle: "Royal Rose Elixir — Edible Rosewater Toner & Mist | Aandré Amelie",
    seoDescription: "Sip and spray pure organic rosewater. Rejuvenates skin, aids digestion, eases reflux, and calms eyes. Zero preservatives. Shop now.",
    concernSlugs: ["sensitive-dry", "oily-acne"],
    ingredientsList: ["Rose"],
    faqs: [
      {
        question: "Can I drink Royal Rose Elixir?",
        answer: "Yes, Royal Rose Elixir is edible-grade. You can drink 1–2 tablespoons in the morning on an empty stomach, or add it to warm water, teas, desserts (like kheer and gulab jamun), or smoothies.",
      },
      {
        question: "How is this rosewater different from standard cosmetic ones?",
        answer: "Standard cosmetic rosewaters often contain synthetic preservatives, alcohols, or artificial chemical fragrances. Ours is pure steam-distilled organic rose hydrosol with zero additives, making it perfectly safe for both topical use and consumption.",
      },
      {
        question: "Can I use it on dry and sensitive skin?",
        answer: "Absolutely. Rose hydrosol is natural, gentle, and highly anti-inflammatory, making it excellent for hydrating dry skin and soothing sensitive or irritated skin.",
      },
      {
        question: "Can it be used as eye drops?",
        answer: "Yes, it is traditionally used to soothe tired, dry, or puffy eyes by applying 1–2 drops directly, offering cooling relief.",
      },
    ],
  },
  {
    slug: "glow-quinch-elixir",
    name: "Glow Quinch Elixir",
    category: "Lunar Calm",
    image: "/images/glow-quinch-elixir.jpg",
    images: [
      "/images/glow-quinch-elixir.jpg",
      "/images/lavender1.png",
      "/images/lavender2.png"
    ],
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
    seoTitle: "Glow Quinch Elixir — Soothing Lavender Mist & Sleep Drink | Aandré Amelie",
    seoDescription: "Premium edible lavender water for skin and sleep. Calms anxiety, eases razor burn, and improves sleep. Organic, preservative-free.",
    concernSlugs: ["sensitive-dry", "sleep-stress"],
    ingredientsList: ["Lavender"],
    faqs: [
      {
        question: "How does lavender water help with sleep?",
        answer: "Lavender contains natural compounds that ease anxiety and promote deep relaxation. Misting your face and pillow before sleep, or drinking a teaspoon in warm water, helps calm the nervous system for restful sleep.",
      },
      {
        question: "Can Glow Quinch Elixir be used as an aftershave?",
        answer: "Yes, it serves as a wonderful natural, alcohol-free alternative to aftershaves. It cools razor burn, reduces redness, and has mild antiseptic qualities that prevent post-shave bumps.",
      },
      {
        question: "Is it safe to consume?",
        answer: "Yes, it is edible-grade. You can add 1–2 teaspoons (8–10 drops) to warm water to make a calming lavender tea or use it to flavor specialty beverages.",
      },
    ],
  },
  {
    slug: "acne-shield",
    name: "Acne Shield",
    category: "Solar Clarity",
    image: "/images/acne-shield.jpg",
    images: [
      "/images/acne-shield.jpg",
      "/images/achne1.png",
      "/images/acne2.png",
      "/images/acne3.png"
    ],
    tagline: "Clear, Calm, Balanced — Naturally",
    hook: "Clear, calm, balanced — naturally.",
    placeholder: "sun",
    description:
      "Discover the transformative power of our Ultimate Skin Revitalizing Blend, a luxurious fusion of Mandarin, Rose, Rosemary, Basil, Turmeric Arks, and nourishing jojoba oil. Achieve a clear, balanced complexion with this Anti-Acne Revitalizing Formula, designed specifically for oily skin. It tones and tightens while controlling excess oil, mattifying the complexion, and helping to prevent acne. It soothes and hydrates, reducing redness and improving moisture balance. Enriched with jojoba oil, it regulates sebum production and enhances skin repair without clogging pores. Additionally, it serves as a soothing after-shave treatment, calming irritation and reducing redness post-shave for a shine-free, radiant complexion.",
    afterShaveBenefit:
      "Soothes and calms the skin post-shave, reducing irritation and redness while providing deep hydration.",
    bestFor: [
      {
        title: "Oily Skin",
        description: "Controls excess oil and sebum production, balancing and mattifying the complexion.",
      },
      {
        title: "Acne-Prone Skin",
        description: "Reduces acne marks, soothes irritation, and helps prevent breakouts.",
      },
      {
        title: "Sensitive Skin",
        description: "Calms redness and inflammation while maintaining hydration.",
      },
      {
        title: "Normal Skin",
        description: "Enhances moisture balance and supports overall skin health.",
      },
    ],
    benefitSections: [
      {
        heading: "Product Benefits",
        items: [
          {
            title: "Hydrates and Soothes",
            description: "Rose Ark and jojoba oil deliver deep hydration while soothing inflammation and irritation. Rose Ark calms redness and balances moisture, whereas jojoba oil mimics the skin’s natural oils to prevent dryness and enhance suppleness.",
          },
          {
            title: "Balances and Clarifies",
            description: "Mandarin and Basil Arks work together to regulate oil production and reduce excess sebum, helping to prevent acne and maintain a fresh, balanced complexion. Mandarin's Vitamin C brightens the skin, while Basil purifies and revitalizes.",
          },
          {
            title: "Enhances Skin Texture",
            description: "Rosemary and Turmeric Arks improve skin texture by promoting a clearer, more even complexion. Rosemary boosts circulation and refines pores, while Turmeric’s anti-inflammatory properties reduce redness and support overall skin health.",
          },
          {
            title: "Nourishes and Protects",
            description: "Jojoba oil provides essential fatty acids and Vitamin E, which help to repair the skin barrier, protect against environmental damage, and support natural healing processes. It also assists in calming irritated skin and reducing blemishes.",
          },
          {
            title: "After-Shave Benefits",
            description: "Soothes and reduces irritation caused by shaving, balances skin tone, and prevents razor burn. It also helps to tighten pores and calm any redness or inflammation.",
          },
        ],
      },
      {
        heading: "Key Ingredients",
        items: [
          {
            title: "Mandarin Hydrosol",
            description:
              "Balances oily skin, reduces acne marks, and revitalizes the complexion with its Vitamin C content. It also regulates sebum production with Citric Acid.",
          },
          {
            title: "Rose Hydrosol",
            description:
              "Soothes inflammation, hydrates, and maintains moisture balance. Rich in Vitamin A and C, it supports skin repair and reduces redness.",
          },
          {
            title: "Rosemary Hydrosol",
            description:
              "Enhances circulation, tones the skin, and acts as a natural astringent. Contains Rosmarinic Acid to refine pores and boost overall skin health.",
          },
          {
            title: "Basil Hydrosol",
            description:
              "Purifies and balances the skin, reduces blemishes, and maintains a clear complexion. It provides essential nutrients like Vitamin K and Magnesium.",
          },
          {
            title: "Turmeric Hydrosol",
            description:
              "Calms inflammation, reduces redness, and helps even out skin tone with its antioxidant-rich profile, including Curcumin.",
          },
          {
            title: "Jojoba Oil",
            description:
              "Moisturizes deeply, regulates oil production, and supports skin repair with its high Vitamin E and B content. It also provides antioxidant protection.",
          },
        ],
      },
    ],
    howToUse: [
      {
        label: "As a Toner",
        text: "After cleansing, apply the blend to your face using a cotton pad or mist it directly onto your skin. This helps to balance and prep your skin for further treatment. The blend of Mandarin, Rose, and Rosemary Arks helps regulate oil production and refresh your complexion.",
      },
      {
        label: "For Hydration and Soothing",
        text: "Use as a facial mist throughout the day to refresh and hydrate your skin, especially in dry environments or after sun exposure. Few drops into your skin in the morning and evening enhance moisture and support the skin’s natural repair processes.",
      },
      {
        label: "For a Soothing Treatment",
        text: "Apply directly to irritated or inflamed areas to calm and reduce redness. Leave it on for a few minutes before rinsing if needed. The healing benefits of Jojoba Oil and Turmeric Ark work together to reduce redness, even out skin tone, and improve texture.",
      },
      {
        label: "As an After-Shave",
        text: "Apply to freshly shaved skin to soothe irritation, balance skin tone, and tighten pores. The Rose and Turmeric hydrosols help reduce redness and irritation, while Jojoba Oil hydrates and supports skin repair. Healing properties of Turmeric works antiseptic on cuts.",
      },
    ],
    care: "To experience the full benefits apply it regularly. Store the 100ml mist dispensing bottle at a cool place, with a maximum temperature of 25°C. Always close the lid tightly immediately after use. Ensure it remains free from contamination. As it contains no preservatives, regular use and proper storage are essential to ensure maximum benefits.",
    seoTitle: "Acne Shield — Clarifying Mandarin & Basil Hydrosol Toner | Aandré Amelie",
    seoDescription: "Clear breakouts naturally. A clarifying facial toner blending Mandarin, Rose, Basil, Turmeric hydrosols, and jojoba oil. Non-comedogenic.",
    concernSlugs: ["oily-acne"],
    ingredientsList: ["Mandarin", "Rose", "Rosemary", "Basil", "Turmeric", "Jojoba Oil"],
    faqs: [
      {
        question: "Why does Acne Shield contain jojoba oil if it is for oily skin?",
        answer: "Jojoba oil is molecularly very close to your skin's natural sebum. When applied, it provides lightweight moisture that signals your skin to stop overproducing oil, helping to balance your complexion without clogging pores.",
      },
      {
        question: "How often should I use Acne Shield?",
        answer: "We recommend using it twice daily—morning and evening—after cleansing. It can also be misted throughout the day to mattify and soothe irritated skin.",
      },
      {
        question: "Is this product edible?",
        answer: "No. Unlike our single-source elixirs, Acne Shield contains a botanical blend and nourishing jojoba oil formulated strictly for topical skin and aftershave application. It is not for consumption.",
      },
      {
        question: "Will it help with razor burn?",
        answer: "Yes, the cooling properties of Mandarin and Basil, combined with the anti-inflammatory power of Turmeric and moisturizing Jojoba, make it a highly effective natural aftershave that combats redness and irritation.",
      },
    ],
  },
  {
    slug: "vital-grow-scalp",
    name: "Vital Grow Scalp",
    category: "Root Ritual",
    image: "/images/vital-grow-scalp.jpg",
    images: ["/images/vital-grow-scalp.jpg", "/images/vital1.png"],
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
    seoTitle: "Vital Grow Scalp — Hair Growth Rosemary & Curry Leaf Tonic | Aandré Amelie",
    seoDescription: "Strengthen hair from root to tip. Rosemary water, curry leaf hydrosol, and tea tree scalp tonic. Reduces dandruff and stimulates growth.",
    concernSlugs: ["hair-scalp"],
    ingredientsList: ["Rosemary", "Lemongrass", "Curry Leaf", "Basil", "Tea Tree", "Jojoba Oil"],
    faqs: [
      {
        question: "How does rosemary water help hair growth?",
        answer: "Rosemary hydrosol contains rosmarinic acid, which increases blood circulation to the hair follicles, improving cellular nutrition and strengthening hair from root to tip.",
      },
      {
        question: "Does it make the hair greasy?",
        answer: "No. The base is steam-distilled water-based hydrosols. The inclusion of jojoba oil is light and balanced, absorbing quickly to nourish the scalp without leaving a heavy or greasy residue.",
      },
      {
        question: "How should I apply it?",
        answer: "Mist directly onto a clean, damp scalp after washing. Massage gently with your fingertips. Let it air-dry; do not rinse it out.",
      },
      {
        question: "Can I use it for dandruff and itchy scalp?",
        answer: "Yes, the addition of Tea Tree, Lemongrass, and Basil hydrosols provides natural antimicrobial and purifying benefits, helping to reduce dandruff flakes and relieve itchy skin.",
      },
    ],
  },
  {
    slug: "complete-collection-combo",
    name: "Aandré Amelie Complete Collection",
    category: "The Apothecary Bundle",
    image: "/images/image.png",
    images: [
      "/images/image.png",
      "/images/four1.png",
      "/images/four2.png",
      "/images/four3.png",
      "/images/four4.png"
    ],
    tagline: "The Ultimate Holistic Beauty Ritual",
    hook: "Experience the full spectrum of botanical wellness.",
    placeholder: "dawn",
    description:
      "A complete set of our signature hydrosols and elixirs. Hydrate, balance, soothe, and revitalize from head to toe. This collection includes Royal Rose Elixir, Glow Quinch Elixir, Acne Shield, and Vital Grow Scalp, designed to work harmoniously for a comprehensive skincare and haircare ritual.",
    bestFor: [
      {
        title: "Complete Wellness",
        description: "Perfect for balancing skin, hair, and senses holistically.",
      },
    ],
    benefitSections: [
      {
        heading: "Collection Highlights",
        items: [
          {
            title: "Royal Rose Elixir",
            description: "Hydrates, evens skin tone, and promotes radiant balance.",
          },
          {
            title: "Glow Quinch Elixir",
            description: "Soothes skin and senses, easing stress for better sleep.",
          },
          {
            title: "Acne Shield",
            description: "Clarifies oily skin, controls sebum, and prevents breakouts.",
          },
          {
            title: "Vital Grow Scalp",
            description: "Strengthens hair roots, purifies the scalp, and enhances shine.",
          },
        ],
      },
    ],
    howToUse: [
      {
        label: "The Daily Ritual",
        text: "Incorporate each product into your daily routine: Royal Rose as your morning toner and health drink, Acne Shield to clarify problem areas, Vital Grow for your post-shower scalp care, and Glow Quinch as your evening wind-down mist.",
      },
    ],
    care: CARE_INSTRUCTIONS,
    seoTitle: "Aandré Amelie Complete Collection — Organic Hydrosol Combo Set",
    seoDescription: "The ultimate 4-piece holistic beauty bundle. Hydrate skin, clear acne, strengthen hair, and soothe your senses. Shop the complete collection.",
    concernSlugs: ["sensitive-dry", "sleep-stress", "oily-acne", "hair-scalp"],
    ingredientsList: ["Rose", "Lavender", "Mandarin", "Rosemary", "Basil", "Turmeric", "Lemongrass", "Curry Leaf", "Tea Tree", "Jojoba Oil"],
    faqs: [
      {
        question: "Does this collection come in a gift box?",
        answer: "Yes, the Complete Collection arrives beautifully packaged in our signature gift bag, making it a perfect present for yourself or a loved one.",
      },
      {
        question: "How long will the products last?",
        answer: "With daily use, the 100ml bottles typically last 4 to 6 weeks. Proper storage in a cool place ensures maximum freshness.",
      },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
