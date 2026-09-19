import type { Metadata } from "next";
import { Big_Shoulders, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildLocalBusinessSchema, buildOrganizationSchema, buildWebsiteSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bigShoulders = Big_Shoulders({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Residential & Commercial Plumbing`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${bigShoulders.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <JsonLd data={[buildOrganizationSchema(), buildLocalBusinessSchema(), buildWebsiteSchema()]} />
        <a
          href="#main-content"
          className="font-display sr-only tracking-wide focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-none focus:bg-gold-500 focus:px-4 focus:py-2 focus:text-navy-950 focus:font-semibold"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1 pb-16 md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileStickyCta />
      </body>
    </html>
  );
}
