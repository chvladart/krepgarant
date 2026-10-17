"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#121212] text-white pt-20 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar with back to top button */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-12 border-b border-neutral-800">
          <div className="relative h-10 w-44 sm:w-56">
            <Image
              src="/logo-white.png"
              alt="Крепгарант"
              fill
              className="object-contain object-left"
            />
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Наверх</span>
            <div className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-white transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

        {/* Multi-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-12 border-b border-neutral-800">
          {/* Col 1: About */}
          <div className="lg:col-span-4 space-y-4">
            <div className="font-mono text-xs uppercase tracking-widest text-[#D0112B]">
              // ООО «Крепгарант»
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              Комплексные оптовые поставки крепежных изделий, метизов, строительного такелажа, порошковая окраска по RAL и изготовление нестандартного крепежа по чертежам.
            </p>
            <div className="pt-2 text-xs font-mono text-neutral-500">
              Собственный склад и производство в Санкт-Петербурге. Поставки по всей РФ.
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-4">
              Навигация
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="text-neutral-300 hover:text-white transition-colors">
                  О компании и преимущества
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-neutral-300 hover:text-white transition-colors">
                  Услуги и производство
                </Link>
              </li>
              <li>
                <Link href="#target" className="text-neutral-300 hover:text-white transition-colors">
                  Отраслевые решения
                </Link>
              </li>
              <li>
                <Link href="#catalog" className="text-neutral-300 hover:text-white transition-colors">
                  Каталог продукции ГОСТ/DIN
                </Link>
              </li>
              <li>
                <Link href="#pricelist" className="text-neutral-300 hover:text-white transition-colors">
                  Прайс-лист XLS (8 Мб)
                </Link>
              </li>
              <li>
                <Link href="#contacts" className="text-neutral-300 hover:text-white transition-colors">
                  Контакты и схема проезда
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contacts */}
          <div className="lg:col-span-5 space-y-4">
            <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-4">
              Контакты и склад
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-neutral-300">
                <MapPin className="w-4 h-4 text-[#D0112B] shrink-0 mt-0.5" />
                <span>
                  Санкт-Петербург, Ленинский проспект, дом 140, <br />
                  корпус И (офис 423В) / корпус Н (склад)
                </span>
              </div>
              <div className="flex items-center gap-3 text-neutral-300">
                <Phone className="w-4 h-4 text-[#D0112B] shrink-0" />
                <a
                  href="tel:+78122094539"
                  className="font-mono font-medium hover:text-white transition-colors"
                >
                  (812) 209-45-39
                </a>
              </div>
              <div className="flex items-center gap-3 text-neutral-300">
                <Mail className="w-4 h-4 text-[#D0112B] shrink-0" />
                <a
                  href="mailto:sale@krepgarant.ru"
                  className="font-mono hover:text-white transition-colors"
                >
                  sale@krepgarant.ru
                </a>
              </div>
            </div>

            <div className="pt-2 text-xs font-mono text-neutral-500">
              ИНН 7805794503 · ОГРН 1227800078120 · КПП 780501001
            </div>
          </div>
        </div>

        {/* Montarville Big Architectural Logo Wordmark */}
        <div className="pt-12 pb-8 text-center select-none overflow-hidden">
          <div className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-neutral-800/60 uppercase hover:text-neutral-700/80 transition-colors">
            крепгарант<span className="text-[#D0112B]">.</span>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-neutral-500 pt-6 border-t border-neutral-900">
          <div>
            © 2026 Крепгарант. Все права защищены.
          </div>
          <div className="flex gap-6">
            <span className="hover:text-neutral-300 transition-colors cursor-pointer">
              Политика конфиденциальности
            </span>
            <span className="hover:text-neutral-300 transition-colors cursor-pointer">
              Обработка персональных данных
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
