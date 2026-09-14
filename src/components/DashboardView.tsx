import React, { useState } from 'react';
import { 
  UserProfile, 
  BookingData, 
  KundliChartData 
} from '../types';
import { 
  Compass, 
  Calendar, 
  Clock, 
  Video, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  User, 
  ShieldCheck, 
  Download, 
  ChevronRight, 
  Bell, 
  CreditCard, 
  Gem, 
  Flame, 
  Sun, 
  Moon, 
  Layers, 
  ExternalLink,
  Edit3,
  Check,
  ArrowLeft
} from 'lucide-react';

interface DashboardViewProps {
  currentUser: UserProfile;
  bookings: BookingData[];
  onBookNewSession: () => void;
  onUpdateProfile: (updated: UserProfile) => void;
  currency: 'USD' | 'INR';
  onBackToHome?: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  currentUser,
  bookings,
  onBookNewSession,
  onUpdateProfile,
  currency,
  onBackToHome
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'kundli' | 'remedies' | 'history' | 'profile'>('overview');
  
  // Profile editing state
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editName, setEditName] = useState(currentUser.name);
  const [editPhone, setEditPhone] = useState(currentUser.phone);
  const [editCity, setEditCity] = useState(currentUser.birthDetails.placeOfBirth);
  const [editTob, setEditTob] = useState(currentUser.birthDetails.timeOfBirth);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const kundli = currentUser.savedKundli;

  const upcomingBookings = bookings.filter(b => b.status === 'upcoming');
  const pastBookings = bookings.filter(b => b.status === 'completed');

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    const updated: UserProfile = {
      ...currentUser,
      name: editName,
      phone: editPhone,
      birthDetails: {
        ...currentUser.birthDetails,
        placeOfBirth: editCity,
        timeOfBirth: editTob
      }
    };
    onUpdateProfile(updated);
    setIsEditingProfile(false);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div id="customer-dashboard" className="min-h-screen pt-28 pb-20 bg-[#0B0820]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top User Welcome Banner */}
        <div className="relative rounded-3xl bg-[#15102E] border border-[#D4AF37]/35 p-6 sm:p-8 mb-8 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#F4D58D] via-[#D4AF37] to-[#B8860B] text-[#0B0820] font-bold font-serif text-2xl flex items-center justify-center shadow-lg shadow-[#D4AF37]/20 shrink-0">
                {currentUser.name.charAt(0)}
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0B0820] border border-[#D4AF37]/25 text-[#F4D58D] text-[10px] font-semibold uppercase tracking-wider mb-1">
                  <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                  <span>Sanctuary Client Portal</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#F8F3E7]">
                  Namaste, {currentUser.name}
                </h1>
                <p className="text-xs text-[#C8C1B5] mt-0.5">
                  Lagna: <strong className="text-[#F4D58D]">{kundli?.ascendant.split(' ')[0]}</strong> • 
                  Chandra Rashi: <strong className="text-[#F4D58D]">{kundli?.moonSign.split(' ')[0]}</strong> • 
                  Current Dasha: <strong className="text-emerald-300">{kundli?.currentDasha.split('-')[0]}</strong>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {onBackToHome && (
                <button
                  id="dash-back-home-btn"
                  onClick={onBackToHome}
                  className="px-4 py-3 rounded-xl bg-[#0B0820] border border-[#D4AF37]/25 text-[#F8F3E7] hover:text-[#F4D58D] hover:border-[#D4AF37] text-xs font-semibold transition-all cursor-pointer flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Return to Sanctuary</span>
                </button>
              )}
              <button
                id="dash-book-new-session-btn"
                onClick={onBookNewSession}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#F4D58D] via-[#D4AF37] to-[#B8860B] text-[#0B0820] font-bold text-xs shadow-lg shadow-[#D4AF37]/20 hover:scale-[1.02] transition-all cursor-pointer flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#0B0820]" />
                <span>Book New Consultation</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-white/10 pb-4 mb-8 overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview & Sessions', icon: <Calendar className="w-4 h-4" /> },
            { id: 'kundli', label: 'Interactive Kundli Chart', icon: <Compass className="w-4 h-4" /> },
            { id: 'remedies', label: 'Prescribed Remedies', icon: <Gem className="w-4 h-4" /> },
            { id: 'history', label: 'Payment & Dossiers', icon: <FileText className="w-4 h-4" /> },
            { id: 'profile', label: 'Birth Profile Settings', icon: <User className="w-4 h-4" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              id={`dash-tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2.5 rounded-xl text-xs font-medium tracking-wide flex items-center gap-2 transition-all shrink-0 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-[#F4D58D] via-[#D4AF37] to-[#B8860B] text-[#0B0820] font-bold shadow-md shadow-[#D4AF37]/20'
                  : 'bg-[#15102E] text-[#C8C1B5] hover:text-[#F8F3E7] hover:bg-[#15102E]/90 border border-[#D4AF37]/25'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* TAB 1: Overview & Upcoming Sessions */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            
            {/* Upcoming Consultations Highlight */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif text-lg font-bold text-[#F8F3E7] flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                  <span>Upcoming Consultations</span>
                </h3>
                <span className="text-xs text-[#F4D58D]">{upcomingBookings.length} Scheduled</span>
              </div>

              {upcomingBookings.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {upcomingBookings.map((bkg) => (
                    <div
                      key={bkg.id}
                      id={`upcoming-card-${bkg.id}`}
                      className="rounded-2xl bg-[#15102E] border border-[#D4AF37]/35 p-6 shadow-xl relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />

                      <div className="flex items-start justify-between pb-4 border-b border-white/10 mb-4">
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]">
                            Ref: {bkg.referenceNumber}
                          </span>
                          <h4 className="font-serif text-lg font-bold text-[#F8F3E7] mt-0.5">
                            {bkg.serviceTitle}
                          </h4>
                          <p className="text-xs text-[#C8C1B5]">With {bkg.astrologerName}</p>
                        </div>
                        <div className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-[10px] font-bold uppercase tracking-wider">
                          Confirmed
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-xs mb-6">
                        <div className="p-3 rounded-xl bg-[#0B0820] border border-[#D4AF37]/20">
                          <span className="text-[#C8C1B5]/60 block text-[10px] uppercase">Session Date</span>
                          <span className="font-semibold text-[#F8F3E7]">{bkg.date}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-[#0B0820] border border-[#D4AF37]/20">
                          <span className="text-[#C8C1B5]/60 block text-[10px] uppercase">Time Slot</span>
                          <span className="font-semibold text-[#F8F3E7]">{bkg.timeSlot}</span>
                        </div>
                      </div>

                      {/* Join Meeting Action */}
                      <div className="flex flex-col sm:flex-row items-center gap-3">
                        <a
                          href={bkg.zoomLink || '#'}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#F4D58D] via-[#D4AF37] to-[#B8860B] text-[#0B0820] font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/20 hover:scale-[1.01] transition-all"
                        >
                          <Video className="w-4 h-4" />
                          <span>Join Secure HD Meeting</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>

                        <button
                          onClick={() => alert(`Rescheduling requested for booking ${bkg.referenceNumber}. Our concierge will email you available alternate slots.`)}
                          className="w-full sm:w-auto py-3 px-4 rounded-xl bg-[#0B0820] border border-[#D4AF37]/25 text-[#C8C1B5] hover:text-[#F8F3E7] text-xs font-semibold"
                        >
                          Reschedule
                        </button>
                      </div>

                      <p className="text-[11px] text-[#C8C1B5]/60 mt-3 text-center">
                        Astrologer is preparing chart degrees prior to the call. Please join 2 minutes early.
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 rounded-2xl bg-[#15102E] border border-white/10 text-center text-sm text-[#C8C1B5]">
                  No upcoming consultations currently scheduled.
                </div>
              )}
            </div>

            {/* Quick Metrics & Cosmic Status */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-6 rounded-2xl bg-[#15102E] border border-[#D4AF37]/25 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Sun className="w-5 h-5 text-[#D4AF37]" />
                    <span className="text-[10px] text-[#C8C1B5]/60 uppercase">Active Mahadasha</span>
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#F8F3E7]">
                    Jupiter (Guru) Period
                  </h4>
                  <p className="text-xs text-[#C8C1B5] mt-1">
                    Expanding wisdom, spiritual clarity, and major intellectual milestones.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 mt-4 text-[11px] text-[#F4D58D]">
                  Active until May 2027
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#15102E] border border-[#D4AF37]/25 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Moon className="w-5 h-5 text-[#D4AF37]" />
                    <span className="text-[10px] text-[#C8C1B5]/60 uppercase">Lunar Constellation</span>
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#F8F3E7]">
                    Rohini Nakshatra
                  </h4>
                  <p className="text-xs text-[#C8C1B5] mt-1">
                    Pada 4 • Ruled by the Moon (Chandra) and Lord Brahma. Creative fertility & grace.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 mt-4 text-[11px] text-[#F4D58D]">
                  Taurus Moon Exalted (Uchcha)
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#15102E] border border-[#D4AF37]/25 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                    <span className="text-[10px] text-[#C8C1B5]/60 uppercase">Sanctuary Status</span>
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#F8F3E7]">
                    Lifetime Chart Dossier
                  </h4>
                  <p className="text-xs text-[#C8C1B5] mt-1">
                    Your Janam Kundli is saved with permanent encrypted access and annual update rights.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 mt-4 text-[11px] text-emerald-400">
                  Verified Client Record
                </div>
              </div>

            </div>

          </div>
        )}

        {/* TAB 2: Interactive North Indian Vedic Kundli Chart */}
        {activeTab === 'kundli' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            
            <div className="p-6 sm:p-8 rounded-3xl bg-[#15102E] border border-[#D4AF37]/35 shadow-2xl">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4 mb-6">
                <div>
                  <span className="text-[11px] uppercase font-serif text-[#D4AF37] tracking-wider">Classical Vedic Matrix</span>
                  <h3 className="font-serif text-2xl font-bold text-[#F8F3E7]">Lagna Kundli (D1 Birth Chart)</h3>
                  <p className="text-xs text-[#C8C1B5]">
                    Calculated using Lahiri Ayanamsha (Chitra Paksha) Sidereal ephemeris.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => alert('Downloading full 24-Page Janam Kundli Dossier PDF...')}
                    className="px-4 py-2 rounded-xl bg-[#0B0820] border border-[#D4AF37]/40 text-xs font-semibold text-[#F4D58D] hover:bg-[#D4AF37] hover:text-[#0B0820] transition-all cursor-pointer flex items-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF Dossier</span>
                  </button>
                </div>
              </div>

              {/* Chart Visual & Planetary Placements Grid */}
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                
                {/* SVG North Indian Diamond Chart */}
                <div className="lg:col-span-6 flex justify-center">
                  <div className="relative w-full max-w-[380px] aspect-square rounded-2xl bg-[#0B0820] p-4 border border-[#D4AF37]/40 shadow-inner flex items-center justify-center">
                    <svg 
                      viewBox="0 0 300 300" 
                      className="w-full h-full drop-shadow-[0_0_15px_rgba(212,175,55,0.2)] text-[#D4AF37]"
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1.5"
                    >
                      {/* Outer Square */}
                      <rect x="15" y="15" width="270" height="270" stroke="rgba(212,175,55,0.5)" strokeWidth="2" />
                      
                      {/* Diagonals */}
                      <line x1="15" y1="15" x2="285" y2="285" stroke="rgba(212,175,55,0.35)" />
                      <line x1="285" y1="15" x2="15" y2="285" stroke="rgba(212,175,55,0.35)" />
                      
                      {/* Diamond */}
                      <polygon points="150,15 285,150 150,285 15,150" stroke="#D4AF37" strokeWidth="2.2" fill="rgba(21,16,46,0.6)" />

                      {/* 1st House (Lagna) - Top Center */}
                      <text x="150" y="85" textAnchor="middle" fill="#F8F3E7" fontSize="13" fontFamily="serif" fontWeight="bold">1. Simha (Leo)</text>
                      <text x="150" y="105" textAnchor="middle" fill="#F4D58D" fontSize="10" fontWeight="bold">Lagna • Su • Ve</text>

                      {/* 2nd House */}
                      <text x="85" y="55" textAnchor="middle" fill="#F8F3E7" fontSize="11">2. Kanya</text>
                      <text x="85" y="70" textAnchor="middle" fill="#F4D58D" fontSize="9">Me (Exalted)</text>

                      {/* 12th House */}
                      <text x="215" y="55" textAnchor="middle" fill="#F8F3E7" fontSize="11">12. Karka</text>
                      <text x="215" y="70" textAnchor="middle" fill="#F4D58D" fontSize="9">Ju (Exalted)</text>

                      {/* 4th House */}
                      <text x="70" y="150" textAnchor="middle" fill="#F8F3E7" fontSize="11">4. Vrishchika</text>
                      <text x="70" y="165" textAnchor="middle" fill="#F4D58D" fontSize="9">Rahu</text>

                      {/* 10th House */}
                      <text x="230" y="150" textAnchor="middle" fill="#F8F3E7" fontSize="11">10. Vrishabha</text>
                      <text x="230" y="165" textAnchor="middle" fill="#F4D58D" fontSize="9">Mo (Ex) • Ketu</text>

                      {/* 7th House - Bottom Center */}
                      <text x="150" y="225" textAnchor="middle" fill="#F8F3E7" fontSize="12">7. Kumbha</text>
                      <text x="150" y="242" textAnchor="middle" fill="#F4D58D" fontSize="10">Shani (Own)</text>

                      {/* 9th House */}
                      <text x="85" y="250" textAnchor="middle" fill="#F8F3E7" fontSize="11">9. Mesha</text>
                      <text x="85" y="265" textAnchor="middle" fill="#F4D58D" fontSize="9">Mangal (Own)</text>

                      {/* 6th House */}
                      <text x="215" y="250" textAnchor="middle" fill="#F8F3E7" fontSize="11">6. Makara</text>
                    </svg>
                  </div>
                </div>

                {/* Planetary Positions Table */}
                <div className="lg:col-span-6 overflow-x-auto">
                  <h4 className="font-serif text-sm font-bold text-[#F4D58D] uppercase tracking-wider mb-3">
                    Planetary Coordinates (Graha Sthiti)
                  </h4>
                  <div className="rounded-xl border border-white/10 overflow-hidden text-xs">
                    <table className="w-full text-left">
                      <thead className="bg-[#0B0820] text-[#C8C1B5]/60 border-b border-white/10 text-[10px] uppercase">
                        <tr>
                          <th className="p-2.5">Planet</th>
                          <th className="p-2.5">Sign (Rashi)</th>
                          <th className="p-2.5">House</th>
                          <th className="p-2.5">Degree</th>
                          <th className="p-2.5">Dignity</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {kundli?.planetaryPositions.map((pos, idx) => (
                          <tr key={idx} className="hover:bg-white/5">
                            <td className="p-2.5 font-medium text-[#F8F3E7] flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                              <span>{pos.planet}</span>
                            </td>
                            <td className="p-2.5 text-[#F4D58D]">{pos.sign}</td>
                            <td className="p-2.5 text-[#C8C1B5]">House {pos.house}</td>
                            <td className="p-2.5 font-mono text-[11px] text-[#C8C1B5]/60">{pos.degree}</td>
                            <td className="p-2.5">
                              <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                                pos.status === 'Exalted' 
                                  ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/30' 
                                  : pos.status === 'Own' 
                                    ? 'bg-purple-950 text-purple-300 border border-purple-500/30' 
                                    : 'text-[#C8C1B5]/60'
                              }`}>
                                {pos.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* TAB 3: Prescribed Remedies & Lifestyle Alignments */}
        {activeTab === 'remedies' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#15102E] border border-[#D4AF37]/35 shadow-2xl">
              
              <div className="mb-6">
                <span className="text-[11px] uppercase font-serif text-[#D4AF37] tracking-wider">Spiritual Counterbalances</span>
                <h3 className="font-serif text-2xl font-bold text-[#F8F3E7]">Prescribed Vedic Remedies (Upayas)</h3>
                <p className="text-xs text-[#C8C1B5]">
                  Curated specifically for your Lagna (Simha) and current Jupiter-Saturn cycle. No fear-based rituals.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Gemstone */}
                <div className="p-5 rounded-2xl bg-[#0B0820] border border-[#D4AF37]/25 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#15102E] border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                    <Gem className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-[#D4AF37]">Supportive Gemstone</span>
                    <h4 className="font-serif text-base font-bold text-[#F8F3E7] mb-1">
                      {kundli?.coreRemedies.gemstone.split(' ')[0]} {kundli?.coreRemedies.gemstone.split(' ')[1]}
                    </h4>
                    <p className="text-xs text-[#C8C1B5] leading-relaxed">
                      {kundli?.coreRemedies.gemstone}
                    </p>
                  </div>
                </div>

                {/* Mantra */}
                <div className="p-5 rounded-2xl bg-[#0B0820] border border-[#D4AF37]/25 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#15102E] border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                    <Flame className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-[#D4AF37]">Sacred Japa Mantra</span>
                    <h4 className="font-serif text-base font-bold text-[#F8F3E7] mb-1">
                      Guru Bija Mantra
                    </h4>
                    <p className="text-xs text-[#F4D58D] italic font-serif leading-relaxed">
                      "{kundli?.coreRemedies.mantra}"
                    </p>
                  </div>
                </div>

                {/* Rudraksha */}
                <div className="p-5 rounded-2xl bg-[#0B0820] border border-[#D4AF37]/25 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#15102E] border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-[#D4AF37]">Sacred Bead</span>
                    <h4 className="font-serif text-base font-bold text-[#F8F3E7] mb-1">
                      Rudraksha Recommendation
                    </h4>
                    <p className="text-xs text-[#C8C1B5] leading-relaxed">
                      {kundli?.coreRemedies.rudraksha}
                    </p>
                  </div>
                </div>

                {/* Charitable Giving (Dana) */}
                <div className="p-5 rounded-2xl bg-[#0B0820] border border-[#D4AF37]/25 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#15102E] border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                    <Sun className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-[#D4AF37]">Charitable Timing (Dana)</span>
                    <h4 className="font-serif text-base font-bold text-[#F8F3E7] mb-1">
                      Auspicious Day: {kundli?.coreRemedies.auspiciousDay}
                    </h4>
                    <p className="text-xs text-[#C8C1B5] leading-relaxed">
                      {kundli?.coreRemedies.charitySuggestion}
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* TAB 4: Past Bookings & Invoices */}
        {activeTab === 'history' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#15102E] border border-[#D4AF37]/25 shadow-2xl">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <h3 className="font-serif text-xl font-bold text-[#F8F3E7]">Consultation Records & Payment Receipts</h3>
                <span className="text-xs text-[#C8C1B5]/60">{bookings.length} Total Records</span>
              </div>

              <div className="space-y-4">
                {bookings.map((b) => (
                  <div 
                    key={b.id} 
                    className="p-4 rounded-xl bg-[#0B0820] border border-[#D4AF37]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-xs text-[#F4D58D]">{b.referenceNumber}</span>
                        <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                          b.status === 'upcoming' 
                            ? 'bg-amber-950 text-amber-300' 
                            : 'bg-emerald-950 text-emerald-300'
                        }`}>
                          {b.status}
                        </span>
                      </div>
                      <h4 className="font-serif font-bold text-sm text-[#F8F3E7]">{b.serviceTitle}</h4>
                      <p className="text-xs text-[#C8C1B5]/70">Astrologer: {b.astrologerName} • {b.date}</p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <span className="text-xs font-semibold text-emerald-400">
                          Confirmed Consultation
                        </span>
                        <span className="block text-[10px] text-[#C8C1B5]/50">Mode: {b.consultationType.toUpperCase()}</span>
                      </div>

                      <button
                        onClick={() => alert(`Receipt downloaded for transaction ${b.referenceNumber}`)}
                        className="px-3 py-1.5 rounded-lg bg-[#15102E] border border-[#D4AF37]/30 text-xs text-[#F8F3E7] hover:text-[#F4D58D] flex items-center gap-1.5 cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Receipt</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        )}

        {/* TAB 5: Profile & Birth Coordinates Settings */}
        {activeTab === 'profile' && (
          <div className="space-y-6 animate-in fade-in duration-200 max-w-2xl">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#15102E] border border-[#D4AF37]/30 shadow-2xl">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#F8F3E7]">Birth Coordinates & Profile</h3>
                  <p className="text-xs text-[#C8C1B5]">Ensure your birth time and location are completely accurate.</p>
                </div>
                {!isEditingProfile && (
                  <button
                    onClick={() => setIsEditingProfile(true)}
                    className="px-4 py-1.5 rounded-xl bg-[#0B0820] border border-[#D4AF37]/30 text-xs text-[#F4D58D] flex items-center gap-1.5 cursor-pointer hover:border-[#D4AF37]"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>Edit Profile</span>
                  </button>
                )}
              </div>

              {savedSuccess && (
                <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2 mb-4">
                  <Check className="w-4 h-4" />
                  <span>Profile updated successfully! Kundli calculations refreshed.</span>
                </div>
              )}

              {isEditingProfile ? (
                <form onSubmit={handleSaveProfile} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-[#C8C1B5] uppercase text-[10px] font-semibold mb-1">Full Name</label>
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-[#0B0820] border border-[#D4AF37]/25 text-[#F8F3E7] focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#C8C1B5] uppercase text-[10px] font-semibold mb-1">Phone Number</label>
                    <input
                      type="text"
                      value={editPhone}
                      onChange={(e) => setEditPhone(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-[#0B0820] border border-[#D4AF37]/25 text-[#F8F3E7] focus:border-[#D4AF37]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[#C8C1B5] uppercase text-[10px] font-semibold mb-1">Place of Birth</label>
                      <input
                        type="text"
                        value={editCity}
                        onChange={(e) => setEditCity(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#0B0820] border border-[#D4AF37]/25 text-[#F8F3E7] focus:border-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#C8C1B5] uppercase text-[10px] font-semibold mb-1">Time of Birth (24h)</label>
                      <input
                        type="time"
                        value={editTob}
                        onChange={(e) => setEditTob(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#0B0820] border border-[#D4AF37]/25 text-[#F8F3E7] focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#F4D58D] via-[#D4AF37] to-[#B8860B] text-[#0B0820] font-bold cursor-pointer hover:scale-105 transition-all"
                    >
                      Save Changes
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEditingProfile(false)}
                      className="px-4 py-2.5 rounded-xl bg-white/10 text-[#F8F3E7] cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-[#C8C1B5]/70">Full Name</span>
                    <span className="font-semibold text-[#F8F3E7]">{currentUser.name}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-[#C8C1B5]/70">Email</span>
                    <span className="font-semibold text-[#F8F3E7]">{currentUser.email}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-[#C8C1B5]/70">Phone</span>
                    <span className="font-semibold text-[#F8F3E7]">{currentUser.phone}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-[#C8C1B5]/70">Date of Birth</span>
                    <span className="font-semibold text-[#F8F3E7]">{currentUser.birthDetails.dateOfBirth}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-[#C8C1B5]/70">Time of Birth</span>
                    <span className="font-semibold text-[#F8F3E7]">{currentUser.birthDetails.timeOfBirth}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-[#C8C1B5]/70">Place of Birth</span>
                    <span className="font-semibold text-[#F8F3E7]">
                      {currentUser.birthDetails.placeOfBirth}, {currentUser.birthDetails.country}
                    </span>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
