import { getAllReviews, deleteReview } from "@/lib/actions/reviews";

export default async function AdminReviewsPage() {
  const reviews = await getAllReviews();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-serif text-charcoal">Reviews Management</h1>
      
      <div className="bg-white shadow rounded-sm border border-outline-variant/30 overflow-hidden">
        <table className="min-w-full divide-y divide-outline-variant/30">
          <thead className="bg-cream">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-charcoal/70 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-charcoal/70 uppercase tracking-wider">Product</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-charcoal/70 uppercase tracking-wider">Author</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-charcoal/70 uppercase tracking-wider">Rating</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-charcoal/70 uppercase tracking-wider">Review</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-charcoal/70 uppercase tracking-wider">Photo</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-charcoal/70 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-outline-variant/20">
            {reviews.map((review) => (
              <tr key={review.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-charcoal/70">
                  {review.createdAt.toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-charcoal">
                  {review.productSlug}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-charcoal">
                  {review.authorName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-sun-terracotta">
                  {review.rating} ★
                </td>
                <td className="px-6 py-4 text-sm text-charcoal/70 max-w-xs truncate">
                  {review.content}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-charcoal/70">
                  {review.photoUrl ? (
                    <a href={review.photoUrl} target="_blank" className="text-moon-indigo hover:underline">View Photo</a>
                  ) : "-"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <form action={async () => {
                    "use server";
                    await deleteReview(review.id);
                  }}>
                    <button type="submit" className="text-sun-terracotta hover:text-red-700">Delete</button>
                  </form>
                </td>
              </tr>
            ))}
            {reviews.length === 0 && (
              <tr>
                <td colSpan={7} className="px-6 py-8 text-center text-sm text-charcoal/70">
                  No reviews found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
