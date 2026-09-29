/**
 * @fileoverview "Founder of Carota" line used on the English home and About pages.
 * @module components/content/CarotaLine
 */

import { ReactElement } from 'react';
import { CAROTA_URL } from '@/lib/site-config';

export interface CarotaLineProps {
  className?: string;
}

/**
 * Renders the Carota line. "Carota" becomes a link once CAROTA_URL is set;
 * until then it is plain text so the page never ships a broken link.
 */
export function CarotaLine({ className }: CarotaLineProps): ReactElement {
  const name = CAROTA_URL ? (
    <a
      href={CAROTA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="text-brand-primary font-semibold underline underline-offset-2 hover:text-brand-primary-hover"
    >
      Carota
    </a>
  ) : (
    <span className="font-semibold">Carota</span>
  );

  return (
    <span className={className}>
      Founder of {name} — evidence-based startup evaluation &amp; portfolio monitoring.
    </span>
  );
}

export default CarotaLine;
