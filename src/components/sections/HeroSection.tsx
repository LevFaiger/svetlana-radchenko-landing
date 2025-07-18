/**
 * @fileoverview Hero section component for the landing page
 * @module components/sections/HeroSection
 */

import { ReactElement } from 'react';
import Image from 'next/image';
import { ConsultationButton } from '@/components/forms/ConsultationButton';
import { cn } from '@/lib/utils';

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
  return (
    <section className={cn(
      'min-h-screen flex items-center justify-center px-4 py-16 bg-bg-primary',
      className
    )}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text content - Order 2 on mobile, Order 1 on desktop */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary mb-4 leading-tight">
              Светлана Радченко
            </h1>
            
            <p className="text-xl md:text-2xl text-text-primary mb-6 font-medium">
              Эксперт в сфере финансов и стратегии
            </p>
            
            <div className="space-y-4 mb-8">
              <p className="text-base md:text-lg text-text-secondary max-w-xl mx-auto lg:mx-0">
                Профессиональные консультации по финансовому моделированию, 
                бизнес-планированию и стратегическому развитию бизнеса.
              </p>
              
              <p className="text-base md:text-lg text-text-secondary max-w-xl mx-auto lg:mx-0">
                Помогаю компаниям принимать обоснованные финансовые решения 
                и достигать устойчивого роста.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <ConsultationButton
                sourcePage="home"
                variant="primary"
                size="lg"
                className="shadow-lg hover:shadow-xl"
              />
              
              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-brand-primary border-2 border-brand-primary rounded-lg hover:bg-brand-primary hover:text-white transition-colors duration-200"
              >
                Узнать больше
              </a>
            </div>
          </div>
          
          {/* Image - Order 1 on mobile, Order 2 on desktop */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/image12.png"
                  alt="Светлана Радченко - Эксперт в сфере финансов и стратегии"
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
        
        {/* Scroll indicator */}
        <div className="hidden lg:flex justify-center mt-16">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-brand-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;