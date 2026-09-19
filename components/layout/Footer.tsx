import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "./Container";
import { Logo } from "./Logo";
import {
  businessConfig,
  footerLegalLinks,
  footerServiceLinks,
  primaryNav,
} from "@/lib/config";

export function Footer() {
  return (
    <footer className="bg-navy-950 pb-24 text-white md:pb-0">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white">
            Residential and commercial plumbing for {businessConfig.serviceArea}. Straightforward
            service, explained clearly before any work begins.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-wide text-gold-400">Services</h2>
          <ul className="mt-4 space-y-3">
            {footerServiceLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-wide text-gold-400">Company</h2>
          <ul className="mt-4 space-y-3">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-wide text-gold-400">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-white">
            <li>
              <a href={businessConfig.phoneHref} className="flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
                {businessConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={businessConfig.emailHref} className="flex items-center gap-2 hover:text-white">
                <Mail className="h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
                {businessConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
              <span>{businessConfig.serviceArea}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {businessConfig.legalName}. All rights reserved.
          </p>
          <div className="flex gap-5">
            {footerLegalLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
