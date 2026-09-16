import React, { useState, useEffect } from 'react';
import { SERVICES_DATA } from '../data/astrologyData';
import { ServiceItem } from '../types';
import { 
  Sparkles, 
  ArrowUpRight, 
  MessageCircle, 
  Phone, 
  CheckCircle2, 
  Sparkle
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService?: (serviceId: string) => void;
  onBookService?: (serviceId: string) => void;
  currency?: 'USD' | 'INR';
}

const STORAGE_KEY = 'kinner_gurumaa_custom_services_images';

// Reliable curated fallbacks matching the exact Indian Vedic Astro themes
const THEMATIC_FALLBACKS: Record<string, string> = {
  'get-your-ex-love-back': 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&w=900&q=80',
  'breakup-problem-solution': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80',
  'intercast-marriage-solution': 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80',
  'divorce-problem-solution': 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80',
  'love-marriage-solution': 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=80',
  'marriage-problem-solution': 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80',
  'husband-wife-solution': 'https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&w=900&q=80',
  'love-problem-solution': 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=80',
  'get-your-love-back': 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onBookService
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [customImages, setCustomImages] = useState<Record<string, string>>({});
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  // Automatically load and persist the user's uploaded images
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && typeof parsed === 'object' && Object.keys(parsed).length > 0) {
          setCustomImages(parsed);
          // Persist images to the server in the background for permanent disk storage
          fetch('/api/save-service-images', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(parsed),
          }).catch(() => {
            // Background sync failure is silent, localStorage still works seamlessly
          });
        }
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  const categories = [
    { id: 'all', label: 'All 9 Solutions' },
    { id: 'love', label: 'Love & Ex Back' },
    { id: 'marriage', label: 'Marriage & Intercaste' },
    { id: 'relationship', label: 'Husband & Wife Harmony' },
  ];

  const filteredServices = selectedCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === selectedCategory);

  return (
    <section 
      id="services-section"
      className="relative py-20 sm:py-28 bg-[#180C06] bg-gradient-to-b from-[#120703] via-[#1E0E07] to-[#0E0502] text-[#F8F3E7]"
    >
      {/* Decorative cosmic aura glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#FF7A00]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2A150A] border border-[#D4AF37]/35 text-xs text-[#F4D58D] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F4D58D]" />
            <span className="font-semibold tracking-wide uppercase text-[11px]">Divine Vedic Astro Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#F8F3E7] mb-4 tracking-tight">
            Our Astrology <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4D58D] via-[#D4AF37] to-[#E6B800]">Services</span>
          </h2>
          
          <p className="text-sm sm:text-base text-[#D8C7B5] leading-relaxed max-w-2xl mx-auto">
            Trusted Vedic astrological guidance, powerful remedies, and confidential personal consultations with Gurumaa for love, marriage, and relationship harmony.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`service-tab-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-[#F4D58D] via-[#D4AF37] to-[#B8860B] text-[#0B0820] font-bold shadow-lg shadow-[#D4AF37]/30 scale-105'
                    : 'bg-[#2A150A] text-[#C8C1B5] border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 hover:text-[#F8F3E7]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 9 Services Card Grid matching exact user screenshot design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            const waUrl = `https://wa.me/919929936478?text=${encodeURIComponent(
              service.whatsappMessage || `Hello Gurumaa, I want to consult regarding ${service.title}.`
            )}`;

            // Determine image source priority:
            // 1. User uploaded image from storage
            // 2. Local public file `/services/${service.originalFilename}`
            // 3. Curated thematic fallback
            const isFailed = failedImages[service.id];
            const imgSrc = customImages[service.id] 
              ? customImages[service.id]
              : !isFailed && service.image
                ? service.image
                : THEMATIC_FALLBACKS[service.id] || service.image;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group relative bg-white text-gray-900 rounded-3xl p-5 sm:p-6 shadow-2xl border border-[#D4AF37]/20 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-black/40"
              >
                {/* Image Container with Number Badge (01 to 09) */}
                <div>
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3] w-full bg-neutral-100 shadow-inner">
                    <img
                      src={imgSrc}
                      alt={service.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={() => {
                        if (!isFailed) {
                          setFailedImages((prev) => ({ ...prev, [service.id]: true }));
                        }
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Number Badge (01, 02, ..., 09) as in user screenshots */}
                    <div className="absolute top-3 right-3 bg-black/85 backdrop-blur-xs text-white font-mono text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-white/20 z-10">
                      {service.numberTag}
                    </div>

                    {/* Popular indicator badge */}
                    {service.popular && (
                      <div className="absolute top-3 left-3 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#0B0820] font-bold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-md flex items-center gap-1 z-10">
                        <Sparkle className="w-2.5 h-2.5 fill-current" />
                        <span>Gurumaa Special</span>
                      </div>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div className="text-center pt-5 pb-3">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 tracking-tight leading-snug group-hover:text-[#996515] transition-colors">
                      {service.title}
                    </h3>

                    {service.sanskritName && (
                      <span className="inline-block text-[11px] font-medium text-[#B8860B] uppercase tracking-widest mt-1">
                        {service.sanskritName}
                      </span>
                    )}

                    <p className="text-xs sm:text-sm text-gray-600 mt-2.5 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Card Action Buttons (Direct WhatsApp Connect Now + Call Option) */}
                <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
                  {/* Primary Blue Button matching screenshot: Contact Now ↗ with WhatsApp Integration */}
                  <a
                    id={`contact-now-wp-${service.id}`}
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-5 rounded-xl bg-[#0070F3] hover:bg-[#005bb5] active:scale-[0.98] text-white font-semibold text-sm sm:text-base tracking-wide flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Contact Now</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  {/* Secondary Quick Call / Helpline */}
                  <div className="flex items-center justify-between px-1 pt-1 text-[11px] text-gray-500">
                    <span className="flex items-center gap-1 text-emerald-600 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      100% Confidential
                    </span>

                    <a
                      href="tel:+919929936478"
                      className="text-[#B8860B] hover:text-black font-semibold flex items-center gap-1 hover:underline"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Call Gurumaa</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Assurance Bar */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-[#241208] border border-[#D4AF37]/25 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-lg sm:text-xl font-bold text-[#F8F3E7] mb-1">
              Have a Custom or Complex Personal Situation?
            </h4>
            <p className="text-xs sm:text-sm text-[#C8C1B5]">
              Speak directly with Kinner Gurumaa on WhatsApp or phone for immediate Vedic guidance.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/919929936478?text=Hello%20Gurumaa%2C%20I%20need%20urgent%20astrological%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Gurumaa</span>
            </a>

            <a
              href="tel:+919929936478"
              className="px-6 py-3 rounded-xl bg-[#15102E] hover:bg-[#1E163F] border border-[#D4AF37]/35 text-[#F4D58D] font-bold text-xs sm:text-sm flex items-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>+91 99299 36478</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
