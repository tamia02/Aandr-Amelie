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

  let isValid = false;
  try {
    isValid = await verifyAdminCredentials(email, password);
  } catch (e: any) {
    console.error("verifyAdminCredentials error:", e);
    return { error: e.message || "Authentication error" };
  }

  if (!isValid) {
    return { error: "Invalid email or password." };
  }

  try {
    const token = createSessionToken(email);
    (await cookies()).set(ADMIN_COOKIE_NAME, token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 12 * 60 * 60,
      path: "/",
    });
  } catch (e: any) {
    console.error("Session token error:", e);
    return { error: "Server configuration error: " + e.message };
  }

  redirect("/admin");
}

export async function adminLogout() {
  (await cookies()).delete(ADMIN_COOKIE_NAME);
  redirect("/admin/login");
}
