import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Janco Home & Construction | Quality Home Building Services",
  description:
    "Professional home construction and renovation services. Building quality homes with excellence and integrity.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden" data-scroll-behavior="smooth">
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
