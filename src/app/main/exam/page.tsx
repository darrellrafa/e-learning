'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import type { NextPage } from 'next';
import Link from 'next/link';

interface Question {
  text: string;
  options: { label: string; value: number }[];
  correct: number;
}

const generateRandomQuestion = (): Question => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const answer = num1 + num2;
  
  // Generate random wrong options
  const wrong1 = answer + Math.floor(Math.random() * 5) + 1;
  const wrong2 = Math.max(1, answer - Math.floor(Math.random() * 5) - 1);
  
  // Shuffle options
  const options = [
    { label: 'A', value: answer },
    { label: 'B', value: wrong1 },
    { label: 'C', value: wrong2 },
  ].sort(() => Math.random() - 0.5);

  // Re-label to A, B, C after shuffle
  options.forEach((opt, index) => {
    opt.label = ['A', 'B', 'C'][index];
  });

  return {
    text: `${num1} + ${num2} = ...`,
    options,
    correct: answer,
  };
};

const ExamPage: NextPage = () => {
  const router = useRouter();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  useEffect(() => {
    // Generate 5 random questions
    const generated = Array.from({ length: 5 }, generateRandomQuestion);
    setQuestions(generated);
  }, []);

  if (questions.length === 0) return null; // Prevent hydration mismatch

  const question = questions[currentIndex];
  // Calculate progress based on how many have been completed
  const progressPercent = (currentIndex / questions.length) * 100;

  return (
    <div className="min-h-screen bg-[#1A2024] flex justify-center items-center relative font-sans overflow-hidden px-6">
      
      {/* Main Content Wrapper */}
      <div className="w-full sm:max-w-md flex flex-col min-h-[90vh] py-6 relative">
        
        {/* Timer Bar */}
        <div className="w-full h-[6px] bg-[#3B413F] rounded-full mb-20 overflow-hidden">
          <div className="h-full bg-[#87BE32] rounded-full transition-all duration-1000" style={{ width: `${progressPercent}%` }} />
        </div>

        {/* Question Area */}
        <div className="flex items-center justify-center flex-grow mb-16">
          <h2 className="text-[28px] font-extrabold text-white tracking-widest">
            {question.text}
          </h2>
        </div>

        {/* Answer Options */}
        <div className="flex flex-col gap-4 flex-grow justify-end pb-8">
          {question.options.map((opt) => (
            <button
              key={opt.label}
              onClick={() => setSelectedAnswer(opt.value)}
              className={`w-full py-5 px-8 rounded-3xl flex items-center transition-all ${
                selectedAnswer === opt.value
                  ? 'bg-[#87BE32] text-[#162111] font-extrabold' // Active state (neon green)
                  : 'bg-[#505445] text-white hover:bg-[#5C6150] font-bold' // Default state (olive)
              }`}
            >
              <span className="text-xl tracking-wider">
                {opt.label}. {opt.value}
              </span>
            </button>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="h-32 flex flex-col items-center justify-end gap-5">
          <button 
            className="w-full bg-[#87BE32] hover:bg-[#97D23B] text-[#14260D] font-extrabold text-base tracking-[0.2em] rounded-3xl py-4 transition-colors shadow-sm"
            onClick={() => {
               if (selectedAnswer === question.correct) {
                 if (currentIndex < questions.length - 1) {
                   setCurrentIndex(prev => prev + 1);
                   setSelectedAnswer(null);
                 } else {
                   // Quiz finished!
                   localStorage.setItem('node_1_completed', 'true');
                   alert('Quiz completed! Great job!');
                   router.push('/main/dashboard');
                 }
               } else {
                 if (selectedAnswer !== null) alert('Oops, try again!');
               }
            }}
          >
            CHECK
          </button>
          
          <Link href="/main/dashboard" className="text-[#646A66] font-medium text-sm hover:text-[#A0A8A3] transition-colors pb-2">
            skip
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ExamPage;
