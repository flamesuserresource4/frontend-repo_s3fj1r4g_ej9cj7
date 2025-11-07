import React from 'react';
import CTAButton from './CTAButton';

const NavBar = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-20 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-2 text-white font-semibold">
          <span className="inline-block h-2 w-2 rounded-full bg-amber-400" />
          <span>JR AICADEMY</span>
        </a>
        <div className="hidden sm:flex items-center gap-6 text-sm text-neutral-200">
          <a href="#mulai" className="hover:text-white">Manfaat</a>
          <a href="#" className="hover:text-white">Testimoni</a>
          <a href="#" className="hover:text-white">FAQ</a>
        </div>
        <div className="flex items-center gap-3">
          <CTAButton href="#mulai">Mulai Sekarang</CTAButton>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
