import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";
import GoogleTagManager from "@/components/analytics/GoogleTagManager";
import MetaPixel from "@/components/analytics/MetaPixel";
import StructuredData from "@/components/seo/StructuredData";
import { siteConfig, googleSiteVerification } from "@/lib/seo-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.creator }],
  creator: siteConfig.creator,
  publisher: siteConfig.creator,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/janco-logo.svg",
    shortcut: "/janco-logo.svg",
    apple: "/janco-logo.svg",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@jancohomes",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: googleSiteVerification,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  category: "construction",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden" data-scroll-behavior="smooth">
      <head>
        <GoogleTagManager />
        <MetaPixel />
        <StructuredData />
      </head>
      <body className="antialiased overflow-x-hidden">
        {children}
        <WhatsAppWidget phoneNumber="94771287374" />
      </body>
    </html>
  );
}
