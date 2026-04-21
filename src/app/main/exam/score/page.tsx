'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import type { NextPage } from 'next';
import { Suspense } from 'react';

function ScoreContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const score = searchParams.get('score') || '0';
  const total = searchParams.get('total') || '5';
  const time = searchParams.get('time') || '0';
  const themeParam = searchParams.get('theme');

  const totalExp = Math.round((parseInt(score) / parseInt(total)) * 31) + '+';

  // We change the message dynamically based on the score!
  const isPerfect = parseInt(score) === parseInt(total);

  const handleContinue = () => {
    const destination = themeParam === 'red' ? '/main/dashboard/red' : '/main/dashboard';
    router.push(destination);
  };

  return (
    <div className="min-h-screen bg-[#E2F4FA] flex justify-center items-center relative font-sans overflow-hidden">

      {/* Decorative floating bubbles */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-white/40 rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#FFCB05]/20 rounded-full animate-bounce" style={{ animationDuration: '4s' }} />
      <div className="absolute top-1/4 right-5 w-16 h-16 bg-[#93D334]/20 rounded-full animate-pulse" />

      {/* Score Modal Card */}
      <div className="w-[320px] bg-white rounded-[40px] relative z-10 flex flex-col items-center px-6 pt-12 pb-8 shadow-sm border border-gray-100">

        {/* Mascot / Trophy Icon */}
        <div className="absolute -top-14 w-28 h-28 bg-[#FFCB05] rounded-full border-8 border-[#E2F4FA] flex items-center justify-center shadow-xl animate-bounce" style={{ animationDuration: '2s' }}>
          <span className="text-5xl">{isPerfect ? '🌟' : '🎉'}</span>
        </div>

        {/* Title */}
        <h2 className="text-[#382654] text-[26px] font-black text-center tracking-wide uppercase mt-4">
          {isPerfect ? 'Perfect!' : 'Great Job!'}
        </h2>

        {/* Subtitle */}
        <p className="text-[#6D637A] text-[14px] font-bold text-center mt-2 mb-8">
          {isPerfect ? 'You got everything right!' : 'Keep learning every day!'}
        </p>

        {/* Stats: EXP + TIME side by side */}
        <div className="flex gap-4 mb-4 w-full justify-center">

          {/* TOTAL EXP */}
          <div className="flex-1 bg-[#F2FCE8] border-2 border-[#93D334] rounded-[24px] overflow-hidden flex flex-col items-center py-4 shadow-sm hover:-translate-y-1 transition-transform">
            <span className="text-[#93D334] text-[28px] font-black">{totalExp}</span>
            <div className="text-[#5C8F1A] text-[10px] font-black tracking-widest mt-1">EXP</div>
          </div>

          {/* TOTAL TIME */}
          <div className="flex-1 bg-[#F5EDFC] border-2 border-[#7E52B1] rounded-[24px] overflow-hidden flex flex-col items-center py-4 shadow-sm hover:-translate-y-1 transition-transform">
             <span className="text-[#7E52B1] text-[28px] font-black">{time}<span className="text-lg">s</span></span>
            <div className="text-[#513076] text-[10px] font-black tracking-widest mt-1">TIME</div>
          </div>
        </div>

        {/* TOTAL SCORE centered */}
        <div className="w-2/3 bg-[#FFF9E6] border-2 border-[#FFCB05] rounded-[24px] overflow-hidden flex flex-col items-center py-4 shadow-sm mb-10 hover:-translate-y-1 transition-transform">
          <span className="text-[#D9A14B] text-[32px] font-black tracking-widest">{score}<span className="text-xl text-[#D9A14B]/60">/{total}</span></span>
          <div className="text-[#A57820] text-[10px] font-black tracking-widest mt-1">SCORE</div>
        </div>

        {/* CONTINUE Button */}
        <button
          onClick={handleContinue}
          className="w-full h-[60px] bg-[#93D334] hover:bg-[#83BD2D] rounded-[24px] flex items-center justify-center transition-all cursor-pointer active:scale-90 shadow-md"
        >
          <span className="text-white text-[18px] font-black tracking-widest uppercase">Continue Next</span>
        </button>

      </div>
    </div>
  );
}

const ScorePage: NextPage = () => {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#141F23]" />}>
      <ScoreContent />
    </Suspense>
  );
};

export default ScorePage;
