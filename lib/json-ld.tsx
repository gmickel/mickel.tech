const BASE_URL = 'https://mickel.tech';

/** Escape < to prevent </script> XSS injection */
export function safeJsonLd(obj: Record<string, unknown>): string {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD requires innerHTML, XSS prevented by safeJsonLd
      dangerouslySetInnerHTML={{ __html: safeJsonLd(data) }}
      type="application/ld+json"
    />
  );
}

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Gordon Mickel',
    url: BASE_URL,
    sameAs: [
      'https://github.com/gmickel',
      'https://twitter.com/gmickel',
      'https://linkedin.com/in/gmickel',
    ],
    jobTitle: 'Software Engineer',
  };
}

export function articleSchema(post: {
  title: string;
  summary?: string;
  publishedAt: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.summary ?? '',
    datePublished: post.publishedAt,
    author: { '@type': 'Person', name: 'Gordon Mickel' },
    publisher: { '@type': 'Person', name: 'Gordon Mickel' },
    url: `${BASE_URL}/log/${post.slug}`,
  };
}

export function softwareAppSchema(app: {
  name: string;
  description: string;
  slug: string;
  category: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: app.name,
    description: app.description,
    url: `${BASE_URL}/apps/${app.slug}`,
    applicationCategory: app.category,
    author: { '@type': 'Person', name: 'Gordon Mickel' },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  // Include Home as first item
  const allItems = [{ name: 'Home', url: BASE_URL }, ...items];

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url.startsWith('http')
        ? item.url
        : `${BASE_URL}${item.url.startsWith('/') ? '' : '/'}${item.url}`,
    })),
  };
}
