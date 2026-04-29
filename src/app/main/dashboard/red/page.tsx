'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import type { NextPage } from 'next';
import BottomNavigation from '../../../../components/BottomNavigation';
import ProfileHeader from '../../../../components/ProfileHeader';
import FloorRed from '../../../../components/floors/FloorRed';
import { account } from '../../../../lib/appwrite';

const DashboardRedContent = () => {
  const searchParams = useSearchParams();
  const queryInterest = searchParams?.get('interest');

  const [activeFloor, setActiveFloor] = useState<1 | 2 | 3>(1);
  const [completedNodes, setCompletedNodes] = useState<number[]>([]);
  const [isStudent1, setIsStudent1] = useState(false);
  const [primaryInterest, setPrimaryInterest] = useState<string>('art');
  const [activeInterest, setActiveInterest] = useState<string>('art');
  const [unlockedPaths, setUnlockedPaths] = useState<string[]>([]);
  const [diamonds, setDiamonds] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [showUnlockModal, setShowUnlockModal] = useState(false);
  const [isUnlocking, setIsUnlocking] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = await account.get();
        const username = user.name || 'guest';
        if (username.toLowerCase() === 'admin' || username === 'Alex') {
          setIsStudent1(true);
        }

        const prefs = await account.getPrefs();
        const storedPrimary = prefs['interest'] || localStorage.getItem('dummy_interest') || 'art';
        setPrimaryInterest(storedPrimary);
        
        // Use query interest if provided, else primary
        const currentActive = queryInterest || storedPrimary;
        setActiveInterest(currentActive);

        const paths = prefs['unlocked_paths'] || [];
        setUnlockedPaths(paths);
        
        setDiamonds(prefs['diamonds'] || parseInt(localStorage.getItem('dummy_diamonds') || '0'));

        const completed: number[] = [];
        for (let i = 1; i <= 24; i++) {
          if (prefs[`node_${i}_completed`] === true || localStorage.getItem(`${username}_node_${i}_completed`) === 'true') {
            completed.push(i);
          }
        }
        setCompletedNodes(completed);
      } catch (err) {
        console.error("Failed to fetch Appwrite user/prefs", err);
        const storedPrimary = localStorage.getItem('dummy_interest') || 'art';
        setPrimaryInterest(storedPrimary);
        setActiveInterest(queryInterest || storedPrimary);
        setDiamonds(parseInt(localStorage.getItem('dummy_diamonds') || '0'));
      }
    };
    fetchUserData();
  }, [queryInterest]);

  // Sync diamond changes from other tabs/components
  useEffect(() => {
    const handleStorageChange = () => {
      const storedDiamonds = parseInt(localStorage.getItem('dummy_diamonds') || '0');
      if (storedDiamonds !== diamonds) {
        setDiamonds(storedDiamonds);
      }
    };
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('diamonds_updated', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('diamonds_updated', handleStorageChange);
    };
  }, [diamonds]);

  const isTrialPath = activeInterest !== primaryInterest && !unlockedPaths.includes(activeInterest);

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

  const handleUnlockRequest = () => {
    setShowUnlockModal(true);
  };

  const handleUnlockConfirm = async () => {
    if (isUnlocking) return;
    
    if (diamonds < 50) {
      setErrorMessage("Not enough diamonds! Tip: Click the Diamond icon at the top to get free dummy diamonds.");
      setTimeout(() => setErrorMessage(null), 4000);
      setShowUnlockModal(false);
      return;
    }

    setIsUnlocking(true);
    const newDiamonds = diamonds - 50;
    const newUnlockedPaths = [...unlockedPaths, activeInterest];

    try {
      const prefs = await account.getPrefs();
      await account.updatePrefs({ 
        ...prefs, 
        diamonds: newDiamonds,
        unlocked_paths: newUnlockedPaths
      });
      
      setDiamonds(newDiamonds);
      setUnlockedPaths(newUnlockedPaths);
      localStorage.setItem('dummy_diamonds', newDiamonds.toString());
      window.dispatchEvent(new Event('diamonds_updated'));
      setShowUnlockModal(false);
    } catch (err) {
      console.error("Failed to unlock path", err);
      setErrorMessage("Network error, couldn't unlock path.");
      setTimeout(() => setErrorMessage(null), 3000);
    }
    setIsUnlocking(false);
  };

  const getTheme = (int: string, floor: 1 | 2 | 3) => {
    if (floor === 2) {
      return {
        bg: 'bg-[#FFF0F5]', cardBg: 'bg-[#E29FBD]', text: 'text-[#9B2C5E]',
        node: 'bg-[#D4749A]', nodeHover: 'hover:bg-[#C05A82]', currentNode: 'bg-[#FFF0F5]',
      };
    }
    if (floor === 3) {
      return {
        bg: 'bg-[#F0EFFF]', cardBg: 'bg-[#A7A3DE]', text: 'text-[#4A3F8F]',
        node: 'bg-[#8B85C9]', nodeHover: 'hover:bg-[#6F67B5]', currentNode: 'bg-[#F0EFFF]',
      };
    }

    switch (int) {
      case 'computer':
        return {
          bg: 'bg-[#E7F5FF]', cardBg: 'bg-[#C5E4FF]', text: 'text-[#005bb5]',
          node: 'bg-[#4DABF7]', nodeHover: 'hover:bg-[#228be6]', currentNode: 'bg-[#E7F5FF]',
        };
      case 'sport':
        return {
          bg: 'bg-[#FFF4E6]', cardBg: 'bg-[#FFE8CC]', text: 'text-[#D97706]',
          node: 'bg-[#FF922B]', nodeHover: 'hover:bg-[#F76707]', currentNode: 'bg-[#FFF4E6]',
        };
      case 'art':
      default:
        return {
          bg: 'bg-[#FFEBEE]', cardBg: 'bg-[#FFCDD2]', text: 'text-[#C62828]',
          node: 'bg-[#E53935]', nodeHover: 'hover:bg-[#C62828]', currentNode: 'bg-[#FFEBEE]',
        };
    }
  };

  const theme = getTheme(activeInterest, activeFloor);
  const emoji = activeFloor === 2 ? '🌸' : activeFloor === 3 ? '🔮' : (activeInterest === 'computer' ? '🤖' : activeInterest === 'sport' ? '⚽' : '🎨');

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
            {activeInterest === 'computer' && (
              <>
                <div className="absolute top-12 left-[-20px] w-32 h-28 rounded-md bg-[#74C0FC] blur-md rotate-12" />
                <div className="absolute top-[40%] right-[-30px] w-40 h-20 rounded-md bg-[#339AF0] blur-sm -rotate-6" />
                <div className="absolute bottom-1/4 left-5 w-24 h-24 rounded-full bg-[#A5D8FF] blur-sm" />
              </>
            )}
            {activeInterest === 'sport' && (
              <>
                <div className="absolute top-12 left-[-20px] w-28 h-28 rounded-full bg-[#FFD8A8] blur-md" />
                <div className="absolute top-[30%] right-[-10px] w-32 h-16 rounded-full bg-[#FFA94D] rotate-[-15deg] blur-sm" />
                <div className="absolute bottom-1/4 left-10 w-24 h-24 rounded-full bg-[#FFC078] blur-sm" />
              </>
            )}
            {(activeInterest === 'art' || !['computer', 'sport'].includes(activeInterest)) && (
              <>
                <div className="absolute top-12 left-[-20px] w-28 h-28 rounded-full bg-[#EF9A9A] blur-md" />
                <div className="absolute top-[30%] right-[-30px] w-40 h-16 rounded-full bg-[#E57373] rotate-[-15deg] blur-sm" />
                <div className="absolute bottom-1/4 left-5 w-20 h-20 rounded-full bg-[#EF5350] blur-sm" />
              </>
            )}
            <div className="absolute bottom-10 right-10 text-6xl opacity-20 rotate-12">{emoji}</div>
          </div>

          <FloorRed 
            floor={activeFloor} 
            completedNodes={completedNodes} 
            theme={theme} 
            isStudent1={isStudent1} 
            interest={activeInterest}
            isTrialPath={isTrialPath}
            onUnlockRequest={handleUnlockRequest}
          />

        </div>
      </div>

      <BottomNavigation />

      {/* Unlock Path Modal */}
      {showUnlockModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center px-6" onClick={() => setShowUnlockModal(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div 
            className="relative bg-white rounded-[2rem] p-8 w-full max-w-sm shadow-2xl flex flex-col items-center animate-[modalPop_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-20 h-20 bg-[#FFF4E6] rounded-full flex items-center justify-center text-4xl mb-4 shadow-inner">
              💎
            </div>
            <h2 className="text-center text-[22px] font-black text-[#382654] mb-2">Unlock Path</h2>
            <p className="text-center text-[#868E96] font-bold text-[14px] mb-6 px-4 leading-relaxed">
              You are on a trial for the <span className="text-[#FF922B]">{activeInterest.toUpperCase()}</span> path. Unlock the rest of this path to continue your journey!
            </p>
            
            <div className="w-full bg-gray-50 rounded-2xl p-4 flex items-center justify-between mb-8">
              <span className="font-bold text-[#382654]">Cost</span>
              <div className="flex items-center gap-1">
                <span className="text-lg">💎</span>
                <span className="font-black text-[18px] text-[#FF922B]">50</span>
              </div>
            </div>

            <button
              onClick={handleUnlockConfirm}
              disabled={isUnlocking}
              className="w-full py-4 rounded-full bg-[#FFCC00] hover:bg-[#F2C003] text-white font-black text-[16px] tracking-wide shadow-[0_4px_0_#D9A000] active:translate-y-1 active:shadow-none transition-all disabled:opacity-50"
            >
              {isUnlocking ? 'UNLOCKING...' : 'UNLOCK NOW'}
            </button>
            <button
              onClick={() => setShowUnlockModal(false)}
              className="mt-4 text-[#868E96] font-bold text-sm hover:text-[#382654] transition-colors"
            >
              Maybe Later
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const DashboardRed: NextPage = () => {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F0EFFF]" />}>
      <DashboardRedContent />
    </Suspense>
  );
};

export default DashboardRed;
