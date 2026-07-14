import Reveal from "./Reveal";

export default function VideoTestimonials() {
  return (
    <Reveal className="mx-auto mt-10 sm:mt-20 max-w-6xl">
      <h3 className="mb-6 sm:mb-10 text-center text-xs font-semibold tracking-widest uppercase text-sun-terracotta">
        Video Testimonials
      </h3>
      <div className="flex w-full snap-x snap-mandatory overflow-x-auto pb-8 gap-6 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 no-scrollbar">
        {[
          "rKPwUw4IIFk",
          "BxnUVh6rk_U",
          "INgBmwNvqaU",
        ].map((videoId, index) => (
          <div key={index} className="flex min-w-[75vw] snap-center flex-col gap-4 sm:min-w-[45vw] md:min-w-0">
            <div className="relative aspect-[9/16] w-full overflow-hidden rounded-md bg-outline-variant/20">
              <iframe
                className="absolute top-0 left-0 h-full w-full object-cover"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-serif text-sm text-charcoal/80">
                Verified Buyer
              </span>
              <div
                className="flex gap-0.5 text-sun-terracotta"
                aria-hidden="true"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-3 w-3"
                  >
                    <path d="M12 3l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6L12 3Z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
