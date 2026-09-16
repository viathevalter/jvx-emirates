import React from 'react';
import { useLanguage } from '../../i18n';
import { Layers, Users, Globe2, ArrowRight } from 'lucide-react';
import { GoldLine, GoldBadge } from '../common/GoldAccent';
import { ScrollReveal } from '../common/ScrollReveal';

interface ProblemSectionProps {
  onExploreServices?: () => void;
  onSelectProfile?: (profile: any) => void;
}

export const ProfileSelection: React.FC<ProblemSectionProps> = ({ onExploreServices }) => {
  const { t } = useLanguage();

  const icons = [Layers, Users, Globe2];

  const handleExplore = () => {
    if (onExploreServices) {
      onExploreServices();
    } else {
      const el = document.getElementById('services');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="problem" className="relative py-24 bg-[#05131C] border-t border-navy-800/80">
      {/* Background Architectural Watermark */}
      <div className="absolute top-0 right-8 text-[160px] font-serif font-black text-navy-900/20 select-none pointer-events-none -translate-y-16">
        JVX
      </div>

      <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal delay={0}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center mb-3">
              <GoldBadge>{t.problem.sectionTag}</GoldBadge>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white mb-4 leading-snug">
              {t.problem.headline}
            </h2>
            <div className="flex justify-center mb-6">
              <GoldLine width="w-24" />
            </div>
            <p className="text-base text-slate-300 font-light leading-relaxed">
              {t.problem.subheadline}
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Operational Drag Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {t.problem.pillars.map((pillar, idx) => {
            const Icon = icons[idx] || Layers;

            return (
              <ScrollReveal key={idx} delay={idx * 100} className="h-full">
                <div className="group relative flex flex-col justify-between h-full p-6 sm:p-8 bg-[#071F2D]/70 border border-navy-700/60 hover:border-gold-500/50 transition-all duration-300">
                  <div>
                    {/* Top Tag & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[10px] tracking-widest uppercase font-mono text-gold-400 font-semibold">
                        {pillar.tag}
                      </span>
                      <div className="p-2.5 rounded border border-navy-700 bg-navy-900/80 text-slate-400 group-hover:text-gold-300 group-hover:border-gold-400 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-white mb-4 tracking-wide">
                      {pillar.title}
                    </h3>

                    <div className="w-full h-[1px] bg-gradient-to-r from-gold-500/40 via-gold-500/20 to-transparent mb-5" />

                    <p className="text-sm text-slate-300 font-light leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Bottom Accent Bar on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Connecting Banner */}
        <ScrollReveal delay={300}>
          <div className="p-6 sm:p-8 bg-[#040E16] border border-navy-700/80 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl text-center sm:text-left">
              <span className="text-xs font-mono uppercase tracking-wider text-gold-400 block mb-1">
                {t.problem.alternativeTag}
              </span>
              <p className="text-sm text-slate-200 font-light">
                {t.problem.alternativeTitle}
              </p>
            </div>
            <button
              onClick={handleExplore}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 text-navy-950 hover:bg-gold-400 text-xs font-bold uppercase tracking-wider transition-all duration-300 shrink-0 cursor-pointer shadow-lg"
            >
              <span>{t.problem.exploreCta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
