import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "TDME - IoT & Connectivity Solutions | Middle East, East Africa | Enterprise Networks",
  description: "Enterprise IoT connectivity for hotels, industrial, oil & gas in UAE, Saudi Arabia, Egypt, Kenya, South Africa. GRMS smart hotels, data transmission, security systems, industrial networks.",
  keywords: "IoT solutions UAE, connectivity Saudi Arabia, smart hotel systems Egypt, industrial networks Kenya, GRMS systems Africa, data transmission Middle East, security systems, Motorola radio communications, enterprise connectivity",
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
    title: "TDME - IoT & Connectivity Solutions for Middle East & East Africa",
    description: "Enterprise IoT solutions for hotels, industrial, and commercial applications across Middle East and East Africa.",
    images: [
      {
        url: "https://tdme.net/images/logo/tdme-logo.png",
        width: 1200,
        height: 630,
        alt: "TDME IoT Connectivity Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TDME",
    creator: "@TDME",
    title: "TDME - IoT & Connectivity Solutions",
    description: "Enterprise IoT solutions for Middle East and East Africa markets.",
    images: ["https://tdme.net/images/logo/tdme-logo.png"],
  },
  alternates: {
    canonical: "https://tdme.net",
    languages: {
      "en-US": "https://tdme.net",
      "en-AE": "https://tdme.net/uae",
      "en-SA": "https://tdme.net/saudi-arabia",
      "en-EG": "https://tdme.net/egypt",
      "en-KE": "https://tdme.net/kenya",
      "en-ZA": "https://tdme.net/south-africa",
    },
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
    description: "Enterprise IoT and connectivity solutions for industrial, commercial, and hospitality sectors across Middle East and East Africa.",
    sameAs: [
      "https://www.linkedin.com/company/tdme",
      "https://twitter.com/TDME",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        email: "sales@tdme.net",
        telephone: "+1-800-TDME-NET",
        availableLanguage: ["en"],
      }
    ],
    areaServed: [
      {
        "@type": "Country",
        name: "United Arab Emirates"
      },
      {
        "@type": "Country",
        name: "Saudi Arabia"
      },
      {
        "@type": "Country",
        name: "Egypt"
      },
      {
        "@type": "Country",
        name: "Kenya"
      },
      {
        "@type": "Country",
        name: "South Africa"
      },
      {
        "@type": "Country",
        name: "Nigeria"
      },
      {
        "@type": "Country",
        name: "United States"
      }
    ],
    knowsAbout: [
      "IoT Solutions",
      "Connectivity Networks",
      "Smart Hotel Systems",
      "Industrial Networks",
      "Data Transmission",
      "Security Systems",
      "GRMS Systems",
      "Mobile Radio Communications"
    ],
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
