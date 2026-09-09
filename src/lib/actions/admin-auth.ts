"use server";

import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_COOKIE_NAME, verifyAdminCredentials, createSessionToken } from "@/lib/admin-auth";
import { checkRateLimit } from "@/lib/rate-limit";

export async function adminLogin(
  _prevState: { error?: string } | undefined,
  formData: FormData,
): Promise<{ error?: string }> {
  const ip = (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const allowed = checkRateLimit(`adminLogin:${ip}`, { max: 10, windowMs: 10 * 60 * 1000 });
  if (!allowed) {
    return { error: "Too many attempts. Please try again later." };
  }

  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  
  if (!email || !password) {
    return { error: "Email and password are required." };
  }

  const isValid = await verifyAdminCredentials(email, password);
  if (!isValid) {
    return { error: "Invalid email or password." };
  }

  (await cookies()).set(ADMIN_COOKIE_NAME, createSessionToken(email), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 12 * 60 * 60,
    path: "/",
  });

  redirect("/admin");
}

export async function adminLogout() {
  (await cookies()).delete(ADMIN_COOKIE_NAME);
  redirect("/admin/login");
}
