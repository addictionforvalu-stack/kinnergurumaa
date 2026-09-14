import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  BookOpen, 
  UserCheck, 
  Lock, 
  Lightbulb, 
  Video, 
  Clock, 
  HeartHandshake 
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const differentiators = [
    {
      title: 'Truly Personalized Readings',
      description: 'We do not sell robotic AI summaries or mass horoscopes. Your exact astronomical degree, Lagna, and divisional charts are calculated with precision.',
      icon: <UserCheck className="w-5 h-5 text-[#D4AF37]" />,
      tag: 'Individualized'
    },
    {
      title: 'Authentic Vedic Methodology',
      description: 'Firmly anchored in classical Parashara and Jaimini traditions, verified through centuries of mathematical astronomical observation.',
      icon: <BookOpen className="w-5 h-5 text-[#D4AF37]" />,
      tag: 'Classical Canon'
    },
    {
      title: 'Senior Certified Astrologers',
      description: 'Every Acharya holds over 14 years of formal scholarly practice, holding credentials from prestigious universities in Varanasi and ICAS.',
      icon: <Sparkles className="w-5 h-5 text-[#D4AF37]" />,
      tag: 'Verified Scholars'
    },
    {
      title: 'Strict Confidentiality',
      description: 'Your birth specifics, life questions, and personal struggles are held under absolute fiduciary and spiritual confidence. Never shared or sold.',
      icon: <Lock className="w-5 h-5 text-[#D4AF37]" />,
      tag: '100% Private'
    },
    {
      title: 'Clear & Practical Guidance',
      description: 'Zero superstition or fear-mongering. We never exploit anxiety or push overpriced gemstones. Our counsel is constructive, uplifting, and actionable.',
      icon: <Lightbulb className="w-5 h-5 text-[#D4AF37]" />,
      tag: 'Ethical Standard'
    },
    {
      title: 'Online Video & Audio HD',
      description: 'Join from anywhere in the world across any device. View your chart live with interactive screen sharing, recorded for your lifetime review.',
      icon: <Video className="w-5 h-5 text-[#D4AF37]" />,
      tag: 'Global Access'
    },
    {
      title: 'Flexible Worldwide Scheduling',
      description: 'Seamlessly book across US, European, Middle East, and Asia-Pacific timezones. Hassle-free rescheduling up to 6 hours before session.',
      icon: <Clock className="w-5 h-5 text-[#D4AF37]" />,
      tag: 'Timezone Adapted'
    },
    {
      title: 'Post-Consultation Support',
      description: 'Your journey does not end when the call terminates. Access 14-day direct messaging for clarifying remedies and notes.',
      icon: <HeartHandshake className="w-5 h-5 text-[#D4AF37]" />,
      tag: 'Ongoing Care'
    }
  ];

  return (
    <section 
      id="why-choose-us-section"
      className="relative py-24 bg-[#0B0820]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#15102E] border border-[#D4AF37]/25 text-xs text-[#F4D58D] mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>The KinnerGurumaa Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#F8F3E7] mb-5">
            Why Discerning Seekers <span className="gold-gradient-text">Choose Us</span>
          </h2>
          <p className="text-base text-[#C8C1B5] leading-relaxed">
            Astrology should bring dignity, psychological peace, and strategic clarity to your life—never confusion, fatalism, or exploitation.
          </p>
        </div>

        {/* 8 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((diff, idx) => (
            <div
              key={idx}
              id={`why-card-${idx}`}
              className="rounded-2xl bg-[#15102E] border border-[#D4AF37]/25 p-6 flex flex-col justify-between hover:border-[#D4AF37]/60 transition-all duration-300 group shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0B0820] border border-[#D4AF37]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {diff.icon}
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#D4AF37] px-2 py-0.5 rounded-full bg-[#0B0820] border border-[#D4AF37]/20">
                    {diff.tag}
                  </span>
                </div>

                <h3 className="text-base font-serif font-bold text-[#F8F3E7] mb-2 group-hover:text-[#F4D58D] transition-colors">
                  {diff.title}
                </h3>

                <p className="text-xs text-[#C8C1B5] leading-relaxed">
                  {diff.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center gap-1 text-[11px] text-[#D4AF37]">
                <span>Vedic Principle</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
