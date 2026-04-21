import React from 'react';
import NodeItem from './NodeItem';

interface FloorProps {
  completedNodes: number[];
  theme: any;
  isStudent1?: boolean;
}

export default function FloorRed({ completedNodes, theme, isStudent1 }: FloorProps) {
  const nodes = [
    { id: 1, top: '0%', left: '50%' },
    { id: 2, top: '13%', left: '30%' },
    { id: 3, top: '28%', left: '25%' },
    { id: 4, top: '41%', left: '45%' }, // Milestone 1
    { id: 5, top: '54%', left: '65%' },
    { id: 6, top: '69%', left: '75%' },
    { id: 7, top: '84%', left: '65%' },
    { id: 8, top: '97%', left: '40%' }, // Milestone 2
  ];

  return (
    <div className="relative w-[300px] h-[600px] mt-10 pointer-events-auto">
      
      {/* Polished Volcano/Magma Environment Decorations */}
      
      {/* Floating Embers / Fireflies */}
      <div className="absolute inset-0 pointer-events-none opacity-80">
        <div className="absolute top-[10%] left-[25%] w-2 h-2 rounded-full bg-[#FFC107] blur-[1px] animate-pulse"></div>
        <div className="absolute top-[30%] left-[80%] w-3 h-3 rounded-full bg-[#FF9800] blur-[2px] animate-pulse"></div>
        <div className="absolute top-[50%] left-[15%] w-2 h-2 rounded-full bg-[#FF5252] blur-[1px]"></div>
        <div className="absolute top-[70%] left-[85%] w-2 h-2 rounded-full bg-[#FFC107] blur-[1px] animate-pulse"></div>
        <div className="absolute top-[85%] left-[20%] w-3 h-3 rounded-full bg-[#FF5252] blur-[2px]"></div>
      </div>

      {/* Magma Boulders */}
      <div className="absolute top-[20%] left-[75%] pointer-events-none">
        <svg width="45" height="40" viewBox="0 0 50 50">
           {/* Dark Rock */}
           <path d="M 10 40 Q 5 20 20 15 Q 40 10 45 25 Q 50 40 25 45 Q 10 45 10 40 Z" fill="#3E2723" />
           {/* Glowing magma fissures inside rock */}
           <path d="M 15 30 L 25 25 L 35 35" stroke="#FF5252" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
           <path d="M 25 25 L 30 15" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
           {/* Shadow/Highlight */}
           <path d="M 20 15 Q 40 10 45 25 Q 35 20 20 25 Z" fill="#4E342E" />
        </svg>
      </div>
      <div className="absolute top-[60%] left-[8%] pointer-events-none scale-75 rotate-[-15deg]">
        <svg width="45" height="40" viewBox="0 0 50 50">
           <path d="M 5 35 Q 5 15 25 10 Q 45 15 40 35 Q 25 45 5 35 Z" fill="#3E2723" />
           <path d="M 15 25 L 25 20 L 30 30" stroke="#FF5252" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </div>

      {/* Active Lava Puddles */}
      <div className="absolute top-[8%] left-[15%] pointer-events-none opacity-90 rotate-6">
        <svg width="70" height="30" viewBox="0 0 100 50">
          <ellipse cx="50" cy="25" rx="45" ry="15" fill="#4E342E" />
          <ellipse cx="50" cy="25" rx="38" ry="10" fill="#E53935" />
          <ellipse cx="50" cy="25" rx="25" ry="5" fill="#FF9800" />
          {/* Bubble */}
          <circle cx="35" cy="22" r="3" fill="#FFC107" />
          <circle cx="60" cy="24" r="2" fill="#FFC107" />
        </svg>
      </div>
      <div className="absolute top-[42%] left-[65%] pointer-events-none opacity-90 -rotate-6">
        <svg width="80" height="35" viewBox="0 0 100 50">
          <ellipse cx="50" cy="25" rx="45" ry="15" fill="#4E342E" />
          <ellipse cx="50" cy="25" rx="40" ry="12" fill="#E53935" />
          <ellipse cx="55" cy="25" rx="25" ry="6" fill="#FF9800" />
          {/* Bubble */}
          <circle cx="45" cy="24" r="4" fill="#FFC107" />
          <ellipse cx="70" cy="26" rx="3" ry="2" fill="#FFC107" />
        </svg>
      </div>

      {/* Milestone 1 Graphic - Cute Round Volcano */}
      <div className="absolute transition-transform duration-500 hover:scale-105 pointer-events-none" style={{ top: '33%', left: '-5%' }}>
          <svg width="130" height="130" viewBox="0 0 100 100">
              {/* Volcano body */}
              <path d="M 10 90 L 35 35 C 40 25, 60 25, 65 35 L 90 90 Z" fill="#3E2723" />
              {/* Volcano highlight/shadow */}
              <path d="M 50 30 L 65 35 L 90 90 L 50 90 Z" fill="#2D1A11" opacity="0.4" />
              {/* Crater */}
              <ellipse cx="50" cy="30" rx="16" ry="6" fill="#1A0F0A" />
              {/* Lava spill */}
              <path d="M 38 31 C 38 45, 32 55, 38 65 C 40 75, 45 70, 48 55 C 50 40, 55 55, 60 65 C 65 75, 68 50, 62 31 Z" fill="#FF3D00" />
              <path d="M 43 32 C 43 40, 48 45, 52 55 C 55 45, 58 35, 57 32 Z" fill="#FFC107" />
              {/* Smoke Clouds */}
              <circle cx="45" cy="15" r="8" fill="#BDBDBD" opacity="0.7" />
              <circle cx="55" cy="10" r="10" fill="#BDBDBD" opacity="0.7" />
              <circle cx="65" cy="18" r="7" fill="#BDBDBD" opacity="0.7" />
          </svg>
      </div>

      {/* Milestone 2 Graphic - Lava Geyser Rock */}
      <div className="absolute transition-transform duration-500 hover:scale-105 pointer-events-none" style={{ top: '86%', left: '55%' }}>
        <svg width="120" height="120" viewBox="0 0 100 100">
            {/* Rock Base Pool */}
            <ellipse cx="50" cy="85" rx="45" ry="15" fill="#4E342E" />
            <path d="M 7 85 Q 50 110 93 85" fill="#3E2723" /> {/* Pool depth */}
            <ellipse cx="50" cy="82" rx="35" ry="10" fill="#E53935" />
            <ellipse cx="50" cy="82" rx="25" ry="6" fill="#FF9800" />
            
            {/* Geyser Eruption */}
            <path d="M 40 82 C 35 50, 40 30, 50 20 C 60 30, 65 50, 60 82 Z" fill="#FF5252" />
            <path d="M 45 82 C 43 60, 46 40, 50 30 C 54 40, 57 60, 55 82 Z" fill="#FFC107" />
            
            {/* Spray droplets */}
            <circle cx="45" cy="15" r="3" fill="#FF5252" />
            <circle cx="58" cy="12" r="2.5" fill="#FF9800" />
            <circle cx="65" cy="25" r="2" fill="#FFC107" />
            <circle cx="35" cy="28" r="2" fill="#FF5252" />
        </svg>
      </div>

      {nodes.map((node) => (
        <NodeItem key={node.id} nodeId={node.id} top={node.top} left={node.left} completedNodes={completedNodes} theme={theme} examTheme="red" isStudent1={isStudent1} />
      ))}
    </div>
  );
}
