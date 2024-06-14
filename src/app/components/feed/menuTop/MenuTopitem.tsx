

import React from 'react';

export const MenuitemShare = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      className="h-4 w-fit py-4 px-4 text-center 
        items-center gap-2 justify-center flex rounded-full
        border border-stroke color-constrast hover:bg-black/10
        duration-200
        transition-all"
    >
     {children}
    </button>
  );
};
