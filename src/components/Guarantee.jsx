import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Guarantee = () => {
  return (
    <section className="bg-neutral-950 text-white py-16">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-2xl border border-amber-400/50 bg-black/40 p-8 text-center">
          <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-amber-400/20">
            <ShieldCheck className="h-8 w-8 text-amber-400" />
          </div>
          <h3 className="text-2xl font-bold">Garansi 100% Hasil Anda.</h3>
          <p className="mt-3 text-neutral-300">
            Masih Takut Gak Ngerti? Jika Anda Belum Bisa Membuat Konten AI Setelah Menyelesaikan Kursus, Kami Akan Berikan Sesi Coaching Tambahan Gratis Sampai Bisa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
