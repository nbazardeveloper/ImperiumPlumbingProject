import { Container } from "@/components/layout/Container";
import { FaqAccordion } from "./FaqAccordion";
import type { FaqItem } from "@/lib/services-data";

export function FaqSection({
  faqs,
  heading = "Frequently Asked Questions",
  description,
  id = "faq",
}: {
  faqs: FaqItem[];
  heading?: string;
  description?: string;
  id?: string;
}) {
  return (
    <section className="bg-paper py-16 sm:py-20" id={id}>
      <Container className="max-w-3xl">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-gold-600">FAQ</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            {heading}
          </h2>
          {description && <p className="mt-4 text-lg leading-relaxed text-ink-muted">{description}</p>}
        </div>
        <div className="mt-8">
          <FaqAccordion faqs={faqs} />
        </div>
      </Container>
    </section>
  );
}
