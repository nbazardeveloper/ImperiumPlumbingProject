import type { Metadata } from "next";
import { PageHero } from "@/components/hero/PageHero";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { ProblemSolution } from "@/components/services/ProblemSolution";
import { CtaSection } from "@/components/cta/CtaSection";
import { buildMetadata } from "@/lib/seo";
import { businessConfig } from "@/lib/config";

export const metadata: Metadata = buildMetadata({
  title: `Plumbing Services in ${businessConfig.primaryCity}`,
  description: `All plumbing services offered by ${businessConfig.legalName} in ${businessConfig.serviceArea}: plumbing repair, sewer & drain, water heaters, repiping, leak detection, and hydro jetting.`,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]} />
      <PageHero
        eyebrow="Services"
        h1={`Plumbing Services for Homes & Businesses in the ${businessConfig.serviceAreaShort}`}
        description="Every service below starts with a diagnosis and a clear explanation before any work begins."
      />
      <ServiceGrid eyebrow="Full Lineup" heading="Browse All Services" />
      <ProblemSolution />
      <CtaSection />
    </>
  );
}
