import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/astrologyData';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, Sparkles } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = TESTIMONIALS_DATA[currentIndex];

  return (
    <section 
      id="testimonials-section"
      className="relative py-24 bg-[#0B0820] border-t border-[#D4AF37]/25 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#15102E] border border-[#D4AF37]/25 text-xs text-[#F4D58D] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Client Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#F8F3E7] mb-5">
            Words of <span className="gold-gradient-text">Gratitude & Clarity</span>
          </h2>
          <p className="text-base text-[#C8C1B5] leading-relaxed">
            Real stories from clients worldwide navigating career crossroads, family decisions, and personal purpose.
          </p>
        </div>

        {/* Carousel Showcase */}
        <div className="max-w-4xl mx-auto">
          
          <div className="relative rounded-3xl bg-[#15102E] border-2 border-[#D4AF37]/30 p-8 sm:p-14 shadow-2xl">
            
            {/* Top Quote Icon & Service Pill */}
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 rounded-2xl bg-[#0B0820] border border-[#D4AF37]/30 flex items-center justify-center">
                <Quote className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div className="flex items-center gap-2 bg-[#0B0820] px-3 py-1.5 rounded-full border border-[#D4AF37]/25 text-xs text-[#F4D58D]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{currentTestimonial.serviceTitle}</span>
              </div>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1.5 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <blockquote className="font-serif text-xl sm:text-2xl text-[#F8F3E7] leading-relaxed italic mb-8">
              "{currentTestimonial.quote}"
            </blockquote>

            {/* Key Outcome Highlight */}
            <div className="p-3.5 rounded-xl bg-[#0B0820] border border-[#D4AF37]/25 mb-8 flex items-center gap-2 text-xs text-[#F4D58D]">
              <span className="font-semibold text-[#F8F3E7]">Outcome:</span>
              <span>{currentTestimonial.outcome}</span>
            </div>

            {/* Client Info & Date */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
              <div>
                <h4 className="font-serif text-lg font-bold text-[#F8F3E7]">
                  {currentTestimonial.clientName}
                </h4>
                <p className="text-xs text-[#C8C1B5]">
                  {currentTestimonial.location} • Verified Consultation ({currentTestimonial.date})
                </p>
              </div>

              {/* Carousel Navigation Controls */}
              <div className="flex items-center gap-3">
                <button
                  id="testimonial-prev-btn"
                  onClick={prevSlide}
                  className="w-11 h-11 rounded-full bg-[#0B0820] border border-[#D4AF37]/30 flex items-center justify-center text-[#F8F3E7] hover:bg-[#D4AF37] hover:text-[#0B0820] transition-all cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="text-xs text-[#C8C1B5] font-mono">
                  {currentIndex + 1} / {TESTIMONIALS_DATA.length}
                </div>
                <button
                  id="testimonial-next-btn"
                  onClick={nextSlide}
                  className="w-11 h-11 rounded-full bg-[#0B0820] border border-[#D4AF37]/30 flex items-center justify-center text-[#F8F3E7] hover:bg-[#D4AF37] hover:text-[#0B0820] transition-all cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>

          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {TESTIMONIALS_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
