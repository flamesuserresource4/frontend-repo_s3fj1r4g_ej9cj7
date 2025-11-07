import React from 'react';
import Accordion from './Accordion';

const Curriculum = () => {
  const items = [
    {
      title: 'Modul 1: AI Mindset & Zero-Code Viral Loop™',
      content:
        "Membongkar false belief ('AI itu sulit') dan membangun fondasi. Anda akan belajar framework rahasia 5 langkah bikin konten dari HP.",
    },
    {
      title: 'Modul 2: Hook Prompt Kit (Ide & Script Viral)',
      content:
        'Cara menggunakan AI untuk riset ide tak terbatas dan menulis script 15 detik pertama yang dijamin menghentikan scroll.',
    },
    {
      title: 'Modul 3: Instant Visuals (Text-to-Image & Image-to-Video)',
      content:
        'Mengubah teks biasa menjadi cinematic video dan gambar ultra-realistis. Menguasai tools rahasia untuk voice-over dan musik AI.',
    },
    {
      title: 'Modul 4: Repurpose Engine & Auto-Posting',
      content:
        'Sistem 1 ide menjadi 3 format (TikTok, Reels, Shorts). Strategi upload otomatis dan hashtag AI untuk hasil maksimal.',
    },
    {
      title: 'Modul 5: Monetization Hacks (Cara Cuan dari AI)',
      content:
        'Studi kasus step-by-step mengubah skill AI Anda menjadi income jutaan (Jasa Konten, Affiliate, Jual Template).',
    },
    {
      title: 'Modul 6: The Toolkit (Bonus & Tools Premium)',
      content:
        'Akses langsung ke 100+ AI tools premium, template CapCut Pro, dan resource rahasia yang kami gunakan di JR GROUP.',
    },
  ];

  return (
    <section className="bg-[#101010] text-white py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold">Kurikulum Lengkap: Dari Nol Menjadi 'Viral Creator'</h3>
          <p className="mt-2 text-neutral-300">32+ Chapter Step-by-Step yang Dirancang untuk Pemula (Tanpa Coding).</p>
        </div>
        <Accordion items={items} accent="#F0B90B" />
      </div>
    </section>
  );
};

export default Curriculum;
