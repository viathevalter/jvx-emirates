import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../i18n';
import { Menu, X, Globe } from 'lucide-react';
import { JvxLogo } from '../common/JvxLogo';
import type { Language } from '../../types';

interface HeaderProps {
  onOpenConsultation: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation, onNavigateToSection }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    onNavigateToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#040E16]/95 backdrop-blur-md border-b border-navy-800 shadow-2xl py-4'
          : 'bg-gradient-to-b from-[#040E16]/95 via-[#040E16]/50 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-6">
        <div className="flex items-center justify-between">
          {/* Official Brand Logo (Transparent Background) */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center group focus:outline-none py-1 mr-6 sm:mr-8 xl:mr-12 shrink-0"
            aria-label="JVX International Business"
          >
            <JvxLogo variant="white-gold" className="h-9 sm:h-10 md:h-12 w-auto group-hover:opacity-90 transition-opacity" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8" aria-label="Main Navigation">
            <button
              onClick={() => handleNavClick('services')}
              className="text-xs tracking-[0.15em] uppercase text-slate-300 hover:text-white transition-colors py-1 font-medium focus:outline-none cursor-pointer"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => handleNavClick('approach')}
              className="text-xs tracking-[0.15em] uppercase text-slate-300 hover:text-white transition-colors py-1 font-medium focus:outline-none cursor-pointer"
            >
              {t.nav.howItWorks}
            </button>
            <button
              onClick={() => handleNavClick('model')}
              className="text-xs tracking-[0.15em] uppercase text-slate-300 hover:text-white transition-colors py-1 font-medium focus:outline-none cursor-pointer"
            >
              {t.nav.operatingModel}
            </button>
            <button
              onClick={() => handleNavClick('why-jvx')}
              className="text-xs tracking-[0.15em] uppercase text-slate-300 hover:text-white transition-colors py-1 font-medium focus:outline-none cursor-pointer"
            >
              {t.nav.whyJvx}
            </button>
            <button
              onClick={() => handleNavClick('dubai')}
              className="text-xs tracking-[0.15em] uppercase text-slate-300 hover:text-white transition-colors py-1 font-medium focus:outline-none cursor-pointer"
            >
              {t.nav.dubaiBase}
            </button>
            <button
              onClick={() => handleNavClick('global-flow')}
              className="text-xs tracking-[0.15em] uppercase text-gold-400 hover:text-white transition-colors py-1 font-medium focus:outline-none cursor-pointer"
            >
              {t.nav.globalFlow}
            </button>
          </nav>

          {/* Right Actions: Language Switcher (EN | PT | ES | AR) & Talk to JVX CTA */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Language Switcher */}
            <div className="flex items-center border border-navy-700/80 bg-navy-900/60 rounded px-2 py-1 text-xs">
              <Globe className="w-3.5 h-3.5 text-gold-400 mr-1.5 rtl:mr-0 rtl:ml-1.5 opacity-80" />
              {(['en', 'pt', 'es', 'ar'] as Language[]).map((lang, idx) => (
                <React.Fragment key={lang}>
                  {idx > 0 && <span className="text-navy-600 mx-0.5">|</span>}
                  <button
                    type="button"
                    onClick={() => setLanguage(lang)}
                    className={`px-1.5 py-0.5 rounded transition-colors font-medium text-[11px] uppercase cursor-pointer ${
                      language === lang
                        ? 'text-gold-300 font-bold bg-navy-800'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                    aria-label={`Switch to ${lang.toUpperCase()}`}
                  >
                    {lang}
                  </button>
                </React.Fragment>
              ))}
            </div>

            {/* Talk to JVX CTA Button */}
            <button
              onClick={onOpenConsultation}
              className="border border-[#c5a880]/80 hover:bg-[#c5a880] text-[#c5a880] hover:text-[#040E16] px-5 py-2.5 text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-300 shadow-sm focus:outline-none cursor-pointer"
            >
              {t.nav.contact}
            </button>
          </div>

          {/* Mobile Menu Button & Lang Switcher */}
          <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
            <div className="flex items-center border border-navy-700 bg-navy-900/90 rounded px-1.5 py-1 text-xs">
              {(['en', 'pt', 'es', 'ar'] as Language[]).map((lang, idx) => (
                <React.Fragment key={lang}>
                  {idx > 0 && <span className="text-navy-600 mx-0.5 text-[10px]">|</span>}
                  <button
                    type="button"
                    onClick={() => setLanguage(lang)}
                    className={`px-1 py-0.5 uppercase text-[10px] sm:text-[11px] font-medium transition-colors ${
                      language === lang ? 'text-gold-300 font-bold bg-navy-800 rounded' : 'text-slate-400'
                    }`}
                  >
                    {lang}
                  </button>
                </React.Fragment>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white border border-navy-700 bg-navy-900/80 rounded focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-gold-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#040E16]/98 border-b border-navy-800 px-6 pt-4 pb-8 space-y-4 shadow-2xl backdrop-blur-xl animate-fadeIn">
          <div className="flex flex-col space-y-3 pt-2">
            <button
              onClick={() => handleNavClick('services')}
              className="text-left rtl:text-right text-sm uppercase tracking-wider text-slate-200 hover:text-gold-400 py-2 border-b border-navy-900"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => handleNavClick('approach')}
              className="text-left rtl:text-right text-sm uppercase tracking-wider text-slate-200 hover:text-gold-400 py-2 border-b border-navy-900"
            >
              {t.nav.howItWorks}
            </button>
            <button
              onClick={() => handleNavClick('model')}
              className="text-left rtl:text-right text-sm uppercase tracking-wider text-slate-200 hover:text-gold-400 py-2 border-b border-navy-900"
            >
              {t.nav.operatingModel}
            </button>
            <button
              onClick={() => handleNavClick('why-jvx')}
              className="text-left rtl:text-right text-sm uppercase tracking-wider text-slate-200 hover:text-gold-400 py-2 border-b border-navy-900"
            >
              {t.nav.whyJvx}
            </button>
            <button
              onClick={() => handleNavClick('dubai')}
              className="text-left rtl:text-right text-sm uppercase tracking-wider text-slate-200 hover:text-gold-400 py-2 border-b border-navy-900"
            >
              {t.nav.dubaiBase}
            </button>
            <button
              onClick={() => handleNavClick('global-flow')}
              className="text-left rtl:text-right text-sm uppercase tracking-wider text-gold-400 hover:text-white py-2 border-b border-navy-900"
            >
              {t.nav.globalFlow}
            </button>
          </div>

          <div className="pt-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 text-center text-xs font-semibold tracking-wider uppercase bg-gold-500 text-navy-950 hover:bg-gold-400 rounded transition-colors shadow-lg"
            >
              {t.nav.contact}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
