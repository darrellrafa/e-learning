'use client';

import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import BottomNavigation from '../../../../components/BottomNavigation';
import ProfileHeader from '../../../../components/ProfileHeader';
import FloorRed from '../../../../components/floors/FloorRed';
import { account } from '../../../../lib/appwrite';

const DashboardRed: NextPage = () => {
  const [completedNodes, setCompletedNodes] = useState<number[]>([]);
  const [isStudent1, setIsStudent1] = useState(false);
  const [interest, setInterest] = useState<string>('art');

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
        for (let i = 1; i <= 8; i++) {
          if (prefs[`node_${i}_completed`] === true || localStorage.getItem(`${username}_node_${i}_completed`) === 'true') {
            completed.push(i);
          }
        }
        setCompletedNodes(completed);
      } catch (err) {
        console.error("Failed to fetch Appwrite user/prefs", err);
      }
    };
    fetchUserData();
  }, []);

  const getTheme = (int: string) => {
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

  const theme = getTheme(interest);
  const emoji = interest === 'computer' ? '🤖' : interest === 'sport' ? '⚽' : '🎨';

  return (
    <div className={`min-h-screen ${theme.bg} font-sans pb-24 relative overflow-hidden flex flex-col items-center transition-colors duration-500`}>

      {/* Reusable Top Profile Section */}
      <ProfileHeader themeTextClass={theme.text} />

      {/* Main Path Container - Closer to Header */}
      <div className="w-full sm:max-w-md mx-auto flex flex-col relative flex-grow mt-10">

        {/* Floor Map Area - No Tabs because it's a special 1-floor dashboard */}
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

          <FloorRed completedNodes={completedNodes} theme={theme} isStudent1={isStudent1} interest={interest} />

        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default DashboardRed;
