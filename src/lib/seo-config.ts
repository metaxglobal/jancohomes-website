/**
 * SEO Configuration
 * Central place for all SEO-related settings
 */

export const siteConfig = {
  name: 'Janco Home & Construction',
  title: 'Janco Home & Construction | Quality Home Building Services in Sri Lanka',
  description:
    'Professional home construction, renovation, and real estate services in Sri Lanka. ICTAD registered contractors specializing in villa construction, residential buildings, and property development.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://jancohomes.com',
  ogImage: '/og-image.jpg',
  links: {
    facebook: 'https://www.facebook.com/jancohomesconstruction',
    instagram: 'https://www.instagram.com/jancohomes',
    whatsapp: 'https://wa.me/94771287374',
  },
  keywords: [
    'house construction Sri Lanka',
    'home builders Sri Lanka',
    'construction company Colombo',
    'ICTAD registered contractors',
    'residential construction',
    'villa construction Sri Lanka',
    'building contractors Sri Lanka',
    'home renovation Sri Lanka',
    'property development',
    'real estate Sri Lanka',
    'construction services',
    'quality home builders',
    'modern house construction',
    'affordable housing Sri Lanka',
    'luxury villa construction',
  ],
  creator: 'Janco Home & Construction',
  locale: 'en_US',
  type: 'website',
  phoneNumber: '+94771287374',
  email: 'info@jancohomes.com',
  address: {
    street: '',
    city: 'Colombo',
    country: 'Sri Lanka',
    postalCode: '',
  },
  businessHours: 'Monday - Saturday: 8:00 AM - 6:00 PM',
};

export const gtmId = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-5QRKP5FW';
export const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID || '1166358882272505';
export const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '';

/**
 * Generate structured data for organization
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/janco-logo.svg`,
    description: siteConfig.description,
    telephone: siteConfig.phoneNumber,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.address.city,
      addressCountry: siteConfig.address.country,
    },
    sameAs: [
      siteConfig.links.facebook,
      siteConfig.links.instagram,
    ],
  };
}

/**
 * Generate structured data for construction business
 */
export function getConstructionBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': siteConfig.url,
    name: siteConfig.name,
    image: `${siteConfig.url}/janco-logo.svg`,
    description: siteConfig.description,
    telephone: siteConfig.phoneNumber,
    url: siteConfig.url,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.address.city,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '6.9271',
      longitude: '79.8612',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      siteConfig.links.facebook,
      siteConfig.links.instagram,
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Sri Lanka',
    },
    serviceType: [
      'House Construction',
      'Villa Construction',
      'Home Renovation',
      'Property Development',
      'Building Contractors',
      'Residential Construction',
    ],
  };
}

/**
 * Generate structured data for a project
 */
export function getProjectSchema(project: {
  title: string;
  description: string;
  image: string;
  date: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    image: project.image,
    creator: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    datePublished: project.date,
  };
}

/**
 * Generate structured data for a blog article
 */
export function getBlogArticleSchema(article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Organization',
      name: article.author || siteConfig.name,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/janco-logo.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  };
}

/**
 * Generate structured data for breadcrumbs
 */
export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
