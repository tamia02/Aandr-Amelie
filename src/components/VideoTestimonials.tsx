import Reveal from "./Reveal";

export default function VideoTestimonials() {
  return (
    <Reveal className="mx-auto mt-10 sm:mt-8 max-w-6xl">
      <h3 className="mb-6 sm:mb-10 text-center text-xs font-semibold tracking-widest uppercase text-sun-terracotta">
        From Our Channel
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
            <span className="font-serif text-sm text-charcoal/80">
              Aandré Amelie
            </span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
