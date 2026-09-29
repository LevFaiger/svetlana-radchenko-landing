'use client';

import { usePathname } from 'next/navigation';
import ruTranslations from '../locales/ru.json';
import enTranslations from '../locales/en.json';
import type { Locale } from '@/lib/site-config';

type TranslationKey = string;

const translations = {
  ru: ruTranslations,
  en: enTranslations,
};

export function useTranslation() {
  const pathname = usePathname();
  
  // Extract locale from pathname or default to 'ru'
  const locale: Locale = pathname?.startsWith('/en') ? 'en' : 'ru';

  const t = (key: TranslationKey): string => {
    const keys = key.split('.');
    let value: any = translations[locale as keyof typeof translations];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to Russian if key not found
        value = translations.ru;
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            return key; // Return key if not found
          }
        }
        break;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return { t, locale };
}