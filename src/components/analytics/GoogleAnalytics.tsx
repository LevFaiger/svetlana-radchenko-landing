'use client';

/**
 * @fileoverview Google Analytics 4 loader with SPA route-change page views.
 * @module components/analytics/GoogleAnalytics
 */

import Script from 'next/script';
import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export interface GoogleAnalyticsProps {
  /** GA4 measurement ID, e.g. G-XXXXXXXXXX */
  measurementId: string;
}

/**
 * Loads gtag.js and sends a page_view on client-side navigations.
 * The initial page load is reported by `gtag('config', ...)` itself.
 */
export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps): JSX.Element {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRenderRef = useRef(true);

  useEffect(() => {
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      return;
    }
    if (typeof window === 'undefined' || typeof window.gtag !== 'function' || !pathname) return;

    const queryString = searchParams?.toString();
    const pagePath = queryString && queryString.length > 0 ? `${pathname}?${queryString}` : pathname;

    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: document.title,
      page_location: window.location.href,
    });
  }, [pathname, searchParams]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${measurementId}');`}
      </Script>
    </>
  );
}
