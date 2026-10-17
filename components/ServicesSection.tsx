"use client";

import { ArrowUpRight } from "lucide-react";

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const services = [
    {
      num: "01",
      title: "Изготовление крепежа",
      subtitle: "Собственное производство",
      desc: "Изготовление нестандартных метизов, анкерных болтов, резьбовых шпилек и закладных деталей по вашим чертежам и эскизам с паспортом изделия.",
      tags: ["По чертежам", "ГОСТ / DIN", "Паспорт изделия"],
      svgBg: (
        <svg
          className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
          viewBox="0 0 770 768"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M503.878 348.121C480.308 324.551 442.001 324.636 418.318 348.319C394.635 372.002 394.55 410.309 418.12 433.879C441.69 457.449 479.997 457.364 503.68 433.681C527.363 409.998 527.448 371.691 503.878 348.121Z"
            stroke="#121212"
            strokeWidth="1.5"
          />
          <path
            d="M769 768C769 555.37 597.077 383 385 383C172.923 383 1 555.37 1 768"
            stroke="#121212"
            strokeWidth="1.5"
          />
          <line x1="384.5" y1="768" x2="537.5" y2="1" stroke="#121212" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Порошковая окраска крепежа",
      subtitle: "Каталог RAL",
      desc: "Окрашивание кровельных и фасадных саморезов, заклепок, шайб и болтов в любой цвет RAL. Высокопрочное полимерное покрытие с гарантией качества и стойкостью к УФ.",
      tags: ["Каталог RAL", "Стойкость к УФ", "Полимеризация"],
      svgBg: (
        <svg
          className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
          viewBox="0 0 768 768"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M65.9 384.4C153.5 471.9 295.7 471.6 383.6 383.6C471.6 295.7 471.9 153.5 384.4 65.9C296.9 -21.6 154.6 -21.3 66.7 66.7C-21.3 154.6 -21.6 296.8 65.9 384.4Z"
            stroke="#121212"
            strokeWidth="1.5"
          />
          <path
            d="M383.6 702.1C471.2 789.6 613.4 789.3 701.3 701.3C789.3 613.4 789.6 471.2 702.1 383.6C614.5 296.1 472.3 296.4 384.4 384.4C296.4 472.3 296.1 614.5 383.6 702.1Z"
            stroke="#121212"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Спецпокрытие изделий",
      subtitle: "Защита от коррозии",
      desc: "Термодиффузионное цинкование, фосфатирование, химическое оксидирование, кадмирование, латунирование и никелирование для эксплуатации в экстремальных средах.",
      tags: ["Термодиффузия", "Цинкование", "Оксидирование"],
      svgBg: (
        <svg
          className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
          viewBox="0 0 768 768"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="78" y1="384" x2="690" y2="384" stroke="#121212" strokeWidth="1.5" />
          <path
            d="M385 0.5C324.5 0.7 263.8 38.3 217.4 113.4C171 188.4 147.6 286.7 147.5 384.9C147.4 483.1 170.4 581.2 216.6 655.9C262.8 730.6 323.4 767.7 384 767.5C444.5 767.3 505.2 729.7 551.6 654.6C598 579.6 621.4 481.3 621.5 383.1C621.6 284.9 598.6 186.8 552.4 112.1C506.2 37.4 445.6 0.3 385 0.5Z"
            stroke="#121212"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
    {
      num: "04",
      title: "Комплектация и снабжение",
      subtitle: "Полный цикл под ключ",
      desc: "Комплексная сборка заявок любой сложности, оперативный подбор аналогов ГОСТ/DIN/ISO, фасовка под партии и поставка точно к монтажному циклу объекта.",
      tags: ["Подбор аналогов", "Фасовка", "Точно в срок"],
      svgBg: (
        <svg
          className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
          viewBox="0 0 968 768"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="725" cy="384" r="241" stroke="#121212" strokeWidth="1.5" />
          <circle cx="483" cy="526" r="241" stroke="#121212" strokeWidth="1.5" />
          <circle cx="242" cy="384" r="241" stroke="#121212" strokeWidth="1.5" />
          <circle cx="483" cy="242" r="241" stroke="#121212" strokeWidth="1.5" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Surtitle */}
        <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-6 flex items-center gap-2">
          <span>// 02 · Услуги и производство</span>
          <span className="w-8 h-[1px] bg-neutral-300" />
          <span className="text-neutral-400">Ключевые компетенции</span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#121212] leading-tight">
              Специализированные услуги <br className="hidden sm:inline" />
              <strong className="font-semibold">и собственное производство</strong>
            </h2>
          </div>
          <div className="text-sm font-mono text-neutral-500 max-w-xs">
            Паспортизация изделий, строгий контроль ГОСТ и оперативные сроки выполнения.
          </div>
        </div>

        {/* Cards Grid in Montarville style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="group relative rounded-2xl p-8 sm:p-10 bg-white border border-neutral-200/90 shadow-sm hover:shadow-xl hover:border-neutral-400 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[380px]"
            >
              {/* CAD SVG blueprint background */}
              {svc.svgBg}

              {/* Card Top: Numbering + Subtitle */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                  {svc.subtitle}
                </span>
                <span className="font-mono text-sm font-semibold text-neutral-400 group-hover:text-[#D0112B] transition-colors">
                  {svc.num} / 04
                </span>
              </div>

              {/* Card Center: Title & Description */}
              <div className="relative z-10 my-8 space-y-3">
                <h3 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight group-hover:text-[#42131E] transition-colors">
                  {svc.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-lg">
                  {svc.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-neutral-100 text-neutral-700 border border-neutral-200/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Bottom: Action CTA button */}
              <div className="relative z-10 pt-4 border-t border-neutral-100 flex items-center justify-between">
                <button
                  onClick={() => onSelectService(svc.title)}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-800 group-hover:text-[#D0112B] transition-colors cursor-pointer"
                >
                  <span>Оставить заявку на услугу</span>
                </button>

                <button
                  onClick={() => onSelectService(svc.title)}
                  className="w-10 h-10 rounded-full bg-[#121212] group-hover:bg-[#D0112B] text-white flex items-center justify-center transition-all duration-300 group-hover:rotate-45"
                  aria-label={`Оставить заявку на ${svc.title}`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
