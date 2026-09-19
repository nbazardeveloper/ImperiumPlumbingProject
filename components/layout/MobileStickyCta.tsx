import Link from "next/link";
import { Phone, Wrench } from "lucide-react";
import { businessConfig } from "@/lib/config";

export function MobileStickyCta() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-navy-800 bg-navy-950 pb-[env(safe-area-inset-bottom)] md:hidden"
      role="region"
      aria-label="Quick actions"
    >
      <a
        href={businessConfig.phoneHref}
        className="font-display flex items-center justify-center gap-2 py-3.5 text-[21px] font-bold tracking-wide text-white"
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        Call Now
      </a>
      <Link
        href="/contact"
        className="font-display flex items-center justify-center gap-2 bg-gold-500 py-3.5 text-[21px] font-bold tracking-wide text-navy-950"
      >
        <Wrench className="h-4 w-4" aria-hidden="true" />
        Request Service
      </Link>
    </div>
  );
}
