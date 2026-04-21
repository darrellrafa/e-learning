'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { account } from '../../../lib/appwrite';
import { AppwriteException } from 'appwrite';

const LOGIN: NextPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    setIsLoading(true);

    try {
      // 1. Create Appwrite session
      await account.createEmailPasswordSession(email.trim(), password);
      
      // 2. Redirect to dashboard
      router.push('/main/dashboard');
    } catch (err: any) {
      if (err instanceof AppwriteException) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred. Try again!');
      }
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen bg-[#6D40AA] flex flex-col justify-end relative font-sans overflow-hidden">
      
      {/* Background Ellipses */}
      <div className="absolute top-[-50px] sm:top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] sm:w-[900px] sm:h-[900px] pointer-events-none z-0">
        <div className="absolute inset-0 rounded-full border-[50px] sm:border-[70px] border-[#7646B5]" />
        <div className="absolute inset-[50px] sm:inset-[70px] rounded-full border-[50px] sm:border-[70px] border-[#7F4EBE]" />
        <div className="absolute inset-[100px] sm:inset-[140px] rounded-full border-[50px] sm:border-[70px] border-[#8957C9]" />
        <div className="absolute inset-[150px] sm:inset-[210px] rounded-full border-[50px] sm:border-[70px] border-[#9462D6]" />
        <div className="absolute inset-[200px] sm:inset-[280px] rounded-full bg-[#A06CE3]" />
      </div>

      {/* Main Content Card */}
      <div className="w-full sm:max-w-md mx-auto relative z-10 flex flex-col">
        <div className="w-full">
          
          {/* Tabs */}
          <div className="flex px-10 relative z-20 translate-y-[2px]">
            {/* ACTIVE: SIGN IN tab */}
            <div className="bg-white text-[#382654] font-extrabold text-[13px] tracking-widest px-8 py-4 rounded-t-3xl shadow-sm z-10">
              SIGN IN
            </div>
            
            {/* INACTIVE: SIGN UP tab */}
            <Link 
              href="/auth/register"
              className="bg-[#CFCBD4] text-[#938D9A] font-extrabold text-[13px] tracking-widest px-8 py-4 rounded-t-3xl ml-1 block hover:bg-[#c2bdc6] transition-colors"
            >
              SIGN UP
            </Link>
          </div>

          {/* Form Container */}
          <form
            onSubmit={handleLogin}
            className="bg-white w-full rounded-t-[3rem] p-8 pt-14 flex flex-col gap-6 relative z-10 min-h-[70vh]"
          >
            <input 
              type="email" 
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-2 border-[#F3F3F3] rounded-[2rem] px-6 py-4 outline-none focus:border-[#FFCB05] transition-colors font-bold text-[#6D637A] placeholder:text-[#AAA4B3]"
            />
            
            <input 
              type="password" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-2 border-[#F3F3F3] rounded-[2rem] px-6 py-4 outline-none focus:border-[#FFCB05] transition-colors font-bold text-[#6D637A] placeholder:text-[#AAA4B3]"
            />

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border-2 border-red-200 rounded-2xl px-5 py-3 text-center">
                <p className="text-red-500 font-bold text-sm">{error}</p>
              </div>
            )}

            {/* Removed Dummy account hint */}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#FFCC00] text-white font-extrabold text-[15px] tracking-wider rounded-[2rem] py-4 mt-4 hover:bg-[#F2C003] transition-all disabled:opacity-60 disabled:cursor-not-allowed active:scale-95"
            >
              {isLoading ? 'Signing in...' : 'SIGN IN'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LOGIN;
