import Link from 'next/link';
import React from 'react';
import { getNodeSubject, getSubjectEmoji } from '../../lib/standardQuestions';

interface NodeItemProps {
  nodeId: number;
  top: string;
  left: string;
  completedNodes: number[];
  theme: any;
  examTheme?: string;
  isStudent1?: boolean;
  isTrialPath?: boolean;
  onUnlockRequest?: () => void;
}

export default function NodeItem({ nodeId, top, left, completedNodes, theme, examTheme, isStudent1, isTrialPath, onUnlockRequest }: NodeItemProps) {
  const isCompleted = completedNodes.includes(nodeId);
  
  const isFirstNodeOverall = nodeId === 1;
  
  // Normal lock logic: not student1, not first node, and previous node not completed
  const isNormalLocked = !isStudent1 && !isFirstNodeOverall && !completedNodes.includes(nodeId - 1);
  
  // Trial path lock logic: node > 1 and it's a trial path
  const isTrialLocked = !isStudent1 && isTrialPath && nodeId > 1;
  
  const isLocked = isNormalLocked || isTrialLocked;
  
  // Highlight node if it's the very next one to do
  const isCurrent = !isCompleted && !isLocked;
  
  const isMilestone = nodeId % 4 === 0;

  // Display number: show relative position within floor (1-8 instead of 9-16)
  const displayNumber = ((nodeId - 1) % 8) + 1;

  let Component: any = Link;
  let elementProps: any = { href: `/main/exam?id=${nodeId}${examTheme ? '&theme=' + examTheme : ''}` };

  if (isLocked) {
    if (isTrialLocked) {
      Component = 'button';
      elementProps = { onClick: onUnlockRequest };
    } else {
      Component = 'div';
      elementProps = {};
    }
  }

  return (
    <Component
      {...elementProps}
      className={`group absolute w-[60px] h-[60px] rounded-full transition-all duration-300 flex items-center justify-center font-extrabold text-xl z-10 -translate-x-1/2
        ${!isLocked ? 'cursor-pointer hover:scale-110' : ''}
        ${isTrialLocked ? 'cursor-pointer hover:scale-110 saturate-50' : ''}
        ${isNormalLocked && !isTrialLocked ? 'cursor-not-allowed saturate-0 opacity-60' : ''}
        ${isCompleted || isCurrent
          ? `${theme.currentNode} text-[#1A2024] shadow-[0_4px_10px_rgba(0,0,0,0.1)]`
          : isMilestone
            ? `bg-white ${theme.text} shadow-[0_4px_10px_rgba(0,0,0,0.1)]`
            : `${theme.node} ${(!isLocked || isTrialLocked) ? theme.nodeHover : ''} text-white shadow-sm`
        }
      `}
      style={{ top, left }}
    >
      {isCurrent && !isCompleted && (
        <div className="w-10 h-10 rounded-full bg-white absolute animate-ping opacity-20" />
      )}

      {isCompleted ? (
        <svg width="28" height="28" viewBox="0 0 100 100" fill={theme.text.replace('text-', '') || "currentColor"} className={theme.text}>
          <ellipse cx="26" cy="34" rx="12" ry="18" transform="rotate(-35 26 34)" />
          <ellipse cx="50" cy="20" rx="12" ry="18" transform="rotate(0 50 20)" />
          <ellipse cx="74" cy="34" rx="12" ry="18" transform="rotate(35 74 34)" />
          <path d="M 18 64 Q 50 45 82 64 Q 95 90 50 95 Q 5 90 18 64 Z" />
        </svg>
      ) : isMilestone ? (
        /* Yellow Star for special milestone nodes */
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFDA1A">
          <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.401 8.168L12 19.263l-7.335 3.856 1.401-8.168-5.934-5.787 8.2-1.192z" />
        </svg>
      ) : (
        <span className={isCurrent ? theme.text : "text-white"}>
          {!examTheme ? getSubjectEmoji(getNodeSubject(nodeId)) : displayNumber}
        </span>
      )}

      {/* Trial Path Lock Overlay Overlay */}
      {isTrialLocked && (
        <div className="absolute -top-1 -right-1 bg-white rounded-full p-1 shadow-md">
          <span className="text-[10px] leading-none">💎</span>
        </div>
      )}
    </Component>
  );
}
