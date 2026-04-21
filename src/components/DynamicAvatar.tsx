'use client';

import React from 'react';

interface DynamicAvatarProps {
  type: string;
  color: string;
  className?: string;
}

export default function DynamicAvatar({ type, color, className = "w-16 h-16 rounded-xl" }: DynamicAvatarProps) {
  return (
    <div className={`${className} overflow-hidden relative shadow-md transition-all`} style={{ backgroundColor: color }}>
      
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
          <div className="absolute top-0 w-full h-full border-[6px] border-white/10" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[10%] h-[15%] bg-red-400" />
          <div className="absolute top-[30%] left-[10%] w-[80%] h-[30%] bg-[#1F2C45] rounded-md flex items-center justify-around">
            <div className="w-[15%] h-[50%] bg-[#00FFCC]" />
            <div className="w-[15%] h-[50%] bg-[#00FFCC]" />
          </div>
          <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[50%] h-[8%] bg-[#1F2C45] rounded-full" />
        </>
      )}

      {type === 'alien' && (
        <>
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[50%] h-[50%] rounded-full bg-white flex items-center justify-center">
             <div className="w-[60%] h-[60%] rounded-full bg-purple-900 flex items-center justify-center">
                <div className="w-[40%] h-[40%] rounded-full bg-white self-start ml-0.5 mt-0.5" />
             </div>
          </div>
          <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[40%] h-[10%] border-b-2 border-black/30 rounded-full" />
        </>
      )}
    </div>
  );
}
