'use client';

import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import BottomNavigation from '../../../components/BottomNavigation';
import ProfileHeader from '../../../components/ProfileHeader';
import DynamicAvatar from '../../../components/DynamicAvatar';

const ProfilePage: NextPage = () => {
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
    
    // Listen for storage changes in other tabs/windows
    const handleStorage = () => {
      setUsername(localStorage.getItem('dummy_username') || 'fulan');
      setAvatarColor(localStorage.getItem('dummy_avatar_color') || '#F2C296');
      setAvatarType(localStorage.getItem('dummy_avatar_type') || 'classic');
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return (
    <div className="min-h-screen bg-[#F0FDF4] font-sans pb-24 relative overflow-hidden flex flex-col items-center">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#93D334] opacity-5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-40 left-0 w-64 h-64 bg-[#5BA885] opacity-5 rounded-full blur-[80px] pointer-events-none" />

      {/* Top Profile Section */}
      <div className="w-full relative z-10">
        <ProfileHeader themeTextClass="text-[#5BA885]" />
      </div>

      {/* Main Content Card container */}
      <div className="w-full sm:max-w-md mx-auto relative flex-grow mt-2 flex flex-col px-3">
        {/* White Background Card */}
        <div className="bg-white w-full rounded-t-[40px] flex-grow relative pb-20 shadow-[0_-10px_40px_rgba(0,0,0,0.03)] border-x border-t border-[#F0F0F0] pt-1">
          
          {/* Inner Content Container */}
          <div className="mx-2 mt-2 bg-white rounded-[36px] min-h-[75vh] relative overflow-hidden flex flex-col pt-12 pb-8 px-6 shadow-inner border border-[#F8F8F8]">
            
            {/* Dynamic Avatar Section */}
            <div className="relative mx-auto mb-8">
              <DynamicAvatar 
                type={avatarType} 
                color={avatarColor} 
                className="w-[160px] h-[160px] rounded-[32px] shadow-2xl border-4 border-white" 
              />
            </div>

            {/* User Info */}
            <div className="mt-4 text-center">
              <h2 className="text-[#382654] text-[28px] font-black tracking-tight max-w-[280px] mx-auto transition-all">
                {username}
              </h2>
              <p className="text-[#87BE32] text-sm font-black mt-1 uppercase tracking-widest">
                🌟 Level 5 Explorer 🌟
              </p>
            </div>

            {/* Level Bar */}
            <div className="mt-8 px-2">
              <div className="flex justify-between items-end mb-2">
                <span className="text-sm font-extrabold text-[#5BA885] tracking-widest">EXPERIENCE</span>
                <span className="text-[12px] font-extrabold text-[#93D334]">1.250 / 2.000 EXP</span>
              </div>
              <div className="w-full h-5 bg-[#F0FDF4] rounded-full overflow-hidden relative shadow-inner border-2 border-[#93D334]/30">
                <div 
                  className="h-full bg-gradient-to-r from-[#FFD166] to-[#FF9C3A] rounded-full transition-all duration-1000 shadow-sm relative overflow-hidden"
                  style={{ width: '62.5%' }}
                >
                  <div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(45deg,rgba(255,255,255,0.2)25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center mt-10 gap-3">
              <Link href="/main/profile/edit" className="bg-[#FF9500] text-white px-10 py-4 rounded-full text-[16px] font-black tracking-widest hover:bg-[#FFAD33] transition-all shadow-[0_4px_0_#D17600] active:translate-y-1 active:shadow-none text-center">
                🖍️ Edit Profile
              </Link>
            </div>

            {/* Divider */}
            <div className="w-full h-[3px] rounded-full bg-[#E8F5E9] my-10" />

            {/* Achievements Mini Section */}
            <div>
              <div className="flex justify-between items-center mb-6 pl-1">
                <h3 className="text-[#382654] text-[16px] font-extrabold">Recent Achievements</h3>
                <Link href="/main/achievement" className="text-[#5BA885] text-[11px] font-bold hover:underline">
                  View All
                </Link>
              </div>

              <div className="flex flex-col gap-4">
                {/* Achievement Item 1 */}
                <div className="flex items-center gap-4 bg-[#F0FDF4] p-4 rounded-3xl border-2 border-[#93D334]/20 shadow-sm relative overflow-hidden">
                  <div className="absolute -right-4 -bottom-4 text-5xl opacity-10">🌟</div>
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm border-2 border-[#93D334]/20">
                    🏆
                  </div>
                  <div className="flex flex-col flex-grow relative z-10">
                    <h3 className="text-[#382654] text-[15px] font-black">Star Student</h3>
                    <div className="w-full h-3 bg-white rounded-full overflow-hidden mt-1.5 border border-[#93D334]/30">
                       <div className="w-[70%] h-full bg-[#FFCD00] rounded-full flex items-center overflow-hidden">
                          <div className="w-full h-full bg-[linear-gradient(45deg,rgba(255,255,255,0.2)25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent_100%)] bg-[length:10px_10px]" />
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default ProfilePage;
