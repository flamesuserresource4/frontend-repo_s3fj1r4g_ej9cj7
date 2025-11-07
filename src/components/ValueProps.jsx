import React from 'react';
import { Rocket, Star, Shield } from 'lucide-react';

const items = [
  {
    icon: Rocket,
    title: 'Eksekusi Cepat',
    desc: 'Template dan workflow siap pakai. Dari ide ke postingan dalam hitungan menit.'
  },
  {
    icon: Star,
    title: 'Hasil Kelas Pro',
    desc: 'Output visual sinematik dengan AI tools terkurasi. Tanpa pengalaman desain.'
  },
  {
    icon: Shield,
    title: 'Jalan Pintas Aman',
    desc: 'Belajar strategi yang sudah terbukti—hindari trial & error yang buang waktu.'
  }
];

const ValueProps = () => {
  return (
    <section className="relative bg-neutral-950 text-white py-16" id="mulai">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <Icon className="h-8 w-8 text-amber-400" />
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
