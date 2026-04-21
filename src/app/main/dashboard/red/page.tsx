'use client';

import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import BottomNavigation from '../../../../components/BottomNavigation';
import ProfileHeader from '../../../../components/ProfileHeader';
import FloorRed from '../../../../components/floors/FloorRed';

const DashboardRed: NextPage = () => {
  const [completedNodes, setCompletedNodes] = useState<number[]>([]);
  const [isStudent1, setIsStudent1] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const completed: number[] = [];
      for (let i = 1; i <= 8; i++) {
        if (localStorage.getItem(`node_${i}_completed`) === 'true') {
          completed.push(i);
        }
      }
      setCompletedNodes(completed);

      const username = localStorage.getItem('dummy_username') || 'guest';
      if (username === 'Alex') {
        setIsStudent1(true);
      }
    }
  }, []);

  // Red theme for the special floor
  const theme = {
    bg: 'bg-[#FFEBEE]',
    cardBg: 'bg-[#FFCDD2]',
    text: 'text-[#C62828]',
    node: 'bg-[#E53935]',
    nodeHover: 'hover:bg-[#C62828]',
    currentNode: 'bg-[#FFEBEE]',
  };

  return (
    <div className={`min-h-screen ${theme.bg} font-sans pb-24 relative overflow-hidden flex flex-col items-center transition-colors duration-500`}>

      {/* Reusable Top Profile Section */}
      <ProfileHeader themeTextClass={theme.text} />

      {/* Main Path Container - Closer to Header */}
      <div className="w-full sm:max-w-md mx-auto flex flex-col relative flex-grow mt-10">

        {/* Floor Map Area - No Tabs because it's a special 1-floor dashboard */}
        <div className={`${theme.cardBg} w-full rounded-t-[3rem] p-8 min-h-[70vh] flex flex-col items-center relative z-0 transition-colors duration-500 overflow-hidden`}>

          {/* Atmospheric Floor Graphics for Red Volcano Theme */}
          <div className="absolute inset-0 pointer-events-none opacity-40 -z-10">
            <div className="absolute top-12 left-[-20px] w-28 h-28 rounded-full bg-[#EF9A9A] blur-md" />
            <div className="absolute top-[30%] right-[-30px] w-40 h-16 rounded-full bg-[#E57373] rotate-[-15deg] blur-sm" />
            <div className="absolute bottom-1/4 left-5 w-20 h-20 rounded-full bg-[#EF5350] blur-sm" />
            <div className="absolute bottom-10 right-10 text-6xl opacity-20 rotate-12">🔥</div>
          </div>

          <FloorRed completedNodes={completedNodes} theme={theme} isStudent1={isStudent1} />

        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default DashboardRed;
