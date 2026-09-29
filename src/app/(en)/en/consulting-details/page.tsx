/**
 * @fileoverview English Consulting details page - "More about Consulting"
 * @module app/(en)/en/consulting-details/page
 */

import { ReactElement } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { Navigation } from '@/components/navigation/Navigation';
import { buildPageMetadata } from '@/lib/seo';
import { ConsultationButton } from '@/components/forms/ConsultationButton';

export const metadata: Metadata = buildPageMetadata({
  locale: 'en',
  path: '/consulting-details/',
  title: 'Financial Consulting and Mentoring | Svetlana Radchenko',
  description: 'Helping to see the financial architecture of business, identify growth points. Financial modeling, auditing, mentoring.',
});

/**
 * English Consulting details page component
 */
export default function EnglishConsultingDetailsPage(): ReactElement {
  const services = [
    {
      id: 'modeling',
      title: '1. Financial Modeling',
      items: [
        'Building a model from scratch according to Client\'s request with necessary detail and analytics',
        'Key metrics corresponding to goals, interpretation, identifying growth points, defining opportunities',
        'Scenario analysis and search for effective solutions'
      ],
      result: 'You get a tool that provides the foundation for confident actions'
    },
    {
      id: 'audit',
      title: '2. Financial Model Audit',
      items: [
        'Checking the logic of the financial model and validity of assumptions',
        'Finding weak spots and calculation errors',
        'Conclusion based on financial model evaluation results, recommendations for improvement'
      ],
      result: 'You gain additional confidence in decision-making, before negotiations and attracting investments'
    },
    {
      id: 'planning',
      title: '3. Business Planning',
      items: [
        'Preparation of a complete business plan for the Project',
        'Depending on the Client\'s goal (decision to implement the project, attract funds, determine development strategy) creating an individual business plan structure, more detailed elaboration of separate sections, special additions',
        'Formation of detailed evidence base for assumptions used in creating financial model, development of operational plan'
      ],
      result: 'You get a ready document that can be provided to stakeholders: partners, investors, government structures'
    },
    {
      id: 'investments',
      title: '4. Investment / M&A Preparation',
      items: [
        'Help in packaging the Project: financial model, presentation structure, pitch',
        'Support in negotiations with potential partners',
        'Deal support as a third uninterested party'
      ],
      result: 'You will be ready for any question about the business'
    },
    {
      id: 'mentoring',
      title: '5. Mentoring',
      items: [
        '1:1. Business conversation — and to the point.',
        'We deal with real questions: what you want, how the business works, what doesn\'t work and why. I help achieve clarity, see insights and reference points, define financial goals — personal and strategic, and ways to achieve them.'
      ],
      result: 'Perfect when you need to comprehend business as a whole and choose direction'
    }
  ];

  const processSteps = [
    'You briefly describe your request',
    'We discuss tasks and determine work format, cost and timelines',
    'Even if information is insufficient, we will solve this problem using financial tools and scenario analysis',
    'You get the result: model, plan, confidence + possibility of in-depth support and accompaniment'
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF6F5' }}>
      <Navigation />
      
      <main className="max-w-5xl mx-auto px-4 py-16">
        {/* Block 1: Title + Subtitle */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
            Financial Consulting and Mentoring
          </h1>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Helping to see the financial architecture of business, financial results, identify growth points
          </p>
        </section>

        {/* Block 2: Image + Introduction */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image on the left */}
              <div className="relative">
                <Image
                  src="/images/image17.jpeg"
                  alt="Financial consulting and mentoring"
                  width={400}
                  height={200}
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </div>
              
              {/* Text on the right */}
              <div className="space-y-6 text-text-primary">
                <p className="text-lg leading-relaxed">
                  I work with entrepreneurs who value understanding the financial side of business:
                </p>
                
                <ul className="space-y-3 text-lg ml-4">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
                    <span>see and feel their numbers,</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
                    <span>understand potential,</span>
                  </li>
                </ul>
                
                <p className="text-lg leading-relaxed">
                  to ultimately <span className="font-bold">influence results.</span>
                </p>
                
                <p className="text-lg leading-relaxed">
                  Each request is unique — and so is the solution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Block 3: Work Formats (cards) */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center">
            Work Formats
          </h2>
          
          <div className="space-y-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-brand-primary mb-4">
                    {service.title}
                  </h3>
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

        {/* Block 4: How I Work in Consulting */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center">
            How I Work in Consulting
          </h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto">
                    {index + 1}
                  </div>
                  <p className="text-text-primary leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Block 5: Reviews / Cases */}
        <section className="mb-16">
          <div className="bg-brand-primary/5 rounded-2xl p-8 border-l-4 border-brand-primary">
            <blockquote className="text-lg italic text-text-primary mb-4 leading-relaxed">
              &quot;Svetlana is a mega specialist and loves her work. She helped us understand the business 
              financial model and gave very practical advice! Thank you.&quot;
            </blockquote>
            <cite className="text-brand-primary font-medium">
              — Alexey, founder of glamping construction company
            </cite>
          </div>
        </section>

        {/* Block 6: Call to Action */}
        <section className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-accent mb-4">
              Ready to discuss your project?
            </h3>
            
            
            <ConsultationButton
              sourcePage="consulting-details"
              variant="primary"
              size="lg"
              className="shadow-lg hover:shadow-xl"
            >
              Discuss task / get proposal
            </ConsultationButton>
          </div>
        </section>
      </main>
    </div>
  );
}