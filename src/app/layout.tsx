import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jasa-pbgbandung.com'),
  title: {
    template: "%s | Jasa Pengurusan PBG Bandung",
    default: "Jasa Pengurusan PBG Bandung, Cagar Budaya & Kontraktor Syariah",
  },
  description: "Solusi legalitas bangunan (PBG/IMB), renovasi cagar budaya, dan konstruksi syariah dengan tenaga ahli bersertifikat SKA/SKK. Cepat, tepat, dan sesuai regulasi SIMBG.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Jasa Pengurusan PBG Bandung & Kontraktor Syariah",
    description: "Solusi legalitas bangunan (PBG/IMB), renovasi cagar budaya, dan konstruksi syariah di Bandung.",
    url: 'https://www.jasa-pbgbandung.com',
    siteName: 'Jasa PBG Bandung',
    images: [
      {
        url: '/assets/img/logo.webp',
        width: 800,
        height: 600,
        alt: 'Jasa PBG Bandung Logo',
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jasa Pengurusan PBG Bandung & Kontraktor Syariah',
    description: 'Solusi legalitas bangunan (PBG/IMB), renovasi cagar budaya, dan konstruksi syariah dengan tenaga ahli bersertifikat SKA/SKK.',
    images: ['/assets/img/logo.webp'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Jasa PBG Bandung',
  image: 'https://www.jasa-pbgbandung.com/assets/img/logo.webp',
  '@id': 'https://www.jasa-pbgbandung.com',
  url: 'https://www.jasa-pbgbandung.com',
  telephone: '+6282312567209',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Kencanawangi Utara II No.20 Cijaura',
    addressLocality: 'Buah Batu',
    addressRegion: 'Kota Bandung',
    addressCountry: 'ID'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col font-sans" suppressHydrationWarning>
          <Navbar />
          <main className="flex-grow w-full">
            {children}
          </main>
          <Footer />
      </body>
    </html>
  );
}
