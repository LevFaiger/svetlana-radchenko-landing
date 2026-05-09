/**
 * @fileoverview English CFO services details page - "More about Business Support"
 * @module app/en/cfo-details/page
 */

import { ReactElement } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { Navigation } from '@/components/navigation/Navigation';
import { ConsultationButton } from '@/components/forms/ConsultationButton';

export const metadata: Metadata = {
  title: 'Outsourced CFO | Svetlana Radchenko',
  description: 'Outsourced CFO, investment deal support, independent director. Financial management as a partnership function.',
};

/**
 * English CFO services details page component
 */
export default function EnglishCfoDetailsPage(): ReactElement {
  const services = [
    {
      id: 'cfo-outsource',
      title: 'Outsourced Chief Financial Officer',
      subtitle: 'We will create a financial management system and financial results monitoring system.',
      items: [
        'Building management accounting and control',
        'Financial planning and budgeting',
        'Solving current financial tasks',
        'Finding growth points, optimizing costs and processes',
        'Developing strategic company plans'
      ],
      result: 'I work in partnership with the owner and management team. I help see the main things, formulate goals in numbers and make informed decisions. An excellent alternative to an in-house financial specialist.'
    },
    {
      id: 'ma-support',
      title: 'Investment Deal / M&A Support',
      subtitle: 'Your representative and strategic partner in the deal.',
      items: [
        'Forming deal structure and investment proposal',
        'Preparing investment package, including financial and strategic documents',
        'Conducting Due Diligence, competent interaction with deal parties',
        'Participating in negotiations and deal support until finalization'
      ],
      result: 'Focused on company interests, transparency of conditions and strategic benefit to the owner.'
    },
    {
      id: 'independent-director',
      title: 'Independent Director / Member of Expert and Advisory Boards',
      subtitle: 'I strengthen the management team with independent view and experience, find balance between growth, risks and sustainability.',
      items: [
        'Risk assessment, strategic initiatives and investment decisions evaluation',
        'Representing minority shareholders interests and independent position',
        'Advisory support for owners and CEO',
        'Working at the intersection of strategy, sustainability and business development'
      ],
      result: 'I provide objective view, professional independence and practical experience in making key decisions. Effective in complex, ambiguous contexts.'
    }
  ];

  const pricing = [
    {
      format: 'CFO 5–10 h/month',
      suitable: 'Small business',
      price: 'from 50,000 ₽ / month'
    },
    {
      format: 'Deal support',
      suitable: 'Startup (business/shares sale), investors (business acquisition, financing participation)',
      price: 'from 15,000 ₽/hour + %'
    },
    {
      format: 'Strategic analysis',
      suitable: 'Growing companies',
      price: 'Individual'
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF6F5' }}>
      <Navigation />
      
      <main className="max-w-5xl mx-auto px-4 py-16">
        {/* Block 1: Title */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
            Chief Financial Officer and Turnkey Deal Support
          </h1>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Financial management as a partnership function. Strategy, control, investments.
          </p>
        </section>

        {/* Block 2: Image + Introduction */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image on the left */}
              <div className="relative">
                <Image
                  src="/images/image18.jpeg"
                  alt="Outsourced CFO and deal support"
                  width={400}
                  height={200}
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </div>
              
              {/* Text on the right */}
              <div className="space-y-6 text-text-primary">
                <p className="text-lg leading-relaxed">
                  <span className="font-bold">I work as an external CFO</span> in projects where it's important not just to count — but <span className="font-bold">to build a system and manage finances strategically.</span>
                </p>
                
                <ul className="space-y-3 text-lg ml-4">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
                    <span>Set up <span className="font-bold">planning and control system,</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
                    <span>Help the owner <span className="font-bold">minimize manual management,</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
                    <span>Propose solutions for optimizing company operations in accordance with set goals</span>
                  </li>
                </ul>
                
                <p className="text-lg leading-relaxed">
                  <span className="font-bold">Focus — on sustainable growth, transparency and manageability.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Block 3: Services and Formats */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center">
            Services and Formats
          </h2>
          
          <div className="space-y-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-brand-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-lg text-text-secondary mb-4">
                    {service.subtitle}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <ul className="space-y-3 text-text-primary">
                    {service.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-brand-primary mt-1">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 p-4 bg-brand-primary/5 rounded-lg border-l-4 border-brand-primary">
                    <p className="text-brand-primary font-medium">
                      💡 {service.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Block 4: Formats and Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center">
            Formats
          </h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-bold text-brand-primary">Format</th>
                  <th className="text-left py-4 px-4 font-bold text-brand-primary">Suitable for</th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 last:border-b-0">
                    <td className="py-4 px-4 text-text-primary font-medium">
                      {item.format}
                    </td>
                    <td className="py-4 px-4 text-text-secondary">
                      {item.suitable}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Block 5: Reviews / Quote */}
        <section className="mb-16">
          <div className="bg-brand-primary/5 rounded-2xl p-8 border-l-4 border-brand-primary">
            <blockquote className="text-lg italic text-text-primary mb-4 leading-relaxed">
              &quot;Svetlana is not just a great CFO, she is a mentor for employees, we all grew professionally 
              during our collaboration, each company acquisition deal was a business case worthy of a textbook.&quot;
            </blockquote>
            <cite className="text-brand-primary font-medium">
              — Elena, legal counsel
            </cite>
          </div>
        </section>

        {/* Block 6: CTA */}
        <section className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-accent mb-6">
              Do you need a competent CFO?
            </h3>
            
            <ConsultationButton
              sourcePage="cfo-details"
              variant="primary"
              size="lg"
              className="shadow-lg hover:shadow-xl"
            >
              Ask a question / Discuss task
            </ConsultationButton>
          </div>
        </section>
      </main>
    </div>
  );
}