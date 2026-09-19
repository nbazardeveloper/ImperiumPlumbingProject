import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/hero/PageHero";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { businessConfig } from "@/lib/config";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${businessConfig.legalName}.`,
  path: "/privacy",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy" }]} />
      <PageHero eyebrow="Legal" h1="Privacy Policy" />
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-3xl space-y-6 text-ink-muted">
          <p className="text-sm text-ink-muted">
            [PLACEHOLDER — This page will be replaced with a complete privacy policy.]
          </p>
          <p>
            {businessConfig.legalName} collects the information submitted through this website&apos;s
            contact and service-request forms — such as name, phone number, email address, and
            service details — solely to respond to service requests and follow up with
            prospective and existing customers.
          </p>
          <p>
            Information is not sold to third parties. It may be shared with service providers
            that support business operations (such as a customer relationship management or
            scheduling platform) strictly to fulfill your request.
          </p>
          <p>
            To request that your information be corrected or removed, contact{" "}
            <a href={businessConfig.emailHref} className="font-semibold text-navy-900 underline">
              {businessConfig.email}
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
