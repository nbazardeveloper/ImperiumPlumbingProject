export type LeadPayload = {
  name: string;
  phone: string;
  email?: string;
  service: string;
  message?: string;
  /** Honeypot — must stay empty; filled only by bots. */
  website?: string;
};

/**
 * Sends a lead to the Cloudflare Pages Function at /api/lead (functions/api/lead.ts),
 * which emails it to the business owner. Throws if the lead wasn't delivered so the
 * form can show an error instead of a false "Request Received".
 */
export async function submitLead(payload: LeadPayload): Promise<{ ok: true }> {
  // `next dev` doesn't run Pages Functions — simulate success locally so the UI
  // can still be tested. Use `npx wrangler pages dev out` to test real delivery.
  if (process.env.NODE_ENV === "development") {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { ok: true };
  }

  const res = await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Lead submission failed (${res.status})`);
  }

  return { ok: true };
}
