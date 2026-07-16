import WhatCustomersSay from "./WhatCustomersSay";
import VideoTestimonials from "./VideoTestimonials";

export default function ProductReviews({ productName }: { productName: string }) {
  return (
    <section className="mx-auto max-w-[1440px] border-b border-outline-variant/30 px-5 py-16 sm:px-10 lg:px-16">
      <WhatCustomersSay subject={productName} />

      {/* Video Reviews Layout */}
      <VideoTestimonials />
    </section>
  );
}
