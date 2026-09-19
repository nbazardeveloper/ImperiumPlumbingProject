import type { Metadata } from "next";
import { PageHero } from "@/components/hero/PageHero";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { CtaSection } from "@/components/cta/CtaSection";
import { buildMetadata } from "@/lib/seo";
import { businessConfig } from "@/lib/config";

export const metadata: Metadata = buildMetadata({
  title: "Reviews",
  description: `Customer reviews for ${businessConfig.legalName}, serving ${businessConfig.serviceArea}.`,
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Reviews", path: "/reviews" }]} />
      <PageHero
        eyebrow="Reviews"
        h1="Customer Reviews"
        description="We're building out this page as reviews come in from Google, Facebook, and Yelp."
      />
      <Testimonials />
      <CtaSection heading="Become Our Next Customer" />
    </>
  );
}
