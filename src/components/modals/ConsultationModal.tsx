import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../i18n';
import { X, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { GoldLine } from '../common/GoldAccent';
import { JvxLogo } from '../common/JvxLogo';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    name?: string;
    email?: string;
    phone?: string;
    country?: string;
    companyName?: string;
    primaryArea?: string;
  };
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialData,
}) => {
  const { t, language } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    companyName: '',
    area: 'marketing',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        fullName: initialData.name || prev.fullName,
        email: initialData.email || prev.email,
        phone: initialData.phone || prev.phone,
        country: initialData.country || prev.country,
        companyName: initialData.companyName || prev.companyName,
        area: initialData.primaryArea || prev.area,
      }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const consultationLead = {
      ...formData,
      timestamp: new Date().toISOString(),
      language,
      source: 'Direct Consultation Modal',
    };

    try {
      const existing = JSON.parse(localStorage.getItem('jvx_consultations') || '[]');
      existing.push(consultationLead);
      localStorage.setItem('jvx_consultations', JSON.stringify(existing));
    } catch (err) {
      console.warn('Local storage error', err);
    }

    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-xl bg-[#061824] border border-gold-500/40 text-slate-200 shadow-2xl p-5 sm:p-8 max-h-[90vh] overflow-y-auto rounded-xl sm:rounded-none my-auto">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-5 right-5 p-1 text-slate-400 hover:text-white border border-navy-700 hover:border-gold-400 rounded transition-colors focus:outline-none cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6">
              <JvxLogo variant="white-gold" className="h-7 w-auto mb-3" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400 block mb-2">
                {t.modalConsultation.headerTag}
              </span>
              <h2 className="text-2xl font-serif font-bold text-white mb-2">
                {t.modalConsultation.title}
              </h2>
              <GoldLine width="w-16" className="mb-3" />
              <p className="text-xs sm:text-sm text-slate-300 font-light">
                {t.modalConsultation.subtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-300 mb-1">
                  {t.modalConsultation.nameLabel} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Alexander Vance"
                  className="w-full px-3.5 py-2.5 bg-navy-950/80 border border-navy-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-300 mb-1">
                    {t.modalConsultation.emailLabel} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alexander@enterprise.com"
                    className="w-full px-3.5 py-2.5 bg-navy-950/80 border border-navy-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-300 mb-1">
                    {t.modalConsultation.phoneLabel} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +971 50 000 0000"
                    className="w-full px-3.5 py-2.5 bg-navy-950/80 border border-navy-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-300 mb-1">
                    {t.modalConsultation.companyLabel}
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Vance Global Ltd."
                    className="w-full px-3.5 py-2.5 bg-navy-950/80 border border-navy-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-300 mb-1">
                    {t.modalConsultation.countryLabel}
                  </label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="e.g. United Kingdom / Spain / USA"
                    className="w-full px-3.5 py-2.5 bg-navy-950/80 border border-navy-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-300 mb-1">
                  {t.modalConsultation.areaLabel}
                </label>
                <select
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-navy-950/80 border border-navy-700 text-sm text-white focus:outline-none focus:border-gold-400"
                >
                  <option value="marketing">{t.modalConsultation.marketingAreaOption}</option>
                  <option value="finance_admin">{t.services.items.finance_admin.title}</option>
                  <option value="hr_admin">{t.services.items.hr_admin.title}</option>
                  <option value="procurement">{t.services.items.procurement.title}</option>
                  <option value="commercial">{t.services.items.commercial.title}</option>
                  <option value="documentation">{t.services.items.documentation.title}</option>
                  <option value="customer_support">{t.services.items.customer_support.title}</option>
                  <option value="executive_assistance">{t.services.items.executive_assistance.title}</option>
                  <option value="international">{t.services.items.international.title}</option>
                  <option value="combination">{t.modalConsultation.combinedAreaOption}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-300 mb-1">
                  {t.modalConsultation.messageLabel}
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.modalConsultation.messagePlaceholder}
                  className="w-full px-3.5 py-2 bg-navy-950/80 border border-navy-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-400 resize-none"
                />
              </div>

              <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-400">
                <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{t.modalConsultation.confidentialityNotice}</span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-gold-500 text-navy-950 hover:bg-gold-400 text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{t.modalConsultation.submitBtn}</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-serif font-bold text-white">
              {t.modalConsultation.successTitle}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              {t.modalConsultation.successMsg}
            </p>

            <div className="pt-4">
              <button
                type="button"
                onClick={handleClose}
                className="px-6 py-2.5 bg-navy-900 border border-navy-700 text-slate-300 hover:text-white text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                {t.modalConsultation.closeBtn}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
