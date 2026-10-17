"use client";

import { useState } from "react";
import { Upload, CheckCircle2, Paperclip, Send, X, ArrowUpRight } from "lucide-react";

interface OrderFormProps {
  initialSubject?: string;
}

export default function OrderForm({ initialSubject }: OrderFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: initialSubject ? `Здравствуйте! Интересует: ${initialSubject}` : "",
  });
  const [fileName, setFileName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <section id="order" className="py-24 md:py-32 bg-[#FAFAFA] border-b border-neutral-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Guidelines */}
          <div className="lg:col-span-5 space-y-6">
            <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 flex items-center gap-2">
              <span>// 05 · Обратная связь</span>
              <span className="w-8 h-[1px] bg-neutral-300" />
              <span className="text-neutral-400">Формирование заказа</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#121212] leading-tight">
              Напишите нам для расчета сметы <br />
              <strong className="font-semibold">и подбора крепежа</strong>
            </h2>

            <p className="text-base text-neutral-600 leading-relaxed">
              Вы можете сформировать заказ, написав нам, что вам требуется, либо прикрепить готовую смету, чертеж или спецификацию в любом удобном формате (Excel, PDF, DWG, JPG).
            </p>

            <div className="p-6 rounded-2xl bg-[#F4F3EF] border border-neutral-200/80 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-500">
                Что происходит после отправки?
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="font-mono text-[#D0112B] font-bold">01.</span>
                  <span>Инженер-комплектовщик рассчитывает стоимость за 15–30 минут.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-[#D0112B] font-bold">02.</span>
                  <span>Сверяем складские остатки в Санкт-Петербурге и сроки поставки.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-[#D0112B] font-bold">03.</span>
                  <span>Связываемся с вами с готовым коммерческим предложением.</span>
                </li>
              </ul>
            </div>

            <div className="pt-2 text-xs font-mono text-neutral-500">
              Прямой телефон отдела продаж: <br />
              <a href="tel:+78122094539" className="text-base font-semibold text-neutral-900 hover:text-[#D0112B]">
                (812) 209-45-39
              </a>{" "}
              · sale@krepgarant.ru
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200/90 shadow-xl relative overflow-hidden">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-900">
                    Заявка успешно принята!
                  </h3>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                    Спасибо за обращение в компанию «Крепгарант». Наш менеджер уже изучает вашу заявку и свяжется с вами по номеру{" "}
                    <span className="font-mono font-semibold text-neutral-900">{formData.phone}</span> в течение 20 минут.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", phone: "", email: "", message: "" });
                      setFileName(null);
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider bg-neutral-100 hover:bg-neutral-200 text-neutral-800 transition-colors"
                  >
                    Отправить еще одну заявку
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">
                        Ваше имя <span className="text-[#D0112B]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Константин / ООО «СтройТех»"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:outline-hidden focus:border-[#D0112B] focus:bg-white transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">
                        Телефон для связи <span className="text-[#D0112B]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+7 (999) 000-00-00"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:outline-hidden focus:border-[#D0112B] focus:bg-white transition-all text-sm font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">
                      Электронная почта
                    </label>
                    <input
                      type="email"
                      placeholder="example@company.ru"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:outline-hidden focus:border-[#D0112B] focus:bg-white transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">
                      Перечень продукции или комментарий
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Укажите типоразмеры, стандарты (ГОСТ/DIN), требуемый объем, покрытие или особые требования..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:outline-hidden focus:border-[#D0112B] focus:bg-white transition-all text-sm resize-none"
                    />
                  </div>

                  {/* File Upload Drag & Drop Box */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">
                      Прикрепить файл спецификации или смету (до 25 Мб)
                    </label>
                    <div className="relative border-2 border-dashed border-neutral-300 hover:border-[#D0112B] rounded-2xl p-4 transition-colors bg-neutral-50/50 text-center">
                      <input
                        type="file"
                        id="file-upload"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      {fileName ? (
                        <div className="flex items-center justify-center gap-2 text-sm font-medium text-neutral-800">
                          <Paperclip className="w-4 h-4 text-[#D0112B]" />
                          <span className="truncate max-w-xs">{fileName}</span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setFileName(null);
                            }}
                            className="p-1 text-neutral-400 hover:text-neutral-700"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center py-2">
                          <Upload className="w-6 h-6 text-neutral-400 mb-1" />
                          <span className="text-xs text-neutral-600 font-medium">
                            Перетащите файл сюда или нажмите для выбора
                          </span>
                          <span className="text-[11px] text-neutral-400 font-mono mt-0.5">
                            XLS, XLSX, PDF, DOC, DWG, ZIP
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 px-8 rounded-full bg-[#121212] hover:bg-[#42131E] text-white transition-all text-sm font-semibold uppercase tracking-wider shadow-lg hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {loading ? (
                        <span>Отправка данных...</span>
                      ) : (
                        <>
                          <span>Отправить заявку</span>
                          <Send className="w-4 h-4 text-[#D0112B]" />
                        </>
                      )}
                    </button>

                    <p className="mt-3 text-[11px] text-neutral-500 text-center leading-relaxed">
                      Нажимая на кнопку «Отправить заявку», вы даете согласие на обработку персональных данных в соответствии с Федеральным законом № 152-ФЗ.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
