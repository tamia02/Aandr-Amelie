import Reveal from "./Reveal";
import VideoTestimonials from "./VideoTestimonials";
export default function ProductReviews({ productName }: { productName: string }) {
  return (
    <section className="mx-auto max-w-[1440px] border-b border-outline-variant/30 px-5 py-16 sm:px-10 lg:px-16">
      <Reveal className="mx-auto max-w-xl text-center">
        <h3 className="mb-4 text-xs font-semibold tracking-widest uppercase">Reviews</h3>
        <div className="mb-4 flex justify-center gap-1 text-outline-variant" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="h-5 w-5">
              <path d="M12 3l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6L12 3Z" />
            </svg>
          ))}
        </div>
        <p className="text-sm leading-relaxed text-charcoal/60">
          No reviews yet — be the first to share your experience with {productName}.
          Tried it already? Email us at{" "}
          <a href="mailto:hello@aandreamelie.com" className="underline hover:text-moon-indigo">
            hello@aandreamelie.com
          </a>{" "}
          and we may feature it here.
        </p>
      </Reveal>

      {/* Video Reviews Layout */}
      <VideoTestimonials />
    </section>
  );
}
