"use server";

import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_COOKIE_NAME, checkPassword, createSessionToken } from "@/lib/admin-auth";
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

  const password = String(formData.get("password") ?? "");
  if (!checkPassword(password)) {
    return { error: "Incorrect password." };
  }

  (await cookies()).set(ADMIN_COOKIE_NAME, createSessionToken(), {
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
