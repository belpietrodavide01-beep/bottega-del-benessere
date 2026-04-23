import React from 'react';

const Logo = ({ className = "" }) => {
  return (
    <div className={`flex flex-col items-center justify-center text-black leading-none select-none ${className}`} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
      <span className="text-[1.8rem] md:text-[2.2rem] font-medium tracking-[0.1em] uppercase">La Bottega</span>
      <span className="text-[1.1rem] md:text-[1.3rem] font-light tracking-[0.3em] uppercase -mt-1 opacity-90">Del Benessere</span>
    </div>
  );
};

export default Logo;
