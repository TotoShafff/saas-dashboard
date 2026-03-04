/**
 * Returns the absolute base URL for server-side fetch calls.
 * Next.js Server Components require absolute URLs for fetch.
 *
 * Priority:
 *  1. NEXT_PUBLIC_APP_URL (explicit override, useful for preview deployments)
 *  2. VERCEL_URL (auto-set by Vercel on all deployments)
 *  3. localhost fallback for local development
 */
export function getBaseUrl(): string {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return `http://localhost:${process.env.PORT ?? 3000}`;
}
