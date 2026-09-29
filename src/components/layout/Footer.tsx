/**
 * @fileoverview Site footer with locale-specific contact block.
 * @module components/layout/Footer
 */

import { ReactElement } from 'react';
import { EN_CONTACTS, RU_CONTACTS, type Locale } from '@/lib/site-config';

export interface FooterProps {
  locale: Locale;
}

const linkClass = 'text-gray-300 hover:text-white transition-colors';

function RussianContacts(): ReactElement {
  return (
    <>
      <div>
        <a href={`mailto:${RU_CONTACTS.email}`} className={linkClass}>
          {RU_CONTACTS.email}
        </a>
      </div>
      <div>
        <span className="text-gray-300">WhatsApp </span>
        <a href={RU_CONTACTS.whatsappUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {RU_CONTACTS.whatsappDisplay}
        </a>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-gray-300">💬</span>
        <a href={RU_CONTACTS.telegramUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {RU_CONTACTS.telegramHandle}
        </a>
      </div>
    </>
  );
}

/** Order per spec: Email → LinkedIn → WhatsApp → (Telegram) → location. */
function EnglishContacts(): ReactElement {
  return (
    <>
      <div>
        <a href={`mailto:${EN_CONTACTS.email}`} className={linkClass}>
          {EN_CONTACTS.email}
        </a>
      </div>
      <div>
        <a href={EN_CONTACTS.linkedinUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {EN_CONTACTS.linkedinLabel}
        </a>
      </div>
      <div>
        <span className="text-gray-300">WhatsApp </span>
        <a href={EN_CONTACTS.whatsappUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {EN_CONTACTS.whatsappDisplay}
        </a>
      </div>
      <div>
        <span className="text-gray-300">Telegram </span>
        <a href={EN_CONTACTS.telegramUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {EN_CONTACTS.telegramHandle}
        </a>
      </div>
      <div className="text-gray-300 md:basis-full">{EN_CONTACTS.location}</div>
    </>
  );
}

/**
 * Footer. The copyright year is computed at build time (static export), so a
 * rebuild is enough to roll it over.
 */
export function Footer({ locale }: FooterProps): ReactElement {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-accent text-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-6 text-center">
          {locale === 'en' ? <EnglishContacts /> : <RussianContacts />}
        </div>

        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400">
          <p>© FinModelGuru {year}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
