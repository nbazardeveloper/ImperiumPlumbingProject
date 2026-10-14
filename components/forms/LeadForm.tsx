"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { trackEvent } from "@/lib/config";
import { submitLead } from "@/lib/leads";

const serviceOptions = [
  "Plumbing",
  "Sewer & Drain",
  "Water Heater",
  "Repiping",
  "Leak Detection",
  "Clogs / Hydro Jetting",
  "Other",
];

const inputClasses =
  "w-full rounded-sm border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-ink-muted focus:border-navy-800 focus:outline-none";

export function LeadForm({ defaultService }: { defaultService?: string }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [startedTracked, setStartedTracked] = useState(false);
  const [fieldError, setFieldError] = useState<string | null>(null);

  function handleFocusOnce() {
    if (!startedTracked) {
      trackEvent("form_start");
      setStartedTracked(true);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();

    if (!name) {
      setFieldError("Please enter your name.");
      return;
    }
    if (phone.replace(/\D/g, "").length < 10) {
      setFieldError("Please enter a valid phone number.");
      return;
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFieldError("Please enter a valid email address.");
      return;
    }

    setFieldError(null);
    setStatus("submitting");
    try {
      await submitLead({
        name,
        phone,
        email,
        service: String(form.get("service") ?? ""),
        message: String(form.get("message") ?? ""),
        website: String(form.get("website") ?? ""),
      });
      trackEvent("form_submit");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 border border-line bg-white p-8 text-center">
        <CheckCircle2 className="h-10 w-10 text-gold-600" aria-hidden="true" />
        <h3 className="text-xl font-bold text-navy-950">Request Received</h3>
        <p className="text-sm text-ink-muted">
          Thanks — we&apos;ll follow up shortly to schedule your service.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      {/* Honeypot: hidden from people, often auto-filled by spam bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-navy-950">
            Name <span className="text-gold-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            onFocus={handleFocusOnce}
            className={inputClasses}
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-navy-950">
            Phone <span className="text-gold-600">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            onFocus={handleFocusOnce}
            className={inputClasses}
            placeholder="(408) 555-0100"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy-950">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          onFocus={handleFocusOnce}
          className={inputClasses}
          placeholder="jane@email.com"
        />
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-navy-950">
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          defaultValue={defaultService ?? ""}
          onFocus={handleFocusOnce}
          className={inputClasses}
        >
          <option value="" disabled>
            Select a service
          </option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy-950">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          onFocus={handleFocusOnce}
          className={inputClasses}
          placeholder="Briefly describe the issue"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="font-display mt-2 inline-flex items-center justify-center gap-2 rounded-none bg-gold-500 px-6 py-3.5 text-2xl font-bold tracking-wide text-navy-950 transition-colors hover:bg-gold-400 disabled:opacity-70"
      >
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {status === "submitting" ? "Sending..." : "Request Service"}
      </button>

      {fieldError && (
        <p className="text-sm text-red-600" role="alert">
          {fieldError}
        </p>
      )}

      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          Something went wrong. Please call us directly instead.
        </p>
      )}

      <p className="text-xs text-ink-muted">
        By submitting, you agree to be contacted about your request. We don&apos;t share your
        information with third parties.
      </p>
    </form>
  );
}
