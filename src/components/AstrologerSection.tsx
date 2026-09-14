import React, { useState } from 'react';
import { ASTROLOGERS_DATA } from '../data/astrologyData';
import { Astrologer } from '../types';
import { 
  Award, 
  Star, 
  Calendar, 
  Languages, 
  BookOpen, 
  CheckCircle2, 
  ChevronRight,
  UserCheck
} from 'lucide-react';

interface AstrologerSectionProps {
  onSelectAstrologerForBooking: (astrologerId: string) => void;
  currency: 'USD' | 'INR';
}

export const AstrologerSection: React.FC<AstrologerSectionProps> = ({
  onSelectAstrologerForBooking,
  currency
}) => {
  const [selectedBioModal, setSelectedBioModal] = useState<Astrologer | null>(null);

  return (
    <section 
      id="astrologers-section"
      className="relative py-24 bg-[#0B0820] border-t border-[#D4AF37]/25"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#15102E] border border-[#D4AF37]/25 text-xs text-[#F4D58D] mb-4 shadow-sm">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Parampara & Lineage Scholars</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#F8F3E7] mb-5">
            Meet Your <span className="gold-gradient-text">Astrologer</span>
          </h2>
          <p className="text-base text-[#C8C1B5] leading-relaxed">
            Directly converse with revered Acharyas combining traditional Gurukul training with empathetic contemporary insight.
          </p>
        </div>

        {/* Astrologers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ASTROLOGERS_DATA.map((expert) => (
            <div
              key={expert.id}
              id={`astrologer-card-${expert.id}`}
              className="rounded-2xl bg-[#15102E] border border-[#D4AF37]/25 overflow-hidden flex flex-col justify-between hover:border-[#D4AF37]/60 hover:shadow-xl hover:shadow-[#D4AF37]/10 transition-all duration-300 group"
            >
              <div>
                {/* Image & Experience Tag */}
                <div className="relative h-64 overflow-hidden bg-[#0B0820]">
                  <img 
                    src={expert.avatarUrl} 
                    alt={expert.name} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#15102E] via-transparent to-black/30" />
                  
                  {/* Rating Tag */}
                  <div className="absolute top-3 right-3 bg-[#0B0820]/85 backdrop-blur-md px-2.5 py-1 rounded-lg border border-[#D4AF37]/25 flex items-center gap-1.5 text-xs text-[#F8F3E7]">
                    <Star className="w-3.5 h-3.5 text-[#F4D58D] fill-[#F4D58D]" />
                    <span className="font-bold">{expert.rating}</span>
                    <span className="text-[10px] text-[#C8C1B5]">({expert.reviewCount})</span>
                  </div>

                  {/* Experience Badge */}
                  <div className="absolute bottom-3 left-3 bg-[#0B0820]/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-[#D4AF37]/25 text-[11px] text-[#F4D58D] font-medium">
                    {expert.experienceYears}+ Years Experience
                  </div>
                </div>

                {/* Profile Details */}
                <div className="p-5">
                  <h3 className="text-lg font-serif font-bold text-[#F8F3E7] group-hover:text-[#F4D58D] transition-colors mb-1">
                    {expert.name}
                  </h3>
                  <p className="text-xs text-[#D4AF37] font-medium mb-3">
                    {expert.title}
                  </p>
                  <p className="text-[11px] text-[#C8C1B5] line-clamp-1 flex items-center gap-1 mb-4">
                    <Award className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                    <span>{expert.lineageOrDegree}</span>
                  </p>

                  {/* Specialties Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {expert.specialties.slice(0, 3).map((spec, i) => (
                      <span 
                        key={i} 
                        className="text-[10px] bg-[#0B0820] text-[#F4D58D] px-2 py-0.5 rounded-md border border-[#D4AF37]/25"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Languages */}
                  <div className="flex items-center gap-1 text-[11px] text-[#C8C1B5] mb-2">
                    <Languages className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Speaks: {expert.languages.join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-5 pt-0 mt-auto border-t border-white/5">
                <div className="flex items-baseline justify-between mb-3 pt-3">
                  <span className="text-[10px] uppercase text-[#C8C1B5]">Consultation</span>
                  <span className="text-xs font-semibold text-[#F4D58D]">
                    Available for Booking
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    id={`view-profile-${expert.id}`}
                    onClick={() => setSelectedBioModal(expert)}
                    className="w-full py-2 rounded-xl bg-[#0B0820] border border-[#D4AF37]/25 text-xs text-[#F8F3E7] hover:text-[#F4D58D] hover:border-[#D4AF37] transition-all text-center cursor-pointer"
                  >
                    View Bio
                  </button>
                  <button
                    id={`book-astrologer-${expert.id}`}
                    onClick={() => onSelectAstrologerForBooking(expert.id)}
                    className="w-full py-2 rounded-xl bg-gradient-to-r from-[#F4D58D] via-[#D4AF37] to-[#B8860B] text-[#0B0820] font-bold text-xs hover:shadow-lg transition-all text-center cursor-pointer flex items-center justify-center gap-1"
                  >
                    <span>Book</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Profile Bio Modal */}
      {selectedBioModal && (
        <div 
          id="astrologer-bio-modal"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-2xl bg-[#15102E] border-2 border-[#D4AF37]/35 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedBioModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-all cursor-pointer"
            >
              ✕
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-start mb-6">
              <img 
                src={selectedBioModal.avatarUrl} 
                alt={selectedBioModal.name} 
                className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover border-2 border-[#D4AF37]/35 shrink-0"
              />
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D4AF37]/15 text-[#F4D58D] text-[10px] font-semibold uppercase mb-2">
                  <Star className="w-3 h-3 fill-[#F4D58D]" />
                  <span>{selectedBioModal.rating} ({selectedBioModal.consultationsCount}+ sessions)</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#F8F3E7] mb-1">
                  {selectedBioModal.name}
                </h3>
                <p className="text-xs text-[#D4AF37] font-medium mb-2">{selectedBioModal.title}</p>
                <p className="text-xs text-[#C8C1B5] mb-3">{selectedBioModal.lineageOrDegree}</p>
                <div className="text-xs text-[#F8F3E7]">
                  <span className="font-semibold text-[#F4D58D]">Languages: </span>
                  {selectedBioModal.languages.join(', ')}
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-6 text-xs text-[#C8C1B5] leading-relaxed">
              <div>
                <h4 className="font-serif text-sm font-semibold text-[#F4D58D] mb-1">Scholarly Background & Lineage</h4>
                <p>{selectedBioModal.bio}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#0B0820] border border-[#D4AF37]/25 italic text-[#F4D58D]">
                "{selectedBioModal.philosophy}"
              </div>

              <div>
                <h4 className="font-serif text-sm font-semibold text-[#F4D58D] mb-2">Core Areas of Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedBioModal.specialties.map((sp, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-[#0B0820] text-[#F8F3E7] text-xs border border-[#D4AF37]/25">
                      ✦ {sp}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-[#C8C1B5] uppercase">Session Format</span>
                <p className="text-sm font-serif font-bold text-[#F4D58D]">
                  Personal 1-on-1 Consultation
                </p>
              </div>
              <button
                onClick={() => {
                  onSelectAstrologerForBooking(selectedBioModal.id);
                  setSelectedBioModal(null);
                }}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#F4D58D] via-[#D4AF37] to-[#B8860B] text-[#0B0820] font-bold text-xs shadow-lg cursor-pointer"
              >
                Book Session with {selectedBioModal.name.split(' ')[0]}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
