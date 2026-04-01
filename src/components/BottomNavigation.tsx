'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNavigation() {
  const pathname = usePathname();

  // Highlight logic based on current route
  const isActive = (path: string) => pathname?.includes(path);

  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-center z-50 p-4 pb-6">
      <div className="bg-white w-full sm:max-w-md h-[4.5rem] rounded-[2.5rem] flex items-center justify-around shadow-[0_-10px_40px_rgba(0,0,0,0.05)] px-4">
        
        {/* Home / Books Tab */}
        <Link 
          href="/main/dashboard" 
          className={`flex flex-col items-center justify-center p-2 transition-colors ${isActive('/main/dashboard') ? 'text-[#361E5C]' : 'text-[#B8B8B8] hover:text-[#361E5C]'}`}
        >
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
            <path d="M12 2v8l-3-2-3 2V2" fill="currentColor" className="opacity-20" />
            <path d="M12 2v8l-3-2-3 2V2" />
          </svg>
        </Link>

        {/* Trophy / Achievements Tab */}
        <Link 
          href="/main/achievement" 
          className={`flex flex-col items-center justify-center p-2 transition-colors ${isActive('/main/achievement') ? 'text-[#361E5C]' : 'text-[#B8B8B8] hover:text-[#361E5C]'}`}
        >
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 21h8" />
            <path d="M12 17v4" />
            <path d="M7 4h10" />
            <path d="M17 4v8a5 5 0 0 1-10 0V4" />
            <path d="M7 5H4a2 2 0 0 0-2 2v1a6 6 0 0 0 6 6" />
            <path d="M17 5h3a2 2 0 0 1 2 2v1a6 6 0 0 1-6 6" />
          </svg>
        </Link>

        {/* Profile Tab */}
        <Link 
          href="/main/profile" 
          className={`flex flex-col items-center justify-center p-2 transition-colors ${isActive('/main/profile') ? 'text-[#361E5C]' : 'text-[#B8B8B8] hover:text-[#361E5C]'}`}
        >
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </Link>

      </div>
    </div>
  );
}
