import type { Metadata } from "next";
import { PageHero } from "@/components/hero/PageHero";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ServiceAreaSection } from "@/components/service-area/ServiceAreaSection";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { CtaSection } from "@/components/cta/CtaSection";
import { buildMetadata } from "@/lib/seo";
import { businessConfig } from "@/lib/config";

export const metadata: Metadata = buildMetadata({
  title: "Service Area",
  description: `${businessConfig.legalName} provides residential and commercial plumbing throughout ${businessConfig.serviceArea}.`,
  path: "/service-area",
});

export default function ServiceAreaPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Service Area", path: "/service-area" }]} />
      <PageHero
        eyebrow="Service Area"
        h1={`Where We Work: ${businessConfig.serviceArea}`}
        description={`Imperium Plumbing provides residential and commercial plumbing throughout ${businessConfig.serviceArea}. Not sure if your address is covered? Reach out and we'll confirm.`}
      />
      <ServiceAreaSection />
      <ServiceGrid
        eyebrow="Available Here"
        heading={`Services Offered in ${businessConfig.citiesDisplay}`}
      />
      <CtaSection />
    </>
  );
}
