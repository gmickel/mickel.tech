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
    '@id': `${BASE_URL}#person`,
    name: 'Gordon Mickel',
    givenName: 'Gordon',
    familyName: 'Mickel',
    url: BASE_URL,
    image: `${BASE_URL}/portraits/gordon-mickel.jpg`,
    sameAs: [
      'https://github.com/gmickel',
      'https://x.com/gmickel',
      'https://linkedin.com/in/gmickel',
      'https://itdr.ch/en/experts/expert-details/36/gordon-mickel.html',
    ],
    jobTitle: 'Operating Principal, AI & Technology',
    worksFor: {
      '@type': 'Organization',
      name: 'Growth Factors',
      url: 'https://growthfactorsglobal.com',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Binningen',
      addressCountry: 'CH',
    },
    knowsLanguage: ['en', 'de'],
    knowsAbout: [
      'Agentic PDLC',
      'AI-native Software Development',
      'Enterprise RAG',
      'Private LLM Infrastructure',
      'AI Agents',
      'Parteigutachten',
      'Werkvertrags-Gutachten',
      'AI Due Diligence',
      'Software Acceptance Disputes',
      'Court-Engaged Expert Opinion',
    ],
    memberOf: [
      {
        '@type': 'Organization',
        name: 'ITDR: Institution for IT and Data Dispute Resolution',
        url: 'https://itdr.ch',
      },
      {
        '@type': 'Organization',
        name: 'OpenAI Red Team Network (alumnus)',
        url: 'https://openai.com',
      },
    ],
  };
}

export function professionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${BASE_URL}#practice`,
    name: 'Mickel Tech: Independent Practice',
    url: BASE_URL,
    image: `${BASE_URL}/portraits/gordon-mickel.jpg`,
    description:
      'Independent practice of Gordon Mickel for select mandates: agentic PDLC, production AI systems, and party-engaged technical opinion (Parteigutachten / Werkvertrags-Gutachten / AI tech due diligence).',
    provider: {
      '@id': `${BASE_URL}#person`,
    },
    areaServed: [
      { '@type': 'Country', name: 'Switzerland' },
      { '@type': 'Country', name: 'Germany' },
      { '@type': 'Country', name: 'Austria' },
      { '@type': 'Place', name: 'Europe' },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Binningen',
      addressCountry: 'CH',
    },
    availableLanguage: ['en', 'de'],
    priceRange: 'CHF 15,000 - CHF 150,000+',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Practice areas',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Agentic PDLC',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Strategy Session',
                description:
                  '1-day focused working session on a specific question: agentic PDLC introduction, vendor selection, architecture review. Written notes and recommendation. Fee creditable to follow-on engagement.',
              },
              priceSpecification: {
                '@type': 'PriceSpecification',
                minPrice: '3000',
                maxPrice: '5000',
                priceCurrency: 'CHF',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Agentic PDLC Diagnostic',
                description:
                  '2-week assessment: L0-L4 maturity scoring, 5-pillar audit, opportunity map, 90-day roadmap.',
              },
              priceSpecification: {
                '@type': 'PriceSpecification',
                price: '15000',
                priceCurrency: 'CHF',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Foundation Sprint',
                description:
                  '6-8 weeks: tooling rollout, training, 1-2 quick wins, KPI baseline.',
              },
              priceSpecification: {
                '@type': 'PriceSpecification',
                price: '40000',
                priceCurrency: 'CHF',
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Independent expert work',
          itemListElement: [
            {
              '@type': 'Service',
              name: 'Parteigutachten',
              description:
                'Party expert opinion (Parteigutachter) for counsel in litigation and arbitration.',
            },
            {
              '@type': 'Service',
              name: 'Werkvertrags-Gutachten',
              description:
                'Contractually named acceptance expert (Werkvertrags-Gutachter / Abnahmegutachter) in software procurement contracts.',
            },
            {
              '@type': 'Service',
              name: 'AI / Technology Due Diligence',
              description:
                'Independent AI and technology due diligence for investors, boards and M&A.',
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'AI systems & transformation',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Strategy Session',
                description:
                  '1-day focused working session on a specific AI question: vendor selection, build-vs-buy, architecture review. Written notes and recommendation. Fee creditable to follow-on engagement.',
              },
              priceSpecification: {
                '@type': 'PriceSpecification',
                minPrice: '3000',
                maxPrice: '5000',
                priceCurrency: 'CHF',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Process Map + AI Opportunity Audit',
                description:
                  '2-3 weeks: map workflows, score automation candidates, prioritised initiatives with ROI estimates.',
              },
              priceSpecification: {
                '@type': 'PriceSpecification',
                price: '15000',
                priceCurrency: 'CHF',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'AI System Build',
                description:
                  'Production deployment: enterprise RAG, agents, voice bots, knowledge platforms.',
              },
              priceSpecification: {
                '@type': 'PriceSpecification',
                price: '40000',
                priceCurrency: 'CHF',
              },
            },
          ],
        },
      ],
    },
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url.startsWith('http')
      ? service.url
      : `${BASE_URL}${service.url}`,
    provider: {
      '@type': 'Person',
      name: 'Gordon Mickel',
      url: BASE_URL,
    },
    areaServed: { '@type': 'Place', name: 'Europe' },
  };
}

export function articleSchema(post: {
  title: string;
  summary?: string;
  publishedAt: string;
  updatedAt?: string;
  slug: string;
  /** Optional cover image URL (absolute or /relative). */
  image?: string;
  /** Optional comma-separated tags. */
  tags?: readonly string[];
}) {
  const canonical = `${BASE_URL}/log/${post.slug}`;
  // Next.js opengraph-image.tsx generates the OG image at
  // /log/{slug}/opengraph-image. Use that as a sensible default.
  const ogImageUrl = `${BASE_URL}/log/${post.slug}/opengraph-image`;
  const resolveImage = (img?: string) => {
    if (!img) {
      return ogImageUrl;
    }
    if (img.startsWith('http')) {
      return img;
    }
    return `${BASE_URL}${img}`;
  };
  const imageUrl = resolveImage(post.image);
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.summary ?? '',
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      '@type': 'Person',
      '@id': `${BASE_URL}#person`,
      name: 'Gordon Mickel',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Person',
      '@id': `${BASE_URL}#person`,
      name: 'Gordon Mickel',
      url: BASE_URL,
    },
    url: canonical,
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    image: imageUrl,
    ...(post.tags?.length ? { keywords: post.tags.join(', ') } : {}),
    inLanguage: 'en',
  };
}

export function softwareAppSchema(app: {
  name: string;
  description: string;
  slug: string;
  category: string;
  version?: string;
  operatingSystem?: string;
  programmingLanguage?: string;
  /**
   * Pricing. Omit for commercial apps without a public price; set
   * { price: '0', currency: 'USD' } for free / open-source. Setting
   * `commercial: true` tags the app as "commercial" without an offer.
   */
  offer?: { price: string; currency: string } | 'commercial' | 'free';
}) {
  const offerBlock = (() => {
    if (app.offer === 'commercial' || app.offer === undefined) {
      return {};
    }
    if (app.offer === 'free') {
      return {
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      };
    }
    return {
      offers: {
        '@type': 'Offer',
        price: app.offer.price,
        priceCurrency: app.offer.currency,
      },
    };
  })();

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: app.name,
    description: app.description,
    url: `${BASE_URL}/apps/${app.slug}`,
    applicationCategory: app.category,
    ...(app.version && { softwareVersion: app.version }),
    ...(app.operatingSystem && { operatingSystem: app.operatingSystem }),
    ...(app.programmingLanguage && {
      programmingLanguage: app.programmingLanguage,
    }),
    author: {
      '@type': 'Person',
      '@id': `${BASE_URL}#person`,
      name: 'Gordon Mickel',
    },
    ...offerBlock,
  };
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Blog / CollectionPage schema for /log and /log/tag/[tag].
 * Declares the page as a blog listing and links to recent posts.
 */
export function blogSchema(posts: {
  url: string;
  name: string;
  description?: string;
  items: Array<{ slug: string; title: string; publishedAt: string }>;
}) {
  const pageUrl = posts.url.startsWith('http')
    ? posts.url
    : `${BASE_URL}${posts.url}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': pageUrl,
    name: posts.name,
    ...(posts.description && { description: posts.description }),
    url: pageUrl,
    author: {
      '@type': 'Person',
      '@id': `${BASE_URL}#person`,
      name: 'Gordon Mickel',
    },
    publisher: {
      '@type': 'Person',
      '@id': `${BASE_URL}#person`,
      name: 'Gordon Mickel',
    },
    inLanguage: 'en',
    blogPost: posts.items.map((item) => ({
      '@type': 'BlogPosting',
      headline: item.title,
      url: `${BASE_URL}/log/${item.slug}`,
      datePublished: item.publishedAt,
    })),
  };
}

/**
 * ItemList schema. Generic list container for archive/index pages
 * (/apps, /case-studies). Each item has position + name + url.
 */
export function itemListSchema(list: {
  name: string;
  url: string;
  items: Array<{ name: string; url: string; description?: string }>;
}) {
  const pageUrl = list.url.startsWith('http')
    ? list.url
    : `${BASE_URL}${list.url}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: list.name,
    url: pageUrl,
    itemListElement: list.items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
      ...(item.description && { description: item.description }),
    })),
  };
}

/**
 * Case study schema. Uses Schema.org Article with `about` pointing to
 * the client entity; includes result metric as `abstract`. Google
 * indexes this as an Article rich result.
 */
export function caseStudySchema(study: {
  id: string;
  title: string;
  client: string;
  problem: string;
  outcome: string;
  url: string;
  publishedAt?: string;
  locale: 'en' | 'de';
}) {
  const canonical = study.url.startsWith('http')
    ? study.url
    : `${BASE_URL}${study.url}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': canonical,
    headline: study.title,
    description: study.outcome,
    abstract: study.problem,
    url: canonical,
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    about: {
      '@type': 'Organization',
      name: study.client,
    },
    author: {
      '@type': 'Person',
      '@id': `${BASE_URL}#person`,
      name: 'Gordon Mickel',
    },
    publisher: {
      '@type': 'Person',
      '@id': `${BASE_URL}#person`,
      name: 'Gordon Mickel',
    },
    inLanguage: study.locale,
    ...(study.publishedAt && { datePublished: study.publishedAt }),
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
