/**
 * @fileoverview Contact page - "Контактный блок"
 * @module app/(ru)/contact/page
 */

import { ReactElement } from 'react';
import { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';
import { ContactPageContent } from './ContactPageContent';

export const metadata: Metadata = buildPageMetadata({
  locale: 'ru',
  path: '/contact/',
  title: 'Контакты | Светлана Радченко',
  description: 'Готовы обсудить ваш проект? Свяжитесь со мной удобным способом.',
});

/**
 * Contact page (server wrapper so the page can export metadata).
 */
export default function ContactPage(): ReactElement {
  return <ContactPageContent />;
}
