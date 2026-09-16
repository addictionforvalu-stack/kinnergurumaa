import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Menu, 
  X, 
  Calendar, 
  Phone, 
  MessageCircle 
} from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onNavigate?: (view: string) => void;
  setCurrentView?: (view: string) => void;
  onOpenInquiry?: (serviceId?: string) => void;
  onOpenBooking?: (serviceId?: string) => void;
  onBookNow?: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  setCurrentView,
  onOpenInquiry,
  onOpenBooking,
  onBookNow,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view: string) => {
    if (onNavigate) {
      onNavigate(view);
    } else if (setCurrentView) {
      setCurrentView(view);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleInquiryClick = (serviceId?: string) => {
    if (onOpenInquiry) {
      onOpenInquiry(serviceId);
    } else if (onOpenBooking) {
      onOpenBooking(serviceId);
    } else if (onBookNow) {
      onBookNow(serviceId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', view: 'home' },
    { label: 'Services', view: 'services' },
    { label: 'How It Works', view: 'how-it-works' },
    { label: 'Why Us', view: 'why-choose-us' },
    { label: 'Testimonials', view: 'testimonials' },
    { label: 'Insights', view: 'insights' },
    { label: 'FAQ', view: 'faq' },
    { label: 'Contact', view: 'contact' },
  ];

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0B0820]/90 backdrop-blur-md border-b border-[#D4AF37]/25 py-3 shadow-2xl shadow-black/60' 
          : 'bg-gradient-to-b from-[#0B0820]/95 to-transparent py-5 border-b border-[#D4AF37]/25'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button 
          id="nav-brand-logo"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer"
        >
          <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#15102E] to-[#0B0820] border border-[#D4AF37]/40 flex items-center justify-center shadow-lg shadow-[#D4AF37]/15 group-hover:border-[#D4AF37] transition-all">
            <Sparkles className="w-5 h-5 text-[#F4D58D] group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-full border border-[#D4AF37]/25 animate-ping opacity-25 pointer-events-none" />
          </div>
          <div>
            <span className="block font-serif text-lg sm:text-xl font-bold tracking-wider text-[#F8F3E7] group-hover:text-[#F4D58D] transition-colors">
              KinnerGurumaa
            </span>
            <span className="block text-[9px] uppercase tracking-[0.25em] text-[#F4D58D] font-medium">
              Sanctuary of Vedic Wisdom
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <button
              key={link.view}
              id={`nav-link-${link.view}`}
              onClick={() => handleNavClick(link.view)}
              className={`px-2.5 xl:px-3 py-2 text-sm tracking-wide rounded-lg transition-all cursor-pointer ${
                currentView === link.view
                  ? 'text-[#F8F3E7] bg-[#15102E] border border-[#D4AF37]/30 shadow-inner'
                  : 'text-[#C8C1B5] hover:text-[#F8F3E7] hover:bg-[#15102E]/60'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right Action Utilities */}
        <div className="hidden sm:flex items-center gap-2.5 xl:gap-3">
          {/* Direct Phone Link / Call CTA */}
          <a
            id="nav-call-now-btn"
            href="tel:+919929936478"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#15102E] border border-[#D4AF37]/25 text-xs font-semibold text-[#F8F3E7] hover:text-[#F4D58D] hover:border-[#D4AF37] transition-all cursor-pointer shadow-sm"
            title="Call +91 99299 36478"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="hidden xl:inline text-[#F8F3E7]">+91 99299 36478</span>
            <span className="xl:hidden">Call Now</span>
          </a>

          {/* WhatsApp Direct Chat */}
          <a
            id="nav-whatsapp-btn"
            href="https://wa.me/919929936478?text=Hello%20KinnerGurumaa%2C%20I%20would%20like%20to%20consult%20regarding%20Vedic%20Astrology."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-xs font-semibold text-[#25D366] hover:bg-[#25D366]/30 transition-all cursor-pointer shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>WhatsApp</span>
          </a>

          {/* Primary Consultation Inquiry CTA */}
          <button
            id="nav-inquire-consultation-btn"
            onClick={() => handleInquiryClick()}
            className="relative group overflow-hidden px-4 py-2 rounded-xl bg-gradient-to-r from-[#F4D58D] via-[#D4AF37] to-[#B8860B] text-[#0B0820] text-xs font-semibold tracking-wide shadow-md shadow-[#D4AF37]/20 hover:shadow-lg hover:shadow-[#D4AF37]/35 transition-all cursor-pointer active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-1.5 font-bold">
              <Calendar className="w-3.5 h-3.5 text-[#0B0820]" />
              Consult Gurumaa
            </span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="tel:+919929936478"
            className="p-2 rounded-lg bg-[#15102E] border border-[#D4AF37]/25 text-[#F4D58D]"
            aria-label="Call Now"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            id="mobile-nav-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#15102E] border border-[#D4AF37]/30 text-[#F8F3E7] hover:text-[#F4D58D] cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#0B0820]/95 backdrop-blur-xl border-b border-[#D4AF37]/30 px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.view}
                onClick={() => {
                  handleNavClick(link.view);
                  setMobileMenuOpen(false);
                }}
                className={`w-full py-3 px-4 rounded-xl text-left text-sm font-medium transition-colors flex items-center justify-between ${
                  currentView === link.view
                    ? 'bg-[#15102E] text-[#F4D58D] border border-[#D4AF37]/30'
                    : 'text-[#C8C1B5] hover:bg-[#15102E]/60 hover:text-[#F8F3E7]'
                }`}
              >
                <span>{link.label}</span>
                {currentView === link.view && <Sparkles className="w-4 h-4 text-[#D4AF37]" />}
              </button>
            ))}

            <div className="h-px bg-white/10 my-2" />

            <button
              onClick={() => {
                handleInquiryClick();
                setMobileMenuOpen(false);
              }}
              className="w-full mt-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#F4D58D] via-[#D4AF37] to-[#B8860B] text-[#0B0820] font-bold text-sm text-center shadow-lg shadow-[#D4AF37]/25 cursor-pointer"
            >
              Consult Gurumaa / Inquire
            </button>

            {/* Direct Contact Actions in Mobile Menu */}
            <div className="pt-2 flex flex-col gap-2">
              <a
                id="mobile-nav-call-btn"
                href="tel:+919929936478"
                className="w-full py-3 px-4 rounded-xl bg-[#15102E] border border-[#D4AF37]/25 text-[#F8F3E7] text-sm font-semibold flex items-center justify-center gap-2 hover:text-[#F4D58D] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call Now: +91 99299 36478</span>
              </a>

              <a
                id="mobile-nav-whatsapp-btn"
                href="https://wa.me/919929936478?text=Hello%20KinnerGurumaa%2C%20I%20would%20like%20to%20know%20more%20about%20your%20astrology%20consultation%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#25D366]/30 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
