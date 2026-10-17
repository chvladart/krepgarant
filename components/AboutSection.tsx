"use client";

import Image from "next/image";
import { ArrowUpRight, Check, PackageCheck, Layers, Eye, Truck } from "lucide-react";

export default function AboutSection() {
  const advantages = [
    {
      icon: Layers,
      title: "Ассортимент в наличии и под заказ",
      text: "Более 50 000 позиций на складе: болты, гайки, шпильки, анкеры, такелаж, саморезы и специализированный крепеж.",
    },
    {
      icon: PackageCheck,
      title: "Точный подбор аналогов",
      text: "Инженерная экспертиза по ГОСТ, DIN и ISO. Подбираем надежные и экономически выгодные аналоги без потери несущей способности.",
    },
    {
      icon: Eye,
      title: "Контроль сборки и комплектации",
      text: "Входной контроль партии, сверка маркировок и сертификатов соответствия, паспорта изделий для каждого заказа.",
    },
    {
      icon: Truck,
      title: "Собственная логистика и трекинг",
      text: "Оперативная доставка по Санкт-Петербургу, Ленинградской области и отправка транспортными компаниями по всей России.",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[#F4F3EF] border-t border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Surtitle */}
        <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-6 flex items-center gap-2">
          <span>// 01 · О компании</span>
          <span className="w-8 h-[1px] bg-neutral-300" />
          <span className="text-neutral-400">Что нас отличает</span>
        </div>

        {/* Section Title */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#121212] leading-tight">
            Партнер ваших производственных <br className="hidden md:inline" />
            <strong className="font-semibold">и строительных побед</strong>
          </h2>
        </div>

        {/* 2-Column Montarville Editorial Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Authentic Krepgarant Logistics / Truck Image */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden bg-white p-6 shadow-sm border border-neutral-200 group">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/truck.png"
                  alt="Креп Гарант Логистика"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono uppercase text-neutral-400">
                    Автопарк доставки
                  </div>
                  <div className="text-sm font-semibold text-neutral-800">
                    Собственная служба доставки Крепгарант
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#121212] flex items-center justify-center text-white">
                  <ArrowUpRight className="w-4 h-4 text-[#D0112B]" />
                </div>
              </div>
            </div>

            {/* Industrial quote box */}
            <div className="p-6 rounded-2xl bg-neutral-900 text-neutral-200 border border-neutral-800">
              <p className="text-sm italic leading-relaxed text-neutral-300">
                «Наша цель — полностью освободить инженеров и снабженцев от головной боли с метизами. Мы берем на себя полную ответственность за качество и сроки.»
              </p>
              <div className="mt-3 font-mono text-xs text-[#D0112B]">
                // Отдел технического контроля «Крепгарант»
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-8">
            <div className="text-base sm:text-lg text-neutral-700 leading-relaxed space-y-4">
              <p>
                <strong>«Крепгарант»</strong> — быстроразвивающаяся компания в сегменте комплексных поставок крепежа, такелажа и строительных материалов.
              </p>
              <p>
                Наше ключевое преимущество — <strong>полный замкнутый цикл поставки</strong>: от экспертного подбора необходимых крепежных изделий и испытания нагрузок до оперативной логистики на ваш склад или строительную площадку.
              </p>
              <p className="text-sm sm:text-base text-neutral-600">
                Мы поддерживаем достаточный страховой запас наиболее востребованных позиций на собственном складе в Санкт-Петербурге, а также в кратчайшие сроки изготавливаем недостающие или нестандартные позиции по чертежам заказчика.
              </p>
            </div>

            {/* Grid of Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {advantages.map((adv) => {
                const IconComponent = adv.icon;
                return (
                  <div
                    key={adv.title}
                    className="p-5 rounded-xl bg-white border border-neutral-200/80 shadow-xs hover:border-neutral-400 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center text-[#42131E] mb-3">
                      <IconComponent className="w-5 h-5 text-[#D0112B]" />
                    </div>
                    <h3 className="text-base font-semibold text-neutral-900 mb-1.5">
                      {adv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {adv.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
