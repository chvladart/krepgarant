"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Search, FileText, CheckCircle2 } from "lucide-react";

interface CatalogSectionProps {
  onSelectProduct: (productName: string) => void;
}

export default function CatalogSection({ onSelectProduct }: CatalogSectionProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "Весь ассортимент" },
    { id: "bolts", label: "Болты и шпильки" },
    { id: "nuts", label: "Гайки и шайбы" },
    { id: "anchors", label: "Анкерная техника" },
    { id: "rigging", label: "Такелаж и тросы" },
    { id: "screws", label: "Саморезы и заклепки" },
    { id: "stainless", label: "Нержавеющий крепеж" },
  ];

  const products = [
    {
      id: "p1",
      category: "bolts",
      title: "Болты с шестигранной головкой",
      standards: "ГОСТ 7798-70 / DIN 933 / DIN 931",
      strength: "Кл. пр. 5.8, 8.8, 10.9, 12.9",
      coating: "Без покрытия, цинк, горячий цинк",
      sizes: "М6 – М64, длина до 500 мм",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: "p2",
      category: "bolts",
      title: "Шпильки резьбовые полнорезьбовые",
      standards: "DIN 975 / DIN 976 / ГОСТ 22032-76",
      strength: "Кл. пр. 4.8, 8.8, 10.9",
      coating: "Оцинкованные, термодиффузия, нержавеющие",
      sizes: "М4 – М48, длина 1м, 2м, под заказ до 6м",
      image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: "p3",
      category: "nuts",
      title: "Гайки шестигранные и самоконтрящиеся",
      standards: "ГОСТ 5915-70 / DIN 934 / DIN 985",
      strength: "Кл. пр. 6, 8, 10, 12",
      coating: "Цинк, кадмирование, латунирование",
      sizes: "М3 – М64",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: "p4",
      category: "anchors",
      title: "Анкеры клиновые и забивные",
      standards: "Европейский допуск ETA Опция 1 и 7",
      strength: "Высокопрочная углеродистая сталь",
      coating: "Желтопассивированный и белый цинк",
      sizes: "Диаметр 6 – 24 мм, длина до 300 мм",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: "p5",
      category: "screws",
      title: "Саморезы кровельные и фасадные с EPDM",
      standards: "DIN 7504-K / DIN 7504-N",
      strength: "Закаленная легированная сталь",
      coating: "Порошковая окраска по RAL, цинк Ruspert",
      sizes: "4.8x19 – 6.3x280 мм",
      image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: "p6",
      category: "rigging",
      title: "Такелаж: тросы, цепи, талрепы и коуши",
      standards: "DIN 3055, DIN 3060, DIN 1480, DIN 741",
      strength: "Стальной трос от 1570 до 1960 Н/мм²",
      coating: "Оцинкованный, нержавеющий А2/А4",
      sizes: "Тросы диаметром 1 – 32 мм",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb1861593?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: "p7",
      category: "stainless",
      title: "Нержавеющий крепеж А2 и А4 (Кислотостойкий)",
      standards: "AISI 304 (А2) / AISI 316 (А4) / DIN / ГОСТ",
      strength: "Предел текучести 700–800 МПа",
      coating: "Аустенитная сталь, 100% антикоррозия",
      sizes: "Полная размерная сетка М2 – М36",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: "p8",
      category: "nuts",
      title: "Шайбы плоские, пружинные (гровер) и кузовные",
      standards: "ГОСТ 11371-78 / ГОСТ 6402-70 / DIN 125 / DIN 127",
      strength: "Сталь 65Г, 40Х, нержавеющие стали",
      coating: "Цинк, оксидирование, кадмирование",
      sizes: "М3 – М64",
      image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=700&q=80",
    },
  ];

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="catalog" className="py-24 md:py-32 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Surtitle */}
        <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-6 flex items-center gap-2">
          <span>// 04 · Продукция и стандарты</span>
          <span className="w-8 h-[1px] bg-neutral-300" />
          <span className="text-neutral-400">Каталог крепежа</span>
        </div>

        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#121212] leading-tight">
              Сертифицированный крепеж <br />
              <strong className="font-semibold">под любые стандарты и нагрузки</strong>
            </h2>
          </div>
          <p className="text-sm font-mono text-neutral-500 max-w-sm">
            Все изделия сопровождаются паспортами качества завода-изготовителя и сертификатами соответствия ГОСТ Р.
          </p>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#121212] text-white shadow-md"
                  : "bg-white text-neutral-700 border border-neutral-200 hover:border-neutral-400"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl bg-white border border-neutral-200/90 hover:border-neutral-400 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-95"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-black/75 backdrop-blur-md text-white border border-white/20">
                    В наличии
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-neutral-900 group-hover:text-[#42131E] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <div className="mt-2 font-mono text-xs text-[#D0112B] font-medium">
                    {item.standards}
                  </div>
                </div>

                {/* Specs list */}
                <div className="space-y-1.5 pt-2 border-t border-neutral-100 text-xs text-neutral-600">
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Прочность:</span>
                    <span className="font-mono text-neutral-800">{item.strength}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Покрытие:</span>
                    <span className="text-neutral-800 text-right truncate max-w-[130px]">{item.coating}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Размеры:</span>
                    <span className="font-mono text-neutral-800">{item.sizes}</span>
                  </div>
                </div>

                {/* Action button */}
                <button
                  onClick={() => onSelectProduct(item.title)}
                  className="w-full mt-2 py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-neutral-100 group-hover:bg-[#121212] text-neutral-800 group-hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Запросить цену</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:text-[#D0112B]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
