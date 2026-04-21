import React from 'react';
import NodeItem from './NodeItem';

interface FloorProps {
  completedNodes: number[];
  theme: any;
  isStudent1?: boolean;
}

export default function Floor3({ completedNodes, theme, isStudent1 }: FloorProps) {
  const nodes = [
    { id: 17, top: '0%', left: '50%' },
    { id: 18, top: '13%', left: '30%' },
    { id: 19, top: '28%', left: '25%' },
    { id: 20, top: '41%', left: '45%' }, // Milestone 1
    { id: 21, top: '54%', left: '65%' },
    { id: 22, top: '69%', left: '75%' },
    { id: 23, top: '84%', left: '65%' },
    { id: 24, top: '97%', left: '40%' }, // Milestone 2
  ];

  return (
    <div className="relative w-[300px] h-[600px] mt-10 pointer-events-auto">
      
      {/* Scattered Polar Environment Decorations */}

      {/* Snowflakes Flurry */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute top-[5%] left-[20%] w-2 h-2 rounded-full bg-white blur-[1px]"></div>
        <div className="absolute top-[15%] left-[85%] w-3 h-3 rounded-full bg-white blur-[1px]"></div>
        <div className="absolute top-[35%] left-[10%] w-2 h-2 rounded-full bg-white blur-[1px]"></div>
        <div className="absolute top-[45%] left-[90%] w-4 h-4 rounded-full bg-white blur-[2px]"></div>
        <div className="absolute top-[65%] left-[30%] w-3 h-3 rounded-full bg-white blur-[1px]"></div>
        <div className="absolute top-[80%] left-[80%] w-2 h-2 rounded-full bg-white blur-[1px]"></div>
        <div className="absolute top-[95%] left-[15%] w-3 h-3 rounded-full bg-white blur-[1px]"></div>
      </div>

      {/* Mini Icebergs Background */}
      <div className="absolute top-[-5%] left-[30%] pointer-events-none opacity-60 z-[-1]">
        <svg width="120" height="60" viewBox="0 0 100 50">
          <polygon points="10,50 30,10 50,50" fill="#E0F7FA" />
          <polygon points="30,10 50,50 30,50" fill="#B2EBF2" />
          <polygon points="40,50 60,20 80,50" fill="#E0F7FA" />
          <polygon points="60,20 80,50 60,50" fill="#80DEEA" />
          <polygon points="70,50 85,30 100,50" fill="#E0F7FA" />
        </svg>
      </div>

      {/* Cute Penguins */}
      <div className="absolute top-[18%] left-[5%] pointer-events-none">
        <svg width="45" height="45" viewBox="0 0 100 100">
          {/* Penguin 1 (Big) */}
          <path d="M 20 50 Q 20 20 35 20 Q 50 20 50 50 L 50 80 Q 50 90 35 90 Q 20 90 20 80 Z" fill="#212121" />
          <path d="M 25 55 Q 25 35 35 35 Q 45 35 45 55 L 45 75 Q 45 85 35 85 Q 25 85 25 75 Z" fill="#E0F7FA" />
          <circle cx="30" cy="45" r="2" fill="#212121" />
          <circle cx="40" cy="45" r="2" fill="#212121" />
          <polygon points="32,48 38,48 35,53" fill="#FF9800" />
          <ellipse cx="28" cy="85" rx="5" ry="3" fill="#FF9800" />
          <ellipse cx="42" cy="85" rx="5" ry="3" fill="#FF9800" />
          
          {/* Penguin 2 (Small) */}
          <path d="M 50 60 Q 50 40 60 40 Q 70 40 70 60 L 70 80 Q 70 90 60 90 Q 50 90 50 80 Z" fill="#212121" />
          <path d="M 53 65 Q 53 50 60 50 Q 67 50 67 65 L 67 80 Q 67 85 60 85 Q 53 85 53 80 Z" fill="#E0F7FA" />
          <circle cx="56" cy="55" r="1.5" fill="#212121" />
          <circle cx="64" cy="55" r="1.5" fill="#212121" />
          <polygon points="58,58 62,58 60,62" fill="#FF9800" />
          <ellipse cx="55" cy="85" rx="4" ry="2" fill="#FF9800" />
          <ellipse cx="65" cy="85" rx="4" ry="2" fill="#FF9800" />
        </svg>
      </div>

      {/* Frozen Pond */}
      <div className="absolute top-[65%] left-[10%] pointer-events-none opacity-80 rotate-6">
        <svg width="80" height="30" viewBox="0 0 100 50">
          <ellipse cx="50" cy="25" rx="45" ry="15" fill="#80DEEA" />
          <ellipse cx="50" cy="25" rx="40" ry="12" fill="#B2EBF2" />
          <path d="M 30 20 L 70 20" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          <path d="M 40 30 L 60 30" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        </svg>
      </div>

      {/* Small Snow Pines */}
      <div className="absolute top-[8%] left-[75%] pointer-events-none opacity-90">
        <svg width="40" height="50" viewBox="0 0 50 100">
           <polygon points="25,20 5,60 45,60" fill="#81C784"/>
           <polygon points="25,20 25,60 45,60" fill="#4CAF50"/> {/* Shadow */}
           <polygon points="25,40 10,80 40,80" fill="#66BB6A"/>
           <polygon points="25,40 25,80 40,80" fill="#4CAF50"/>
           <rect x="22" y="80" width="6" height="20" fill="#5D4037" />
           {/* Snow on tree */}
           <path d="M 25 20 L 15 40 Q 25 35 25 20" fill="#FFFFFF" />
           <path d="M 25 40 L 15 65 Q 25 60 25 40" fill="#FFFFFF" />
        </svg>
      </div>
      <div className="absolute top-[52%] left-[80%] pointer-events-none opacity-80 scale-75 rotate-[-12deg]">
        <svg width="40" height="50" viewBox="0 0 50 100">
           <polygon points="25,20 5,60 45,60" fill="#81C784"/>
           <polygon points="25,20 25,60 45,60" fill="#4CAF50"/>
           <polygon points="25,40 10,80 40,80" fill="#66BB6A"/>
           <polygon points="25,40 25,80 40,80" fill="#4CAF50"/>
           <rect x="22" y="80" width="6" height="20" fill="#5D4037" />
           <path d="M 25 20 L 15 40 Q 25 35 25 20" fill="#FFFFFF" />
           <path d="M 25 40 L 15 65 Q 25 60 25 40" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Ice Crystals/Rocks */}
      <div className="absolute top-[25%] left-[80%] pointer-events-none">
        <svg width="30" height="25" viewBox="0 0 50 50">
           <polygon points="10,40 25,10 40,40" fill="#E0F7FA"/>
           <polygon points="25,10 40,40 25,40" fill="#B2EBF2"/>
           <polygon points="5,48 15,25 25,48" fill="#B2EBF2"/>
        </svg>
      </div>
      <div className="absolute top-[75%] left-[70%] pointer-events-none rotate-12">
        <svg width="35" height="25" viewBox="0 0 50 50">
           <polygon points="10,40 25,10 40,40" fill="#E0F7FA"/>
           <polygon points="25,10 40,40 25,40" fill="#80DEEA"/>
        </svg>
      </div>

      {/* Cracked Ice Ground */}
      <div className="absolute top-[42%] left-[10%] pointer-events-none opacity-50">
        <svg width="60" height="20" viewBox="0 0 100 30">
          <path d="M 10 15 L 40 5 L 60 15 L 90 10" stroke="#80DEEA" strokeWidth="2" fill="none" />
          <path d="M 40 5 L 45 25" stroke="#80DEEA" strokeWidth="2" fill="none" />
          <path d="M 60 15 L 75 25" stroke="#80DEEA" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Milestone 1 Graphic - Igloo with Pine */}
      <div className="absolute transition-transform duration-500 hover:scale-105 pointer-events-none" style={{ top: '35%', left: '0%' }}>
          <svg width="120" height="120" viewBox="0 0 100 100">
              {/* Pine Tree Back */}
              <polygon points="20,70 10,90 30,90" fill="#81C784"/>
              <polygon points="20,55 12,75 28,75" fill="#66BB6A"/>
              <polygon points="20,40 15,60 25,60" fill="#4CAF50"/>
              {/* Igloo */}
              <path d="M40 90 A 30 30 0 0 1 100 90 Z" fill="#E0F7FA"/>
              <path d="M40 90 A 30 30 0 0 1 100 90 M55 90 A 20 20 0 0 1 85 90 M70 60 L 70 90 M55 70 L 55 90 M85 70 L 85 90" stroke="#B2EBF2" strokeWidth="2" fill="none"/>
              {/* Entrance */}
              <path d="M80 90 A 10 10 0 0 0 100 90 Z" fill="#B2EBF2"/>
          </svg>
      </div>

      {/* Milestone 2 Graphic - Snowman */}
      <div className="absolute transition-transform duration-500 hover:scale-105 pointer-events-none" style={{ top: '88%', left: '60%' }}>
        <svg width="100" height="100" viewBox="0 0 100 100">
            {/* Snowball Body */}
            <circle cx="50" cy="75" r="20" fill="#FFFFFF" />
            <circle cx="50" cy="45" r="15" fill="#FFFFFF" />
            <circle cx="50" cy="22" r="12" fill="#FFFFFF" />
            {/* Eyes */}
            <circle cx="46" cy="20" r="1.5" fill="#212121" />
            <circle cx="54" cy="20" r="1.5" fill="#212121" />
            {/* Nose */}
            <polygon points="50,22 50,26 60,24" fill="#FF9800" />
            {/* Buttons */}
            <circle cx="50" cy="40" r="1.5" fill="#212121" />
            <circle cx="50" cy="45" r="1.5" fill="#212121" />
            <circle cx="50" cy="50" r="1.5" fill="#212121" />
            {/* Hat */}
            <rect x="38" y="8" width="24" height="4" fill="#E53935" />
            <rect x="42" y="0" width="16" height="8" fill="#212121" />
        </svg>
      </div>

      {nodes.map((node) => (
        <NodeItem key={node.id} nodeId={node.id} top={node.top} left={node.left} completedNodes={completedNodes} theme={theme} isStudent1={isStudent1} />
      ))}
    </div>
  );
}
