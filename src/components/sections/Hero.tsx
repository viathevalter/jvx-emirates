import React from 'react';
import { useLanguage } from '../../i18n';
import { ScrollReveal } from '../common/ScrollReveal';

interface HeroProps {
  onFindPath?: () => void;
  onViewServices?: () => void;
  onBookConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewServices, onBookConsultation }) => {
  const { t } = useLanguage();

  const handleViewServices = () => {
    if (onViewServices) {
      onViewServices();
    } else {
      const el = document.getElementById('services') || document.getElementById('solutions');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center pt-24 pb-14 sm:pt-40 sm:pb-24 overflow-hidden bg-[#040E16]">
      {/* Ambient Corporate Dubai Background Video */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/dubai-skyline.png"
          className="w-full h-full object-cover object-center filter brightness-100 contrast-105 scale-[1.03] transition-opacity duration-1000"
        >
          <source src="/videos/dubai-hero.mp4" type="video/mp4" />
          <source src="https://upload.wikimedia.org/wikipedia/commons/7/70/Dubai_skyline_2013.webm" type="video/webm" />
        </video>

        {/* Executive Cinematic Dark Gradient Overlays - Tuned for +20% cumulative video perceptibility while maintaining razor-sharp text contrast */}
        <div className="absolute inset-0 bg-[#040E16]/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040E16]/90 via-[#040E16]/65 to-[#040E16]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040E16] via-transparent to-[#040E16]/45" />
        
        {/* Subtle Architectural Grid Lines */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(197, 168, 128, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(197, 168, 128, 0.3) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Hero Content Container */}
      <div className="relative max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-6 w-full z-10">
        <div className="max-w-4xl xl:max-w-5xl flex flex-col items-start">
          
          {/* Overline Tag */}
          <ScrollReveal delay={0}>
            <div className="text-gold-400 font-semibold text-[11px] sm:text-xs md:text-sm tracking-[0.14em] sm:tracking-[0.22em] uppercase font-sans mb-4 sm:mb-8 leading-snug">
              {t.hero.badge}
            </div>
          </ScrollReveal>

          {/* Main Headline */}
          <ScrollReveal delay={100}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] xl:text-[72px] font-serif font-bold text-white tracking-tight leading-[1.15] sm:leading-[1.12] mb-5 sm:mb-8 break-words">
              {t.hero.headlineLine1}{' '}
              <span className="text-gold-400 italic font-serif font-normal">{t.hero.headlineAccent1}</span>
              <br className="hidden sm:inline" />{' '}
              <span className="text-gold-400 italic font-serif font-normal">{t.hero.headlineAccent2}</span>
              <br className="hidden sm:inline" />{' '}
              {t.hero.headlineLine2}
            </h1>
          </ScrollReveal>

          {/* Subheadline Paragraph */}
          <ScrollReveal delay={200}>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-light leading-relaxed max-w-2xl xl:max-w-3xl mb-8 sm:mb-12">
              {t.hero.subheadline}
            </p>
          </ScrollReveal>

          {/* Dual Action CTAs */}
          <ScrollReveal delay={300} className="w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-8 w-full sm:w-auto">
              {/* Primary Gold Solid CTA - Explore Services */}
              <button
                onClick={handleViewServices}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 sm:px-8 sm:py-4 text-xs font-bold uppercase tracking-[0.16em] sm:tracking-[0.18em] bg-gold-500 text-navy-950 hover:bg-gold-400 transition-all duration-300 shadow-xl focus:outline-none cursor-pointer group text-center"
              >
                <span>{t.hero.primaryCta}</span>
              </button>

              {/* Secondary Clean Link CTA - Talk to JVX */}
              <button
                onClick={onBookConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-2 py-3 px-2 text-xs font-semibold uppercase tracking-[0.16em] sm:tracking-[0.18em] text-slate-300 hover:text-white transition-colors focus:outline-none cursor-pointer group text-center"
              >
                <span>{t.hero.secondaryCta}</span>
              </button>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};
