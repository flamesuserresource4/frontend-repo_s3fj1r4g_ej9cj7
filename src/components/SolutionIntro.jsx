import React from 'react';
import CTAButton from './CTAButton';

const DeviceMockup = () => {
  return (
    <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-2">
      {/* Laptop mock */}
      <div className="relative mx-auto aspect-[16/10] w-full max-w-xl rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-3 shadow-2xl">
        <div className="h-full w-full rounded-lg bg-black/80 p-4">
          <div className="mb-4 flex items-center justify-between text-xs text-neutral-400">
            <span>JR AICADEMY • Dashboard</span>
            <span>v2.5</span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="h-24 rounded-md bg-gradient-to-br from-amber-500/30 to-amber-300/20" />
                <div className="mt-2 h-2 w-2/3 rounded bg-white/20" />
                <div className="mt-1 h-2 w-1/2 rounded bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Tablet + Phone stack */}
      <div className="flex w-full items-center justify-center gap-6">
        <div className="aspect-[3/4] w-40 rounded-3xl border border-white/10 bg-white/5 p-2 shadow-xl">
          <div className="h-full w-full rounded-2xl bg-black/80 p-3">
            <div className="h-4 w-20 rounded bg-white/20" />
            <div className="mt-3 space-y-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-3 w-full rounded bg-white/10" />
              ))}
            </div>
          </div>
        </div>
        <div className="aspect-[9/19] w-28 rounded-3xl border border-white/10 bg-white/5 p-1 shadow-xl">
          <div className="h-full w-full rounded-2xl bg-black/80 p-2">
            <div className="h-24 rounded-lg bg-gradient-to-br from-amber-400/30 to-amber-200/20" />
            <div className="mt-2 h-2 w-3/4 rounded bg-white/20" />
            <div className="mt-1 h-2 w-1/2 rounded bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
};

const SolutionIntro = () => {
  return (
    <section className="bg-neutral-950 text-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold">
            Memperkenalkan <span className="text-amber-400">JR AICADEMY</span>
          </h2>
          <p className="mt-3 text-neutral-300 max-w-2xl mx-auto">
            Satu-Satunya Kursus AI Step-by-Step yang Mengubah Anda dari 'Gaptek' menjadi 'Creator Viral'—Dalam Hitungan Hari.
          </p>
          <div className="mt-6">
            <CTAButton href="#final-cta">Coba Sekarang</CTAButton>
          </div>
        </div>
        <DeviceMockup />
      </div>
    </section>
  );
};

export default SolutionIntro;
