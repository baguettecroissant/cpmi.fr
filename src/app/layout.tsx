import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cpmi.fr'),
  title: "CPMI — Ascenseurs, Climatisation & Bornes de Recharge Pro | Devis Gratuit",
  description: "Expert B2B : installation d'ascenseurs ERP, climatisation tertiaire et bornes de recharge IRVE pour entreprises et copropriétés. Comparez jusqu'à 3 devis gratuits.",
  openGraph: {
    title: "CPMI — Ascenseurs, Climatisation & Bornes de Recharge Pro",
    description: "Expert B2B : installation d'ascenseurs ERP, climatisation tertiaire et bornes de recharge IRVE. Devis gratuits.",
    url: 'https://www.cpmi.fr',
    siteName: 'CPMI.fr',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "CPMI — Ascenseurs, Climatisation & Bornes de Recharge Pro",
    description: "Expert B2B : installation d'ascenseurs ERP, climatisation tertiaire et bornes de recharge IRVE. Devis gratuits.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CPMI.fr",
  "url": "https://www.cpmi.fr",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "areaServed": "FR",
    "availableLanguage": "French"
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "CPMI.fr",
  "url": "https://www.cpmi.fr",
  "description": "Plateforme B2B pour l'installation d'ascenseurs, de climatisation tertiaire et de bornes de recharge IRVE en France.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.cpmi.fr/annuaire?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased text-slate-900 bg-slate-50 min-h-screen flex flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
