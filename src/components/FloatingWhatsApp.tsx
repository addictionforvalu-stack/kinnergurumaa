import React, { useState } from 'react';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl =
    'https://wa.me/919929936478?text=Hello%20KinnerGurumaa%2C%20I%20would%20like%20to%20know%20more%20about%20your%20astrology%20consultation%20services.';

  return (
    <div 
      id="floating-whatsapp-container"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center gap-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle luxury tooltip for desktop */}
      <div 
        className={`hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#15102E]/95 border border-[#D4AF37]/30 shadow-xl shadow-black/60 text-xs font-medium text-[#F8F3E7] transition-all duration-300 pointer-events-none ${
          isHovered 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-2'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        <span>Chat with <strong className="text-[#F4D58D]">KinnerGurumaa</strong></span>
      </div>

      {/* Floating Action Button */}
      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with KinnerGurumaa on WhatsApp (+91 99299 36478)"
        className="relative group w-14 h-14 min-w-[48px] min-h-[48px] rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/35 hover:shadow-2xl hover:shadow-[#25D366]/55 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-[#0B0820]"
      >
        {/* Soft pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        {/* WhatsApp Brand Icon SVG */}
        <svg
          className="w-7 h-7 fill-current relative z-10 transition-transform duration-300 group-hover:rotate-6"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.301-.778.979-.954 1.18-.175.2-.351.226-.652.076-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.784-1.676-2.085-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.201-.301.301-.502.1-.2.05-.376-.025-.526-.075-.15-.678-1.633-.93-2.241-.245-.592-.494-.511-.678-.521l-.578-.01c-.2 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.512s1.08 2.914 1.23 3.115c.15.201 2.126 3.246 5.151 4.553.72.311 1.282.497 1.721.637.723.23 1.381.197 1.901.12.579-.087 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.076-.126-.276-.201-.577-.352z" />
          <path d="M12.004 0C5.372 0 0 5.373 0 12.006c0 2.115.553 4.179 1.602 6.002L.055 24l6.17-1.619a11.96 11.96 0 0 0 5.779 1.488h.005c6.631 0 12.004-5.373 12.004-12.006C24.013 5.373 18.64 0 12.004 0zm.005 21.906h-.004a9.94 9.94 0 0 1-5.069-1.387l-.364-.216-3.766.988 1.006-3.673-.237-.377a9.92 9.92 0 0 1-1.523-5.235c0-5.485 4.463-9.949 9.953-9.949 2.658 0 5.158 1.036 7.037 2.915a9.9 9.9 0 0 1 2.912 7.038c0 5.487-4.464 9.951-9.948 9.951z" />
        </svg>
      </a>
    </div>
  );
};
