'use client';

import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import BottomNavigation from '../../../components/BottomNavigation';
import ProfileHeader from '../../../components/ProfileHeader';
import { databases, account } from '../../../lib/appwrite';
import { Query } from 'appwrite';

interface AchievementData {
    title: string;
    description: string;
    progress: number;
    total: number;
    icon: string;
    color: string;
}

const AchievementPage: NextPage = () => {
    const [achievements, setAchievements] = useState<AchievementData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [exp, setExp] = useState<number>(0);
    const [nextLevelExp, setNextLevelExp] = useState<number>(400);

    useEffect(() => {
        const fetchAchievements = async () => {
            try {
                // 1. Dapatkan info user yang sedang login
                const user = await account.get();
                const isAdmin = user.name?.toLowerCase() === 'admin' || user.name === 'Alex';
                
                // 2. Ambil data pencapaian dari database
                const dbId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
                const collId = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ACHIEVEMENTS_ID!;
                
                const response = await databases.listDocuments(
                    dbId,
                    collId,
                    [] // Fetch all global achievements without filtering by userId
                );

                // Deduplicate achievements by title in case of multiple entries
                let uniqueDocuments = [];
                const seenTitles = new Set();
                for (const doc of response.documents) {
                    if (!seenTitles.has(doc.title)) {
                        seenTitles.add(doc.title);
                        uniqueDocuments.push(doc);
                    }
                }

                // Fallback achievements if Appwrite collection is empty
                if (uniqueDocuments.length === 0) {
                    uniqueDocuments = [
                        { title: "Great Beginner", description: "Complete your first lesson.", total: 100, icon: "🌱", color: "#93D334" },
                        { title: "Knowledge Explorer", description: "Collect 500 EXP from various materials.", total: 500, icon: "🧭", color: "#3B82F6" },
                        { title: "Star Student", description: "Collect 1,000 EXP and become the star of the class.", total: 1000, icon: "🏆", color: "#FFCB05" },
                        { title: "Master of Knowledge", description: "Reach a total of 2,400 EXP.", total: 2400, icon: "👑", color: "#8B5CF6" }
                    ];
                }

                // Calculate dynamic EXP based on actual EXP scores
                const prefs = await account.getPrefs();
                const localUsername = user.name || 'guest';
                let calculatedExp = 0;
                for (let i = 1; i <= 24; i++) {
                  // Cloud pref first, fallback to localStorage
                  const cloudExp = typeof prefs[`node_${i}_exp`] === 'number' ? prefs[`node_${i}_exp`] : parseInt(prefs[`node_${i}_exp`] || '0');
                  const localExp = parseInt(localStorage.getItem(`${localUsername}_node_${i}_exp`) || '0');
                  const nodeExp = Math.max(cloudExp, localExp);
                  
                  if (nodeExp > 0) {
                    calculatedExp += nodeExp;
                  } else if (prefs[`node_${i}_completed`] === true || localStorage.getItem(`${localUsername}_node_${i}_completed`) === 'true') {
                    calculatedExp += 100; // Fallback
                  }
                }
                const calculatedLevel = Math.floor(calculatedExp / 400) + 1;
                const calculatedNextLevelExp = calculatedLevel * 400;

                setExp(calculatedExp);
                setNextLevelExp(calculatedNextLevelExp);

                // Map results to use dynamic EXP for progress
                const fetchedData = uniqueDocuments.map((doc: any) => ({
                    title: doc.title,
                    description: doc.description,
                    progress: Math.min(calculatedExp, doc.total),
                    total: doc.total,
                    icon: doc.icon,
                    color: doc.color
                }));

                // Sort so completed achievements are at the top
                fetchedData.sort((a, b) => {
                    const aCompleted = a.progress >= a.total ? 1 : 0;
                    const bCompleted = b.progress >= b.total ? 1 : 0;
                    return bCompleted - aCompleted;
                });

                setAchievements(fetchedData);
            } catch (err) {
                console.error("Gagal mengambil data dari Appwrite:", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAchievements();

    }, []);

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
                    <div className="px-8 pt-10 pb-2 flex justify-between items-center">
                        <div>
                            <h2 className="text-[#382654] text-xl font-extrabold flex items-center gap-2">
                                Achievements
                                <span className="text-sm bg-[#ECF8EC] text-[#5BA885] px-3 py-1 rounded-full font-bold">
                                    {achievements.length}
                                </span>
                            </h2>
                            <p className="text-[#6D637A] text-[13px] font-medium mt-1">Track your legendary milestones</p>
                        </div>
                        <div className="text-right flex flex-col items-end">
                            <span className="text-[10px] font-extrabold text-[#5BA885] tracking-widest">TOTAL EXP</span>
                            <span className="text-[14px] font-extrabold text-[#93D334]">{exp.toLocaleString('id-ID')} / {nextLevelExp.toLocaleString('id-ID')}</span>
                        </div>
                    </div>

                    {/* Achievement List */}
                    <div className="px-4 mt-8 flex flex-col gap-6">
                        {isLoading && (
                            <div className="flex justify-center p-10">
                                <span className="animate-pulse text-[#382654] font-bold">Fetching data... 🚀</span>
                            </div>
                        )}
                        {!isLoading && achievements.length === 0 && (
                            <div className="flex flex-col items-center p-10 text-center opacity-60">
                                <span className="text-4xl mb-2">🍃</span>
                                <p className="text-[#382654] font-bold text-sm">No achievements found.</p>
                                <p className="text-[#6D637A] text-xs">Appwrite collection might be empty.</p>
                            </div>
                        )}
                        {!isLoading && achievements.map((item, index) => {
                            const percentage = (item.progress / item.total) * 100;
                            const isCompleted = percentage >= 100;

                            return (
                                <div
                                    key={index}
                                    className={`relative bg-white rounded-[32px] p-5 group transition-transform ${isCompleted ? 'hover:scale-[1.02] active:scale-95 cursor-pointer' : 'opacity-90 grayscale-[40%]'}`}
                                    style={{
                                        border: `3px solid ${isCompleted ? item.color + '30' : '#E2E8F0'}`,
                                        borderBottom: `8px solid ${isCompleted ? item.color + '40' : '#CBD5E1'}`,
                                        boxShadow: `0 4px 15px ${isCompleted ? item.color + '15' : 'rgba(0,0,0,0.02)'}`
                                    }}
                                >
                                    <div className="flex items-center gap-4">
                                        {/* Playful Icon Container */}
                                        <div
                                            className={`w-20 h-20 rounded-[24px] flex items-center justify-center text-4xl shadow-sm transition-all duration-500 ${isCompleted ? 'group-hover:-translate-y-2 group-hover:rotate-12 group-hover:scale-110' : ''}`}
                                            style={{ 
                                                backgroundColor: isCompleted ? `${item.color}20` : '#F1F5F9',
                                                border: `3px solid ${isCompleted ? item.color + '40' : '#E2E8F0'}`
                                            }}
                                        >
                                            <span className={`drop-shadow-md ${!isCompleted && 'opacity-50'}`}>{item.icon}</span>
                                        </div>

                                        <div className="flex-1 pb-1">
                                            <div className="flex justify-between items-end mb-1">
                                                <h3 className="text-[#382654] text-[18px] font-black tracking-wide leading-tight">
                                                    {item.title}
                                                </h3>
                                                {isCompleted ? (
                                                    <span className="text-xl animate-bounce">⭐</span>
                                                ) : (
                                                    <span className="text-xl opacity-30 grayscale">🔒</span>
                                                )}
                                            </div>

                                            <p className="text-[#6D637A] text-[12px] font-bold leading-snug mb-4 opacity-80">
                                                {item.description}
                                            </p>

                                            {/* Chunky Candy Progress Bar */}
                                            <div className="relative w-full h-5 rounded-full overflow-hidden" style={{ backgroundColor: isCompleted ? `${item.color}20` : '#F1F5F9' }}>
                                                <div
                                                    className="absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ease-out flex items-center justify-end px-2"
                                                    style={{
                                                        width: `${percentage}%`,
                                                        backgroundColor: isCompleted ? item.color : '#94A3B8',
                                                    }}
                                                >
                                                    <div className="w-full h-1/3 bg-white/30 rounded-full absolute top-1 left-2 w-[calc(100%-16px)]" />
                                                </div>
                                            </div>

                                            <div className="flex justify-between mt-2">
                                                <span className="text-[11px] font-black tracking-wider uppercase" style={{ color: isCompleted ? item.color : '#64748B' }}>
                                                    {item.progress.toLocaleString('id-ID')} / {item.total.toLocaleString('id-ID')} EXP
                                                </span>
                                                <span className="text-[12px] font-black" style={{ color: isCompleted ? item.color : '#64748B' }}>
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
