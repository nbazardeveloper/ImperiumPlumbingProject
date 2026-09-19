import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Home, MapPin } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { businessConfig } from "@/lib/config";

export function AboutTeaser() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-gold-600">About Us</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            Started by Someone Tired of the Same Runaround
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            {businessConfig.founder} started Imperium Plumbing after one too many experiences
            with tradespeople who charged more than expected and didn&apos;t deliver what was
            promised. The company is built around the opposite of that experience.
          </p>

          <div className="mt-8 border-t border-line pt-6">
            <p className="text-3xl font-extrabold text-navy-950">{businessConfig.yearsExperience}</p>
            <p className="mt-1 text-lg font-semibold text-ink-muted">Years of Experience</p>
          </div>

          <ul className="mt-5 space-y-3">
            <li className="flex items-center gap-2 text-lg font-semibold text-ink-muted">
              <Home className="h-5 w-5 shrink-0 text-gold-600" aria-hidden="true" />
              Residential Properties
            </li>
            <li className="flex items-center gap-2 text-lg font-semibold text-ink-muted">
              <Building2 className="h-5 w-5 shrink-0 text-gold-600" aria-hidden="true" />
              Commercial Properties
            </li>
            <li className="flex items-center gap-2 text-lg font-semibold text-ink-muted">
              <MapPin className="h-5 w-5 shrink-0 text-gold-600" aria-hidden="true" />
              Serving {businessConfig.serviceArea}
            </li>
          </ul>

          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-navy-900 hover:text-gold-600"
          >
            Read Our Story
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-md lg:aspect-auto lg:h-full lg:min-h-[420px]">
          <Image
            src="/images/about-us.webp"
            alt={`${businessConfig.founder}, founder of Imperium Plumbing, repairing a pipe`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
