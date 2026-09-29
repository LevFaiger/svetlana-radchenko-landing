/**
 * @fileoverview English Home page component (main landing page)
 * @module app/(en)/en/page
 */

import { ReactElement } from 'react';
import { Navigation } from '@/components/navigation/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';


/**
 * English Home page component (main landing page).
 * 
 * Simple landing page with just navigation and hero section.
 * Metadata (title, description, canonical, hreflang, OG) comes from the EN root layout.
 * 
 * @returns Home page JSX
 */
export default function EnglishHomePage(): ReactElement {
  return (
    <div>
      <Navigation />
      <HeroSection />
    </div>
  );
}