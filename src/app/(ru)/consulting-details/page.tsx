/**
 * @fileoverview Consulting details page - "Подробнее о консалтинге"
 * @module app/(ru)/consulting-details/page
 */

import { ReactElement } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { Navigation } from '@/components/navigation/Navigation';
import { buildPageMetadata } from '@/lib/seo';
import { ConsultationButton } from '@/components/forms/ConsultationButton';

export const metadata: Metadata = buildPageMetadata({
  locale: 'ru',
  path: '/consulting-details/',
  title: 'Финансовый консалтинг и менторство | Светлана Радченко',
  description: 'Помогаю увидеть финансовую архитектуру бизнеса, определить точки роста. Финансовое моделирование, аудит, менторство.',
});

/**
 * Consulting details page component
 */
export default function ConsultingDetailsPage(): ReactElement {
  const services = [
    {
      id: 'modeling',
      title: '1. Финансовое моделирование',
      items: [
        'Построение модели с нуля под запрос Клиента с необходимой детализацией и аналитикой',
        'Ключевые метрики, соответствующие целям, интерпретация, выявление точек роста, определение возможностей',
        'Сценарный анализ и поиск эффективных решений'
      ],
      result: 'Вы получаете инструмент, который дает основу для уверенных действий'
    },
    {
      id: 'audit',
      title: '2. Аудит финансовой модели',
      items: [
        'Проверка логики финансовой модели и обоснованности допущений',
        'Поиск слабых мест и расчетных ошибок',
        'Заключение по результатам оценки финансовой модели, рекомендации по улучшению'
      ],
      result: 'Вы получаете дополнительную уверенность при принятии решений, перед переговорами и привлечением инвестиций'
    },
    {
      id: 'planning',
      title: '3. Бизнес-планирование',
      items: [
        'Подготовка полноценного бизнес-плана Проекта',
        'В зависимости от цели Клиента (принятие решения о реализации проекта, привлечение средств, определение стратегии развития) создание индивидуальной структуры бизнес-плана, более детальная проработка отдельных разделов, специальные дополнения',
        'Формирование подробной доказательной базы под допущения, используемые при создании финансовой модели, разработка операционного плана'
      ],
      result: 'Вы получаете готовый документ, который можно предоставить стейкхолдерам: партнёрам, инвесторам, государственным структурам'
    },
    {
      id: 'investments',
      title: '4. Подготовка к инвестициям / M&A',
      items: [
        'Помощь в упаковке Проекта: финансовая модель, структура презентации, питч',
        'Поддержка на переговорах с потенциальными партнерами',
        'Сопровождение сделки в качестве третьей незаинтересованной стороны'
      ],
      result: 'Вы будете готовы к любому вопросу о бизнесе'
    },
    {
      id: 'mentoring',
      title: '5. Менторинг',
      items: [
        '1:1. Разговор по делу — и по сути.',
        'Мы разбираемся с настоящими вопросами: чего вы хотите, как работает бизнес, что не работает и почему. Помогаю достичь ясности, увидеть инсайты и опорные точки, определить финансовые цели — личные и стратегические, и пути их достижения.'
      ],
      result: 'Идеально, когда нужно осмыслить бизнес в целом и выбрать вектор'
    }
  ];

  const processSteps = [
    'Вы кратко описываете свой запрос',
    'Мы обсуждаем задачи и определяем формат работы, стоимость и сроки',
    'Даже если информации недостаточно, мы решим эту проблему, используя финансовый инструментарий и сценарный анализ',
    'Вы получаете результат: модель, план, уверенность + возможность углублённой поддержки и сопровождения'
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF6F5' }}>
      <Navigation />
      
      <main className="max-w-5xl mx-auto px-4 py-16">
        {/* Блок 1: Заголовок + подзаголовок */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
            Финансовый консалтинг и менторство
          </h1>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Помогаю увидеть финансовую архитектуру бизнеса, финансовые результаты, определить точки роста
          </p>
        </section>

        {/* Блок 2: Изображение + введение */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image on the left */}
              <div className="relative">
                <Image
                  src="/images/image17.jpeg"
                  alt="Финансовый консалтинг и менторство"
                  width={400}
                  height={200}
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </div>
              
              {/* Text on the right */}
              <div className="space-y-6 text-text-primary">
                <p className="text-lg leading-relaxed">
                  Работаю с предпринимателями, которым важно разобраться с финансовой стороной бизнеса:
                </p>
                
                <ul className="space-y-3 text-lg ml-4">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
                    <span>увидеть и почувствовать свои цифры,</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
                    <span>понять потенциал,</span>
                  </li>
                </ul>
                
                <p className="text-lg leading-relaxed">
                  чтобы в итоге <span className="font-bold">влиять на результат.</span>
                </p>
                
                <p className="text-lg leading-relaxed">
                  Каждый запрос уникален — и решение тоже.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Блок 3: Форматы работы (карточки) */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center">
            Форматы работы
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

        {/* Блок 4: Как я работаю в консалтинге */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center">
            Как я работаю в консалтинге
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

        {/* Блок 5: Отзывы / кейсы */}
        <section className="mb-16">
          <div className="bg-brand-primary/5 rounded-2xl p-8 border-l-4 border-brand-primary">
            <blockquote className="text-lg italic text-text-primary mb-4 leading-relaxed">
              «Светлана - мега специалист и любит свое дело. Помогла нам разобраться с финансовой моделью 
              бизнеса и дала очень дельные советы! Благодарим».
            </blockquote>
            <cite className="text-brand-primary font-medium">
              — Алексей, основатель компании по производству конструкций для глэмпингов
            </cite>
          </div>
        </section>

        {/* Блок 6: Призыв к действию */}
        <section className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-accent mb-4">
              Готовы обсудить ваш проект?
            </h3>
            
            
            <ConsultationButton
              sourcePage="consulting-details"
              variant="primary"
              size="lg"
              className="shadow-lg hover:shadow-xl"
            >
              Обсудить задачу / получить предложение
            </ConsultationButton>
          </div>
        </section>
      </main>
    </div>
  );
}