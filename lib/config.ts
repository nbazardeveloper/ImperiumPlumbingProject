/**
 * Single source of truth for all business facts and geography.
 * Every page, metadata block, and JSON-LD schema pulls from here —
 * change the service area or contact details once, everywhere updates.
 */

export const businessConfig = {
  legalName: "Imperium Plumbing",
  shortName: "Imperium Plumbing",
  founder: "Azat Akynov",
  tagline: "Fast, Straightforward Plumbing",

  phone: "+1 320-339-5170",
  phoneHref: "tel:+13203395170",
  phoneDisplay: "(320) 339-5170",
  email: "777akynov@gmail.com",
  emailHref: "mailto:777akynov@gmail.com",

  yearsExperience: "7+",
  founded: new Date().getFullYear() - 7,

  hours: "Mon-Sat: 8am - 6pm",

  // Geography — the confirmed business facts. Change here to propagate everywhere.
  primaryCity: "Chicago",
  state: "Illinois",
  stateAbbr: "IL",
  serviceArea: "Chicago and the surrounding area",
  serviceAreaShort: "Chicago area",

  serviceType: ["Residential", "Commercial"],

  businessType: "Plumber" as const,

  social: {
    // No social links were provided yet — add them here (e.g. facebook: "https://...")
    // once confirmed; the header only renders icons for links that are present.
  } as { facebook?: string; instagram?: string; twitter?: string; linkedin?: string; youtube?: string },
} as const;

export const siteConfig = {
  name: businessConfig.legalName,
  description: `Residential and commercial plumbing for ${businessConfig.serviceArea} — plumbing repair, sewer & drain, water heaters, repiping, leak detection, and hydro jetting.`,
  url: "https://www.imperiumplumbing.com",
  phone: businessConfig.phone,
  email: businessConfig.email,
  locale: "en_US",
  ogImage: "/images/og-default.jpg",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Service Area", href: "/service-area" },
  { label: "Contact", href: "/contact" },
];

export const footerServiceLinks: NavItem[] = [
  { label: "Plumbing", href: "/services/plumbing" },
  { label: "Sewer & Drain", href: "/services/sewer-drain" },
  { label: "Water Heaters", href: "/services/water-heaters" },
  { label: "Repiping", href: "/services/repiping" },
  { label: "Leak Detection & Repair", href: "/services/leak-detection" },
  { label: "Clogs & Hydro Jetting", href: "/services/clogs-hydro-jetting" },
];

export const footerLegalLinks: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

/**
 * Analytics/conversion tracking is wired for later use but disabled until
 * real IDs are supplied — no placeholder tracking scripts are loaded.
 */
export const analyticsConfig = {
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_ID ?? "",
  gtmContainerId: process.env.NEXT_PUBLIC_GTM_ID ?? "",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
  googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "",
} as const;

export type ConversionEvent =
  | "phone_click"
  | "form_start"
  | "form_submit"
  | "request_service_click";

/**
 * Fires a conversion event to whichever analytics providers are configured.
 * No-ops safely when no IDs are set (current state) — swap in real
 * gtag/fbq calls once analyticsConfig has real values.
 */
export function trackEvent(event: ConversionEvent, meta?: Record<string, string>) {
  if (typeof window === "undefined") return;
  const w = window as typeof window & {
    dataLayer?: unknown[];
  };
  if (!analyticsConfig.gtmContainerId && !analyticsConfig.gaMeasurementId) return;
  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({ event, ...meta });
}
