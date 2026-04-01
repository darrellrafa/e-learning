import type { NextPage } from 'next';
import Link from 'next/link';

const REGISTER: NextPage = () => {
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
            {/* INACTIVE: SING IN tab */}
            <Link 
              href="/auth/login"
              className="bg-[#CFCBD4] text-[#938D9A] font-extrabold text-[13px] tracking-widest px-8 py-4 rounded-t-3xl shadow-sm block hover:bg-[#c2bdc6] transition-colors"
            >
              SING IN
            </Link>
            
            {/* ACTIVE: SING UP tab */}
            <div className="bg-white text-[#382654] font-extrabold text-[13px] tracking-widest px-8 py-4 rounded-t-3xl ml-1 z-10">
              SING UP
            </div>
          </div>

          {/* Form Container */}
          <div className="bg-white w-full rounded-t-[3rem] p-8 pt-12 flex flex-col gap-5 relative z-10 min-h-[70vh]">
            
            <input 
              type="text" 
              placeholder="User Name" 
              className="w-full border-2 border-[#F3F3F3] rounded-[2rem] px-6 py-4 outline-none focus:border-[#FFCB05] transition-colors font-bold text-[#6D637A] placeholder:text-[#AAA4B3]"
            />
            
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full border-2 border-[#F3F3F3] rounded-[2rem] px-6 py-4 outline-none focus:border-[#FFCB05] transition-colors font-bold text-[#6D637A] placeholder:text-[#AAA4B3]"
            />

            <input 
              type="password" 
              placeholder="Confirm Password" 
              className="w-full border-2 border-[#F3F3F3] rounded-[2rem] px-6 py-4 outline-none focus:border-[#FFCB05] transition-colors font-bold text-[#6D637A] placeholder:text-[#AAA4B3]"
            />

            <button className="w-full bg-[#FFCC00] text-white font-extrabold text-[15px] tracking-wider rounded-[2rem] py-4 mt-6 hover:bg-[#F2C003] transition-colors">
              SING UP
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default REGISTER;
