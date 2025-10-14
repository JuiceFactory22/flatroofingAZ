import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Arizona Flat Roof Specialists | Commercial Roofing Services",
  description: "Expert commercial flat roofing services across Arizona. Specializing in roof coatings, resurfacing, maintenance, and repairs. TPO, EPDM, and coating systems.",
  keywords: "commercial flat roofing, roof coatings, roof resurfacing, commercial roof maintenance, Arizona roofing, TPO roofing, EPDM roofing, roof repairs",
  openGraph: {
    title: "Arizona Flat Roof Specialists | Commercial Roofing Services",
    description: "Expert commercial flat roofing services across Arizona. Specializing in roof coatings, resurfacing, maintenance, and repairs.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.arizonaflatroof.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e40af" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Arizona Flat Roof Specialists",
              "description": "Expert commercial flat roofing services across Arizona",
              "url": "https://www.arizonaflatroof.com",
              "telephone": "(602) 555-0123",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Phoenix",
                "addressRegion": "AZ",
                "addressCountry": "US"
              },
              "serviceArea": {
                "@type": "State",
                "name": "Arizona"
              },
              "services": [
                "Commercial Flat Roofing",
                "Roof Coatings",
                "Roof Resurfacing",
                "Commercial Roof Maintenance",
                "Roof Repairs"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
