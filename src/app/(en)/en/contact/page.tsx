/**
 * @fileoverview English Contact page - "Contact Block"
 * @module app/(en)/en/contact/page
 */

import { ReactElement } from 'react';
import { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';
import { ContactPageContent } from './ContactPageContent';

export const metadata: Metadata = buildPageMetadata({
  locale: 'en',
  path: '/contact/',
  title: 'Contact | Svetlana Radchenko',
  description: 'Ready to discuss your project? Contact me by email, LinkedIn or WhatsApp. Based in Haifa, Israel, working internationally.',
});

/**
 * English Contact page (server wrapper so the page can export metadata).
 */
export default function EnglishContactPage(): ReactElement {
  return <ContactPageContent />;
}
