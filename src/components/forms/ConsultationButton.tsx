/**
 * @fileoverview Consultation button with email tracking functionality
 * @module components/forms/ConsultationButton
 */

'use client';

import { ReactElement } from 'react';
import { Button } from '@/components/ui/Button';
import { getConsultationMailtoLink, EMAIL_SUBJECTS } from '@/lib/email-tracking';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/hooks/useTranslation';

export interface ConsultationButtonProps {
  /** Source page where the button is displayed */
  sourcePage: string;
  /** Additional CSS classes */
  className?: string;
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  /** Button size */
  size?: 'sm' | 'md' | 'lg';
  /** Custom button text (defaults to the localized hero CTA) */
  children?: React.ReactNode;
  /** Whether to show loading state */
  loading?: boolean;
  /** Whether button is disabled */
  disabled?: boolean;
}

/**
 * Consultation button component with email tracking.
 * 
 * Implements mailto link with pre-filled content as specified in PRD.
 * Tracks email clicks asynchronously without blocking UI.
 * 
 * @component
 * @example
 * ```tsx
 * <ConsultationButton 
 *   sourcePage="home"
 *   variant="primary"
 *   size="lg"
 * />
 * ```
 */
export function ConsultationButton({
  sourcePage,
  className,
  variant = 'primary',
  size = 'md',
  children,
  loading = false,
  disabled = false,
}: ConsultationButtonProps): ReactElement {
  const { t, locale } = useTranslation();

  /**
   * Handle consultation button click
   * Tracks email click with client-side analytics
   */
  const handleClick = () => {
    // Client-side analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'email_click', {
        event_category: 'engagement',
        event_label: `consultation_${sourcePage}`,
        value: 1,
      });
    }
    
    // Console log for basic tracking (can be removed in production)
    console.log('Email tracking:', {
      subject: EMAIL_SUBJECTS.CONSULTATION,
      locale,
      source_page: sourcePage,
      timestamp: new Date().toISOString()
    });
  };

  const mailtoLink = getConsultationMailtoLink(locale);

  return (
    <Button
      href={mailtoLink}
      variant={variant}
      size={size}
      className={cn(
        'transition-all duration-200 hover:scale-105 active:scale-95',
        className
      )}
      onClick={handleClick}
      disabled={disabled}
      loading={loading}
      external={false}
    >
      {children || t('hero.cta')}
    </Button>
  );
}

export default ConsultationButton;