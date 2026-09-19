import type { Metadata } from "next";
import { Building2, Lightbulb, Timer, Wallet } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/hero/PageHero";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { CtaSection } from "@/components/cta/CtaSection";
import { buildMetadata } from "@/lib/seo";
import { businessConfig } from "@/lib/config";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description: `The story behind ${businessConfig.legalName} and how we approach residential and commercial plumbing in ${businessConfig.serviceArea}.`,
  path: "/about",
});

const values = [
  {
    icon: Lightbulb,
    title: "Innovative",
    description: "We look for the fix that actually solves the problem, not just the most billable one.",
  },
  {
    icon: Timer,
    title: "Fast",
    description: "Plumbing problems get worse the longer they sit. We move quickly to diagnose and fix them.",
  },
  {
    icon: Wallet,
    title: "Affordable",
    description: "Straightforward pricing conversations before work starts — no surprises after the fact.",
  },
  {
    icon: Building2,
    title: "Residential & Commercial",
    description: "One standard of service for homeowners and business owners alike.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />
      <PageHero eyebrow="About Us" h1={`About ${businessConfig.legalName}`} />

      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl">
            Why We Started Imperium Plumbing
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-muted">
            <p>
              {businessConfig.founder} founded Imperium Plumbing after being burned, more than
              once, by tradespeople who charged more than expected and didn&apos;t deliver what they
              promised. That experience shaped how the company operates: diagnose the actual
              problem, explain it clearly, and do the work that was agreed to.
            </p>
            <p>
              With {businessConfig.yearsExperience} years in the plumbing industry, Imperium
              Plumbing works on both residential and commercial properties throughout{" "}
              {businessConfig.serviceArea}. The approach stays the same regardless of the job
              size — straightforward diagnosis, clear communication, and work that matches what
              was discussed.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl">
            What Guides Our Work
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description }) => (
              <li key={title} className="border border-line bg-white p-6">
                <Icon className="h-6 w-6 text-gold-600" aria-hidden="true" />
                <h3 className="mt-4 font-bold text-navy-950">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaSection heading="Ready to Talk to a Plumber?" />
    </>
  );
}
