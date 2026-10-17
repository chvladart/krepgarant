"use client";

import { useState } from "react";
import { Download, FileSpreadsheet, Search, Check, Sparkles, ArrowRight } from "lucide-react";

interface PriceListBannerProps {
  onOpenOrder: () => void;
}

export default function PriceListBanner({ onOpenOrder }: PriceListBannerProps) {
  const [downloading, setDownloading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [copied, setCopied] = useState(false);

  const sampleItems = [
    { name: "Болт М12х50 ГОСТ 7798-70 / DIN 933 кл. 8.8 цинк", price: "от 18.40 ₽ / шт", stock: "140 000 шт" },
    { name: "Гайка М12 DIN 934 кл. 8.0 цинк", price: "от 6.20 ₽ / шт", stock: "280 000 шт" },
    { name: "Шпилька резьбовая М16х1000 DIN 975 кл. 8.8", price: "от 185.00 ₽ / шт", stock: "12 500 шт" },
    { name: "Анкер клиновой 12х120 оцинкованный ETA", price: "от 42.50 ₽ / шт", stock: "45 000 шт" },
    { name: "Саморез кровельный 4.8х35 RAL 7024 с EPDM", price: "от 2.95 ₽ / шт", stock: "600 000 шт" },
    { name: "Трос стальной DIN 3055 диам. 6 мм оцинкованный", price: "от 36.80 ₽ / м", stock: "18 000 м" },
  ];

  const filteredItems = sampleItems.filter((i) =>
    i.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDownload = () => {
    setDownloading(true);
    // Simulate generation/download of XLS file
    const element = document.createElement("a");
    const file = new Blob(
      [
        "Артикул\tНаименование\tСтандарт\tКласс прочности\tПокрытие\tЦена опт (руб)\tНаличие СПб\n" +
          sampleItems
            .map(
              (i, idx) =>
                `KG-${1000 + idx}\t${i.name}\tГОСТ/DIN\t8.8\tЦинк\t${i.price}\t${i.stock}`
            )
            .join("\n"),
      ],
      { type: "text/tab-separated-values;charset=utf-8" }
    );
    element.href = URL.createObjectURL(file);
    element.download = "krepgarant_pricelist_2026.xls";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    setTimeout(() => {
      setDownloading(false);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }, 800);
  };

  return (
    <section id="pricelist" className="py-24 bg-[#121212] text-white relative overflow-hidden">
      {/* Background CAD line art circles */}
      <div
        className="pointer-events-none absolute left-[-15%] top-[-20%] w-[650px] h-[650px] opacity-[0.07] select-none text-white"
        aria-hidden="true"
      >
        <svg viewBox="0 0 768 768" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="384" cy="384" r="300" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="384" cy="384" r="200" stroke="currentColor" strokeWidth="1.5" />
          <line x1="84" y1="384" x2="684" y2="384" stroke="currentColor" strokeWidth="1.5" />
          <line x1="384" y1="84" x2="384" y2="684" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Download action */}
          <div className="lg:col-span-6 space-y-6">
            <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D0112B]" />
              <span>// Актуальный каталог цен</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight">
              Полный прайс-лист <br />
              <strong className="font-semibold text-white">
                метизной продукции
              </strong>
            </h2>

            <p className="text-base text-neutral-400 max-w-lg leading-relaxed">
              Скачайте полный каталог номенклатуры с ценами производителя, актуальными складскими остатками в Санкт-Петербурге и техническими характеристиками.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={handleDownload}
                disabled={downloading}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#D0112B] hover:bg-[#b00f24] text-white transition-all text-sm font-semibold uppercase tracking-wider shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                {downloading ? (
                  <span>Формирование XLS...</span>
                ) : copied ? (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span>Файл скачан!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Скачать прайс-лист (XLS · 8 Мб)</span>
                  </>
                )}
              </button>

              <button
                onClick={onOpenOrder}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-neutral-700 hover:border-neutral-500 text-sm font-medium text-neutral-300 hover:text-white transition-colors cursor-pointer"
              >
                <span>Отправить заявку по смете</span>
                <ArrowRight className="w-4 h-4 text-neutral-400" />
              </button>
            </div>

            <div className="pt-4 flex items-center gap-6 text-xs font-mono text-neutral-500">
              <div>Формат: Microsoft Excel (XLS)</div>
              <div>•</div>
              <div>Обновление: Сегодня</div>
              <div>•</div>
              <div>50 000+ артикулов</div>
            </div>
          </div>

          {/* Right Column: Live Quick Price Preview */}
          <div className="lg:col-span-6 bg-neutral-900/90 rounded-2xl p-6 sm:p-8 border border-neutral-800 backdrop-blur-md">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-800">
              <div className="flex items-center gap-2 text-sm font-semibold text-neutral-200">
                <FileSpreadsheet className="w-4 h-4 text-[#D0112B]" />
                <span>Быстрый поиск по позициям склада</span>
              </div>
              <span className="font-mono text-xs text-neutral-500">СПб · Склад</span>
            </div>

            {/* Quick search input */}
            <div className="relative mb-4">
              <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Начните вводить: болт, гайка, шпилька, анкер..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-neutral-200 placeholder:text-neutral-600 focus:outline-hidden focus:border-[#D0112B] transition-colors"
              />
            </div>

            {/* Mini preview list */}
            <div className="space-y-2.5 max-h-[220px] overflow-y-auto pr-1">
              {filteredItems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-neutral-950/60 border border-neutral-800/80 hover:border-neutral-700 transition-colors flex items-center justify-between gap-3 text-xs"
                >
                  <div className="truncate">
                    <div className="text-neutral-200 font-medium truncate">{item.name}</div>
                    <div className="text-neutral-500 font-mono text-[11px] mt-0.5">В наличии: {item.stock}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-[#D0112B] font-mono font-semibold">{item.price}</div>
                    <div className="text-[10px] text-neutral-500">с НДС 20%</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-800 flex justify-between items-center text-xs text-neutral-500 font-mono">
              <span>Для крупного опта действует специальный дисконт</span>
              <button
                onClick={handleDownload}
                className="text-neutral-300 hover:text-white underline cursor-pointer"
              >
                Скачать весь список &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
