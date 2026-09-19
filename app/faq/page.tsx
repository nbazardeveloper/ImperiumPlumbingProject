import type { Metadata } from "next";
import { PageHero } from "@/components/hero/PageHero";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FaqSection } from "@/components/faq/FaqSection";
import { CtaSection } from "@/components/cta/CtaSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildFaqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { businessConfig } from "@/lib/config";
import { generalFaqs } from "@/lib/faq-data";

export const metadata: Metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description: `Common questions about plumbing service from ${businessConfig.legalName} in ${businessConfig.serviceArea}.`,
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={buildFaqSchema(generalFaqs)} />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }]} />
      <PageHero eyebrow="FAQ" h1="Frequently Asked Questions" />
      <FaqSection faqs={generalFaqs} heading="Questions We Hear Often" />
      <CtaSection heading="Still Have a Question?" description="Call us or send a request — we're happy to help." />
    </>
  );
}
