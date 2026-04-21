'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const WelcomePage: NextPage = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Small delay to allow the background to fade in before content pops
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#6D40AA] flex flex-col justify-center items-center relative font-sans overflow-hidden px-6">
      
      {/* Playful Background Elements (Replaced Emojis with SVGs) */}
      <div className="absolute top-10 left-10 opacity-20 animate-bounce" style={{ animationDuration: '3s' }}>
        <svg width="64" height="64" viewBox="0 0 24 24" fill="#FFCB05"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
      </div>
      <div className="absolute right-12 top-1/3 opacity-20 animate-pulse">
        <svg width="72" height="72" viewBox="0 0 24 24" fill="#A06CE3"><path d="M13.13 2.1c.31-.08.64-.08.95 0 2.21.6 4.3 1.83 6 3.53 1.7 1.7 2.93 3.8 3.53 6 .08.31.08.64 0 .95-1.12 4.14-4.5 7.52-8.64 8.64-.31.08-.64.08-.95 0-4.14-1.12-7.52-4.5-8.64-8.64-.08-.31-.08-.64 0-.95 1.12-4.14 4.5-7.52 8.64-8.64z" stroke="currentColor" strokeWidth="2"/><path d="M11 10.5C9.62 9.12 7.7 8.28 5.6 8.04c-.33-.04-.66-.04-.99 0-1.85.2-3.5 1.04-4.9 2.44C4.1 14.87 7.5 18.28 12.04 18.28c.33.04.66.04.99 0 1.85-.2 3.5-1.04 4.9-2.44-5.32 0-9.64-2.58-12-6.5C7.3 10.5 8.9 11.5 11 10.5z" fill="#FFF"/></svg>
      </div>
      <div className="absolute bottom-20 left-1/4 opacity-20 animate-bounce" style={{ animationDuration: '4s' }}>
        <svg width="56" height="56" viewBox="0 0 24 24" fill="#FF5252"><path d="M12 2l2.4 7.6H22l-6.2 4.5 2.3 7.5-6.1-4.5-6.1 4.5 2.3-7.5L2 9.6h7.6z"/></svg>
      </div>
      <div className="absolute bottom-32 right-10 opacity-20 animate-pulse">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="#4CAF50"><circle cx="12" cy="12" r="10" /><path d="M12 6v12m-6-6h12" stroke="#FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>

      {/* Main Content Container */}
      <div className={`w-full max-w-sm flex flex-col items-center z-10 transition-all duration-1000 transform ${showContent ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}>
        
        {/* Mascot / Hero Image Container */}
        <div className="w-48 h-48 bg-white rounded-[40px] shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex justify-center items-center mb-8 border-4 border-[#FFCB05] relative overflow-hidden">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" className="text-[#6D40AA] mb-4">
               <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9 9c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm3 8c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5zm3-6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" fill="currentColor"/>
               <circle cx="9" cy="9" r="2" fill="#FFCB05"/>
               <circle cx="15" cy="9" r="2" fill="#FFCB05"/>
            </svg>
            {/* Sparkles around mascot */}
            <div className="absolute -top-2 -right-2 text-[#FFCB05] animate-spin-slow">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L9 9H2L7 14L5 21L12 17L19 21L17 14L22 9H15L12 2Z"/></svg>
            </div>
            <div className="absolute -bottom-2 -left-2 text-[#FFCB05] animate-spin-slow" style={{ animationDirection: 'reverse' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L9 9H2L7 14L5 21L12 17L19 21L17 14L22 9H15L12 2Z"/></svg>
            </div>
        </div>

        {/* Welcome Text */}
        <div className="bg-white px-8 py-6 rounded-[32px] shadow-lg text-center w-full mb-8 border-b-8 border-r-8 border-[#FFCB05]">
          <h1 className="text-[26px] font-black text-[#382654] leading-tight mb-3">
            Welcome to the <br/><span className="text-[#6D40AA]">Smart World!</span>
          </h1>
          <p className="text-[#6D637A] text-[15px] font-bold leading-relaxed">
            Before we begin your adventure, let's warm up your brain! Are you ready?
          </p>
        </div>

        {/* CTA Button */}
        <Link href="/onboarding/exam" className="w-full">
          <button className="w-full bg-[#FFCC00] text-white font-black text-[18px] tracking-widest rounded-full py-5 shadow-[0_6px_0_#D9A000] hover:bg-[#F2C003] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center gap-3">
            START ADVENTURE 🚀
          </button>
        </Link>
        
      </div>
    </div>
  );
};

export default WelcomePage;
