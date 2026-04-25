'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import DynamicAvatar from './DynamicAvatar';
import { account } from '../lib/appwrite';

interface ProfileHeaderProps {
  themeTextClass: string;
}

export default function ProfileHeader({ themeTextClass }: ProfileHeaderProps) {
  const pathname = usePathname();
  const router = useRouter();

  const [username, setUsername] = useState<string>('Loading...');
  const [avatarColor, setAvatarColor] = useState<string>('#F2C296');
  const [avatarType, setAvatarType] = useState<string>('classic');
  const [interest, setInterest] = useState<string>('art');
  const [showPathModal, setShowPathModal] = useState(false);

  const isOnInterestPath = pathname?.includes('/dashboard/red');

  useEffect(() => {
    const fetchHeaderUser = async () => {
      try {
        const user = await account.get();
        setUsername(user.name || 'Student');

        // Avatars can still use localStorage temporarily for styling 
        setAvatarColor(localStorage.getItem('dummy_avatar_color') || '#F2C296');
        setAvatarType(localStorage.getItem('dummy_avatar_type') || 'classic');

        const prefs = await account.getPrefs();
        setInterest(prefs['interest'] || localStorage.getItem('dummy_interest') || 'art');
      } catch (err) {
        setUsername('Guest');
        setInterest(localStorage.getItem('dummy_interest') || 'art');
      }
    };
    fetchHeaderUser();
  }, []);

  const handleSelectPath = (path: 'math' | 'interest') => {
    setShowPathModal(false);
    if (path === 'math') {
      router.push('/main/dashboard');
    } else {
      router.push('/main/dashboard/red');
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

  const currentInterest = interestConfig[interest] || interestConfig.art;

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
            <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm max-w-fit">
              {/* Lightning Icon */}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#FFCB05">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              <span className="text-[#382654] font-bold text-[11px] sm:text-sm">0/12</span>
            </div>
          </div>
        </div>

        {/* Path Switcher Button (Right Side) */}
        <button
          onClick={() => setShowPathModal(true)}
          className="w-14 h-14 rounded-2xl bg-white/70 hover:bg-white shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center hover:scale-105 active:scale-95"
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

            <div className="flex flex-col gap-4">
              {/* Math Path Option */}
              <button
                onClick={() => handleSelectPath('math')}
                className={`w-full p-5 rounded-[24px] flex items-center gap-4 transition-all text-left ${!isOnInterestPath
                    ? 'bg-[#E5F7E7] ring-2 ring-[#329D66] scale-[1.02]'
                    : 'bg-gray-50 hover:bg-[#E5F7E7] hover:scale-[1.01]'
                  }`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm ${!isOnInterestPath ? 'bg-[#329D66]' : 'bg-[#E5F7E7]'}`}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill={!isOnInterestPath ? 'white' : '#329D66'}>
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[17px] font-black text-[#329D66] tracking-wide">MATH</h3>
                  <p className="text-[#868E96] font-bold text-[12px]">Numbers & Calculations</p>
                </div>
                {!isOnInterestPath && (
                  <span className="ml-auto text-[#329D66] font-black text-xs bg-[#329D66]/10 px-3 py-1 rounded-full">ACTIVE</span>
                )}
              </button>

              {/* Interest Path Option */}
              <button
                onClick={() => handleSelectPath('interest')}
                className={`w-full p-5 rounded-[24px] flex items-center gap-4 transition-all text-left ${isOnInterestPath
                    ? `ring-2 scale-[1.02]`
                    : 'bg-gray-50 hover:scale-[1.01]'
                  }`}
                style={{
                  backgroundColor: isOnInterestPath ? `${currentInterest.color}15` : undefined,
                  borderColor: isOnInterestPath ? currentInterest.color : undefined,
                  ringColor: isOnInterestPath ? currentInterest.color : undefined,
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm"
                  style={{ backgroundColor: isOnInterestPath ? currentInterest.color : `${currentInterest.color}20` }}
                >
                  {React.cloneElement(currentInterest.icon as React.ReactElement, {
                    fill: isOnInterestPath ? 'white' : currentInterest.color,
                  })}
                </div>
                <div>
                  <h3 className="text-[17px] font-black tracking-wide" style={{ color: currentInterest.color }}>
                    {currentInterest.label.toUpperCase()}
                  </h3>
                  <p className="text-[#868E96] font-bold text-[12px]">Your chosen interest</p>
                </div>
                {isOnInterestPath && (
                  <span className="ml-auto font-black text-xs px-3 py-1 rounded-full" style={{ color: currentInterest.color, backgroundColor: `${currentInterest.color}15` }}>
                    ACTIVE
                  </span>
                )}
              </button>
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
