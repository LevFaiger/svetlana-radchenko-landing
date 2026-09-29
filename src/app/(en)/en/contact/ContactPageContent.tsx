/**
 * @fileoverview English Contact page content (client component)
 * @module app/(en)/en/contact/ContactPageContent
 */

'use client';

import { ReactElement, useState } from 'react';
import Image from 'next/image';
import { Navigation } from '@/components/navigation/Navigation';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { EN_CONTACTS } from '@/lib/site-config';

/**
 * English Contact page component
 */
export function ContactPageContent(): ReactElement {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Reset any previous states
      setShowError(false);
      setShowSuccess(false);

      // Client-side analytics tracking
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'form_submit', {
          event_category: 'engagement',
          event_label: 'contact_en',
          value: 1,
        });
      }

      // Console log for tracking
      console.log('Form submission:', {
        subject: 'General Inquiry',
        source_page: 'contact_en',
        timestamp: new Date().toISOString()
      });

      // Form data logged for analytics
      console.log('Form data ready:', {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        source: 'contact_en',
        timestamp: new Date().toISOString()
      });

      // Reset form and show success message
      setFormData({ name: '', email: '', message: '' });
      setShowSuccess(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
      
    } catch (error) {
      console.error('Error:', error);
      setShowError(true);
      setShowSuccess(false);
      
      // Hide error message after 5 seconds
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: EN_CONTACTS.linkedinUrl,
      icon: '/images/linkedin-qr-en.png'
    },
    {
      id: 'telegram',
      name: 'Telegram',
      url: 'https://t.me/FinModelGuru',
      icon: '/images/image11.png'
    },
    {
      id: 'email',
      name: 'Email',
      url: 'mailto:finmodelguru@gmail.com',
      icon: '/images/image12.png'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Main contact section with light background */}
      <main className="min-h-screen" style={{ backgroundColor: '#FAF6F5' }}>
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
              Contact Block
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Ready to discuss your project? Contact me in a convenient way
            </p>
          </section>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-sm" style={{ display: 'none' }}>
              <h2 className="text-2xl font-bold text-brand-primary mb-6">
                Submit a Request
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white border-gray-300 text-text-primary placeholder-gray-500 focus:border-brand-primary focus:ring-brand-primary"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white border-gray-300 text-text-primary placeholder-gray-500 focus:border-brand-primary focus:ring-brand-primary"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                    Request *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-white border-gray-300 text-text-primary placeholder-gray-500 focus:border-brand-primary focus:ring-brand-primary resize-none"
                    placeholder="Describe your request or task"
                  />
                </div>

                {showSuccess && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-green-800">
                          Request submitted! We will contact you shortly.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {showError && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-red-800">
                          Error opening email client. Please try again.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  loading={isSubmitting}
                  className="w-full bg-brand-primary text-white hover:bg-brand-primary-hover font-semibold py-3"
                  size="lg"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Request'}
                </Button>
              </form>
            </div>

            {/* QR Codes */}
            <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
              <h3 className="text-2xl font-bold text-brand-primary mb-6">
                QR codes for quick access
              </h3>
              
              <div className="grid grid-cols-1 gap-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-200 group"
                  >
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <Image
                        src={social.icon}
                        alt={`${social.name} QR Code`}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    <div>
                      <div className="text-text-primary font-semibold text-lg">
                        {social.name}
                      </div>
                      <div className="text-text-secondary text-sm">
                        Scan QR code
                      </div>
                      <div className="text-text-secondary text-xs mt-1">
                        {social.url.replace('https://', '').replace('mailto:', '')}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Direct Contact */}
            <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
              <h3 className="text-2xl font-bold text-brand-primary mb-6">
                Direct Contact
              </h3>
              
              <div className="space-y-4 text-text-secondary">
                <div>
                  <div className="font-semibold text-text-primary">Email</div>
                  <a
                    href={`mailto:${EN_CONTACTS.email}`}
                    className="hover:text-brand-primary transition-colors"
                  >
                    {EN_CONTACTS.email}
                  </a>
                </div>

                <div>
                  <div className="font-semibold text-text-primary">LinkedIn</div>
                  <a
                    href={EN_CONTACTS.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-primary transition-colors"
                  >
                    {EN_CONTACTS.linkedinUrl.replace('https://', '')}
                  </a>
                </div>

                <div>
                  <div className="font-semibold text-text-primary">WhatsApp</div>
                  <a
                    href={EN_CONTACTS.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-primary transition-colors"
                  >
                    {EN_CONTACTS.whatsappDisplay}
                  </a>
                </div>

                <div>
                  <div className="font-semibold text-text-primary">Telegram</div>
                  <a
                    href={EN_CONTACTS.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-primary transition-colors"
                  >
                    {EN_CONTACTS.telegramHandle}
                  </a>
                </div>

                <div className="pt-2 text-text-primary">{EN_CONTACTS.location}</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <section className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-sm max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-brand-primary mb-4">
                Let&apos;s work together
              </h3>
              <p className="text-text-secondary text-lg">
                Tell me about your task, and we will find the optimal solution. 
                The first consultation will help understand how I can benefit your business.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}