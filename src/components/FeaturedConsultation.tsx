import React from 'react';
import { 
  Sparkles, 
  Calendar, 
  Video, 
  FileText, 
  ShieldCheck, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  MessageCircle,
  Gem
} from 'lucide-react';

interface FeaturedConsultationProps {
  onBookNow?: () => void;
  onBookFeatured?: (serviceId?: string) => void;
  currency?: 'USD' | 'INR';
}

export const FeaturedConsultation: React.FC<FeaturedConsultationProps> = ({
  onBookNow,
  onBookFeatured
}) => {
  const handleBooking = () => {
    if (onBookNow) {
      onBookNow();
    } else if (onBookFeatured) {
      onBookFeatured('comprehensive-kundli-vimarsh');
    }
  };
  return (
    <section 
      id="featured-consultation-section"
      className="relative py-20 bg-[#0B0820]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Highlighted Container */}
        <div className="relative rounded-3xl overflow-hidden bg-[#15102E] border-2 border-[#D4AF37]/30 p-8 sm:p-12 shadow-2xl shadow-[#D4AF37]/10">
          
          {/* Subtle Corner Celestial Flourish */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-radial from-[#D4AF37]/15 via-transparent to-transparent blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-radial from-[#D4AF37]/10 via-transparent to-transparent blur-3xl pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Col: Narrative & Deliverables */}
            <div className="lg:col-span-7">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B0820] border border-[#D4AF37]/25 text-[#F4D58D] text-xs font-semibold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Signature Acharya Consultation</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#F8F3E7] leading-tight mb-6">
                Your Questions. Your Chart.{' '}
                <span className="gold-gradient-text block sm:inline">Your Personalized Guidance.</span>
              </h2>

              <p className="text-base text-[#C8C1B5] leading-relaxed mb-8">
                An exhaustive, unhurried 60-minute sanctuary designed for critical life transitions, complex karmic knots, and high-stakes decisions. Your chart is studied for 45 minutes by a senior Acharya before you even join the call.
              </p>

              {/* Feature Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0B0820] border border-[#D4AF37]/25">
                  <div className="w-8 h-8 rounded-lg bg-[#15102E] flex items-center justify-center shrink-0 border border-[#D4AF37]/30">
                    <Clock className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#F8F3E7] uppercase tracking-wide">60-Minute Intensive</h4>
                    <p className="text-[11px] text-[#C8C1B5]">Unhurried live session dedicated solely to your agenda</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0B0820] border border-[#D4AF37]/25">
                  <div className="w-8 h-8 rounded-lg bg-[#15102E] flex items-center justify-center shrink-0 border border-[#D4AF37]/30">
                    <Video className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#F8F3E7] uppercase tracking-wide">Secure Video or Audio</h4>
                    <p className="text-[11px] text-[#C8C1B5]">Private HD meeting with screen-shared Kundli analysis</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0B0820] border border-[#D4AF37]/25">
                  <div className="w-8 h-8 rounded-lg bg-[#15102E] flex items-center justify-center shrink-0 border border-[#D4AF37]/30">
                    <FileText className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#F8F3E7] uppercase tracking-wide">24-Page Dossier</h4>
                    <p className="text-[11px] text-[#C8C1B5]">Custom written planetary analysis & remedies PDF</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0B0820] border border-[#D4AF37]/25">
                  <div className="w-8 h-8 rounded-lg bg-[#15102E] flex items-center justify-center shrink-0 border border-[#D4AF37]/30">
                    <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#F8F3E7] uppercase tracking-wide">14-Day Post Follow-up</h4>
                    <p className="text-[11px] text-[#C8C1B5]">Direct messaging with your astrologer for follow-up queries</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Col: Booking Ticket & Guarantee */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#0B0820] border border-[#D4AF37]/30 p-6 sm:p-8 shadow-2xl relative">
                
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div>
                    <span className="text-xs font-serif tracking-widest text-[#D4AF37] uppercase">Signature Consultation</span>
                    <h3 className="text-lg font-serif font-bold text-[#F8F3E7]">Comprehensive Kundli Vimarsh</h3>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs font-semibold text-[#F4D58D]">
                      All Inclusions Covered
                    </span>
                  </div>
                </div>

                {/* Included Checklist */}
                <div className="space-y-3 mb-8">
                  {[
                    '12 Houses, D9 Navamsha & D10 Dashamsha review',
                    '3-Year Vimshottari Mahadasha roadmap',
                    'Remedies: Vedic Mantras, Gemstones, Charitable Muhurtas',
                    'HD Audio & Video recording saved to your dashboard',
                    'Full 100% satisfaction or complimentary re-session'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-[#C8C1B5]">
                      <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Big CTA */}
                <button
                  id="featured-book-session-btn"
                  onClick={handleBooking}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#F4D58D] via-[#D4AF37] to-[#B8860B] text-[#0B0820] font-bold text-sm tracking-wide shadow-xl shadow-[#D4AF37]/25 hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Your Session</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Security Tag */}
                <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-[#C8C1B5]/70">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Encrypted 256-bit Booking • Flexible Rescheduling</span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
