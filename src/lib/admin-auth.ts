import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE_NAME = "admin_session";
const SESSION_TTL_MS = 12 * 60 * 60 * 1000; // 12 hours

function getSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) {
    throw new Error("ADMIN_SESSION_SECRET is not set");
  }
  return secret;
}

function sign(payload: string): string {
  return createHmac("sha256", getSecret()).update(payload).digest("hex");
}

export function createSessionToken(email: string): string {
  const expiresAt = Date.now() + SESSION_TTL_MS;
  const payload = `${email}.${expiresAt}`;
  return `${payload}.${sign(payload)}`;
}

export function verifySessionToken(token: string | undefined): boolean {
  if (!token) return false;

  const lastDot = token.lastIndexOf(".");
  if (lastDot === -1) return false;

  const payload = token.slice(0, lastDot);
  const signature = token.slice(lastDot + 1);
  const expected = sign(payload);

  const sigBuf = Buffer.from(signature, "hex");
  const expectedBuf = Buffer.from(expected, "hex");
  if (sigBuf.length !== expectedBuf.length || !timingSafeEqual(sigBuf, expectedBuf)) {
    return false;
  }

  const [email, expiresAtStr] = payload.split(".");
  const expiresAt = Number(expiresAtStr);
  return Number.isFinite(expiresAt) && Date.now() < expiresAt;
}

export function getSessionEmail(token: string | undefined): string | null {
  if (!verifySessionToken(token)) return null;
  const lastDot = token!.lastIndexOf(".");
  const payload = token!.slice(0, lastDot);
  const [email] = payload.split(".");
  return email;
}

/**
 * Server Actions are invoked as POSTs to the page they're used on, so they
 * bypass proxy.ts matchers scoped to page navigation. Every admin mutation
 * must call this itself rather than trusting the proxy gate alone.
 */
export async function requireAdmin(): Promise<string> {
  const session = (await cookies()).get(ADMIN_COOKIE_NAME)?.value;
  const email = getSessionEmail(session);
  if (!email) {
    throw new Error("Unauthorized");
  }
  return email;
}

export async function verifyAdminCredentials(email: string, candidate: string): Promise<boolean> {
  const { prisma } = await import("./db");
  const admin = await prisma.adminUser.findUnique({ where: { email } });
  if (!admin) return false;

  const [salt, expectedHash] = admin.passwordHash.split(":");
  if (!salt || !expectedHash) return false;

  const candidateKey = createHmac("sha256", getSecret()).update(candidate).digest("hex");
  // The seed script used scryptSync for derived key. Wait, in seed script:
  // const derivedKey = crypto.scryptSync(defaultPassword, salt, 64);
  // We need to use scryptSync to verify!
  const crypto = await import("crypto");
  const derivedKey = crypto.scryptSync(candidate, salt, 64).toString("hex");
  
  if (derivedKey.length !== expectedHash.length) return false;
  return timingSafeEqual(Buffer.from(derivedKey, "hex"), Buffer.from(expectedHash, "hex"));
}
