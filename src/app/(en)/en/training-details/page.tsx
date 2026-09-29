/**
 * @fileoverview English Training details page - "More about Training"
 * @module app/(en)/en/training-details/page
 */

import { ReactElement } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { Navigation } from '@/components/navigation/Navigation';
import { buildPageMetadata } from '@/lib/seo';
import { ConsultationButton } from '@/components/forms/ConsultationButton';

export const metadata: Metadata = buildPageMetadata({
  locale: 'en',
  path: '/training-details/',
  title: 'Training. Finance without fear and templates | Svetlana Radchenko',
  description: 'Courses and workshops on financial modeling. Making complex things understandable through practice and systematic approach.',
});

/**
 * English Training details page component
 */
export default function EnglishTrainingDetailsPage(): ReactElement {
  const formats = [
    {
      name: 'Online Course',
      url: 'https://stepik.org/193124',
      conditions: 'Pre-recorded',
      price: '2,000 ₽/course'
    },
    {
      name: 'Group Workshop (5 sessions x 1 hour)',
      conditions: 'from 5 people',
      price: 'from 13,000 ₽/participant'
    },
    {
      name: 'Individual Format',
      conditions: 'By agreement',
      price: 'from 15,000 ₽/hour'
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5ECEB' }}>
      <Navigation />
      
      <main className="max-w-5xl mx-auto px-4 py-16">
        {/* Block 1: Title + Subtitle */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
            Training. Finance without fear and templates
          </h1>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Making complex things understandable: through practice, live explanation and systematic approach.
          </p>
        </section>

        {/* Block 2: Introduction with Image */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Image - appears first on mobile, second on desktop */}
              <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                <div className="relative w-full max-w-md">
                  <Image
                    src="/images/image13.jpg"
                    alt="My courses and workshops"
                    width={400}
                    height={200}
                    className="rounded-2xl shadow-lg w-full h-auto"
                  />
                </div>
              </div>

              {/* Text - appears second on mobile, first on desktop */}
              <div className="space-y-6 text-text-primary order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-brand-primary mb-4 lg:hidden">
                  My courses and workshops
                </h3>
                <p className="text-lg leading-relaxed">
                  My courses and workshops are not theory &quot;about numbers&quot;. This is a route that, 
                  after completing, participants will be able to see the business as a whole, 
                  understand how results are interpreted and financial priorities are built.
                </p>
                
                <p className="text-lg leading-relaxed">
                  The goal of the course is to jointly go through the complete algorithm for building 
                  a financial model, learn to build independently for any project, understanding the 
                  logic and internal connections, see key results and be able to use scenario analysis.
                </p>
                
                <p className="text-lg leading-relaxed">
                  The training is suitable for both beginners and experienced teams — when you need 
                  to structure knowledge, build a model or prepare for growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Block 3: Training Formats */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center">
            Training Formats
          </h2>
          
          <div className="space-y-8">
            {/* Online Course */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-brand-primary mb-2">
                  Online Workshop Course &quot;5 Steps to Financial Model&quot; on Stepik.org platform
                </h3>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Image - appears first on mobile, first on desktop */}
                <div className="flex justify-center lg:justify-start order-1 lg:order-1">
                  <div className="relative w-full" style={{ maxWidth: '270px' }}>
                    <Image
                      src="/images/image14.jpg"
                      alt="Video lessons"
                      width={105}
                      height={210}
                      className="rounded-xl shadow-md w-full h-auto"
                    />
                  </div>
                </div>
                
                {/* Text and button - appears second on mobile, second on desktop */}
                <div className="space-y-4 order-2 lg:order-2">
                  <h4 className="text-xl font-bold text-brand-primary mb-3 lg:hidden">
                    Video lessons
                  </h4>
                  <ul className="space-y-2 text-text-primary">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-primary">•</span>
                      Video lessons, quizzes, homework assignments
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-primary">•</span>
                      Step-by-step methodology
                    </li>
                  </ul>
                  
                  <p className="text-text-secondary">
                    You will understand how to properly digitize business or project and develop flexible financial models.
                    You will understand the approach to building a financial model, which will allow you to make calculations for any new idea.
                  </p>
                  
                  <p className="text-brand-primary font-medium">
                    💡 Can be completed at your own pace. Result — your own working model.
                  </p>
                  
                  <a
                    href="https://stepik.org/193124"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-brand-primary rounded-lg hover:bg-brand-primary-hover transition-colors duration-200"
                  >
                    Go to Stepik.org course
                  </a>
                </div>
              </div>
            </div>

            {/* Group Workshop */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-brand-primary mb-2">
                  Group Workshop (online / offline)
                </h3>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Image - appears first on mobile, second on desktop */}
                <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                  <div className="relative w-full max-w-md">
                    <Image
                      src="/images/image15.jpg"
                      alt="Live training"
                      width={400}
                      height={200}
                      className="rounded-xl shadow-md w-full h-auto"
                    />
                  </div>
                </div>

                {/* Text - appears second on mobile, first on desktop */}
                <div className="space-y-4 order-2 lg:order-1">
                  <h4 className="text-xl font-bold text-brand-primary mb-3 lg:hidden">
                    Live training
                  </h4>
                  <ul className="space-y-2 text-text-primary">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-primary">•</span>
                      Live training in small groups
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-primary">•</span>
                      Practice on your own projects
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-primary">•</span>
                      Feedback and support
                    </li>
                  </ul>
                  
                  <p className="text-brand-primary font-medium">
                    💡 Conducted when group is formed. You can leave a request.
                  </p>
                </div>
              </div>
            </div>

            {/* Educational Programs */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-brand-primary mb-2">
                  Educational Programs (RU/EN)
                </h3>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Image - appears first on mobile, first on desktop */}
                <div className="flex justify-center lg:justify-start order-1 lg:order-1">
                  <div className="relative w-full max-w-md">
                    <Image
                      src="/images/image16.jpg"
                      alt="Preparation"
                      width={400}
                      height={200}
                      className="rounded-xl shadow-md w-full h-auto"
                    />
                  </div>
                </div>
                
                {/* Text - appears second on mobile, second on desktop */}
                <div className="space-y-4 order-2 lg:order-2">
                  <h4 className="text-xl font-bold text-brand-primary mb-3 lg:hidden">
                    Preparation
                  </h4>
                  <ul className="space-y-2 text-text-primary">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-primary">•</span>
                      Turnkey course preparation (for accelerators, universities, projects)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-primary">•</span>
                      In Russian and English
                    </li>
                  </ul>
                  
                  <p className="text-brand-primary font-medium">
                    💡 Experience with EMBA, accelerators, impact platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Block 4: Formats and Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center">
            Formats and Pricing
          </h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-bold text-brand-primary">Format</th>
                  <th className="text-left py-4 px-4 font-bold text-brand-primary">Conditions</th>
                  <th className="text-left py-4 px-4 font-bold text-brand-primary">Price</th>
                </tr>
              </thead>
              <tbody>
                {formats.map((format, index) => (
                  <tr key={index} className="border-b border-gray-100 last:border-b-0">
                    <td className="py-4 px-4 text-text-primary">
                      {format.url ? (
                        <a 
                          href={format.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-primary hover:underline"
                        >
                          {format.name}
                        </a>
                      ) : (
                        format.name
                      )}
                    </td>
                    <td className="py-4 px-4 text-text-secondary">{format.conditions}</td>
                    <td className="py-4 px-4 text-brand-primary font-semibold">{format.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Block 5: Quote / Case */}
        <section className="mb-16">
          <div className="bg-brand-primary/5 rounded-2xl p-8 border-l-4 border-brand-primary">
            <blockquote className="text-lg italic text-text-primary mb-4 leading-relaxed">
              &quot;Today I bought your course - Five Steps to Financial Model, on the Stepik platform. 
              Already started learning, completed the first lesson, everything is structured, clear. Thank you for your work!&quot;
            </blockquote>
            <cite className="text-brand-primary font-medium">
              — online workshop course participant
            </cite>
          </div>
        </section>

        {/* Block 6: Call to Action */}
        <section className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-accent mb-6">
              Financial model is a colossal internal resource for business development. 
              Want to learn how to create and use it?
            </h3>
            
            <ConsultationButton
              sourcePage="training-details"
              variant="primary"
              size="lg"
              className="shadow-lg hover:shadow-xl"
            >
              I want to learn to build models
            </ConsultationButton>
          </div>
        </section>
      </main>
    </div>
  );
}