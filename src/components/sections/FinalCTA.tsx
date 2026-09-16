import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../i18n';
import { ChevronRight, Compass } from 'lucide-react';
import { GoldBadge } from '../common/GoldAccent';
import { ScrollReveal } from '../common/ScrollReveal';

interface FinalCTAProps {
  onBookConsultation: () => void;
  onFindPath: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onBookConsultation, onFindPath }) => {
  const { t } = useLanguage();
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative py-24 sm:py-32 bg-[#040E16] overflow-hidden border-t border-navy-800">
      
      {/* Background Architectural Composition with Subtle Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-10 filter grayscale contrast-125 will-change-transform"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80")',
          transform: `translateY(${Math.min((offsetY - 2500) * 0.05, 30)}px)`,
        }}
      />

      {/* Subtle Gold Horizon Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        <ScrollReveal delay={0}>
          <div className="inline-flex items-center mb-4">
            <GoldBadge>{t.finalCta.badge}</GoldBadge>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-white mb-6 leading-tight">
            {t.finalCta.headline}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-base sm:text-lg text-slate-300 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            {t.finalCta.subheadline}
          </p>
        </ScrollReveal>

        {/* Dual Actions */}
        <ScrollReveal delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={onBookConsultation}
              className="w-full sm:w-auto px-8 py-4 text-xs font-semibold uppercase tracking-widest bg-gold-500 text-navy-950 hover:bg-gold-400 transition-all duration-300 shadow-2xl flex items-center justify-center gap-2 focus:outline-none"
            >
              <span>{t.finalCta.primaryBtn}</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={onFindPath}
              className="w-full sm:w-auto px-8 py-4 text-xs font-semibold uppercase tracking-widest border border-navy-700 bg-navy-900/60 hover:bg-navy-800 text-slate-200 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none"
            >
              <Compass className="w-4 h-4 text-gold-400" />
              <span>{t.finalCta.secondaryBtn}</span>
            </button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p className="text-[11px] text-slate-500 font-light">
            {t.finalCta.disclaimer}
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
};
