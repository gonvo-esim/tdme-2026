import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TDME - Global Connectivity & IoT Solutions | Enterprise-Grade Networks",
  description: "Enterprise-grade connectivity solutions for industrial, commercial, and mobile applications. GRMS smart hotels, IoT monitoring, eSIM, data transmission, and security systems worldwide.",
  keywords: "connectivity solutions, IoT, GRMS, smart hotel systems, data transmission, industrial connectivity, eSIM, network monitoring, temperature compliance, Middle East",
  authors: [{ name: "TDME", url: "https://tdme.net" }],
  creator: "TDME",
  publisher: "TDME",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/images/logo/tdme-logo.png",
    apple: "/images/logo/tdme-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tdme.net",
    siteName: "TDME",
    title: "TDME - Global Connectivity & IoT Solutions",
    description: "Enterprise-grade connectivity solutions for industrial, commercial, and mobile applications worldwide.",
    images: [
      {
        url: "https://tdme.net/images/logo/tdme-logo.png",
        width: 1200,
        height: 630,
        alt: "TDME Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TDME",
    creator: "@TDME",
    title: "TDME - Global Connectivity & IoT Solutions",
    description: "Enterprise-grade connectivity solutions for industrial, commercial, and mobile applications.",
    images: ["https://tdme.net/images/logo/tdme-logo.png"],
  },
  alternates: {
    canonical: "https://tdme.net",
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TDME",
    url: "https://tdme.net",
    logo: "https://tdme.net/images/logo/tdme-logo.png",
    description: "Enterprise-grade connectivity solutions for industrial, commercial, and mobile applications worldwide.",
    sameAs: [
      "https://www.linkedin.com/company/tdme",
      "https://twitter.com/TDME",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "sales@tdme.net",
      telephone: "+1-800-TDME-NET",
      availableLanguage: ["en"],
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
