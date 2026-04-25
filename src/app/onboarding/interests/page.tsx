'use client';

import type { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { account } from '../../../lib/appwrite';

import { account } from '../../../lib/appwrite';

const InterestsPage: NextPage = () => {
    const router = useRouter();
    const [selectedInterest, setSelectedInterest] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const interests = [
        {
            id: 'art',
            title: 'ART',
            desc: 'Drawing & Colors',
            icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 9.95 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.17-.64-1.61-.4-.41-.65-.96-.65-1.57 0-1.21.99-2.2 2.2-2.2H19c2.76 0 5-2.24 5-5 0-4.42-5.37-8.12-12-8.12zM6.5 11.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3-4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3 4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>,
            color: '#FF6B6B',
            bg: 'bg-[#FFE3E3]'
        },
        {
            id: 'computer',
            title: 'COMPUTER',
            desc: 'Robots & Games',
            icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/></svg>,
            color: '#4DABF7',
            bg: 'bg-[#E7F5FF]'
        },
        {
            id: 'sport',
            title: 'SPORT',
            desc: 'Running & Playing',
            icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/><path d="M12 2L12 22M2 12L22 12M5.5 5.5L18.5 18.5M18.5 5.5L5.5 18.5" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>,
            color: '#FF922B',
            bg: 'bg-[#FFF4E6]'
        }
    ];

    const handleConfirm = async () => {
        if (!selectedInterest) return;
        setIsLoading(true);
        
        try {
            // Save to Appwrite preferences
            const currentPrefs = await account.getPrefs();
            await account.updatePrefs({ ...currentPrefs, interest: selectedInterest });
        } catch (error) {
            console.error('Failed to save interest to preferences:', error);
        }

        localStorage.setItem('dummy_interest', selectedInterest);
        localStorage.setItem('dummy_needs_tutorial', 'true'); // Show tutorial when entering dashboard
        router.push('/main/dashboard');
    };

    return (
        <div className="min-h-screen bg-[#F8F9FA] flex flex-col justify-center items-center relative font-sans px-6 pb-12">
            
            <div className="w-full max-w-sm mt-12 mb-8 text-center">
                <h1 className="text-[28px] font-black text-[#343A40] leading-tight mb-2">
                    What do you like?
                </h1>
                <p className="text-[#868E96] font-bold text-[14px]">
                    Choose one favorite activity!
                </p>
            </div>

            <div className="w-full max-w-sm flex flex-col gap-5 flex-grow">
                {interests.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setSelectedInterest(item.id)}
                        className={`w-full p-5 rounded-[32px] flex items-center gap-5 transition-all text-left relative overflow-hidden ${
                            selectedInterest === item.id
                                ? `ring-4 ring-offset-4 scale-[1.02] ${item.bg}`
                                : 'bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:scale-[1.01] hover:bg-gray-50'
                        }`}
                        style={{
                            borderColor: selectedInterest === item.id ? item.color : 'transparent',
                        }}
                    >
                        {/* Selected Indicator Sparkle */}
                        {selectedInterest === item.id && (
                             <div className="absolute top-4 right-4 text-2xl animate-spin-slow">✨</div>
                        )}

                        <div className={`w-[70px] h-[70px] rounded-2xl flex items-center justify-center text-[40px] shadow-sm`} style={{ backgroundColor: selectedInterest === item.id ? 'white' : item.bg }}>
                            {item.icon}
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-[20px] font-black tracking-wider" style={{ color: selectedInterest === item.id ? item.color : '#495057' }}>
                                {item.title}
                            </h2>
                            <p className="font-bold text-[#ADB5BD] text-[13px]">
                                {item.desc}
                            </p>
                        </div>
                    </button>
                ))}
            </div>

            <div className="w-full max-w-sm mt-8">
                <button 
                    onClick={handleConfirm}
                    disabled={!selectedInterest || isLoading}
                    className="w-full bg-[#FFCC00] text-white font-black text-[18px] tracking-widest rounded-full py-5 shadow-[0_6px_0_#D9A000] hover:bg-[#F2C003] active:translate-y-2 active:shadow-none transition-all disabled:opacity-40 disabled:active:translate-y-0 disabled:active:shadow-[0_6px_0_#D9A000]"
                >
                    {isLoading ? 'SAVING...' : "LET'S GO! 🎉"}
                </button>
            </div>

        </div>
    );
};

export default InterestsPage;
