/**
 * @fileoverview Per-page metadata builder: self-canonical, hreflang, Open Graph.
 * @module lib/seo
 */

import type { Metadata } from 'next';
import { SITE_URL, type Locale } from './site-config';

export const EN_SITE_NAME = 'Svetlana Radchenko — FinModel.Guru';
export const EN_OG_IMAGE_ALT = 'Svetlana Radchenko — finance and strategy expert';
export const EN_AUTHOR = 'Svetlana Radchenko';

const RU_SITE_NAME = 'Светлана Радченко - Финансовый консультант';
const RU_OG_IMAGE_ALT = 'Светлана Радченко - Эксперт в сфере финансов и стратегии';
const RU_AUTHOR = 'Светлана Радченко';

const OG_IMAGE: Record<Locale, { url: string; width: number; height: number; alt: string }> = {
  ru: { url: '/images/image12.png', width: 1200, height: 630, alt: RU_OG_IMAGE_ALT },
  en: { url: '/images/og-image-en.jpg', width: 800, height: 800, alt: EN_OG_IMAGE_ALT },
};

export interface PageSeo {
  locale: Locale;
  /** Locale-relative path with trailing slash: '/' for home, '/services/' etc. */
  path: string;
  title: string;
  description: string;
  /** Set to false for pages that exist only in one language. */
  hasCounterpart?: boolean;
  keywords?: string[];
}

/** '/services/' + 'en' -> '/en/services/'; RU paths are unprefixed. */
export function localizedPath(locale: Locale, path: string): string {
  return locale === 'en' ? `/en${path}` : path;
}

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

/**
 * Canonical (self) + hreflang links. x-default points to the English page,
 * as required by the EN-version spec.
 */
export function buildAlternates(locale: Locale, path: string, hasCounterpart = true): Metadata['alternates'] {
  const ru = localizedPath('ru', path);
  const en = localizedPath('en', path);
  const self = localizedPath(locale, path);

  if (!hasCounterpart) {
    return { canonical: self, languages: { [locale]: self } };
  }

  return {
    canonical: self,
    languages: { ru, en, 'x-default': en },
  };
}

/** Full metadata for a page: title, description, canonical, hreflang, OG and Twitter. */
export function buildPageMetadata(seo: PageSeo): Metadata {
  const { locale, path, title, description, hasCounterpart = true, keywords } = seo;
  const self = localizedPath(locale, path);
  const image = OG_IMAGE[locale];
  const author = locale === 'en' ? EN_AUTHOR : RU_AUTHOR;

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    authors: [{ name: author, url: 'mailto:finmodelguru@gmail.com' }],
    creator: author,
    alternates: buildAlternates(locale, path, hasCounterpart),
    openGraph: {
      title,
      description,
      url: self,
      siteName: locale === 'en' ? EN_SITE_NAME : RU_SITE_NAME,
      locale: locale === 'en' ? 'en_US' : 'ru_RU',
      alternateLocale: locale === 'en' ? ['ru_RU'] : ['en_US'],
      type: 'website',
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image.url],
    },
  };
}
