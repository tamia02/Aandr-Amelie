const buckets = new Map<string, { count: number; resetAt: number }>();

/**
 * Best-effort in-memory rate limit, keyed per process. Fine for a single
 * long-running server; on serverless/multi-instance deploys each instance
 * has its own counter, so this only softens abuse rather than hard-blocking it.
 * Swap for Upstash Redis (or similar shared store) if that gap matters.
 */
export function checkRateLimit(
  key: string,
  { max, windowMs }: { max: number; windowMs: number },
): boolean {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || now > bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (bucket.count >= max) return false;

  bucket.count += 1;
  return true;
}
