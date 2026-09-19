import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/hero/PageHero";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { businessConfig } from "@/lib/config";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description: `Terms and conditions for ${businessConfig.legalName}.`,
  path: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Terms & Conditions", path: "/terms" }]} />
      <PageHero eyebrow="Legal" h1="Terms & Conditions" />
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-3xl space-y-6 text-ink-muted">
          <p className="text-sm text-ink-muted">
            [PLACEHOLDER — This page will be replaced with complete terms and conditions.]
          </p>
          <p>
            This website is provided by {businessConfig.legalName} for informational purposes
            and to allow prospective customers to request plumbing service. Submitting a form
            does not create a binding service agreement — service terms, scope, and any pricing
            are confirmed directly between {businessConfig.legalName} and the customer before
            work begins.
          </p>
          <p>
            Contact{" "}
            <a href={businessConfig.emailHref} className="font-semibold text-navy-900 underline">
              {businessConfig.email}
            </a>{" "}
            with any questions about these terms.
          </p>
        </Container>
      </section>
    </>
  );
}
