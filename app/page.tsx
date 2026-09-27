import type { Metadata } from "next";
import { Hero } from "@/components/hero/Hero";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { ProblemSolution } from "@/components/services/ProblemSolution";
import { WhyChooseUs } from "@/components/trust/WhyChooseUs";
import { HowItWorks } from "@/components/process/HowItWorks";
import { AboutTeaser } from "@/components/about/AboutTeaser";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { ServiceAreaSection } from "@/components/service-area/ServiceAreaSection";
import { FaqSection } from "@/components/faq/FaqSection";
import { CtaSection } from "@/components/cta/CtaSection";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";
import { businessConfig } from "@/lib/config";
import { generalFaqs } from "@/lib/faq-data";

export const metadata: Metadata = buildMetadata({
  title: `${businessConfig.legalName} | Plumbing Services in ${businessConfig.citiesDisplay}`,
  description: `Residential and commercial plumbing in ${businessConfig.serviceArea}. Plumbing repair, sewer & drain, water heaters, repiping, leak detection, and hydro jetting.`,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Reveal>
        <ServiceGrid
          description={`Straightforward plumbing work for homes and businesses in ${businessConfig.serviceArea}.`}
        />
      </Reveal>
      <Reveal>
        <ProblemSolution />
      </Reveal>
      <Reveal>
        <WhyChooseUs />
      </Reveal>
      <Reveal>
        <HowItWorks />
      </Reveal>
      <Reveal>
        <AboutTeaser />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <ServiceAreaSection compact />
      </Reveal>
      <Reveal>
        <FaqSection faqs={generalFaqs.slice(0, 6)} description="Quick answers to the questions we hear most." />
      </Reveal>
      <Reveal>
        <CtaSection />
      </Reveal>
    </>
  );
}
