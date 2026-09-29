/**
 * @fileoverview Site-wide constants: URLs, contacts and integration IDs.
 * @module lib/site-config
 *
 * Values that differ per environment are read from NEXT_PUBLIC_* variables at
 * build time (static export), see `.env.example`.
 */

export type Locale = 'ru' | 'en';

/**
 * Canonical origin. The bare domain is canonical: Yandex hosting 301-redirects
 * www.finmodel.guru to finmodel.guru (see docs/yandex-object-storage-deployment.md).
 */
export const SITE_URL = 'https://finmodel.guru';

export const SITE_EMAIL = 'FinModelGuru@gmail.com';

/** Contact block for the English version (international audience). */
export const EN_CONTACTS = {
  email: SITE_EMAIL,
  linkedinUrl: 'https://www.linkedin.com/in/svetlana-radchenko/',
  linkedinLabel: 'LinkedIn',
  whatsappDisplay: '+972 53 390 6927',
  whatsappUrl: 'https://wa.me/972533906927',
  whatsappE164: '+972533906927',
  telegramHandle: '@FinModelGuru',
  telegramUrl: 'https://t.me/FinModelGuru',
  location: 'Based in Haifa, Israel · Working internationally',
  addressLocality: 'Haifa',
  addressCountry: 'IL',
} as const;

/** Contact block for the Russian version (unchanged). */
export const RU_CONTACTS = {
  email: SITE_EMAIL,
  whatsappDisplay: '+7 926 2240270',
  whatsappUrl: 'https://wa.me/79262240270',
  telegramHandle: '@FinModelGuru',
  telegramUrl: 'https://t.me/FinModelGuru',
} as const;

/**
 * Link target for the "Founder of Carota" line on the English pages.
 * If ever emptied, the line falls back to plain text (no broken link).
 */
export const CAROTA_URL = 'https://carota.vc/about';

/** GA4 measurement ID (G-XXXXXXXXXX). English pages only. Empty = disabled. */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? '';

/** Google Search Console verification token. Empty = tag omitted. */
export const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? '';
