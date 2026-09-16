import React from 'react';
import { useLanguage } from '../../i18n';
import { Shield, Building, Award, CheckCircle } from 'lucide-react';
import { GoldLine } from '../common/GoldAccent';
import { ScrollReveal } from '../common/ScrollReveal';

export const TrustMetrics: React.FC = () => {
  const { t } = useLanguage();

  const iconMap = [Building, Shield, Award, CheckCircle];

  return (
    <section className="relative py-24 bg-[#061824] border-t border-b border-navy-800/80">
      <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-6">
        
        {/* Section Header */}
        <ScrollReveal delay={0}>
          <div className="max-w-3xl mb-16">
            <span className="text-[11px] font-medium tracking-ultra uppercase text-gold-400 block mb-2">
              {t.trust.sectionTag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white mb-4">
              {t.trust.headline}
            </h2>
            <GoldLine width="w-24" className="mb-4" />
            <p className="text-base text-slate-300 font-light leading-relaxed">
              {t.trust.subheadline}
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Large Metrics Cards with Stagger Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {t.trust.metrics.map((metric, idx) => {
            const Icon = iconMap[idx] || Shield;
            return (
              <ScrollReveal key={idx} delay={idx * 90} className="h-full">
                <div className="relative h-full p-6 bg-[#040E16]/90 border border-navy-700/60 hover:border-gold-500/40 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl sm:text-4xl font-serif font-bold text-gold-400">
                      {metric.value}
                    </span>
                    <Icon className="w-5 h-5 text-navy-500" />
                  </div>
                  <div className="h-[1px] w-8 bg-gold-500/40 mb-3" />
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    {metric.label}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Regulatory & Institutional Acumen Badges */}
        <div className="pt-8 border-t border-navy-800/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.trust.badges.map((badge, idx) => (
              <ScrollReveal key={idx} delay={200 + idx * 80}>
                <div className="flex items-center gap-3 p-4 bg-navy-900/40 border border-navy-800 text-xs text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
                  <span className="leading-snug">{badge}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
