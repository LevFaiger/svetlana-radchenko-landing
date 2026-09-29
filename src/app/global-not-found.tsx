/**
 * @fileoverview Global 404 page (Next.js `global-not-found`). With multiple
 * root layouts (route groups) there is no shared root layout, so this file
 * renders its own <html> and <body>. Enabled via `experimental.globalNotFound`.
 * @module app/global-not-found
 */

import { ReactElement } from 'react';
import Link from 'next/link';
import '@/styles/globals.css';

export default function GlobalNotFound(): ReactElement {
  return (
    <html lang="en">
      <head>
        <title>Page not found | FinModel.Guru</title>
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico?v=2" sizes="32x32" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=2" />
      </head>
      <body className="antialiased min-h-screen flex items-center justify-center bg-bg-primary px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-brand-primary mb-4">404</h1>
          <p className="text-lg text-text-secondary mb-2">Page not found.</p>
          <p className="text-lg text-text-secondary mb-6">Страница не найдена.</p>
          <div className="flex justify-center gap-6">
            <Link href="/en/" className="text-brand-primary font-medium hover:underline">English home</Link>
            <Link href="/" className="text-brand-primary font-medium hover:underline">Главная</Link>
          </div>
        </div>
      </body>
    </html>
  );
}
