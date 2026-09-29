export const dynamic = 'force-static';
import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-config';

/** Pages that exist in both languages (locale-relative paths). */
const PAIRED_ROUTES = [
  '/',
  '/about/',
  '/services/',
  '/cfo-details/',
  '/training-details/',
  '/consulting-details/',
  '/contact/',
];

/** Russian-only pages. */
const RU_ONLY_ROUTES = ['/cfo-service/', '/financial-consulting/', '/training/'];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entry = (path: string, alternates?: Record<string, string>): MetadataRoute.Sitemap[number] => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: path === '/' || path === '/en/' ? 1 : 0.7,
    ...(alternates ? { alternates: { languages: alternates } } : {}),
  });

  const paired = PAIRED_ROUTES.flatMap((path) => {
    const ru = path;
    const en = `/en${path}`;
    const languages = { ru: `${SITE_URL}${ru}`, en: `${SITE_URL}${en}`, 'x-default': `${SITE_URL}${en}` };
    return [entry(ru, languages), entry(en, languages)];
  });

  const ruOnly = RU_ONLY_ROUTES.map((path) => entry(path));

  return [...paired, ...ruOnly];
}
