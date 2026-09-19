import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { RequestServiceButton } from "@/components/cta/CtaButtons";

export default function NotFound() {
  return (
    <section className="bg-navy-950 py-24">
      <Container className="flex flex-col items-center gap-5 text-center">
        <p className="text-sm font-bold uppercase tracking-wide text-gold-400">404</p>
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl">Page Not Found</h1>
        <p className="max-w-md text-white">
          The page you&apos;re looking for doesn&apos;t exist. Try one of these instead.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <RequestServiceButton size="lg" />
          <Link
            href="/"
            className="font-display inline-flex items-center justify-center rounded-none border-2 border-white/30 px-7 py-4 text-2xl font-semibold tracking-wide text-white hover:bg-white/10"
          >
            Back to Home
          </Link>
        </div>
      </Container>
    </section>
  );
}
