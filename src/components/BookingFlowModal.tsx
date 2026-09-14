import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  SERVICES_DATA, 
  ASTROLOGERS_DATA 
} from '../data/astrologyData';
import { 
  ConsultationType, 
  BirthDetails, 
  BookingData, 
  UserProfile 
} from '../types';
import { 
  X, 
  Check, 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  Sparkles, 
  ShieldCheck, 
  Video, 
  Phone, 
  MessageSquare, 
  ArrowRight, 
  ArrowLeft, 
  CreditCard, 
  Wallet, 
  Lock, 
  AlertCircle,
  Download,
  Compass
} from 'lucide-react';

interface BookingFlowModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
  preselectedAstrologerId?: string;
  currency: 'USD' | 'INR';
  currentUser: UserProfile | null;
  onBookingSuccess: (booking: BookingData) => void;
  onGoToDashboard: () => void;
}

export const BookingFlowModal: React.FC<BookingFlowModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
  preselectedAstrologerId,
  currency,
  currentUser,
  onBookingSuccess,
  onGoToDashboard
}) => {
  // Wizard current step (1 to 8, or 9 for confirmed)
  const [currentStep, setCurrentStep] = useState(1);

  // Form State
  const [selectedServiceId, setSelectedServiceId] = useState<string>(preselectedServiceId || SERVICES_DATA[0].id);
  const [selectedAstrologerId, setSelectedAstrologerId] = useState<string>(preselectedAstrologerId || 'any');
  
  // Date & Time
  const [selectedDate, setSelectedDate] = useState<string>('2026-09-24');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('11:00 AM - 12:00 PM EST');

  // Personal Info
  const [fullName, setFullName] = useState<string>(currentUser?.name || '');
  const [email, setEmail] = useState<string>(currentUser?.email || '');
  const [phone, setPhone] = useState<string>(currentUser?.phone || '');
  const [gender, setGender] = useState<'male' | 'female' | 'other' | 'prefer_not_to_say'>('female');

  // Birth Details
  const [dob, setDob] = useState<string>(currentUser?.birthDetails.dateOfBirth || '1994-06-21');
  const [tob, setTob] = useState<string>(currentUser?.birthDetails.timeOfBirth || '08:30');
  const [timeAccuracy, setTimeAccuracy] = useState<'exact' | 'within_15min' | 'approximate' | 'unknown'>('exact');
  const [pob, setPob] = useState<string>(currentUser?.birthDetails.placeOfBirth || 'Mumbai');
  const [pobCountry, setPobCountry] = useState<string>(currentUser?.birthDetails.country || 'India');

  // Consultation Format & Questions
  const [consultationType, setConsultationType] = useState<ConsultationType>('video');
  const [concerns, setConcerns] = useState<string>('');

  // Promo Code
  const [promoCode, setPromoCode] = useState<string>('');
  const [discountApplied, setDiscountApplied] = useState<boolean>(false);
  const [promoError, setPromoError] = useState<string>('');

  // Payment method
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'wallet' | 'upi'>('card');
  const [cardNumber, setCardNumber] = useState('4242 •••• •••• 4242');
  const [cardExpiry, setCardExpiry] = useState('12/28');
  const [cardCvc, setCardCvc] = useState('888');
  const [isProcessing, setIsProcessing] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<BookingData | null>(null);

  // Sync pre-selections
  useEffect(() => {
    if (preselectedServiceId) setSelectedServiceId(preselectedServiceId);
    if (preselectedAstrologerId) setSelectedAstrologerId(preselectedAstrologerId);
  }, [preselectedServiceId, preselectedAstrologerId]);

  if (!isOpen) return null;

  const currentService = SERVICES_DATA.find(s => s.id === selectedServiceId) || SERVICES_DATA[0];
  const currentAstrologer = ASTROLOGERS_DATA.find(a => a.id === selectedAstrologerId);

  // Calculate pricing
  const basePriceUSD = currentService.priceUSD;
  const basePriceINR = currentService.priceINR;
  const discountRate = discountApplied ? 0.10 : 0;
  const finalPriceUSD = Math.round(basePriceUSD * (1 - discountRate));
  const finalPriceINR = Math.round(basePriceINR * (1 - discountRate));

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'VEDIC10' || promoCode.trim().toUpperCase() === 'KINNERGURUMAA' || promoCode.trim().toUpperCase() === 'GURUMAA') {
      setDiscountApplied(true);
      setPromoError('');
    } else {
      setPromoError('Invalid promo code. Try "KINNERGURUMAA" or "VEDIC10" for 10% off.');
    }
  };

  const availableTimeSlots = [
    '09:00 AM - 10:00 AM EST',
    '11:00 AM - 12:00 PM EST',
    '02:00 PM - 03:00 PM EST',
    '04:30 PM - 05:30 PM EST',
    '07:00 PM - 08:00 PM EST'
  ];

  const handleProcessPayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      const randomRef = `KG-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      const newBooking: BookingData = {
        id: `bkg-${Date.now()}`,
        serviceId: currentService.id,
        serviceTitle: currentService.title,
        astrologerId: currentAstrologer ? currentAstrologer.id : 'acharya-devavrat',
        astrologerName: currentAstrologer ? currentAstrologer.name : 'Acharya Devavrat Shastri (Assigned Acharya)',
        date: selectedDate,
        timeSlot: selectedTimeSlot,
        consultationType,
        fullName: fullName || 'Seeker',
        email: email || 'client@example.com',
        phone: phone || '+91 99299 36478',
        birthDetails: {
          dateOfBirth: dob,
          timeOfBirth: tob,
          timeAccuracy,
          placeOfBirth: pob,
          country: pobCountry,
          gender
        },
        concernsOrQuestions: concerns || 'Comprehensive birth chart reading and life guidance.',
        totalPriceUSD: finalPriceUSD,
        totalPriceINR: finalPriceINR,
        currency,
        paymentMethod,
        status: 'upcoming',
        zoomLink: `https://meet.google.com/kinnergurumaa-${Math.floor(100 + Math.random() * 900)}`,
        referenceNumber: randomRef,
        createdAt: new Date().toISOString()
      };

      setConfirmedBooking(newBooking);
      onBookingSuccess(newBooking);
      setCurrentStep(9); // Confirmed screen

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#E6CA85', '#351C66', '#FAF8F4']
        });
      } catch (err) {
        // Safe fallback if canvas not available
      }
    }, 1200);
  };

  const stepsList = [
    'Service',
    'Astrologer',
    'Date & Time',
    'Contact',
    'Birth Details',
    'Format',
    'Review',
    'Payment'
  ];

  return (
    <div 
      id="booking-flow-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6 overflow-y-auto"
    >
      <div 
        id="booking-modal-container"
        className="relative w-full max-w-3xl bg-[#0B0820] border-2 border-[#D4AF37]/25 rounded-3xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh]"
      >
        {/* Top Modal Header */}
        <div className="bg-[#15102E] px-6 py-4 border-b border-[#D4AF37]/25 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#0B0820] border border-[#D4AF37]/40 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-[#F4D58D]" />
            </div>
            <div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-[#F8F3E7]">
                Book Your Sacred Consultation
              </h3>
              <p className="text-[11px] text-[#D4AF37]">
                Step {currentStep <= 8 ? currentStep : 8} of 8 • Classical Vedic Astrological Analysis
              </p>
            </div>
          </div>

          <button
            id="close-booking-modal-btn"
            onClick={onClose}
            className="p-1.5 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wizard Step Breadcrumb Indicator (Steps 1 to 8) */}
        {currentStep <= 8 && (
          <div className="bg-[#0B0820] px-4 py-2.5 border-b border-white/5 overflow-x-auto">
            <div className="flex items-center justify-between min-w-[520px] gap-1 text-[11px]">
              {stepsList.map((stepName, i) => {
                const stepNum = i + 1;
                const isPassed = stepNum < currentStep;
                const isCurrent = stepNum === currentStep;
                return (
                  <div key={i} className="flex items-center gap-1.5">
                    <div 
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        isPassed 
                          ? 'bg-gradient-to-r from-[#F4D58D] to-[#D4AF37] text-[#0B0820]' 
                          : isCurrent 
                            ? 'border border-[#D4AF37] text-[#F4D58D] bg-[#15102E]' 
                            : 'bg-white/10 text-white/40'
                      }`}
                    >
                      {isPassed ? <Check className="w-3 h-3 text-[#0B0820]" /> : stepNum}
                    </div>
                    <span className={`${isCurrent ? 'text-[#F4D58D] font-semibold' : 'text-[#C8C1B5]/60'}`}>
                      {stepName}
                    </span>
                    {i < stepsList.length - 1 && <span className="text-white/20 mx-1">›</span>}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto flex-1 text-sm text-[#F8F3E7]">
          
          {/* STEP 1: Select Service */}
          {currentStep === 1 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="mb-2">
                <h4 className="font-serif text-lg font-bold text-[#F8F3E7]">Step 1: Choose Your Consultation</h4>
                <p className="text-xs text-[#C8C1B5]">Select the Vedic focal area you wish to address.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto pr-1">
                {SERVICES_DATA.map((srv) => (
                  <div
                    key={srv.id}
                    onClick={() => setSelectedServiceId(srv.id)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                      selectedServiceId === srv.id
                        ? 'bg-[#15102E] border-[#D4AF37] shadow-lg shadow-[#D4AF37]/15'
                        : 'bg-[#15102E]/60 border-[#D4AF37]/15 hover:border-[#D4AF37]/40'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-serif font-semibold text-[#F4D58D] uppercase tracking-wider">
                          {srv.durationMinutes} Minutes
                        </span>
                        {selectedServiceId === srv.id && (
                          <span className="w-4 h-4 rounded-full bg-[#D4AF37] flex items-center justify-center">
                            <Check className="w-3 h-3 text-[#0B0820]" />
                          </span>
                        )}
                      </div>
                      <h5 className="font-serif font-bold text-sm text-[#F8F3E7] mb-1">{srv.title}</h5>
                      <p className="text-[11px] text-[#C8C1B5] line-clamp-2 mb-3">{srv.shortDesc}</p>
                    </div>

                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                      <span className="text-[#C8C1B5]/70">Consultation:</span>
                      <span className="text-[#F4D58D] font-medium">One-on-One Session</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Select Astrologer */}
          {currentStep === 2 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="mb-2">
                <h4 className="font-serif text-lg font-bold text-[#F8F3E7]">Step 2: Select Your Astrologer</h4>
                <p className="text-xs text-[#C8C1B5]">You can choose a specific Acharya or allow us to assign the best matched expert.</p>
              </div>

              {/* Any Astrologer Option */}
              <div
                onClick={() => setSelectedAstrologerId('any')}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                  selectedAstrologerId === 'any'
                    ? 'bg-[#15102E] border-[#D4AF37] shadow-md shadow-[#D4AF37]/15'
                    : 'bg-[#15102E]/60 border-[#D4AF37]/15 hover:border-[#D4AF37]/40'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0B0820] border border-[#D4AF37]/40 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-[#F4D58D]" />
                  </div>
                  <div>
                    <h5 className="font-serif font-bold text-sm text-[#F8F3E7]">Next Available Senior Acharya (Recommended)</h5>
                    <p className="text-[11px] text-[#C8C1B5]">We pair your specific questions with the Acharya best aligned with your chart.</p>
                  </div>
                </div>
                {selectedAstrologerId === 'any' && (
                  <span className="w-5 h-5 rounded-full bg-[#D4AF37] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#0B0820]" />
                  </span>
                )}
              </div>

              {/* Specific Astrologers Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[45vh] overflow-y-auto pr-1">
                {ASTROLOGERS_DATA.map((ast) => (
                  <div
                    key={ast.id}
                    onClick={() => setSelectedAstrologerId(ast.id)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                      selectedAstrologerId === ast.id
                        ? 'bg-[#15102E] border-[#D4AF37] shadow-md'
                        : 'bg-[#15102E]/60 border-[#D4AF37]/15 hover:border-[#D4AF37]/40'
                    }`}
                  >
                    <img 
                      src={ast.avatarUrl} 
                      alt={ast.name}
                      className="w-12 h-12 rounded-xl object-cover border border-[#D4AF37]/30 shrink-0" 
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h5 className="font-serif font-bold text-xs text-[#F8F3E7] truncate">{ast.name}</h5>
                        {selectedAstrologerId === ast.id && <Check className="w-4 h-4 text-[#D4AF37]" />}
                      </div>
                      <p className="text-[10px] text-[#D4AF37] truncate">{ast.title}</p>
                      <p className="text-[10px] text-[#C8C1B5]">{ast.experienceYears}+ yrs exp • ⭐ {ast.rating}</p>
                      <p className="text-[10px] text-[#C8C1B5]/70 truncate">Speaks: {ast.languages.join(', ')}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Date & Time Slot */}
          {currentStep === 3 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="mb-2">
                <h4 className="font-serif text-lg font-bold text-[#F8F3E7]">Step 3: Select Date & Time</h4>
                <p className="text-xs text-[#C8C1B5]">Sessions are conducted in unhurried, private slots.</p>
              </div>

              {/* Date Selection */}
              <div>
                <label className="block text-xs font-semibold text-[#F4D58D] uppercase tracking-wider mb-2">
                  Consultation Date
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['2026-09-23', '2026-09-24', '2026-09-25', '2026-09-26'].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setSelectedDate(d)}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        selectedDate === d
                          ? 'bg-gradient-to-r from-[#F4D58D] to-[#D4AF37] text-[#0B0820] font-bold border-[#D4AF37]'
                          : 'bg-[#15102E] text-[#F8F3E7] border-[#D4AF37]/25 hover:border-[#D4AF37]/50'
                      }`}
                    >
                      <CalendarIcon className="w-4 h-4 mx-auto mb-1" />
                      <span className="text-xs block">{new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', weekday: 'short' })}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              <div className="pt-3">
                <label className="block text-xs font-semibold text-[#F4D58D] uppercase tracking-wider mb-2">
                  Available Slots ({selectedDate})
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {availableTimeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTimeSlot(slot)}
                      className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                        selectedTimeSlot === slot
                          ? 'bg-[#15102E] border-[#D4AF37] text-[#F4D58D] font-semibold'
                          : 'bg-[#15102E]/60 border-[#D4AF37]/25 text-[#C8C1B5] hover:border-[#D4AF37]/40'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#D4AF37]" />
                        <span className="text-xs">{slot}</span>
                      </div>
                      {selectedTimeSlot === slot && <Check className="w-4 h-4 text-[#D4AF37]" />}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#0B0820] border border-[#D4AF37]/25 text-xs text-[#C8C1B5] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Timezone is automatically displayed in your local time with calendar invite generated after booking.</span>
              </div>
            </div>
          )}

          {/* STEP 4: Personal Information */}
          {currentStep === 4 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="mb-2">
                <h4 className="font-serif text-lg font-bold text-[#F8F3E7]">Step 4: Contact & Personal Details</h4>
                <p className="text-xs text-[#C8C1B5]">We use this to send your secure meeting link and session dossier.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#F4D58D] uppercase tracking-wider mb-1.5">
                    Full Legal Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#15102E] border border-[#D4AF37]/25 text-xs text-[#F8F3E7] placeholder-[#C8C1B5]/40 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#F4D58D] uppercase tracking-wider mb-1.5">
                    Email Address (for Dossier & Meet link) *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="priya@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#15102E] border border-[#D4AF37]/25 text-xs text-[#F8F3E7] placeholder-[#C8C1B5]/40 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#F4D58D] uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp (for Reminders) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 99299 36478"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#15102E] border border-[#D4AF37]/25 text-xs text-[#F8F3E7] placeholder-[#C8C1B5]/40 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#F4D58D] uppercase tracking-wider mb-1.5">
                    Gender (Optional)
                  </label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value as any)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#15102E] border border-[#D4AF37]/25 text-xs text-[#F8F3E7] focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other / Non-Binary</option>
                    <option value="prefer_not_to_say">Prefer Not to Disclose</option>
                  </select>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#15102E] border border-[#D4AF37]/25 text-xs text-[#C8C1B5] flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Your contact credentials are strictly confidential and protected by 256-bit encryption.</span>
              </div>
            </div>
          )}

          {/* STEP 5: Birth Details */}
          {currentStep === 5 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="mb-2">
                <h4 className="font-serif text-lg font-bold text-[#F8F3E7]">Step 5: Sacred Birth Details</h4>
                <p className="text-xs text-[#C8C1B5]">
                  Exact birth coordinates are the foundation of your Kundli, Lagna degree, and Vimshottari Dasha calculations.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#F4D58D] uppercase tracking-wider mb-1.5">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    required
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#15102E] border border-[#D4AF37]/25 text-xs text-[#F8F3E7] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#F4D58D] uppercase tracking-wider mb-1.5">
                    Time of Birth (24h or precise) *
                  </label>
                  <input
                    type="time"
                    required
                    value={tob}
                    onChange={(e) => setTob(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#15102E] border border-[#D4AF37]/25 text-xs text-[#F8F3E7] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#F4D58D] uppercase tracking-wider mb-1.5">
                    Time Accuracy Confidence
                  </label>
                  <select
                    value={timeAccuracy}
                    onChange={(e) => setTimeAccuracy(e.target.value as any)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#15102E] border border-[#D4AF37]/25 text-xs text-[#F8F3E7] focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="exact">Exact (from hospital birth certificate)</option>
                    <option value="within_15min">Within 15 minutes</option>
                    <option value="approximate">Approximate (morning/evening)</option>
                    <option value="unknown">Unknown (use Prashna Horary method)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#F4D58D] uppercase tracking-wider mb-1.5">
                    Place of Birth (City / Town) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. New Delhi or Chicago"
                    value={pob}
                    onChange={(e) => setPob(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#15102E] border border-[#D4AF37]/25 text-xs text-[#F8F3E7] placeholder-[#C8C1B5]/40 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-[#F4D58D] uppercase tracking-wider mb-1.5">
                    Country of Birth *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. United States, India, United Kingdom, Canada..."
                    value={pobCountry}
                    onChange={(e) => setPobCountry(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#15102E] border border-[#D4AF37]/25 text-xs text-[#F8F3E7] placeholder-[#C8C1B5]/40 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              {timeAccuracy !== 'exact' && (
                <div className="p-3 rounded-xl bg-[#15102E] border border-[#D4AF37]/30 text-[#F4D58D] text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-[#D4AF37]" />
                  <span>Our Acharya will conduct brief birth-time rectification questions at the start of the session to ensure Lagna precision.</span>
                </div>
              )}
            </div>
          )}

          {/* STEP 6: Consultation Format & Questions */}
          {currentStep === 6 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="mb-2">
                <h4 className="font-serif text-lg font-bold text-[#F8F3E7]">Step 6: Consultation Format & Questions</h4>
                <p className="text-xs text-[#C8C1B5]">Choose how you wish to communicate and what questions you want answered.</p>
              </div>

              {/* Format selection */}
              <div>
                <label className="block text-xs font-semibold text-[#F4D58D] uppercase tracking-wider mb-2">
                  Preferred Consultation Mode
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'video', label: 'Video Call', icon: <Video className="w-4 h-4" />, note: 'Screen-shared Kundli' },
                    { id: 'audio', label: 'Audio Call', icon: <Phone className="w-4 h-4" />, note: 'Deep focused talk' },
                    { id: 'chat', label: 'Confidential Chat', icon: <MessageSquare className="w-4 h-4" />, note: 'Written sanctuary' }
                  ].map((mode) => (
                    <button
                      key={mode.id}
                      type="button"
                      onClick={() => setConsultationType(mode.id as ConsultationType)}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        consultationType === mode.id
                          ? 'bg-[#15102E] border-[#D4AF37] text-[#F4D58D] shadow-md shadow-[#D4AF37]/15'
                          : 'bg-[#15102E]/60 border-[#D4AF37]/25 text-[#C8C1B5] hover:border-[#D4AF37]/40'
                      }`}
                    >
                      <div className="mx-auto mb-1 flex justify-center text-[#D4AF37]">{mode.icon}</div>
                      <span className="text-xs font-bold block">{mode.label}</span>
                      <span className="text-[10px] text-[#C8C1B5]/70 block">{mode.note}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Specific Questions / Concerns */}
              <div className="pt-2">
                <label className="block text-xs font-semibold text-[#F4D58D] uppercase tracking-wider mb-1.5">
                  Questions, Concerns, or Current Life Transitions (Optional)
                </label>
                <textarea
                  rows={4}
                  placeholder="e.g. Navigating a career pivot in November, questions regarding marriage compatibility, or feeling stuck in my current Dasha cycle..."
                  value={concerns}
                  onChange={(e) => setConcerns(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#15102E] border border-[#D4AF37]/25 text-xs text-[#F8F3E7] placeholder-[#C8C1B5]/40 focus:outline-none focus:border-[#D4AF37]"
                />
                <p className="text-[11px] text-[#C8C1B5]/60 mt-1">
                  Your astrologer reads this in advance during pre-session chart preparation.
                </p>
              </div>
            </div>
          )}

          {/* STEP 7: Order Review */}
          {currentStep === 7 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="mb-2">
                <h4 className="font-serif text-lg font-bold text-[#F8F3E7]">Step 7: Review Booking & Inclusions</h4>
                <p className="text-xs text-[#C8C1B5]">Confirm your appointment summary before proceeding to secure payment.</p>
              </div>

              {/* Summary Card */}
              <div className="p-4 rounded-2xl bg-[#15102E] border border-[#D4AF37]/25 space-y-3">
                <div className="flex items-start justify-between pb-3 border-b border-white/10">
                  <div>
                    <span className="text-[10px] uppercase font-serif text-[#D4AF37] tracking-wider">Service</span>
                    <h5 className="font-serif font-bold text-base text-[#F8F3E7]">{currentService.title}</h5>
                    <p className="text-xs text-[#C8C1B5]">{currentService.durationMinutes} Minutes • {consultationType.toUpperCase()} MODE</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[11px] font-semibold text-[#F4D58D]">
                      1-on-1 Session
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-[#C8C1B5]">
                  <div>
                    <span className="text-[#C8C1B5]/60 block text-[10px]">Astrologer:</span>
                    <span className="text-[#F8F3E7]">{currentAstrologer ? currentAstrologer.name : 'Senior Acharya (Assigned)'}</span>
                  </div>
                  <div>
                    <span className="text-[#C8C1B5]/60 block text-[10px]">Date & Time:</span>
                    <span className="text-[#F8F3E7]">{selectedDate} • {selectedTimeSlot}</span>
                  </div>
                  <div>
                    <span className="text-[#C8C1B5]/60 block text-[10px]">Client:</span>
                    <span className="text-[#F8F3E7]">{fullName || 'Priya Sharma'} ({email})</span>
                  </div>
                  <div>
                    <span className="text-[#C8C1B5]/60 block text-[10px]">Birth Coordinates:</span>
                    <span className="text-[#F8F3E7]">{dob} {tob} ({pob}, {pobCountry})</span>
                  </div>
                </div>

                {/* Promo Code Box */}
                <div className="pt-3 border-t border-white/10 flex gap-2">
                  <input
                    type="text"
                    placeholder="Have a promo code? Try VEDIC10"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-xl bg-[#0B0820] border border-[#D4AF37]/25 text-xs text-[#F8F3E7] uppercase focus:border-[#D4AF37]"
                  />
                  <button
                    type="button"
                    onClick={handleApplyPromo}
                    className="px-4 py-2 rounded-xl bg-[#15102E] text-[#F4D58D] border border-[#D4AF37]/30 text-xs font-semibold hover:bg-gradient-to-r hover:from-[#F4D58D] hover:to-[#D4AF37] hover:text-[#0B0820] transition-all cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
                {discountApplied && (
                  <p className="text-xs text-emerald-400 font-medium">✓ 10% Vedic Blessings discount applied!</p>
                )}
                {promoError && (
                  <p className="text-xs text-rose-400">{promoError}</p>
                )}

                {/* Consultation Inclusions Summary */}
                <div className="pt-3 border-t border-white/10 space-y-1.5 text-xs">
                  <div className="flex justify-between text-[#C8C1B5]">
                    <span>Chart Study & Preparation</span>
                    <span className="text-emerald-400 font-medium">Included</span>
                  </div>
                  <div className="flex justify-between text-[#C8C1B5]">
                    <span>Dossier & Follow-up Messaging</span>
                    <span className="text-emerald-400 font-medium">Included</span>
                  </div>
                  <div className="flex justify-between text-[#C8C1B5]">
                    <span>Audio / Video Recording Access</span>
                    <span className="text-emerald-400 font-medium">Included</span>
                  </div>
                  <div className="flex justify-between text-sm font-serif font-bold text-[#F8F3E7] pt-2 border-t border-white/10">
                    <span>Consultation Status</span>
                    <span className="text-[#F4D58D]">Ready to Confirm</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 8: Payment UI */}
          {currentStep === 8 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="mb-2">
                <h4 className="font-serif text-lg font-bold text-[#F8F3E7]">Step 8: Proceed to Secure Payment</h4>
                <p className="text-xs text-[#C8C1B5]">
                  Select payment method. Encrypted with bank-grade 256-bit SSL protocols.
                </p>
              </div>

              {/* Payment Methods */}
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    paymentMethod === 'card'
                      ? 'bg-[#15102E] border-[#D4AF37] text-[#F4D58D] shadow-md shadow-[#D4AF37]/15'
                      : 'bg-[#15102E]/60 border-[#D4AF37]/25 text-[#C8C1B5]'
                  }`}
                >
                  <CreditCard className="w-5 h-5 mx-auto mb-1 text-[#D4AF37]" />
                  <span className="text-xs font-bold block">Credit / Debit</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('wallet')}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    paymentMethod === 'wallet'
                      ? 'bg-[#15102E] border-[#D4AF37] text-[#F4D58D] shadow-md shadow-[#D4AF37]/15'
                      : 'bg-[#15102E]/60 border-[#D4AF37]/25 text-[#C8C1B5]'
                  }`}
                >
                  <Wallet className="w-5 h-5 mx-auto mb-1 text-[#D4AF37]" />
                  <span className="text-xs font-bold block">Apple / Google Pay</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    paymentMethod === 'upi'
                      ? 'bg-[#15102E] border-[#D4AF37] text-[#F4D58D] shadow-md shadow-[#D4AF37]/15'
                      : 'bg-[#15102E]/60 border-[#D4AF37]/25 text-[#C8C1B5]'
                  }`}
                >
                  <Sparkles className="w-5 h-5 mx-auto mb-1 text-[#D4AF37]" />
                  <span className="text-xs font-bold block">UPI / NetBanking</span>
                </button>
              </div>

              {/* Card Inputs Simulation */}
              {paymentMethod === 'card' && (
                <div className="p-4 rounded-2xl bg-[#15102E] border border-[#D4AF37]/25 space-y-3">
                  <div>
                    <label className="block text-[11px] uppercase font-semibold text-[#C8C1B5] mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-[#0B0820] border border-[#D4AF37]/25 text-xs text-[#F8F3E7] focus:border-[#D4AF37]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] uppercase font-semibold text-[#C8C1B5] mb-1">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#0B0820] border border-[#D4AF37]/25 text-xs text-[#F8F3E7] focus:border-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase font-semibold text-[#C8C1B5] mb-1">
                        CVC Security Code
                      </label>
                      <input
                        type="text"
                        value={cardCvc}
                        onChange={(e) => setCardCvc(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#0B0820] border border-[#D4AF37]/25 text-xs text-[#F8F3E7] focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'wallet' && (
                <div className="p-6 rounded-2xl bg-[#15102E] border border-[#D4AF37]/25 text-center">
                  <p className="text-xs text-[#C8C1B5] mb-4">You will authenticate with Apple Pay or Google Wallet upon confirming.</p>
                  <div className="inline-block px-6 py-2.5 rounded-xl bg-[#F8F3E7] text-[#0B0820] font-bold text-xs">
                    Pay with Digital Wallet
                  </div>
                </div>
              )}

              {paymentMethod === 'upi' && (
                <div className="p-4 rounded-2xl bg-[#15102E] border border-[#D4AF37]/25 space-y-3">
                  <label className="block text-[11px] uppercase font-semibold text-[#C8C1B5]">
                    Enter Virtual Payment Address (UPI ID)
                  </label>
                  <input
                    type="text"
                    defaultValue="priya@okaxis"
                    className="w-full px-3 py-2.5 rounded-xl bg-[#0B0820] border border-[#D4AF37]/25 text-xs text-[#F8F3E7] focus:border-[#D4AF37]"
                  />
                  <p className="text-[10px] text-[#C8C1B5]/60">Supports Google Pay, PhonePe, Paytm, and BHIM UPI.</p>
                </div>
              )}

              {/* Secure Notice */}
              <div className="p-3 rounded-xl bg-[#0B0820] border border-[#D4AF37]/25 flex items-center justify-between text-xs">
                <span className="text-[#C8C1B5]">Consultation Allocation:</span>
                <span className="font-serif font-bold text-sm text-[#F4D58D]">
                  Complimentary Hold & Scheduling
                </span>
              </div>
            </div>
          )}

          {/* STEP 9: Confirmed Success Screen */}
          {currentStep === 9 && confirmedBooking && (
            <div className="text-center py-6 space-y-5 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#F4D58D] via-[#D4AF37] to-[#B8860B] text-[#0B0820] flex items-center justify-center mx-auto shadow-xl shadow-[#D4AF37]/30">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>

              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-semibold mb-2">
                  Session Confirmed & Scheduled
                </span>
                <h4 className="text-2xl font-serif font-bold text-[#F8F3E7]">
                  Blessings for Your Journey
                </h4>
                <p className="text-xs text-[#C8C1B5] max-w-md mx-auto mt-1">
                  Your consultation booking has been authenticated. An invitation and calendar hold have been sent to {confirmedBooking.email}.
                </p>
              </div>

              {/* Booking Pass Ticket */}
              <div className="max-w-md mx-auto p-5 rounded-2xl bg-[#15102E] border border-[#D4AF37]/30 text-left space-y-3 shadow-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div>
                    <span className="text-[10px] text-[#C8C1B5]/60 uppercase">Booking Reference</span>
                    <p className="font-mono text-sm font-bold text-[#F4D58D]">{confirmedBooking.referenceNumber}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-[#C8C1B5]/60 uppercase">Status</span>
                    <p className="text-xs font-semibold text-emerald-400">Confirmed & Scheduled</p>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-[#C8C1B5]">
                  <p><strong className="text-[#F4D58D]">Consultation:</strong> {confirmedBooking.serviceTitle}</p>
                  <p><strong className="text-[#F4D58D]">Astrologer:</strong> {confirmedBooking.astrologerName}</p>
                  <p><strong className="text-[#F4D58D]">Scheduled:</strong> {confirmedBooking.date} at {confirmedBooking.timeSlot}</p>
                  <p><strong className="text-[#F4D58D]">Mode:</strong> {confirmedBooking.consultationType.toUpperCase()} CALL</p>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-[#C8C1B5]/70">
                  <span>Pre-session Kundli prep underway</span>
                  <span className="text-[#D4AF37]">7-Day Followup active</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  id="confirmed-view-dashboard-btn"
                  onClick={() => {
                    onClose();
                    onGoToDashboard();
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#F4D58D] via-[#D4AF37] to-[#B8860B] text-[#0B0820] font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-[#D4AF37]/25 transition-all"
                >
                  <Compass className="w-4 h-4" />
                  <span>View in Client Dashboard</span>
                </button>
                <button
                  id="confirmed-done-btn"
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#15102E] border border-[#D4AF37]/30 text-[#F8F3E7] hover:text-[#F4D58D] text-xs font-semibold transition-all cursor-pointer"
                >
                  Close Window
                </button>
              </div>

            </div>
          )}

        </div>

        {/* Modal Bottom Navigation Controls (Steps 1 to 8) */}
        {currentStep <= 8 && (
          <div className="bg-[#15102E] px-6 py-4 border-t border-[#D4AF37]/25 flex items-center justify-between">
            {currentStep > 1 ? (
              <button
                id="booking-prev-step-btn"
                onClick={() => setCurrentStep(prev => prev - 1)}
                className="px-4 py-2 rounded-xl bg-[#0B0820] border border-[#D4AF37]/25 text-[#C8C1B5] hover:text-[#F8F3E7] text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            {currentStep < 8 ? (
              <button
                id="booking-next-step-btn"
                onClick={() => setCurrentStep(prev => prev + 1)}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#F4D58D] via-[#D4AF37] to-[#B8860B] text-[#0B0820] font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-md shadow-[#D4AF37]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                id="booking-confirm-pay-btn"
                onClick={handleProcessPayment}
                disabled={isProcessing}
                className="px-7 py-3 rounded-xl bg-gradient-to-r from-[#F4D58D] via-[#D4AF37] to-[#B8860B] text-[#0B0820] font-bold text-xs flex items-center gap-2 cursor-pointer shadow-xl shadow-[#D4AF37]/30 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-60"
              >
                {isProcessing ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-[#0B0820] border-t-transparent rounded-full animate-spin" />
                    <span>Authorizing Booking...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-3.5 h-3.5" />
                    <span>Authorize & Confirm Booking</span>
                  </>
                )}
              </button>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
