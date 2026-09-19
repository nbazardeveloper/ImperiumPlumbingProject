import { Container } from "@/components/layout/Container";

export function PageHero({
  eyebrow,
  h1,
  description,
}: {
  eyebrow?: string;
  h1: string;
  description?: string;
}) {
  return (
    <section className="bg-navy-950 py-12 sm:py-16">
      <Container>
        {eyebrow && (
          <p className="text-sm font-bold uppercase tracking-wide text-gold-400">{eyebrow}</p>
        )}
        <h1 className="mt-2 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {h1}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-balance text-lg leading-relaxed text-white">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
