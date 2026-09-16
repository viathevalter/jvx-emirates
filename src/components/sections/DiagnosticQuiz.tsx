import React, { useState } from 'react';
import { useLanguage } from '../../i18n';
import { 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  RotateCcw, 
  Send, 
  ShieldCheck, 
  Copy, 
  CheckCheck
} from 'lucide-react';
import { GoldLine, GoldBadge } from '../common/GoldAccent';
import { ScrollReveal } from '../common/ScrollReveal';
import type { QuizAnswers } from '../../types';

interface DiagnosticQuizProps {
  initialProfile?: string | null;
  onOpenConsultationWithData?: (data: Partial<QuizAnswers>) => void;
}

export const DiagnosticQuiz: React.FC<DiagnosticQuizProps> = ({ 
  onOpenConsultationWithData 
}) => {
  const { t, language } = useLanguage();

  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<QuizAnswers>({
    primaryArea: 'marketing',
    supportType: 'ongoing',
    operationalChallenge: 'admin_drag',
    customChallenge: '',
    name: '',
    email: '',
    phone: '',
    companyName: '',
    country: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [validationError, setValidationError] = useState('');

  const handleSelect = (field: keyof QuizAnswers, value: string) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
    setValidationError('');
  };

  const handleNext = () => {
    if (currentStep === 1 && !answers.primaryArea) {
      setValidationError(
        language === 'pt' ? 'Por favor selecione a área prioritária para continuar.' :
        language === 'es' ? 'Por favor seleccione el área prioritaria para continuar.' : 
        'Please select a primary area to continue.'
      );
      return;
    }
    if (currentStep === 2 && !answers.supportType) {
      setValidationError(
        language === 'pt' ? 'Por favor selecione o modelo de suporte desejado.' :
        language === 'es' ? 'Por favor seleccione el modelo de soporte deseado.' : 
        'Please select your preferred support model.'
      );
      return;
    }
    if (currentStep === 3 && !answers.operationalChallenge && !answers.customChallenge?.trim()) {
      setValidationError(
        language === 'pt' ? 'Por favor selecione ou descreva seu principal desafio.' :
        language === 'es' ? 'Por favor seleccione o describa su principal desafío.' : 
        'Please select or describe your operational challenge.'
      );
      return;
    }
    setValidationError('');
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setValidationError('');
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!answers.name.trim() || !answers.email.trim() || !answers.phone.trim()) {
      setValidationError(
        language === 'pt' ? 'Por favor preencha nome, e-mail e telefone para gerar o relatório.' :
        language === 'es' ? 'Por favor complete nombre, correo y teléfono para generar el informe.' : 
        'Please fill in your name, email and phone to view the summary.'
      );
      return;
    }

    setValidationError('');
    setIsSubmitted(true);

    try {
      const submissions = JSON.parse(localStorage.getItem('jvx_diagnostics') || '[]');
      submissions.push({
        ...answers,
        submittedAt: new Date().toISOString(),
        language,
      });
      localStorage.setItem('jvx_diagnostics', JSON.stringify(submissions));
    } catch (e) {
      console.warn('Diagnostic storage warning', e);
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
    setIsSubmitted(false);
    setAnswers({
      primaryArea: 'marketing',
      supportType: 'ongoing',
      operationalChallenge: 'admin_drag',
      customChallenge: '',
      name: '',
      email: '',
      phone: '',
      companyName: '',
      country: '',
    });
    setValidationError('');
  };

  const handleCopy = () => {
    const text = `JVX Business Diagnostic Assessment\nArea: ${answers.primaryArea}\nEngagement: ${answers.supportType}\nChallenge: ${answers.customChallenge || answers.operationalChallenge}\nCompany: ${answers.companyName || 'N/A'}\nContact: ${answers.name} (${answers.email}, ${answers.phone})`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const getAreaLabel = (id: string) => {
    const opt = t.quiz.q1.options.find(o => o.id === id);
    return opt ? opt.label : id;
  };

  const getSupportTypeLabel = (id: string) => {
    const opt = t.quiz.q2.options.find(o => o.id === id);
    return opt ? opt.label : id;
  };

  return (
    <section id="diagnostic" className="relative py-24 bg-[#040E16] border-t border-navy-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal delay={0}>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center mb-3">
              <GoldBadge>{t.quiz.sectionTag}</GoldBadge>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-white mb-4 leading-tight">
              {t.quiz.title}
            </h2>
            <div className="flex justify-center mb-5">
              <GoldLine width="w-20" />
            </div>
            <p className="text-base text-slate-300 font-light leading-relaxed">
              {t.quiz.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Diagnostic Assessment Card */}
        <ScrollReveal delay={150}>
          <div className="bg-[#061824] border border-navy-700/80 shadow-2xl p-5 sm:p-10 lg:p-12 relative overflow-hidden">
            
            {/* Top Micro-Progress Bar */}
            {!isSubmitted && (
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                  <span className="text-gold-400 uppercase tracking-wider font-semibold">
                    {t.quiz.stepIndicator} {currentStep} {t.quiz.of} 4
                  </span>
                  <span>{Math.round((currentStep / 4) * 100)}%</span>
                </div>
                <div className="h-1.5 w-full bg-navy-950 border border-navy-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-300 transition-all duration-300"
                    style={{ width: `${(currentStep / 4) * 100}%` }}
                  />
                </div>
              </div>
            )}

            {/* ERROR BANNER */}
            {validationError && (
              <div className="mb-6 p-4 bg-red-950/50 border border-red-800/80 text-xs text-red-200 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                <span>{validationError}</span>
              </div>
            )}

            {/* STEP 1: PRIMARY SUPPORT AREA */}
            {!isSubmitted && currentStep === 1 && (
              <div>
                <div className="mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400 block mb-1">
                    {t.quiz.questionIndicator} 01
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
                    {t.quiz.q1.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-light">
                    {t.quiz.q1.subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {t.quiz.q1.options.map((opt) => {
                    const isSelected = answers.primaryArea === opt.id;
                    const isMarketing = opt.id === 'marketing';

                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleSelect('primaryArea', opt.id)}
                        className={`p-4 text-left border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? 'border-gold-400 bg-[#0B3248]/80 shadow-md text-white'
                            : isMarketing
                            ? 'border-gold-500/30 bg-navy-900/60 hover:border-gold-400 text-slate-200'
                            : 'border-navy-700/80 bg-navy-950/60 hover:border-slate-500 text-slate-300'
                        }`}
                      >
                        <div className="pr-4">
                          <span className={`text-xs sm:text-sm font-medium leading-snug block ${isSelected ? 'text-gold-200' : ''}`}>
                            {opt.label}
                          </span>
                          {isMarketing && (
                            <span className="text-[10px] font-mono text-gold-400/90 uppercase tracking-wider block mt-0.5">
                              {t.quiz.primaryCapabilityTag}
                            </span>
                          )}
                        </div>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                          isSelected ? 'border-gold-400 bg-gold-500 text-navy-950' : 'border-navy-600'
                        }`}>
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="flex justify-end pt-4 border-t border-navy-800">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-7 py-3.5 bg-gold-500 text-navy-950 hover:bg-gold-400 text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>{t.quiz.next}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: SUPPORT MODEL */}
            {!isSubmitted && currentStep === 2 && (
              <div>
                <div className="mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400 block mb-1">
                    {t.quiz.questionIndicator} 02
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
                    {t.quiz.q2.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-light">
                    {t.quiz.q2.subtitle}
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  {t.quiz.q2.options.map((opt) => {
                    const isSelected = answers.supportType === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleSelect('supportType', opt.id)}
                        className={`w-full p-4 text-left border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? 'border-gold-400 bg-[#0B3248]/80 shadow-md text-white'
                            : 'border-navy-700/80 bg-navy-950/60 hover:border-slate-500 text-slate-300'
                        }`}
                      >
                        <span className={`text-xs sm:text-sm font-medium leading-snug ${isSelected ? 'text-gold-200' : ''}`}>
                          {opt.label}
                        </span>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ml-4 ${
                          isSelected ? 'border-gold-400 bg-gold-500 text-navy-950' : 'border-navy-600'
                        }`}>
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-navy-800">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-5 py-3 border border-navy-700 text-slate-400 hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>{t.quiz.prev}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-7 py-3.5 bg-gold-500 text-navy-950 hover:bg-gold-400 text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>{t.quiz.next}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: OPERATIONAL CHALLENGE */}
            {!isSubmitted && currentStep === 3 && (
              <div>
                <div className="mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400 block mb-1">
                    {t.quiz.questionIndicator} 03
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
                    {t.quiz.q3.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-light">
                    {t.quiz.q3.subtitle}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  {t.quiz.q3.options.map((opt) => {
                    const isSelected = answers.operationalChallenge === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleSelect('operationalChallenge', opt.id)}
                        className={`w-full p-4 text-left border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? 'border-gold-400 bg-[#0B3248]/80 shadow-md text-white'
                            : 'border-navy-700/80 bg-navy-950/60 hover:border-slate-500 text-slate-300'
                        }`}
                      >
                        <span className={`text-xs sm:text-sm font-medium leading-snug ${isSelected ? 'text-gold-200' : ''}`}>
                          {opt.label}
                        </span>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ml-4 ${
                          isSelected ? 'border-gold-400 bg-gold-500 text-navy-950' : 'border-navy-600'
                        }`}>
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Custom Challenge Input Field */}
                <div className="mb-8">
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    {t.quiz.customChallengeLabel}
                  </label>
                  <input
                    type="text"
                    value={answers.customChallenge || ''}
                    onChange={(e) => handleSelect('customChallenge', e.target.value)}
                    placeholder={t.quiz.q3.customPlaceholder}
                    className="w-full px-4 py-3 bg-navy-950/90 border border-navy-700 focus:border-gold-400 text-slate-200 text-xs sm:text-sm rounded outline-none transition-colors"
                  />
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-navy-800">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-5 py-3 border border-navy-700 text-slate-400 hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>{t.quiz.prev}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-7 py-3.5 bg-gold-500 text-navy-950 hover:bg-gold-400 text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>{t.quiz.next}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: CONTACT INFORMATION */}
            {!isSubmitted && currentStep === 4 && (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400 block mb-1">
                    {t.quiz.finalStepIndicator}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
                    {t.quiz.contactStep.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-light">
                    {t.quiz.contactStep.subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      {t.quiz.contactStep.fullName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={answers.name}
                      onChange={(e) => handleSelect('name', e.target.value)}
                      className="w-full px-4 py-3 bg-navy-950/90 border border-navy-700 focus:border-gold-400 text-slate-200 text-xs sm:text-sm rounded outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      {t.quiz.contactStep.email} *
                    </label>
                    <input
                      type="email"
                      required
                      value={answers.email}
                      onChange={(e) => handleSelect('email', e.target.value)}
                      className="w-full px-4 py-3 bg-navy-950/90 border border-navy-700 focus:border-gold-400 text-slate-200 text-xs sm:text-sm rounded outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      {t.quiz.contactStep.phone} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={answers.phone}
                      onChange={(e) => handleSelect('phone', e.target.value)}
                      placeholder="+971 ... / +34 ... / +55 ..."
                      className="w-full px-4 py-3 bg-navy-950/90 border border-navy-700 focus:border-gold-400 text-slate-200 text-xs sm:text-sm rounded outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      {t.quiz.contactStep.companyName}
                    </label>
                    <input
                      type="text"
                      value={answers.companyName || ''}
                      onChange={(e) => handleSelect('companyName', e.target.value)}
                      className="w-full px-4 py-3 bg-navy-950/90 border border-navy-700 focus:border-gold-400 text-slate-200 text-xs sm:text-sm rounded outline-none"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      {t.quiz.contactStep.country}
                    </label>
                    <input
                      type="text"
                      value={answers.country}
                      onChange={(e) => handleSelect('country', e.target.value)}
                      placeholder="e.g. United Kingdom, Spain, United States, UAE, Brazil"
                      className="w-full px-4 py-3 bg-navy-950/90 border border-navy-700 focus:border-gold-400 text-slate-200 text-xs sm:text-sm rounded outline-none"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400 mb-6 bg-navy-950 p-3 border border-navy-800">
                  <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>{t.quiz.contactStep.privacyNotice}</span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-navy-800">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-5 py-3 border border-navy-700 text-slate-400 hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>{t.quiz.prev}</span>
                  </button>

                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-gold-500 text-navy-950 hover:bg-gold-400 text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>{t.quiz.submit}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

            {/* FINAL RESULT: RECOMMENDED SUPPORT CONFIGURATION */}
            {isSubmitted && (
              <div className="animate-fadeIn">
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-navy-800">
                  <div className="inline-flex items-center gap-2">
                    <GoldBadge>{t.quiz.result.badge}</GoldBadge>
                  </div>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-gold-300 transition-colors font-mono cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{t.quiz.reset}</span>
                  </button>
                </div>

                <div className="mb-8">
                  <p className="text-xs font-mono uppercase tracking-wider text-gold-400 mb-2">
                    {t.quiz.result.recommendationPrefix}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
                    {getAreaLabel(answers.primaryArea)}
                  </h3>
                  <p className="text-sm text-slate-300 font-light leading-relaxed">
                    {language === 'pt' 
                      ? `Estruturado para ${getSupportTypeLabel(answers.supportType).toLowerCase()}. Com base operacional em Dubai, a JVX integra-se diretamente aos fluxos da sua empresa para resolver gargalos operacionais sem o atrito de contratações internas.`
                      : language === 'es'
                      ? `Diseñado para ${getSupportTypeLabel(answers.supportType).toLowerCase()}. Con base operativa en Dubái, JVX se integra directamente en los flujos de su empresa para resolver cuellos de botella operativos sin fricciones internas.`
                      : `Designed for ${getSupportTypeLabel(answers.supportType).toLowerCase()}. Operating from our Dubai base, JVX integrates directly into your business workflows to solve operational bottlenecks without internal headcount friction.`}
                  </p>
                </div>

                <div className="p-6 bg-[#071F2D]/70 border border-gold-500/30 mb-8">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 mb-4 pb-2 border-b border-navy-800">
                    {t.quiz.result.potentialRoutesTitle}
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-gold-400 shrink-0" />
                      <span>{t.quiz.summaryDedicatedExecution} <strong>{getAreaLabel(answers.primaryArea)}</strong></span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-gold-400 shrink-0" />
                      <span>{t.quiz.summaryEngagement} <strong>{getSupportTypeLabel(answers.supportType)}</strong></span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-gold-400 shrink-0" />
                      <span>{t.quiz.summaryToolIntegration}</span>
                    </li>
                  </ul>
                </div>

                <p className="text-xs text-slate-400 font-light leading-relaxed mb-8">
                  {t.quiz.result.disclaimer}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-navy-800">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 border border-navy-700 bg-navy-950/70 hover:bg-navy-900 text-xs font-mono text-slate-300 transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <CheckCheck className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400">{t.quiz.copiedMessage}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-gold-400" />
                        <span>{t.quiz.result.downloadSummary}</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (onOpenConsultationWithData) {
                        onOpenConsultationWithData(answers);
                      }
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gold-500 text-navy-950 hover:bg-gold-400 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xl cursor-pointer"
                  >
                    <span>{t.quiz.result.discussCta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            )}

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
