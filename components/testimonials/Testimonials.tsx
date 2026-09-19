import { Quote } from "lucide-react";
import { Container } from "@/components/layout/Container";

/**
 * No real reviews were supplied. These are structural placeholders only —
 * replace each with a real customer quote (and remove this component's
 * placeholder styling) once reviews are collected. Do not fill with
 * fabricated testimonials.
 */
const placeholderSlots = [1, 2, 3];

export function Testimonials() {
  return (
    <section className="bg-white py-16 sm:py-20" id="reviews">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wide text-gold-600">Reviews</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            What Customers Say
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Customer reviews will be added here as they come in.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {placeholderSlots.map((slot) => (
            <li
              key={slot}
              className="flex flex-col justify-between border border-dashed border-line bg-paper p-6"
            >
              <Quote className="h-6 w-6 text-gold-500" aria-hidden="true" />
              <p className="mt-4 flex-1 text-sm italic leading-relaxed text-ink-muted">
                [CUSTOMER REVIEW WILL BE ADDED HERE]
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
