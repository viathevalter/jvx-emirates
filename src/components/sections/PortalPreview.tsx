import React from 'react';
import { useLanguage } from '../../i18n';
import { 
  Laptop, 
  Globe2, 
  Sliders, 
  Workflow, 
  Radio, 
  ArrowRight,
  Building2,
  CheckCircle2
} from 'lucide-react';
import { GoldBadge, GoldLine } from '../common/GoldAccent';
import { ScrollReveal } from '../common/ScrollReveal';

interface PortalPreviewProps {
  onDiscoverProcess?: () => void;
}

export const PortalPreview: React.FC<PortalPreviewProps> = ({ onDiscoverProcess }) => {
  const { t } = useLanguage();

  const pillarIcons = [Laptop, Globe2, Sliders, Workflow, Radio];

  return (
    <section id="model" className="relative py-24 bg-[#040E16] border-t border-navy-800">
      
      {/* Ambient Architectural Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#0B3248]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal delay={0}>
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center mb-3">
              <GoldBadge>{t.remoteModel.sectionTag}</GoldBadge>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-white mb-4 leading-tight">
              {t.remoteModel.headline}
            </h2>
            <GoldLine width="w-24" className="mb-4" />
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              {t.remoteModel.subheadline}
            </p>
          </div>
        </ScrollReveal>

        {/* Operating Architecture Visual Display */}
        <ScrollReveal delay={150}>
          <div className="relative border border-navy-700/80 bg-[#061824]/95 shadow-2xl p-5 sm:p-8 md:p-12 backdrop-blur-md mb-12">
            
            {/* Architectural Header Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-8 border-b border-navy-800 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono font-semibold tracking-wider text-slate-200 uppercase">
                    {t.remoteModel.badge}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  {t.remoteModel.status}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center px-3 py-1 bg-navy-900 border border-gold-500/30 text-gold-300 text-xs font-mono">
                  {t.remoteModel.activeTag}
                </span>
              </div>
            </div>

            {/* 5 Operating Model Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {t.remoteModel.pillars.map((pillar, idx) => {
                const Icon = pillarIcons[idx] || Laptop;

                return (
                  <div 
                    key={idx}
                    className="p-5 bg-navy-950/70 border border-navy-800 hover:border-gold-500/50 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-mono text-gold-400 font-bold">
                          {pillar.tag}
                        </span>
                        <div className="p-2 bg-navy-900 border border-navy-800 text-gold-400">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <h4 className="text-base font-serif font-bold text-white mb-2">
                        {pillar.title}
                      </h4>

                      <p className="text-xs text-slate-300 font-light leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-navy-900 flex items-center text-[10px] font-mono text-slate-400">
                      <CheckCircle2 className="w-3 h-3 text-gold-400/80 mr-1.5 shrink-0" />
                      <span>{t.remoteModel.standardizedTag}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Operating Integration Bottom Note */}
            <div className="mt-8 pt-6 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{t.remoteModel.toolsNote}</span>
              </div>

              {onDiscoverProcess && (
                <button
                  type="button"
                  onClick={onDiscoverProcess}
                  className="inline-flex items-center gap-2 text-gold-400 hover:text-white transition-colors uppercase font-mono tracking-wider font-semibold cursor-pointer shrink-0"
                >
                  <span>{t.remoteModel.howItWorksCta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
