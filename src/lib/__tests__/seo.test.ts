import { describe, expect, it } from 'vitest';
import { buildAlternates, buildPageMetadata, localizedPath } from '../seo';

describe('localizedPath', () => {
  it('prefixes English paths and leaves Russian paths untouched', () => {
    expect(localizedPath('en', '/services/')).toBe('/en/services/');
    expect(localizedPath('ru', '/services/')).toBe('/services/');
    expect(localizedPath('en', '/')).toBe('/en/');
  });
});

describe('buildAlternates', () => {
  it('points canonical to the page itself and x-default to the English page', () => {
    expect(buildAlternates('en', '/services/')).toEqual({
      canonical: '/en/services/',
      languages: { ru: '/services/', en: '/en/services/', 'x-default': '/en/services/' },
    });
    expect(buildAlternates('ru', '/services/')).toEqual({
      canonical: '/services/',
      languages: { ru: '/services/', en: '/en/services/', 'x-default': '/en/services/' },
    });
  });

  it('emits only the own language for pages without a counterpart', () => {
    expect(buildAlternates('ru', '/training/', false)).toEqual({
      canonical: '/training/',
      languages: { ru: '/training/' },
    });
  });
});

describe('buildPageMetadata', () => {
  it('builds English Open Graph and Twitter tags from the page title and description', () => {
    const meta = buildPageMetadata({
      locale: 'en',
      path: '/services/',
      title: 'Services | Svetlana Radchenko',
      description: 'First sentence.',
    });
    expect(meta.title).toBe('Services | Svetlana Radchenko');
    expect(meta.creator).toBe('Svetlana Radchenko');
    expect(meta.openGraph).toMatchObject({
      title: 'Services | Svetlana Radchenko',
      description: 'First sentence.',
      url: '/en/services/',
      siteName: 'Svetlana Radchenko — FinModel.Guru',
      locale: 'en_US',
      alternateLocale: ['ru_RU'],
    });
    expect(meta.twitter).toMatchObject({ title: 'Services | Svetlana Radchenko', description: 'First sentence.' });
    const images = (meta.openGraph as { images: Array<{ alt: string }> }).images;
    expect(images[0]?.alt).toBe('Svetlana Radchenko — finance and strategy expert');
  });

  it('keeps Russian pages on the Russian locale', () => {
    const meta = buildPageMetadata({ locale: 'ru', path: '/about/', title: 'T', description: 'D' });
    expect(meta.openGraph).toMatchObject({ url: '/about/', locale: 'ru_RU' });
    expect(meta.alternates?.canonical).toBe('/about/');
  });
});
