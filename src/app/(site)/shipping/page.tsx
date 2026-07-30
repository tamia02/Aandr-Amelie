import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description: "Information regarding shipping rates, delivery times, and order processing for Aandré Amelie.",
  alternates: {
    canonical: "https://www.aandreamelie.com/shipping",
  },
};

export default function ShippingPage() {
  return (
    <LegalLayout title="Shipping Policy" lastUpdated="30 July 2026">
      <LegalSection title="Order Processing">
        <p>
          All orders are processed within 1 to 2 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.
        </p>
      </LegalSection>

      <LegalSection title="Domestic Shipping Rates and Estimates">
        <p>
          Shipping charges for your order will be calculated and displayed at checkout.
        </p>
        <ul className="list-disc space-y-2 pl-6 mt-4">
          <li><strong>Standard Shipping:</strong> ₹50 flat rate (3-5 business days).</li>
          <li><strong>Free Shipping:</strong> Available on all orders over ₹499.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Cash on Delivery (COD)">
        <p>
          We offer Cash on Delivery across most pin codes in India. If COD is not available for your location, we will contact you to arrange an alternative payment method. Please ensure someone is available at the delivery address to receive the package and make the payment.
        </p>
      </LegalSection>

      <LegalSection title="International Shipping">
        <p>
          We currently do not offer international shipping. We only deliver within India.
        </p>
      </LegalSection>

      <LegalSection title="How do I check the status of my order?">
        <p>
          When your order has shipped, you will receive an email notification from us which will include a tracking number you can use to check its status. Please allow 48 hours for the tracking information to become available. 
        </p>
        <p className="mt-4">
          You can also check your order status on our <a href="/track-order" className="underline hover:text-moon-indigo">Order Tracking</a> page.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
