import React from 'react';
import { useLanguage } from '../../i18n';
import { 
  Percent, 
  Landmark, 
  Globe2, 
  ShieldCheck, 
  ArrowRight, 
  Building2, 
  ExternalLink,
  CheckCircle2,
  FileCheck
} from 'lucide-react';
import { GoldBadge, GoldLine } from '../common/GoldAccent';
import { ScrollReveal } from '../common/ScrollReveal';

export const GlobalFlowSection: React.FC = () => {
  const { t } = useLanguage();

  const advantageIcons = [Percent, Landmark, Globe2, ShieldCheck];

  return (
    <section id="global-flow" className="relative py-24 bg-[#030B11] border-t border-navy-800 overflow-hidden">
      {/* Subtle Background Glow & Grid */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#0B3248]/15 rounded-full blur-3xl pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(197, 168, 128, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(197, 168, 128, 0.3) 1px, transparent 1px)`,
          backgroundSize: '72px 72px',
        }}
      />

      <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal delay={0}>
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center mb-3">
              <GoldBadge>{t.globalFlow.sectionTag}</GoldBadge>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-white mb-4 leading-tight">
              {t.globalFlow.headline}
            </h2>
            <GoldLine width="w-24" className="mb-4" />
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              {t.globalFlow.subheadline}
            </p>
          </div>
        </ScrollReveal>

        {/* 1. THE 4 FZCO OPERATIONAL ADVANTAGES GRID */}
        <div className="mb-20">
          <ScrollReveal delay={50}>
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-navy-800">
              <span className="text-xs font-mono uppercase tracking-widest text-gold-400 font-semibold">
                {t.globalFlow.advantagesTitle}
              </span>
              <span className="text-xs text-slate-400 font-mono hidden sm:inline-block">
                IFZA REGULATED · DUBAI SILICON OASIS
              </span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.globalFlow.advantages.map((adv, idx) => {
              const Icon = advantageIcons[idx] || ShieldCheck;

              return (
                <ScrollReveal key={idx} delay={idx * 80} className="h-full">
                  <div className="relative h-full p-6 sm:p-7 bg-[#061824]/80 border border-navy-700/80 hover:border-gold-400 transition-all duration-300 shadow-xl flex flex-col justify-between group">
                    <div>
                      {/* Top Metric Header */}
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-2xl sm:text-3xl font-serif font-bold text-gold-400 group-hover:text-gold-300 transition-colors">
                          {adv.num}
                        </span>
                        <div className="p-2.5 bg-navy-900 border border-navy-700 text-gold-400 group-hover:border-gold-400 transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <h3 className="text-lg font-serif font-bold text-white mb-2 leading-snug group-hover:text-gold-200 transition-colors">
                        {adv.title}
                      </h3>

                      <p className="text-xs text-slate-300 font-light leading-relaxed">
                        {adv.desc}
                      </p>
                    </div>

                    {/* Bottom Indicator Accent */}
                    <div className="w-8 h-[1px] bg-gold-500/30 group-hover:w-full group-hover:bg-gold-400 transition-all duration-500 mt-6" />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* 2. UNIFIED GLOBAL INVOICING FLOW DIAGRAM */}
        <ScrollReveal delay={150}>
          <div className="relative mb-20 bg-gradient-to-br from-[#061824] via-[#05131C] to-[#040E16] border border-gold-500/40 p-6 sm:p-10 lg:p-12 shadow-2xl">
            {/* Ambient Corner Accents */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-10 border-b border-navy-800 gap-4">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-widest text-gold-400 block mb-1">
                  {t.globalFlow.flowTitle}
                </span>
                <p className="text-xs sm:text-sm text-slate-300 font-light">
                  {t.globalFlow.flowSubtitle}
                </p>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-gold-500/10 border border-gold-500/30 rounded text-gold-300 text-xs font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                <span>FZCO CONTRACTUAL GUARANTEE</span>
              </div>
            </div>

            {/* The 3 Connected Nodes */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative items-stretch">
              {t.globalFlow.nodes.map((node, idx) => (
                <div key={idx} className="relative flex flex-col justify-between p-6 bg-[#040E16]/90 border border-navy-700/80 hover:border-gold-400 transition-all duration-300">
                  <div>
                    {/* Node Index & Step Badge */}
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-navy-800">
                      <span className="text-xs font-mono font-bold text-gold-400">
                        STAGE {node.step}
                      </span>
                      <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 bg-navy-900 border border-navy-700 text-slate-300">
                        {node.badge}
                      </span>
                    </div>

                    <h4 className="text-xl font-serif font-bold text-white mb-3">
                      {node.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
                      {node.desc}
                    </p>
                  </div>

                  {/* Flow connection tag */}
                  <div className="pt-4 border-t border-navy-900 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>{idx === 0 ? "Global Currency Inflow" : idx === 1 ? "Invoicing & Legal Shield" : "Execution & Global Delivery"}</span>
                    {idx < 2 && (
                      <ArrowRight className="w-3.5 h-3.5 text-gold-400 animate-pulse hidden lg:inline-block rtl:rotate-180" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* 3. STRATEGIC HEADQUARTERS & OFFICE VISUAL CARD */}
        <ScrollReveal delay={200}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#071F2D]/50 border border-navy-700/80 p-6 sm:p-8 md:p-10 backdrop-blur-sm">
            {/* Visual Photo */}
            <div className="lg:col-span-5 relative overflow-hidden border border-navy-700 shadow-xl group">
              <img
                src="/images/jvx-office.png"
                alt="JVX Dubai Silicon Oasis Headquarters View"
                className="w-full h-[260px] sm:h-[300px] object-cover filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040E16]/90 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-navy-950/90 border border-gold-500/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-gold-400 shrink-0" />
                  <span className="text-[11px] font-mono text-slate-200 uppercase font-semibold">
                    Dubai Silicon Oasis · IFZA
                  </span>
                </div>
                <span className="text-[10px] font-mono text-gold-400 px-1.5 py-0.5 bg-navy-900 border border-gold-500/20">
                  FZCO
                </span>
              </div>
            </div>

            {/* Description & Action */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-gold-400 uppercase tracking-wider">
                <FileCheck className="w-3.5 h-3.5" />
                <span>{t.globalFlow.authorityCard.locationTag}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-snug">
                {t.globalFlow.authorityCard.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                {t.globalFlow.authorityCard.desc}
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href="https://ifza.com/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gold-400/80 hover:bg-gold-500 text-gold-400 hover:text-navy-950 text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md"
                >
                  <span>{t.globalFlow.authorityCard.cta}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <span className="text-xs text-slate-400 font-mono flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{t.globalFlow.authorityCard.verifiedTag}</span>
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
