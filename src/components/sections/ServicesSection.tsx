import React from 'react';
import { useLanguage } from '../../i18n';
import type { ServiceId } from '../../types';
import { 
  Sparkles,
  ArrowRight, 
  Check,
  CreditCard,
  Users,
  PackageCheck,
  Briefcase,
  FileText,
  Headphones,
  CalendarCheck,
  Globe
} from 'lucide-react';
import { GoldBadge, GoldLine } from '../common/GoldAccent';
import { ScrollReveal } from '../common/ScrollReveal';

interface ServicesSectionProps {
  onSelectService: (serviceId: ServiceId) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const { t } = useLanguage();

  const supportIcons: Record<string, React.ElementType> = {
    finance_admin: CreditCard,
    hr_admin: Users,
    procurement: PackageCheck,
    commercial: Briefcase,
    documentation: FileText,
    customer_support: Headphones,
    executive_assistance: CalendarCheck,
    international: Globe
  };

  const supportServiceKeys: ServiceId[] = [
    'finance_admin',
    'hr_admin',
    'procurement',
    'commercial',
    'documentation',
    'customer_support',
    'executive_assistance',
    'international'
  ];

  return (
    <section id="services" className="relative py-24 bg-[#05131C] border-t border-navy-800">
      <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-6">
        
        {/* Main Section Header */}
        <ScrollReveal delay={0}>
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center mb-3">
              <GoldBadge>{t.services.sectionTag}</GoldBadge>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-white mb-4 leading-tight">
              {t.services.headline}
            </h2>
            <GoldLine width="w-24" className="mb-4" />
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              {t.services.subheadline}
            </p>
          </div>
        </ScrollReveal>

        {/* PRIMARY LEAD SERVICE: MARKETING FEATURED HERO CARD */}
        <ScrollReveal delay={100}>
          <div className="relative mb-20 bg-gradient-to-br from-[#0A2638] via-[#071F2D] to-[#040E16] border-2 border-gold-500/60 p-5 sm:p-10 lg:p-16 shadow-2xl overflow-hidden group">
            {/* Background Glow Effect */}
            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="sm:absolute top-0 right-0 py-1.5 px-4 sm:py-2 sm:px-6 bg-gold-500 text-navy-950 text-[10px] sm:text-xs font-bold font-mono tracking-widest uppercase mb-4 sm:mb-0 inline-block">
              {t.services.marketing.tag}
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="p-2 rounded bg-gold-500/20 text-gold-400 border border-gold-500/30">
                    <Sparkles className="w-5 h-5" />
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-gold-400 font-semibold">
                    {t.services.marketing.title}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-3 leading-tight">
                  {t.services.marketing.headline}
                </h3>

                <p className="text-base text-gold-300/90 font-serif italic mb-4">
                  {t.services.marketing.subheadline}
                </p>

                <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-8 max-w-2xl">
                  {t.services.marketing.desc}
                </p>

                <button
                  onClick={() => onSelectService('marketing')}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gold-500 text-navy-950 hover:bg-gold-400 text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300 shadow-xl cursor-pointer"
                >
                  <span>{t.services.marketing.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Marketing Capabilities Checklist */}
              <div className="lg:col-span-5 bg-navy-950/80 border border-gold-500/30 p-6 sm:p-8 backdrop-blur-sm">
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 mb-5 pb-3 border-b border-navy-800">
                  {t.services.capabilitiesTitle}
                </h4>
                <ul className="space-y-3.5">
                  {t.services.marketing.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-200">
                      <div className="p-1 rounded bg-gold-500/20 mr-3 mt-0.5 shrink-0">
                        <Check className="w-3.5 h-3.5 text-gold-400" />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 8 BUSINESS SUPPORT AREAS SUBHEADER */}
        <ScrollReveal delay={150}>
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] font-mono tracking-widest uppercase text-gold-400 block mb-2 font-semibold">
              {t.services.supportHeader.sectionTag}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-medium text-white mb-3">
              {t.services.supportHeader.title}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 font-light">
              {t.services.supportHeader.desc}
            </p>
          </div>
        </ScrollReveal>

        {/* 8 MODULAR SUPPORT CARDS (4x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportServiceKeys.map((key, idx) => {
            const service = t.services.items[key as keyof typeof t.services.items];
            if (!service) return null;
            const Icon = supportIcons[key] || Briefcase;

            return (
              <ScrollReveal key={key} delay={idx * 60} className="h-full">
                <div className="group relative flex flex-col justify-between h-full p-6 sm:p-7 bg-[#071F2D]/60 border border-navy-700/80 hover:border-gold-400 transition-all duration-300 shadow-lg hover:shadow-2xl">
                  <div>
                    {/* Card Header: Number & Icon */}
                    <div className="flex items-center justify-between mb-5 pb-4 border-b border-navy-800">
                      <span className="text-xs font-mono font-bold text-gold-400">
                        {service.number}
                      </span>
                      <div className="p-2 bg-navy-900 border border-navy-700 text-slate-300 group-hover:text-gold-300 group-hover:border-gold-400 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h4 className="text-lg font-serif font-bold text-white mb-2 leading-snug group-hover:text-gold-200 transition-colors">
                      {service.title}
                    </h4>

                    <p className="text-xs text-slate-300 font-light leading-relaxed mb-5">
                      {service.description}
                    </p>

                    <div className="w-full h-[1px] bg-navy-800 mb-4" />

                    {/* Department Core Tasks */}
                    <ul className="space-y-2 mb-6">
                      {service.items.slice(0, 5).map((it, pIdx) => (
                        <li key={pIdx} className="flex items-start text-[11px] text-slate-300 leading-snug">
                          <Check className="w-3 h-3 text-gold-400 mr-2 mt-0.5 shrink-0" />
                          <span>{it}</span>
                        </li>
                      ))}
                      {service.items.length > 5 && (
                        <li className="text-[11px] text-gold-400/80 font-mono pt-1">
                          + {service.items.length - 5} {t.services.moreCapabilities}
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Card Action Link */}
                  <div className="pt-4 border-t border-navy-800">
                    <button
                      type="button"
                      onClick={() => onSelectService(key)}
                      className="w-full flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-gold-400 group-hover:text-white transition-colors focus:outline-none cursor-pointer"
                    >
                      <span>{t.services.exploreCta}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>

                  {/* Left Accent Stripe on Hover */}
                  <div className="absolute top-0 left-0 w-0.5 h-0 bg-gold-400 group-hover:h-full transition-all duration-300" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
