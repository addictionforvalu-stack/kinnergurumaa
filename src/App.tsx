/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Navbar 
} from './components/Navbar';
import { 
  Hero 
} from './components/Hero';
import { 
  TrustSection 
} from './components/TrustSection';
import { 
  HowItWorks 
} from './components/HowItWorks';
import { 
  WhyChooseUs 
} from './components/WhyChooseUs';
import { 
  TestimonialsSection 
} from './components/TestimonialsSection';
import { 
  InsightsSection 
} from './components/InsightsSection';
import { 
  FAQSection 
} from './components/FAQSection';
import { 
  Footer 
} from './components/Footer';
import { 
  ConsultationInquiryModal 
} from './components/ConsultationInquiryModal';
import { 
  LegalModal 
} from './components/LegalModal';
import { 
  ArticleModal 
} from './components/ArticleModal';
import { 
  FloatingWhatsApp 
} from './components/FloatingWhatsApp';

import { 
  BlogPost 
} from './types';

export default function App() {
  // Navigation active tab
  const [activeSection, setActiveSection] = useState<string>('home');
  
  // Modals state
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>();
  
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'refund' | 'disclaimer' | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  // Handlers
  const handleOpenInquiry = (serviceId?: string) => {
    setPreselectedServiceId(serviceId);
    setIsInquiryOpen(true);
  };

  const handleNavigate = (target: string) => {
    setActiveSection(target);
    if (target === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const elem = document.getElementById(`${target}-section`);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0820] text-[#F8F3E7] font-sans selection:bg-[#D4AF37] selection:text-[#0B0820]">
      
      {/* Top Universal Navbar */}
      <Navbar
        currentView={activeSection}
        onNavigate={handleNavigate}
        setCurrentView={handleNavigate}
        onOpenInquiry={handleOpenInquiry}
        onBookNow={handleOpenInquiry}
        onOpenBooking={handleOpenInquiry}
      />

      {/* Main Classical Vedic Astrology Showcase */}
      <main>
        {/* 1. Hero Section */}
        <Hero 
          onOpenInquiry={() => handleOpenInquiry()}
          onBookConsultation={() => handleOpenInquiry()}
          onExploreServices={() => handleNavigate('how-it-works')}
        />

        {/* 2. Trust & Metrics Section */}
        <TrustSection />

        {/* 3. 4-Step Consultation Journey */}
        <HowItWorks 
          onStartBooking={() => handleOpenInquiry()}
        />

        {/* 4. Why Choose Us (Classical Integrity) */}
        <WhyChooseUs />

        {/* 5. Verified Client Testimonials */}
        <TestimonialsSection />

        {/* 6. Vedic Astrology Insights & Articles */}
        <InsightsSection 
          onSelectArticle={(article) => setSelectedArticle(article)}
        />

        {/* 7. Frequently Asked Questions & Concierge Desk */}
        <FAQSection />
      </main>

      {/* Universal Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLegal={(type) => setLegalModalType(type)}
        onBookConsultation={() => handleOpenInquiry()}
      />

      {/* Simple Consultation Inquiry Modal */}
      <ConsultationInquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        preselectedServiceId={preselectedServiceId}
      />

      {/* Legal & Astrology Disclaimer Modal */}
      <LegalModal
        isOpen={legalModalType !== null}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Astrology Article Reader Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onBookConsultation={() => {
          setSelectedArticle(null);
          handleOpenInquiry();
        }}
      />

      {/* Floating WhatsApp Consultation Button */}
      <FloatingWhatsApp />

    </div>
  );
}
