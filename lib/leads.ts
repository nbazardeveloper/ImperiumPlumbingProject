export type LeadPayload = {
  name: string;
  phone: string;
  email?: string;
  service: string;
  message?: string;
};

/**
 * Frontend-only stand-in for lead submission. This is the single place to
 * wire in a real destination later — a form endpoint (e.g. Formspree), a
 * serverless function, or a CRM webhook (Housecall Pro, Jobber, HubSpot).
 * Swap the body of this function only; LeadForm.tsx doesn't need to change.
 */
export async function submitLead(payload: LeadPayload): Promise<{ ok: true }> {
  const endpoint = process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL;

  if (!endpoint) {
    // No integration configured yet — simulate success so the UI can be
    // designed/tested end-to-end without a backend.
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { ok: true };
  }

  await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  return { ok: true };
}
