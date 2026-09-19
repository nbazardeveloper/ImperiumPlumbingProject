import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import type { ServiceData } from "@/lib/services-data";

export function RelatedServices({ services }: { services: ServiceData[] }) {
  if (services.length === 0) return null;

  return (
    <section className="border-t border-line bg-white py-16 sm:py-20">
      <Container>
        <h2 className="text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl">
          Related Services
        </h2>
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col border border-line p-6 transition-colors hover:border-gold-500"
                >
                  <Icon className="h-6 w-6 text-navy-900" aria-hidden="true" />
                  <h3 className="mt-4 font-bold text-navy-950">{service.title}</h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 group-hover:text-gold-600">
                    Learn More
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
