'use client';

import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import BottomNavigation from '../../../components/BottomNavigation';
import ProfileHeader from '../../../components/ProfileHeader';
import Floor1 from '../../../components/floors/Floor1';
import Floor2 from '../../../components/floors/Floor2';
import Floor3 from '../../../components/floors/Floor3';
import DashboardTutorial from '../../../components/DashboardTutorial';

const Dashboard: NextPage = () => {
  const [activeFloor, setActiveFloor] = useState<1 | 2 | 3>(1);
  const [completedNodes, setCompletedNodes] = useState<number[]>([]);
  const [showTutorial, setShowTutorial] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isStudent1, setIsStudent1] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const username = localStorage.getItem('dummy_username') || 'guest';
      const completed: number[] = [];
      for (let i = 1; i <= 24; i++) {
        if (localStorage.getItem(`${username}_node_${i}_completed`) === 'true') {
          completed.push(i);
        }
      }
      setCompletedNodes(completed);

      // Check if user needs the tutorial
      if (localStorage.getItem('dummy_needs_tutorial') === 'true') {
        setShowTutorial(true);
      }

      // Check if testing account
      if (username.toLowerCase() === 'admin' || username === 'Alex') {
        setIsStudent1(true);
      }
    }
  }, []);

  const handleFinishTutorial = () => {
    setShowTutorial(false);
    localStorage.removeItem('dummy_needs_tutorial'); // Don't show again
  };

  const handleFloorChange = (targetFloor: 1 | 2 | 3) => {
    if (typeof window === 'undefined') return;
    
    const username = localStorage.getItem('dummy_username') || 'guest';

    // Bypass for student1 (dummy_username is admin or Alex)
    const isStudent1 = username.toLowerCase() === 'admin' || username === 'Alex';
    if (isStudent1) {
      setActiveFloor(targetFloor);
      return;
    }

    if (targetFloor === 2) {
      // Must complete 1 to 8
      let allCleared = true;
      for (let i = 1; i <= 8; i++) {
        if (localStorage.getItem(`${username}_node_${i}_completed`) !== 'true') allCleared = false;
      }
      if (!allCleared) {
        setErrorMessage("Please complete all lessons in Floor 1 to unlock Floor 2!");
        setTimeout(() => setErrorMessage(null), 3000);
        return;
      }
    }

    if (targetFloor === 3) {
      // Must complete 9 to 16
      let allCleared = true;
      for (let i = 9; i <= 16; i++) {
        if (localStorage.getItem(`${username}_node_${i}_completed`) !== 'true') allCleared = false;
      }
      if (!allCleared) {
        setErrorMessage("Please complete all lessons in Floor 2 to unlock Floor 3!");
        setTimeout(() => setErrorMessage(null), 3000);
        return;
      }
    }

    setActiveFloor(targetFloor);
  };

  // Configuration for Floor themes
  const floorConfig = {
    1: {
      bg: 'bg-[#E5F7E7]',
      cardBg: 'bg-[#C5EAC9]',
      text: 'text-[#329D66]',
      node: 'bg-[#64A37A]',
      nodeHover: 'hover:bg-[#528C67]',
      currentNode: 'bg-[#E5F8E9]',
    },
    2: {
      bg: 'bg-[#FFF8E7]',
      cardBg: 'bg-[#F8E79A]',
      text: 'text-[#D39F49]',
      node: 'bg-[#D39F49]',
      nodeHover: 'hover:bg-[#B8893D]',
      currentNode: 'bg-[#FDF8E4]',
    },
    3: {
      bg: 'bg-[#E4F9FF]',
      cardBg: 'bg-[#BCEFFF]',
      text: 'text-[#27315F]',
      node: 'bg-[#575B7C]',
      nodeHover: 'hover:bg-[#434763]',
      currentNode: 'bg-[#E1FAFF]',
    }
  };

  const theme = floorConfig[activeFloor];

  return (
    <div className={`min-h-screen ${theme.bg} font-sans pb-24 relative overflow-hidden flex flex-col items-center transition-colors duration-500`}>

      {/* Tutorial Overlay */}
      {showTutorial && <DashboardTutorial onFinish={handleFinishTutorial} />}

      {/* Error Toast Message */}
      <div className={`fixed top-4 left-1/2 -translate-x-1/2 z-[200] transition-all duration-300 ${errorMessage ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
        <div className="bg-[#FF5252] text-white px-6 py-3 rounded-full font-bold shadow-xl flex items-center gap-3">
          <span>⚠️</span> {errorMessage}
        </div>
      </div>

      {/* Reusable Top Profile Section */}
      <ProfileHeader themeTextClass={theme.text} />

      {/* Main Path Container - Closer to Header */}
      <div className="w-full sm:max-w-md mx-auto flex flex-col relative flex-grow">

        {/* Tabs - Elongated vertically and Proportionate */}
        <div className="flex justify-center gap-2 relative z-10 translate-y-[1px] items-end">
          <button
            onClick={() => handleFloorChange(1)}
            className={`${activeFloor === 1
              ? `${theme.cardBg} ${theme.text} pt-6 pb-2.5`
              : 'bg-white text-[#C3CBC6] py-2 opacity-80'} px-5 rounded-t-[1.3rem] rounded-b-none font-extrabold text-[10px] tracking-widest transition-all duration-300 grow-0 min-w-[85px] flex justify-center items-center gap-1`}
          >
            FLOOR 1
          </button>
          <button
            onClick={() => handleFloorChange(2)}
            className={`${activeFloor === 2
              ? `${theme.cardBg} ${theme.text} pt-6 pb-2.5`
              : 'bg-white text-[#C3CBC6] py-2 opacity-80'} px-5 rounded-t-[1.3rem] rounded-b-none font-extrabold text-[10px] tracking-widest transition-all duration-300 grow-0 min-w-[85px] flex justify-center items-center gap-1`}
          >
            FLOOR 2 {!isStudent1 && ![1, 2, 3, 4, 5, 6, 7, 8].every(n => completedNodes.includes(n)) ? '🔒' : ''}
          </button>
          <button
            onClick={() => handleFloorChange(3)}
            className={`${activeFloor === 3
              ? `${theme.cardBg} ${theme.text} pt-6 pb-2.5`
              : 'bg-white text-[#C3CBC6] py-2 opacity-80'} px-5 rounded-t-[1.3rem] rounded-b-none font-extrabold text-[10px] tracking-widest transition-all duration-300 grow-0 min-w-[85px] flex justify-center items-center gap-1`}
          >
            FLOOR 3 {!isStudent1 && ![1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].every(n => completedNodes.includes(n)) ? '🔒' : ''}
          </button>
        </div>

        {/* Floor Map Area */}
        <div className={`${theme.cardBg} w-full rounded-t-[3rem] p-8 min-h-[70vh] flex flex-col items-center relative z-0 transition-colors duration-500 overflow-hidden`}>

          {/* Atmospheric Floor Graphics */}
          <div className="absolute inset-0 pointer-events-none opacity-40 -z-10">
            {activeFloor === 1 && (
              <>
                {/* Swamp Graphics: Lilypads, Vines, and soft green blobs */}
                <div className="absolute top-12 left-[-20px] w-28 h-28 rounded-full bg-[#A5D6A7] blur-md" />
                <div className="absolute top-[30%] right-[-30px] w-40 h-16 rounded-full bg-[#81C784] rotate-[-15deg] blur-sm" />
                <div className="absolute bottom-1/4 left-5 w-20 h-20 rounded-full bg-[#C8E6C9] blur-sm" />
                <div className="absolute bottom-10 right-10 text-6xl opacity-20 rotate-12">🌿</div>
              </>
            )}
            {activeFloor === 2 && (
              <>
                {/* Farmer Graphics: Sun, Hay bales, warm blobs */}
                <div className="absolute top-8 right-[-10px] w-32 h-32 rounded-full bg-[#FFD54F] blur-lg" />
                <div className="absolute top-[40%] left-[-15px] w-24 h-24 rounded-lg rotate-12 bg-[#FFCA28] blur-sm" />
                <div className="absolute bottom-32 right-12 w-28 h-28 rounded-full bg-[#FFE082] blur-md" />
                <div className="absolute bottom-5 left-5 text-6xl opacity-20 rotate-[-12deg]">🌾</div>
              </>
            )}
            {activeFloor === 3 && (
              <>
                {/* Polar Graphics: Snow mounds, Ice blocks */}
                <div className="absolute top-10 left-[-10px] w-40 h-16 rounded-full bg-white blur-sm" />
                <div className="absolute top-1/2 right-[-20px] w-32 h-32 rounded-full bg-[#B2EBF2] blur-md" />
                <div className="absolute bottom-16 left-[-30px] w-48 h-24 rounded-t-full bg-white blur-sm" />
                <div className="absolute bottom-12 right-16 text-5xl opacity-20 rotate-12">❄️</div>
              </>
            )}
          </div>

          {/* Separated Level Map Pages with distinct Milestone Graphics */}
          {activeFloor === 1 && <Floor1 completedNodes={completedNodes} theme={theme} isStudent1={isStudent1} />}
          {activeFloor === 2 && <Floor2 completedNodes={completedNodes} theme={theme} isStudent1={isStudent1} />}
          {activeFloor === 3 && <Floor3 completedNodes={completedNodes} theme={theme} isStudent1={isStudent1} />}

        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Dashboard;
