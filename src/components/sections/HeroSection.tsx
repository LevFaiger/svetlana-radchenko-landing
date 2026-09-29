/**
 * @fileoverview Hero section component for the landing page
 * @module components/sections/HeroSection
 */

'use client';

import { ReactElement } from 'react';
import Image from 'next/image';
import { ConsultationButton } from '@/components/forms/ConsultationButton';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/hooks/useTranslation';
import { CarotaLine } from '@/components/content/CarotaLine';

export interface HeroSectionProps {
  /** Additional CSS classes */
  className?: string;
}

/**
 * Hero section component for the landing page.
 * 
 * Displays Svetlana's portrait, name, subtitle, and consultation CTA
 * as specified in the PRD. Responsive design with mobile-first approach.
 * 
 * @component
 * @example
 * ```tsx
 * <HeroSection className="custom-hero-styles" />
 * ```
 */
export function HeroSection({ className }: HeroSectionProps): ReactElement {
  const { t, locale } = useTranslation();
  
  return (
    <section className={cn(
      'min-h-[70vh] flex items-center justify-center px-4 py-16 bg-bg-primary',
      className
    )}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text content - Order 2 on mobile, Order 1 on desktop */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary mb-4 leading-tight">
              {t('hero.name')}
            </h1>
            
            <p className="text-xl md:text-2xl text-text-primary mb-6 font-medium">
              {t('hero.roles.expert')}<br />
              {t('hero.roles.teacher')}<br />
              {t('hero.roles.mentor')}
            </p>

            {locale === 'en' && (
              <p className="text-base md:text-lg text-text-primary mb-6 max-w-xl mx-auto lg:mx-0">
                <CarotaLine />
              </p>
            )}
            
            <div className="space-y-4 mb-8">
              <p className="text-base md:text-lg text-text-secondary max-w-xl mx-auto lg:mx-0">
                {t('hero.description')}
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-start">
              <ConsultationButton
                sourcePage="home"
                variant="primary"
                size="lg"
                className="shadow-lg hover:shadow-xl"
              >
                {t('hero.cta')}
              </ConsultationButton>
            </div>
          </div>
          
          {/* Image - Order 1 on mobile, Order 2 on desktop */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/image3.jpeg"
                  alt={t('hero.imageAlt')}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-accent/10 rounded-full -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-primary/10 rounded-full -z-10" />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default HeroSection;