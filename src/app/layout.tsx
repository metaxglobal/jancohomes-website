import type { Metadata, Viewport } from "next";
import Script from "next/script";
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
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5QRKP5FW');
          `}
        </Script>

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1166358882272505');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className="antialiased overflow-x-hidden">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-5QRKP5FW"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Meta Pixel (noscript) */}
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1166358882272505&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel (noscript) */}
        
        {children}
        <WhatsAppWidget phoneNumber="94771287374" />
      </body>
    </html>
  );
}
