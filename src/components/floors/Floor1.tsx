import React from 'react';
import NodeItem from './NodeItem';

interface FloorProps {
  completedNodes: number[];
  theme: any;
  isStudent1?: boolean;
}

export default function Floor1({ completedNodes, theme, isStudent1 }: FloorProps) {
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
      
      {/* Scattered Swamp Environment Decorations */}
      {/* Lilypad 1 */}
      <div className="absolute top-[5%] left-[10%] pointer-events-none">
        <svg width="40" height="25" viewBox="0 0 100 50">
          <ellipse cx="50" cy="25" rx="48" ry="22" fill="#4CAF50" />
          <polygon points="50,25 65,5 35,5" fill="#C5EAC9" /> {/* The cutout */}
        </svg>
      </div>
      {/* Lilypad 2 */}
      <div className="absolute top-[28%] left-[70%] pointer-events-none rotate-45">
        <svg width="30" height="18" viewBox="0 0 100 50">
          <ellipse cx="50" cy="25" rx="48" ry="22" fill="#388E3C" />
          <polygon points="50,25 95,15 95,35" fill="#C5EAC9" />
        </svg>
      </div>
      {/* Floating Log */}
      <div className="absolute top-[20%] left-[80%] pointer-events-none rotate-[20deg] opacity-90">
        <svg width="60" height="20" viewBox="0 0 100 30">
          <rect x="5" y="5" width="90" height="20" fill="#5D4037" rx="5" />
          <line x1="20" y1="10" x2="80" y2="10" stroke="#3E2723" strokeWidth="2" strokeDasharray="10,5" />
          <line x1="10" y1="20" x2="90" y2="20" stroke="#3E2723" strokeWidth="2" strokeDasharray="15,4" />
        </svg>
      </div>
      {/* Cattails (Glagah) */}
      <div className="absolute top-[60%] left-[15%] pointer-events-none">
        <svg width="40" height="60" viewBox="0 0 50 100">
           <rect x="23" y="40" width="3" height="60" fill="#2E7D32" />
           <rect x="20" y="10" width="9" height="35" fill="#6D4C41" rx="4" />
           {/* Second smaller cattail */}
           <rect x="35" y="50" width="2" height="50" fill="#2E7D32" transform="rotate(15 35 50)" />
           <rect x="32" y="30" width="8" height="25" fill="#5D4037" rx="3" transform="rotate(15 35 50)" />
        </svg>
      </div>
      {/* Water Ripple */}
      <div className="absolute top-[75%] left-[25%] pointer-events-none overflow-hidden">
        <svg width="60" height="20" viewBox="0 0 100 30">
           <ellipse cx="50" cy="15" rx="45" ry="10" fill="none" stroke="#81C784" strokeWidth="3" opacity="0.6" />
           <ellipse cx="50" cy="15" rx="25" ry="5" fill="none" stroke="#81C784" strokeWidth="2" opacity="0.4" />
        </svg>
      </div>
      <div className="absolute top-[48%] left-[20%] pointer-events-none overflow-hidden">
        <svg width="40" height="15" viewBox="0 0 100 30">
           <ellipse cx="50" cy="15" rx="45" ry="10" fill="none" stroke="#81C784" strokeWidth="3" opacity="0.5" />
        </svg>
      </div>

      {/* Milestone 1 Graphic - Swamp Hut */}
      <div className="absolute transition-transform duration-500 hover:scale-105 pointer-events-none" style={{ top: '35%', left: '0%' }}>
        <svg width="120" height="120" viewBox="0 0 100 100">
            {/* Stilts */}
            <rect x="30" y="75" width="8" height="25" fill="#4E342E"/>
            <rect x="62" y="75" width="8" height="25" fill="#4E342E"/>
            {/* Roof */}
            <polygon points="15,40 50,15 85,40" fill="#558B2F"/>
            <polygon points="15,40 50,25 85,40" fill="#33691E" opacity="0.4" /> {/* Roof shadow depth */}
            {/* House body */}
            <rect x="25" y="40" width="50" height="35" fill="#8D6E63"/>
            {/* Door */}
            <rect x="42" y="55" width="16" height="20" fill="#3E2723"/>
            {/* Doorknob */}
            <circle cx="56" cy="65" r="2" fill="#FFC107"/>
            {/* Swamp grass at bottom */}
            <path d="M10 100 Q 20 80 40 100 Q 60 70 80 100 Z" fill="#81C784" />
        </svg>
      </div>

      {/* Milestone 2 Graphic - Giant Swamp Tree */}
      <div className="absolute transition-transform duration-500 hover:scale-105 pointer-events-none" style={{ top: '82%', left: '60%' }}>
        <svg width="110" height="110" viewBox="0 0 100 100">
            {/* Trunk */}
            <rect x="40" y="40" width="20" height="60" fill="#5D4037" />
            <polygon points="40,100 30,100 40,80" fill="#4E342E" /> {/* Roots */}
            <polygon points="60,100 70,100 60,80" fill="#4E342E" />
            {/* Leaves */}
            <circle cx="50" cy="30" r="30" fill="#388E3C" />
            <circle cx="20" cy="40" r="22" fill="#2E7D32" />
            <circle cx="80" cy="40" r="22" fill="#2E7D32" />
            <circle cx="35" cy="15" r="15" fill="#4CAF50" />
            <circle cx="65" cy="15" r="15" fill="#4CAF50" />
            {/* Vines hanging from leaves */}
            <path d="M25 60 Q 20 80 25 100" stroke="#388E3C" strokeWidth="2" fill="none" />
            <path d="M75 60 Q 80 80 75 90" stroke="#2E7D32" strokeWidth="2" fill="none" />
            {/* Tree surface lines */}
            <path d="M45 40 Q 30 60 40 80" stroke="#3E2723" strokeWidth="2" fill="none" />
            <path d="M55 50 Q 65 70 55 90" stroke="#3E2723" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {nodes.map((node) => (
        <NodeItem key={node.id} nodeId={node.id} top={node.top} left={node.left} completedNodes={completedNodes} theme={theme} isStudent1={isStudent1} />
      ))}
    </div>
  );
}
