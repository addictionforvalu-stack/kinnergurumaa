import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/astrologyData';
import { ServiceItem } from '../types';
import { 
  Compass, 
  HeartHandshake, 
  Briefcase, 
  Sparkles, 
  Hash, 
  Layers, 
  Calendar, 
  Flame, 
  ArrowRight, 
  Clock, 
  Check, 
  ChevronRight 
} from 'lucide-react';

interface ServicesSectionProps {
  onBookService?: (serviceId: string) => void;
  onSelectService?: (serviceId: string) => void;
  onExploreService?: (service: ServiceItem) => void;
  currency?: 'USD' | 'INR';
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onBookService,
  onSelectService,
  onExploreService,
  currency
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const handleBookingClick = (serviceId: string) => {
    if (onBookService) {
      onBookService(serviceId);
    } else if (onSelectService) {
      onSelectService(serviceId);
    }
  };

  const handleExploreClick = (service: ServiceItem) => {
    if (onExploreService) {
      onExploreService(service);
    } else {
      handleBookingClick(service.id);
    }
  };

  // Map icon strings to Lucide components
  const renderIcon = (name: string) => {
    const props = { className: "w-6 h-6 text-[#F4D58D]" };
    switch (name) {
      case 'Compass': return <Compass {...props} />;
      case 'HeartHandshake': return <HeartHandshake {...props} />;
      case 'Briefcase': return <Briefcase {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Hash': return <Hash {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Calendar': return <Calendar {...props} />;
      case 'Flame': return <Flame {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  const categories = [
    { id: 'all', label: 'All Consultations' },
    { id: 'core', label: 'Core Kundli & Life' },
    { id: 'relationships', label: 'Marriage & Love' },
    { id: 'destiny', label: 'Career & Destiny' },
    { id: 'annual', label: 'Annual Forecasts' },
  ];

  const filteredServices = activeCategory === 'all' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.category === activeCategory);

  return (
    <section 
      id="services-section"
      className="relative py-24 bg-[#0B0820]"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#15102E]/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#15102E] border border-[#D4AF37]/25 text-xs text-[#F4D58D] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sacred Consultations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#F8F3E7] mb-5">
            Our Astrology <span className="gold-gradient-text">Services</span>
          </h2>
          <p className="text-base text-[#C8C1B5] leading-relaxed">
            Every session is rooted in authentic Jyotish traditions, tailored to your unique planetary placements, and delivered with unhurried discernment.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`filter-service-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[#F4D58D] via-[#D4AF37] to-[#B8860B] text-[#0B0820] font-bold shadow-md shadow-[#D4AF37]/25'
                    : 'bg-[#15102E] text-[#C8C1B5] border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 hover:text-[#F8F3E7]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="relative rounded-2xl bg-[#15102E] border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#D4AF37]/15 group"
            >
              {/* Popularity Badge */}
              {service.popular && (
                <div className="absolute -top-3 right-5 bg-gradient-to-r from-[#F4D58D] via-[#D4AF37] to-[#B8860B] text-[#0B0820] text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-md">
                  Most Requested
                </div>
              )}

              {/* Card Top: Icon & Duration */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#15102E] to-[#0B0820] border border-[#D4AF37]/35 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                    {renderIcon(service.iconName)}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-[#C8C1B5] bg-[#0B0820] px-2.5 py-1 rounded-md border border-[#D4AF37]/20">
                    <Clock className="w-3 h-3 text-[#D4AF37]" />
                    <span>{service.durationMinutes} min</span>
                  </div>
                </div>

                {/* Sanskrit subtitle */}
                {service.sanskritName && (
                  <span className="block text-[11px] font-serif text-[#F4D58D] tracking-wider mb-1">
                    {service.sanskritName}
                  </span>
                )}

                {/* Title */}
                <h3 className="text-xl font-serif font-bold text-[#F8F3E7] group-hover:text-[#F4D58D] transition-colors mb-2.5">
                  {service.title}
                </h3>

                {/* Short description */}
                <p className="text-xs text-[#C8C1B5] leading-relaxed line-clamp-3 mb-4">
                  {service.shortDesc}
                </p>

                {/* Highlight Bullets */}
                <ul className="space-y-1.5 mb-6 text-[11px] text-[#C8C1B5]">
                  {service.highlights.slice(0, 2).map((hl, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Bottom: Dual Action CTAs */}
              <div className="pt-4 border-t border-white/10 mt-auto">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    id={`explore-service-${service.id}`}
                    onClick={() => handleExploreClick(service)}
                    className="w-full py-2.5 px-2 rounded-xl bg-[#0B0820] border border-[#D4AF37]/25 text-xs font-medium text-[#F8F3E7] hover:text-[#F4D58D] hover:border-[#D4AF37] transition-all text-center cursor-pointer"
                  >
                    Explore Service
                  </button>
                  <button
                    id={`book-service-${service.id}`}
                    onClick={() => handleBookingClick(service.id)}
                    className="w-full py-2.5 px-2 rounded-xl bg-gradient-to-r from-[#F4D58D] via-[#D4AF37] to-[#B8860B] text-[#0B0820] text-xs font-bold hover:shadow-lg hover:shadow-[#D4AF37]/25 transition-all text-center cursor-pointer flex items-center justify-center gap-1"
                  >
                    <span>Consult Now</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
