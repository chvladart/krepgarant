"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

interface TargetAudienceProps {
  onOpenCallback: () => void;
}

export default function TargetAudience({ onOpenCallback }: TargetAudienceProps) {
  const [activeCard, setActiveCard] = useState<number | null>(0);

  const targets = [
    {
      title: "Генподрядчик или строительная компания?",
      short: "Бесперебойные поставки на стройплощадки, анкерная техника, фасадный крепеж и паспорта соответствия.",
      full: "Обеспечиваем плановое снабжение строительных объектов точно по графику СМР. Берем на себя подбор крепежа по спецификациям проекта, предоставляем паспорта качества и сертификаты соответствия ГОСТ на каждую партию. Возможна отсрочка платежа для постоянных партнеров.",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb1861593?auto=format&fit=crop&w=900&q=80",
      points: ["Комплектация по этапам СМР", "Паспорта качества на объект", "Резервирование партий на складе"],
    },
    {
      title: "Машиностроительный завод или производство?",
      short: "Высокопрочный крепеж 8.8, 10.9, 12.9, нержавеющие стали А2/А4 и изготовление по чертежам.",
      full: "Поставляем калиброванный и высокопрочный крепеж для ответственных металлоконструкций, станкостроения и машиностроения. Изготавливаем нестандартные болты, шпильки и закладные элементы на собственном токарно-фрезерном производстве.",
      image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80",
      points: ["Классы прочности до 12.9", "Нержавеющие сплавы А2 / А4", "Точное токарное производство"],
    },
    {
      title: "Фасадная, кровельная или монтажная бригада?",
      short: "Окраска саморезов и заклепок в RAL, такелаж, дюбели и расходные материалы в наличии.",
      full: "Окрашиваем кровельные саморезы, вытяжные заклепки и кронштейны в любой оттенок каталога RAL. Гарантия прочного полимерного слоя без сколов при закручивании. Отгрузка со склада в Санкт-Петербурге в течение 24 часов.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",
      points: ["Окраска по RAL за 24–48 ч", "EPDM-шайбы высшего сорта", "Такелаж и тросовые системы"],
    },
    {
      title: "Оптовый снабженец или торговая сеть?",
      short: "Дилерские цены производителя, фасовка в промышленную упаковку и оперативная логистика по РФ.",
      full: "Предлагаем прямые дилерские контракты с гибкой шкалой оптовых скидок. Поддерживаем стабильный складской неснижаемый остаток свыше 50 000 позиций. Обеспечиваем быструю доставку собственным транспортом и через ТК по всей территории РФ.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
      points: ["Максимальные оптовые скидки", "Индивидуальная фасовка", "Отгрузка ТК по всей России"],
    },
  ];

  return (
    <section id="target" className="py-24 md:py-32 bg-[#F4F3EF] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Surtitle */}
        <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-6 flex items-center gap-2">
          <span>// 03 · Для кого</span>
          <span className="w-8 h-[1px] bg-neutral-300" />
          <span className="text-neutral-400">Отраслевые решения</span>
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#121212] leading-tight">
            Специализированные поставки <br />
            <strong className="font-semibold">под задачи вашего бизнеса</strong>
          </h2>
        </div>

        {/* Interactive Expandable Cards (Montarville c-home-target style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {targets.map((item, idx) => {
            const isExpanded = activeCard === idx;
            return (
              <div
                key={item.title}
                className={`relative rounded-2xl overflow-hidden transition-all duration-500 border ${
                  isExpanded
                    ? "bg-white border-neutral-400 shadow-xl"
                    : "bg-white/80 border-neutral-200 hover:border-neutral-300 shadow-xs"
                }`}
              >
                {/* Image frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover brightness-90 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Plus/Minus toggle button */}
                  <button
                    onClick={() => setActiveCard(isExpanded ? null : idx)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#D0112B] transition-colors"
                    aria-label={isExpanded ? "Свернуть" : "Подробнее"}
                  >
                    {isExpanded ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                    {item.short}
                  </p>

                  {/* Expanded content */}
                  {isExpanded && (
                    <div className="pt-4 border-t border-neutral-100 space-y-4 animate-fade-in">
                      <p className="text-xs text-neutral-700 leading-relaxed">
                        {item.full}
                      </p>
                      
                      <div className="space-y-1.5 pt-1">
                        {item.points.map((pt) => (
                          <div key={pt} className="flex items-center gap-2 text-xs font-mono text-neutral-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D0112B]" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={onOpenCallback}
                        className="w-full mt-4 py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#121212] text-white hover:bg-[#42131E] transition-colors flex items-center justify-center gap-2"
                      >
                        <span>Начать сотрудничество</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#D0112B]" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
