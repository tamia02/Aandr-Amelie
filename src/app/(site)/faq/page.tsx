import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQs) | Aandré Amelie",
  description: "Frequently asked questions about Aandré Amelie, our skincare, haircare, and usage instructions.",
  alternates: {
    canonical: "https://aandreamelie.com/faq",
  },
};

const FAQ_SECTIONS = [
  {
    category: "About Aandre Amelie",
    icon: "🌿",
    items: [
      {
        question: "1. What is Aandre Amelie?",
        answer: "Aandre Amelie is an Indian premium natural skincare and haircare brand dedicated to creating products inspired by nature and Ayurveda. Our formulations are designed using carefully selected botanical ingredients to support healthy skin and hair."
      },
      {
        question: "2. What makes Aandre Amelie different?",
        answer: "We focus on high-quality botanical ingredients, thoughtful formulations, and products inspired by traditional Ayurvedic wisdom with a modern skincare approach. We believe in transparency, quality, and continuous improvement."
      },
      {
        question: "3. Are your products suitable for both men and women?",
        answer: "Yes. Most Aandre Amelie products are suitable for all genders unless otherwise mentioned."
      },
      {
        question: "4. Are your products cruelty-free?",
        answer: "Yes. We do not test our finished products on animals."
      },
      {
        question: "5. Are your products made in India?",
        answer: "Yes. Our products are proudly manufactured in India."
      }
    ]
  },
  {
    category: "Skincare FAQs",
    icon: "🌸",
    items: [
      {
        question: "6. Which product should I use for glowing skin?",
        answer: "Products containing Rose Water, Lavender Hydrosol, Aloe Vera, Glow Booster Cream and Kumkumadi Oil can help support a healthy-looking, radiant complexion when used consistently."
      },
      {
        question: "7. Can I use Rose Water every day?",
        answer: "Yes. Rose Water can be used daily as a toner or facial mist after cleansing or whenever your skin needs a refreshing boost."
      },
      {
        question: "8. What is a hydrosol?",
        answer: "A hydrosol is a gentle, water-based botanical distillate produced during steam distillation of plants. It helps refresh, hydrate, and soothe the skin."
      },
      {
        question: "9. Is Lavender Hydrosol good for sensitive skin?",
        answer: "Lavender Hydrosol is often appreciated for its calming properties. If you have sensitive skin, always perform a patch test before regular use."
      },
      {
        question: "10. Can I use face mist over makeup?",
        answer: "Yes. Face mists can be used before or after makeup for a refreshed look and added hydration."
      },
      {
        question: "11. Which products are suitable for oily skin?",
        answer: "Acne shield elixir, Rose Water, Lavender Hydrosol, and DIY face packs with Multani Mitti are popular choices for oily skin."
      },
      {
        question: "12. What is the best DIY face pack for dull skin?",
        answer: "Mix Orange peel powder Multani Mitti with Rose Water to create a simple face pack. Use 1–2 times per week and moisturize afterward."
      },
      {
        question: "12. What is the best DIY face pack for oily skin?",
        answer: "Mix Pink Multani Mitti with Rose Water to create a simple face pack. Use 1–2 times per week and moisturize afterward."
      },
      {
        question: "13. What is the best DIY face pack for dry skin?",
        answer: "Aloe Vera power infused Multani mitti mixed with Honey, and Yogurt for a nourishing face pack suitable for dry skin."
      },
      {
        question: "14. What is the best DIY face pack for acne-prone skin?",
        answer: "A gentle combination of Multani Mitti, Neem leaf powder and Rose Water is commonly used. Avoid overuse and patch test first."
      },
      {
        question: "15. Can your products help with pigmentation?",
        answer: "A consistent skincare routine, sun protection, and products containing ingredients such as manjishta, rice flour, Glow Booster cream, Kumkumadi Oil may help improve the appearance of uneven skin tone over time. Results vary by individual."
      },
      {
        question: "16. Are your products suitable for all skin types?",
        answer: "Many Aandre Amelie products are formulated for multiple skin types. Always check the product description and perform a patch test."
      },
      {
        question: "17. How long does it take to see results?",
        answer: "Skin responds differently for everyone. Consistent use over several weeks is generally recommended. These are not just skincare its natural life style."
      },
      {
        question: "18. Should I patch test before using a new product?",
        answer: "Yes. We recommend applying a small amount to the inside of your arm or behind your ear and waiting 24 hours before full use. Although our products are natural."
      }
    ]
  },
  {
    category: "Haircare FAQs",
    icon: "🌿",
    items: [
      {
        question: "19. Which ingredients are good for healthy hair?",
        answer: "Rosemary, Besil, Curry leaves, jojoba oil, Black seed, Aloe Vera, Amla, Bhringraj, Brahmi, and Fenugreek are popular botanical ingredients used in haircare."
      },
      {
        question: "20. Can I use Rosemary products every day?",
        answer: "It depends person to peson as per their scalp type. Usage depends on the product. Follow the directions provided on the product label."
      },
      {
        question: "21. Can natural haircare products be used on colored hair?",
        answer: "Yes, at Aandre Amelie our natural haircare products are suitable for color-treated hair, also review the product instructions."
      },
      {
        question: "22. How often should I oil my hair?",
        answer: "Many people prefer oiling 1–2 times per week, ideally minimum 30 minutes befor hair wash. Depending on hair type and personal preference."
      },
      {
        question: "23. Can hydrosols be used on hair?",
        answer: "Yes. Hydrosols can be used to strengthen hair and healthier scalp as it’s lightweight and refresher."
      },
      {
        question: "24. What causes hair fall?",
        answer: "Hair fall can have many causes, including genetics, stress, nutrition, hormonal changes, illness, and haircare habits use of harsh chemicals like artificial dye and salon treatments. If hair loss is significant or persistent, consult a healthcare professional."
      }
    ]
  },
  {
    category: "Product & Usage FAQs",
    icon: "🌿",
    items: [
      {
        question: "25. Are your products made with natural ingredients?",
        answer: "Our formulations feature carefully selected botanical and naturally inspired ingredients. Please refer to each product's ingredient list for complete details. We use edible ingredients."
      },
      {
        question: "26. Do your products contain artificial fragrance?",
        answer: "NO."
      },
      {
        question: "27. How should I store the products?",
        answer: "Store them in a cool, dry place away from direct sunlight and keep the Pouch tightly closed after use."
      },
      {
        question: "28. What is the shelf life of your products?",
        answer: "Shelf life is mentioned on the product packaging. Use products within the recommended period after opening."
      }
    ]
  },
  {
    category: "Orders & Customer Support",
    icon: "🚚",
    items: [
      {
        question: "29. How can I contact Aandre Amelie?",
        answer: "You can reach us through our official website, email, or social media channels for any product or order-related queries."
      },
      {
        question: "30. Do you offer customer support after purchase?",
        answer: "Yes. Our team is happy to help with product guidance, usage recommendations, and order support."
      },
      {
        question: "31. How do I choose the right product?",
        answer: "Read the product descriptions, identify your skin or hair concern, and contact our support team if you need personalized guidance."
      }
    ]
  }
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-12 sm:px-10 lg:px-16">
      <Reveal className="mb-8 text-center">
        <span className="mb-4 block text-xs font-sans tracking-[0.25em] text-sun-terracotta uppercase">
          Support
        </span>
        <h1 className="font-serif text-5xl text-charcoal">Frequently Asked Questions (FAQs)</h1>
      </Reveal>

      <div className="space-y-16">
        {FAQ_SECTIONS.map((section, sectionIdx) => (
          <Reveal key={`section-${sectionIdx}`} delay={sectionIdx * 50}>
            <h2 className="font-serif text-3xl text-charcoal mb-6 border-b border-outline-variant/30 pb-4">
              <span className="mr-3">{section.icon}</span>
              {section.category}
            </h2>
            <div className="space-y-4">
              {section.items.map((faq, index) => (
                <details key={`${sectionIdx}-${index}`} className="group border-b border-outline-variant/20 pb-5 outline-none">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-serif text-lg text-charcoal outline-none py-2 select-none hover:text-sun-terracotta transition-colors">
                    <span>{faq.question}</span>
                    <span className="text-xl text-outline/50 transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="mt-4 text-sm font-sans leading-relaxed text-charcoal/70 pl-2">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 text-center border-t border-outline-variant/30 pt-16">
        <span className="mb-4 block text-xs font-sans tracking-[0.25em] text-sun-terracotta uppercase">
          🌿 Our Promise
        </span>
        <p className="font-sans text-base leading-relaxed text-charcoal/80 max-w-2xl mx-auto">
          At Aandre Amelie, we are committed to quality, transparency, continuous learning, and customer satisfaction. Our goal is to create thoughtful skincare and haircare products inspired by nature while helping you build a simple, effective, and enjoyable self-care routine.
        </p>
      </Reveal>
    </div>
  );
}
