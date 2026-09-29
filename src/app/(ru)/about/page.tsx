/**
 * @fileoverview About page - "Кто я и чем могу быть полезна"
 * @module app/(ru)/about/page
 */

import { ReactElement } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { Navigation } from '@/components/navigation/Navigation';
import { buildPageMetadata } from '@/lib/seo';
import { ConsultationButton } from '@/components/forms/ConsultationButton';

export const metadata: Metadata = buildPageMetadata({
  locale: 'ru',
  path: '/about/',
  title: 'Кто я и чем могу быть полезна | Светлана Радченко',
  description: 'Финансист-практик с 26+ лет опыта. Ex-CFO, к.э.н., ментор и эксперт по финансовой архитектуре бизнеса.',
});

/**
 * About page component
 */
export default function AboutPage(): ReactElement {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="bg-bg-primary">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4 text-center">
            Кто я и чем могу быть полезна
          </h1>
          <p className="text-lg leading-relaxed text-text-primary mb-4">
            <span className="font-bold">Финансист-практик с 26+ летним опытом</span> в управлении финансами и развитием проектов, в том числе в международных и публичных компаниях.
          </p>
          
          <ul className="space-y-0 text-lg text-text-primary">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
              <span><span className="font-bold">Ex-CFO</span> группы компаний «Биопроцесс» и публичной ирландской компании «Ovoca Bio plc»</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
              <span><span className="font-bold">Кандидат экономических наук</span>, преподаватель, ментор и эксперт фонда «Навстречу переменам»</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
              <span>Консультант акселераторов, вузов и международных программ</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
              <span><span className="font-bold">Модератор и спикер деловых мероприятий</span>, включая бизнес-форумы: Зарубежэкспо</span>
            </li>
          </ul>
          
          <p className="text-lg leading-relaxed text-text-primary mt-4">
            <span className="font-bold">Сопровождаю венчурные и технологические проекты более 15 лет</span> — от запуска до масштабирования.
          </p>
          
          <h2 className="text-2xl font-bold text-brand-primary mb-2 mt-4">
            Моя экспертиза
          </h2>
          
          <ul className="space-y-0 text-lg text-text-primary">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
              <span><span className="font-bold">Построение устойчивой финансовой архитектуры</span> бизнеса</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
              <span><span className="font-bold">Стратегическое развитие и планирование</span></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
              <span>Менторинг, проверка фин.модели, работа с инвестициями и структурой сделок</span>
            </li>
          </ul>
          
          <h2 className="text-2xl font-bold text-brand-primary mb-2 mt-4">
            Как я работаю
          </h2>
          
          <ul className="space-y-0 text-lg text-text-primary">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
              <span>Включаюсь в проект <span className="font-bold">лично</span>, если это действительно необходимо</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
              <span>Подключаю <span className="font-bold">узкий круг профильных экспертов</span> под многоплановые задачи</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
              <span>Обладаю <span className="font-bold">системным и интегративным мышлением</span> — помогаю взглянуть на бизнес иначе, подсветить возможности, оцифровать и усилить</span>
            </li>
          </ul>
          
          <h2 className="text-2xl font-bold text-brand-primary mb-2 mt-4">
            Мой подход
          </h2>
          
          <div className="space-y-0 text-text-primary">
            <p className="text-lg leading-tight">
              <span className="font-bold">Финансовая модель помогает увидеть, как может развиваться бизнес.</span><br />
              Это не просто проекция — это способ подумать вперёд, увидеть риски и возможности.
            </p>
            <p className="text-lg leading-tight">
              <span className="font-bold">Понять — значит управлять.</span>
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-6">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-primary mb-3">
              Готовы обсудить ваш проект?
            </h3>
            <p className="text-lg text-text-secondary mb-4">
              Расскажите о задачах вашего бизнеса, и я помогу найти оптимальные решения
            </p>
            <ConsultationButton
              sourcePage="about"
              variant="primary"
              size="lg"
              className="shadow-lg hover:shadow-xl"
            >
              Направить запрос
            </ConsultationButton>
          </div>
        </section>

        {/* Publications and Additional Information Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-brand-primary mb-2 mt-4 text-center">
            Дополнительная информация, публикации, полезные материалы
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Expert Profiles */}
            <div>
              <h3 className="text-xl font-semibold text-brand-primary mb-4">
                Экспертные профили
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
                      Клуб независимых директоров Сколково
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
                      Акселерационная программа «Навстречу импакт-инвестициям»
                    </a>, фонд Навстречу Переменам
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
                      Партнеры Freedom
                    </a>
                  </span>
                </li>
              </ul>
            </div>

            {/* Online Courses */}
            <div>
              <h3 className="text-xl font-semibold text-brand-primary mb-4">
                Онлайн-образование
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
                      Онлайн-курс «Пять шагов к финансовой модели»
                    </a> (Stepik, 2021)
                  </span>
                </li>
              </ul>
            </div>

            {/* Professional Publications */}
            <div>
              <h3 className="text-xl font-semibold text-brand-primary mb-4">
                Публикации в профессиональных изданиях
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
                      CFO как партнер совета директоров
                    </a><br />
                    <span className="text-sm text-text-secondary">Журнал «Акционерное общество: вопросы корпоративного управления»</span>
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
                      Фактор G в ESG-концепции
                    </a><br />
                    <span className="text-sm text-text-secondary">Журнал «Акционерное общество: вопросы корпоративного управления»</span>
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
                      Настоящее и будущее корпоративного управления
                    </a><br />
                    <span className="text-sm text-text-secondary">Журнал и портал «Бизнес и Общество», 28.04.2022</span>
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
                      «Нужные люди. Почему в России так мало действительно независимых советов директоров…»
                    </a><br />
                    <span className="text-sm text-text-secondary">Secretmag, 30.12.2020</span>
                  </span>
                </li>
              </ul>
            </div>

            {/* Industry Case Studies */}
            <div>
              <h3 className="text-xl font-semibold text-brand-primary mb-4">
                Отраслевые кейсы и практические материалы
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
                      Как составить финансовую модель для глэмпинга?
                    </a><br />
                    <span className="text-sm text-text-secondary">Практическое руководство по финансовому моделированию в сфере гостеприимства</span>
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
                      Как привлечь партнёров и финансирование в проект?
                    </a><br />
                    <span className="text-sm text-text-secondary">Вебинар с финансовым директором, часть 2</span>
                  </span>
                </li>
              </ul>
            </div>

            {/* International Events */}
            <div>
              <h3 className="text-xl font-semibold text-brand-primary mb-4">
                Международные мероприятия и выступления
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
                      Круглый стол «ESG-стратегия как ключ к формированию устойчивых деловых отношений»
                    </a><br />
                    <span className="text-sm text-text-secondary">Зарубеж-Экспо, Сербия, 8.09.2022</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-brand-primary mb-2 mt-4 text-center">
            Партнеры и клиенты
          </h2>

          {/* Partners Logos */}
          <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:justify-center items-center gap-8 md:gap-4 flex-wrap">
            {[
              { id: 'aircargo', name: 'Air Cargo', image: '/images/air_cargo_color.png', url: 'https://aircargonetwork.com/' },
              { id: 'skolkovo', name: 'Сколково', image: '/images/BuySkolkovo.png', url: 'https://skolkovocid.com/about.php' },
              { id: 'buysocial', name: 'Buy Social', image: '/images/buySocial.png', url: 'https://buysocial.ru/' },
              { id: 'freedom', name: 'Freedom', image: '/images/freedome_color.png', url: 'https://freedome.pro/' },
              { id: 'impactive', name: 'Impactive', image: '/images/impactive_color.png', url: 'https://impactive.ru/' },
              { id: 'sprego', name: 'Sprego', image: '/images/Sprego.png', url: 'https://vk.link/sprego' },
              { id: 'navstrechu', name: 'Навстречу переменам', image: '/images/navstrechu.png', url: 'https://fond-navstrechu.ru/?ysclid=mdmsficr6v303586851' },
              { id: 'exporussiaserbia', name: 'ExpoRussiaSerbia', image: '/images/ExpoRussiaSerbia.png', url: 'https://zarubezhexpo.ru/ExpoRussiaSerbia/' },
              { id: 'classkids', name: 'AClassKids', image: '/images/classkids.png', url: 'https://aclasskids.ru/?ysclid=mdmsew56ui616080228' },
              { id: 'exporussia', name: 'Зарубежэкспо', image: '/images/expoRussia.png', url: 'https://zarubezhexpo.ru/' },
              { id: 'partner5', name: 'Партнер 5', image: '/images/image9.png' },
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