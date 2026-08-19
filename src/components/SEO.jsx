import { memo } from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://ngstellar.com';
const DEFAULT_IMAGE = 'https://ngstellar.com/og-image.png';

function SEO({
  title,
  description,
  canonicalUrl,
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  breadcrumbs = [],
  schemaType = null,
  serviceData = null
}) {
  const fullTitle = title
    ? (title.includes('NG Stellar') ? title : `${title} | NG Stellar`)
    : 'NG Stellar | Transformation & Sustainability Advisory';

  const defaultDescription =
    'NG Stellar is a premier transformation and sustainability advisory firm. Transform the business. Sustain the impact across business, people, processes, technology, and digital growth.';
  const metaDescription = description || defaultDescription;

  const currentCanonical = canonicalUrl
    ? `${SITE_URL}${canonicalUrl.startsWith('/') ? canonicalUrl : `/${canonicalUrl}`}`
    : SITE_URL;

  // Schema: Organization
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NG Stellar Solutions',
    legalName: 'TrueConnect Strategic Services Private Limited',
    url: SITE_URL,
    logo: `${SITE_URL}/NG%20Stellar.png`,
    description: defaultDescription,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '151/18, D R Avenue 1, Netaji Nagar, Moolapalayam',
      addressLocality: 'Erode',
      addressRegion: 'Tamil Nadu',
      postalCode: '638002',
      addressCountry: 'IN'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9790652929',
      contactType: 'customer support',
      email: 'contact@ngstellar.com'
    }
  };

  // Schema: BreadcrumbList
  const breadcrumbSchema =
    breadcrumbs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs.map((b, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: b.name,
            item: b.url ? `${SITE_URL}${b.url.startsWith('/') ? b.url : `/${b.url}`}` : currentCanonical
          }))
        }
      : null;

  // Schema: Service
  const serviceSchema =
    schemaType === 'Service' && serviceData
      ? {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: serviceData.name || title,
          provider: {
            '@type': 'Organization',
            name: 'NG Stellar Solutions'
          },
          description: metaDescription,
          serviceType: serviceData.serviceType || 'Advisory & Consulting',
          areaServed: 'Worldwide'
        }
      : null;

  return (
    <Helmet>
      {/* Primary Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={currentCanonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="NG Stellar Solutions" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Schemas */}
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}
      {serviceSchema && (
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      )}
    </Helmet>
  );
}

export default memo(SEO);
