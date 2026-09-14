export type ConsultationType = 'video' | 'audio' | 'chat';

export interface ServiceItem {
  id: string;
  title: string;
  sanskritName?: string;
  shortDesc: string;
  fullDesc: string;
  durationMinutes: number;
  priceUSD: number;
  priceINR: number;
  popular?: boolean;
  category: 'core' | 'relationships' | 'destiny' | 'annual';
  iconName: string;
  highlights: string[];
  deliverables: string[];
  sampleQuestions: string[];
}

export interface Astrologer {
  id: string;
  name: string;
  title: string;
  lineageOrDegree: string;
  experienceYears: number;
  consultationsCount: number;
  rating: number;
  reviewCount: number;
  languages: string[];
  specialties: string[];
  bio: string;
  philosophy: string;
  avatarUrl: string;
  availableDays: string[];
  hourlyRateUSD: number;
  hourlyRateINR: number;
}

export interface Testimonial {
  id: string;
  clientName: string;
  location: string;
  rating: number;
  serviceTitle: string;
  date: string;
  quote: string;
  outcome: string;
  verified: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  publishedDate: string;
  imageUrl: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'booking' | 'remedies' | 'privacy';
}

export interface BirthDetails {
  dateOfBirth: string;
  timeOfBirth: string;
  timeAccuracy: 'exact' | 'within_15min' | 'approximate' | 'unknown';
  placeOfBirth: string;
  country: string;
  currentCity?: string;
  gender?: 'male' | 'female' | 'other' | 'prefer_not_to_say';
}

export interface BookingData {
  id?: string;
  serviceId: string;
  serviceTitle: string;
  astrologerId: string;
  astrologerName: string;
  date: string;
  timeSlot: string;
  consultationType: ConsultationType;
  fullName: string;
  email: string;
  phone: string;
  birthDetails: BirthDetails;
  concernsOrQuestions: string;
  totalPriceUSD: number;
  totalPriceINR: number;
  currency: 'USD' | 'INR';
  paymentMethod: 'card' | 'wallet' | 'upi';
  status: 'upcoming' | 'completed' | 'cancelled';
  zoomLink?: string;
  referenceNumber: string;
  createdAt: string;
}

export interface PlanetaryPosition {
  planet: string;
  sanskrit: string;
  house: number;
  sign: string;
  nakshatra: string;
  pada: number;
  degree: string;
  isRetrograde?: boolean;
  status: 'Own' | 'Exalted' | 'Debilitated' | 'Friendly' | 'Neutral';
}

export interface KundliChartData {
  ascendant: string;
  moonSign: string;
  sunSign: string;
  currentDasha: string;
  dashaPeriod: string;
  planetaryPositions: PlanetaryPosition[];
  coreRemedies: {
    gemstone: string;
    mantra: string;
    rudraksha: string;
    auspiciousDay: string;
    charitySuggestion: string;
  };
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  birthDetails: BirthDetails;
  savedKundli?: KundliChartData;
}
