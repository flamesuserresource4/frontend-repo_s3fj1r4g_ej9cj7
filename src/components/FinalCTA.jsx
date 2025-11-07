import React, { useEffect, useState } from 'react';
import CTAButton from './CTAButton';

const formatTime = (secs) => {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  const mm = String(m).padStart(2, '0');
  const ss = String(s).padStart(2, '0');
  return `00:${mm}:${ss}`;
};

const FinalCTA = () => {
  const [remaining, setRemaining] = useState(15 * 60);

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining((r) => (r > 0 ? r - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="final-cta" className="bg-black text-white py-16">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-neutral-300">Harga Spesial Berakhir Dalam:</p>
        <div className="mt-3 text-5xl font-extrabold text-amber-400 tracking-wider tabular-nums">
          {formatTime(remaining)}
        </div>
        <div className="mt-8">
          <CTAButton href="#checkout">Tambah ke Keranjang (Rp 199.800)</CTAButton>
        </div>
        <p className="mt-3 text-sm text-neutral-400">Akses Lifetime · Garansi Bimbingan · Update Gratis</p>
      </div>
    </section>
  );
};

export default FinalCTA;
