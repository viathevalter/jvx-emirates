import React from 'react';
import { useLanguage } from '../../i18n';
import { 
  Users2, 
  Laptop2, 
  Globe2, 
  Layers, 
  TrendingUp,
  ShieldCheck
} from 'lucide-react';
import { GoldBadge, GoldLine } from '../common/GoldAccent';
import { ScrollReveal } from '../common/ScrollReveal';

export const SocialProof: React.FC = () => {
  const { t } = useLanguage();

  const icons = [Users2, Laptop2, Globe2, Layers, TrendingUp];

  return (
    <section id="why-jvx" className="relative py-24 bg-[#040E16] border-t border-navy-800">
      <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-6">
        
        {/* Section Header */}
        <ScrollReveal delay={0}>
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center mb-3">
              <GoldBadge>{t.whyJvx.sectionTag}</GoldBadge>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-white mb-4 leading-tight">
              {t.whyJvx.headline}
            </h2>
            <GoldLine width="w-24" className="mb-4" />
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              {t.whyJvx.subheadline}
            </p>
          </div>
        </ScrollReveal>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {t.whyJvx.pillars.map((pillar, idx) => {
            const Icon = icons[idx] || ShieldCheck;

            return (
              <ScrollReveal key={idx} delay={idx * 80} className="h-full">
                <div className="relative h-full p-6 bg-[#061824]/90 border border-navy-700/70 hover:border-gold-500/50 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    {/* Top Icon and Index */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="p-2.5 bg-navy-900 border border-navy-700 text-gold-400 group-hover:border-gold-500/50 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono text-slate-400 font-semibold">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-gold-300 transition-colors">
                      {pillar.title}
                    </h3>

                    <div className="w-8 h-[1px] bg-gold-500/40 mb-3" />

                    <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Top Subtle Border Highlight */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent group-hover:via-gold-400 transition-all duration-300" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Executive Guarantee Line */}
        <ScrollReveal delay={250}>
          <div className="p-6 bg-[#061824] border border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-gold-400 shrink-0" />
              <span>
                {t.whyJvx.guarantee}
              </span>
            </div>
            <span className="text-gold-400/80 font-mono uppercase tracking-wider text-[11px]">
              {t.whyJvx.deskTag}
            </span>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
