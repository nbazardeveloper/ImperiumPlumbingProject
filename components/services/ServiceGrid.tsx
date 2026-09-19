import { Container } from "@/components/layout/Container";
import { ServiceCard } from "./ServiceCard";
import { services } from "@/lib/services-data";

export function ServiceGrid({
  eyebrow = "What We Do",
  heading = "Our Plumbing Services",
  description,
}: {
  eyebrow?: string;
  heading?: string;
  description?: string;
}) {
  return (
    <section className="bg-paper py-16 sm:py-20" id="services">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wide text-gold-600">{eyebrow}</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            {heading}
          </h2>
          {description && <p className="mt-4 text-lg leading-relaxed text-ink-muted">{description}</p>}
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
