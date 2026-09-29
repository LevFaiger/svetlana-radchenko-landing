/**
 * @fileoverview Root layout for the English version of the site (/en/*).
 * @module app/(en)/en/layout
 *
 * A separate root layout (route group) so that English pages get
 * <html lang="en">, English metadata, an English footer and skip-link,
 * GA4 instead of Yandex.Metrika, and international contact details.
 */

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactElement, Suspense } from 'react';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import { Footer } from '@/components/layout/Footer';
import { buildPageMetadata, EN_AUTHOR, absoluteUrl } from '@/lib/seo';
import { EN_CONTACTS, GA_MEASUREMENT_ID, GOOGLE_SITE_VERIFICATION, SITE_URL } from '@/lib/site-config';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
});

const EN_HOME_TITLE = 'Svetlana Radchenko — Financial Modeling, Valuation & CFO Advisory';
const EN_HOME_DESCRIPTION =
  'Financial models, company valuation and investor-ready cases for founders. AI-assisted model review. Workshops for entrepreneurs. Former CFO of an LSE/ISE-listed company.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...buildPageMetadata({
    locale: 'en',
    path: '/',
    title: EN_HOME_TITLE,
    description: EN_HOME_DESCRIPTION,
    keywords: [
      'financial modeling',
      'company valuation',
      'CFO advisory',
      'fractional CFO',
      'investor-ready financial model',
      'startup valuation',
      'financial model review',
      'business planning',
      'corporate finance',
      'financial modeling workshop',
    ],
  }),
  publisher: 'FinModelGuru',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  ...(GOOGLE_SITE_VERIFICATION ? { verification: { google: GOOGLE_SITE_VERIFICATION } } : {}),
};

export interface EnglishRootLayoutProps {
  children: React.ReactNode;
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: EN_AUTHOR,
  jobTitle: 'Finance & Strategy Expert, CFO Advisor',
  description: 'Financial modeling, company valuation and CFO advisory for founders and investors.',
  url: absoluteUrl('/en/'),
  image: absoluteUrl('/images/image3.jpeg'),
  email: EN_CONTACTS.email,
  telephone: EN_CONTACTS.whatsappE164,
  sameAs: [EN_CONTACTS.linkedinUrl, EN_CONTACTS.telegramUrl],
  address: {
    '@type': 'PostalAddress',
    addressLocality: EN_CONTACTS.addressLocality,
    addressCountry: EN_CONTACTS.addressCountry,
  },
  knowsAbout: [
    'Financial modeling',
    'Company valuation',
    'Business planning',
    'Investment analysis',
    'CFO advisory',
    'Strategic planning',
  ],
};

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'FinModelGuru — Svetlana Radchenko',
  description: 'Financial modeling, company valuation, investor-ready cases and CFO advisory for founders.',
  url: absoluteUrl('/en/'),
  email: EN_CONTACTS.email,
  telephone: EN_CONTACTS.whatsappE164,
  address: {
    '@type': 'PostalAddress',
    addressLocality: EN_CONTACTS.addressLocality,
    addressCountry: EN_CONTACTS.addressCountry,
  },
  areaServed: 'Worldwide',
  provider: { '@type': 'Person', name: EN_AUTHOR },
  serviceType: 'Financial consulting',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Financial modeling training',
          description: 'Courses and workshops on financial modeling for entrepreneurs and teams',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Financial consulting and mentoring',
          description: 'Financial models, valuation, model review and investor-ready cases',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'CFO advisory',
          description: 'Outsourced CFO, deal support and independent director services',
        },
      },
    ],
  },
};

/**
 * English root layout.
 */
export default function EnglishRootLayout({ children }: EnglishRootLayoutProps): ReactElement {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico?v=2" sizes="32x32" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=2" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2" />
        <link rel="manifest" href="/site.webmanifest?v=2" />
        <meta name="theme-color" content="#A26769" />
        <meta name="msapplication-TileColor" content="#A26769" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-primary text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        {/* Main content */}
        <main id="main-content" className="flex-grow">
          {children}
        </main>

        {/* Google Analytics 4 (English pages only) */}
        {GA_MEASUREMENT_ID && (
          <Suspense fallback={null}>
            <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
          </Suspense>
        )}

        <Footer locale="en" />
      </body>
    </html>
  );
}
