"use client";

import { useState } from "react";
import { addReview } from "@/lib/actions/reviews";
import { useActionState } from "react";

export default function ReviewForm({ productSlug }: { productSlug: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);

  const [state, formAction, isPending] = useActionState(addReview, null);

  if (!isOpen) {
    return (
      <div className="mt-8 text-center">
        <button 
          onClick={() => setIsOpen(true)}
          className="group inline-flex items-center justify-between gap-4 px-10 py-4 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-500 ease-out bg-moon-indigo text-cream hover:opacity-90"
        >
          Write a Review
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
      </div>
    );
  }

  return (
    <div className="mt-8 mx-auto max-w-xl border border-outline-variant/30 bg-cream p-6 sm:p-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-serif text-2xl text-charcoal">Write a Review</h3>
        <button
          onClick={() => setIsOpen(false)}
          className="text-charcoal/50 hover:text-charcoal transition-colors"
          aria-label="Close"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      {state?.success ? (
        <div className="bg-sun-sage/20 text-moon-sage p-4 text-center text-sm">
          {state.message}
        </div>
      ) : (
        <form action={formAction} className="space-y-5">
          <input type="hidden" name="productSlug" value={productSlug} />
          <input type="hidden" name="rating" value={rating} />
          
          <div>
            <label className="block text-xs font-semibold tracking-widest uppercase text-charcoal mb-2">
              Rating
            </label>
            <div className="flex gap-1 text-sun-terracotta">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="focus:outline-none focus:ring-1 focus:ring-sun-terracotta transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill={(hoverRating || rating) >= star ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth="1.3"
                    className="h-7 w-7"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="authorName" className="block text-xs font-semibold tracking-widest uppercase text-charcoal mb-2">
              Name
            </label>
            <input
              type="text"
              id="authorName"
              name="authorName"
              required
              className="w-full border border-outline-variant/30 bg-transparent px-4 py-3 text-sm focus:border-sun-terracotta focus:outline-none"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-xs font-semibold tracking-widest uppercase text-charcoal mb-2">
              Review
            </label>
            <textarea
              id="content"
              name="content"
              required
              rows={4}
              className="w-full border border-outline-variant/30 bg-transparent px-4 py-3 text-sm focus:border-sun-terracotta focus:outline-none"
              placeholder="Tell us what you think..."
            ></textarea>
          </div>

          {state?.error && (
            <p className="text-sun-terracotta text-sm">{state.error}</p>
          )}

          <button 
            type="submit" 
            disabled={isPending} 
            className="w-full group inline-flex items-center justify-center gap-4 px-10 py-4 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-500 ease-out bg-moon-indigo text-cream hover:opacity-90 disabled:opacity-50"
          >
            {isPending ? "Submitting..." : "Submit Review"}
            {!isPending && <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>}
          </button>
        </form>
      )}
    </div>
  );
}
