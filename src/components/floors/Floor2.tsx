import React from 'react';
import NodeItem from './NodeItem';

interface FloorProps {
  completedNodes: number[];
  theme: any;
  isStudent1?: boolean;
}

export default function Floor2({ completedNodes, theme, isStudent1 }: FloorProps) {
  const nodes = [
    { id: 9, top: '0%', left: '50%' },
    { id: 10, top: '13%', left: '30%' },
    { id: 11, top: '28%', left: '25%' },
    { id: 12, top: '41%', left: '45%' }, // Milestone 1
    { id: 13, top: '54%', left: '65%' },
    { id: 14, top: '69%', left: '75%' },
    { id: 15, top: '84%', left: '65%' },
    { id: 16, top: '97%', left: '40%' }, // Milestone 2
  ];

  return (
    <div className="relative w-[300px] h-[600px] mt-10 pointer-events-auto">
      
      {/* Scattered Farm Environment Decorations */}
      {/* Bright Sun */}
      <div className="absolute top-[2%] left-[5%] pointer-events-none">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="25" fill="#FFC107" />
          {/* Sun rays */}
          <line x1="50" y1="5" x2="50" y2="15" stroke="#FFCA28" strokeWidth="6" strokeLinecap="round" />
          <line x1="50" y1="85" x2="50" y2="95" stroke="#FFCA28" strokeWidth="6" strokeLinecap="round" />
          <line x1="5" y1="50" x2="15" y2="50" stroke="#FFCA28" strokeWidth="6" strokeLinecap="round" />
          <line x1="85" y1="50" x2="95" y2="50" stroke="#FFCA28" strokeWidth="6" strokeLinecap="round" />
          <line x1="18" y1="18" x2="25" y2="25" stroke="#FFCA28" strokeWidth="6" strokeLinecap="round" />
          <line x1="82" y1="82" x2="75" y2="75" stroke="#FFCA28" strokeWidth="6" strokeLinecap="round" />
          <line x1="18" y1="82" x2="25" y2="75" stroke="#FFCA28" strokeWidth="6" strokeLinecap="round" />
          <line x1="82" y1="18" x2="75" y2="25" stroke="#FFCA28" strokeWidth="6" strokeLinecap="round" />
        </svg>
      </div>

      {/* Wooden Fence */}
      <div className="absolute top-[26%] left-[65%] pointer-events-none opacity-80 rotate-12">
        <svg width="60" height="30" viewBox="0 0 100 50">
          <rect x="10" y="10" width="8" height="40" fill="#795548" />
          <rect x="40" y="10" width="8" height="40" fill="#795548" />
          <rect x="70" y="10" width="8" height="40" fill="#795548" />
          <rect x="0" y="20" width="90" height="6" fill="#8D6E63" />
          <rect x="0" y="35" width="90" height="6" fill="#8D6E63" />
        </svg>
      </div>

      <div className="absolute top-[68%] left-[10%] pointer-events-none opacity-80 -rotate-6">
        <svg width="50" height="25" viewBox="0 0 100 50">
          <rect x="10" y="10" width="8" height="40" fill="#795548" />
          <rect x="40" y="10" width="8" height="40" fill="#795548" />
          <rect x="70" y="10" width="8" height="40" fill="#795548" />
          <rect x="0" y="20" width="90" height="6" fill="#8D6E63" />
          <rect x="0" y="35" width="90" height="6" fill="#8D6E63" />
        </svg>
      </div>

      {/* Small Crop Rows */}
      <div className="absolute top-[52%] left-[15%] pointer-events-none">
        <svg width="40" height="30" viewBox="0 0 60 40">
           <path d="M 10 10 Q 15 0 20 10" stroke="#4CAF50" strokeWidth="3" fill="none" />
           <path d="M 25 10 Q 30 0 35 10" stroke="#4CAF50" strokeWidth="3" fill="none" />
           <path d="M 40 10 Q 45 0 50 10" stroke="#4CAF50" strokeWidth="3" fill="none" />
           <rect x="5" y="10" width="50" height="4" fill="#795548" rx="2" />

           <path d="M 5 25 Q 10 15 15 25" stroke="#4CAF50" strokeWidth="3" fill="none" />
           <path d="M 20 25 Q 25 15 30 25" stroke="#4CAF50" strokeWidth="3" fill="none" />
           <path d="M 35 25 Q 40 15 45 25" stroke="#4CAF50" strokeWidth="3" fill="none" />
           <rect x="0" y="25" width="50" height="4" fill="#795548" rx="2" />
        </svg>
      </div>

      {/* Clouds */}
      <div className="absolute top-[20%] left-[15%] pointer-events-none opacity-60">
        <svg width="70" height="30" viewBox="0 0 100 50">
           <circle cx="30" cy="25" r="15" fill="#FFFFFF" />
           <circle cx="50" cy="15" r="20" fill="#FFFFFF" />
           <circle cx="70" cy="25" r="15" fill="#FFFFFF" />
           <rect x="30" y="25" width="40" height="15" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Milestone 1 Graphic - Farm Barn */}
      <div className="absolute transition-transform duration-500 hover:scale-105 pointer-events-none" style={{ top: '35%', left: '70%' }}>
        <svg width="110" height="110" viewBox="0 0 100 100">
            {/* Silo */}
            <rect x="10" y="30" width="20" height="60" fill="#B0BEC5"/>
            <path d="M10 30 Q 20 15 30 30 Z" fill="#90A4AE"/>
            {/* Barn */}
            <rect x="30" y="45" width="60" height="45" fill="#E53935"/>
            <polygon points="25,45 60,20 95,45" fill="#C62828"/>
            {/* Door */}
            <rect x="50" y="60" width="20" height="30" fill="#3E2723"/>
            {/* Barn Door Crosses */}
            <line x1="50" y1="60" x2="70" y2="90" stroke="#FFFFFF" strokeWidth="2"/>
            <line x1="70" y1="60" x2="50" y2="90" stroke="#FFFFFF" strokeWidth="2"/>
        </svg>
      </div>

      {/* Milestone 2 Graphic - Haybales */}
      <div className="absolute transition-transform duration-500 hover:scale-105 pointer-events-none" style={{ top: '90%', left: '5%' }}>
        <svg width="100" height="100" viewBox="0 0 100 100">
            {/* Haybales */}
            <rect x="20" y="60" width="30" height="30" fill="#FBC02D" rx="4"/>
            <rect x="55" y="60" width="30" height="30" fill="#FBC02D" rx="4"/>
            <rect x="37" y="35" width="30" height="30" fill="#FBC02D" rx="4"/>
            {/* Straps on hay */}
            <line x1="25" y1="65" x2="25" y2="85" stroke="#F57F17" strokeWidth="2" />
            <line x1="45" y1="65" x2="45" y2="85" stroke="#F57F17" strokeWidth="2" />
            <line x1="60" y1="65" x2="60" y2="85" stroke="#F57F17" strokeWidth="2" />
            <line x1="80" y1="65" x2="80" y2="85" stroke="#F57F17" strokeWidth="2" />
            <line x1="42" y1="40" x2="42" y2="60" stroke="#F57F17" strokeWidth="2" />
            <line x1="62" y1="40" x2="62" y2="60" stroke="#F57F17" strokeWidth="2" />
        </svg>
      </div>

      {nodes.map((node) => (
        <NodeItem key={node.id} nodeId={node.id} top={node.top} left={node.left} completedNodes={completedNodes} theme={theme} isStudent1={isStudent1} />
      ))}
    </div>
  );
}
