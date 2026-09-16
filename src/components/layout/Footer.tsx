import React from 'react';
import { useLanguage } from '../../i18n';
import { Mail, MapPin } from 'lucide-react';
import { JvxLogo } from '../common/JvxLogo';
import type { Language } from '../../types';

interface FooterProps {
  onOpenConsultation: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation, onNavigateToSection }) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <footer className="bg-[#030B11] border-t border-navy-800 text-slate-400 text-xs">
      <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-6 pt-16 pb-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-navy-800/80">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <JvxLogo variant="white-gold" className="h-14 sm:h-16 w-auto" />
            </div>

            <p className="text-xs font-serif italic text-gold-300/80 pt-1">
              "{t.footer.tagline}"
            </p>

            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
              {t.footer.description}
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>Dubai, United Arab Emirates</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>contact@jvx-international.com</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
              {t.footer.servicesTitle}
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateToSection('services')}
                  className="hover:text-gold-300 transition-colors text-left text-gold-400/90 font-medium cursor-pointer"
                >
                  {t.footer.marketing} (Lead Service)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateToSection('services')}
                  className="hover:text-gold-300 transition-colors text-left cursor-pointer"
                >
                  {t.footer.financeAdmin}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateToSection('services')}
                  className="hover:text-gold-300 transition-colors text-left cursor-pointer"
                >
                  {t.footer.hrAdmin}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateToSection('services')}
                  className="hover:text-gold-300 transition-colors text-left cursor-pointer"
                >
                  {t.footer.procurement}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateToSection('services')}
                  className="hover:text-gold-300 transition-colors text-left cursor-pointer"
                >
                  {t.footer.commercial}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateToSection('services')}
                  className="hover:text-gold-300 transition-colors text-left cursor-pointer"
                >
                  {t.footer.customerSupport}
                </button>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
              {t.footer.companyTitle}
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateToSection('dubai')}
                  className="hover:text-gold-300 transition-colors text-left cursor-pointer"
                >
                  {t.footer.aboutUs}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateToSection('model')}
                  className="hover:text-gold-300 transition-colors text-left cursor-pointer"
                >
                  {t.footer.operatingModel}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateToSection('approach')}
                  className="hover:text-gold-300 transition-colors text-left cursor-pointer"
                >
                  {t.footer.howItWorks}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateToSection('global-flow')}
                  className="hover:text-gold-300 transition-colors text-gold-400/90 text-left rtl:text-right cursor-pointer"
                >
                  {t.nav.globalFlow}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateToSection('why-jvx')}
                  className="hover:text-gold-300 transition-colors text-left rtl:text-right cursor-pointer"
                >
                  {t.nav.whyJvx}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="hover:text-gold-300 transition-colors text-gold-400 font-medium text-left rtl:text-right cursor-pointer"
                >
                  {t.footer.consultation}
                </button>
              </li>
            </ul>
          </div>

          {/* Languages & Legal Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
              {t.footer.language}
            </h3>
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              {(['en', 'pt', 'es', 'ar'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLanguage(lang)}
                  className={`px-2.5 py-1 rounded border text-xs font-medium transition-colors cursor-pointer ${
                    language === lang
                      ? 'border-gold-400 bg-gold-500/20 text-gold-300 font-bold'
                      : 'border-navy-700 bg-navy-950 text-slate-400 hover:text-white'
                  }`}
                >
                  {lang === 'en' ? 'EN' : lang === 'pt' ? 'PT' : lang === 'es' ? 'ES' : 'AR'}
                </button>
              ))}
            </div>
            
            <div className="pt-4 space-y-1.5 text-[11px] text-slate-500">
              <p className="hover:text-slate-400 cursor-pointer">{t.footer.privacy}</p>
              <p className="hover:text-slate-400 cursor-pointer">{t.footer.terms}</p>
              <p className="hover:text-slate-400 cursor-pointer">{t.footer.disclaimer}</p>
            </div>
          </div>

        </div>

        {/* Regulatory Notice */}
        <div className="py-6 border-b border-navy-800/80 text-[11px] text-slate-500 leading-relaxed font-light">
          <p>{t.footer.complianceText}</p>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {t.footer.rights}</p>
          <p className="font-mono text-slate-600">
            {t.footer.headquartersLabel}
          </p>
        </div>

      </div>
    </footer>
  );
};
