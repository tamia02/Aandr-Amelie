import Reveal from "./Reveal";

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
      <Reveal className="mx-auto mt-20 max-w-6xl">
        <h3 className="mb-10 text-center text-xs font-semibold tracking-widest uppercase text-sun-terracotta">Video Testimonials</h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            "/videos/aandre testi1.mp4",
            "/videos/aadre testi 2.MP4",
            "/videos/aandre testi 3.MP4"
          ].map((src, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="relative aspect-[9/16] w-full overflow-hidden bg-outline-variant/20 rounded-md">
                <video
                  className="h-full w-full object-cover"
                  src={src}
                  muted
                  loop
                  playsInline
                  controls
                  poster="/images/stitch/lab-distillation.jpg"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-serif text-charcoal/80">Verified Buyer</span>
                <div className="flex gap-0.5 text-sun-terracotta" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3">
                      <path d="M12 3l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6L12 3Z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
