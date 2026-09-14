import React, { useState } from 'react';
import { FAQS_DATA } from '../data/astrologyData';
import { Sparkles, ChevronDown, HelpCircle, MessageSquare, Phone, MessageCircle } from 'lucide-react';

interface FAQSectionProps {
  onContactClick?: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onContactClick }) => {
  const [openIds, setOpenIds] = useState<string[]>([FAQS_DATA[0].id]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter(item => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const filteredFaqs = FAQS_DATA.filter(f => 
    f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section 
      id="faq-section"
      className="relative py-24 bg-[#0B0820] border-t border-[#D4AF37]/25"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#15102E] border border-[#D4AF37]/25 text-xs text-[#F4D58D] mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Clear Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#F8F3E7] mb-4">
            Frequently Asked <span className="gold-gradient-text">Questions</span>
          </h2>
          <p className="text-base text-[#C8C1B5]">
            Everything you need to know about preparing for your session, our methodology, and privacy safeguards.
          </p>

          {/* Quick Search */}
          <div className="mt-8 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search questions (e.g. remedies, birth time, privacy)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#15102E] border border-[#D4AF37]/30 text-sm text-[#F8F3E7] placeholder-[#C8C1B5]/50 focus:outline-none focus:border-[#D4AF37] transition-all"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-[#15102E] border-[#D4AF37]/50 shadow-lg shadow-black/40' 
                    : 'bg-[#15102E]/60 border-white/10 hover:border-[#D4AF37]/30'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`font-serif text-base sm:text-lg font-bold transition-colors ${
                    isOpen ? 'text-[#F4D58D]' : 'text-[#F8F3E7]'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-300 ${
                    isOpen 
                      ? 'rotate-180 bg-gradient-to-r from-[#F4D58D] via-[#D4AF37] to-[#B8860B] border-[#D4AF37] text-[#0B0820]' 
                      : 'bg-[#0B0820] border-white/10 text-white/70'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#C8C1B5] leading-relaxed border-t border-white/10 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 text-sm text-[#C8C1B5]/70">
              No questions found matching "{searchQuery}". Please contact our concierge directly.
            </div>
          )}
        </div>

        {/* Contact Section */}
        <div 
          id="contact-section"
          className="mt-16 p-6 sm:p-8 rounded-2xl bg-[#15102E] border border-[#D4AF37]/35 shadow-2xl"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0820] border border-[#D4AF37]/25 text-[11px] text-[#F4D58D] mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Sanctuary Concierge & Consultations</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F8F3E7] mb-1">
                KinnerGuruma
              </h3>
              <p className="text-xs sm:text-sm text-[#C8C1B5] max-w-md">
                Direct inquiry desk for sacred Vedic astrology guidance, Janam Kundli analysis, and immediate booking assistance.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 w-full lg:w-auto">
              {/* Phone display & clickable link */}
              <a
                id="contact-phone-link"
                href="tel:+919929936478"
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#0B0820] border border-[#D4AF37]/30 text-xs sm:text-sm font-semibold text-[#F8F3E7] hover:text-[#F4D58D] hover:border-[#D4AF37] transition-all"
                title="Phone"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Phone: <strong className="text-[#F4D58D]">+91 99299 36478</strong></span>
              </a>

              {/* Call Now CTA */}
              <a
                id="contact-call-now-btn"
                href="tel:+919929936478"
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#F4D58D] via-[#D4AF37] to-[#B8860B] text-[#0B0820] text-xs sm:text-sm font-bold tracking-wide shadow-md shadow-[#D4AF37]/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#0B0820]" />
                <span>Call Now</span>
              </a>

              {/* WhatsApp CTA */}
              <a
                id="contact-whatsapp-btn"
                href="https://wa.me/919929936478?text=Hello%20KinnerGurumaa%2C%20I%20would%20like%20to%20know%20more%20about%20your%20astrology%20consultation%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md shadow-[#25D366]/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
