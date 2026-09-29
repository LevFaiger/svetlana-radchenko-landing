/**
 * @fileoverview English About page - "About Me & How I Can Help"
 * @module app/(en)/en/about/page
 */

import { ReactElement } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { Navigation } from '@/components/navigation/Navigation';
import { buildPageMetadata } from '@/lib/seo';
import { ConsultationButton } from '@/components/forms/ConsultationButton';
import { CarotaLine } from '@/components/content/CarotaLine';

export const metadata: Metadata = buildPageMetadata({
  locale: 'en',
  path: '/about/',
  title: 'About Me & How I Can Help | Svetlana Radchenko',
  description: 'Finance practitioner: 26+ years in finance, 17+ as CFO and board member. Former CFO of an LSE/ISE-listed company, PhD in Economics, ACCA, mentor and expert in financial architecture.',
});

/**
 * English About page component
 */
export default function EnglishAboutPage(): ReactElement {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="bg-bg-primary">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4 text-center">
            About Me & How I Can Help
          </h1>
          <p className="text-lg leading-relaxed text-text-primary mb-4">
            <span className="font-bold">Finance practitioner with 26+ years in finance, 17+ as CFO and board member</span>, in financial management and project development, including international and public companies.{' '}
            <CarotaLine />
          </p>
          
          <ul className="space-y-0 text-lg text-text-primary">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
              <span><span className="font-bold">Ex-CFO</span> of Bioprocess Group and Irish public company Ovoca Bio plc</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
              <span><span className="font-bold">PhD in Economics</span>, lecturer, mentor and expert at Towards Change foundation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
              <span>Consultant for accelerators, universities and international programs</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
              <span><span className="font-bold">Moderator and speaker at business events</span>, including business forums: Zarubezhexpo</span>
            </li>
          </ul>
          
          <p className="text-lg leading-relaxed text-text-primary mt-4">
            Former CFO and board member of Ovoca Bio plc, listed on the London and Irish stock exchanges. Led M&amp;A, a re-listing after a fundamental business pivot, and asset sales to international buyers. PhD in Economics, ACCA.
          </p>

          <p className="text-lg leading-relaxed text-text-primary mt-4">
            <span className="font-bold">Supporting venture and technology projects for over 15 years</span> — from launch to scaling.
          </p>
          
          <h2 className="text-2xl font-bold text-brand-primary mb-2 mt-4">
            My Expertise
          </h2>
          
          <ul className="space-y-0 text-lg text-text-primary">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
              <span><span className="font-bold">Building sustainable financial architecture</span> of business</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
              <span><span className="font-bold">Strategic development and planning</span></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
              <span>Mentoring, financial model review, working with investments and deal structure</span>
            </li>
          </ul>
          
          <h2 className="text-2xl font-bold text-brand-primary mb-2 mt-4">
            How I Work
          </h2>
          
          <ul className="space-y-0 text-lg text-text-primary">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
              <span>I get <span className="font-bold">personally involved</span> in projects if it's really necessary</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
              <span>I engage <span className="font-bold">a narrow circle of specialized experts</span> for complex tasks</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
              <span>I possess <span className="font-bold">systematic and integrative thinking</span> — I help look at business differently, highlight opportunities, digitize and strengthen</span>
            </li>
          </ul>
          
          <h2 className="text-2xl font-bold text-brand-primary mb-2 mt-4">
            My Approach
          </h2>
          
          <div className="space-y-0 text-text-primary">
            <p className="text-lg leading-tight">
              <span className="font-bold">A financial model helps see how a business can develop.</span><br />
              It's not just a projection — it's a way to think ahead, see risks and opportunities.
            </p>
            <p className="text-lg leading-tight">
              <span className="font-bold">To understand means to manage.</span>
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-6">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-primary mb-3">
              Ready to discuss your project?
            </h3>
            <p className="text-lg text-text-secondary mb-4">
              Tell me about your business challenges, and I'll help find optimal solutions
            </p>
            <ConsultationButton
              sourcePage="about"
              variant="primary"
              size="lg"
              className="shadow-lg hover:shadow-xl"
            >
              Send Request
            </ConsultationButton>
          </div>
        </section>

        {/* Publications and Additional Information Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-brand-primary mb-2 mt-4 text-center">
            Additional Information, Publications, Useful Materials
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Expert Profiles */}
            <div>
              <h3 className="text-xl font-semibold text-brand-primary mb-4">
                Expert Profiles
              </h3>
              <ul className="space-y-3 text-text-primary">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-lg" style={{color: '#3E5B7A'}}>🏢</span>
                  <span>
                    <a 
                      href="https://skolkovocid.ru/experts/svetlana-radchenko/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-primary hover:underline font-medium"
                    >
                      Skolkovo Independent Directors Club
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-lg" style={{color: '#3E5B7A'}}>🚀</span>
                  <span>
                    <a 
                      href="https://fond-navstrechu.ru/programmy/navstrechu-impakt-investicziyam/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-primary hover:underline font-medium"
                    >
                      Acceleration Program "Towards Impact Investments"
                    </a>, Towards Change Foundation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-lg" style={{color: '#3E5B7A'}}>💼</span>
                  <span>
                    <a 
                      href="https://freedome.pro/partners/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-primary hover:underline font-medium"
                    >
                      Freedom Partners
                    </a>
                  </span>
                </li>
              </ul>
            </div>

            {/* Online Courses */}
            <div>
              <h3 className="text-xl font-semibold text-brand-primary mb-4">
                Online Education
              </h3>
              <ul className="space-y-3 text-text-primary">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-lg" style={{color: '#3E5B7A'}}>📚</span>
                  <span>
                    <a 
                      href="https://stepik.org/193124" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-primary hover:underline font-medium"
                    >
                      Online Course "Five Steps to Financial Model"
                    </a> (Stepik, 2021)
                  </span>
                </li>
              </ul>
            </div>

            {/* Professional Publications */}
            <div>
              <h3 className="text-xl font-semibold text-brand-primary mb-4">
                Professional Publications
              </h3>
              <ul className="space-y-4 text-text-primary">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-lg" style={{color: '#3E5B7A'}}>📄</span>
                  <span>
                    <a 
                      href="https://ao-journal.ru/cfo-kak-partner-soveta-direktorov" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-primary hover:underline font-medium"
                    >
                      CFO as Partner of the Board of Directors
                    </a><br />
                    <span className="text-sm text-text-secondary">Journal "Joint Stock Company: Corporate Governance Issues"</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-lg" style={{color: '#3E5B7A'}}>📄</span>
                  <span>
                    <a 
                      href="https://ao-journal.ru/faktor-g-v-esg-kontseptsii" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-primary hover:underline font-medium"
                    >
                      The G Factor in ESG Concept
                    </a><br />
                    <span className="text-sm text-text-secondary">Journal "Joint Stock Company: Corporate Governance Issues"</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-lg" style={{color: '#3E5B7A'}}>📄</span>
                  <span>
                    <a 
                      href="https://www.b-soc.ru/pppublikacii/nastoyashhee-i-budushhee-korporativnogo-upravleniya/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-primary hover:underline font-medium"
                    >
                      Present and Future of Corporate Governance
                    </a><br />
                    <span className="text-sm text-text-secondary">Journal and Portal "Business and Society", April 28, 2022</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-lg" style={{color: '#3E5B7A'}}>📄</span>
                  <span>
                    <a 
                      href="https://secretmag.ru/opinions/nuzhnye-lyudi-pochemu-v-rossii-tak-malo-nezavisimykh-sovetov-direktorov.htm" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-primary hover:underline font-medium"
                    >
                      "The Right People. Why Russia Has So Few Truly Independent Boards of Directors..."
                    </a><br />
                    <span className="text-sm text-text-secondary">Secretmag, December 30, 2020</span>
                  </span>
                </li>
              </ul>
            </div>

            {/* Industry Case Studies */}
            <div>
              <h3 className="text-xl font-semibold text-brand-primary mb-4">
                Industry Cases and Practical Materials
              </h3>
              <ul className="space-y-4 text-text-primary">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-lg" style={{color: '#3E5B7A'}}>💼</span>
                  <span>
                    <a 
                      href="https://freedome.pro/kak-sostavit-finansovuyu-model-dlya-glempinga/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-primary hover:underline font-medium"
                    >
                      How to Create a Financial Model for Glamping?
                    </a><br />
                    <span className="text-sm text-text-secondary">Practical guide to financial modeling in hospitality</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-lg" style={{color: '#3E5B7A'}}>💼</span>
                  <span>
                    <a 
                      href="https://freedome.pro/kak-privlech-partnerov-i-finansirovanie-v-proekt-vebinar-s-finansovym-direktorom-ch-2/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-primary hover:underline font-medium"
                    >
                      How to Attract Partners and Funding to a Project?
                    </a><br />
                    <span className="text-sm text-text-secondary">Webinar with CFO, Part 2</span>
                  </span>
                </li>
              </ul>
            </div>

            {/* International Events */}
            <div>
              <h3 className="text-xl font-semibold text-brand-primary mb-4">
                International Events and Speaking
              </h3>
              <ul className="space-y-3 text-text-primary">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-lg" style={{color: '#3E5B7A'}}>🌍</span>
                  <span>
                    <a 
                      href="https://expoday.online/page30144905.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-primary hover:underline font-medium"
                    >
                      Round Table "ESG Strategy as Key to Sustainable Business Relations"
                    </a><br />
                    <span className="text-sm text-text-secondary">Zarubezhexpo, Serbia, September 8, 2022</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-brand-primary mb-2 mt-4 text-center">
            Partners and Clients
          </h2>

          {/* Partners Logos */}
          <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:justify-center items-center gap-8 md:gap-4 flex-wrap">
            {[
              { id: 'aircargo', name: 'Air Cargo', image: '/images/air_cargo_color.png', url: 'https://aircargonetwork.com/' },
              { id: 'skolkovo', name: 'Skolkovo', image: '/images/BuySkolkovo.png', url: 'https://skolkovocid.com/about.php' },
              { id: 'buysocial', name: 'Buy Social', image: '/images/buySocial.png', url: 'https://buysocial.ru/' },
              { id: 'freedom', name: 'Freedom', image: '/images/freedome_color.png', url: 'https://freedome.pro/' },
              { id: 'impactive', name: 'Impactive', image: '/images/impactive_color.png', url: 'https://impactive.ru/' },
              { id: 'sprego', name: 'Sprego', image: '/images/Sprego.png', url: 'https://vk.link/sprego' },
              { id: 'navstrechu', name: 'Towards Change', image: '/images/navstrechu.png', url: 'https://fond-navstrechu.ru/?ysclid=mdmsficr6v303586851' },
              { id: 'exporussiaserbia', name: 'ExpoRussiaSerbia', image: '/images/ExpoRussiaSerbia.png', url: 'https://zarubezhexpo.ru/ExpoRussiaSerbia/' },
              { id: 'classkids', name: 'AClassKids', image: '/images/classkids.png', url: 'https://aclasskids.ru/?ysclid=mdmsew56ui616080228' },
              { id: 'exporussia', name: 'Zarubezhexpo', image: '/images/expoRussia.png', url: 'https://zarubezhexpo.ru/' },
              { id: 'partner5', name: 'Partner 5', image: '/images/image9.png' },
            ].map((partner) => {
              const content = (
                <div className="relative aspect-square w-full h-full">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-contain transition-all duration-300"
                    sizes="(max-width: 768px) 128px, 15vw"
                  />
                </div>
              );
              
              if (partner.url) {
                return (
                  <a
                    key={partner.id}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-8 rounded-lg border-2 border-transparent hover:border-brand-primary hover:bg-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 w-48 h-48 md:w-48 md:h-48 block"
                  >
                    {content}
                  </a>
                );
              } else {
                return (
                  <div
                    key={partner.id}
                    className="p-8 rounded-lg border-2 border-transparent w-48 h-48 md:w-48 md:h-48 block"
                  >
                    {content}
                  </div>
                );
              }
            })}
          </div>
          </div>
        </section>

      </div>
      </main>
    </div>
  );
}