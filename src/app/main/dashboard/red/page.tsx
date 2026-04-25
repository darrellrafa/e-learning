'use client';

import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import BottomNavigation from '../../../../components/BottomNavigation';
import ProfileHeader from '../../../../components/ProfileHeader';
import FloorRed from '../../../../components/floors/FloorRed';
import { account } from '../../../../lib/appwrite';

const DashboardRed: NextPage = () => {
  const [activeFloor, setActiveFloor] = useState<1 | 2 | 3>(1);
  const [completedNodes, setCompletedNodes] = useState<number[]>([]);
  const [isStudent1, setIsStudent1] = useState(false);
  const [interest, setInterest] = useState<string>('art');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = await account.get();
        const username = user.name || 'guest';
        if (username.toLowerCase() === 'admin' || username === 'Alex') {
          setIsStudent1(true);
        }

        const prefs = await account.getPrefs();
        setInterest(prefs['interest'] || localStorage.getItem('dummy_interest') || 'art');

        const completed: number[] = [];
        for (let i = 1; i <= 24; i++) {
          if (prefs[`node_${i}_completed`] === true || localStorage.getItem(`${username}_node_${i}_completed`) === 'true') {
            completed.push(i);
          }
        }
        setCompletedNodes(completed);
      } catch (err) {
        console.error("Failed to fetch Appwrite user/prefs", err);
        setInterest(localStorage.getItem('dummy_interest') || 'art');
      }
    };
    fetchUserData();
  }, []);

  const handleFloorChange = (targetFloor: 1 | 2 | 3) => {
    if (isStudent1) {
      setActiveFloor(targetFloor);
      return;
    }

    if (targetFloor === 2) {
      let allCleared = true;
      for (let i = 1; i <= 8; i++) {
        if (!completedNodes.includes(i)) allCleared = false;
      }
      if (!allCleared) {
        setErrorMessage("Complete all lessons in Floor 1 to unlock Floor 2!");
        setTimeout(() => setErrorMessage(null), 3000);
        return;
      }
    }

    if (targetFloor === 3) {
      let allCleared = true;
      for (let i = 9; i <= 16; i++) {
        if (!completedNodes.includes(i)) allCleared = false;
      }
      if (!allCleared) {
        setErrorMessage("Complete all lessons in Floor 2 to unlock Floor 3!");
        setTimeout(() => setErrorMessage(null), 3000);
        return;
      }
    }

    setActiveFloor(targetFloor);
  };

  const getTheme = (int: string, floor: 1 | 2 | 3) => {
    // Floor 2 & 3 have unique palettes regardless of interest
    if (floor === 2) {
      return {
        bg: 'bg-[#FFF0F5]',
        cardBg: 'bg-[#E29FBD]',
        text: 'text-[#9B2C5E]',
        node: 'bg-[#D4749A]',
        nodeHover: 'hover:bg-[#C05A82]',
        currentNode: 'bg-[#FFF0F5]',
      };
    }
    if (floor === 3) {
      return {
        bg: 'bg-[#F0EFFF]',
        cardBg: 'bg-[#A7A3DE]',
        text: 'text-[#4A3F8F]',
        node: 'bg-[#8B85C9]',
        nodeHover: 'hover:bg-[#6F67B5]',
        currentNode: 'bg-[#F0EFFF]',
      };
    }

    // Floor 1 uses interest-based colors
    switch (int) {
      case 'computer':
        return {
          bg: 'bg-[#E7F5FF]',
          cardBg: 'bg-[#C5E4FF]',
          text: 'text-[#005bb5]',
          node: 'bg-[#4DABF7]',
          nodeHover: 'hover:bg-[#228be6]',
          currentNode: 'bg-[#E7F5FF]',
        };
      case 'sport':
        return {
          bg: 'bg-[#FFF4E6]',
          cardBg: 'bg-[#FFE8CC]',
          text: 'text-[#D97706]',
          node: 'bg-[#FF922B]',
          nodeHover: 'hover:bg-[#F76707]',
          currentNode: 'bg-[#FFF4E6]',
        };
      case 'art':
      default:
        return {
          bg: 'bg-[#FFEBEE]',
          cardBg: 'bg-[#FFCDD2]',
          text: 'text-[#C62828]',
          node: 'bg-[#E53935]',
          nodeHover: 'hover:bg-[#C62828]',
          currentNode: 'bg-[#FFEBEE]',
        };
    }
  };

  const theme = getTheme(interest, activeFloor);
  const emoji = activeFloor === 2 ? '🌸' : activeFloor === 3 ? '🔮' : (interest === 'computer' ? '🤖' : interest === 'sport' ? '⚽' : '🎨');

  return (
    <div className={`min-h-screen ${theme.bg} font-sans pb-24 relative overflow-hidden flex flex-col items-center transition-colors duration-500`}>

      {/* Error Toast Message */}
      <div className={`fixed top-4 left-1/2 -translate-x-1/2 z-[200] transition-all duration-300 ${errorMessage ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
        <div className="bg-[#FF5252] text-white px-6 py-3 rounded-full font-bold shadow-xl flex items-center gap-3">
          <span>⚠️</span> {errorMessage}
        </div>
      </div>

      {/* Reusable Top Profile Section */}
      <ProfileHeader themeTextClass={theme.text} />

      {/* Main Path Container */}
      <div className="w-full sm:max-w-md mx-auto flex flex-col relative flex-grow">

        {/* Floor Tabs */}
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

          {/* Atmospheric Floor Graphics for Interest Theme */}
          <div className="absolute inset-0 pointer-events-none opacity-40 -z-10">
            {interest === 'computer' && (
              <>
                <div className="absolute top-12 left-[-20px] w-32 h-28 rounded-md bg-[#74C0FC] blur-md rotate-12" />
                <div className="absolute top-[40%] right-[-30px] w-40 h-20 rounded-md bg-[#339AF0] blur-sm -rotate-6" />
                <div className="absolute bottom-1/4 left-5 w-24 h-24 rounded-full bg-[#A5D8FF] blur-sm" />
              </>
            )}
            {interest === 'sport' && (
              <>
                <div className="absolute top-12 left-[-20px] w-28 h-28 rounded-full bg-[#FFD8A8] blur-md" />
                <div className="absolute top-[30%] right-[-10px] w-32 h-16 rounded-full bg-[#FFA94D] rotate-[-15deg] blur-sm" />
                <div className="absolute bottom-1/4 left-10 w-24 h-24 rounded-full bg-[#FFC078] blur-sm" />
              </>
            )}
            {(interest === 'art' || !['computer', 'sport'].includes(interest)) && (
              <>
                <div className="absolute top-12 left-[-20px] w-28 h-28 rounded-full bg-[#EF9A9A] blur-md" />
                <div className="absolute top-[30%] right-[-30px] w-40 h-16 rounded-full bg-[#E57373] rotate-[-15deg] blur-sm" />
                <div className="absolute bottom-1/4 left-5 w-20 h-20 rounded-full bg-[#EF5350] blur-sm" />
              </>
            )}
            <div className="absolute bottom-10 right-10 text-6xl opacity-20 rotate-12">{emoji}</div>
          </div>

          <FloorRed floor={activeFloor} completedNodes={completedNodes} theme={theme} isStudent1={isStudent1} interest={interest} />

        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default DashboardRed;
