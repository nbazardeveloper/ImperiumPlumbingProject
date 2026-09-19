import { Container } from "@/components/layout/Container";
import { CallNowButton, RequestServiceButton } from "./CtaButtons";
import { businessConfig } from "@/lib/config";

export function CtaSection({
  heading = "Have a Plumbing Problem? Let's Fix It.",
  description = `Tell us what's going on and we'll get back to you to schedule a visit in the ${businessConfig.serviceAreaShort}.`,
  primaryLabel = "Request Service",
  compact = false,
}: {
  heading?: string;
  description?: string;
  primaryLabel?: string;
  compact?: boolean;
}) {
  return (
    <section className={`bg-navy-950 ${compact ? "py-12" : "py-16 sm:py-20"}`}>
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {heading}
        </h2>
        <p className="max-w-xl text-balance text-lg text-white">{description}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <RequestServiceButton size="lg" label={primaryLabel} />
          <CallNowButton size="lg" variant="ghost" className="border-2 border-white/30" />
        </div>
      </Container>
    </section>
  );
}
