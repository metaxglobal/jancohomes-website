import { getOrganizationSchema, getConstructionBusinessSchema } from '@/lib/seo-config';

export default function StructuredData() {
  const organizationSchema = getOrganizationSchema();
  const businessSchema = getConstructionBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
    </>
  );
}
