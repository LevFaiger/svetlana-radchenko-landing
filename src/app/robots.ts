export const dynamic = 'force-static';
import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-config';

export default function robots(): MetadataRoute.Robots {
  const host = SITE_URL;
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${host}/sitemap.xml`,
    host,
  };
}


