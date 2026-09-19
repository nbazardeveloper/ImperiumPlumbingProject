"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { businessConfig, trackEvent } from "@/lib/config";

type Size = "md" | "lg";

const base =
  "font-display inline-flex items-center justify-center gap-2 rounded-none font-semibold tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500";

const sizes: Record<Size, string> = {
  md: "px-5 py-3 text-[21px]",
  lg: "px-7 py-4 text-2xl",
};

export function RequestServiceButton({
  size = "md",
  className = "",
  label = "Request Service",
}: {
  size?: Size;
  className?: string;
  label?: string;
}) {
  return (
    <Link
      href="/contact"
      onClick={() => trackEvent("request_service_click")}
      className={`${base} ${sizes[size]} bg-gold-500 text-navy-950 hover:bg-gold-400 active:bg-gold-600 ${className}`}
    >
      {label}
    </Link>
  );
}

export function CallNowButton({
  size = "md",
  className = "",
  variant = "outline",
  label = "Call Now",
}: {
  size?: Size;
  className?: string;
  variant?: "outline" | "solid" | "ghost";
  label?: string;
}) {
  const variants: Record<string, string> = {
    outline: "border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white",
    solid: "bg-navy-900 text-white hover:bg-navy-800",
    ghost: "text-white hover:text-gold-400",
  };

  return (
    <a
      href={businessConfig.phoneHref}
      onClick={() => trackEvent("phone_click")}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <Phone className="h-4 w-4" aria-hidden="true" />
      {label}
    </a>
  );
}
