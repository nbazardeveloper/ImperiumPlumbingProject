import { CheckCircle2, ClipboardList, Phone, Search } from "lucide-react";
import { Container } from "@/components/layout/Container";

const steps = [
  {
    icon: Phone,
    title: "Contact Us",
    description: "Call or send a service request describing the problem.",
  },
  {
    icon: Search,
    title: "Diagnose the Problem",
    description: "We inspect the issue on-site and find the actual cause.",
  },
  {
    icon: ClipboardList,
    title: "Explain Your Options",
    description: "You'll know what's wrong and what it takes to fix it before we start.",
  },
  {
    icon: CheckCircle2,
    title: "Complete the Work",
    description: "We do the job and leave the work area clean.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-paper py-16 sm:py-20" id="how-it-works">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wide text-gold-600">Our Process</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            How It Works
          </h2>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-y-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="relative flex flex-col items-center text-center">
                {index < steps.length - 1 && (
                  <span
                    className="absolute top-[71px] -right-4 hidden w-8 border-t-[3px] border-dashed border-navy-900/30 lg:block"
                    aria-hidden="true"
                  />
                )}
                <span className="inline-flex shrink-0 items-center justify-center bg-gold-300/40 p-[15px]">
                  <span className="flex h-28 w-28 items-center justify-center bg-navy-900">
                    <Icon className="h-12 w-12 text-white" aria-hidden="true" />
                  </span>
                </span>
                <h3 className="mt-6 text-xl font-bold text-navy-950">{step.title}</h3>
                <p className="mt-2 max-w-[260px] text-lg leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
