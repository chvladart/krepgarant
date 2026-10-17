"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowUpRight, Menu, X, Download } from "lucide-react";

interface HeaderProps {
  onOpenCallback: () => void;
  onOpenPriceModal?: () => void;
}

export default function Header({ onOpenCallback, onOpenPriceModal }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "О компании", href: "#about" },
    { label: "Услуги", href: "#services" },
    { label: "Для кого", href: "#target" },
    { label: "Продукция", href: "#catalog" },
    { label: "Прайс-лист", href: "#pricelist" },
    { label: "Контакты", href: "#contacts" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAFAFA]/90 backdrop-blur-md border-b border-[#121212]/10 py-3 shadow-xs"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-3 transition-opacity hover:opacity-85"
            >
              <div className="relative h-9 w-36 sm:w-44 md:w-52">
                <Image
                  src="/logo.png"
                  alt="Крепгарант"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
              <span className="hidden lg:inline-block font-mono text-[11px] text-neutral-400 tracking-widest pl-2 border-l border-neutral-300 uppercase">
                (СПб · Опт & Производство)
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-neutral-800 hover:text-[#D0112B] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D0112B] hover:after:w-full after:transition-all"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Action buttons & Contacts */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href="tel:+78122094539"
                className="flex items-center gap-2 text-sm font-medium text-[#121212] hover:text-[#D0112B] transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-neutral-200/80 flex items-center justify-center text-neutral-700">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="font-mono tracking-tight font-semibold">(812) 209-45-39</span>
              </a>

              <button
                onClick={onOpenCallback}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#121212] text-[#FAFAFA] hover:bg-[#42131E] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Связаться</span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#D0112B]" />
              </button>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex sm:hidden items-center gap-3">
              <a
                href="tel:+78122094539"
                className="p-2 rounded-full bg-neutral-100 text-neutral-800"
                aria-label="Позвонить"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-neutral-900 rounded-lg focus:outline-hidden"
                aria-label="Открыть меню"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer (Montarville c-screen-menu style) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#121212] text-[#FAFAFA] flex flex-col justify-between p-6 sm:p-10 animate-fade-in">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-6">
            <div className="relative h-9 w-40">
              <Image
                src="/logo-white.png"
                alt="Крепгарант"
                fill
                className="object-contain object-left"
              />
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full border border-neutral-700 text-neutral-300 hover:text-white"
              aria-label="Закрыть меню"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-5 my-auto py-8">
            <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase">
              // Навигация
            </span>
            {navLinks.map((item, idx) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-baseline justify-between text-2xl sm:text-3xl font-light tracking-tight hover:text-white transition-colors"
              >
                <span className="group-hover:translate-x-2 transition-transform">
                  {item.label}
                </span>
                <span className="font-mono text-xs text-neutral-600">
                  0{idx + 1}
                </span>
              </Link>
            ))}
          </nav>

          <div className="border-t border-neutral-800 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <div className="text-xs text-neutral-400">Отдел продаж СПб:</div>
              <a
                href="tel:+78122094539"
                className="text-lg font-mono font-semibold text-white hover:text-[#D0112B] transition-colors"
              >
                (812) 209-45-39
              </a>
              <div className="text-xs text-neutral-500 mt-1">
                Ленинский проспект, дом 140
              </div>
            </div>

            <div className="flex gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCallback();
                }}
                className="flex-1 sm:flex-none px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#D0112B] text-white hover:bg-[#b00f24] transition-colors"
              >
                Заказать звонок
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
