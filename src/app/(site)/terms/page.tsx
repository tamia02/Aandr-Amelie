import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms that govern your use of the Aandré Amelie site and orders.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions" lastUpdated="6 July 2026">
      <LegalSection title="Acceptance of Terms">
        <p>
          By browsing this site or placing an order, you agree to these
          terms. If you don&rsquo;t agree, please don&rsquo;t use the site
          or place an order.
        </p>
      </LegalSection>

      <LegalSection title="Products & Pricing">
        <p>
          All prices are listed in Indian Rupees (₹) and include applicable
          taxes unless stated otherwise. We try to keep product information
          and pricing accurate, but errors can occur — if we discover a
          pricing or listing error on an order you&rsquo;ve placed, we will
          contact you before proceeding.
        </p>
      </LegalSection>

      <LegalSection title="Orders & Payment">
        <p>
          Orders are currently accepted on a <strong>Cash on Delivery</strong>{" "}
          basis only — you pay in cash when your order arrives. We reserve
          the right to refuse or cancel an order, for example if an item is
          out of stock or we suspect fraudulent activity, in which case
          we&rsquo;ll notify you.
        </p>
      </LegalSection>

      <LegalSection id="shipping-returns" title="Shipping & Delivery">
        <ul className="list-disc space-y-2 pl-6">
          <li>Shipping is ₹50 flat, and free on orders of ₹499 or more.</li>
          <li>
            Estimated delivery is 3–5 days from order confirmation,
            depending on your location. This is an estimate, not a
            guarantee — delays can occur due to courier or logistics
            issues outside our control.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Returns, Refunds & Cancellations">
        <p>
          Because our products are natural and, in some cases, edible-grade
          consumables, we&rsquo;re only able to accept returns for items
          that arrive damaged, incorrect, or defective. If that happens,
          contact us within 48 hours of delivery with your order number and
          photos of the issue, and we&rsquo;ll arrange a replacement or
          refund.
        </p>
        <p>
          You may cancel an order before it ships by contacting us — once an
          order has shipped, it can no longer be cancelled.
        </p>
      </LegalSection>

      <LegalSection title="Intellectual Property">
        <p>
          All content on this site — including text, photography, video,
          and the Aandré Amelie name and logo — belongs to Aandré Amelie
          and may not be reused without our permission.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of Liability">
        <p>
          Our products are provided as described, without additional
          warranties beyond what&rsquo;s required by law. To the extent
          permitted by law, we are not liable for indirect or consequential
          losses arising from the use of our products or site. If you have
          a known allergy or skin sensitivity, please review the
          ingredients on each product page before use.
        </p>
      </LegalSection>

      <LegalSection title="Governing Law">
        <p>
          These terms are governed by the laws of India, and any disputes
          will be subject to the jurisdiction of Indian courts.
        </p>
      </LegalSection>

      <LegalSection title="Changes to These Terms">
        <p>
          We may update these terms from time to time. The &ldquo;last
          updated&rdquo; date above will reflect the most recent revision.
        </p>
      </LegalSection>

      <LegalSection title="Contact Us">
        <p>
          Questions about these terms? Email us at{" "}
          <a href="mailto:hello@aandreamelie.com" className="underline hover:text-moon-indigo">
            hello@aandreamelie.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
