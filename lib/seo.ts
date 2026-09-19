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
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
