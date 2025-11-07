import React from 'react';
import CTAButton from './CTAButton';

const items = [
  { label: 'Kursus Lengkap 32+ Chapter', value: 'Rp 4.999.000' },
  { label: 'Update Materi & Tools AI Terbaru', value: 'Rp 1.999.000' },
  { label: 'BONUS: 100+ AI Tools Premium Gratis', value: 'Rp 2.500.000' },
  { label: 'BONUS: Bimbingan Langsung JR GROUP', value: 'Tak Ternilai' },
  { label: "BONUS: Tutorial 'Cara Cuan dari AI'", value: 'Rp 999.000' },
  { label: 'BONUS: Toolkit AI Terbaik 2025', value: 'Rp 1.200.000' },
];

const OfferStack = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="text-center text-2xl sm:text-3xl font-bold">Apa yang Anda Dapatkan (Akses Seumur Hidup):</h3>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <ul className="space-y-4">
              {items.map((it) => (
                <li key={it.label} className="flex items-center justify-between gap-4">
                  <span className="text-neutral-200">{it.label}</span>
                  <span className="font-semibold text-white/90 line-through">{it.value}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-right text-neutral-300">Total Nilai: <span className="font-semibold text-white">Rp 11.697.000</span></p>
          </div>
          <div className="rounded-2xl border border-amber-400/40 bg-gradient-to-b from-amber-400/10 to-transparent p-6">
            <p className="text-neutral-300">Dapatkan Semuanya Hari Ini Hanya:</p>
            <p className="mt-2 text-2xl text-neutral-400 line-through">Rp 11.697.000</p>
            <p className="mt-1 text-5xl font-extrabold text-amber-400">Rp 199.800</p>
            <div className="mt-6">
              <CTAButton href="#final-cta">Daftar Sekarang</CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferStack;
