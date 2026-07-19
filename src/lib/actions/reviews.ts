"use server";

import { prisma } from "../db";
import { revalidatePath } from "next/cache";

export type Review = {
  id: string;
  productSlug: string;
  authorName: string;
  rating: number;
  content: string;
  createdAt: Date;
};

export async function getReviewsForProduct(productSlug: string) {
  try {
    const reviews = await prisma.review.findMany({
      where: {
        productSlug,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return reviews;
  } catch (error) {
    console.error("Failed to fetch reviews:", error);
    return [];
  }
}

export async function addReview(prevState: any, formData: FormData) {
  const productSlug = formData.get("productSlug") as string;
  const authorName = formData.get("authorName") as string;
  const ratingStr = formData.get("rating") as string;
  const content = formData.get("content") as string;

  if (!productSlug || !authorName || !ratingStr || !content) {
    return { error: "All fields are required." };
  }

  const rating = parseInt(ratingStr, 10);
  if (isNaN(rating) || rating < 1 || rating > 5) {
    return { error: "Invalid rating." };
  }

  try {
    await prisma.review.create({
      data: {
        productSlug,
        authorName,
        rating,
        content,
      },
    });

    revalidatePath(`/shop/${productSlug}`);
    return { success: true, message: "Review submitted successfully!" };
  } catch (error) {
    console.error("Failed to create review:", error);
    return { error: "Failed to submit review. Please try again." };
  }
}
