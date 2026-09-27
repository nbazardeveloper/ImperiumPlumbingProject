import { businessConfig, siteConfig } from "./config";
import type { FaqItem } from "./services-data";
import { services } from "./services-data";

/**
 * JSON-LD builders. Only verified business facts are included — no
 * ratings, review counts, licenses, or awards, since none were supplied.
 */

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: businessConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    telephone: businessConfig.phone,
    email: businessConfig.email,
  };
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: businessConfig.legalName,
    url: siteConfig.url,
    telephone: businessConfig.phone,
    email: businessConfig.email,
    image: `${siteConfig.url}/images/og-default.jpg`,
    priceRange: "$$",
    areaServed: businessConfig.serviceCities.map((city) => ({
      "@type": "City",
      name: city,
      containedInPlace: {
        "@type": "State",
        name: businessConfig.state,
      },
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: businessConfig.primaryCity,
      addressRegion: businessConfig.stateAbbr,
      addressCountry: "US",
    },
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        url: `${siteConfig.url}/services/${service.slug}`,
      },
    })),
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: businessConfig.legalName,
    url: siteConfig.url,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

export function buildServiceSchema(args: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: args.name,
    name: args.name,
    description: args.description,
    provider: {
      "@id": `${siteConfig.url}/#localbusiness`,
    },
    areaServed: businessConfig.serviceCities.map((city) => ({
      "@type": "City",
      name: city,
    })),
    url: `${siteConfig.url}${args.path}`,
  };
}

export function buildFaqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}
