import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Contact Our Apothecary | Aandré Amelie",
  description:
    "Get in touch with Aandré Amelie. Send us a message regarding general inquiries, custom ritual advice, wholesale orders, or sourcing details.",
  alternates: {
    canonical: "https://aandreamelie.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[1440px] px-5 pt-12 pb-12 sm:px-10 lg:px-16">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: "Contact" }]} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
        {/* Info Column */}
        <div className="lg:col-span-5 space-y-12">
          <Reveal>
            <SectionHeader
              eyebrow="Apothecary Enquiries"
              title="Speak with Us"
              className="mb-6"
            />
            <p className="text-base leading-relaxed text-charcoal/70 max-w-sm">
              Whether you are seeking guidance on building your daily ritual, 
              inquiring about wholesale partnerships, or curious about our alchemical 
              distillation process, we welcome your dialogue.
            </p>
          </Reveal>

          <Reveal delay={100} className="space-y-6">
            <div>
              <h3 className="text-xs font-semibold tracking-[0.2em] text-sun-terracotta uppercase mb-2">
                Customer Care &amp; Ritual Consultations
              </h3>
              <a
                href="mailto:hello@aandreamelie.com"
                className="font-serif text-lg text-charcoal hover:text-moon-indigo transition-colors"
              >
                hello@aandreamelie.com
              </a>
            </div>

            <div>
              <h3 className="text-xs font-semibold tracking-[0.2em] text-sun-terracotta uppercase mb-2">
                Wholesale &amp; Retail Partnerships
              </h3>
              <a
                href="mailto:wholesale@aandreamelie.com"
                className="font-serif text-lg text-charcoal hover:text-moon-indigo transition-colors"
              >
                wholesale@aandreamelie.com
              </a>
            </div>

            <div>
              <h3 className="text-xs font-semibold tracking-[0.2em] text-sun-terracotta uppercase mb-2">
                Our Provenance
              </h3>
              <p className="text-sm leading-relaxed text-charcoal/70 max-w-xs">
                Our botanicals are gathered across small organic farms in India, distilled 
                in traditional copper alembics, and bottled fresh. Learn more about our{" "}
                <a href="/purity" className="underline hover:text-moon-indigo">
                  purity standards
                </a>.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-7 border border-outline-variant/30 bg-cream-deep p-8 sm:p-12">
          <Reveal delay={150}>
            <h2 className="font-serif text-2xl text-charcoal mb-8 border-b border-outline-variant/20 pb-4">
              Send a Message
            </h2>
            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-[10px] font-bold tracking-[0.2em] text-charcoal/50 uppercase mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="bg-transparent border-b border-outline-variant/50 py-2 text-sm text-charcoal outline-none focus:border-moon-indigo transition-colors"
                    placeholder="Amelie Aandré"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-[10px] font-bold tracking-[0.2em] text-charcoal/50 uppercase mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="bg-transparent border-b border-outline-variant/50 py-2 text-sm text-charcoal outline-none focus:border-moon-indigo transition-colors"
                    placeholder="amelie@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="subject"
                  className="text-[10px] font-bold tracking-[0.2em] text-charcoal/50 uppercase mb-2"
                >
                  Nature of Enquiry
                </label>
                <select
                  id="subject"
                  className="bg-transparent border-b border-outline-variant/50 py-2 text-sm text-charcoal/70 outline-none focus:border-moon-indigo transition-colors cursor-pointer"
                >
                  <option value="general">General Skincare Enquiry</option>
                  <option value="ritual">Bespoke Ritual Consultation</option>
                  <option value="wholesale">Wholesale &amp; Retail Orders</option>
                  <option value="sourcing">Botanical Sourcing &amp; Purity</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="text-[10px] font-bold tracking-[0.2em] text-charcoal/50 uppercase mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="bg-transparent border border-outline-variant/50 p-4 text-sm text-charcoal outline-none focus:border-moon-indigo transition-colors resize-none rounded-none"
                  placeholder="How can we help elevate your daily wellness ritual?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-moon-indigo py-5 text-xs font-semibold tracking-[0.2em] text-cream uppercase hover:opacity-95 transition-opacity cursor-pointer"
              >
                Send Message →
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
