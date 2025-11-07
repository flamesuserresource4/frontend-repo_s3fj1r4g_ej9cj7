import React from 'react';
import Spline from '@splinetool/react-spline';
import CTAButton from './CTAButton';

const Hero = () => {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden bg-black">
      {/* Spline 3D scene as immersive background */}
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center text-white">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 drop-shadow">Stop Jadi Penonton.</span>
          <br className="hidden sm:block" />
          <span className="text-white"> Ubah Ide Jadi Konten Viral (dan Cuan) Pakai AI.</span>
        </h1>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-neutral-200 max-w-2xl">
          Tanpa Skill Coding. Tanpa Jago Desain. 100% Cukup Laptop/HP Anda.
        </p>

        <div className="mt-8">
          <CTAButton href="#mulai">Mulai Belajar (Diskon 97% Hari Ini)</CTAButton>
        </div>

        {/* Subtle gradient glow at bottom */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
