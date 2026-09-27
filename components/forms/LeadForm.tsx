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

  function handleFocusOnce() {
    if (!startedTracked) {
      trackEvent("form_start");
      setStartedTracked(true);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = new FormData(event.currentTarget);
    try {
      await submitLead({
        name: String(form.get("name") ?? ""),
        phone: String(form.get("phone") ?? ""),
        email: String(form.get("email") ?? ""),
        service: String(form.get("service") ?? ""),
        message: String(form.get("message") ?? ""),
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
