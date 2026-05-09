/**
 * @fileoverview Navigation component for the website
 * @module components/navigation/Navigation
 */

'use client';

import { ReactElement, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/hooks/useTranslation';

/**
 * Navigation component with responsive design and active states
 */
export function Navigation(): ReactElement {
  const pathname = usePathname();
  const { t, locale } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Ensure links work on plain object hosting by pointing to explicit index.html
  const ensureIndexHtml = (path: string): string => {
    if (!path) return '/index.html';
    // If it already points to a file (has an extension), keep as is
    if (/\.[a-zA-Z0-9]+$/.test(path)) return path;
    // Normalize and append index.html
    return path.endsWith('/') ? `${path}index.html` : `${path}/index.html`;
  };

  // For website endpoint we prefer pretty URLs with trailing slash
  const ensureTrailingSlash = (path: string): string => {
    if (!path || path === '/') return '/';
    // If it already points to a file (has an extension), keep as is
    if (/\.[a-zA-Z0-9]+$/.test(path)) return path;
    return path.endsWith('/') ? path : `${path}/`;
  };

  // Detect when we are on the Object Storage HTTPS endpoint
  const isObjectEndpoint =
    typeof window !== 'undefined' &&
    window.location.hostname.endsWith('.storage.yandexcloud.net');

  const getLocalizedHref = (href: string, targetLocale?: string) => {
    const currentLocale = targetLocale || locale;
    const localized = currentLocale === 'ru' ? href : `/${currentLocale}${href}`;
    return isObjectEndpoint ? ensureIndexHtml(localized) : ensureTrailingSlash(localized);
  };

  const navigationItems = [
    { href: '/', label: t('navigation.home') },
    { href: '/about', label: t('navigation.about') },
    { href: '/services', label: t('navigation.services') },
    { href: '/contact', label: t('navigation.contact') },
  ];

  const switchLanguage = (newLocale: string) => {
    // Remove current locale prefix and add new one
    let newPath = pathname;
    if (pathname.startsWith('/en')) {
      newPath = pathname.substring(3) || '/';
    }
    const basePath = isObjectEndpoint ? ensureIndexHtml(newPath) : ensureTrailingSlash(newPath);
    const targetPath = newLocale === 'ru' ? basePath : `/${newLocale}${basePath}`;
    window.location.href = targetPath;
  };

  return (
    <nav className="bg-white shadow-sm px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href={getLocalizedHref('/')} className="text-2xl font-bold text-brand-primary">
          {t('hero.name')}
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={getLocalizedHref(item.href)}
              className={cn(
                'font-medium transition-colors',
                pathname === getLocalizedHref(item.href)
                  ? 'text-brand-primary'
                  : 'text-text-secondary hover:text-brand-primary'
              )}
            >
              {item.label}
            </Link>
          ))}
          
          {/* Language Switcher */}
          <div className="flex items-center gap-2 ml-4 pl-4 border-l border-gray-200">
            <button
              onClick={() => switchLanguage('ru')}
              className={cn(
                'px-2 py-1 text-sm font-medium rounded transition-colors',
                locale === 'ru'
                  ? 'bg-brand-primary text-white'
                  : 'text-text-secondary hover:text-brand-primary hover:bg-gray-100'
              )}
            >
              RU
            </button>
            <button
              onClick={() => switchLanguage('en')}
              className={cn(
                'px-2 py-1 text-sm font-medium rounded transition-colors',
                locale === 'en'
                  ? 'bg-brand-primary text-white'
                  : 'text-text-secondary hover:text-brand-primary hover:bg-gray-100'
              )}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile Language Switcher + Navigation Button */}
        <div className="md:hidden flex items-center gap-3">
          {/* Mobile Language Switcher - Always visible */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => switchLanguage('ru')}
              className={cn(
                'px-2 py-1 text-xs font-medium rounded transition-colors',
                locale === 'ru'
                  ? 'bg-brand-primary text-white'
                  : 'text-text-secondary hover:text-brand-primary hover:bg-gray-100'
              )}
            >
              RU
            </button>
            <button
              onClick={() => switchLanguage('en')}
              className={cn(
                'px-2 py-1 text-xs font-medium rounded transition-colors',
                locale === 'en'
                  ? 'bg-brand-primary text-white'
                  : 'text-text-secondary hover:text-brand-primary hover:bg-gray-100'
              )}
            >
              EN
            </button>
          </div>
          
          {/* Hamburger Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-brand-primary"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={getLocalizedHref(item.href)}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'block px-3 py-2 rounded-md text-base font-medium transition-colors',
                  pathname === getLocalizedHref(item.href)
                    ? 'text-brand-primary bg-brand-primary/5'
                    : 'text-text-secondary hover:text-brand-primary hover:bg-gray-50'
                )}
              >
                {item.label}
              </Link>
            ))}
            
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;