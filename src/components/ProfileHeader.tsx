'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import DynamicAvatar from './DynamicAvatar';

interface ProfileHeaderProps {
  themeTextClass: string;
}

export default function ProfileHeader({ themeTextClass }: ProfileHeaderProps) {
  const pathname = usePathname();
  
  const [username, setUsername] = useState<string>('Loading...');
  const [avatarColor, setAvatarColor] = useState<string>('#F2C296');
  const [avatarType, setAvatarType] = useState<string>('classic');

  useEffect(() => {
    // Read from localStorage for frontend mode
    const storedName = localStorage.getItem('dummy_username') || 'fulan';
    const storedColor = localStorage.getItem('dummy_avatar_color') || '#F2C296';
    const storedType = localStorage.getItem('dummy_avatar_type') || 'classic';
    setUsername(storedName);
    setAvatarColor(storedColor);
    setAvatarType(storedType);
  }, []);

  const toggleHref = pathname?.includes('/dashboard/red')
    ? '/main/dashboard'
    : '/main/dashboard/red';

  return (
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
            <Link
              href={toggleHref}
              className={`p-1.5 rounded-full bg-white/50 hover:bg-white transition-all shadow-sm ${themeTextClass}`}
              title="Toggle Special Red Mode"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
              </svg>
            </Link>
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
    </div>
  );
}
