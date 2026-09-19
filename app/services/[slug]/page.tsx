import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, TriangleAlert } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/hero/PageHero";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FaqSection } from "@/components/faq/FaqSection";
import { RelatedServices } from "@/components/services/RelatedServices";
import { CtaSection } from "@/components/cta/CtaSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { getRelatedServices, getServiceBySlug, services } from "@/lib/services-data";
import { buildFaqSchema, buildServiceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { businessConfig } from "@/lib/config";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return buildMetadata({
    title: `${service.title} in ${businessConfig.primaryCity}`,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(service);
  const Icon = service.icon;

  return (
    <>
      <JsonLd
        data={buildServiceSchema({
          name: service.title,
          description: service.metaDescription,
          path: `/services/${service.slug}`,
        })}
      />
      <JsonLd data={buildFaqSchema(service.faqs)} />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.shortTitle, path: `/services/${service.slug}` },
        ]}
      />

      <PageHero eyebrow={service.shortTitle} h1={service.h1} description={service.intro} />

      <section className="bg-white py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-md bg-navy-950 text-gold-400">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl">
              How This Service Works
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">{service.explanation}</p>

            <h3 className="mt-10 text-xl font-bold text-navy-950">What&apos;s Included</h3>
            <ul className="mt-4 space-y-3">
              {service.included.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-ink-muted">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="border border-line bg-paper p-6">
            <h3 className="flex items-center gap-2 text-lg font-bold text-navy-950">
              <TriangleAlert className="h-5 w-5 text-gold-600" aria-hidden="true" />
              Signs You May Need This
            </h3>
            <ul className="mt-4 space-y-3">
              {service.symptoms.map((item) => (
                <li key={item} className="border-l-2 border-gold-500 pl-3 text-sm text-ink-muted">
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-lg font-bold text-navy-950">Why Choose Imperium</h3>
            <ul className="mt-4 space-y-3">
              {service.whyChoose.map((item) => (
                <li key={item} className="text-sm text-ink-muted">
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </section>

      <section className="bg-navy-900 py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            Our Process for {service.shortTitle}
          </h2>
          <ol className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <li key={step.title} className="border-l-2 border-gold-500 pl-4">
                <span className="text-sm font-bold text-gold-400">Step {index + 1}</span>
                <h3 className="mt-1 font-bold text-white">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <FaqSection
        faqs={service.faqs}
        heading={`${service.shortTitle} FAQs`}
        id={`${service.slug}-faq`}
      />

      <RelatedServices services={related} />

      <CtaSection
        heading={`Need Help With ${service.shortTitle}?`}
        primaryLabel="Request Service"
      />
    </>
  );
}
