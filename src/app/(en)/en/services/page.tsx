/**
 * @fileoverview English Services page - "Services"
 * @module app/(en)/en/services/page
 */

import { ReactElement } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/navigation/Navigation';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  locale: 'en',
  path: '/services/',
  title: 'Services | Svetlana Radchenko',
  description: 'Financial modeling training, financial consulting and CFO services from an expert with 26+ years in finance, 17+ as CFO and board member.',
});

/**
 * English Services page component
 */
export default function EnglishServicesPage(): ReactElement {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="bg-bg-primary">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4 text-center">
              Services
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto text-center">
              Three areas of work for developing your business
            </p>
          </section>

          {/* Services Sections */}
          <div className="space-y-16 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
            
            {/* 1. Training */}
            <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-brand-primary mb-2">
                    1. Training
                  </h2>
                  <p className="text-lg text-brand-primary font-medium">
                    Making complex things understandable
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                {/* Online Course */}
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    Online course &quot;5 Steps to Financial Model&quot;
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Workshop for entrepreneurs, startup founders and managers. We learn to build financial models from scratch — together, understanding the logic and achieving clarity. Step-by-step videos, assignments and methodology that can be applied to any business.
                  </p>
                </div>

                {/* Workshops and Lectures */}
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    Workshops and Lectures
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Live events (online and offline) where we analyze real cases and learn to &quot;see&quot; business in numbers. For accelerators, teams and development programs.
                  </p>
                </div>

                {/* Creating Training Courses */}
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    Creating Training Courses (RU/EN)
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    I develop educational programs for universities, accelerators, entrepreneurship schools — from idea to launch. I have experience preparing courses in Russian and English.
                  </p>
                </div>

                <div className="pt-4">
                  <Link
                    href="/en/training-details"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-brand-primary rounded-lg hover:bg-brand-primary-hover transition-colors duration-200"
                  >
                    More about training
                  </Link>
                </div>
              </div>
            </section>

            {/* 2. Financial Consulting and Mentoring */}
            <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-brand-primary mb-2">
                    2. Financial Consulting and Mentoring
                  </h2>
                  <p className="text-lg text-brand-primary font-medium">
                    I dive into the essence of business and provide support for growth
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                {/* Financial Modeling */}
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    Financial Modeling
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Development from scratch from concept to calculations, scenario analysis, key metrics, identifying growth points. You get a tool that helps make decisions.
                  </p>
                </div>

                {/* Financial Model Audit */}
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    Financial Model Audit
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Checking financial models: logic, calculations, scenarios, recommendations for improvement. You will gain confidence in understanding your business&apos;s financial results.
                  </p>
                </div>

                {/* Business Plan Preparation */}
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    Business Plan Preparation
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Development of a complete business plan for new or existing business in accordance with set goals.
                  </p>
                </div>

                {/* Investment Preparation */}
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    Investment and M&A Preparation
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Help in packaging the project to attract investment: model, pitch, arguments, deal structure. I know what questions you&apos;ll be asked — and how to answer them.
                  </p>
                </div>

                {/* Mentoring */}
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    Mentoring and Strategic Support
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Format of dialogue and joint work. You get feedback, a &quot;clear head&quot; and help in structuring tasks, plans and decisions.
                  </p>
                </div>

                <div className="pt-4">
                  <Link
                    href="/en/consulting-details"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-brand-primary rounded-lg hover:bg-brand-primary-hover transition-colors duration-200"
                  >
                    More about consulting
                  </Link>
                </div>
              </div>
            </section>

            {/* 3. Independent Director / CFO */}
            <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 lg:col-span-2 lg:max-w-3xl lg:mx-auto">
              <div className="mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-brand-primary mb-2">
                    3. Independent Director / Chief Financial Officer
                  </h2>
                  <p className="text-lg text-brand-primary font-medium">
                    CFO as an owner&apos;s partner. I will build the financial architecture of business and help implement effective deals
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                {/* Project CFO */}
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    Project CFO
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    I participate as an outsourced CFO — building management accounting, planning, control, working with metrics. I connect either specifically or for the long term. I help the team see growth points, resources and manageable risks. From numbers — to actions.
                  </p>
                </div>

                {/* Deal Support */}
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    Deal Support
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    We will prepare the project for investment, develop strategy and deal structure. I work in the company&apos;s interests — from idea to deal closure.
                  </p>
                </div>

                {/* Independent Director */}
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    Independent Director, Member of Expert and Advisory Boards
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    I participate in strategic management, providing objective assessment, protecting company interests and supporting key decision-making.
                  </p>
                </div>

                <div className="pt-4">
                  <Link
                    href="/en/cfo-details"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-brand-primary rounded-lg hover:bg-brand-primary-hover transition-colors duration-200"
                  >
                    More about business support
                  </Link>
                </div>
              </div>
            </section>
          </div>

        </div>
      </main>
    </div>
  );
}