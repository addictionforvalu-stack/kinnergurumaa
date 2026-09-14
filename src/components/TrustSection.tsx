import React from 'react';
import { TRUST_METRICS } from '../data/astrologyData';
import { Award, ShieldCheck, HeartHandshake, Globe2 } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const trustIcons = [
    <Award className="w-5 h-5 text-[#D4AF37]" key="award" />,
    <ShieldCheck className="w-5 h-5 text-[#D4AF37]" key="shield" />,
    <HeartHandshake className="w-5 h-5 text-[#D4AF37]" key="handshake" />,
    <Globe2 className="w-5 h-5 text-[#D4AF37]" key="globe" />,
  ];

  return (
    <section 
      id="trust-section"
      className="relative py-16 bg-[#0B0820] border-y border-[#D4AF37]/25"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Supporting Trust Tagline */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="font-serif text-lg sm:text-xl text-[#F4D58D] tracking-wide mb-2">
            Trusted by people seeking clarity, direction and meaningful guidance.
          </p>
          <p className="text-sm text-[#C8C1B5]">
            Rooted in classical Vedic parampara (authentic lineages) and verified client outcomes worldwide.
          </p>
        </div>

        {/* 4 Statistics Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_METRICS.map((metric, idx) => (
            <div
              key={metric.label}
              id={`trust-card-${idx}`}
              className="relative rounded-2xl bg-[#15102E] border border-[#D4AF37]/25 p-6 flex flex-col justify-between hover:border-[#D4AF37]/60 transition-all duration-300 group shadow-lg hover:shadow-xl hover:shadow-[#D4AF37]/10"
            >
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#0B0820] border border-[#D4AF37]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {trustIcons[idx]}
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#D4AF37]">
                  Verified
                </span>
              </div>

              {/* Big Stat Value */}
              <div className="mb-2">
                <span className="text-3xl sm:text-4xl font-serif font-bold text-[#F8F3E7] tracking-tight">
                  {metric.value}
                </span>
              </div>

              {/* Stat Label & Subtitle */}
              <div>
                <h4 className="text-sm font-semibold text-[#F4D58D] mb-1">
                  {metric.label}
                </h4>
                <p className="text-xs text-[#C8C1B5] leading-relaxed">
                  {metric.subtitle}
                </p>
              </div>

              {/* Background Glow on Hover */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Press / Trust badges line */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 sm:gap-16 text-xs tracking-wider uppercase text-[#C8C1B5] font-medium">
          <span className="flex items-center gap-2">✦ Traditional Sanskrit Scholars</span>
          <span className="flex items-center gap-2">✦ ICAS & Sanskrit University Accredited</span>
          <span className="flex items-center gap-2">✦ 256-Bit SSL Encrypted Sessions</span>
          <span className="flex items-center gap-2">✦ 100% Satisfaction Guarantee</span>
        </div>

      </div>
    </section>
  );
};
