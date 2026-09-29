/**
 * @fileoverview Home page component (main landing page)
 * @module app/(ru)/page
 */

import { ReactElement } from 'react';
import { Navigation } from '@/components/navigation/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';

/**
 * Home page component (main landing page).
 * 
 * Simple landing page with just navigation and hero section.
 * 
 * @returns Home page JSX
 */
export default function HomePage(): ReactElement {
  return (
    <div>
      <Navigation />
      <HeroSection />
    </div>
  );
}