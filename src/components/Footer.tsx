import React, { useState } from 'react';
import { 
  Sparkles, 
  Mail, 
  Send, 
  ShieldCheck, 
  Check, 
  Globe, 
  Phone, 
  Clock,
  MessageCircle
} from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
  onOpenLegal: (type: 'privacy' | 'terms' | 'refund' | 'disclaimer') => void;
  onBookConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenLegal,
  onBookConsultation
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setNewsletterSubscribed(true);
    setNewsletterEmail('');
  };

  return (
    <footer 
      id="main-footer"
      className="bg-[#0B0820] border-t border-[#D4AF37]/25 pt-16 pb-12 text-[#C8C1B5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          
          {/* Brand Col (Spans 2 cols) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#15102E] border border-[#D4AF37]/40 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#F4D58D]" />
              </div>
              <div>
                <span className="font-serif text-lg font-bold tracking-wider text-[#F8F3E7]">
                  KinnerGurumaa
                </span>
                <span className="block text-[9px] uppercase tracking-[0.25em] text-[#D4AF37]">
                  Sanctuary of Vedic Wisdom
                </span>
              </div>
            </div>

            <p className="text-xs text-[#C8C1B5] leading-relaxed mb-6 max-w-sm">
              KinnerGurumaa is a premier sanctuary for authentic Vedic astrology, Janam Kundli analysis, and spiritual counsel. Grounded in classical Parashari principles, free of fatalism and fear.
            </p>

            {/* Newsletter Subscription */}
            <div className="max-w-sm">
              <span className="block text-xs font-semibold text-[#F4D58D] uppercase tracking-wider mb-2">
                Panchang & Planetary Transits Bulletin
              </span>
              {newsletterSubscribed ? (
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Blessings. You are subscribed to our monthly transit forecasts.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <div className="relative flex-1">
                    <Mail className="w-4 h-4 text-[#C8C1B5]/50 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#15102E] border border-[#D4AF37]/30 text-xs text-[#F8F3E7] placeholder-[#C8C1B5]/50 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#F4D58D] via-[#D4AF37] to-[#B8860B] text-[#0B0820] text-xs font-bold transition-all cursor-pointer flex items-center gap-1 shrink-0 hover:scale-105"
                  >
                    <span>Join</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-sm font-bold text-[#F8F3E7] uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#C8C1B5]">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#F4D58D] transition-colors cursor-pointer">
                  Home Sanctuary
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#F4D58D] transition-colors cursor-pointer text-[#F4D58D] font-medium">
                  Our Astrology Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('how-it-works')} className="hover:text-[#F4D58D] transition-colors cursor-pointer">
                  Consultation Process
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('why-choose-us')} className="hover:text-[#F4D58D] transition-colors cursor-pointer">
                  Why Choose Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('testimonials')} className="hover:text-[#F4D58D] transition-colors cursor-pointer">
                  Client Reviews & Stories
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('insights')} className="hover:text-[#F4D58D] transition-colors cursor-pointer">
                  Astrology Insights Blog
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-[#F4D58D] transition-colors cursor-pointer">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-[#F4D58D] transition-colors cursor-pointer">
                  Contact & Helpline
                </button>
              </li>
            </ul>
          </div>

          {/* Consultation Focus Areas */}
          <div>
            <h4 className="font-serif text-sm font-bold text-[#F8F3E7] uppercase tracking-wider mb-4">
              Our 9 Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-[#C8C1B5]">
              {[
                { title: 'Get Your Ex Love Back', tag: '01' },
                { title: 'Breakup Problem Solution', tag: '02' },
                { title: 'Intercast Marriage Solution', tag: '03' },
                { title: 'Divorce Problem Solution', tag: '04' },
                { title: 'Love Marriage Solution', tag: '05' },
                { title: 'Husband Wife Solution', tag: '07' },
              ].map((item, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => onNavigate('services')} 
                    className="hover:text-[#F4D58D] transition-colors cursor-pointer text-left line-clamp-1 flex items-center gap-2"
                  >
                    <span className="font-mono text-[10px] text-[#D4AF37]">{item.tag}</span>
                    <span>{item.title}</span>
                  </button>
                </li>
              ))}
              <li>
                <button onClick={() => onNavigate('services')} className="text-[#D4AF37] hover:underline font-medium flex items-center gap-1 mt-1">
                  <span>View All 9 Solutions →</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Global Hours */}
          <div>
            <h4 className="font-serif text-sm font-bold text-[#F8F3E7] uppercase tracking-wider mb-4">
              Concierge Desk
            </h4>
            <div className="space-y-3 text-xs text-[#C8C1B5]">
              <div className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Serving Seekers Worldwide</span>
              </div>
              <a 
                id="footer-phone-link"
                href="tel:+919929936478" 
                className="flex items-center gap-2 hover:text-[#F4D58D] transition-colors group cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-[#F8F3E7]">+91 99299 36478</span>
              </a>
              <a 
                id="footer-whatsapp-link"
                href="https://wa.me/919929936478" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-[#25D366] transition-colors group cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 group-hover:scale-110 transition-transform" />
                <span>WhatsApp: +91 99299 36478</span>
              </a>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>consult@kinnergurumaa.com</span>
              </div>
              <div className="pt-1">
                <a
                  id="footer-call-now-btn"
                  href="tel:+919929936478"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#15102E] border border-[#D4AF37]/30 text-[#F4D58D] hover:border-[#D4AF37] text-[11px] font-semibold transition-all"
                >
                  <Phone className="w-3 h-3 text-[#D4AF37]" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Required Mandatory Legal Disclaimer Box */}
        <div className="p-4 rounded-xl bg-[#15102E] border border-[#D4AF37]/25 mb-8 text-[11px] text-[#C8C1B5] leading-relaxed text-center sm:text-left">
          <p className="flex items-start sm:items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5 sm:mt-0" />
            <span>
              <strong className="text-[#F4D58D]">Professional Astrology Disclaimer: </strong> 
              Astrology is intended for guidance and personal reflection and should not be considered a substitute for professional medical, legal, financial or mental-health advice.
            </span>
          </p>
        </div>

        {/* Bottom Bar with Policies & Copyright */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#C8C1B5]/70">
          <div>
            © {new Date().getFullYear()} KinnerGurumaa Consultations. All sacred rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button onClick={() => onOpenLegal('privacy')} className="hover:text-[#F4D58D] transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => onOpenLegal('terms')} className="hover:text-[#F4D58D] transition-colors cursor-pointer">
              Terms & Conditions
            </button>
            <span>•</span>
            <button onClick={() => onOpenLegal('refund')} className="hover:text-[#F4D58D] transition-colors cursor-pointer">
              Refund Policy
            </button>
            <span>•</span>
            <button onClick={() => onOpenLegal('disclaimer')} className="hover:text-[#F4D58D] transition-colors cursor-pointer">
              Astrology Disclaimer
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
