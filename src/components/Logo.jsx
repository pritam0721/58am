import React from 'react';

const Logo = ({ darkMode, className = "" }) => (
  <div className={`flex flex-col items-center leading-none ${className}`}>
    <div className="flex items-baseline font-black tracking-tighter text-4xl">
      <span className={darkMode ? 'text-white' : 'text-[#333333]'}>58</span>
      <span className="text-[#00FF00]">A</span>
      <span className={darkMode ? 'text-white' : 'text-[#333333]'}>M</span>
    </div>
    <div className={`text-[9px] uppercase tracking-[0.3em] font-medium mt-1 ${darkMode ? 'text-zinc-400' : 'text-[#333333]'}`}>
      — Marketing St —
    </div>
  </div>
);

export default Logo;
