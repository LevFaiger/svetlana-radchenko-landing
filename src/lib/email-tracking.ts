/**
 * @fileoverview Email tracking utility functions
 * @module lib/email-tracking
 */

import { emailTrackingRequestSchema, type EmailTrackingRequest } from './schemas';
import type { Locale } from './site-config';

/**
 * Generate mailto link with pre-filled content
 * 
 * @param options - Mailto link options
 * @returns Formatted mailto URL
 * 
 * @example
 * ```typescript
 * const mailtoUrl = generateMailtoLink({
 *   to: 'finmodelguru@gmail.com',
 *   subject: 'Консультация',
 *   body: 'Здравствуйте, я хочу записаться на консультацию.'
 * });
 * ```
 */
export function generateMailtoLink(options: {
  to: string;
  subject?: string;
  body?: string;
  cc?: string;
  bcc?: string;
}): string {
  // encodeURIComponent (not URLSearchParams) so spaces become %20, which every
  // mail client decodes; '+' is shown literally by many clients.
  const params: string[] = [];

  if (options.subject) {
    params.push(`subject=${encodeURIComponent(options.subject)}`);
  }

  if (options.body) {
    params.push(`body=${encodeURIComponent(options.body)}`);
  }

  if (options.cc) {
    params.push(`cc=${encodeURIComponent(options.cc)}`);
  }

  if (options.bcc) {
    params.push(`bcc=${encodeURIComponent(options.bcc)}`);
  }

  const queryString = params.join('&');
  return `mailto:${options.to}${queryString ? `?${queryString}` : ''}`;
}

/**
 * Pre-filled consultation email per locale.
 */
export const CONSULTATION_EMAIL: Record<Locale, { subject: string; body: string }> = {
  ru: {
    subject: 'Консультация',
    body: 'Здравствуйте, я хочу записаться на консультацию.',
  },
  en: {
    subject: 'Consultation request',
    body: 'Hello Svetlana, I would like to discuss a consultation. My company / project: ',
  },
};

/**
 * Get consultation mailto link (as per PRD requirements)
 *
 * @param locale - Site locale; selects the subject/body language
 * @returns Formatted mailto URL for consultation
 */
export function getConsultationMailtoLink(locale: Locale = 'ru'): string {
  const { subject, body } = CONSULTATION_EMAIL[locale];
  return generateMailtoLink({
    to: 'finmodelguru@gmail.com',
    subject,
    body,
  });
}


/**
 * Validate email tracking request
 * 
 * @param request - Raw request data
 * @returns Validated request or null if invalid
 */
export function validateEmailTrackingRequest(request: unknown): EmailTrackingRequest | null {
  try {
    return emailTrackingRequestSchema.parse(request);
  } catch {
    return null;
  }
}

/**
 * Common email subjects used in the application
 */
export const EMAIL_SUBJECTS = {
  CONSULTATION: 'Консультация',
  TRAINING: 'Обучение',
  CONSULTING: 'Финансовый консалтинг',
  CFO_SERVICE: 'CFO сервис',
  GENERAL_INQUIRY: 'Общий запрос',
} as const;

/**
 * Common source pages used in the application
 */
export const SOURCE_PAGES = {
  HOME: 'home',
  TRAINING: 'training',
  CONSULTING: 'financial-consulting',
  CFO: 'cfo-service',
  CONTACT: 'contact',
} as const;