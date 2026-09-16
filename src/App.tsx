import { useState } from 'react';
import { LanguageProvider } from './i18n';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { TrustMetrics } from './components/sections/TrustMetrics';
import { ProfileSelection } from './components/sections/ProfileSelection';
import { ServicesSection } from './components/sections/ServicesSection';
import { JvxApproach } from './components/sections/JvxApproach';
import { PortalPreview } from './components/sections/PortalPreview';
import { SocialProof } from './components/sections/SocialProof';
import { DiagnosticQuiz } from './components/sections/DiagnosticQuiz';
import { AboutSection } from './components/sections/AboutSection';
import { GlobalFlowSection } from './components/sections/GlobalFlowSection';
import { FinalCTA } from './components/sections/FinalCTA';
import { ServiceDetailModal } from './components/sections/ServiceDetailModal';
import { ConsultationModal } from './components/modals/ConsultationModal';
import { Chatbot } from './components/common/Chatbot';
import type { ServiceId, QuizAnswers } from './types';

function MainWebsite() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationInitialData, setConsultationInitialData] = useState<Partial<QuizAnswers> | undefined>(undefined);
  const [selectedServiceId, setSelectedServiceId] = useState<ServiceId | null>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenConsultationWithData = (data: Partial<QuizAnswers>) => {
    setConsultationInitialData(data);
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#040E16] text-[#E7EEF3] flex flex-col selection:bg-gold-500 selection:text-navy-950 font-sans overflow-x-clip">
      
      {/* Sticky Header with Language Switcher and Talk to JVX CTA */}
      <Header
        onOpenConsultation={() => {
          setConsultationInitialData(undefined);
          setIsConsultationOpen(true);
        }}
        onNavigateToSection={scrollToSection}
      />

      {/* Main Corporate Journey */}
      <main className="flex-1">
        
        {/* 1. Architectural Hero ("Your business, supported beyond borders.") */}
        <Hero
          onFindPath={() => scrollToSection('problem')}
          onViewServices={() => scrollToSection('services')}
          onBookConsultation={() => {
            setConsultationInitialData(undefined);
            setIsConsultationOpen(true);
          }}
        />

        {/* 2. Authority & Credentials ("Based in Dubai. Built for international business.") */}
        <TrustMetrics />

        {/* 3. The Problem ("Your business shouldn't depend on doing everything in-house.") */}
        <ProfileSelection
          onExploreServices={() => scrollToSection('services')}
        />

        {/* 4. Services Section: Primary Lead Marketing + 8 Business Support Areas */}
        <ServicesSection
          onSelectService={(serviceId) => setSelectedServiceId(serviceId)}
        />

        {/* 5. The JVX Approach: 5-Step Methodology (Understand, Structure, Integrate, Operate, Support) */}
        <JvxApproach />

        {/* 6. Remote-First Operating Model ("One team. Wherever your business operates.") */}
        <PortalPreview
          onDiscoverProcess={() => scrollToSection('approach')}
        />

        {/* 7. Why JVX (One Partner, Remote, International, Structured, Scalable) */}
        <SocialProof />

        {/* 8. Interactive Diagnostic: "Find the support your business needs." */}
        <DiagnosticQuiz
          onOpenConsultationWithData={handleOpenConsultationWithData}
        />

        {/* 9. International / Dubai Base ("Based in Dubai. Connected to international business.") */}
        <AboutSection />

        {/* 10. FZCO Operational Advantage & Unified Global Invoicing Flow */}
        <GlobalFlowSection />

        {/* 11. High-Conversion Final CTA ("Let's identify what your business can delegate.") */}
        <FinalCTA
          onBookConsultation={() => {
            setConsultationInitialData(undefined);
            setIsConsultationOpen(true);
          }}
          onFindPath={() => scrollToSection('services')}
        />

      </main>

      {/* Comprehensive Advisory Footer */}
      <Footer
        onOpenConsultation={() => {
          setConsultationInitialData(undefined);
          setIsConsultationOpen(true);
        }}
        onNavigateToSection={scrollToSection}
      />

      {/* Interactive Corporate Concierge Chatbot (FAQ & Support) */}
      <Chatbot
        onOpenConsultation={() => {
          setConsultationInitialData(undefined);
          setIsConsultationOpen(true);
        }}
        onNavigateToSection={scrollToSection}
      />

      {/* Service Detail Modal Deep Dive */}
      <ServiceDetailModal
        serviceId={selectedServiceId}
        onClose={() => setSelectedServiceId(null)}
        onOpenConsultation={() => {
          setIsConsultationOpen(true);
        }}
      />

      {/* Private Strategic Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialData={consultationInitialData}
      />

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainWebsite />
    </LanguageProvider>
  );
}
