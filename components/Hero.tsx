"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, Download, FileSpreadsheet, CheckCircle2, ShieldCheck } from "lucide-react";

interface HeroProps {
  onOpenCallback: () => void;
  onOpenPriceModal?: () => void;
}

export default function Hero({ onOpenCallback, onOpenPriceModal }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#FAFAFA]">
      {/* Montarville signature background concentric/intersecting circles */}
      <div
        className="pointer-events-none absolute right-[-10%] top-12 md:top-24 w-[500px] h-[500px] md:w-[760px] md:h-[610px] opacity-[0.14] select-none text-[#121212]"
        aria-hidden="true"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 768 610"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="384" cy="417.5" r="191.5" stroke="currentColor" strokeWidth="1" />
          <circle cx="384" cy="192" r="191.5" stroke="currentColor" strokeWidth="1" />
          <circle cx="192" cy="304.7" r="191.5" stroke="currentColor" strokeWidth="1" />
          <circle cx="576" cy="304.7" r="191.5" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top surtitle tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-neutral-200/70 text-neutral-800">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D0112B] animate-pulse" />
            Оптовые поставки метизов и крепежа
          </span>
          <span className="hidden sm:inline-block font-mono text-xs text-neutral-400">
            [ ГОСТ · DIN · ISO · Спецпокрытия ]
          </span>
        </div>

        {/* Big Editorial Title with Montarville strong typography */}
        <div className="max-w-5xl mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#121212] leading-[1.08]">
            Надежный поставщик. <br className="hidden sm:inline" />
            <strong className="font-semibold text-[#121212]">
              Безупречный крепеж.
            </strong>{" "}
            Точные сроки.
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-neutral-600 font-light max-w-3xl leading-relaxed">
            Любые объемы. Весь ассортимент со склада в Санкт-Петербурге и под заказ по ценам производителя.
          </p>
        </div>

        {/* Content split: 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end pt-4">
          <div className="lg:col-span-6 space-y-8">
            <div className="border-l-2 border-[#D0112B] pl-5 space-y-3">
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                <strong>Полный цикл поставки:</strong> от инженерного подбора необходимых крепежных изделий и подбора аналогов до нанесения защитных покрытий и отслеживания груза в пути.
              </p>
              <p className="text-sm text-neutral-500">
                Собственный складской комплекс на Ленинском проспекте, автоматизированная сборка, паспорта качества на всю продукцию.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#order"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#121212] text-white hover:bg-[#42131E] transition-all text-sm font-semibold tracking-wide uppercase hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Запросить расчет сметы</span>
                <ArrowDownRight className="w-4 h-4 text-[#D0112B]" />
              </a>

              <a
                href="#pricelist"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-neutral-300 bg-white/80 hover:bg-neutral-100 transition-all text-sm font-medium text-neutral-800"
              >
                <Download className="w-4 h-4 text-neutral-600" />
                <span>Скачать прайс-лист</span>
                <span className="font-mono text-xs text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded">
                  XLS · 8 Мб
                </span>
              </a>
            </div>

            {/* Mini metrics bar */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-neutral-200">
              <div>
                <div className="text-2xl sm:text-3xl font-light text-[#121212] font-mono">
                  50k+
                </div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider mt-0.5">
                  позиций на складе
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-light text-[#121212] font-mono">
                  100%
                </div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider mt-0.5">
                  паспортизация ГОСТ
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-light text-[#121212] font-mono">
                  24ч
                </div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider mt-0.5">
                  готовность к отгрузке
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Image Card (Montarville framing) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-900 shadow-2xl border border-neutral-200">
              {/* High resolution industrial warehouse / fasteners image */}
              <Image
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                alt="Промышленный крепеж и логистика Крепгарант"
                fill
                priority
                className="object-cover brightness-95 contrast-105 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/90 via-[#121212]/30 to-transparent" />

              {/* Float info tag inside image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#42131E] flex items-center justify-center text-white shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#D0112B]" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-neutral-500">
                      Контроль качества сборки
                    </div>
                    <div className="text-sm font-semibold text-neutral-900">
                      Отгрузка со склада в Санкт-Петербурге
                    </div>
                  </div>
                </div>
                <div className="hidden sm:block text-right">
                  <span className="inline-flex items-center gap-1 text-xs font-mono font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5" /> В наличии
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
