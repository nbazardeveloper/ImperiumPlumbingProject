import type { Metadata } from "next";
import { siteConfig } from "./config";

type BuildMetadataArgs = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

/**
 * Builds a consistent Metadata object (title, canonical, OG, Twitter) for a
 * single page so metadata never has to be hand-rolled per route.
 */
export function buildMetadata({ title, description, path, noIndex }: BuildMetadataArgs): Metadata {
  const url = `${siteConfig.url}${path}`;
  // The page <title> gets the brand via the layout template; OG/Twitter titles don't, so add it here.
  const socialTitle = title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.ogImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [{ url: siteConfig.ogImage, alt: siteConfig.ogImageAlt }],
    },
  };
}
