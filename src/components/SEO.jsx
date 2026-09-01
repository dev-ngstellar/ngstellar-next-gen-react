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
  serviceData = null,
  faqs = null,
  localBusinessData = null
}) {
  const fullTitle = title
    ? `${title} | NG Stellar — Digital Transformation & Technology Implementation Partner`
    : 'NG Stellar — Digital Transformation & Technology Implementation Partner';

  const defaultDescription =
    'NG Stellar is your digital transformation and technology implementation partner for growing businesses and MSMEs. Evaluate. Digitize. Systemize. Scale. Transform the business. Sustain the impact.';
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
            name: 'NG Stellar Solutions',
            url: SITE_URL
          },
          description: metaDescription,
          serviceType: serviceData.serviceType || 'Digital Transformation & Technology Implementation',
          areaServed: serviceData.areaServed || 'Worldwide'
        }
      : null;

  // Schema: FAQPage
  const faqSchema =
    faqs && Array.isArray(faqs) && faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.a
            }
          }))
        }
      : null;

  // Schema: LocalBusiness
  const localBusinessSchema =
    localBusinessData
      ? {
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: `NG Stellar Solutions — ${localBusinessData.city}`,
          legalName: 'TrueConnect Strategic Services Private Limited',
          url: currentCanonical,
          telephone: localBusinessData.phone || '+91-9790652929',
          email: localBusinessData.email || 'contact@ngstellar.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: localBusinessData.streetAddress || '151/18, D R Avenue 1, Netaji Nagar, Moolapalayam',
            addressLocality: localBusinessData.city,
            addressRegion: localBusinessData.state || 'Tamil Nadu',
            postalCode: localBusinessData.postalCode || '638002',
            addressCountry: 'IN'
          },
          areaServed: localBusinessData.city,
          description: metaDescription
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
      {faqSchema && (
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      )}
      {localBusinessSchema && (
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      )}
    </Helmet>
  );
}

export default memo(SEO);
