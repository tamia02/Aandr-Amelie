import Reveal from "@/components/Reveal";
import { products } from "@/data/products";

export const metadata = {
  title: "Apothecary FAQ",
  description: "Frequently asked questions about our botanicals, shipping, and more.",
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-32 sm:px-10 lg:px-16">
      <Reveal className="mb-16 text-center">
        <span className="mb-4 block text-xs font-semibold tracking-[0.25em] text-sun-terracotta uppercase">
          Support
        </span>
        <h1 className="font-serif text-5xl text-charcoal">Apothecary FAQ</h1>
      </Reveal>

      <div className="space-y-4">
        {products.flatMap((product) => 
          product.faqs.map((faq, index) => (
            <Reveal key={`${product.slug}-${index}`} delay={index * 50}>
              <details className="group border-b border-outline-variant/30 pb-5 outline-none">
                <summary className="flex cursor-pointer list-none items-center justify-between font-serif text-lg text-charcoal outline-none py-2 select-none hover:text-sun-terracotta transition-colors">
                  <span>{faq.question}</span>
                  <span className="text-xl text-outline/50 transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="mt-4 text-sm leading-relaxed text-charcoal/70 pl-2">
                  <p>{faq.answer}</p>
                </div>
              </details>
            </Reveal>
          ))
        )}
      </div>
    </div>
  );
}
