import Image from "next/image";
import { Building2, Lightbulb, Timer, Wallet } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { businessConfig } from "@/lib/config";

const reasons = [
  {
    icon: Lightbulb,
    title: "An Innovative Approach",
    description:
      "We look for the most direct fix that actually solves the problem, instead of defaulting to the most expensive option.",
  },
  {
    icon: Timer,
    title: "Fast Response",
    description: "Plumbing problems don't wait for a convenient time. We move quickly to get to the actual cause.",
  },
  {
    icon: Wallet,
    title: "Affordable Solutions",
    description: "We explain the work and the reasoning behind it before we start — no guesswork, no surprises.",
  },
  {
    icon: Building2,
    title: "Residential & Commercial",
    description: "One team for both — homeowners and business owners get the same straightforward process.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="relative aspect-[4/5] overflow-hidden rounded-md lg:aspect-auto">
            <Image
              src="/images/why-us-plumber.webp"
              alt="Imperium Plumbing technician at work"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-gold-600">Why Imperium</p>
            <h2 className="mt-2 text-balance text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
              Why Choose Imperium Plumbing
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              Imperium Plumbing was built around a simple idea: tell customers what&apos;s actually
              wrong, what it takes to fix it, and then do the work. With {businessConfig.yearsExperience}{" "}
              years in residential and commercial plumbing, that&apos;s still the standard.
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {reasons.map(({ icon: Icon, title, description }) => (
                <li key={title} className="border-l-2 border-gold-500 pl-5">
                  <Icon className="h-6 w-6 text-navy-900" aria-hidden="true" />
                  <h3 className="mt-3 text-xl font-bold text-navy-950">{title}</h3>
                  <p className="mt-1.5 text-lg leading-relaxed text-ink-muted">{description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
