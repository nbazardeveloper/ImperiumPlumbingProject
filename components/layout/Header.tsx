import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "./SocialIcons";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { RequestServiceButton } from "@/components/cta/CtaButtons";
import { businessConfig, primaryNav } from "@/lib/config";

const contactBlocks = [
  { icon: Phone, label: "Call Us", value: businessConfig.phoneDisplay, href: businessConfig.phoneHref },
  { icon: Mail, label: "Email Us", value: businessConfig.email, href: businessConfig.emailHref },
  { icon: MapPin, label: "Service Area", value: businessConfig.serviceAreaShort },
];

// Placeholder hrefs ("#") until real profile links are confirmed — swap
// businessConfig.social.<platform> in lib/config.ts and these pick it up automatically.
const socialIcons = [
  { key: "facebook", icon: FacebookIcon, href: businessConfig.social.facebook ?? "#" },
  { key: "instagram", icon: InstagramIcon, href: businessConfig.social.instagram ?? "#" },
  { key: "linkedin", icon: LinkedinIcon, href: businessConfig.social.linkedin ?? "#" },
  { key: "youtube", icon: YoutubeIcon, href: businessConfig.social.youtube ?? "#" },
];

export function Header() {
  return (
    <header className="contents">
      {/* thin two-tone utility bar — desktop only, scrolls away with the page */}
      <div className="relative hidden h-11 lg:flex">
        <div className="flex-1 bg-gold-500" />
        <div className="flex-1 bg-navy-950" />
        <Container className="absolute inset-0 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-semibold text-navy-950">
            <Clock className="h-4 w-4" aria-hidden="true" />
            {businessConfig.hours}
          </div>
          <div className="flex items-center gap-2">
            {socialIcons.map(({ key, icon: Icon, href }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={key}
                className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-gold-500 hover:text-navy-950"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </Container>
      </div>

      {/* logo + contact details — desktop only, scrolls away with the page */}
      <div className="hidden border-b border-line bg-paper lg:block">
        <Container className="flex h-24 items-center justify-between gap-8">
          <Logo />

          <ul className="flex items-center gap-8">
            {contactBlocks.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-line text-navy-900">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="flex flex-col">
                  <span className="font-display text-[18px] text-ink-muted">{label}</span>
                  {href ? (
                    <a href={href} className="font-display text-[21px] font-bold text-navy-950 hover:text-gold-600">
                      {value}
                    </a>
                  ) : (
                    <span className="font-display text-[21px] font-bold text-navy-950">{value}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </div>

      {/* dark nav bar — desktop only, this is the part that stays sticky */}
      <div className="sticky top-0 z-50 hidden bg-navy-900 lg:block">
        <Container>
          <nav aria-label="Primary" className="flex h-20 items-center justify-between">
            <ul className="flex items-center gap-7">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-display text-2xl uppercase tracking-wide text-white transition-colors hover:text-gold-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <RequestServiceButton label="Book Now" className="uppercase tracking-wide" />
          </nav>
        </Container>
      </div>

      {/* mobile header — single sticky row */}
      <div className="sticky top-0 z-50 flex items-center justify-between border-b border-line bg-paper/95 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-paper/80 lg:hidden">
        <Logo />
        <div className="flex items-center gap-1">
          <a
            href={businessConfig.phoneHref}
            aria-label={`Call ${businessConfig.phoneDisplay}`}
            className="flex h-10 w-10 items-center justify-center rounded-none text-navy-950"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
