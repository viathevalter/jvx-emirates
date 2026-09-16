import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../i18n';
import { GoldBadge } from '../common/GoldAccent';

export const JvxApproach: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) {
            ticking = false;
            return;
          }

          const rect = sectionRef.current.getBoundingClientRect();
          const totalHeight = sectionRef.current.offsetHeight;
          const viewportHeight = window.innerHeight;
          const scrollDistance = totalHeight - viewportHeight;

          if (scrollDistance <= 0) {
            ticking = false;
            return;
          }

          // Distance scrolled from the moment section top reaches viewport top
          const scrolled = -rect.top;
          const progress = Math.max(0, Math.min(1, scrolled / scrollDistance));
          setScrollProgress(progress);

          // Map progress [0, 1] into 5 stages
          const stepIdx = Math.min(4, Math.max(0, Math.floor(progress * 5)));
          setActiveStepIndex(stepIdx);

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStepClick = (idx: number) => {
    if (!sectionRef.current) return;
    const section = sectionRef.current;
    const totalHeight = section.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrollDistance = totalHeight - viewportHeight;

    // Scroll to the midpoint of the chosen step's zone
    const targetProgress = (idx + 0.5) / 5;
    const targetScrollTop = window.scrollY + section.getBoundingClientRect().top + targetProgress * scrollDistance;

    window.scrollTo({
      top: targetScrollTop,
      behavior: 'smooth'
    });
  };

  const currentStep = t.approach.steps[activeStepIndex];

  return (
    <section
      id="approach"
      ref={sectionRef}
      className="relative bg-[#040E16] border-t border-navy-800 h-[200vh] md:h-[220vh] scroll-mt-20"
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(to right, #0B3248 1px, transparent 1px), linear-gradient(to bottom, #0B3248 1px, transparent 1px)',
            backgroundSize: '96px 96px'
          }}
        />
      </div>

      {/* Sticky Screen-Locked Stage Experience */}
      <div className="sticky top-16 md:top-20 min-h-[calc(100vh-5rem)] flex flex-col justify-center py-6 sm:py-8 px-4 sm:px-6 lg:px-8 xl:px-6 max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] mx-auto w-full z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-4 sm:mb-6 md:mb-8">
          <div className="inline-flex items-center mb-2.5 sm:mb-3">
            <GoldBadge>{t.approach.sectionTag}</GoldBadge>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium text-white mb-2 sm:mb-3">
            {t.approach.headline}
          </h2>
          <p className="text-xs sm:text-base text-slate-300 font-light leading-relaxed">
            {t.approach.subheadline}
          </p>
        </div>

        {/* 5-Stage Interactive Progress Line (Clickable or Scroll-Driven) */}
        <div className="relative mb-5 sm:mb-6 md:mb-8">
          {/* Base Horizontal Track */}
          <div className="absolute top-3.5 sm:top-4 left-4 right-4 sm:left-6 sm:right-6 h-[2px] bg-navy-800" />

          {/* Active Gold Horizon Line (interpolated smoothly with transition) */}
          <div
            className="absolute top-3.5 sm:top-4 left-4 sm:left-6 h-[2px] bg-gradient-to-r from-gold-600 via-gold-400 to-gold-300 transition-all duration-500 ease-out"
            style={{ width: `${(activeStepIndex / 4) * 88}%` }}
          />

          {/* 5 Step Nodes */}
          <div className="relative flex justify-between">
            {t.approach.steps.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              const isPast = idx <= activeStepIndex;

              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => handleStepClick(idx)}
                  className="group flex flex-col items-center focus:outline-none text-center flex-1 max-w-[64px] sm:max-w-none sm:w-36 cursor-pointer"
                  aria-label={`Etapa ${step.number}: ${step.title}`}
                >
                  {/* Step Circular Indicator */}
                  <div
                    className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center text-[10px] sm:text-xs font-mono transition-all duration-300 ${
                      isActive
                        ? 'border-gold-400 bg-gold-500 text-navy-950 font-bold scale-110 shadow-lg ring-2 sm:ring-4 ring-gold-500/20'
                        : isPast
                        ? 'border-gold-500/80 bg-navy-900 text-gold-300'
                        : 'border-navy-700 bg-navy-950 text-slate-500 group-hover:border-navy-500'
                    }`}
                  >
                    {step.number}
                  </div>

                  {/* Stage Label */}
                  <div className="mt-1.5 sm:mt-3 text-center">
                    <span
                      className={`text-[9px] sm:text-xs font-serif tracking-wider uppercase transition-colors block line-clamp-1 sm:line-clamp-none ${
                        isActive
                          ? 'text-gold-300 font-semibold'
                          : 'text-slate-400 group-hover:text-slate-200'
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Stage Spotlight Card with Keyed Fade Transition */}
        <div
          className="relative border border-gold-500/30 bg-[#071F2D]/90 p-5 sm:p-8 shadow-2xl backdrop-blur-md overflow-hidden"
        >
          {/* Continuous Micro-Progress Bar Driven by Scroll */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-navy-800">
            <div
              className="h-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-300 transition-[width] duration-150 ease-out"
              style={{ width: `${Math.max(2, Math.min(100, scrollProgress * 100))}%` }}
            />
          </div>

          <div key={activeStepIndex} className="animate-fadeIn">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-navy-800 pb-4 mb-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-3xl sm:text-4xl font-serif font-bold text-gold-400 font-mono">
                  {currentStep.number}
                </span>
                <div className="h-8 w-[1px] bg-gold-500/30 hidden sm:block" />
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-gold-400 font-mono block">
                    {t.approach.stageLabel}
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-white">
                    {currentStep.title}
                  </h3>
                </div>
              </div>

              <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">
                {currentStep.headline}
              </span>
            </div>

            <p className="text-sm sm:text-base text-slate-200 font-light leading-relaxed max-w-4xl">
              {currentStep.desc}
            </p>
          </div>

          {/* Scroll Guide & Progress Pill Indicator */}
          <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono mt-6 pt-4 border-t border-navy-800/80">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-slate-300 hidden sm:inline">
                {t.approach.scrollHint}
              </span>
              <span className="text-slate-300 sm:hidden">
                {t.approach.scrollHintMobile}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              {t.approach.steps.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleStepClick(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    i === activeStepIndex
                      ? 'w-6 bg-gold-400'
                      : i < activeStepIndex
                      ? 'w-2 bg-gold-500/50 hover:bg-gold-400/80'
                      : 'w-2 bg-navy-700 hover:bg-navy-600'
                  }`}
                  aria-label={`Ir para etapa ${i + 1}`}
                />
              ))}
              <span className="ml-2 text-[10px] text-gold-400/90 font-mono">
                {activeStepIndex + 1} / 5
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

