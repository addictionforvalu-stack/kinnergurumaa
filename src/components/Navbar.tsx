import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Menu, 
  X, 
  User, 
  Calendar, 
  ChevronDown, 
  LogOut,
  Shield,
  Compass,
  Phone,
  MessageCircle
} from 'lucide-react';
import { UserProfile } from '../types';

interface NavbarProps {
  currentView: string;
  onNavigate?: (view: string) => void;
  setCurrentView?: (view: string) => void;
  currentUser: UserProfile | null;
  onOpenAuth: () => void;
  onLogout: () => void;
  onOpenBooking?: (serviceId?: string) => void;
  onBookNow?: (serviceId?: string) => void;
  currency?: 'USD' | 'INR';
  setCurrency?: (c: 'USD' | 'INR') => void;
  onToggleCurrency?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  setCurrentView,
  currentUser,
  onOpenAuth,
  onLogout,
  onOpenBooking,
  onBookNow,
  currency = 'USD',
  setCurrency,
  onToggleCurrency
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const handleNavClick = (view: string) => {
    if (onNavigate) {
      onNavigate(view);
    } else if (setCurrentView) {
      setCurrentView(view);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBookingClick = (serviceId?: string) => {
    if (onOpenBooking) {
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
    { label: 'Astrologers', view: 'astrologers' },
    { label: 'How It Works', view: 'how-it-works' },
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
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#15102E] border border-[#D4AF37]/25 text-xs font-semibold text-[#F8F3E7] hover:text-[#F4D58D] hover:border-[#D4AF37] transition-all cursor-pointer shadow-sm"
            title="Call +91 99299 36478"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="hidden xl:inline text-[#F8F3E7]">+91 99299 36478</span>
            <span className="xl:hidden">Call Now</span>
          </a>

          {/* User Profile / Dashboard Button */}
          {currentUser ? (
            <div className="relative">
              <button
                id="nav-user-dropdown-btn"
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#15102E] border border-[#D4AF37]/25 text-xs text-[#F8F3E7] hover:border-[#D4AF37] transition-all cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#F4D58D] text-[#0B0820] font-bold flex items-center justify-center text-[10px]">
                  {currentUser.name.charAt(0)}
                </div>
                <span className="max-w-[90px] truncate font-medium">{currentUser.name}</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#D4AF37]" />
              </button>

              {userDropdownOpen && (
                <div 
                  id="nav-user-dropdown-menu"
                  className="absolute right-0 mt-2 w-52 rounded-xl bg-[#15102E] border border-[#D4AF37]/30 shadow-2xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150"
                >
                  <div className="px-4 py-2 border-b border-white/10">
                    <p className="text-xs font-semibold text-[#F8F3E7] truncate">{currentUser.name}</p>
                    <p className="text-[10px] text-[#C8C1B5] truncate">{currentUser.email}</p>
                  </div>
                  <button
                    id="dropdown-dashboard-btn"
                    onClick={() => {
                      handleNavClick('dashboard');
                      setUserDropdownOpen(false);
                    }}
                    className="w-full px-4 py-2.5 text-left text-xs text-[#F8F3E7] hover:bg-[#0B0820] hover:text-[#F4D58D] flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <Compass className="w-4 h-4 text-[#D4AF37]" />
                    Client Dashboard & Kundli
                  </button>
                  <button
                    id="dropdown-logout-btn"
                    onClick={() => {
                      onLogout();
                      setUserDropdownOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left text-xs text-rose-300 hover:bg-rose-950/40 flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              id="nav-login-btn"
              onClick={onOpenAuth}
              className="px-3.5 py-2 text-xs font-medium tracking-wide text-[#F8F3E7] hover:text-[#F4D58D] transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <User className="w-3.5 h-3.5 text-[#D4AF37]" />
              Sign In
            </button>
          )}

          {/* Primary Consultation Booking CTA */}
          <button
            id="nav-book-consultation-btn"
            onClick={() => handleBookingClick()}
            className="relative group overflow-hidden px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#F4D58D] via-[#D4AF37] to-[#B8860B] text-[#0B0820] text-xs font-semibold tracking-wide shadow-md shadow-[#D4AF37]/20 hover:shadow-lg hover:shadow-[#D4AF37]/35 transition-all cursor-pointer active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-1.5 font-bold">
              <Calendar className="w-3.5 h-3.5 text-[#0B0820]" />
              Book Consultation
            </span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            id="nav-mobile-book-btn"
            onClick={() => handleBookingClick()}
            className="sm:hidden px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#F4D58D] via-[#D4AF37] to-[#B8860B] text-[#0B0820] text-[11px] font-bold shadow-md shadow-[#D4AF37]/20"
          >
            Book
          </button>
          <button
            id="nav-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#15102E] border border-[#D4AF37]/25 text-[#F8F3E7] hover:text-[#D4AF37]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="nav-mobile-drawer"
          className="lg:hidden fixed inset-x-0 top-[65px] bg-[#0B0820]/98 backdrop-blur-2xl border-b border-[#D4AF37]/25 p-6 shadow-2xl max-h-[85vh] overflow-y-auto z-50 animate-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.view}
                onClick={() => {
                  handleNavClick(link.view);
                  setMobileMenuOpen(false);
                }}
                className={`py-3 px-4 rounded-xl text-left text-sm font-medium tracking-wide flex items-center justify-between ${
                  currentView === link.view
                    ? 'bg-[#15102E] text-[#F4D58D] border border-[#D4AF37]/30'
                    : 'text-[#C8C1B5] hover:text-[#F8F3E7] hover:bg-[#15102E]/60'
                }`}
              >
                <span>{link.label}</span>
                {currentView === link.view && <Sparkles className="w-4 h-4 text-[#D4AF37]" />}
              </button>
            ))}

            <div className="h-px bg-white/10 my-2" />

            {currentUser ? (
              <>
                <button
                  onClick={() => {
                    handleNavClick('dashboard');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full mt-2 py-3 px-4 rounded-xl bg-[#15102E] border border-[#D4AF37]/25 text-[#F4D58D] text-sm font-semibold flex items-center justify-center gap-2"
                >
                  <Compass className="w-4 h-4" />
                  Go to Client Dashboard
                </button>
                <button
                  onClick={() => {
                    onLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2.5 text-center text-xs text-rose-300"
                >
                  Sign Out ({currentUser.name})
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  onOpenAuth();
                  setMobileMenuOpen(false);
                }}
                className="w-full mt-2 py-3 px-4 rounded-xl bg-[#15102E] border border-[#D4AF37]/25 text-[#F8F3E7] text-sm font-medium flex items-center justify-center gap-2"
              >
                <User className="w-4 h-4 text-[#D4AF37]" />
                Sign In to Account
              </button>
            )}

            <button
              onClick={() => {
                handleBookingClick();
                setMobileMenuOpen(false);
              }}
              className="w-full mt-3 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#F4D58D] via-[#D4AF37] to-[#B8860B] text-[#0B0820] font-bold text-sm text-center shadow-lg shadow-[#D4AF37]/25 cursor-pointer"
            >
              Book a Consultation
            </button>

            {/* Direct Contact Actions in Mobile Menu */}
            <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
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
