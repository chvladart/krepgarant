"use client";

import Image from "next/image";
import { X, Download, MapPin } from "lucide-react";

interface SchemeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SchemeModal({ isOpen, onClose }: SchemeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-200 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#121212] flex items-center justify-center text-white">
              <MapPin className="w-4 h-4 text-[#D0112B]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900">
                Схема проезда и заезда на склад
              </h3>
              <p className="text-xs text-neutral-500 font-mono">
                Санкт-Петербург, Ленинский пр., 140И / 140Н
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/scheme.jpg"
              download="shema-proezda-krepgarant.jpg"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#121212] hover:bg-[#42131E] text-white text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#D0112B]" />
              <span className="hidden sm:inline">Скачать схему</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-full border border-neutral-200 text-neutral-500 hover:text-neutral-900 hover:border-neutral-400 transition-colors cursor-pointer"
              aria-label="Закрыть"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image body */}
        <div className="relative flex-1 min-h-[300px] sm:min-h-[450px] my-4 rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200">
          <Image
            src="/scheme.jpg"
            alt="Схема проезда Крепгарант"
            fill
            className="object-contain"
          />
        </div>

        {/* Footer info */}
        <div className="pt-2 text-xs text-neutral-500 font-mono flex flex-col sm:flex-row justify-between gap-2 border-t border-neutral-100">
          <div>Проезд автотранспорта через КПП. Сообщите охране: «В компанию Крепгарант».</div>
          <div>Отдел логистики: (812) 209-45-39</div>
        </div>
      </div>
    </div>
  );
}
