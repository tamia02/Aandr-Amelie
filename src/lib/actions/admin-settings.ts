"use server";

import { requireAdmin } from "@/lib/admin-auth";
import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import crypto from "crypto";

export async function addAdmin(formData: FormData) {
  await requireAdmin();

  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    throw new Error("Email and password are required.");
  }

  // Generate a salt and hash the password
  const salt = crypto.randomBytes(16).toString('hex');
  const derivedKey = crypto.scryptSync(password, salt, 64);
  const passwordHash = `${salt}:${derivedKey.toString('hex')}`;

  try {
    await prisma.adminUser.create({
      data: {
        email,
        passwordHash,
      },
    });
  } catch (error) {
    console.error("Error creating admin:", error);
    throw new Error("Could not create admin account. It may already exist.");
  }

  revalidatePath("/admin/settings");
}

export async function removeAdmin(formData: FormData) {
  const currentUserEmail = await requireAdmin();

  const emailToRemove = String(formData.get("email") ?? "").trim();

  if (!emailToRemove) {
    throw new Error("Email to remove is required.");
  }

  if (emailToRemove === currentUserEmail) {
    throw new Error("You cannot remove your own account.");
  }

  await prisma.adminUser.delete({
    where: { email: emailToRemove },
  });

  revalidatePath("/admin/settings");
}
