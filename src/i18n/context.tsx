import React, { createContext, useContext, useState, useEffect } from 'react';
import { en } from './en';
import { pt } from './pt';
import { es } from './es';
import { ar } from './ar';
import type { Language } from '../types';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof en;
}

const translations: Record<Language, typeof en> = {
  pt,
  en,
  es,
  ar,
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('jvx_preferred_lang') as Language;
    if (saved === 'en' || saved === 'es' || saved === 'pt' || saved === 'ar') return saved;
    const browser = navigator.language.slice(0, 2);
    if (browser === 'es') return 'es';
    if (browser === 'pt') return 'pt';
    if (browser === 'ar') return 'ar';
    return 'en'; // Default to English
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('jvx_preferred_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language] || translations.en,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useLanguage = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
