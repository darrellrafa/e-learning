'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import type { NextPage } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import { account } from '../../../lib/appwrite';

interface Question {
  text: string;
  options: { label: string; value: number }[];
  correct: number;
}

const generateRandomQuestion = (nodeIdStr: string, isRedTheme: boolean, interest: string): Question => {
  const nodeId = parseInt(nodeIdStr) || 1;
  
  if (isRedTheme) {
    // Trivia Questions based on Interest
    let qBank: {text: string, options: string[], correct: number}[] = [];
    
    if (interest === 'computer') {
      qBank = [
        { text: 'Alat untuk mengetik di layar?', options: ['Keyboard', 'Mouse', 'Monitor'], correct: 0 },
        { text: 'Layar untuk melihat gambar?', options: ['Monitor', 'Keyboard', 'Speaker'], correct: 0 },
        { text: 'Otak dari komputer adalah?', options: ['CPU', 'Mouse', 'Kabel'], correct: 0 },
        { text: 'Alat yang digeser untuk klik?', options: ['Mouse', 'Printer', 'Kertas'], correct: 0 },
        { text: 'Jaringan yang menghubungkan dunia?', options: ['Internet', 'Warnet', 'Satelit'], correct: 0 },
        { text: 'Suara komputer keluar dari?', options: ['Speaker', 'Layar', 'Keyboard'], correct: 0 },
        { text: 'Game kotak-kotak yang seru?', options: ['Minecraft', 'Catur', 'Pingpong'], correct: 0 },
        { text: 'Robot bisa bergerak karena?', options: ['Mesin', 'Sihir', 'Angin'], correct: 0 },
        { text: 'Alat untuk mencetak kertas?', options: ['Printer', 'Mouse', 'Layar'], correct: 0 }
      ];
    } else if (interest === 'sport') {
      qBank = [
        { text: 'Bola basket dilempar pakai?', options: ['Tangan', 'Kaki', 'Kepala'], correct: 0 },
        { text: 'Orang yang meniup peluit?', options: ['Wasit', 'Pemain', 'Penonton'], correct: 0 },
        { text: 'Olahraga menendang bola?', options: ['Sepak Bola', 'Berenang', 'Senam'], correct: 0 },
        { text: 'Alat untuk memukul bola tenis?', options: ['Raket', 'Tongkat kasti', 'Tangan'], correct: 0 },
        { text: 'Pakaian khusus di air?', options: ['Baju Renang', 'Jaket', 'Jas'], correct: 0 },
        { text: 'Lari sangat cepat disebut?', options: ['Sprint', 'Lompat', 'Jalan santai'], correct: 0 },
        { text: 'Gol terjadi bila bola masuk?', options: ['Gawang', 'Ring basket', 'Ember'], correct: 0 },
        { text: 'Kartu tanda pelanggaran berat?', options: ['Kartu Merah', 'Kartu Putih', 'Kartu Hijau'], correct: 0 },
        { text: 'Tempat bertanding tinju?', options: ['Ring', 'Lapangan', 'Kolam'], correct: 0 }
      ];
    } else {
      // Default to ART
      qBank = [
         { text: 'Alat utama untuk menggambar?', options: ['Pensil', 'Sapu', 'Panci'], correct: 0 },
         { text: 'Warna campuran kuning & biru?', options: ['Hijau', 'Oranye', 'Ungu'], correct: 0 },
         { text: 'Tempat menaruh dan mencampur cat?', options: ['Palet', 'Piring makan', 'Gelas'], correct: 0 },
         { text: 'Kuas biasanya terbuat dari?', options: ['Bulu', 'Kertas', 'Batu'], correct: 0 },
         { text: 'Kertas tebal untuk melukis?', options: ['Kanvas', 'Buku tulis', 'Kardus'], correct: 0 },
         { text: 'Warna bendera Indonesia?', options: ['Merah Putih', 'Biru Putih', 'Hijau Putih'], correct: 0 },
         { text: 'Orang yang ahli melukis?', options: ['Pelukis', 'Penari', 'Penyanyi'], correct: 0 },
         { text: 'Campuran merah & putih jadi?', options: ['Merah Muda', 'Cokelat', 'Hitam'], correct: 0 },
         { text: 'Bentuk bulan purnama?', options: ['Bulat', 'Kotak', 'Segitiga'], correct: 0 }
      ];
    }

    // Pick a random question
    const q = qBank[Math.floor(Math.random() * qBank.length)];
    
    // Shuffle options while tracking correct answer
    const optionsWithStatus = q.options.map((opt, idx) => ({ label: opt, isCorrect: idx === q.correct }));
    optionsWithStatus.sort(() => Math.random() - 0.5);
    
    const correctVal = optionsWithStatus.findIndex(o => o.isCorrect);

    return {
      text: q.text,
      options: optionsWithStatus.map((o, index) => ({
        label: ['A', 'B', 'C'][index],
        value: o.label as any // We cheat here because value is normally number, we will just pass string
      })),
      correct: optionsWithStatus[correctVal].label as any
    };
  }

  // STANDARD EXAM MATH ENGINE (Floors 1-3)
  let num1 = 0;
  let num2 = 0;
  let answer = 0;
  let text = '';

  if (nodeId <= 8) {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    answer = num1 + num2;
    text = `${num1} + ${num2} = ...`;
  } else if (nodeId <= 16) {
    num1 = Math.floor(Math.random() * 15) + 5;
    num2 = Math.floor(Math.random() * 10) + 1;
    if (num1 < num2) {
       const temp = num1;
       num1 = num2;
       num2 = temp;
    }
    answer = num1 - num2;
    text = `${num1} - ${num2} = ...`;
  } else {
    num1 = Math.floor(Math.random() * 5) + 1;
    num2 = Math.floor(Math.random() * 5) + 1;
    answer = num1 * num2;
    text = `${num1} × ${num2} = ...`;
  }
  
  const wrong1 = answer + Math.floor(Math.random() * 5) + 1;
  const wrong2 = Math.max(0, answer - Math.floor(Math.random() * 4) - 1);
  
  const options = [
    { label: 'A', value: answer },
    { label: 'B', value: wrong1 },
    { label: 'C', value: wrong2 },
  ].sort(() => Math.random() - 0.5);

  options.forEach((opt, index) => {
    opt.label = ['A', 'B', 'C'][index];
  });

  return {
    text,
    options,
    correct: answer,
  };
};

const ExamContent: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nodeId = searchParams.get('id') || '1';
  const themeParam = searchParams.get('theme');

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | string | null>(null);
  const [score, setScore] = useState(0);
  const [startTime] = useState<number>(Date.now());
  const [interest, setInterest] = useState<string>('art');

  const isRedTheme = themeParam === 'red';

  useEffect(() => {
    const currentInterest = localStorage.getItem('dummy_interest') || 'art';
    setInterest(currentInterest);
    const generated = Array.from({ length: 5 }, () => generateRandomQuestion(nodeId, isRedTheme, currentInterest));
    setQuestions(generated);
  }, [nodeId, isRedTheme]);

  if (questions.length === 0) return (
    <div className="min-h-screen bg-[#1A2024] flex items-center justify-center text-white font-bold opacity-50 tracking-widest">
      PREPARING QUIZ...
    </div>
  );

  const progressPercent = ((currentIndex + 1) / questions.length) * 100;
  const question = questions[currentIndex];

  // Apply a dynamic Boss Theme if this is a Milestone Node (node 4, 8, etc.)
  const isMilestone = parseInt(nodeId) % 4 === 0;

  const t = (() => {
    if (isRedTheme) {
      if (interest === 'computer') {
        return isMilestone ? {
          bg: 'bg-[#1864AB]', track: 'bg-[#0B3156]', accent: 'bg-[#FFC107]',
          accentHover: 'hover:bg-[#FFB300]', accentShadow: 'shadow-md', accentText: 'text-[#0B3156]',
          questionText: 'text-white', optionBg: 'bg-[#339AF0]', optionHover: 'hover:bg-[#4DABF7]', optionText: 'text-white'
        } : {
          bg: 'bg-[#E7F5FF]', track: 'bg-[#C5E4FF]', accent: 'bg-[#339AF0]',
          accentHover: 'hover:bg-[#228be6]', accentShadow: 'shadow-sm', accentText: 'text-white',
          questionText: 'text-[#005bb5]', optionBg: 'bg-white', optionHover: 'hover:bg-[#D0EBFF]', optionText: 'text-[#005bb5]'
        };
      } else if (interest === 'sport') {
        return isMilestone ? {
          bg: 'bg-[#D9480F]', track: 'bg-[#822100]', accent: 'bg-[#FFC107]',
          accentHover: 'hover:bg-[#FFB300]', accentShadow: 'shadow-md', accentText: 'text-[#822100]',
          questionText: 'text-white', optionBg: 'bg-[#FF922B]', optionHover: 'hover:bg-[#FFA94D]', optionText: 'text-white'
        } : {
          bg: 'bg-[#FFF4E6]', track: 'bg-[#FFE8CC]', accent: 'bg-[#FF922B]',
          accentHover: 'hover:bg-[#F76707]', accentShadow: 'shadow-sm', accentText: 'text-white',
          questionText: 'text-[#D97706]', optionBg: 'bg-white', optionHover: 'hover:bg-[#FFE8CC]', optionText: 'text-[#D97706]'
        };
      }
      
      // Default to Art (Red)
      return isMilestone ? {
        bg: 'bg-[#B71C1C]', track: 'bg-[#981414]', accent: 'bg-[#FFC107]',
        accentHover: 'hover:bg-[#FFB300]', accentShadow: 'shadow-md', accentText: 'text-[#3E2723]',
        questionText: 'text-white', optionBg: 'bg-[#E53935]', optionHover: 'hover:bg-[#EF5350]', optionText: 'text-white'
      } : {
        bg: 'bg-[#FFEbee]', track: 'bg-[#FFCDD2]', accent: 'bg-[#E53935]',
        accentHover: 'hover:bg-[#D32F2F]', accentShadow: 'shadow-sm', accentText: 'text-white',
        questionText: 'text-[#C62828]', optionBg: 'bg-white', optionHover: 'hover:bg-[#FFCDD2]', optionText: 'text-[#C62828]'
      };
    }
    // Standard Green/Yellow Theme
    return {
      bg: isMilestone ? 'bg-[#FFF3C7]' : 'bg-[#1A2024]',
      track: isMilestone ? 'bg-[#EAD689]' : 'bg-[#3B413F]',
      accent: isMilestone ? 'bg-[#FF9500]' : 'bg-[#87BE32]',
      accentHover: isMilestone ? 'hover:bg-[#FFAD33]' : 'hover:bg-[#97D23B]',
      accentShadow: 'shadow-md',
      accentText: isMilestone ? 'text-white' : 'text-[#162111]',
      questionText: isMilestone ? 'text-[#D17600]' : 'text-white',
      optionBg: isMilestone ? 'bg-white' : 'bg-[#505445]',
      optionHover: isMilestone ? 'hover:bg-[#FFFBF0]' : 'hover:bg-[#5C6150]',
      optionText: isMilestone ? 'text-[#D17600]' : 'text-white'
    };
  })();

  const handleCheck = async () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === question.correct;
    const newScore = score + (isCorrect ? 1 : 0);
    
    if (currentIndex < questions.length - 1) {
      setScore(newScore);
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      const timeElapsed = Math.floor((Date.now() - startTime) / 1000);
      const username = localStorage.getItem('dummy_username') || 'guest';
      
      const maxExp = 100;
      const expEarned = Math.round((newScore / questions.length) * maxExp);
      
      localStorage.setItem(`${username}_node_${nodeId}_completed`, 'true');
      const previousExp = parseInt(localStorage.getItem(`${username}_node_${nodeId}_exp`) || '0');
      const finalExp = Math.max(expEarned, previousExp);
      localStorage.setItem(`${username}_node_${nodeId}_exp`, finalExp.toString());

      // Sync to Appwrite Cloud
      try {
        const prefs = await account.getPrefs();
        const previousExpCloud = typeof prefs[`node_${nodeId}_exp`] === 'number' ? prefs[`node_${nodeId}_exp`] : parseInt(prefs[`node_${nodeId}_exp`] || '0');
        const finalExpCloud = Math.max(expEarned, previousExpCloud);
        
        await account.updatePrefs({
          ...prefs,
          [`node_${nodeId}_completed`]: true,
          [`node_${nodeId}_exp`]: finalExpCloud
        });
      } catch (err) {
        console.error("Failed to sync progress to Appwrite", err);
      }

      router.push(`/main/exam/score?score=${newScore}&total=${questions.length}&time=${timeElapsed}&exp=${expEarned}&theme=${themeParam || ''}`);
    }
  };

  return (
    <div className={`min-h-screen ${t.bg} flex justify-center items-center relative font-sans overflow-hidden px-6 transition-colors duration-500`}>
      <div className="w-full sm:max-w-md flex flex-col min-h-[90vh] py-6 relative">
        
        {/* Progress Bar */}
        <div className={`w-full h-[6px] ${t.track} rounded-full mb-20 overflow-hidden`}>
          <div className={`h-full ${t.accent} rounded-full transition-all duration-1000`} style={{ width: `${progressPercent}%` }} />
        </div>

        <div className="flex items-center justify-center flex-grow mb-16">
          <h2 className={`text-[28px] font-extrabold ${t.questionText} tracking-widest text-center transition-colors duration-500`}>
            {question.text}
          </h2>
        </div>

        <div className="flex flex-col gap-4 flex-grow justify-end pb-8">
          {question.options.map((opt) => (
            <button
              key={opt.label}
              onClick={() => setSelectedAnswer(opt.value)}
              className={`w-full py-5 px-8 rounded-[24px] flex items-center transition-all ${
                selectedAnswer === opt.value
                  ? `${t.accent} ${t.accentText} font-extrabold ${t.accentShadow} scale-[1.02]`
                  : `${t.optionBg} ${t.optionText} ${t.optionHover} font-bold shadow-sm`
              }`}
            >
              <span className="text-xl tracking-wider">
                {opt.label}. {opt.value}
              </span>
            </button>
          ))}
        </div>

        <div className="h-32 flex flex-col items-center justify-end gap-5">
          <button 
            className={`w-full ${t.accent} ${t.accentHover} ${t.accentText} font-extrabold text-base tracking-[0.2em] rounded-[24px] py-4 transition-all shadow-md disabled:opacity-40 active:scale-95 uppercase`}
            disabled={selectedAnswer === null}
            onClick={handleCheck}
          >
            CHECK
          </button>
          <Link href={isRedTheme ? "/main/dashboard/red" : "/main/dashboard"} className={`font-medium text-sm transition-colors pb-2 ${t.questionText} opacity-40 hover:opacity-70`}>
            skip
          </Link>
        </div>
      </div>
    </div>
  );
};

const ExamPage: NextPage = () => {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#1A2024]" />}>
      <ExamContent />
    </Suspense>
  );
};

export default ExamPage;
