'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import type { NextPage } from 'next';
import { Suspense } from 'react';

interface Question {
  text: string;
  options: { label: string; value: number }[];
  correct: number;
}

const generateRandomQuestion = (): Question => {
  const num1 = Math.floor(Math.random() * 5) + 1; // max 5 for easier warm-up
  const num2 = Math.floor(Math.random() * 5) + 1;
  const answer = num1 + num2;
  
  const wrong1 = answer + Math.floor(Math.random() * 3) + 1;
  const wrong2 = Math.max(1, answer - Math.floor(Math.random() * 3) - 1);
  
  const options = [
    { label: 'A', value: answer },
    { label: 'B', value: wrong1 },
    { label: 'C', value: wrong2 },
  ].sort(() => Math.random() - 0.5);

  options.forEach((opt, index) => {
    opt.label = ['A', 'B', 'C'][index];
  });

  return {
    text: `${num1} + ${num2} = ...`,
    options,
    correct: answer,
  };
};

const OnboardingExamContent: React.FC = () => {
  const router = useRouter();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  
  // We use exactly 5 questions as per the user request.
  useEffect(() => {
    const generated = Array.from({ length: 5 }, generateRandomQuestion);
    setQuestions(generated);
  }, []);

  if (questions.length === 0) return (
    <div className="min-h-screen bg-[#F0F8FF] flex items-center justify-center font-bold text-[#87CEEB] tracking-widest">
      GETTING READY...
    </div>
  );

  const progressPercent = ((currentIndex + 1) / questions.length) * 100;
  const question = questions[currentIndex];

  // Soft, child-friendly color theme for onboarding
  const t = {
    bg: 'bg-[#F0F8FF]', // AliceBlue
    track: 'bg-[#D6EAF8]',
    accent: 'bg-[#48C9B0]', // Soft Teal
    accentHover: 'hover:bg-[#1ABC9C]',
    accentShadow: 'shadow-md',
    accentText: 'text-white',
    questionText: 'text-[#2C3E50]', 
    optionBg: 'bg-white',
    optionHover: 'hover:bg-[#E8F8F5]',
    optionText: 'text-[#34495E]'
  };

  const handleCheck = () => {
    if (selectedAnswer === null) return;

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      // Finished the 5 onboarding questions! Move to interests.
      router.push('/onboarding/interests');
    }
  };

  return (
    <div className={`min-h-screen ${t.bg} flex justify-center items-center relative font-sans overflow-hidden px-6 transition-colors duration-500`}>
      <div className="w-full sm:max-w-md flex flex-col min-h-[90vh] py-6 relative z-10">
        
        {/* Header Title with Colorful SVG Brain */}
        <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M9 4C7.5 4 6.2 5.2 6 6.7C4.3 7 3 8.6 3 10.5C3 12.3 4.1 13.8 5.6 14.3C5.2 15.1 5.3 16.2 6 17C7 18.2 8.5 18.2 9.5 17.5C10.5 18.5 12 18.5 13 17.5C14.5 18.3 16.5 18 17.5 16.5C18.5 16 19 14.8 18.8 13.8C20.1 13 21 11.5 21 9.8C21 7.6 19.3 5.8 17.2 5.5C16.8 4 15.3 3 13.8 3C12.5 3 11.3 3.8 10.8 5C10.3 4.4 9.7 4 9 4Z" fill="#FF8DA1"/>
                <path d="M9 4C7.5 4 6.2 5.2 6 6.7C4.3 7 3 8.6 3 10.5C3 12.3 4.1 13.8 5.6 14.3" stroke="#FF4D6D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 3.5V17" stroke="#FF4D6D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 10C8 10 9 8 9 6" stroke="#FF4D6D" strokeWidth="2" strokeLinecap="round"/>
                <path d="M18 9C16 9 15 7 15 5" stroke="#FF4D6D" strokeWidth="2" strokeLinecap="round"/>
                <path d="M6 14C8 14 9 12 9 10" stroke="#FF4D6D" strokeWidth="2" strokeLinecap="round"/>
                <path d="M18 13C16 13 15 11 15 9" stroke="#FF4D6D" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h1 className="text-[#48C9B0] font-black text-xl tracking-widest mt-1">BRAIN WARM-UP</h1>
        </div>

        {/* Progress Bar */}
        <div className={`w-full h-[8px] ${t.track} rounded-full mb-12 overflow-hidden`}>
          <div className={`h-full ${t.accent} rounded-full transition-all duration-1000`} style={{ width: `${progressPercent}%` }} />
        </div>

        <div className="flex items-center justify-center flex-grow mb-12">
          <div className="bg-white px-10 py-12 rounded-[40px] shadow-sm border-4 border-[#E8F8F5] text-center w-full">
            <h2 className={`text-[40px] font-black ${t.questionText} tracking-widest transition-colors duration-500`}>
                {question.text}
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-4 flex-grow justify-end pb-8">
          {question.options.map((opt) => (
            <button
              key={opt.label}
              onClick={() => setSelectedAnswer(opt.value)}
              className={`w-full py-5 px-8 rounded-[24px] flex items-center transition-all border-2 border-transparent ${
                selectedAnswer === opt.value
                  ? `${t.accent} ${t.accentText} font-extrabold ${t.accentShadow} scale-[1.02] border-[#1ABC9C]`
                  : `${t.optionBg} ${t.optionText} ${t.optionHover} font-bold shadow-sm`
              }`}
            >
              <span className="text-xl tracking-wider">
                {opt.label}. {opt.value}
              </span>
            </button>
          ))}
        </div>

        <div className="h-24 flex flex-col items-center justify-end">
          <button 
            className={`w-full ${t.accent} ${t.accentHover} ${t.accentText} font-black text-[17px] tracking-[0.2em] rounded-full py-5 transition-all shadow-[0_6px_0_#1ABC9C] active:translate-y-2 active:shadow-none disabled:opacity-40 disabled:active:translate-y-0 disabled:active:shadow-[0_6px_0_#1ABC9C]`}
            disabled={selectedAnswer === null}
            onClick={handleCheck}
          >
            {currentIndex === questions.length - 1 ? 'FINISH!' : 'NEXT'}
          </button>
        </div>
      </div>
    </div>
  );
};

const OnboardingExamPage: NextPage = () => {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F0F8FF]" />}>
      <OnboardingExamContent />
    </Suspense>
  );
};

export default OnboardingExamPage;
