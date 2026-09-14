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
  ServicesSection 
} from './components/ServicesSection';
import { 
  FeaturedConsultation 
} from './components/FeaturedConsultation';
import { 
  HowItWorks 
} from './components/HowItWorks';
import { 
  WhyChooseUs 
} from './components/WhyChooseUs';
import { 
  AstrologerSection 
} from './components/AstrologerSection';
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
  BookingFlowModal 
} from './components/BookingFlowModal';
import { 
  DashboardView 
} from './components/DashboardView';
import { 
  AuthModal 
} from './components/AuthModal';
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
  DEMO_USER, 
  INITIAL_BOOKINGS 
} from './data/astrologyData';
import { 
  UserProfile, 
  BookingData, 
  BlogPost 
} from './types';

export default function App() {
  // Navigation View: 'home' | 'dashboard'
  const [currentView, setCurrentView] = useState<'home' | 'dashboard'>('home');
  
  // Currency Toggle: USD | INR
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');
  
  // User Session: initialized with DEMO_USER for smooth immediate evaluation
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(DEMO_USER);
  
  // Bookings state (allows creating new bookings in-session)
  const [bookings, setBookings] = useState<BookingData[]>(INITIAL_BOOKINGS);

  // Modals
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>();
  const [preselectedAstrologerId, setPreselectedAstrologerId] = useState<string | undefined>();
  
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'refund' | 'disclaimer' | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  // Handlers
  const handleOpenBooking = (serviceId?: string, astrologerId?: string) => {
    setPreselectedServiceId(serviceId);
    setPreselectedAstrologerId(astrologerId);
    setIsBookingOpen(true);
  };

  const handleBookingSuccess = (newBooking: BookingData) => {
    setBookings([newBooking, ...bookings]);
  };

  const handleUpdateProfile = (updated: UserProfile) => {
    setCurrentUser(updated);
  };

  const handleNavigate = (target: string) => {
    if (target === 'dashboard') {
      setCurrentView('dashboard');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentView !== 'home') {
      setCurrentView('home');
    }

    // Scroll to anchor on home page
    setTimeout(() => {
      if (target === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const elem = document.getElementById(`${target}-section`);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-[#0B0820] text-[#F8F3E7] font-sans selection:bg-[#D4AF37] selection:text-[#0B0820]">
      
      {/* Top Universal Navbar */}
      <Navbar
        currentView={currentView}
        setCurrentView={handleNavigate}
        onNavigate={handleNavigate}
        currency={currency}
        setCurrency={setCurrency}
        onToggleCurrency={() => setCurrency(prev => prev === 'USD' ? 'INR' : 'USD')}
        currentUser={currentUser}
        onOpenAuth={() => setIsAuthOpen(true)}
        onLogout={() => setCurrentUser(null)}
        onBookNow={() => handleOpenBooking()}
        onOpenBooking={(serviceId) => handleOpenBooking(serviceId)}
      />

      {/* Main View Router */}
      {currentView === 'home' ? (
        <main>
          {/* 1. Hero Section */}
          <Hero 
            onBookConsultation={() => handleOpenBooking()}
            onExploreServices={() => handleNavigate('services')}
            onOpenBirthChart={() => {
              if (currentUser) {
                setCurrentView('dashboard');
              } else {
                handleOpenBooking('janam-kundli-analysis');
              }
            }}
          />

          {/* 2. Trust & Metrics Section */}
          <TrustSection />

          {/* 3. Filterable 8-Service Catalog */}
          <ServicesSection 
            currency={currency}
            onSelectService={(serviceId) => handleOpenBooking(serviceId)}
          />

          {/* 4. Featured Spotlight Consultation */}
          <FeaturedConsultation 
            currency={currency}
            onBookFeatured={(serviceId) => handleOpenBooking(serviceId)}
          />

          {/* 5. 4-Step Consultation Journey */}
          <HowItWorks 
            onStartJourney={() => handleOpenBooking()}
          />

          {/* 6. Why Choose Us (Classical Integrity) */}
          <WhyChooseUs />

          {/* 7. Meet Your Astrologers & Lineage Scholars */}
          <AstrologerSection 
            currency={currency}
            onSelectAstrologerForBooking={(astrologerId) => handleOpenBooking(undefined, astrologerId)}
          />

          {/* 8. Verified Testimonials Carousel */}
          <TestimonialsSection />

          {/* 9. Vedic Astrology Insights & Blog */}
          <InsightsSection 
            onSelectArticle={(article) => setSelectedArticle(article)}
          />

          {/* 10. Frequently Asked Questions Accordion & Direct Contact */}
          <FAQSection />
        </main>
      ) : (
        /* Dedicated Customer Dashboard */
        <DashboardView
          currentUser={currentUser || DEMO_USER}
          bookings={bookings}
          onBookNewSession={() => handleOpenBooking()}
          onUpdateProfile={handleUpdateProfile}
          currency={currency}
          onBackToHome={() => handleNavigate('home')}
        />
      )}

      {/* Universal Footer with Mandatory Disclaimer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLegal={(type) => setLegalModalType(type)}
        onBookConsultation={() => handleOpenBooking()}
      />

      {/* 8-Step Interactive Booking Flow Wizard Modal */}
      <BookingFlowModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedServiceId={preselectedServiceId}
        preselectedAstrologerId={preselectedAstrologerId}
        currency={currency}
        currentUser={currentUser}
        onBookingSuccess={handleBookingSuccess}
        onGoToDashboard={() => {
          setCurrentView('dashboard');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Authentication Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLoginSuccess={(user) => {
          setCurrentUser(user);
        }}
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
          handleOpenBooking();
        }}
      />

      {/* Floating Premium WhatsApp Consultation Button */}
      <FloatingWhatsApp />

    </div>
  );
}
