import { useState } from 'react';
import { STORE_INFO } from '../data/storeData';
import { Phone, Send, MapPin, Clock, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function Contact({ prefilledMessage = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: prefilledMessage || '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [serverFeedback, setServerFeedback] = useState(null);
  const [prevPrefilledMessage, setPrevPrefilledMessage] = useState(prefilledMessage);

  // Sync if prefilledMessage prop changes
  if (prefilledMessage !== prevPrefilledMessage) {
    setPrevPrefilledMessage(prefilledMessage);
    if (prefilledMessage) {
      setFormData(prev => ({ ...prev, message: prefilledMessage }));
    }
  }

  const validateForm = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Пожалуйста, введите ваше имя';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Имя должно содержать не менее 2 символов';
    }

    const digitsOnly = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      errs.phone = 'Пожалуйста, укажите номер телефона';
    } else if (digitsOnly.length < 7) {
      errs.phone = 'Номер телефона слишком короткий (минимум 7 цифр)';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handlePhoneChange = (e) => {
    const val = e.target.value;
    setFormData(prev => ({ ...prev, phone: val }));
    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: null }));
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('loading');
    setServerFeedback(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setServerFeedback({
          type: 'success',
          message: data.message || 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.',
          name: formData.name,
          phone: formData.phone
        });
        // Reset form
        setFormData({ name: '', phone: '', message: '' });
      } else {
        // Backend returned error (e.g. CONFIG_MISSING or TELEGRAM_API_ERROR)
        setStatus('error');
        setServerFeedback({
          type: 'error',
          error: data.error,
          message: data.message || 'Не удалось отправить заявку. Пожалуйста, попробуйте связаться с нами напрямую.',
          details: data.details
        });
      }
    } catch (err) {
      console.error('Contact submit error:', err);
      setStatus('error');
      setServerFeedback({
        type: 'error',
        error: 'NETWORK_ERROR',
        message: 'Не удалось подключиться к серверу отправки. Проверьте соединение или свяжитесь через Telegram напрямую.'
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#080808] border-t border-[#181818] relative overflow-hidden">
      {/* Background ambient gold aura */}
      <div 
        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8A45D]/[0.04] blur-[170px] pointer-events-none rounded-full" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#262626] text-xs font-semibold text-[#C8A45D]">
            <Send className="w-3.5 h-3.5" />
            <span>Telegram Интеграция</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F5F3] tracking-tight leading-tight">
            Найдём технику под ваши задачи.
          </h2>
          <p className="text-base sm:text-lg text-[#8A8A8A]">
            Напишите нам или посетите магазин MixProduct.
          </p>
        </div>

        {/* Main Grid: Form (Left) & Direct Channels / Admin Info (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact / Request Form */}
          <div className="lg:col-span-7 bg-[#111111] border border-[#222222] rounded-2xl p-6 sm:p-9 shadow-2xl relative">
            <div className="space-y-2 mb-6">
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <span>Оставить заявку</span>
                <span className="text-[11px] font-normal text-[#8A8A8A] bg-[#181818] px-2.5 py-0.5 rounded border border-[#2B2B2B]">
                  Ответ в течение 10–15 минут
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-[#8A8A8A]">
                Вам не требуется устанавливать Telegram. Оставьте контакты, и администратор свяжется с вами для уточнения деталей.
              </p>
            </div>

            {/* Success State Notification */}
            {status === 'success' && serverFeedback && (
              <div className="p-5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-left space-y-3 mb-6 animate-fadeIn">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-base">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>{serverFeedback.message}</span>
                </div>
                <div className="text-xs text-emerald-200/80 space-y-1">
                  <p>Администратор MixProduct получил уведомление в Telegram и перезвонит вам по номеру <strong className="text-white">{serverFeedback.phone}</strong>.</p>
                </div>
                <button
                  type="button"
                  onClick={() => { setStatus('idle'); setServerFeedback(null); }}
                  className="mt-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-800/60 hover:bg-emerald-700/60 rounded-lg transition-colors"
                >
                  Отправить ещё одну заявку
                </button>
              </div>
            )}

            {/* Error State Notification (No Fake Integration) */}
            {status === 'error' && serverFeedback && (
              <div className="p-5 rounded-xl bg-amber-950/40 border border-amber-500/40 text-left space-y-3 mb-6 animate-fadeIn">
                <div className="flex items-start gap-2.5 text-amber-300 font-bold text-sm">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 text-amber-400 mt-0.5" />
                  <div>
                    <p className="leading-snug">{serverFeedback.message}</p>
                    {serverFeedback.error === 'CONFIG_MISSING' && (
                      <div className="mt-2 text-xs font-normal text-amber-200/90 space-y-1 bg-[#080808]/60 p-3 rounded border border-amber-500/20 font-mono">
                        <p className="text-[#C8A45D] font-bold font-sans">Требуется настройка Telegram-бота:</p>
                        <p>1. Добавьте в <span className="text-white font-bold">.env</span> токен <span className="text-[#E5CCA0]">TELEGRAM_BOT_TOKEN</span></p>
                        <p>2. Укажите чат ID <span className="text-[#E5CCA0]">TELEGRAM_CHAT_ID</span> для администратора {STORE_INFO.telegramAdmin}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <a
                    href={STORE_INFO.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold bg-[#1F1F1F] text-white hover:text-[#C8A45D] rounded-md border border-[#333]"
                  >
                    <Send className="w-3 h-3 text-[#C8A45D]" />
                    <span>Написать напрямую в Telegram</span>
                  </a>
                  <a
                    href={`tel:${STORE_INFO.phoneRaw}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold bg-[#1F1F1F] text-white hover:text-[#C8A45D] rounded-md border border-[#333]"
                  >
                    <Phone className="w-3 h-3 text-[#C8A45D]" />
                    <span>Позвонить</span>
                  </a>
                </div>
              </div>
            )}

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left" noValidate>
              
              {/* Field: Name */}
              <div className="space-y-1.5">
                <label htmlFor="customer-name" className="text-xs font-semibold text-[#D5D5D5] flex items-center justify-between">
                  <span>Ваше имя <span className="text-[#C8A45D]">*</span></span>
                  {errors.name && <span className="text-[11px] text-rose-400">{errors.name}</span>}
                </label>
                <div className="relative">
                  <input
                    id="customer-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Например, Рустам"
                    disabled={status === 'loading'}
                    className={`w-full px-4 py-3 text-sm bg-[#080808] text-white rounded-lg border ${
                      errors.name ? 'border-rose-500 focus:ring-rose-500' : 'border-[#2A2A2A] focus:border-[#C8A45D]'
                    } focus:outline-none focus:ring-1 focus:ring-[#C8A45D] transition-colors placeholder:text-[#555555]`}
                  />
                </div>
              </div>

              {/* Field: Phone */}
              <div className="space-y-1.5">
                <label htmlFor="customer-phone" className="text-xs font-semibold text-[#D5D5D5] flex items-center justify-between">
                  <span>Номер телефона <span className="text-[#C8A45D]">*</span></span>
                  {errors.phone && <span className="text-[11px] text-rose-400">{errors.phone}</span>}
                </label>
                <div className="relative">
                  <input
                    id="customer-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    placeholder="+998 90 123 45 67"
                    disabled={status === 'loading'}
                    className={`w-full px-4 py-3 text-sm bg-[#080808] text-white rounded-lg border ${
                      errors.phone ? 'border-rose-500 focus:ring-rose-500' : 'border-[#2A2A2A] focus:border-[#C8A45D]'
                    } focus:outline-none focus:ring-1 focus:ring-[#C8A45D] transition-colors placeholder:text-[#555555]`}
                  />
                </div>
              </div>

              {/* Field: Message / Interested item */}
              <div className="space-y-1.5">
                <label htmlFor="customer-message" className="text-xs font-semibold text-[#D5D5D5]">
                  Сообщение / Что интересует
                </label>
                <textarea
                  id="customer-message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Например: интересует iPhone 16 Pro Max 256GB, условия рассрочки или наличие..."
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 text-sm bg-[#080808] text-white rounded-lg border border-[#2A2A2A] focus:border-[#C8A45D] focus:outline-none focus:ring-1 focus:ring-[#C8A45D] transition-colors placeholder:text-[#555555] resize-none"
                />
              </div>

              {/* Form Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-bold text-[#080808] bg-[#C8A45D] hover:bg-[#D8B873] disabled:opacity-60 disabled:cursor-not-allowed rounded-lg transition-all duration-200 shadow-gold-sm hover:shadow-gold-md"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Отправка заявки...</span>
                    </>
                  ) : (
                    <>
                      <span>Оставить заявку</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <a
                  href={STORE_INFO.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-semibold text-[#F5F5F3] bg-[#181818] hover:bg-[#202020] border border-[#2B2B2B] hover:border-[#C8A45D]/60 rounded-lg transition-colors"
                >
                  <Send className="w-4 h-4 text-[#C8A45D]" />
                  <span>Написать в Telegram</span>
                </a>
              </div>

              <p className="text-[11px] text-[#666666] pt-1">
                Нажимая «Оставить заявку», вы соглашаетесь на обратную связь от менеджеров MixProduct.
              </p>

            </form>
          </div>

          {/* Right: Direct Channels, Admin Info & Store Details */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Telegram Store & Admin Badge Card */}
            <div className="p-6 rounded-2xl bg-[#111111] border border-[#222222] text-left space-y-4">
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-xl bg-[#161616] border border-[#2B2B2B] flex items-center justify-center text-[#C8A45D]">
                  <Send className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Онлайн
                </span>
              </div>

              <div>
                <span className="text-xs uppercase font-bold text-[#8A8A8A] tracking-wider block">
                  Telegram канал & Администратор
                </span>
                <p className="text-lg font-bold text-white mt-1">
                  @{STORE_INFO.telegramUsername}
                </p>
                <p className="text-xs text-[#C8A45D] font-medium mt-0.5">
                  Администратор: {STORE_INFO.telegramAdmin}
                </p>
              </div>

              <p className="text-xs text-[#8A8A8A] leading-relaxed">
                Все заявки с сайта мгновенно передаются администратору в Telegram, позволяя отвечать клиентам прямо с телефона.
              </p>

              <div className="pt-2">
                <a
                  href={STORE_INFO.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#181818] hover:bg-[#222222] border border-[#2F2F2F] hover:border-[#C8A45D]/60 rounded-lg transition-all duration-200"
                >
                  <Send className="w-3.5 h-3.5 text-[#C8A45D]" />
                  <span>Открыть канал @{STORE_INFO.telegramUsername}</span>
                </a>
              </div>
            </div>

            {/* Direct Phone Call Card */}
            <div className="p-6 rounded-2xl bg-[#111111] border border-[#222222] text-left space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-[#161616] border border-[#2B2B2B] flex items-center justify-center text-[#C8A45D]">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-xs text-[#8A8A8A]">09:00 — 22:00</span>
              </div>

              <div>
                <span className="text-xs uppercase font-bold text-[#8A8A8A] tracking-wider block">
                  Прямой телефон магазина
                </span>
                <a
                  href={`tel:${STORE_INFO.phoneRaw}`}
                  className="text-xl font-bold text-white hover:text-[#C8A45D] transition-colors block mt-1"
                >
                  {STORE_INFO.phone}
                </a>
              </div>

              <a
                href={`tel:${STORE_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-[#080808] bg-[#C8A45D] hover:bg-[#D8B873] rounded-lg transition-all duration-200 shadow-gold-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Позвонить</span>
              </a>
            </div>

            {/* Instagram & Store Info */}
            <div className="p-5 rounded-2xl bg-[#111111] border border-[#222222] text-left flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-xs uppercase font-bold text-[#8A8A8A] tracking-wider block">
                  Instagram
                </span>
                <p className="text-sm font-bold text-white">
                  @{STORE_INFO.instagramUsername}
                </p>
              </div>

              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#181818] hover:bg-[#222222] border border-[#2A2A2A] text-[#C8A45D] transition-colors"
                aria-label="Instagram MixProduct"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Physical Location Summary */}
            <div className="p-4 rounded-xl bg-[#0A0A0A] border border-[#1E1E1E] text-left space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <MapPin className="w-3.5 h-3.5 text-[#C8A45D]" />
                <span>{STORE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#8A8A8A]">
                <Clock className="w-3.5 h-3.5 text-[#C8A45D]" />
                <span>{STORE_INFO.hours}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
