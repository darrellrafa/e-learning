'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import type { NextPage } from 'next';
import { Suspense, useState, useEffect } from 'react';

function ScoreContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const score = searchParams.get('score') || '0';
  const total = searchParams.get('total') || '5';
  const time = searchParams.get('time') || '0';
  const expEarned = searchParams.get('exp') || Math.round((parseInt(score) / parseInt(total)) * 100).toString();
  const themeParam = searchParams.get('theme');
  const nodeId = searchParams.get('nodeId') || '1';

  const [aiFeedback, setAiFeedback] = useState<string>('');
  const [isAiLoading, setIsAiLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAiFeedback = async () => {
      try {
        const recentStr = localStorage.getItem('recent_wrong_answers');
        if (!recentStr || recentStr === '[]') {
          setAiFeedback("Wow, you answered everything correctly! Keep up the great work! 🌟");
          setIsAiLoading(false);
          return;
        }

        const recentWrong = JSON.parse(recentStr);
        let prompt = "";

        if (nodeId === '4' || nodeId === '8') {
          prompt = `The user just completed a review quiz of past materials. They struggled with the following questions:\n`;
          recentWrong.forEach((item: any, idx: number) => {
            prompt += `${idx+1}. Question: ${item.question.text}\nTheir answer: ${item.selected}\nCorrect answer: ${item.question.correct}\n\n`;
          });
          prompt += `Provide a brief summary of their weaknesses and give specific, motivating study recommendations to strengthen those areas. Keep it concise and use bullet points.`;
        } else {
          prompt = `The user just incorrectly answered the following questions in their quiz:\n`;
          recentWrong.forEach((item: any, idx: number) => {
            prompt += `${idx+1}. Question: ${item.question.text}\nTheir answer: ${item.selected}\nCorrect answer: ${item.question.correct}\n\n`;
          });
          prompt += `Explain briefly and simply why the correct answer is right, and tell them how to solve it. Speak like a friendly and motivating tutor.`;
        }

        const res = await fetch('/api/ai', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt })
        });
        
        const data = await res.json();
        if (data.text) {
          setAiFeedback(data.text);
        } else {
          setAiFeedback("An error occurred while loading the AI explanation.");
        }
      } catch (e) {
        setAiFeedback("Failed to load AI explanation.");
      } finally {
        setIsAiLoading(false);
      }
    };

    fetchAiFeedback();
  }, [nodeId]);

  const totalExp = `+${expEarned}`;

  const isPerfect = parseInt(score) === parseInt(total);
  const isPassed = parseInt(score) >= 3;

  const handleContinue = () => {
    const destination = themeParam === 'red' ? '/main/dashboard/red' : '/main/dashboard';
    router.push(destination);
  };

  return (
    <div className="min-h-screen bg-[#E2F4FA] flex flex-col items-center relative font-sans overflow-y-auto pt-20 pb-20 px-4">

      {/* Decorative floating bubbles */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-white/40 rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#FFCB05]/20 rounded-full animate-bounce" style={{ animationDuration: '4s' }} />
      <div className="absolute top-1/4 right-5 w-16 h-16 bg-[#93D334]/20 rounded-full animate-pulse" />

      {/* Score Modal Card */}
      <div className="w-[320px] bg-white rounded-[40px] relative z-10 flex flex-col items-center px-6 pt-12 pb-8 shadow-sm border border-gray-100">

        {/* Mascot / Trophy Icon */}
        <div className={`absolute -top-14 w-28 h-28 ${isPassed ? 'bg-[#FFCB05]' : 'bg-[#FF5252]'} rounded-full border-8 border-[#E2F4FA] flex items-center justify-center shadow-xl animate-bounce`} style={{ animationDuration: '2s' }}>
          <span className="text-5xl">{isPerfect ? '🌟' : isPassed ? '🎉' : '💔'}</span>
        </div>

        {/* Title */}
        <h2 className="text-[#382654] text-[26px] font-black text-center tracking-wide uppercase mt-4">
          {isPerfect ? 'Perfect!' : isPassed ? 'Great Job!' : 'Try Again!'}
        </h2>

        {/* Subtitle */}
        <p className="text-[#6D637A] text-[14px] font-bold text-center mt-2 mb-8 px-4">
          {isPerfect ? 'You got everything right!' : isPassed ? 'Keep learning every day!' : 'You need at least 3 correct answers to pass and unlock the next lesson.'}
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

      {/* AI Feedback Card */}
      <div className="w-[320px] bg-white rounded-[40px] relative z-10 flex flex-col px-6 pt-6 pb-8 shadow-sm border border-gray-100 mt-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-[#7E52B1] rounded-full flex justify-center items-center text-white text-xl">🤖</div>
          <h3 className="text-[#382654] font-black text-lg">AI Tutor</h3>
        </div>
        {isAiLoading ? (
          <div className="flex flex-col gap-2 animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
        ) : (
          <div className="text-[#6D637A] text-sm font-medium leading-relaxed whitespace-pre-wrap">
            {aiFeedback}
          </div>
        )}
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
