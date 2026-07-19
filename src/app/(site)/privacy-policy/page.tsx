import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Aandré Amelie collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="6 July 2026">
      <LegalSection title="Introduction">
        <p>
          Aandré Amelie (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;)
          respects your privacy. This policy explains what information we
          collect when you visit or shop with us, how we use it, and the
          choices you have.
        </p>
      </LegalSection>

      <LegalSection title="Information We Collect">
        <p>We collect information you provide directly to us:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Order details</strong> — your name, email address, phone
            number, and delivery address, collected at checkout to fulfil
            and deliver your order.
          </li>
          <li>
            <strong>Newsletter sign-up</strong> — your email address, if you
            choose to join our mailing list.
          </li>
        </ul>
        <p>
          We do not collect payment card details — orders are currently
          fulfilled by Cash on Delivery only, so no card or bank information
          passes through this site.
        </p>
      </LegalSection>

      <LegalSection title="Cart & Local Storage">
        <p>
          The items in your shopping cart are stored locally in your
          browser (not on our servers) so your cart persists between
          visits. Clearing your browser data will clear your cart.
        </p>
      </LegalSection>

      <LegalSection title="How We Use Your Information">
        <ul className="list-disc space-y-2 pl-6">
          <li>To process, confirm, and deliver your order.</li>
          <li>To contact you about your order if needed.</li>
          <li>To send newsletter updates, if you&rsquo;ve subscribed.</li>
          <li>To improve our products, site, and customer experience.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Sharing Your Information">
        <p>
          We do not sell your personal information. We share only what is
          necessary with delivery partners to get your order to your door.
          We do not use third-party advertising or analytics trackers on
          this site at this time.
        </p>
      </LegalSection>

      <LegalSection title="Data Security">
        <p>
          We take reasonable measures to protect your information. No
          method of transmission or storage is 100% secure, and we cannot
          guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection title="Your Rights">
        <p>
          You can ask us to access, correct, or delete the personal
          information we hold about you at any time by emailing{" "}
          <a href="mailto:contact@aandreamelie.com" className="underline hover:text-moon-indigo">
            contact@aandreamelie.com
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Children's Privacy">
        <p>
          Our products and site are intended for adults. We do not
          knowingly collect information from children.
        </p>
      </LegalSection>

      <LegalSection title="Changes to This Policy">
        <p>
          We may update this policy from time to time. The &ldquo;last
          updated&rdquo; date above will reflect the most recent revision.
        </p>
      </LegalSection>

      <LegalSection title="Contact Us">
        <p>
          Questions about this policy? Email us at{" "}
          <a href="mailto:contact@aandreamelie.com" className="underline hover:text-moon-indigo">
            contact@aandreamelie.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
