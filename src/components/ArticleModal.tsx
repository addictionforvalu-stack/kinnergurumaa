import React from 'react';
import { BlogPost } from '../types';
import { X, Clock, Calendar, BookOpen, Share2, Sparkles, Check } from 'lucide-react';

interface ArticleModalProps {
  article: BlogPost | null;
  onClose: () => void;
  onBookConsultation: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onBookConsultation
}) => {
  if (!article) return null;

  return (
    <div 
      id="article-reader-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6 animate-in fade-in duration-200"
    >
      <div 
        id="article-modal-container"
        className="relative w-full max-w-3xl bg-[#0B0820] border-2 border-[#D4AF37]/25 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
      >
        {/* Modal Header */}
        <div className="bg-[#15102E] px-6 py-4 border-b border-[#D4AF37]/25 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-[#F4D58D]">
            <BookOpen className="w-4 h-4 text-[#D4AF37]" />
            <span className="font-semibold uppercase tracking-wider">{article.category}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#C8C1B5]/60 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto text-sm text-[#C8C1B5] leading-relaxed space-y-6">
          
          {/* Hero Banner */}
          <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
            <img 
              src={article.imageUrl} 
              alt={article.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0820] via-transparent to-black/30" />
            
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#F8F3E7]/80">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{article.publishedDate}</span>
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{article.readTime}</span>
              </span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#F8F3E7] leading-tight">
            {article.title}
          </h2>

          <div className="p-4 rounded-xl bg-[#15102E] border border-[#D4AF37]/25 italic text-sm text-[#F4D58D]">
            "{article.summary}"
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-[#C8C1B5] leading-relaxed font-sans">
            <p>
              In classical Vedic Jyotish, astronomical charts are viewed not as rigid fatalistic verdicts, but as celestial coordinates of personal resonance. The planetary bodies act as mirrors for inherent karmic imprints (Samskaras), illuminating paths of least resistance and periods for purposeful endeavor.
            </p>
            <p>
              When analyzing planetary yogas and Dasha timing, seasoned practitioners emphasize the harmonization of Purushartha (conscious, self-directed effort) with Daiva (cosmic momentum). By comprehending planetary transits and house rulerships, individuals develop realistic expectations during retrograde or malefic aspects, while capitalizing upon supportive transits of benefic planets like Jupiter and Venus.
            </p>
            <p>
              Vedic remedies (Upayas) serve as psychological and spiritual recalibrations: contemplative mantras calm the sympathetic nervous system, purposeful charity diminishes ego attachment, and gemstone resonance reminds the subconscious of balanced archetype ideals.
            </p>
          </div>

          {/* Book Session Call to Action inside article */}
          <div className="p-6 rounded-2xl bg-[#15102E] border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-serif font-bold text-base text-[#F8F3E7]">
                Curious how this applies to your specific birth chart?
              </h4>
              <p className="text-xs text-[#C8C1B5]">
                Schedule a confidential 60-minute reading with our Acharyas.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onBookConsultation();
              }}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#F4D58D] via-[#D4AF37] to-[#B8860B] text-[#0B0820] font-bold text-xs hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shrink-0 shadow-lg shadow-[#D4AF37]/20"
            >
              Book Consultation
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
