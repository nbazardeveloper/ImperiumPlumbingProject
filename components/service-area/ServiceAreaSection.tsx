import { Container } from "@/components/layout/Container";
import { RequestServiceButton } from "@/components/cta/CtaButtons";
import { businessConfig } from "@/lib/config";

export function ServiceAreaSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className="bg-navy-900 py-16 sm:py-20" id="service-area">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-gold-400">Service Area</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Plumbing Service in {businessConfig.citiesDisplay}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white">
            Imperium Plumbing serves {businessConfig.serviceArea} for both residential and
            commercial plumbing work.
          </p>
          {!compact && (
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white">
              Not sure if your location is covered? Call or send a request — we&apos;ll confirm
              availability for your address.
            </p>
          )}
          <div className="mt-6 flex justify-center">
            <RequestServiceButton size="lg" />
          </div>
        </div>

        <div className="mt-10 h-[360px] overflow-hidden rounded-md border border-white/10 sm:h-[440px] lg:h-[560px]">
          <iframe
            title={`${businessConfig.primaryCity} service area map`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              `${businessConfig.primaryCity}, ${businessConfig.state}`,
            )}&output=embed`}
            className="h-full w-full grayscale-[20%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Container>
    </section>
  );
}
