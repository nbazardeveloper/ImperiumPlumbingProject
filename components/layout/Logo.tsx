import Image from "next/image";
import Link from "next/link";
import { businessConfig } from "@/lib/config";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isLight = variant === "light";
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 shrink-0"
      aria-label={`${businessConfig.shortName} — Home`}
    >
      <Image
        src="/images/logo-mark.webp"
        alt=""
        width={62}
        height={62}
        className="h-[62px] w-[62px] shrink-0"
        aria-hidden="true"
      />
      <span className="font-logo flex flex-col leading-none font-semibold tracking-normal">
        <span className={`text-[34px] ${isLight ? "text-white" : "text-navy-950"}`}>Imperium</span>
        <span className={`text-[26px] ${isLight ? "text-gold-400" : "text-gold-600"}`}>PLUMBING</span>
      </span>
    </Link>
  );
}
