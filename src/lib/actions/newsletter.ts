"use server";

import { prisma } from "../db";

export async function submitNewsletterForm(prevState: any, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;

  if (!name || !email || !phone) {
    return { error: "All fields are required." };
  }

  try {
    await prisma.lead.create({
      data: {
        name,
        email,
        phone,
      },
    });

    return { success: true, message: "Thank you for joining our family!" };
  } catch (error) {
    console.error("Failed to submit newsletter form:", error);
    return { error: "Failed to submit. Please try again." };
  }
}
