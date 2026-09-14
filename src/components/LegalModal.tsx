import React from 'react';
import { X, ShieldCheck, FileText, Sparkles } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | 'refund' | 'disclaimer' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  return (
    <div 
      id="legal-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
    >
      <div 
        id="legal-modal-container"
        className="relative w-full max-w-2xl bg-[#15102E] border-2 border-[#D4AF37]/35 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto text-sm text-[#C8C1B5]"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#C8C1B5]/60 hover:text-[#F8F3E7] hover:bg-white/10 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'disclaimer' && (
          <div>
            <div className="flex items-center gap-2 mb-4 text-[#F4D58D]">
              <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
              <h3 className="text-2xl font-serif font-bold text-[#F8F3E7]">Astrology Disclaimer</h3>
            </div>
            <div className="p-4 rounded-xl bg-[#0B0820] border border-[#D4AF37]/25 text-xs text-[#F8F3E7] font-medium mb-6 leading-relaxed">
              "Astrology is intended for guidance and personal reflection and should not be considered a substitute for professional medical, legal, financial or mental-health advice."
            </div>
            <div className="space-y-4 text-xs leading-relaxed text-[#C8C1B5]">
              <p>
                <strong className="text-[#F8F3E7]">1. Guidance & Spiritual Reflection:</strong> Consultations at KinnerGurumaa are rooted in historical traditions of Vedic astrology (Jyotish Shastra). Readings reflect potential energetic trends, archetype patterns, and philosophical perspectives intended solely for self-reflection.
              </p>
              <p>
                <strong className="text-[#F8F3E7]">2. Free Will & Sovereignty:</strong> We hold that cosmic maps depict tendencies, while human consciousness and free will (Purushartha) dictate actual life choices. You remain solely responsible for any personal, business, or lifestyle decisions.
              </p>
              <p>
                <strong className="text-[#F8F3E7]">3. Professional Boundaries:</strong> Our astrologers do not dispense medical diagnoses, psychiatric therapy, formal financial investment advice, or courtroom legal representation. Always seek licensed professionals for such matters.
              </p>
            </div>
          </div>
        )}

        {type === 'privacy' && (
          <div>
            <div className="flex items-center gap-2 mb-4 text-[#F4D58D]">
              <FileText className="w-6 h-6 text-[#D4AF37]" />
              <h3 className="text-2xl font-serif font-bold text-[#F8F3E7]">Privacy & Sanctity Policy</h3>
            </div>
            <div className="space-y-4 text-xs leading-relaxed text-[#C8C1B5]">
              <p>
                <strong className="text-[#F8F3E7]">Confidentiality Guarantee:</strong> At KinnerGurumaa, the details of your birth chart, personal queries, recordings, and audio/video transcripts are strictly confidential. We do not sell, rent, or trade seeker information with any third parties or marketing networks.
              </p>
              <p>
                <strong className="text-[#F8F3E7]">Encryption:</strong> All personal data, including birth coordinates and payment details, is transmitted via TLS 1.3 encryption and stored in secured cloud environments adhering to SOC2 and ISO standards.
              </p>
              <p>
                <strong className="text-[#F8F3E7]">Right to Erasure:</strong> Clients can request complete erasure of their birth records and consultation notes at any time via our concierge desk.
              </p>
            </div>
          </div>
        )}

        {type === 'terms' && (
          <div>
            <div className="flex items-center gap-2 mb-4 text-[#F4D58D]">
              <FileText className="w-6 h-6 text-[#D4AF37]" />
              <h3 className="text-2xl font-serif font-bold text-[#F8F3E7]">Terms of Consultation</h3>
            </div>
            <div className="space-y-4 text-xs leading-relaxed text-[#C8C1B5]">
              <p>
                <strong className="text-[#F8F3E7]">Age of Majority:</strong> Seekers must be 18 years of age or older to book a one-on-one session. Consultations for minors (e.g. child chart analysis) must be requested directly by parents or legal guardians.
              </p>
              <p>
                <strong className="text-[#F8F3E7]">Punctuality:</strong> Consultations commence precisely at the booked time. In the event of a client delay, the session duration cannot be extended past the reserved window in order to honor succeeding seekers.
              </p>
              <p>
                <strong className="text-[#F8F3E7]">Code of Conduct:</strong> We maintain a sanctuary of mutual respect and spiritual dignity. Any abusive language will lead to immediate session termination without refund.
              </p>
            </div>
          </div>
        )}

        {type === 'refund' && (
          <div>
            <div className="flex items-center gap-2 mb-4 text-[#F4D58D]">
              <FileText className="w-6 h-6 text-[#D4AF37]" />
              <h3 className="text-2xl font-serif font-bold text-[#F8F3E7]">Rescheduling & Refund Policy</h3>
            </div>
            <div className="space-y-4 text-xs leading-relaxed text-[#C8C1B5]">
              <p>
                <strong className="text-[#F8F3E7]">Rescheduling Notice:</strong> You may reschedule your consultation at zero cost up to 24 hours prior to the session time via your dashboard or by emailing concierge@kinnergurumaa.com.
              </p>
              <p>
                <strong className="text-[#F8F3E7]">Cancellations:</strong> Cancellations made more than 24 hours in advance receive a full 100% refund. Cancellations made with less than 24 hours notice forfeit the pre-session chart preparation fee (50% of the consultation rate).
              </p>
              <p>
                <strong className="text-[#F8F3E7]">Satisfaction Pledge:</strong> If you feel your astrologer was unprepared or there were technical service interruptions from our side, we will promptly reschedule with another Senior Acharya or issue a full refund upon review.
              </p>
            </div>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-white/10 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#F4D58D] via-[#D4AF37] to-[#B8860B] text-[#0B0820] font-bold text-xs cursor-pointer hover:scale-105 transition-all"
          >
            I Understand & Accept
          </button>
        </div>

      </div>
    </div>
  );
};
