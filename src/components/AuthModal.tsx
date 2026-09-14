import React, { useState } from 'react';
import { Sparkles, X, Mail, Lock, User, ArrowRight, Check } from 'lucide-react';
import { UserProfile } from '../types';
import { DEMO_USER } from '../data/astrologyData';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: UserProfile) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess
}) => {
  const [mode, setMode] = useState<'login' | 'signup' | 'forgot'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [forgotSent, setForgotSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'forgot') {
      setForgotSent(true);
      return;
    }

    // Provision user session
    const user: UserProfile = {
      ...DEMO_USER,
      name: name || (email.split('@')[0] ? email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1) : 'Vedic Seeker'),
      email: email || DEMO_USER.email,
    };
    onLoginSuccess(user);
    onClose();
  };

  const handleDemoLogin = () => {
    onLoginSuccess(DEMO_USER);
    onClose();
  };

  return (
    <div 
      id="auth-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-150"
    >
      <div 
        id="auth-modal-container"
        className="relative w-full max-w-md bg-[#0B0820] border-2 border-[#D4AF37]/25 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-[#C8C1B5]/60 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-full bg-[#15102E] border border-[#D4AF37]/40 flex items-center justify-center mx-auto mb-3 shadow-lg">
            <Sparkles className="w-6 h-6 text-[#F4D58D]" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-[#F8F3E7]">
            {mode === 'login' && 'Sign In to Sanctuary'}
            {mode === 'signup' && 'Create Your Sanctuary Account'}
            {mode === 'forgot' && 'Reset Sacred Access'}
          </h3>
          <p className="text-xs text-[#C8C1B5] mt-1">
            {mode === 'login' && 'Access your Janam Kundli, upcoming sessions & dossier.'}
            {mode === 'signup' && 'Join thousands of seekers receiving authentic Vedic counsel.'}
            {mode === 'forgot' && 'Enter your email to receive recovery instructions.'}
          </p>
        </div>

        {/* Demo Fast-Login Pill */}
        <div className="mb-6 p-3 rounded-xl bg-[#15102E] border border-[#D4AF37]/25 text-center">
          <p className="text-[11px] text-[#F4D58D] mb-2 font-medium">Quick Preview Mode</p>
          <button
            type="button"
            onClick={handleDemoLogin}
            className="w-full py-2 px-3 rounded-lg bg-gradient-to-r from-[#F4D58D] via-[#D4AF37] to-[#B8860B] text-[#0B0820] font-bold text-xs transition-all cursor-pointer shadow-md hover:scale-[1.01] active:scale-[0.99]"
          >
            Sign In as Priya Sharma (Demo Client)
          </button>
        </div>

        <div className="relative flex items-center justify-center my-4">
          <div className="border-t border-white/10 w-full" />
          <span className="bg-[#0B0820] px-3 text-[10px] uppercase tracking-wider text-[#C8C1B5]/60 absolute">
            or continue with email
          </span>
        </div>

        {forgotSent ? (
          <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-2">
            <Check className="w-6 h-6 text-emerald-300 mx-auto" />
            <p className="text-xs text-emerald-200">
              Recovery link dispatched to {email || 'your email'}. Check your inbox.
            </p>
            <button
              onClick={() => { setForgotSent(false); setMode('login'); }}
              className="text-xs text-[#F4D58D] underline font-semibold"
            >
              Return to Sign In
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
            {mode === 'signup' && (
              <div>
                <label className="block uppercase text-[10px] font-semibold text-[#F4D58D] mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#C8C1B5]/40 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#15102E] border border-[#D4AF37]/25 text-[#F8F3E7] placeholder-[#C8C1B5]/40 focus:border-[#D4AF37] outline-none"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block uppercase text-[10px] font-semibold text-[#F4D58D] mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#C8C1B5]/40 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#15102E] border border-[#D4AF37]/25 text-[#F8F3E7] placeholder-[#C8C1B5]/40 focus:border-[#D4AF37] outline-none"
                />
              </div>
            </div>

            {mode !== 'forgot' && (
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="uppercase text-[10px] font-semibold text-[#F4D58D]">
                    Password
                  </label>
                  {mode === 'login' && (
                    <button
                      type="button"
                      onClick={() => setMode('forgot')}
                      className="text-[10px] text-[#D4AF37] hover:underline"
                    >
                      Forgot?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-[#C8C1B5]/40 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#15102E] border border-[#D4AF37]/25 text-[#F8F3E7] placeholder-[#C8C1B5]/40 focus:border-[#D4AF37] outline-none"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#F4D58D] via-[#D4AF37] to-[#B8860B] text-[#0B0820] font-bold text-xs tracking-wide shadow-lg shadow-[#D4AF37]/20 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2 mt-4"
            >
              <span>{mode === 'login' ? 'Sign In to Account' : mode === 'signup' ? 'Create Account' : 'Send Recovery Link'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        {/* Footer toggles */}
        <div className="pt-4 mt-4 border-t border-white/10 text-center text-xs text-[#C8C1B5]">
          {mode === 'login' ? (
            <p>
              New to KinnerGurumaa?{' '}
              <button
                type="button"
                onClick={() => setMode('signup')}
                className="text-[#F4D58D] font-semibold hover:underline"
              >
                Create an account
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => setMode('login')}
                className="text-[#F4D58D] font-semibold hover:underline"
              >
                Sign in
              </button>
            </p>
          )}
        </div>

      </div>
    </div>
  );
};
