import React from 'react';
import NodeItem from './NodeItem';

interface FloorProps {
  floor?: 1 | 2 | 3;
  completedNodes: number[];
  theme: any;
  isStudent1?: boolean;
  interest?: string;
  isTrialPath?: boolean;
  onUnlockRequest?: () => void;
}

export default function FloorRed({ floor = 1, completedNodes, theme, isStudent1, interest = 'art', isTrialPath = false, onUnlockRequest }: FloorProps) {
  // Calculate node IDs based on floor
  const baseId = (floor - 1) * 8;
  const nodes = [
    { id: baseId + 1, top: '0%', left: '50%' },
    { id: baseId + 2, top: '13%', left: '30%' },
    { id: baseId + 3, top: '28%', left: '25%' },
    { id: baseId + 4, top: '41%', left: '45%' }, // Boss 1
    { id: baseId + 5, top: '54%', left: '65%' },
    { id: baseId + 6, top: '69%', left: '75%' },
    { id: baseId + 7, top: '84%', left: '65%' },
    { id: baseId + 8, top: '97%', left: '40%' }, // Boss 2
  ];

  return (
    <div className="relative w-[300px] h-[600px] mt-10 pointer-events-auto">
      
      {/* ART THEME Decorations */}
      {(interest === 'art' || !['computer', 'sport'].includes(interest)) && (
        <>
          <div className="absolute top-[20%] left-[75%] pointer-events-none">
            <svg width="45" height="40" viewBox="0 0 50 50">
               <path d="M 10 40 Q 5 20 20 15 Q 40 10 45 25 Q 50 40 25 45 Q 10 45 10 40 Z" fill="#F48FB1" />
               <circle cx="20" cy="25" r="3" fill="#D32F2F" />
               <circle cx="28" cy="20" r="3" fill="#1976D2" />
               <circle cx="35" cy="25" r="4" fill="#388E3C" />
               <circle cx="28" cy="32" r="3.5" fill="#FBC02D" />
            </svg>
          </div>
          <div className="absolute top-[60%] left-[8%] pointer-events-none scale-75 rotate-[-15deg]">
            <svg width="45" height="40" viewBox="0 0 50 50">
               <rect x="20" y="20" width="8" height="25" fill="#795548" rx="2" />
               <path d="M 20 20 Q 24 5 28 20 Z" fill="#FF5252" />
               <rect x="18" y="20" width="12" height="5" fill="#B0BEC5" />
            </svg>
          </div>

          {floor === 1 && (
            <div className="absolute top-[8%] left-[15%] pointer-events-none opacity-90 rotate-6">
              <svg width="70" height="30" viewBox="0 0 100 50">
                <ellipse cx="50" cy="25" rx="38" ry="10" fill="#E53935" />
                <circle cx="35" cy="22" r="5" fill="#FF5252" />
                <circle cx="60" cy="24" r="6" fill="#D32F2F" />
              </svg>
            </div>
          )}

          {/* Milestone 1 - Easel */}
          <div className="absolute transition-transform duration-500 hover:scale-105 pointer-events-none" style={{ top: '33%', left: '-5%' }}>
              <svg width="110" height="110" viewBox="0 0 100 100">
                  <line x1="50" y1="20" x2="30" y2="90" stroke="#5D4037" strokeWidth="4" strokeLinecap="round" />
                  <line x1="50" y1="20" x2="70" y2="90" stroke="#5D4037" strokeWidth="4" strokeLinecap="round" />
                  <line x1="50" y1="20" x2="50" y2="85" stroke="#4E342E" strokeWidth="3" strokeLinecap="round" />
                  <rect x="25" y="30" width="50" height="40" fill="#FFF" stroke="#E0E0E0" strokeWidth="2" />
                  <rect x="20" y="70" width="60" height="4" fill="#3E2723" />
                  <circle cx="40" cy="45" r="10" fill="#FF9800" />
                  <path d="M 30 65 Q 50 45 70 65 Z" fill="#4CAF50" />
              </svg>
          </div>

          {/* Milestone 2 - Paint Tube */}
          <div className="absolute transition-transform duration-500 hover:scale-105 pointer-events-none" style={{ top: '86%', left: '55%' }}>
            <svg width="100" height="100" viewBox="0 0 100 100">
                <rect x="40" y="30" width="20" height="40" fill="#E0E0E0" />
                <polygon points="40,30 60,30 55,20 45,20" fill="#9E9E9E" />
                <rect x="46" y="15" width="8" height="5" fill="#424242" />
                <rect x="35" y="70" width="30" height="10" fill="#D32F2F" rx="2" />
                <path d="M 45 15 Q 50 0 30 10" stroke="#E53935" strokeWidth="6" strokeLinecap="round" fill="none" />
                <circle cx="28" cy="12" r="3" fill="#E53935" />
            </svg>
          </div>
        </>
      )}

      {/* COMPUTER THEME Decorations */}
      {interest === 'computer' && (
        <>
          <div className="absolute top-[20%] left-[75%] pointer-events-none">
            <svg width="45" height="40" viewBox="0 0 50 50">
               <rect x="15" y="15" width="20" height="20" fill="#1E88E5" rx="3" />
               <rect x="20" y="20" width="10" height="10" fill="#0D47A1" />
               <line x1="10" y1="20" x2="15" y2="20" stroke="#90CAF9" strokeWidth="2" />
               <line x1="10" y1="30" x2="15" y2="30" stroke="#90CAF9" strokeWidth="2" />
               <line x1="35" y1="20" x2="40" y2="20" stroke="#90CAF9" strokeWidth="2" />
               <line x1="35" y1="30" x2="40" y2="30" stroke="#90CAF9" strokeWidth="2" />
            </svg>
          </div>
          <div className="absolute top-[60%] left-[8%] pointer-events-none">
            <svg width="50" height="50" viewBox="0 0 50 50">
               <path d="M 10 40 L 20 40 L 30 30 L 30 10" stroke="#64B5F6" strokeWidth="3" fill="none" />
               <circle cx="30" cy="10" r="4" fill="#1976D2" />
               <circle cx="10" cy="40" r="3" fill="#42A5F5" />
            </svg>
          </div>

          <div className="absolute top-[10%] left-[15%] pointer-events-none opacity-80">
            <span className="text-[#1976D2] font-mono text-xs font-bold leading-none">
              01<br/>10<br/>11
            </span>
          </div>

          {/* Milestone 1 - Desktop PC */}
          <div className="absolute transition-transform duration-500 hover:scale-105 pointer-events-none" style={{ top: '33%', left: '-5%' }}>
              <svg width="110" height="110" viewBox="0 0 100 100">
                  <rect x="20" y="30" width="50" height="35" fill="#424242" rx="4" />
                  <rect x="23" y="33" width="44" height="29" fill="#1E88E5" />
                  <rect x="40" y="65" width="10" height="10" fill="#616161" />
                  <rect x="30" y="75" width="30" height="5" fill="#757575" rx="2" />
                  <rect x="75" y="30" width="15" height="40" fill="#212121" rx="2" />
                  <circle cx="82" cy="40" r="3" fill="#64B5F6" />
                  <circle cx="82" cy="50" r="2" fill="#E0E0E0" />
              </svg>
          </div>

          {/* Milestone 2 - Robot */}
          <div className="absolute transition-transform duration-500 hover:scale-105 pointer-events-none" style={{ top: '86%', left: '55%' }}>
            <svg width="110" height="110" viewBox="0 0 100 100">
                <rect x="35" y="25" width="30" height="25" fill="#B0BEC5" rx="4" />
                <circle cx="43" cy="35" r="4" fill="#0D47A1" />
                <circle cx="57" cy="35" r="4" fill="#0D47A1" />
                <rect x="45" y="42" width="10" height="3" fill="#546E7A" />
                <line x1="50" y1="25" x2="50" y2="15" stroke="#78909C" strokeWidth="2" />
                <circle cx="50" cy="13" r="3" fill="#1E88E5" />
                <rect x="30" y="55" width="40" height="35" fill="#90A4AE" rx="6" />
                <rect x="40" y="65" width="20" height="10" fill="#CFD8DC" />
                <line x1="30" y1="65" x2="20" y2="75" stroke="#B0BEC5" strokeWidth="4" strokeLinecap="round" />
                <line x1="70" y1="65" x2="80" y2="75" stroke="#B0BEC5" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
        </>
      )}

      {/* SPORT THEME Decorations */}
      {interest === 'sport' && (
        <>
          <div className="absolute top-[20%] left-[75%] pointer-events-none">
            <svg width="35" height="35" viewBox="0 0 50 50">
               <circle cx="25" cy="25" r="20" fill="#CDDC39" />
               <path d="M 15 5 A 20 20 0 0 0 15 45" stroke="#F0F4C3" strokeWidth="3" fill="none" />
               <path d="M 35 5 A 20 20 0 0 1 35 45" stroke="#F0F4C3" strokeWidth="3" fill="none" />
            </svg>
          </div>
          <div className="absolute top-[60%] left-[8%] pointer-events-none rotate-12">
            <svg width="40" height="40" viewBox="0 0 50 50">
               <path d="M 20 40 Q 15 25 22 15 L 22 10 Q 25 5 28 10 L 28 15 Q 35 25 30 40 Z" fill="#FFF" stroke="#E0E0E0" strokeWidth="2" />
               <line x1="21" y1="18" x2="29" y2="18" stroke="#F44336" strokeWidth="2" />
               <line x1="20" y1="21" x2="30" y2="21" stroke="#F44336" strokeWidth="2" />
            </svg>
          </div>

          <div className="absolute top-[8%] left-[15%] pointer-events-none opacity-80">
            <svg width="60" height="20" viewBox="0 0 60 20">
               <path d="M 5 10 Q 15 0 25 10 T 45 10" stroke="#FFB74D" strokeWidth="3" strokeDasharray="5, 5" fill="none" />
               <circle cx="50" cy="10" r="2" fill="#E65100" />
            </svg>
          </div>

          {/* Milestone 1 - Basketball Hoop */}
          <div className="absolute transition-transform duration-500 hover:scale-105 pointer-events-none" style={{ top: '33%', left: '-5%' }}>
              <svg width="100" height="100" viewBox="0 0 100 100">
                  <rect x="25" y="20" width="50" height="35" fill="#FFF" stroke="#E65100" strokeWidth="4" />
                  <rect x="40" y="35" width="20" height="15" fill="none" stroke="#E65100" strokeWidth="2" />
                  <rect x="45" y="55" width="10" height="45" fill="#90A4AE" />
                  <ellipse cx="50" cy="55" rx="15" ry="5" fill="none" stroke="#D84315" strokeWidth="3" />
                  <path d="M 35 55 L 40 75 L 60 75 L 65 55" stroke="#FFF" strokeWidth="2" fill="none" />
                  <line x1="43" y1="55" x2="45" y2="75" stroke="#FFF" strokeWidth="1" />
                  <line x1="57" y1="55" x2="55" y2="75" stroke="#FFF" strokeWidth="1" />
                  <line x1="50" y1="55" x2="50" y2="75" stroke="#FFF" strokeWidth="1" />
              </svg>
          </div>

          {/* Milestone 2 - Trophy */}
          <div className="absolute transition-transform duration-500 hover:scale-105 pointer-events-none" style={{ top: '86%', left: '55%' }}>
            <svg width="100" height="100" viewBox="0 0 100 100">
                <path d="M 25 30 Q 25 60 50 65 Q 75 60 75 30 Z" fill="#FFC107" />
                <rect x="25" y="20" width="50" height="10" fill="#FFA000" />
                <path d="M 15 25 A 10 10 0 0 0 25 40" stroke="#FFC107" strokeWidth="4" fill="none" />
                <path d="M 85 25 A 10 10 0 0 1 75 40" stroke="#FFC107" strokeWidth="4" fill="none" />
                <rect x="45" y="65" width="10" height="20" fill="#FFA000" />
                <rect x="35" y="85" width="30" height="10" fill="#5D4037" rx="2" />
            </svg>
          </div>
        </>
      )}

      {nodes.map((node) => (
        <NodeItem 
          key={node.id} 
          nodeId={node.id} 
          top={node.top} 
          left={node.left} 
          completedNodes={completedNodes} 
          theme={theme} 
          examTheme="red" 
          isStudent1={isStudent1} 
          isTrialPath={isTrialPath}
          onUnlockRequest={onUnlockRequest}
        />
      ))}
    </div>
  );
}
