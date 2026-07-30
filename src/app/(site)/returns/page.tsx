import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Returns & Refunds Policy",
  description: "Aandré Amelie's policy on returns, refunds, and cancellations for our skincare products.",
  alternates: {
    canonical: "https://www.aandreamelie.com/returns",
  },
};

export default function ReturnsPage() {
  return (
    <LegalLayout title="Returns & Refunds" lastUpdated="30 July 2026">
      <LegalSection title="Our Return Policy">
        <p>
          At Aandré Amelie, we take immense pride in the purity and efficacy of our botanical formulations. Due to the personal hygiene nature of skincare and cosmetic products, <strong>we do not accept returns or exchanges once a product has been opened or used.</strong>
        </p>
      </LegalSection>

      <LegalSection title="Damaged or Defective Items">
        <p>
          In the rare event that your order arrives damaged, defective, or if you receive the wrong item, we are here to help. 
        </p>
        <p className="mt-4">
          Please contact us at <a href="mailto:contact@aandreamelie.com" className="underline hover:text-moon-indigo">contact@aandreamelie.com</a> within <strong>48 hours of delivery</strong>. Include your order number and clear photographs of the damaged item and packaging. Upon verification, we will swiftly arrange for a replacement or a full refund to your original method of payment.
        </p>
      </LegalSection>

      <LegalSection title="Order Cancellations">
        <p>
          You may request to cancel your order before it has been dispatched. Please email us immediately if you wish to cancel. Once an order has been handed over to our shipping partners, it can no longer be cancelled.
        </p>
      </LegalSection>

      <LegalSection title="Refund Processing">
        <p>
          If your refund is approved (for damaged or defective items), the amount will be processed back to your original payment method. For Cash on Delivery (COD) orders, we will reach out to you to securely transfer the refund via UPI or bank transfer. Please allow 5-7 business days for the refund to reflect in your account.
        </p>
      </LegalSection>

      <LegalSection title="Allergic Reactions">
        <p>
          We highly recommend reviewing the ingredient lists on our product pages before purchasing. As our products are crafted from potent natural botanicals, we advise conducting a patch test prior to full application. We do not offer refunds or accept returns for products that cause an allergic reaction.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
