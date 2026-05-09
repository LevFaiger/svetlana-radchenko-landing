/**
 * @fileoverview CFO services details page - "Подробнее о поддержке бизнеса"
 * @module app/cfo-details/page
 */

import { ReactElement } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { Navigation } from '@/components/navigation/Navigation';
import { ConsultationButton } from '@/components/forms/ConsultationButton';

export const metadata: Metadata = {
  title: 'Финансовый директор на аутсорсе | Светлана Радченко',
  description: 'CFO на аутсорсе, сопровождение инвестиционных сделок, независимый директор. Управление финансами как партнёрская функция.',
};

/**
 * CFO services details page component
 */
export default function CfoDetailsPage(): ReactElement {
  const services = [
    {
      id: 'cfo-outsource',
      title: 'Финансовый директор на аутсорсе',
      subtitle: 'Создадим систему финансового управления и систему мониторинга финансовых результатов.',
      items: [
        'Построение управленческого учёта и контроля',
        'Финансовое планирование и бюджетирование',
        'Решение текущих финансовых задач',
        'Поиск точек роста, оптимизация затрат и процессов',
        'Разработка стратегический планов компании'
      ],
      result: 'Работаю в партнёрстве с собственником и управленческой командой. Помогаю видеть главное, формулировать цели в цифрах и принимать обоснованные решения. Отличная альтернатива финансисту в штате.'
    },
    {
      id: 'ma-support',
      title: 'Сопровождение инвестиционных сделок / M&A',
      subtitle: 'Ваш представитель и стратегический партнёр в сделке.',
      items: [
        'Формирование структуры сделки и инвестиционного предложения',
        'Подготовка инвестиционного пакета, включая финансовые и стратегические документы',
        'Проведение Due Diligence, грамотное взаимодействие со сторонами сделки',
        'Участие в переговорах и сопровождение сделки до финализации'
      ],
      result: 'Сфокусирована на интересах компании, прозрачности условий и стратегической выгоде собственника.'
    },
    {
      id: 'independent-director',
      title: 'Независимый директор / Член экспертных и консультативных советов',
      subtitle: 'Усиливаю управленческую команду независимым взглядом и опытом, найдем баланс между ростом, рисками и устойчивостью.',
      items: [
        'Оценка рисков, стратегических инициатив и инвестиционных решений',
        'Представление интересов миноритарных акционеров и независимая позиция',
        'Консультативная поддержка собственников и CEO',
        'Работа на пересечении стратегии, устойчивости и развития бизнеса'
      ],
      result: 'Обеспечиваю объективный взгляд и профессиональную независимость. Эффективна в сложных, неоднозначных контекстах.'
    }
  ];

  const pricing = [
    {
      format: 'CFO 5–10 ч/мес',
      suitable: 'Малый бизнес',
      price: 'от 50 000 ₽ / месяц'
    },
    {
      format: 'Сопровождение сделки',
      suitable: 'Стартап (продажа бизнеса, долей), инвесторы (покупка бизнеса, участие в финансировании)',
      price: 'от 15 000 ₽/час + %'
    },
    {
      format: 'Стратегический анализ',
      suitable: 'Компании в росте',
      price: 'Индивидуально'
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF6F5' }}>
      <Navigation />
      
      <main className="max-w-5xl mx-auto px-4 py-16">
        {/* Блок 1: Заголовок */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
            Финансовый директор и сопровождение сделок под ключ
          </h1>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Управление финансами как партнёрская функция. Стратегия, контроль, инвестиции.
          </p>
        </section>

        {/* Блок 2: Изображение + введение */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image on the left */}
              <div className="relative">
                <Image
                  src="/images/image18.jpeg"
                  alt="Финансовый директор на аутсорсе и сопровождение сделок"
                  width={400}
                  height={200}
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </div>
              
              {/* Text on the right */}
              <div className="space-y-6 text-text-primary">
                <p className="text-lg leading-relaxed">
                  <span className="font-bold">Работаю как внешний CFO</span> в проектах, где важно не просто считать — а <span className="font-bold">строить систему и управлять финансами стратегически.</span>
                </p>
                
                <ul className="space-y-3 text-lg ml-4">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
                    <span>Настроим <span className="font-bold">систему планирования и контроля,</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
                    <span>Помогу собственнику <span className="font-bold">минимизировать ручное управление,</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
                    <span>Предложу решения по оптимизации работы компании в соответствии с поставленными целями</span>
                  </li>
                </ul>
                
                <p className="text-lg leading-relaxed">
                  <span className="font-bold">Фокус — на устойчивом росте, прозрачности и управляемости.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Блок 3: Услуги и форматы */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center">
            Услуги и форматы
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

        {/* Блок 4: Форматы и стоимость */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center">
            Форматы
          </h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-bold text-brand-primary">Формат</th>
                  <th className="text-left py-4 px-4 font-bold text-brand-primary">Подходит для</th>
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

        {/* Блок 5: Отзывы / Цитата */}
        <section className="mb-16">
          <div className="bg-brand-primary/5 rounded-2xl p-8 border-l-4 border-brand-primary">
            <blockquote className="text-lg italic text-text-primary mb-4 leading-relaxed">
              «Светлана не просто крутой CFO, она наставник для сотрудников, мы все выросли в профессии 
              за время совместной работы, каждая сделка по покупке компании была бизнес-кейсом, 
              достойным учебника.»
            </blockquote>
            <cite className="text-brand-primary font-medium">
              — Елена, юрисконсульт
            </cite>
          </div>
        </section>

        {/* Блок 6: CTA */}
        <section className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-accent mb-6">
              Вам нужен грамотный CFO?
            </h3>
            
            <ConsultationButton
              sourcePage="cfo-details"
              variant="primary"
              size="lg"
              className="shadow-lg hover:shadow-xl"
            >
              Задать вопрос / Обсудить задачу
            </ConsultationButton>
          </div>
        </section>
      </main>
    </div>
  );
}