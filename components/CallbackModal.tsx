"use client";

import { useState } from "react";
import { X, CheckCircle2, Phone, Send } from "lucide-react";

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle?: string;
}

export default function CallbackModal({ isOpen, onClose, serviceTitle }: CallbackModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full border border-neutral-200 text-neutral-500 hover:text-neutral-900 hover:border-neutral-400 transition-colors cursor-pointer"
          aria-label="Закрыть"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4 animate-fade-in">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-semibold text-neutral-900">
              Заявка принята!
            </h3>
            <p className="text-sm text-neutral-600 max-w-xs mx-auto leading-relaxed">
              Специалист компании «Крепгарант» перезвонит вам по номеру{" "}
              <span className="font-mono font-semibold text-neutral-900">{phone}</span> в течение 10 минут.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setName("");
                setPhone("");
                setEmail("");
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider bg-[#121212] text-white hover:bg-[#42131E] transition-colors cursor-pointer"
            >
              Закрыть окно
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D0112B] mb-2">
              <Phone className="w-3.5 h-3.5" />
              <span>Обратный звонок с сайта</span>
            </div>

            <h3 className="text-2xl font-light text-neutral-900 tracking-tight">
              {serviceTitle ? (
                <>Заявка на: <strong className="font-semibold">{serviceTitle}</strong></>
              ) : (
                <>Оставьте контакты для <strong className="font-semibold">быстрой консультации</strong></>
              )}
            </h3>

            <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
              Специалисты из компании «Крепгарант» перезвонят, ответят на технические вопросы и оперативно подготовят счет.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 mt-6">
              <div>
                <label className="block text-xs font-mono uppercase text-neutral-500 mb-1">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Имя или название компании"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:outline-hidden focus:border-[#D0112B] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-500 mb-1">
                  Номер телефона *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+7 (___) ___ __ __"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:outline-hidden focus:border-[#D0112B] text-sm font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-500 mb-1">
                  Email (для отправки КП)
                </label>
                <input
                  type="email"
                  placeholder="mail@domain.ru"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:outline-hidden focus:border-[#D0112B] text-sm"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-full bg-[#121212] hover:bg-[#42131E] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <span>Отправка...</span>
                  ) : (
                    <>
                      <span>Заказать звонок</span>
                      <Send className="w-3.5 h-3.5 text-[#D0112B]" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[10px] text-neutral-400 text-center leading-relaxed">
                Указывая свои персональные данные в полях заявки, вы соглашаетесь на их обработку в соответствии с политикой конфиденциальности.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
