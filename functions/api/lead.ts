/**
 * Cloudflare Pages Function: POST /api/lead
 * Emails a website lead to the business owner via Resend.
 *
 * Required environment variables (Cloudflare Pages → Settings → Variables and Secrets):
 *   RESEND_API_KEY  — Resend API key (store as a secret)
 *   LEAD_TO         — recipient address(es), comma-separated
 *   LEAD_FROM       — optional sender, defaults to "Imperium Website <leads@callimperium.com>"
 *                     (its domain must be verified in Resend)
 */

type Env = {
  RESEND_API_KEY?: string;
  LEAD_TO?: string;
  LEAD_FROM?: string;
};

type Context = { request: Request; env: Env };

const LIMITS = { name: 100, phone: 30, email: 200, service: 100, message: 3000 } as const;

function field(data: Record<string, unknown>, key: keyof typeof LIMITS): string {
  const value = data[key];
  return typeof value === "string" ? value.trim().slice(0, LIMITS[key]) : "";
}

function json(body: object, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function onRequestPost({ request, env }: Context): Promise<Response> {
  if (!env.RESEND_API_KEY || !env.LEAD_TO) {
    console.error("Lead email not configured: set RESEND_API_KEY and LEAD_TO");
    return json({ ok: false, error: "not_configured" }, 500);
  }

  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return json({ ok: false, error: "invalid_json" }, 400);
  }

  // Honeypot: real visitors never see or fill this field. Pretend success so bots move on.
  if (typeof data.website === "string" && data.website.trim() !== "") {
    return json({ ok: true }, 200);
  }

  const lead = {
    name: field(data, "name"),
    phone: field(data, "phone"),
    email: field(data, "email"),
    service: field(data, "service"),
    message: field(data, "message"),
  };

  const phoneDigits = lead.phone.replace(/\D/g, "");
  if (!lead.name || phoneDigits.length < 10) {
    return json({ ok: false, error: "invalid_fields" }, 400);
  }
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email) ? lead.email : "";

  const text = [
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    `Email: ${lead.email || "-"}`,
    `Service: ${lead.service || "-"}`,
    "",
    "Message:",
    lead.message || "-",
    "",
    `Sent from ${new URL(request.url).host}`,
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.LEAD_FROM || "Imperium Website <leads@callimperium.com>",
      to: env.LEAD_TO.split(",").map((s) => s.trim()).filter(Boolean),
      reply_to: validEmail || undefined,
      subject: `New lead: ${lead.service || "Service request"} — ${lead.name}`,
      text,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return json({ ok: false, error: "send_failed" }, 502);
  }

  return json({ ok: true }, 200);
}
