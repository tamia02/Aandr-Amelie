"use server";

import { prisma } from "../db";
import { revalidatePath } from "next/cache";
import { writeFile } from "fs/promises";
import path from "path";

export type Review = {
  id: string;
  productSlug: string;
  authorName: string;
  rating: number;
  content: string;
  photoUrl: string | null;
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

  const photo = formData.get("photo") as File | null;
  let photoUrl: string | null = null;

  if (photo && photo.size > 0) {
    const bytes = await photo.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const filename = `${uniqueSuffix}-${photo.name.replace(/[^a-zA-Z0-9.-]/g, "")}`;
    const uploadDir = path.join(process.cwd(), "public/uploads/reviews");
    
    const fs = await import("fs");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    
    const filepath = path.join(uploadDir, filename);
    await writeFile(filepath, buffer);
    photoUrl = `/uploads/reviews/${filename}`;
  }

  try {
    await prisma.review.create({
      data: {
        productSlug,
        authorName,
        rating,
        content,
        photoUrl,
      },
    });

    revalidatePath(`/shop/${productSlug}`);
    return { success: true, message: "Review submitted successfully!" };
  } catch (error) {
    console.error("Failed to create review:", error);
    return { error: "Failed to submit review. Please try again." };
  }
}

export async function getAllReviews() {
  try {
    return await prisma.review.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Failed to fetch all reviews:", error);
    return [];
  }
}

export async function deleteReview(id: string) {
  try {
    const review = await prisma.review.delete({
      where: { id },
    });
    revalidatePath(`/shop/${review.productSlug}`);
    revalidatePath(`/admin/reviews`);
    return { success: true };
  } catch (error) {
    console.error("Failed to delete review:", error);
    return { error: "Failed to delete review" };
  }
}
