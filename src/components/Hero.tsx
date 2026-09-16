import React from 'react';
import { 
  Sparkles, 
  Calendar, 
  ArrowRight, 
  ShieldCheck, 
  Compass, 
  Star, 
  CheckCircle2, 
  Moon, 
  Sun,
  Phone,
  MessageCircle
} from 'lucide-react';

interface HeroProps {
  onOpenBooking?: () => void;
  onOpenInquiry?: () => void;
  onExploreServices: () => void;
  onLearnMore?: () => void;
  onOpenBirthChart?: () => void;
  onBookConsultation?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onOpenInquiry,
  onExploreServices,
  onBookConsultation
}) => {
  const handleInquiry = () => {
    if (onOpenInquiry) {
      onOpenInquiry();
    } else if (onOpenBooking) {
      onOpenBooking();
    } else if (onBookConsultation) {
      onBookConsultation();
    }
  };

  return (
    <section 
      id="hero-section"
      className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Subtle Cosmic Background Gradient Layers */}
      <div className="absolute inset-0 bg-[#0B0820] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(21,16,46,0.6)_0%,rgba(11,8,32,0.8)_55%,transparent_85%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Star Constellation Grid */}
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(rgba(212,175,55,0.25)_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Premium Brand Headline & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Top Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#15102E] border border-[#D4AF37]/25 mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#F4D58D]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#F4D58D]">
                Classical Parashari & Jaimini Vedic Traditions
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#F8F3E7] tracking-tight leading-[1.12] mb-6">
              Discover What the <span className="gold-gradient-text">Stars Have Planned</span> for You.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#C8C1B5] leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0 mb-8">
              Get personalized Vedic astrology guidance for love, career, marriage, business and the important decisions shaping your future. Delivered by certified scholars through confidential 1-on-1 consultations.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <button
                id="hero-inquire-consultation-btn"
                onClick={handleInquiry}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#F4D58D] via-[#D4AF37] to-[#B8860B] text-[#0B0820] font-bold text-sm sm:text-base tracking-wide shadow-xl shadow-[#D4AF37]/25 hover:shadow-2xl hover:shadow-[#D4AF37]/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2.5"
              >
                <Calendar className="w-4 h-4 text-[#0B0820]" />
                <span>Consult Gurumaa / Inquire</span>
                <ArrowRight className="w-4 h-4 text-[#0B0820]" />
              </button>

              <a
                id="hero-whatsapp-btn"
                href="https://wa.me/919929936478?text=Hello%20KinnerGurumaa%2C%20I%20would%20like%20to%20consult%20regarding%20Vedic%20Astrology."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 hover:bg-[#25D366]/30 text-[#25D366] text-sm sm:text-base font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                id="hero-explore-process-btn"
                onClick={onExploreServices}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#15102E] border border-[#D4AF37]/25 text-[#F8F3E7] hover:text-[#F4D58D] hover:border-[#D4AF37]/50 text-sm sm:text-base font-medium transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Consultation Process</span>
                <Compass className="w-4 h-4 text-[#D4AF37]" />
              </button>
            </div>

            {/* Helpline bar */}
            <div className="mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-[#15102E] border border-[#D4AF37]/20 text-xs text-[#C8C1B5]">
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Direct Astrology Helpline:</span>
              <a href="tel:+919929936478" className="font-bold text-[#F4D58D] hover:underline">
                +91 99299 36478
              </a>
            </div>

            {/* Trust Assurance Checklist */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-[#C8C1B5]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>100% Confidential & Private</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>No Fear-Based Superstitions</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-[#F4D58D] fill-[#F4D58D]" />
                <span>4.9/5 Rating across 10k+ Sessions</span>
              </div>
            </div>

          </div>

          {/* Right Column: Celestial Zodiac Mandala & Interactive Astrological Visual */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
              
              {/* Outer Radiant Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#15102E]/60 via-[#D4AF37]/15 to-transparent blur-2xl animate-pulse" />

              {/* Rotating Concentric Zodiac Rings */}
              <div className="absolute inset-2 rounded-full border border-[#D4AF37]/25 animate-[spin_120s_linear_infinite]" />
              <div className="absolute inset-8 rounded-full border border-dashed border-[#D4AF37]/30 animate-[spin_80s_linear_infinite_reverse]" />
              <div className="absolute inset-16 rounded-full border border-[#D4AF37]/15" />

              {/* Classical Vedic 12-House Mandala Centerpiece */}
              <div className="relative w-72 h-72 rounded-2xl glass-panel p-5 flex flex-col justify-between shadow-2xl border border-[#D4AF37]/35">
                
                {/* Micro Header */}
                <div className="flex items-center justify-between border-b border-[#D4AF37]/20 pb-3">
                  <div className="flex items-center gap-2">
                    <Sun className="w-4 h-4 text-[#D4AF37]" />
                    <span className="text-[11px] font-serif uppercase tracking-widest text-[#F4D58D]">
                      Janam Kundli Matrix
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-[#C8C1B5]">
                    <Moon className="w-3 h-3 text-[#F4D58D]" />
                    <span>Sidereal Rashi</span>
                  </div>
                </div>

                {/* Classical North Indian Diamond Diagram (SVG) */}
                <div className="relative my-auto flex items-center justify-center py-2">
                  <svg 
                    viewBox="0 0 200 200" 
                    className="w-48 h-48 drop-shadow-[0_0_12px_rgba(212,175,55,0.25)] text-[#D4AF37]"
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.2"
                  >
                    {/* Outer Square */}
                    <rect x="10" y="10" width="180" height="180" stroke="rgba(212,175,55,0.4)" strokeWidth="1.5" />
                    
                    {/* Diagonals */}
                    <line x1="10" y1="10" x2="190" y2="190" stroke="rgba(212,175,55,0.3)" />
                    <line x1="190" y1="10" x2="10" y2="190" stroke="rgba(212,175,55,0.3)" />
                    
                    {/* Diamond */}
                    <polygon points="100,10 190,100 100,190 10,100" stroke="#D4AF37" strokeWidth="1.8" />

                    {/* House Annotations & Planets */}
                    <text x="100" y="65" textAnchor="middle" fill="#F8F3E7" fontSize="10" fontFamily="serif" fontWeight="bold">Lagna</text>
                    <text x="100" y="80" textAnchor="middle" fill="#F4D58D" fontSize="8">Su • Ve</text>
                    
                    <text x="60" y="45" textAnchor="middle" fill="#F8F3E7" fontSize="9">H2</text>
                    <text x="60" y="58" textAnchor="middle" fill="#F4D58D" fontSize="8">Me (Ex)</text>

                    <text x="140" y="45" textAnchor="middle" fill="#F8F3E7" fontSize="9">H12</text>
                    <text x="140" y="58" textAnchor="middle" fill="#F4D58D" fontSize="8">Ju (Ex)</text>

                    <text x="100" y="145" textAnchor="middle" fill="#F8F3E7" fontSize="9">H7</text>
                    <text x="100" y="158" textAnchor="middle" fill="#F4D58D" fontSize="8">Shani</text>

                    <text x="45" y="105" textAnchor="middle" fill="#F8F3E7" fontSize="9">H4</text>
                    <text x="45" y="118" textAnchor="middle" fill="#F4D58D" fontSize="8">Rahu</text>

                    <text x="155" y="105" textAnchor="middle" fill="#F8F3E7" fontSize="9">H10</text>
                    <text x="155" y="118" textAnchor="middle" fill="#F4D58D" fontSize="8">Mo (Ex)</text>
                  </svg>
                </div>

                {/* Real-time Transit Insight Pill */}
                <div className="pt-2 border-t border-[#D4AF37]/20 flex items-center justify-between text-[11px]">
                  <span className="text-[#C8C1B5]">Current Major Transit:</span>
                  <span className="text-[#F4D58D] font-semibold">Jupiter in Gemini (Mithuna)</span>
                </div>

              </div>

              {/* Floating Orbiting Badges */}
              <div className="absolute -bottom-3 -left-4 bg-[#15102E] border border-[#D4AF37]/25 px-3.5 py-2 rounded-xl shadow-xl backdrop-blur-md flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs text-[#F8F3E7] font-medium">Acharyas Online for Booking</span>
              </div>

              <div className="absolute -top-3 -right-4 bg-[#15102E] border border-[#D4AF37]/25 px-3.5 py-2 rounded-xl shadow-xl backdrop-blur-md flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#F4D58D]" />
                <span className="text-xs text-[#F8F3E7] font-medium">Precision to 1 Second</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
