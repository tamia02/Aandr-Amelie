import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import FaqItem from "@/components/FaqItem";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about ordering, shipping, returns, and our products.",
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pt-32 pb-32 sm:px-10">
      <SectionHeader eyebrow="Support" title="Frequently Asked Questions" />

      <div className="mt-16">
        <h2 className="mb-2 text-xs font-semibold tracking-[0.2em] text-sun-terracotta uppercase">
          Ordering &amp; Payment
        </h2>
        <FaqItem question="What payment methods do you accept?">
          <p>
            Cash on Delivery (COD) only, for now — you pay in cash when your
            order arrives at your door. We&rsquo;re working on adding online
            payment options soon.
          </p>
        </FaqItem>
        <FaqItem question="Can I change or cancel my order?">
          <p>
            Yes, as long as it hasn&rsquo;t shipped yet — email us at{" "}
            <a href="mailto:hello@aandreamelie.com" className="underline hover:text-moon-indigo">
              hello@aandreamelie.com
            </a>{" "}
            with your order number and we&rsquo;ll sort it out. Once an order
            has shipped, it can no longer be changed or cancelled.
          </p>
        </FaqItem>

        <h2 className="mt-14 mb-2 text-xs font-semibold tracking-[0.2em] text-sun-terracotta uppercase">
          Shipping &amp; Delivery
        </h2>
        <FaqItem question="How much does shipping cost?">
          <p>₹50 flat — free on orders of ₹499 or more.</p>
        </FaqItem>
        <FaqItem question="How long will my order take to arrive?">
          <p>
            Estimated delivery is 3–5 days from order confirmation, depending
            on your location. This is an estimate, not a guarantee — delays
            can occur due to courier or logistics issues outside our control.
          </p>
        </FaqItem>
        <FaqItem question="Do you deliver to my area?">
          <p>
            We currently deliver within India. Enter your pincode at checkout
            to confirm serviceability for your area, or email us if you&rsquo;re
            unsure before ordering.
          </p>
        </FaqItem>

        <h2 className="mt-14 mb-2 text-xs font-semibold tracking-[0.2em] text-sun-terracotta uppercase">
          Returns &amp; Refunds
        </h2>
        <FaqItem question="Can I return a product?">
          <p>
            Because our hydrosols are natural and, in some cases, edible-grade
            consumables, we can only accept returns for items that arrive
            damaged, incorrect, or defective. Contact us within 48 hours of
            delivery with your order number and photos of the issue, and
            we&rsquo;ll arrange a replacement or refund.
          </p>
        </FaqItem>
        <FaqItem question="What if a product doesn't suit my skin?">
          <p>
            We recommend a patch test before first use, especially if you
            have known sensitivities. If you experience irritation, discontinue
            use and contact us — if it turns out to be a defect with the
            product itself, we&rsquo;ll make it right.
          </p>
        </FaqItem>

        <h2 className="mt-14 mb-2 text-xs font-semibold tracking-[0.2em] text-sun-terracotta uppercase">
          Product &amp; Ingredients
        </h2>
        <FaqItem question="Are your products really edible?">
          <p>
            Royal Rose Elixir and Glow Quinch Elixir are dual-use &ldquo;Sip &amp;
            Spray&rdquo; hydrosols — safe to use on skin or taken in small
            amounts (as a drink, tea, or flavoring), per the dosages on each
            product page. Acne Shield and Vital Grow Scalp are formulated for
            topical use only (skin and scalp) and aren&rsquo;t intended for
            consumption.
          </p>
        </FaqItem>
        <FaqItem question="Are they preservative-free? How should I store them?">
          <p>
            Yes — no synthetic preservatives. Store the bottle in a cool place
            (max 25°C) and close the lid tightly immediately after each use.
            Because there are no preservatives, regular use and proper storage
            matter more than with conventional products.
          </p>
        </FaqItem>
        <FaqItem question="Are they suitable for all skin types?">
          <p>
            Our hydrosols are formulated to work across skin types — each
            product page lists which skin concerns it's best suited for. As
            with any natural, active-ingredient product, we recommend a patch
            test first if you have known allergies or sensitive skin.
          </p>
        </FaqItem>

        <h2 className="mt-14 mb-2 text-xs font-semibold tracking-[0.2em] text-sun-terracotta uppercase">
          Still Have Questions?
        </h2>
        <FaqItem question="How do I get in touch?">
          <p>
            Email us anytime at{" "}
            <a href="mailto:hello@aandreamelie.com" className="underline hover:text-moon-indigo">
              hello@aandreamelie.com
            </a>{" "}
            — we&rsquo;re happy to help.
          </p>
        </FaqItem>
      </div>
    </div>
  );
}
