import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ServiceData } from "@/lib/services-data";
import { businessConfig } from "@/lib/config";

export function ServiceCard({ service }: { service: ServiceData }) {
  return (
    <li className="group flex flex-col overflow-hidden border border-line bg-white transition-shadow hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-paper-dim">
        <Image
          src={`/images/services/${service.slug}.webp`}
          alt={`${service.title} in ${businessConfig.primaryCity} — Imperium Plumbing`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-navy-950">{service.title}</h3>
        <p className="mt-2 flex-1 text-lg leading-relaxed text-ink-muted">{service.cardDescription}</p>
        <Link
          href={`/services/${service.slug}`}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-navy-900 group-hover:text-gold-600"
        >
          Learn More
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </div>

      <div className="h-1.5 w-full bg-gold-500 transition-colors group-hover:bg-navy-900" />
    </li>
  );
}
