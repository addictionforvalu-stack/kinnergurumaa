import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  Phone, 
  MessageCircle, 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Send,
  HelpCircle
} from 'lucide-react';

interface ConsultationInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export const ConsultationInquiryModal: React.FC<ConsultationInquiryModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [consultationTopic, setConsultationTopic] = useState<string>(
    preselectedServiceId || 'General Vedic Astrology Consultation'
  );
  const [consultationMode, setConsultationMode] = useState<'call' | 'whatsapp' | 'video'>('call');
  const [dob, setDob] = useState('');
  const [tob, setTob] = useState('');
  const [pob, setPob] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedServiceId) {
      setConsultationTopic(preselectedServiceId);
    }
  }, [preselectedServiceId]);

  if (!isOpen) return null;

  const handleWhatsAppSubmit = () => {
    let text = `*New Astrology Consultation Inquiry - KinnerGurumaa*\n\n`;
    text += `*Name:* ${name.trim() || 'Guest'}\n`;
    text += `*Phone:* ${phone.trim() || 'Not provided'}\n`;
    text += `*Topic/Consultation:* ${consultationTopic}\n`;
    text += `*Mode:* ${consultationMode.toUpperCase()}\n`;
    if (dob) text += `*Date of Birth:* ${dob}\n`;
    if (tob) text += `*Time of Birth:* ${tob}\n`;
    if (pob) text += `*Place of Birth:* ${pob}\n`;
    if (message.trim()) text += `*Question/Query:* ${message.trim()}\n`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919929936478?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div 
      id="consultation-inquiry-modal" 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div 
        className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#15102E] border border-[#D4AF37]/35 shadow-2xl p-6 sm:p-8 text-[#F8F3E7]"
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#0B0820] border border-[#D4AF37]/25 flex items-center justify-center text-[#C8C1B5] hover:text-[#F8F3E7] hover:border-[#D4AF37] transition-all cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          /* Confirmation State */
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B0820] border border-[#D4AF37]/30 text-xs font-semibold text-[#F4D58D]">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Inquiry Received</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F8F3E7]">
              Namaste {name || 'Devotee'}, Thank You
            </h3>

            <p className="text-xs sm:text-sm text-[#C8C1B5] max-w-md mx-auto leading-relaxed">
              Your consultation request for <strong className="text-[#F4D58D]">{consultationTopic}</strong> has been logged. Our concierge will contact you directly on <strong className="text-[#F8F3E7]">{phone || 'your phone number'}</strong>.
            </p>

            <div className="p-4 rounded-xl bg-[#0B0820] border border-[#D4AF37]/25 max-w-md mx-auto text-left text-xs space-y-2">
              <div className="text-[#F4D58D] font-medium font-serif flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Immediate Priority Connect:</span>
              </div>
              <p className="text-[#C8C1B5]">
                You can also call or message us directly on WhatsApp right now for instant consultation slot availability:
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                <a
                  href="tel:+919929936478"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#F4D58D] via-[#D4AF37] to-[#B8860B] text-[#0B0820] font-bold text-xs flex items-center gap-1.5 shadow"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0B0820]" />
                  <span>Call: +91 99299 36478</span>
                </a>
                <a
                  href="https://wa.me/919929936478"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#25D366] text-white font-bold text-xs flex items-center gap-1.5 shadow"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-white" />
                  <span>WhatsApp: +91 99299 36478</span>
                </a>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={handleResetAndClose}
                className="px-6 py-2.5 rounded-xl bg-[#0B0820] border border-[#D4AF37]/30 text-xs font-semibold text-[#F8F3E7] hover:text-[#F4D58D] transition-colors cursor-pointer"
              >
                Close & Return to Sanctuary
              </button>
            </div>
          </div>
        ) : (
          /* Normal Inquiry Form */
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#0B0820] border border-[#D4AF37]/25 text-[10px] uppercase font-semibold text-[#F4D58D] tracking-wider mb-2">
                <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                <span>Vedic Astrology Consultation</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F8F3E7]">
                Connect with KinnerGurumaa
              </h3>
              <p className="text-xs text-[#C8C1B5] mt-1">
                Fill out this quick inquiry or connect instantly on WhatsApp/Phone. No complicated process or payment required.
              </p>
            </div>

            {/* Quick Direct Actions Box */}
            <div className="mb-6 p-3 rounded-2xl bg-[#0B0820] border border-[#D4AF37]/25 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-[#C8C1B5]">Direct Helpline:</span>
                <strong className="text-[#F4D58D]">+91 99299 36478</strong>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="tel:+919929936478"
                  className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#F4D58D] via-[#D4AF37] to-[#B8860B] text-[#0B0820] font-bold text-[11px] hover:scale-105 transition-all"
                >
                  Call Now
                </a>
                <a
                  href="https://wa.me/919929936478?text=Hello%20KinnerGurumaa%2C%20I%20would%20like%20to%20consult%20regarding%20Vedic%20Astrology."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#25D366] text-white font-bold text-[11px] hover:scale-105 transition-all flex items-center gap-1"
                >
                  <MessageCircle className="w-3 h-3" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
              
              {/* Select Consultation Topic */}
              <div>
                <label className="block text-[#C8C1B5] uppercase text-[10px] font-semibold mb-1">
                  Consultation Area / Topic
                </label>
                <select
                  value={consultationTopic}
                  onChange={(e) => setConsultationTopic(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#0B0820] border border-[#D4AF37]/30 text-[#F8F3E7] text-xs focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="General Vedic Astrology Consultation" className="bg-[#15102E] text-[#F8F3E7]">
                    General Vedic Astrology Consultation
                  </option>
                  <option value="Kundli / Birth Chart Analysis" className="bg-[#15102E] text-[#F8F3E7]">
                    Kundli / Birth Chart Analysis
                  </option>
                  <option value="Marriage & Relationship Compatibility" className="bg-[#15102E] text-[#F8F3E7]">
                    Marriage & Relationship Compatibility
                  </option>
                  <option value="Career, Business & Financial Guidance" className="bg-[#15102E] text-[#F8F3E7]">
                    Career, Business & Financial Guidance
                  </option>
                  <option value="Dosha Nivaran & Vedic Remedies" className="bg-[#15102E] text-[#F8F3E7]">
                    Dosha Nivaran & Vedic Remedies
                  </option>
                  <option value="Personal Spiritual Guidance" className="bg-[#15102E] text-[#F8F3E7]">
                    Personal Spiritual Guidance
                  </option>
                </select>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#C8C1B5] uppercase text-[10px] font-semibold mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#0B0820] border border-[#D4AF37]/25 text-[#F8F3E7] placeholder-[#C8C1B5]/40 text-xs focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-[#C8C1B5] uppercase text-[10px] font-semibold mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#0B0820] border border-[#D4AF37]/25 text-[#F8F3E7] placeholder-[#C8C1B5]/40 text-xs focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              {/* Preferred Mode */}
              <div>
                <label className="block text-[#C8C1B5] uppercase text-[10px] font-semibold mb-1">
                  Preferred Consultation Mode
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setConsultationMode('call')}
                    className={`py-2 px-3 rounded-xl border text-center transition-all cursor-pointer ${
                      consultationMode === 'call'
                        ? 'bg-[#0B0820] border-[#D4AF37] text-[#F4D58D] font-bold shadow'
                        : 'bg-[#0B0820]/60 border-white/10 text-[#C8C1B5]'
                    }`}
                  >
                    Phone Call
                  </button>
                  <button
                    type="button"
                    onClick={() => setConsultationMode('whatsapp')}
                    className={`py-2 px-3 rounded-xl border text-center transition-all cursor-pointer ${
                      consultationMode === 'whatsapp'
                        ? 'bg-[#0B0820] border-[#D4AF37] text-[#F4D58D] font-bold shadow'
                        : 'bg-[#0B0820]/60 border-white/10 text-[#C8C1B5]'
                    }`}
                  >
                    WhatsApp Chat/Call
                  </button>
                  <button
                    type="button"
                    onClick={() => setConsultationMode('video')}
                    className={`py-2 px-3 rounded-xl border text-center transition-all cursor-pointer ${
                      consultationMode === 'video'
                        ? 'bg-[#0B0820] border-[#D4AF37] text-[#F4D58D] font-bold shadow'
                        : 'bg-[#0B0820]/60 border-white/10 text-[#C8C1B5]'
                    }`}
                  >
                    Video Meeting
                  </button>
                </div>
              </div>

              {/* Optional Birth Details */}
              <div className="p-3.5 rounded-2xl bg-[#0B0820]/70 border border-[#D4AF37]/20 space-y-2">
                <span className="text-[10px] uppercase font-semibold text-[#F4D58D] tracking-wider block">
                  Birth Details (Optional - Helps prepare your Kundli)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div>
                    <label className="block text-[#C8C1B5]/70 text-[9px] uppercase mb-0.5">Date of Birth</label>
                    <input
                      type="date"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-[#0B0820] border border-white/10 text-[#F8F3E7] text-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#C8C1B5]/70 text-[9px] uppercase mb-0.5">Time of Birth</label>
                    <input
                      type="time"
                      value={tob}
                      onChange={(e) => setTob(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-[#0B0820] border border-white/10 text-[#F8F3E7] text-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#C8C1B5]/70 text-[9px] uppercase mb-0.5">Birth City</label>
                    <input
                      type="text"
                      placeholder="e.g. Jaipur, Rajasthan"
                      value={pob}
                      onChange={(e) => setPob(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-[#0B0820] border border-white/10 text-[#F8F3E7] placeholder-[#C8C1B5]/40 text-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>
              </div>

              {/* Question / Message */}
              <div>
                <label className="block text-[#C8C1B5] uppercase text-[10px] font-semibold mb-1">
                  Specific Questions / Areas of Concern
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Marriage timing, Career transition, Dosha queries, Health concerns..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#0B0820] border border-[#D4AF37]/25 text-[#F8F3E7] placeholder-[#C8C1B5]/40 text-xs focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>

                <button
                  type="submit"
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#F4D58D] via-[#D4AF37] to-[#B8860B] text-[#0B0820] font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#0B0820]" />
                  <span>Submit Inquiry Request</span>
                </button>
              </div>

              <p className="text-[10px] text-center text-[#C8C1B5]/60 pt-1">
                🔒 100% Confidential. No payment required at inquiry. Direct consultation by Gurumaa.
              </p>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
