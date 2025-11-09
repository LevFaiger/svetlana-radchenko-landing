export const dynamic = 'force-static';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.finmodel.guru';
  const now = new Date();

  // Known routes (RU)
  const ruRoutes = [
    '/',
    '/about/',
    '/services/',
    '/cfo-service/',
    '/cfo-details/',
    '/financial-consulting/',
    '/consulting-details/',
    '/training/',
    '/training-details/',
    '/contact/',
  ];

  // Known routes (EN)
  const enRoutes = [
    '/en/',
    '/en/about/',
    '/en/services/',
    '/en/cfo-details/',
    '/en/training-details/',
    '/en/consulting-details/',
    // add more EN routes here as they are added to the site
  ];

  const routes = [...ruRoutes, ...enRoutes];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: path === '/' || path === '/en/' ? 1 : 0.7,
  }));
}


