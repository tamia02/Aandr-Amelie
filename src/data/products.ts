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
    image: "/images/royal-rose-new-main.jpg",
    images: [
      "/images/royal-rose-new-main.jpg",
      "/images/rose3.png"
    ],
    description:
      "A deeply hydrating toner that soothes your skin and fades discoloration while refining pores. Works for every skin type — smooths texture, evens out tone, and leaves your complexion looking fresh and balanced.",
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
          "Rich in Vitamin C, which boosts collagen and protects skin from daily stress. Vitamin A helps renew skin cells, and B vitamins calm inflammation while keeping skin hydrated.",
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
      "/images/lavender2.png"
    ],
    tagline: "A Gentle Hug for Skin and Senses",
    hook: "A gentle hug for skin and senses.",
    placeholder: "moon",
    description:
      "A calming mist that eases stress and gives your skin a refreshing burst of hydration. Balances your complexion, reduces redness, and naturally tightens pores. Lavender relaxes the mind, helps you sleep better, and gently soothes minor skin irritations.",
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
          "Best taken before bed. Lavender helps you relax, eases anxiety, and improves sleep. It also lifts your mood and gently supports digestion — calming nausea and bloating. As always, check with your doctor before adding anything new to your diet.",
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
      "/images/acne3.png"
    ],
    tagline: "Clear, Calm, Balanced — Naturally",
    hook: "Clear, calm, balanced — naturally.",
    placeholder: "sun",
    description:
      "A toner blend of Mandarin, Rose, Rosemary, Basil, and Turmeric hydrosols with jojoba oil — made for oily and acne-prone skin. It tightens pores, controls excess oil, and helps prevent breakouts, while soothing redness and keeping skin hydrated. Jojoba oil balances oil production and helps skin repair itself without clogging pores. It also works well as an after-shave, calming irritation and redness for a fresh, shine-free finish.",
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
            description: "Rose hydrosol and jojoba oil hydrate skin deeply and calm irritation. Rose reduces redness and balances moisture, while jojoba oil works like your skin's own natural oils to keep it soft and prevent dryness.",
          },
          {
            title: "Balances and Clarifies",
            description: "Mandarin and Basil hydrosols work together to control oil and help prevent acne, keeping your complexion fresh and balanced. Mandarin's Vitamin C brightens skin, while Basil purifies and revitalizes.",
          },
          {
            title: "Enhances Skin Texture",
            description: "Rosemary and Turmeric hydrosols smooth skin texture for a clearer, more even complexion. Rosemary boosts circulation and refines pores, while Turmeric calms redness and supports healthy skin.",
          },
          {
            title: "Nourishes and Protects",
            description: "Jojoba oil is rich in fatty acids and Vitamin E, which repair your skin barrier, protect against everyday damage, and support healing. It also calms irritated skin and helps reduce blemishes.",
          },
          {
            title: "After-Shave Benefits",
            description: "Soothes shaving irritation, balances skin tone, and prevents razor burn — while tightening pores and calming redness.",
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
        text: "After cleansing, apply with a cotton pad or mist directly onto your skin to balance and prep it. Mandarin, Rose, and Rosemary help regulate oil and refresh your complexion.",
      },
      {
        label: "For Hydration and Soothing",
        text: "Mist onto your face through the day to refresh and hydrate, especially in dry weather or after sun exposure.",
      },
      {
        label: "For a Soothing Treatment",
        text: "Apply directly to irritated areas to calm redness. Leave on for a few minutes before rinsing off if needed.",
      },
      {
        label: "As an After-Shave",
        text: "Apply to freshly shaved skin to soothe irritation, balance skin tone, and tighten pores. Turmeric also has natural antiseptic properties that help with small cuts.",
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
      "A hair and scalp tonic blending Rosemary, Lemongrass, Curry Leaf, Basil, and Tea Tree hydrosols with jojoba oil — made to strengthen hair and protect it from everyday damage.",
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
    slug: 'the-trial-pack',
    name: 'The Trial Pack',
    category: 'Botanical Kits',
    tagline: 'Experience Our Best',
    hook: 'A curated selection of our best-selling elixirs in travel-friendly sizes.',
    placeholder: 'dawn',
    image: "/images/trial-pack-new.png",
    images: [
      "/images/trial-pack-new.png",
      "/images/four1.png",
      "/images/four2.png",
      "/images/four3.png",
      "/images/four4.png"
    ],
    description: "Experience the full spectrum of our skincare rituals. The perfect introduction to Aandré Amelie.",
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
    seoTitle: 'The Trial Pack | Aandré Amelie',
    seoDescription: 'The ultimate 4-piece holistic beauty bundle. Hydrate skin, clear acne, strengthen hair, and soothe your senses. Shop the complete collection.',
    concernSlugs: [],
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
  {
    slug: 'super-fine-multani-mitti',
    name: 'Super Fine Multani Mitti',
    category: 'Botanical Clays',
    tagline: 'Deep Cleanse & Clarify',
    hook: 'The ultimate clarifying earth mask for a deeply purified and balanced complexion.',
    placeholder: 'sun',
    image: '/images/products/super_fine_multani_mitti.png',
    images: ['/images/products/super_fine_multani_mitti.png'],
    description: 'Our Super Fine Multani Mitti (Fuller\'s Earth) is an ultra-milled, 100% organic, sun-dried clay that draws out impurities, excess oil, and toxins from deep within the pores. It leaves your skin exceptionally clean, matte, and refreshed without stripping it of essential moisture.',
    bestFor: [
      { title: 'Oily & Acne-Prone Skin', description: 'Absorbs excess sebum and prevents breakouts' },
      { title: 'Congested Pores', description: 'Draws out deep-seated impurities and tightens pores' }
    ],
    benefitSections: [
      {
        heading: 'The Power of Earth',
        items: [
          { title: 'Deep Cleansing', description: 'Acts as a natural magnet for dirt, oil, and pollution.' },
          { title: 'Cooling Effect', description: 'Naturally cools the skin, soothing active inflammation.' }
        ]
      }
    ],
    howToUse: [
      { label: 'Prepare', text: 'Mix 1-2 tablespoons with water or our Rose Elixir to form a smooth paste.' },
      { label: 'Apply', text: 'Apply an even layer to your face and neck, avoiding the delicate eye area.' },
      { label: 'Rinse', text: 'Leave on for 10-15 minutes until semi-dry, then rinse thoroughly with lukewarm water.' }
    ],
    care: 'Store in a cool, dry place. Keep the jar tightly closed to prevent moisture from entering.',
    seoTitle: 'Super Fine Multani Mitti - Pure Clay Face Mask | Aandré Amelie',
    seoDescription: 'Clarify and purify your skin with our Super Fine Multani Mitti. The ultimate natural clay mask for oily and acne-prone skin.',
    faqs: [
      { question: 'How often should I use this mask?', answer: 'For oily skin, 2-3 times a week is ideal. For normal or dry skin, once a week is sufficient.' }
    ],
    concernSlugs: ['acne-breakouts', 'oily-skin'],
    ingredientsList: ['Multani Mitti']
  },
  {
    slug: 'imported-pink-clay',
    name: 'Imported Pink Clay',
    category: 'Botanical Clays',
    tagline: 'Gently Detoxify & Radiate',
    hook: 'A delicate, mineral-rich clay that revives dull, tired skin to reveal a natural, rosy glow.',
    placeholder: 'dawn',
    image: '/images/products/imported_pink_clay.png',
    images: ['/images/products/imported_pink_clay.png'],
    description: 'Imported Pink Clay is a premium, double-filtered earth renowned for its gentle purifying properties, containing zero fillers or preservatives. Perfect for sensitive or mature skin, this mineral-rich clay lightly exfoliates while drawing out impurities, leaving your skin soft, smooth, and visibly brighter.',
    bestFor: [
      { title: 'Sensitive & Dry Skin', description: 'Cleanses without over-drying or irritating' },
      { title: 'Dullness', description: 'Restores a natural, healthy radiance' }
    ],
    benefitSections: [
      {
        heading: 'Gentle Mineral Detox',
        items: [
          { title: 'Soft Exfoliation', description: 'Gently buffs away dead skin cells.' },
          { title: 'Radiance Boost', description: 'Rich in silica, it helps improve skin elasticity and cell renewal.' }
        ]
      }
    ],
    howToUse: [
      { label: 'Mix', text: 'Blend with water or Glow Quinch Elixir to create a silky paste.' },
      { label: 'Apply', text: 'Smooth over your face and let it set for 10 minutes.' },
      { label: 'Wash', text: 'Rinse off gently with warm water and follow with a moisturizer.' }
    ],
    care: 'Store in a cool, dry place away from direct sunlight.',
    seoTitle: 'Imported Pink Clay - Gentle Detox Mask | Aandré Amelie',
    seoDescription: 'Revive your glow with our Imported Pink Clay mask. Perfect for sensitive skin, it gently detoxifies and brightens.',
    faqs: [
      { question: 'Is Pink Clay safe for sensitive skin?', answer: 'Yes, pink clay is one of the mildest clays available, making it perfect for sensitive and easily irritated skin types.' }
    ],
    concernSlugs: ['dryness-dehydration', 'dull-skin'],
    ingredientsList: ['Pink Clay']
  },
  {
    slug: 'neem-and-multani-mitti',
    name: 'Neem & Multani Mitti',
    category: 'Botanical Clays',
    tagline: 'Clarify & Banish Blemishes',
    hook: 'A potent, antibacterial blend that targets stubborn acne and deeply purifies the skin.',
    placeholder: 'moon',
    image: '/images/products/neem_multani_mitti.png',
    images: ['/images/products/neem_multani_mitti.png'],
    description: 'Combining the deep-cleansing power of 100% organic Multani Mitti with the legendary antibacterial properties of raw, double-filtered Neem, this mask is the ultimate treatment for acne-prone skin. It actively fights acne-causing bacteria, reduces inflammation, and absorbs excess oil to keep breakouts at bay.',
    bestFor: [
      { title: 'Acne & Blemishes', description: 'Fights bacteria and reduces active pimples' },
      { title: 'Oily Skin', description: 'Controls excessive sebum production' }
    ],
    benefitSections: [
      {
        heading: 'Antibacterial Powerhouse',
        items: [
          { title: 'Acne Control', description: 'Neem actively kills acne-causing bacteria.' },
          { title: 'Pore Purification', description: 'Multani Mitti draws out impurities preventing future breakouts.' }
        ]
      }
    ],
    howToUse: [
      { label: 'Mix', text: 'Combine with water or Acne Shield hydrosol to make a paste.' },
      { label: 'Apply', text: 'Apply specifically to breakout-prone areas or the entire face.' },
      { label: 'Rinse', text: 'Wash off after 10-15 minutes and pat dry.' }
    ],
    care: 'Store in an airtight container in a dry, cool place.',
    seoTitle: 'Neem & Multani Mitti - Anti-Acne Clay Mask | Aandré Amelie',
    seoDescription: 'Fight acne and blemishes with our Neem and Multani Mitti clay blend. A potent natural remedy for clear skin.',
    faqs: [
      { question: 'Can I use this as a spot treatment?', answer: 'Absolutely! Dab a thick paste directly onto an active pimple and leave it overnight to reduce inflammation.' }
    ],
    concernSlugs: ['acne-breakouts', 'oily-skin'],
    ingredientsList: ['Multani Mitti', 'Neem Leaf Powder']
  },
  {
    slug: 'rose-and-sandal-multani-mitti',
    name: 'Rose & Sandal Multani Mitti',
    category: 'Botanical Clays',
    tagline: 'Soothe & Brighten',
    hook: 'A luxurious, fragrant blend that cools, soothes, and imparts a bridal glow.',
    placeholder: 'dawn',
    image: '/images/products/rose_sandal_multani_mitti.png',
    images: ['/images/products/rose_sandal_multani_mitti.png'],
    description: 'Infused with raw, cooling Rose petals and pure complexion-brightening Sandalwood, free of artificial colors or fillers, this Multani Mitti blend is a treat for the senses and the skin. It reduces redness, evens out skin tone, and leaves you with a beautifully radiant and soft complexion.',
    bestFor: [
      { title: 'Uneven Skin Tone', description: 'Fades marks and brightens the complexion' },
      { title: 'Sun Damaged Skin', description: 'Cools and soothes sunburns and inflammation' }
    ],
    benefitSections: [
      {
        heading: 'Luxurious Botanical Brightening',
        items: [
          { title: 'Soothes Redness', description: 'Rose powder calms irritated skin instantly.' },
          { title: 'Bridal Glow', description: 'Sandalwood naturally brightens and evens skin tone.' }
        ]
      }
    ],
    howToUse: [
      { label: 'Mix', text: 'Blend with Royal Rose Elixir to enhance the floral benefits.' },
      { label: 'Apply', text: 'Apply an even layer to the face and neck.' },
      { label: 'Rinse', text: 'Rinse with cool water after 15 minutes.' }
    ],
    care: 'Keep in a cool, dark place to preserve the delicate floral aromas.',
    seoTitle: 'Rose & Sandal Multani Mitti - Brightening Clay | Aandré Amelie',
    seoDescription: 'Soothe and brighten your skin with the luxurious blend of Rose, Sandalwood, and Multani Mitti.',
    faqs: [
      { question: 'Is this suitable for dry skin?', answer: 'Yes, the rose and sandalwood help balance the clay, making it suitable for normal to dry skin when mixed with milk or yogurt instead of water.' }
    ],
    concernSlugs: ['dull-skin', 'pigmentation'],
    ingredientsList: ['Multani Mitti', 'Rose Petal Powder', 'Sandalwood Powder']
  },
  {
    slug: 'turmeric-and-sandal-multani-mitti',
    name: 'Turmeric & Sandal Multani Mitti',
    category: 'Botanical Clays',
    tagline: 'Glow & Heal',
    hook: 'The traditional Indian remedy for a flawless, golden complexion and healed skin.',
    placeholder: 'sun',
    image: '/images/products/turmeric_sandal_multani_mitti.png',
    images: ['/images/products/turmeric_sandal_multani_mitti.png'],
    description: 'This potent, 100% organic blend features raw Turmeric and Sandalwood—Ayurveda\'s most revered healing botanicals, meticulously double-filtered for maximum potency. It reduces hyperpigmentation, fights free radicals, and delivers an unmistakable, healthy glow while the Multani Mitti keeps the skin deeply cleansed.',
    bestFor: [
      { title: 'Hyperpigmentation', description: 'Fades dark spots and acne scars over time' },
      { title: 'Dull Skin', description: 'Delivers an instant, healthy golden glow' }
    ],
    benefitSections: [
      {
        heading: 'Ayurvedic Healing',
        items: [
          { title: 'Antioxidant Protection', description: 'Turmeric fights environmental damage.' },
          { title: 'Scar Healing', description: 'Promotes skin regeneration and fades marks.' }
        ]
      }
    ],
    howToUse: [
      { label: 'Mix', text: 'Mix with water or rose water into a paste.' },
      { label: 'Apply', text: 'Apply a thin layer (to avoid temporary turmeric staining) and leave for 10-15 minutes.' },
      { label: 'Rinse', text: 'Wash thoroughly and follow up with a toner.' }
    ],
    care: 'Store in an airtight container to preserve the potency of the turmeric.',
    seoTitle: 'Turmeric & Sandal Multani Mitti - Healing Glow | Aandré Amelie',
    seoDescription: 'Fade dark spots and achieve a golden glow with our Turmeric, Sandalwood, and Multani Mitti healing clay mask.',
    faqs: [
      { question: 'Will the turmeric stain my skin?', answer: 'We use the perfect ratio to minimize staining. However, leaving it on for too long or using it on very pale skin might leave a temporary yellow tint which washes off with a gentle cleanser.' }
    ],
    concernSlugs: ['pigmentation', 'dull-skin'],
    ingredientsList: ['Multani Mitti', 'Turmeric Powder', 'Sandalwood Powder']
  }
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
