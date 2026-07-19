import type { Review } from "@/lib/actions/reviews";

export default function ReviewList({ reviews, productName }: { reviews: Review[], productName: string }) {
  if (reviews.length === 0) {
    return (
      <div className="mx-auto max-w-xl text-center">
        <p className="text-sm leading-relaxed text-charcoal/60">
          No reviews yet — be the first to share your experience with {productName}. Tried it
          already? Email us at{" "}
          <a href="mailto:contact@aandreamelie.com" className="underline hover:text-moon-indigo">
            contact@aandreamelie.com
          </a>{" "}
          and we may feature it here.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl space-y-8 mt-10">
      {reviews.map((review) => (
        <div key={review.id} className="border-b border-outline-variant/20 pb-8 last:border-0">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="font-serif text-lg text-charcoal">{review.authorName}</span>
              <span className="text-xs text-charcoal/50">
                {new Date(review.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
            <div className="flex text-sun-terracotta" aria-label={`Rated ${review.rating} out of 5 stars`}>
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  viewBox="0 0 24 24"
                  fill={star <= review.rating ? "currentColor" : "none"}
                  stroke="currentColor"
                  strokeWidth="1.3"
                  className="h-4 w-4"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-sm leading-relaxed text-charcoal/80 whitespace-pre-wrap">
            {review.content}
          </p>
        </div>
      ))}
    </div>
  );
}
