import React from 'react';
import { useLanguage } from '../../i18n';
import { Globe2, Landmark, Compass, ShieldCheck } from 'lucide-react';
import { GoldBadge, GoldLine } from '../common/GoldAccent';
import { ScrollReveal } from '../common/ScrollReveal';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const icons = [Globe2, Landmark, Compass, ShieldCheck];

  return (
    <section id="dubai" className="relative py-24 bg-[#05131C] border-t border-navy-800">
      <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-6">
        
        {/* Editorial Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-16">
          
          {/* Left: Narrative Positioning */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal delay={0}>
              <div className="inline-flex items-center">
                <GoldBadge>{t.dubaiSection.sectionTag}</GoldBadge>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={80}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-white leading-tight">
                {t.dubaiSection.headline}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <GoldLine width="w-24" />
            </ScrollReveal>

            <ScrollReveal delay={240}>
              <p className="text-base sm:text-lg text-gold-300/90 font-light leading-relaxed">
                {t.dubaiSection.subheadline}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={320}>
              <div className="space-y-4 text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                <p>{t.dubaiSection.body1}</p>
                <p>{t.dubaiSection.body2}</p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Architectural Image Composition */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal delay={200}>
              <div className="relative border border-navy-700 bg-navy-950 p-3 shadow-2xl">
                <div className="overflow-hidden">
                  <img
                    src="/images/dubai-skyline.png"
                    alt="Dubai International Business District Skyline"
                    className="w-full h-[380px] object-cover filter brightness-90 contrast-105 transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#040E16]/90 via-transparent to-transparent pointer-events-none" />
                
                {/* Strategic Quote Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#061824]/95 border-l-2 border-gold-400">
                  <p className="text-xs font-serif italic text-slate-200">
                    "{t.dubaiSection.quote}"
                  </p>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400 block mt-1">
                    {t.dubaiSection.quoteAuthor}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-16 border-t border-navy-800">
          {t.dubaiSection.pillars.map((item, idx) => {
            const Icon = icons[idx] || Globe2;
            return (
              <ScrollReveal key={idx} delay={idx * 90} className="h-full">
                <div className="h-full p-6 bg-[#071F2D]/60 border border-navy-700/60 hover:border-gold-500/40 transition-colors">
                  <div className="w-9 h-9 border border-gold-500/30 bg-navy-900 flex items-center justify-center text-gold-400 mb-4">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-serif font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
