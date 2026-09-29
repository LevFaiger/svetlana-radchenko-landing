import { describe, expect, it } from 'vitest';
import { generateMailtoLink, getConsultationMailtoLink } from '../email-tracking';

describe('generateMailtoLink', () => {
  it('percent-encodes spaces instead of using plus signs', () => {
    const link = generateMailtoLink({ to: 'a@b.c', subject: 'Hi there', body: 'Line one' });
    expect(link).toBe('mailto:a@b.c?subject=Hi%20there&body=Line%20one');
    expect(link).not.toContain('+');
  });

  it('omits the query string when nothing is pre-filled', () => {
    expect(generateMailtoLink({ to: 'a@b.c' })).toBe('mailto:a@b.c');
  });
});

describe('getConsultationMailtoLink', () => {
  it('uses the English subject and body on the English site', () => {
    const link = decodeURIComponent(getConsultationMailtoLink('en'));
    expect(link).toContain('subject=Consultation request');
    expect(link).toContain('body=Hello Svetlana, I would like to discuss a consultation. My company / project: ');
    expect(link).not.toMatch(/[а-яА-ЯёЁ]/);
  });

  it('defaults to the Russian text', () => {
    const link = decodeURIComponent(getConsultationMailtoLink());
    expect(link).toContain('subject=Консультация');
  });
});
