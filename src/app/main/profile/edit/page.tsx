'use client';

import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { account } from '../../../../lib/appwrite';

// Character Component to keep code clean
const CharacterPreview = ({ type, color, size = "large" }: { type: string, color: string, size?: "small" | "large" }) => {
  const isLarge = size === "large";
  const dim = isLarge ? "w-32 h-32 rounded-[32px]" : "w-14 h-14 rounded-xl";
  
  return (
    <div className={`${dim} overflow-hidden relative shadow-lg border-2 border-white/50 transition-all`} style={{ backgroundColor: color }}>
      {type === 'classic' && (
        <>
          <div className="absolute top-0 w-full h-[30%] bg-[#1F2C45] opacity-90" />
          <div className="absolute top-[40%] left-[10%] w-[30%] h-[30%] rounded-full bg-white flex items-center justify-center">
            <div className="w-[40%] h-[40%] rounded-full bg-black" />
          </div>
          <div className="absolute top-[40%] right-[10%] w-[30%] h-[30%] rounded-full bg-white flex items-center justify-center">
            <div className="w-[40%] h-[40%] rounded-full bg-black" />
          </div>
          <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[30%] h-[10%] rounded-full bg-[#DD9878]/50" />
        </>
      )}

      {type === 'bear' && (
        <>
          <div className="absolute top-[10%] left-[5%] w-[25%] h-[25%] rounded-full bg-[#8B4513] opacity-60" />
          <div className="absolute top-[10%] right-[5%] w-[25%] h-[25%] rounded-full bg-[#8B4513] opacity-60" />
          <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[50%] h-[40%] rounded-full bg-white opacity-40" />
          <div className="absolute top-[45%] left-1/2 -translate-x-1/2 w-[15%] h-[10%] rounded-full bg-[#3D2B1F]" />
          <div className="absolute top-[35%] left-[20%] w-[15%] h-[15%] rounded-full bg-black" />
          <div className="absolute top-[35%] right-[20%] w-[15%] h-[15%] rounded-full bg-black" />
        </>
      )}

      {type === 'robot' && (
        <>
          <div className="absolute top-0 w-full h-full border-[10px] border-white/10" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[10%] h-[20%] bg-red-500 animate-pulse" />
          <div className="absolute top-[30%] left-[10%] w-[80%] h-[30%] bg-[#1F2C45] rounded-lg flex items-center justify-around">
            <div className="w-[15%] h-[60%] bg-[#00FFCC] blur-[1px]" />
            <div className="w-[15%] h-[60%] bg-[#00FFCC] blur-[1px]" />
          </div>
          <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[60%] h-[10%] bg-[#1F2C45] rounded-full" />
        </>
      )}

      {type === 'alien' && (
        <>
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[50%] h-[50%] rounded-full bg-white flex items-center justify-center shadow-inner">
             <div className="w-[50%] h-[50%] rounded-full bg-purple-900 flex items-center justify-center">
                <div className="w-[30%] h-[30%] rounded-full bg-white self-start ml-1 mt-1" />
             </div>
          </div>
          <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[40%] h-[15%] border-b-4 border-black/40 rounded-full" />
        </>
      )}
    </div>
  );
};

const EditProfilePage: NextPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string>('');
  const [charType, setCharType] = useState<string>('classic');
  const [avatarColor, setAvatarColor] = useState<string>('#F2C296');
  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);
  
  const charOptions = ['classic', 'bear', 'robot', 'alien'];
  const colorOptions = ['#F2C296', '#FFCB05', '#93D334', '#7DA5F5', '#FF7F7F', '#BB86FC'];

  useEffect(() => {
    const init = async () => {
      try {
        const user = await account.get();
        setUsername(user.name || 'Student');
      } catch (err) {
        setUsername('Guest');
      }
      
      const storedColor = localStorage.getItem('dummy_avatar_color') || '#F2C296';
      const storedType = localStorage.getItem('dummy_avatar_type') || 'classic';
      setAvatarColor(storedColor);
      setCharType(storedType);
      
      setTimeout(() => setLoading(false), 500);
    };
    init();
  }, []);

  const handleSave = async () => {
    if (!username.trim()) return;
    setSaving(true);
    
    try {
      // Perbarui nama menggunakan Appwrite Backend
      await account.updateName(username.trim());
      
      // Simpan styling avatar ke localStorage sementara
      localStorage.setItem('dummy_avatar_color', avatarColor);
      localStorage.setItem('dummy_avatar_type', charType);
      
      router.push('/main/profile');
    } catch (err) {
      console.error(err);
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#87BE32] flex items-center justify-center text-white font-black tracking-widest text-sm">
        PREPARING MAGIC...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#87BE32] font-sans flex flex-col items-center relative z-0">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white opacity-10 rounded-full blur-[80px]" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-[#74AB26] opacity-20 rounded-full blur-[60px]" />

      {/* Header */}
      <div className="w-full sm:max-w-md relative z-20 mt-10 mb-8 flex items-center justify-between px-6">
        <button 
          onClick={() => {
            if (window.history.length > 1) router.back();
            else router.push('/main/profile');
          }} 
          className="w-12 h-12 bg-white/20 rounded-[20px] flex items-center justify-center text-white backdrop-blur-md active:scale-90 transition-transform shadow-sm border-b-4 border-white/10"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M15 18L9 12L15 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <h1 className="text-white font-black text-xl tracking-wide">My Custom Avatar</h1>
        <div className="w-12" />
      </div>

      <div className="w-full sm:max-w-md relative z-10 px-4 flex-grow mb-10 text-[#382654]">
        <div className="bg-white rounded-[3rem] p-8 pb-10 shadow-[0_20px_40px_rgba(0,0,0,0.1)] flex flex-col items-center border-[6px] border-white/40">
          
          {/* Main Preview */}
          <div className="mb-10 scale-110 mt-4 relative">
             <div className="absolute -inset-4 bg-gradient-to-b from-[#FFF5D1] to-transparent rounded-[40px] opacity-50" />
            <CharacterPreview type={charType} color={avatarColor} size="large" />
          </div>

          {/* Character Type Slider */}
          <div className="w-full mb-10 overflow-hidden">
            <p className="text-[12px] font-black uppercase tracking-widest mb-4 opacity-70 px-2 flex items-center gap-2">
               <span>🛸</span> Pick A Buddy!
            </p>
            <div className="flex gap-6 overflow-x-auto py-6 no-scrollbar px-4 -mx-2">
              {charOptions.map((type) => (
                <button
                  key={type}
                  onClick={() => setCharType(type)}
                  className={`flex-shrink-0 transition-all duration-300 ${charType === type 
                    ? 'scale-110 ring-[6px] ring-[#FFCB05] rounded-[20px] ring-offset-4 relative z-10 shadow-xl rotate-3' 
                    : 'opacity-50 grayscale-[0.3] hover:scale-105 hover:opacity-80 hover:rotate-0'}`}
                >
                  <CharacterPreview type={type} color={avatarColor} size="small" />
                </button>
              ))}
            </div>
          </div>

          {/* Color Selectors */}
          <div className="w-full mb-10">
            <p className="text-[12px] font-black uppercase tracking-widest mb-4 opacity-70 px-2 flex items-center gap-2">
               <span>🎨</span> Fun Colors!
            </p>
            <div className="flex justify-between px-2">
              {colorOptions.map((color) => (
                <button
                  key={color}
                  onClick={() => setAvatarColor(color)}
                  className={`w-10 h-10 rounded-full border-4 transition-all shadow-sm ${avatarColor === color ? 'border-[#382654] scale-125 shadow-md' : 'border-white/50 hover:scale-110'}`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Name Input */}
          <div className="w-full space-y-2 mb-10">
            <label className="text-[12px] font-black uppercase tracking-widest ml-4 opacity-70 flex items-center gap-2">
               <span>🏷️</span> Cool Nickname
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-[#F0FDF4] border-4 border-[#E8F5E9] focus:border-[#93D334] focus:bg-white rounded-[2rem] px-6 py-4 outline-none font-black text-lg text-[#382654] transition-colors placeholder:text-[#382654]/30"
              placeholder="e.g. Super Hero..."
            />
          </div>

          <button 
            onClick={handleSave}
            disabled={saving || !username.trim()}
            className="w-full bg-[#FF9500] hover:bg-[#FFAD33] text-white font-black text-[16px] tracking-widest rounded-full py-5 shadow-[0_6px_0_#D17600] active:translate-y-[6px] active:shadow-none disabled:opacity-40 disabled:active:translate-y-0 disabled:active:shadow-[0_6px_0_#D17600] transition-all"
          >
            {saving ? 'PACKING BAGS... 🎒' : 'SAVE & PLAY! ✨'}
          </button>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default EditProfilePage;
