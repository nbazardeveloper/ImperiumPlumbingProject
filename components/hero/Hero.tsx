import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { CallNowButton, RequestServiceButton } from "@/components/cta/CtaButtons";
import { businessConfig } from "@/lib/config";

export function Hero() {
  return (
    <section className="relative bg-navy-950">
      {/* full-bleed background photo, darkened on the left so the copy stays legible */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero-plumber.webp"
          alt="Plumber repairing pipes under a sink"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[75%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-950/20" />
      </div>

      <Container className="relative py-24 sm:py-32 lg:py-44">
        <div className="max-w-2xl animate-fade-up">
          <h1 className="heading-bold text-balance text-4xl leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Fast, Straightforward Plumbing for Your {businessConfig.primaryCity} Home or Business
          </h1>
          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-white">
            Imperium Plumbing diagnoses the actual problem, explains your options in plain
            language, and does the work — no runaround, no guesswork pricing.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <RequestServiceButton size="lg" />
            <CallNowButton size="lg" variant="ghost" className="border-2 border-white/30" />
          </div>
        </div>
      </Container>

      {/* single accent callout overlapping the bottom edge of the hero */}
      <div className="relative hidden lg:block">
        <Container>
          <div className="absolute right-8 bottom-0 flex w-full max-w-sm translate-y-1/2 items-center gap-5 bg-gold-500 p-6 shadow-2xl">
            <p className="text-5xl font-extrabold text-navy-950">{businessConfig.yearsExperience}</p>
            <p className="text-sm font-semibold uppercase leading-snug tracking-wide text-navy-950">
              Years Serving {businessConfig.primaryCity} Homes &amp; Businesses
            </p>
          </div>
        </Container>
      </div>

      <div className="h-10 lg:h-24" />
    </section>
  );
}
