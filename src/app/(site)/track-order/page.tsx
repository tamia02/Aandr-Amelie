import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import TrackOrderForm from "@/components/TrackOrderForm";

export const metadata: Metadata = {
  title: "Track Your Order",
  description: "Check the status of your Aandré Amelie skincare order.",
  alternates: {
    canonical: "https://www.aandreamelie.com/track-order",
  },
};

export default function TrackOrderPage() {
  return (
    <div className="mx-auto max-w-[1440px] px-5 pt-12 pb-24 sm:px-10 lg:px-16">
      <Breadcrumbs items={[{ label: "Track Order" }]} />
      
      <div className="mt-8 max-w-xl mx-auto">
        <SectionHeader 
          eyebrow="Order Status"
          title="Track Your Order"
          align="center"
          className="mb-8"
        />
        
        <TrackOrderForm />
      </div>
    </div>
  );
}
