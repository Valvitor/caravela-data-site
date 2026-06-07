import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { brand } from "@/lib/brand";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: `${brand.name} · ${brand.tagline}`,
    template: `%s · ${brand.name}`,
  },
  description: brand.description,
  openGraph: {
    title: `${brand.name} · ${brand.tagline}`,
    description: brand.description,
    type: "website",
    locale: "pt_BR",
    siteName: brand.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
