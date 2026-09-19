import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/hero/PageHero";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { LeadForm } from "@/components/forms/LeadForm";
import { buildMetadata } from "@/lib/seo";
import { businessConfig } from "@/lib/config";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description: `Request plumbing service from ${businessConfig.legalName} in ${businessConfig.serviceArea}. Call, email, or send a request online.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />
      <PageHero
        eyebrow="Contact"
        h1="Request Plumbing Service"
        description="Tell us what's going on and we'll follow up to schedule a visit."
      />

      <section className="bg-white py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="text-xl font-bold text-navy-950">Get in Touch</h2>
            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-ink-muted">Phone</p>
                  <a href={businessConfig.phoneHref} className="text-lg font-bold text-navy-950">
                    {businessConfig.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-ink-muted">Email</p>
                  <a href={businessConfig.emailHref} className="text-lg font-bold text-navy-950 break-all">
                    {businessConfig.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-ink-muted">Service Area</p>
                  <p className="text-lg font-bold text-navy-950">{businessConfig.serviceArea}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-ink-muted">Response</p>
                  <p className="text-lg font-bold text-navy-950">We follow up promptly on every request</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="border border-line bg-paper p-6 sm:p-8">
            <h2 className="text-xl font-bold text-navy-950">Request Service</h2>
            <p className="mt-1.5 text-sm text-ink-muted">
              Fields marked with <span className="text-gold-600">*</span> are required.
            </p>
            <div className="mt-6">
              <LeadForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
