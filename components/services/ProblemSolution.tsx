import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { problemSolutions } from "@/lib/problem-solution-data";
import { getServiceBySlug } from "@/lib/services-data";

export function ProblemSolution() {
  return (
    <section className="bg-navy-900 py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-gold-400">Sound Familiar?</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Common Plumbing Problems We Solve
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-white">
              Most service calls start with one of these six symptoms. Find yours below to see what&apos;s
              likely causing it and which service fixes it.
            </p>

            <ul className="mt-8 divide-y divide-white/10 border-t border-white/10">
              {problemSolutions.map((item) => {
                const service = getServiceBySlug(item.solutionSlug);
                const Icon = service?.icon;
                return (
                  <li key={item.problem}>
                    <Link
                      href={`/services/${item.solutionSlug}`}
                      className="group flex items-center justify-between gap-4 py-4"
                    >
                      <span className="flex items-center gap-4">
                        {Icon && (
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-500 text-navy-950">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        )}
                        <span className="text-lg font-bold text-white transition-colors group-hover:text-gold-400">
                          {item.problem}
                        </span>
                      </span>
                      <ArrowRight
                        className="h-5 w-5 shrink-0 text-gold-400 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative hidden aspect-auto min-h-[320px] overflow-hidden rounded-md lg:block">
            <Image
              src="/images/common-plumbing-problems.webp"
              alt="Plumbing tools used to diagnose and repair common plumbing problems"
              fill
              sizes="40vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
