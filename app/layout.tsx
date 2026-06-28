// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import CustomCursor from "./components/ui/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// SEO Metadata
export const metadata: Metadata = {
  title: {
    default: "SCYLAAAC – Best Software & App Development Company in Mangalore",
    template: "%s | SCYLAAAC",
  },
  description:
    "SCYLAAAC is a leading software and app development company in Mangalore. We specialize in web, mobile, AI, SAP, and ERP solutions to scale your business.",
  keywords: [
    "software company Mangalore",
    "app development company",
    "AI solutions",
    "SAP integration",
    "ERP consulting",
    "web development",
    "mobile app development",
    "digital transformation",
    "best software company in Mangalore",
    "SCYLAAAC",
  ],
  authors: [{ name: "SCYLAAAC" }],
  creator: "SCYLAAAC",
  publisher: "SCYLAAAC",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "SCYLAAAC – Best Software & App Development Company in Mangalore",
    description:
      "We build web, mobile, AI, and ERP solutions that scale. Trusted by businesses in Mangalore and beyond.",
    url: "https://scylaac.com",
    siteName: "SCYLAAAC",
    images: [
      {
        url: "https://scylaac.com/assets/logo.png", // same logo as navbar/footer
        width: 1200,
        height: 630,
        alt: "SCYLAAAC – Alchemy of Dreams",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SCYLAAAC – Best Software & App Development Company",
    description:
      "We deliver scalable digital solutions – web, mobile, AI, and ERP. Based in Mangalore.",
    images: ["https://scylaac.com/assets/logo.png"], // same logo
    creator: "@scylaac",
    site: "@scylaac",
  },
  alternates: {
    canonical: "https://scylaac.com",
  },
};

export const viewport: Viewport = {
  themeColor: "#1E90C8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link rel="icon" href="/assets/logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/assets/logo.png" />
        <meta name="msapplication-TileColor" content="#1E90C8" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SCYLAAAC",
              url: "https://scylaac.com",
              logo: "https://scylaac.com/assets/logo.png",
              description:
                "SCYLAAAC is a software and app development company in Mangalore, offering web, mobile, AI, SAP, and ERP solutions.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mangalore",
                addressRegion: "Karnataka",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9591619204",
                contactType: "sales",
                availableLanguage: ["English", "Hindi"],
              },
              sameAs: [
                "https://linkedin.com/company/scylaac",
                "https://twitter.com/scylaac",
                "https://facebook.com/scylaac",
                "https://instagram.com/scylaac",
                "https://youtube.com/scylaac",
              ],
            }),
          }}
        />
        {/* Additional LocalBusiness schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "SCYLAAAC",
              image: "https://scylaac.com/assets/logo.png",
              "@id": "https://scylaac.com",
              url: "https://scylaac.com",
              telephone: "+91-9591619204",
              priceRange: "₹₹",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Mangalore",
                addressLocality: "Mangalore",
                addressRegion: "Karnataka",
                postalCode: "575001",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 12.9141,
                longitude: 74.8560,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
              sameAs: [
                "https://linkedin.com/company/scylaac",
                "https://twitter.com/scylaac",
                "https://facebook.com/scylaac",
                "https://instagram.com/scylaac",
                "https://youtube.com/scylaac",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}