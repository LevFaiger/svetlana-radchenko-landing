/**
 * @fileoverview Services page - "Услуги"
 * @module app/(ru)/services/page
 */

import { ReactElement } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/navigation/Navigation';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  locale: 'ru',
  path: '/services/',
  title: 'Услуги | Светлана Радченко',
  description: 'Обучение финансовому моделированию, финансовый консалтинг и CFO-сервисы от эксперта с 26+ лет опыта.',
});

/**
 * Services page component
 */
export default function ServicesPage(): ReactElement {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="bg-bg-primary">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
              Услуги
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Три направления работы для развития вашего бизнеса
            </p>
          </section>

          {/* Services Sections */}
          <div className="space-y-16 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
            
            {/* 1. Обучение */}
            <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-brand-primary mb-2">
                    1. Обучение
                  </h2>
                  <p className="text-lg text-brand-primary font-medium">
                    Делаю сложное понятным
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                {/* Онлайн-курс */}
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    Онлайн-курс «5 шагов к финансовой модели»
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Практикум для предпринимателей, стартаперов и менеджеров. Учимся строить финансовую модель с нуля — вместе, понимая логику и добиваясь ясности. Пошаговые видео, задания и методика, которую можно применять к любому бизнесу.
                  </p>
                </div>

                {/* Воркшопы и лекции */}
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    Воркшопы и лекции
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Живые мероприятия (онлайн и офлайн), где мы разбираем реальные кейсы и учимся «видеть» бизнес в цифрах. Для акселераторов, команд и программ развития.
                  </p>
                </div>

                {/* Создание обучающих курсов */}
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    Создание обучающих курсов (RU/EN)
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Разрабатываю образовательные программы для вузов, акселераторов, школ предпринимательства — от идеи до запуска. Есть опыт подготовки курсов на русском и английском языке.
                  </p>
                </div>

                <div className="pt-4">
                  <Link
                    href="/training-details"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-brand-primary rounded-lg hover:bg-brand-primary-hover transition-colors duration-200"
                  >
                    Подробнее об обучении
                  </Link>
                </div>
              </div>
            </section>

            {/* 2. Финансовый консалтинг и менторство */}
            <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-brand-primary mb-2">
                    2. Финансовый консалтинг и менторство
                  </h2>
                  <p className="text-lg text-brand-primary font-medium">
                    Погружаюсь в суть бизнеса и даю опору для роста
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                {/* Финансовое моделирование */}
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    Финансовое моделирование
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Разработка с нуля от концепции до расчётов, сценарный анализ, ключевые метрики, выявление точек роста. Вы получаете инструмент, который помогает принимать решения.
                  </p>
                </div>

                {/* Аудит финансовой модели */}
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    Аудит финансовой модели
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Проверка финансовых моделей: логика, расчёты, сценарии, рекомендации по доработке. Вы добавите себе уверенности в понимании финансовых результатов вашего бизнеса.
                  </p>
                </div>

                {/* Подготовка бизнес-плана */}
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    Подготовка бизнес-плана
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Разработка полного бизнес-плана нового или существующего бизнеса в соответствии с поставленными целями.
                  </p>
                </div>

                {/* Подготовка к инвестициям */}
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    Подготовка к инвестициям и сделкам M&A
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Помощь в упаковке проекта для привлечения инвестиций: модель, питч, аргументы, структура сделки. Знаю, какие вопросы вам зададут — и как на них ответить.
                  </p>
                </div>

                {/* Менторинг */}
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    Менторинг и стратегическая поддержка
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Формат диалога и совместной работы. Вы получаете обратную связь, «чистую голову» и помощь в структурировании задач, планов и решений.
                  </p>
                </div>

                <div className="pt-4">
                  <Link
                    href="/consulting-details"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-brand-primary rounded-lg hover:bg-brand-primary-hover transition-colors duration-200"
                  >
                    Подробнее о консалтинге
                  </Link>
                </div>
              </div>
            </section>

            {/* 3. Независимый директор / Финансовый директор */}
            <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 lg:col-span-2 lg:max-w-3xl lg:mx-auto">
              <div className="mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-brand-primary mb-2">
                    3. Независимый директор / Финансовый директор
                  </h2>
                  <p className="text-lg text-brand-primary font-medium">
                    Финансовый директор как партнер собственника. Выстрою финансовую архитектуру бизнеса и помогу в реализации эффективных сделок
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                {/* Финансовый директор на проект */}
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    Финансовый директор на проект
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Участвую как CFO на аутсорсинге — выстраиваю управленческий учёт, планирование, контроль, работу с метриками. Подключаюсь точечно или на долгий срок. Помогаю команде увидеть точки роста, ресурсы и управляемые риски. От цифр — к действиям.
                  </p>
                </div>

                {/* Сопровождение сделок */}
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    Сопровождение сделок
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Подготовим проект к инвестициям, разработаем стратегию и структуру сделки. Работаю в интересах компании — от идеи до закрытия сделки.
                  </p>
                </div>

                {/* Независимый директор */}
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    Независимый директор, член экспертных и консультативных советов
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Участвую в стратегическом управлении, обеспечивая объективную оценку, защиту интересов компании и поддержку в принятии ключевых решений.
                  </p>
                </div>

                <div className="pt-4">
                  <Link
                    href="/cfo-details"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-brand-primary rounded-lg hover:bg-brand-primary-hover transition-colors duration-200"
                  >
                    Подробнее о поддержке бизнеса
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