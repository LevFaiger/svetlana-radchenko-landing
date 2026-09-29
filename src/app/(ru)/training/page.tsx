/**
 * @fileoverview Training page component
 * @module app/(ru)/training/page
 */

import { ReactElement } from 'react';
import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/seo';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/navigation/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ConsultationButton } from '@/components/forms/ConsultationButton';

export const metadata: Metadata = {
  alternates: buildAlternates('ru', '/training/', false),
  title: 'Обучение финансовому моделированию - Светлана Радченко',
  description: 'Курсы и воркшопы по финансовому моделированию. Онлайн-курсы, групповые воркшопы и индивидуальные программы от эксперта.',
  keywords: [
    'обучение финансовому моделированию',
    'курсы финансового планирования',
    'воркшопы по финансам',
    'онлайн-курсы финансы',
    'обучение бизнес-планированию',
  ],
  openGraph: {
    title: 'Обучение финансовому моделированию - Светлана Радченко',
    description: 'Курсы и воркшопы по финансовому моделированию. Онлайн-курсы, групповые воркшопы и индивидуальные программы от эксперта.',
    url: '/training',
    images: ['/images/image7.png'],
  },
};

/**
 * Training page component.
 * 
 * Displays training programs, formats, pricing, and testimonials
 * as specified in the PRD.
 * 
 * @returns Training page JSX
 */
export default function TrainingPage(): ReactElement {
  const formats = [
    {
      id: 'online',
      title: 'Онлайн-курс на Stepik',
      description: 'Самостоятельное изучение в удобном темпе',
      features: [
        'Доступ к записям навсегда',
        'Практические задания',
        'Сертификат о прохождении',
        'Поддержка в чате',
      ],
      price: '2 000 ₽',
      duration: 'В записи',
      link: 'https://stepik.org/course/finmodel',
      linkText: 'Записаться на курс',
    },
    {
      id: 'workshop',
      title: 'Групповой воркшоп',
      description: 'Интерактивное обучение в группе',
      features: [
        'Живое общение с экспертом',
        'Групповые проекты',
        'Разбор реальных кейсов',
        'Нетворкинг с участниками',
      ],
      price: 'от 13 000 ₽/чел',
      duration: '≥ 5 человек',
      link: '/contact',
      linkText: 'Узнать расписание',
    },
    {
      id: 'individual',
      title: 'Индивидуальная программа',
      description: 'Персонализированное обучение',
      features: [
        'Индивидуальный подход',
        'Гибкий график',
        'Фокус на ваших задачах',
        'Менторская поддержка',
      ],
      price: 'от 15 000 ₽/час',
      duration: 'По согласованию',
      link: '/contact',
      linkText: 'Обсудить программу',
    },
  ];

  const testimonials = [
    {
      name: 'Анна Королева',
      role: 'Финансовый аналитик',
      company: 'TechCorp',
      content: 'Курс помог мне систематизировать знания и научиться создавать профессиональные финансовые модели. Теперь я уверенно работаю с прогнозированием и планированием.',
      rating: 5,
    },
    {
      name: 'Михаил Новиков',
      role: 'Предприниматель',
      company: 'StartupLab',
      content: 'Благодаря обучению у Светланы смог создать детальный бизнес-план для привлечения инвестиций. Понятно, структурно и с практическими примерами.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-bg-primary">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary mb-6">
            Обучение
          </h1>
          <p className="text-xl md:text-2xl text-brand-accent mb-8 font-medium">
            Финансы без страха и шаблонов
          </p>
          <div className="max-w-4xl mx-auto">
            <Image
              src="/images/image7.png"
              alt="Обучение финансовому моделированию"
              width={800}
              height={400}
              className="rounded-2xl shadow-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
              Программа обучения
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Комплексная программа для изучения финансового моделирования 
              от основ до продвинутых техник
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Основы моделирования',
                icon: '📊',
                topics: ['Структура модели', 'Основные принципы', 'Лучшие практики'],
              },
              {
                title: 'Финансовые прогнозы',
                icon: '📈',
                topics: ['Прогнозирование доходов', 'Планирование расходов', 'Денежные потоки'],
              },
              {
                title: 'Оценка инвестиций',
                icon: '💰',
                topics: ['NPV и IRR', 'Анализ рисков', 'Сценарное планирование'],
              },
              {
                title: 'Практические кейсы',
                icon: '🎯',
                topics: ['Реальные проекты', 'Отраслевые модели', 'Кейс-стади'],
              },
            ].map((module, index) => (
              <Card key={index} variant="elevated" hover={true}>
                <CardHeader>
                  <div className="text-4xl mb-4 text-center">{module.icon}</div>
                  <CardTitle className="text-xl text-center text-brand-primary">
                    {module.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-2">
                        <span className="text-brand-accent text-sm mt-1">✓</span>
                        <span className="text-text-secondary text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="py-16 px-4 bg-gradient-to-b from-bg-primary to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
              Форматы обучения
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Выберите наиболее подходящий формат обучения
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {formats.map((format) => (
              <Card key={format.id} variant="elevated" hover={true} className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-2xl text-brand-primary mb-2">
                    {format.title}
                  </CardTitle>
                  <p className="text-text-secondary">{format.description}</p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {format.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-brand-accent text-sm mt-1">✓</span>
                          <span className="text-text-secondary text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-primary mb-2">
                      {format.price}
                    </div>
                    <div className="text-text-secondary text-sm mb-4">
                      {format.duration}
                    </div>
                    {format.link.startsWith('http') ? (
                      <a
                        href={format.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full"
                      >
                        <Button variant="primary" size="lg" className="w-full">
                          {format.linkText}
                        </Button>
                      </a>
                    ) : (
                      <Link href={format.link} className="inline-block w-full">
                        <Button variant="primary" size="lg" className="w-full">
                          {format.linkText}
                        </Button>
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
              Отзывы участников
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} variant="elevated" className="bg-gradient-to-br from-bg-primary to-white">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">👤</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-primary">{testimonial.name}</h4>
                      <p className="text-text-secondary text-sm">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <blockquote className="text-text-secondary italic mb-4">
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-brand-accent text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы начать обучение?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Я хочу научиться строить модель
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConsultationButton
              sourcePage="training"
              variant="secondary"
              size="lg"
              className="bg-white text-brand-accent hover:bg-white/90"
            >
              Записаться на консультацию
            </ConsultationButton>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-accent">
                Задать вопрос
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}