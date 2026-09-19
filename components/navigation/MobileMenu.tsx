"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { businessConfig, primaryNav, trackEvent } from "@/lib/config";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded-none text-navy-950"
      >
        {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
      </button>

      {open && (
        <div
          id="mobile-nav-panel"
          className="fixed inset-x-0 top-[87px] z-40 h-[calc(100dvh-87px)] overflow-y-auto bg-paper"
        >
          <nav aria-label="Mobile" className="flex flex-col px-4 py-6">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display border-b border-line py-4 text-4xl uppercase tracking-wide text-navy-950"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={businessConfig.phoneHref}
                onClick={() => trackEvent("phone_click")}
                className="font-display flex items-center justify-center gap-2 rounded-none border-2 border-navy-900 px-5 py-3 text-2xl font-semibold tracking-wide text-navy-900"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {businessConfig.phoneDisplay}
              </a>
              <Link
                href="/contact"
                onClick={() => {
                  trackEvent("request_service_click");
                  setOpen(false);
                }}
                className="font-display flex items-center justify-center gap-2 rounded-none bg-gold-500 px-5 py-3 text-2xl font-semibold tracking-wide text-navy-950"
              >
                Request Service
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
