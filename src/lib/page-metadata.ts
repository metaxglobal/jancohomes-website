import { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";

export const projectsMetadata: Metadata = {
  title: "Our Projects - Construction Portfolio",
  description:
    "Explore Janco Home & Construction's portfolio of completed residential and commercial projects across Sri Lanka. Villa construction, luxury homes, and quality building projects.",
  keywords: [
    "construction projects Sri Lanka",
    "completed homes",
    "villa construction portfolio",
    "house building examples",
    "residential projects",
    "commercial construction",
    "Janco homes projects",
    "construction gallery Sri Lanka",
  ],
  openGraph: {
    title: "Our Projects - Construction Portfolio | Janco Home & Construction",
    description:
      "Browse our portfolio of quality construction projects including luxury villas, modern homes, and commercial buildings.",
    url: `${siteConfig.url}/projects`,
    images: [
      {
        url: "/projects/ngo1.jpg",
        width: 1200,
        height: 630,
        alt: "Janco Home Construction Projects",
      },
    ],
  },
  alternates: {
    canonical: `${siteConfig.url}/projects`,
  },
};

export const propertiesMetadata: Metadata = {
  title: "Properties for Sale - Real Estate Listings",
  description:
    "Browse available properties for sale in Sri Lanka by Janco Home & Construction. Quality homes, villas, and residential properties with detailed specifications.",
  keywords: [
    "properties for sale Sri Lanka",
    "houses for sale",
    "real estate Sri Lanka",
    "buy property",
    "residential properties",
    "villas for sale",
    "land with house",
    "property listings Sri Lanka",
  ],
  openGraph: {
    title: "Properties for Sale - Real Estate Listings | Janco Home & Construction",
    description:
      "Find your dream home from our selection of quality properties for sale across Sri Lanka.",
    url: `${siteConfig.url}/properties`,
    images: [
      {
        url: "/real states/property.jpg",
        width: 1200,
        height: 630,
        alt: "Properties for Sale Sri Lanka",
      },
    ],
  },
  alternates: {
    canonical: `${siteConfig.url}/properties`,
  },
};

export const blogsMetadata: Metadata = {
  title: "Construction Blog - Tips & Guides",
  description:
    "Expert construction advice, building tips, cost guides, and industry insights from Janco Home & Construction. Learn about house construction costs, design trends, and more.",
  keywords: [
    "construction blog Sri Lanka",
    "house building tips",
    "construction cost guide",
    "building advice",
    "home construction tips",
    "construction industry news",
    "building cost breakdown",
    "construction planning guide",
  ],
  openGraph: {
    title: "Construction Blog - Tips & Guides | Janco Home & Construction",
    description:
      "Get expert advice on house construction, cost planning, and building tips from experienced contractors.",
    url: `${siteConfig.url}/blogs`,
    images: [
      {
        url: "/blogs/blognew.png",
        width: 1200,
        height: 630,
        alt: "Construction Blog",
      },
    ],
  },
  alternates: {
    canonical: `${siteConfig.url}/blogs`,
  },
};
