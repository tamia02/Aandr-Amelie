import VideoTestimonials from "./VideoTestimonials";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";
import type { Review } from "@/lib/actions/reviews";
import Reveal from "./Reveal";

export default function ProductReviews({ productName, productSlug, reviews }: { productName: string, productSlug: string, reviews: Review[] }) {
  return (
    <section className="mx-auto max-w-[1440px] border-b border-outline-variant/30 px-5 py-16 sm:px-10 lg:px-16">
      <Reveal className="mx-auto max-w-xl text-center">
        <h3 className="mb-4 text-xs font-semibold tracking-widest uppercase text-sun-terracotta">What Customers Say</h3>
        <h2 className="font-serif text-3xl text-charcoal mb-4">Real Experiences</h2>
      </Reveal>
      
      <ReviewList reviews={reviews} productName={productName} />
      <ReviewForm productSlug={productSlug} />

      {/* Video Reviews Layout */}
      <VideoTestimonials />
    </section>
  );
}
