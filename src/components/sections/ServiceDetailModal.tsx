import React from 'react';
import { useLanguage } from '../../i18n';
import { servicesData } from '../../data/servicesData';
import type { ServiceId } from '../../types';
import { 
  X, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  AlertCircle, 
  ShieldCheck, 
  FileText 
} from 'lucide-react';
import { GoldLine } from '../common/GoldAccent';

interface ServiceDetailModalProps {
  serviceId: ServiceId | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  serviceId,
  onClose,
  onOpenConsultation,
}) => {
  const { language, t } = useLanguage();

  if (!serviceId) return null;

  const currentData = servicesData[language]?.[serviceId] || servicesData.en[serviceId];
  if (!currentData) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-8 animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-4xl bg-[#061824] border border-gold-500/40 text-slate-200 shadow-2xl overflow-hidden my-3 sm:my-8 rounded-xl sm:rounded-none">
        
        {/* Top Sticky Bar with Close Button */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-navy-800 bg-[#040E16]/95 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400">
              {currentData.tag}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white border border-navy-700 hover:border-gold-400 rounded transition-colors focus:outline-none cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 sm:p-10 space-y-8 sm:space-y-10 max-h-[82vh] overflow-y-auto">
          
          {/* Header */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
              {currentData.headline}
            </h2>
            <GoldLine width="w-20" className="mb-4" />
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              {currentData.strategicDescription}
            </p>
          </div>

          {/* Grid: Why the UAE & Who This Is For */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-navy-800">
            {/* Why the UAE */}
            <div className="p-6 bg-navy-900/50 border border-navy-800">
              <h3 className="text-xs font-mono uppercase tracking-widest text-gold-400 mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold-400" />
                <span>{t.serviceModal.whyUae}</span>
              </h3>
              <ul className="space-y-3">
                {currentData.whyUae.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-gold-500 mr-2.5 mt-0.5 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who This Is For */}
            <div className="p-6 bg-navy-900/50 border border-navy-800">
              <h3 className="text-xs font-mono uppercase tracking-widest text-gold-400 mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4 text-gold-400" />
                <span>{t.serviceModal.whoThisIsFor}</span>
              </h3>
              <ul className="space-y-3">
                {currentData.whoThisIsFor.map((client, idx) => (
                  <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mr-2.5 mt-2 shrink-0" />
                    <span>{client}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* What JVX Coordinates */}
          <div className="p-6 bg-[#0B3248]/30 border border-gold-500/20">
            <h3 className="text-xs font-mono uppercase tracking-widest text-gold-400 mb-4">
              {t.serviceModal.whatJvxHandles}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentData.whatJvxHandles.map((handle, idx) => (
                <div key={idx} className="flex items-start text-xs text-slate-200">
                  <span className="text-gold-400 font-mono mr-2 font-bold">•</span>
                  <span>{handle}</span>
                </div>
              ))}
            </div>
          </div>

          {/* The Structured Roadmap (5-step process) */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-gold-400 mb-4">
              {t.serviceModal.theProcess}
            </h3>
            <div className="space-y-3">
              {currentData.process.map((step) => (
                <div 
                  key={step.step}
                  className="p-4 bg-navy-950/70 border border-navy-800 flex items-start gap-4"
                >
                  <span className="text-sm font-mono font-bold text-gold-400 border border-gold-500/30 px-2 py-0.5 rounded">
                    {step.step}
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Information & Document Checklist */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-gold-400 mb-3">
              {t.serviceModal.whatYouNeed}
            </h3>
            <div className="p-5 bg-navy-950/80 border border-navy-800">
              <ul className="space-y-2">
                {currentData.whatYouNeed.map((doc, idx) => (
                  <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                    <span className="text-slate-500 font-mono">[{idx + 1}]</span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Indicative Timeline */}
          <div className="flex items-center gap-3 p-4 bg-navy-900/60 border border-navy-700/70 text-xs text-slate-200">
            <Clock className="w-5 h-5 text-gold-400 shrink-0" />
            <div>
              <span className="font-semibold text-gold-300 block mb-0.5">
                {t.serviceModal.expectedTimeline}
              </span>
              <span>{currentData.expectedTimeline}</span>
            </div>
          </div>

          {/* Regulatory Notice */}
          <div className="flex items-start gap-3 p-4 bg-[#040E16] border border-amber-900/40 text-[11px] text-slate-400">
            <AlertCircle className="w-4 h-4 text-amber-500/80 shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-300 font-medium block mb-1">
                {t.serviceModal.regulatoryNotice}
              </span>
              <p>{currentData.complianceNotice}</p>
            </div>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="p-6 bg-[#040E16] border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs uppercase tracking-wider text-slate-400 hover:text-white transition-colors"
          >
            {t.serviceModal.close}
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="w-full sm:w-auto px-7 py-3 text-xs font-semibold uppercase tracking-widest bg-gold-500 text-navy-950 hover:bg-gold-400 transition-colors flex items-center justify-center gap-2 shadow-xl focus:outline-none"
          >
            <span>{t.serviceModal.discussCta}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
