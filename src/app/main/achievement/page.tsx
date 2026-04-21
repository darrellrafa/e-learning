'use client';

import type { NextPage } from 'next';
import BottomNavigation from '../../../components/BottomNavigation';
import ProfileHeader from '../../../components/ProfileHeader';

const achievements = [
    {
        title: 'Beginner Math',
        description: 'Mastered basic addition and subtraction with high accuracy.',
        progress: 102,
        total: 220,
        icon: '➕',
        color: '#93D334'
    },
    {
        title: 'Daily Streak',
        description: 'Keep the learning fire alive for 7 consecutive days.',
        progress: 151,
        total: 220,
        icon: '🔥',
        color: '#FFCB05'
    },
    {
        title: 'Word Master',
        description: 'Learn over 100 new English vocabularies this month.',
        progress: 129,
        total: 220,
        icon: '📚',
        color: '#7E52B1'
    },
    {
        title: 'Science Explorer',
        description: 'Complete all levels in the Universe & Galaxy module.',
        progress: 181,
        total: 220,
        icon: '🚀',
        color: '#D9A14B'
    },
    {
        title: 'Speed Runner',
        description: 'Solve 20 questions in less than 5 minutes.',
        progress: 187,
        total: 220,
        icon: '⚡',
        color: '#5BA885'
    },
];

const AchievementPage: NextPage = () => {
    return (
        <div className="min-h-screen bg-[#F0FDF4] font-sans pb-24 relative overflow-hidden flex flex-col items-center">

            {/* Dynamic Background Elements */}
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-[#93D334] opacity-5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-[20%] left-[-5%] w-48 h-48 bg-[#5BA885] opacity-10 rounded-full blur-3xl pointer-events-none" />

            {/* Top Profile Section */}
            <ProfileHeader themeTextClass="text-[#5BA885]" />

            {/* Main Content Card */}
            <div className="w-full sm:max-w-md mx-auto relative flex-grow mt-2 px-1">
                <div className="bg-white w-full rounded-t-[40px] min-h-[85vh] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] relative overflow-hidden">

                    {/* Header Label */}
                    <div className="px-8 pt-10 pb-2">
                        <h2 className="text-[#382654] text-xl font-extrabold flex items-center gap-2">
                            Achievements
                            <span className="text-sm bg-[#ECF8EC] text-[#5BA885] px-3 py-1 rounded-full font-bold">
                                {achievements.length}
                            </span>
                        </h2>
                        <p className="text-[#6D637A] text-[13px] font-medium mt-1">Track your legendary milestones</p>
                    </div>

                    {/* Achievement List */}
                    <div className="px-4 mt-8 flex flex-col gap-6">
                        {achievements.map((item, index) => {
                            const percentage = (item.progress / item.total) * 100;
                            const isCompleted = percentage >= 100;

                            return (
                                <div
                                    key={index}
                                    className="relative bg-white rounded-[32px] p-5 group cursor-pointer transition-transform hover:scale-[1.02] active:scale-95"
                                    style={{
                                        border: `3px solid ${item.color}30`,
                                        borderBottom: `8px solid ${item.color}40`,
                                        boxShadow: `0 4px 15px ${item.color}15`
                                    }}
                                >
                                    <div className="flex items-center gap-4">
                                        {/* Playful Icon Container */}
                                        <div
                                            className="w-20 h-20 rounded-[24px] flex items-center justify-center text-4xl shadow-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-12 group-hover:scale-110"
                                            style={{ 
                                                backgroundColor: `${item.color}20`,
                                                border: `3px solid ${item.color}40`
                                            }}
                                        >
                                            <span className="drop-shadow-md">{item.icon}</span>
                                        </div>

                                        <div className="flex-1 pb-1">
                                            <div className="flex justify-between items-end mb-1">
                                                <h3 className="text-[#382654] text-[18px] font-black tracking-wide leading-tight">
                                                    {item.title}
                                                </h3>
                                                {isCompleted && (
                                                    <span className="text-xl animate-bounce">⭐</span>
                                                )}
                                            </div>

                                            <p className="text-[#6D637A] text-[12px] font-bold leading-snug mb-4 opacity-80">
                                                {item.description}
                                            </p>

                                            {/* Chunky Candy Progress Bar */}
                                            <div className="relative w-full h-5 rounded-full overflow-hidden" style={{ backgroundColor: `${item.color}20` }}>
                                                <div
                                                    className="absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ease-out flex items-center justify-end px-2"
                                                    style={{
                                                        width: `${percentage}%`,
                                                        backgroundColor: item.color,
                                                    }}
                                                >
                                                    <div className="w-full h-1/3 bg-white/30 rounded-full absolute top-1 left-2 w-[calc(100%-16px)]" />
                                                </div>
                                            </div>

                                            <div className="flex justify-between mt-2">
                                                <span className="text-[11px] font-black tracking-wider uppercase" style={{ color: item.color }}>
                                                    {item.progress} / {item.total} EXP
                                                </span>
                                                <span className="text-[12px] font-black" style={{ color: item.color }}>
                                                    {Math.min(100, Math.round(percentage))}%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="h-20" /> {/* Bottom Spacing */}
                </div>
            </div>

            <BottomNavigation />


        </div>
    );
};

export default AchievementPage;
