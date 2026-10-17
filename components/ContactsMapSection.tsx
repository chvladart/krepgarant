"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Download, ExternalLink, Navigation, Copy, Check } from "lucide-react";

interface ContactsMapSectionProps {
  onOpenSchemeModal: () => void;
}

export default function ContactsMapSection({ onOpenSchemeModal }: ContactsMapSectionProps) {
  const [activeTab, setActiveTab] = useState<"office" | "warehouse">("office");
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2500);
  };

  return (
    <section id="contacts" className="py-24 md:py-32 bg-[#F4F3EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Surtitle */}
        <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-6 flex items-center gap-2">
          <span>// 06 · Локация и контакты</span>
          <span className="w-8 h-[1px] bg-neutral-300" />
          <span className="text-neutral-400">Как нас найти</span>
        </div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#121212] leading-tight">
              Офис продаж и складской комплекс <br />
              <strong className="font-semibold">в Санкт-Петербурге</strong>
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={onOpenSchemeModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-neutral-300 hover:border-neutral-800 text-xs font-mono uppercase tracking-wider text-neutral-800 transition-colors shadow-xs cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#D0112B]" />
              <span>Схема проезда (JPG)</span>
            </button>
          </div>
        </div>

        {/* Main Grid: Info Cards + Map Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Location Cards & Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Tabs toggle */}
            <div className="flex rounded-xl bg-neutral-200/80 p-1">
              <button
                onClick={() => setActiveTab("office")}
                className={`flex-1 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === "office"
                    ? "bg-white text-neutral-900 shadow-xs font-bold"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Офис продаж
              </button>
              <button
                onClick={() => setActiveTab("warehouse")}
                className={`flex-1 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === "warehouse"
                    ? "bg-white text-neutral-900 shadow-xs font-bold"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Складской комплекс
              </button>
            </div>

            {/* Active Card Details */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-sm space-y-6">
              {activeTab === "office" ? (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-wider text-[#D0112B]">
                        Центральный офис
                      </span>
                      <h3 className="text-xl font-semibold text-neutral-900 mt-1">
                        Ленинский проспект, 140И, оф. 423В
                      </h3>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 mt-2" title="Открыто" />
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    Санкт-Петербург, Кировский район. Оформление договоров, выдача бухгалтерских документов, консультация инженеров и образцы крепежа.
                  </p>

                  <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-xs">
                    <span className="text-neutral-500 font-mono">Часы работы:</span>
                    <span className="font-medium text-neutral-800">Пн–Пт: 09:00 — 18:00</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-wider text-[#D0112B]">
                        Распределительный склад
                      </span>
                      <h3 className="text-xl font-semibold text-neutral-900 mt-1">
                        Ленинский проспект, 140Н
                      </h3>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 mt-2" title="Открыто" />
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    Санкт-Петербург. Механизированная погрузка любого автотранспорта (от легковых до фур 20т), входной контроль, фасовка и комплектация партий.
                  </p>

                  <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-xs">
                    <span className="text-neutral-500 font-mono">Отгрузка со склада:</span>
                    <span className="font-medium text-neutral-800">Пн–Пт: 09:00 — 17:30</span>
                  </div>
                </div>
              )}

              {/* Direct Contacts List */}
              <div className="pt-4 border-t border-neutral-100 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2.5 text-neutral-700">
                    <Phone className="w-4 h-4 text-[#D0112B]" />
                    <span className="font-mono font-medium">(812) 209-45-39</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard("+78122094539", "phone")}
                    className="text-xs font-mono text-neutral-400 hover:text-neutral-800 flex items-center gap-1 cursor-pointer"
                  >
                    {copiedText === "phone" ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedText === "phone" ? "Скопировано" : "Копия"}</span>
                  </button>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2.5 text-neutral-700">
                    <Mail className="w-4 h-4 text-[#D0112B]" />
                    <span className="font-mono">sale@krepgarant.ru</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard("sale@krepgarant.ru", "email")}
                    className="text-xs font-mono text-neutral-400 hover:text-neutral-800 flex items-center gap-1 cursor-pointer"
                  >
                    {copiedText === "email" ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedText === "email" ? "Скопировано" : "Копия"}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Scheme download banner */}
            <div
              onClick={onOpenSchemeModal}
              className="p-4 rounded-xl bg-neutral-900 text-white flex items-center justify-between cursor-pointer hover:bg-[#42131E] transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-neutral-800 flex items-center justify-center">
                  <Navigation className="w-4 h-4 text-[#D0112B]" />
                </div>
                <div>
                  <div className="text-xs font-semibold">Схема заезда на склад</div>
                  <div className="text-[11px] text-neutral-400 font-mono">Пропускной режим через КПП</div>
                </div>
              </div>
              <span className="text-xs font-mono text-[#D0112B] underline">Открыть &rarr;</span>
            </div>
          </div>

          {/* Right Column: Stylized Architectural Map Frame */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-3 border border-neutral-200 shadow-md flex flex-col min-h-[460px]">
            <div className="relative flex-1 rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800">
              {/* Interactive Yandex Map embed with coordinates [59.853587, 30.285006] */}
              <iframe
                title="Карта Крепгарант"
                src="https://yandex.ru/map-widget/v1/?ll=30.285006%2C59.853587&z=16&pt=30.285006%2C59.853587~30.285382%2C59.854251"
                className="w-full h-full min-h-[400px] border-0 filter grayscale contrast-125 opacity-90 hover:filter-none hover:opacity-100 transition-all duration-700"
                loading="lazy"
              />

              {/* Float location badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-neutral-200 shadow-xl max-w-xs pointer-events-none">
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-900">
                  <MapPin className="w-4 h-4 text-[#D0112B]" />
                  <span>Крепгарант · СПб</span>
                </div>
                <div className="text-[11px] text-neutral-500 mt-1 font-mono">
                  59.853587° N, 30.285006° E <br />
                  Ленинский пр-т, 140 (корп. И, корп. Н)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
