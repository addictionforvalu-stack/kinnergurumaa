import React from 'react';
import { Sparkles, Calendar, FileText, Video, Award, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onStartBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onStartBooking }) => {
  const steps = [
    {
      num: '01',
      title: 'Choose Your Consultation',
      desc: 'Select the focus area that aligns with your life priorities—from core Birth Chart analysis to Marriage compatibility or Career navigation.',
      icon: <Calendar className="w-6 h-6 text-[#D4AF37]" />,
      actionNote: 'Filter by duration & expertise'
    },
    {
      num: '02',
      title: 'Share Your Birth Details',
      desc: 'Provide your exact date, time, and city of birth. Our system prepares the astronomical Ephemeris data for your astrologer prior to the call.',
      icon: <FileText className="w-6 h-6 text-[#D4AF37]" />,
      actionNote: '100% encrypted & confidential'
    },
    {
      num: '03',
      title: 'One-on-One Consultation',
      desc: 'Connect via private audio call, WhatsApp, or video session. Walk through your Kundli, planetary alignments, and active Dasha transits without rush.',
      icon: <Video className="w-6 h-6 text-[#D4AF37]" />,
      actionNote: 'Unhurried personal guidance'
    },
    {
      num: '04',
      title: 'Receive Remedies & Guidance',
      desc: 'Get tailored Vedic remedies, astrological analysis, practical advice, mantra recommendations, and clarity on your life decisions.',
      icon: <Award className="w-6 h-6 text-[#D4AF37]" />,
      actionNote: 'Authentic Parashari remedies'
    }
  ];

  return (
    <section 
      id="how-it-works-section"
      className="relative py-24 bg-[#0B0820] border-t border-[#D4AF37]/25 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#15102E] border border-[#D4AF37]/25 text-xs text-[#F4D58D] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>The Sacred Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#F8F3E7] mb-5">
            How It <span className="gold-gradient-text">Works</span>
          </h2>
          <p className="text-base text-[#C8C1B5] leading-relaxed">
            From chart calculation to unhurried counsel: four simple steps to discover your cosmic blueprint.
          </p>
        </div>

        {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
        <div className="relative">
          
          {/* Connecting Line on Desktop (hidden on mobile) */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-[#D4AF37]/10 via-[#D4AF37]/40 to-[#D4AF37]/10 -translate-y-8 z-0 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={step.num}
                id={`how-it-works-step-${step.num}`}
                className="relative rounded-2xl bg-[#15102E] border border-[#D4AF37]/25 p-6 flex flex-col justify-between hover:border-[#D4AF37]/60 transition-all duration-300 group shadow-lg"
              >
                <div>
                  {/* Top Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-serif font-bold text-[#F4D58D] group-hover:text-[#D4AF37] transition-colors">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#0B0820] border border-[#D4AF37]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-serif font-bold text-[#F8F3E7] mb-3 group-hover:text-[#F4D58D] transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#C8C1B5] leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Action Note */}
                <div className="pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-[#D4AF37] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>{step.actionNote}</span>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Start Booking Banner CTA */}
        <div className="mt-14 text-center">
          <button
            id="how-it-works-start-btn"
            onClick={onStartBooking}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#F4D58D] via-[#D4AF37] to-[#B8860B] text-[#0B0820] text-sm font-bold shadow-lg shadow-[#D4AF37]/20 hover:shadow-xl hover:shadow-[#D4AF37]/35 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>Inquire for Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
