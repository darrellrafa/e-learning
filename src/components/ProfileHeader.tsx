'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import DynamicAvatar from './DynamicAvatar';
import { account } from '../lib/appwrite';

interface ProfileHeaderProps {
  themeTextClass: string;
}

export default function ProfileHeader({ themeTextClass }: ProfileHeaderProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [username, setUsername] = useState<string>('Loading...');
  const [avatarColor, setAvatarColor] = useState<string>('#F2C296');
  const [avatarType, setAvatarType] = useState<string>('classic');
  const [primaryInterest, setPrimaryInterest] = useState<string>('art');
  const [activeInterest, setActiveInterest] = useState<string>('art');
  const [diamonds, setDiamonds] = useState<number>(0);
  const [showPathModal, setShowPathModal] = useState(false);
  const [isTopUpLoading, setIsTopUpLoading] = useState(false);

  const isOnInterestPath = pathname?.includes('/dashboard/red');
  const queryInterest = searchParams?.get('interest');

  useEffect(() => {
    const fetchHeaderUser = async () => {
      try {
        const user = await account.get();
        setUsername(user.name || 'Student');

        // Avatars can still use localStorage temporarily for styling 
        setAvatarColor(localStorage.getItem('dummy_avatar_color') || '#F2C296');
        setAvatarType(localStorage.getItem('dummy_avatar_type') || 'classic');

        const prefs = await account.getPrefs();
        const storedInterest = prefs['interest'] || localStorage.getItem('dummy_interest') || 'art';
        setPrimaryInterest(storedInterest);
        setDiamonds(prefs['diamonds'] || parseInt(localStorage.getItem('dummy_diamonds') || '0'));
        
        // Active interest depends on URL query, or falls back to primary
        setActiveInterest(queryInterest || storedInterest);
      } catch (err) {
        setUsername('Guest');
        const storedInterest = localStorage.getItem('dummy_interest') || 'art';
        setPrimaryInterest(storedInterest);
        setActiveInterest(queryInterest || storedInterest);
        setDiamonds(parseInt(localStorage.getItem('dummy_diamonds') || '0'));
      }
    };
    fetchHeaderUser();
  }, [queryInterest]);

  // Listen to local storage changes for diamonds (in case it gets updated in another component)
  useEffect(() => {
    const handleStorageChange = () => {
      const storedDiamonds = parseInt(localStorage.getItem('dummy_diamonds') || '0');
      if (storedDiamonds !== diamonds) {
        setDiamonds(storedDiamonds);
      }
    };
    window.addEventListener('storage', handleStorageChange);
    // Custom event for same-window updates
    window.addEventListener('diamonds_updated', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('diamonds_updated', handleStorageChange);
    };
  }, [diamonds]);

  const handleTopUpDiamonds = async () => {
    if (isTopUpLoading) return;
    setIsTopUpLoading(true);
    const newAmount = diamonds + 100;
    
    try {
      const prefs = await account.getPrefs();
      await account.updatePrefs({ ...prefs, diamonds: newAmount });
    } catch (err) {
      console.warn("Using local storage for diamonds");
    }
    
    localStorage.setItem('dummy_diamonds', newAmount.toString());
    setDiamonds(newAmount);
    window.dispatchEvent(new Event('diamonds_updated'));
    setIsTopUpLoading(false);
  };

  const handleSelectPath = (path: 'math' | 'computer' | 'sport' | 'art') => {
    setShowPathModal(false);
    if (path === 'math') {
      router.push('/main/dashboard');
    } else {
      router.push(`/main/dashboard/red?interest=${path}`);
    }
  };

  // Interest icon & label mapping
  const interestConfig: Record<string, { icon: React.ReactNode; label: string; color: string }> = {
    computer: {
      label: 'Computer',
      color: '#339AF0',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#339AF0">
          <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
        </svg>
      ),
    },
    sport: {
      label: 'Sport',
      color: '#FF922B',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#FF922B">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2L12 22M2 12L22 12M5.5 5.5L18.5 18.5M18.5 5.5L5.5 18.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    art: {
      label: 'Art',
      color: '#E53935',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#E53935">
          <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 9.95 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.17-.64-1.61-.4-.41-.65-.96-.65-1.57 0-1.21.99-2.2 2.2-2.2H19c2.76 0 5-2.24 5-5 0-4.42-5.37-8.12-12-8.12zM6.5 11.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3-4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3 4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
        </svg>
      ),
    },
  };

  const currentInterest = interestConfig[activeInterest] || interestConfig.art;

  return (
    <>
      <div className="w-full sm:max-w-md px-6 pt-12 pb-1 flex items-center justify-between">
        <div className="flex items-center gap-4">

          {/* Dynamic Character Avatar */}
          <DynamicAvatar
            type={avatarType}
            color={avatarColor}
            className="w-16 h-16 rounded-xl shadow-md border-2 border-white/20"
          />

          <div className="flex flex-col gap-1">
            <h1 className={`${themeTextClass} font-extrabold text-lg tracking-wide transition-all duration-500 flex items-center gap-2`}>
              Hi, {username}
            </h1>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm max-w-fit">
                {/* Lightning Icon */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#FFCB05">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                <span className="text-[#382654] font-bold text-[11px] sm:text-sm">0/12</span>
              </div>
              
              {/* Diamonds Balance & Top Up Dummy */}
              <button 
                onClick={handleTopUpDiamonds}
                disabled={isTopUpLoading}
                className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm max-w-fit hover:scale-105 hover:bg-[#F0FDF4] active:scale-95 transition-all"
                title="Click to get dummy Diamonds"
              >
                <span className="text-sm">💎</span>
                <span className="text-[#382654] font-bold text-[11px] sm:text-sm">{diamonds}</span>
                <span className="text-[#329D66] font-black text-[12px] ml-1">+</span>
              </button>
            </div>
          </div>
        </div>

        {/* Path Switcher Button (Right Side) */}
        <button
          onClick={() => setShowPathModal(true)}
          className="w-14 h-14 rounded-2xl bg-white/70 hover:bg-white shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center hover:scale-105 active:scale-95 shrink-0"
          title="Switch Learning Path"
        >
          {isOnInterestPath ? (
            // Show interest icon when on interest path
            currentInterest.icon
          ) : (
            // Show math icon when on math path
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#329D66">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
            </svg>
          )}
        </button>
      </div>

      {/* Path Switcher Modal */}
      {showPathModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center px-6" onClick={() => setShowPathModal(false)}>
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          {/* Modal Card */}
          <div
            className="relative bg-white rounded-[2rem] p-6 w-full max-w-sm shadow-2xl animate-[modalPop_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-center text-[20px] font-black text-[#382654] mb-1">Choose Your Path</h2>
            <p className="text-center text-[#868E96] font-bold text-[13px] mb-6">Pick a learning track to continue!</p>

            <div className="flex flex-col gap-4 max-h-[60vh] overflow-y-auto pb-2 pr-1">
              {/* Math Path Option */}
              <button
                onClick={() => handleSelectPath('math')}
                className={`w-full p-5 rounded-[24px] flex items-center gap-4 transition-all text-left ${!isOnInterestPath
                    ? 'bg-[#E5F7E7] ring-2 ring-[#329D66] scale-[1.02]'
                    : 'bg-gray-50 hover:bg-[#E5F7E7] hover:scale-[1.01]'
                  }`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm shrink-0 ${!isOnInterestPath ? 'bg-[#329D66]' : 'bg-[#E5F7E7]'}`}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill={!isOnInterestPath ? 'white' : '#329D66'}>
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[17px] font-black text-[#329D66] tracking-wide">GENERAL</h3>
                  <p className="text-[#868E96] font-bold text-[12px]">Math, English & Science</p>
                </div>
                {!isOnInterestPath && (
                  <span className="ml-auto text-[#329D66] font-black text-[10px] bg-[#329D66]/10 px-3 py-1 rounded-full">ACTIVE</span>
                )}
              </button>

              {/* Show all interests for everyone */}
              {Object.keys(interestConfig).map((intKey) => {
                const conf = interestConfig[intKey];
                const isActive = isOnInterestPath && activeInterest === intKey;
                const isPrimary = primaryInterest === intKey;
                
                return (
                  <button
                    key={intKey}
                    onClick={() => handleSelectPath(intKey as any)}
                    className={`w-full p-5 rounded-[24px] flex items-center gap-4 transition-all text-left ${isActive
                        ? 'scale-[1.02]'
                        : 'bg-gray-50 hover:scale-[1.01]'
                      }`}
                    style={{
                      backgroundColor: isActive ? `${conf.color}15` : undefined,
                      borderColor: isActive ? conf.color : undefined,
                      boxShadow: isActive ? `0 0 0 2px ${conf.color}` : undefined,
                    }}
                  >
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm shrink-0"
                      style={{ backgroundColor: isActive ? conf.color : `${conf.color}20` }}
                    >
                      {React.cloneElement(conf.icon as React.ReactElement<any>, {
                        fill: isActive ? 'white' : conf.color,
                      })}
                    </div>
                    <div>
                      <h3 className="text-[17px] font-black tracking-wide" style={{ color: conf.color }}>
                        {conf.label.toUpperCase()}
                      </h3>
                      <p className="text-[#868E96] font-bold text-[11px] leading-tight">
                        {isPrimary ? 'Your Primary Path' : 'Secondary Path (Trial)'}
                      </p>
                    </div>
                    {isActive && (
                      <span className="ml-auto font-black text-[10px] px-3 py-1 rounded-full shrink-0" style={{ color: conf.color, backgroundColor: `${conf.color}15` }}>
                        ACTIVE
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Close Button */}
            <button
              onClick={() => setShowPathModal(false)}
              className="w-full mt-5 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-[#868E96] font-bold text-sm transition-all active:scale-95"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Modal Animation Keyframes */}
      <style jsx global>{`
        @keyframes modalPop {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </>
  );
}

