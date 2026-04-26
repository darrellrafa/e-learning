'use client';

import { useState, useEffect } from 'react';

interface DashboardTutorialProps {
  onFinish: () => void;
}

export default function DashboardTutorial({ onFinish }: DashboardTutorialProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#1A2024]/90 backdrop-blur-sm flex items-center justify-center font-sans px-4">
      
      {/* Main Box */}
      <div className="w-full sm:max-w-md bg-white rounded-[40px] p-8 shadow-2xl relative border-4 border-[#FFCC00] animate-in zoom-in duration-300">
        
        {/* Header Icon */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white rounded-full p-2 border-4 border-[#FFCC00] shadow-md">
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" className="text-[#6D40AA]">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9 9c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm3 8c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5zm3-6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" fill="currentColor"/>
            </svg>
        </div>

        <h2 className="text-[#382654] font-black text-2xl mt-6 mb-2 text-center tracking-wide">
          How to Play!aqaaz
        </h2>
        <p className="text-[#AAA4B3] text-sm font-bold text-center mb-6">
          Read this before you start your adventure.
        </p>

        {/* Info Boxes */}
        <div className="flex flex-col gap-4">
          
          {/* Card 1 */}
          <div className="bg-[#FFFAEB] border-2 border-[#FFE898] p-4 rounded-2xl flex items-center gap-4">
            <div className="bg-[#FFCC00] w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center text-white font-black text-xl shadow-inner">
               1
            </div>
            <div>
              <h3 className="text-[#D9A000] font-black text-sm">Follow the Path</h3>
              <p className="text-[#8B7D55] text-xs font-bold leading-snug">Tap the glowing circles on the map to start learning!</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F0FDF4] border-2 border-[#A8E6A3] p-4 rounded-2xl flex items-center gap-4">
            <div className="bg-[#4ADE80] w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center text-white font-black text-xl shadow-inner">
               2
            </div>
            <div>
              <h3 className="text-[#22C55E] font-black text-sm">New Worlds</h3>
              <p className="text-[#4E8B5E] text-xs font-bold leading-snug">Tap the tabs at the top (FLOOR 1, 2, 3) to see new themes!</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F3E8FF] border-2 border-[#D8B4FE] p-4 rounded-2xl flex items-center gap-4">
            <div className="bg-[#A855F7] w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center text-white font-black text-xl shadow-inner">
               3
            </div>
            <div>
              <h3 className="text-[#9333EA] font-black text-sm">Your Trophies</h3>
              <p className="text-[#6B4B8B] text-xs font-bold leading-snug">Check your badges and profile using the menu at the bottom.</p>
            </div>
          </div>

        </div>

        {/* CTA */}
        <button 
          onClick={onFinish}
          className="w-full mt-8 py-4 rounded-2xl font-black text-white text-lg tracking-widest bg-[#FFCC00] shadow-[0_6px_0_#D9A000] hover:bg-[#F2C003] active:translate-y-2 active:shadow-none transition-all"
        >
          I UNDERSTAND! 🚀
        </button>

      </div>
    </div>
  );
}
