import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";

export const metadata: Metadata = {
  title: "Janco Home & Construction | Quality Home Building Services",
  description:
    "Professional home construction and renovation services. Building quality homes with excellence and integrity.",
  keywords: [
    "house construction Sri Lanka",
    "home builders Sri Lanka",
    "construction company Colombo",
    "ICTAD registered contractors",
    "residential construction",
    "villa construction",
    "building contractors Sri Lanka",
  ],
  authors: [{ name: "Janco Home & Construction" }],
  creator: "Janco Home & Construction",
  publisher: "Janco Home & Construction",
  metadataBase: new URL("https://jancohomes-website.vercel.app"),
  icons: {
    icon: "/janco-logo.svg",
    shortcut: "/janco-logo.svg",
    apple: "/janco-logo.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jancohomes-website.vercel.app",
    siteName: "Janco Home & Construction",
    title: "Janco Home & Construction | Quality Home Building Services",
    description:
      "Professional home construction and renovation services. Building quality homes with excellence and integrity.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Janco Home & Construction | Quality Home Building Services",
    description:
      "Professional home construction and renovation services. Building quality homes with excellence and integrity.",
  },
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
  verification: {
    google: "your-google-verification-code", // Add Google Search Console verification code
  },
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
      <body className="antialiased overflow-x-hidden">
        {children}
        <WhatsAppWidget phoneNumber="94771287374" />
      </body>
    </html>
  );
}
