import React from 'react';
import { BLOG_POSTS } from '../data/astrologyData';
import { BlogPost } from '../types';
import { Sparkles, Clock, ArrowRight, BookOpen } from 'lucide-react';

interface InsightsSectionProps {
  onSelectArticle: (post: BlogPost) => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ onSelectArticle }) => {
  return (
    <section 
      id="insights-section"
      className="relative py-24 bg-[#0B0820] border-t border-[#D4AF37]/25"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#15102E] border border-[#D4AF37]/25 text-xs text-[#F4D58D] mb-4">
              <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Vedic Knowledge & Reflections</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#F8F3E7] mb-3">
              Astrology <span className="gold-gradient-text">Insights</span>
            </h2>
            <p className="text-sm sm:text-base text-[#C8C1B5] max-w-xl">
              Thoughtful, scholar-written articles explaining classical Jyotish concepts without jargon or superstition.
            </p>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              id={`insight-card-${post.slug}`}
              onClick={() => onSelectArticle(post)}
              className="rounded-2xl bg-[#15102E] border border-[#D4AF37]/25 overflow-hidden flex flex-col justify-between hover:border-[#D4AF37]/60 hover:-translate-y-1 transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-xl hover:shadow-[#D4AF37]/10"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-[#0B0820]">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#15102E] via-transparent to-black/20" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-[#0B0820]/90 backdrop-blur-md px-3 py-1 rounded-lg border border-[#D4AF37]/30 text-[11px] font-semibold text-[#F4D58D]">
                    {post.category}
                  </div>

                  {/* Read Time */}
                  <div className="absolute top-3 right-3 bg-[#0B0820]/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-[10px] text-[#C8C1B5] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#D4AF37]" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-[11px] text-[#C8C1B5]/60 mb-2 block">
                    {post.publishedDate}
                  </span>

                  <h3 className="text-lg font-serif font-bold text-[#F8F3E7] group-hover:text-[#F4D58D] transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#C8C1B5] leading-relaxed line-clamp-3 mb-6">
                    {post.summary}
                  </p>
                </div>
              </div>

              {/* Read More Footer */}
              <div className="p-6 pt-0 mt-auto border-t border-white/10">
                <div className="pt-4 flex items-center justify-between text-xs font-semibold text-[#D4AF37] group-hover:text-[#F4D58D] transition-colors">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
