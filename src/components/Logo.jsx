import React from 'react';

const Logo = ({ className = "" }) => {
  return (
    <div className={`flex items-center justify-center select-none ${className}`}>
      <img 
        src="/logobenessere.svg" 
        alt="Logo La Bottega del Benessere" 
        className="w-14 md:w-16 h-auto object-contain transition-all duration-300"
        style={{ filter: 'brightness(0)' }}
      />
    </div>
  );
};

export default Logo;

