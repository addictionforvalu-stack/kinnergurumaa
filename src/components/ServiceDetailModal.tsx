import React from 'react';
import { 
  X, 
  Sparkles, 
  Clock, 
  Check, 
  Phone, 
  MessageCircle, 
  Calendar,
  HelpCircle,
  ShieldCheck
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestConsultation: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onRequestConsultation
}) => {
  if (!service) return null;

  return (
    <div 
      id="service-detail-modal" 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#15102E] border border-[#D4AF37]/35 shadow-2xl p-6 sm:p-8 text-[#F8F3E7]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#0B0820] border border-[#D4AF37]/25 flex items-center justify-center text-[#C8C1B5] hover:text-[#F8F3E7] hover:border-[#D4AF37] transition-all cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B0820] border border-[#D4AF37]/30 text-xs font-semibold text-[#F4D58D]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Vedic Consultation</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B0820] border border-white/10 text-xs text-[#C8C1B5]">
            <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{service.durationMinutes} Minutes Session</span>
          </div>
        </div>

        {/* Sanskrit & Title */}
        {service.sanskritName && (
          <span className="text-xs font-serif uppercase tracking-widest text-[#D4AF37] block mb-1">
            {service.sanskritName}
          </span>
        )}
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F8F3E7] mb-4">
          {service.title}
        </h3>

        {/* Full Description */}
        <p className="text-xs sm:text-sm text-[#C8C1B5] leading-relaxed mb-6">
          {service.fullDesc}
        </p>

        {/* Highlights Grid */}
        <div className="mb-6 p-4 rounded-2xl bg-[#0B0820] border border-[#D4AF37]/25">
          <h4 className="font-serif text-sm font-bold text-[#F4D58D] mb-3 uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Consultation Coverage & Highlights</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#C8C1B5]">
            {service.highlights.map((hl, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{hl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sample Questions Typically Answered */}
        {service.sampleQuestions && service.sampleQuestions.length > 0 && (
          <div className="mb-6">
            <h4 className="font-serif text-xs font-bold text-[#F8F3E7] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Questions Answered in This Session</span>
            </h4>
            <div className="space-y-1.5 text-xs text-[#C8C1B5]">
              {service.sampleQuestions.map((q, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-[#0B0820]/60 border border-white/5 flex items-start gap-2">
                  <span className="text-[#F4D58D] font-bold">Q:</span>
                  <span>{q}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Assurance */}
        <div className="mb-6 flex items-center gap-2 text-xs text-[#C8C1B5]/80">
          <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
          <span>100% Confidential. Conducted directly by certified Acharya/Gurumaa.</span>
        </div>

        {/* Action CTAs */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => {
              onClose();
              onRequestConsultation(service.id);
            }}
            className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#F4D58D] via-[#D4AF37] to-[#B8860B] text-[#0B0820] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#0B0820]" />
            <span>Consult Now / Inquire</span>
          </button>

          <a
            href={`https://wa.me/919929936478?text=Hello%20KinnerGurumaa%2C%20I%20am%20interested%20in%20consultation%20for%20${encodeURIComponent(service.title)}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span>WhatsApp Us</span>
          </a>

          <a
            href="tel:+919929936478"
            className="py-3 px-4 rounded-xl bg-[#0B0820] border border-[#D4AF37]/30 text-[#F8F3E7] hover:text-[#F4D58D] hover:border-[#D4AF37] font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all"
          >
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            <span>Call Now</span>
          </a>
        </div>

      </div>
    </div>
  );
};
