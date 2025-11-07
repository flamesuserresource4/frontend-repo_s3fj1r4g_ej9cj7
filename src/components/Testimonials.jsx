import React, { useState } from 'react';
import { Play } from 'lucide-react';

const testiData = [
  {
    quote:
      'Saya paling gaptek di kantor. Mikir AI itu pusing. Tapi materi JR AICADEMY step-by-step banget. Sekarang saya rutin bikin konten promosi sendiri!',
    name: 'Budi',
    role: 'Staff Admin',
    img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1200&auto=format&fit=crop',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    quote:
      'Sambil kerja, saya belajar 30 menit sehari. Dalam seminggu, short video pertama saya tembus 100rb views. Gak nyangka secepat ini.',
    name: 'Rina',
    role: 'Karyawan Swasta',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    quote:
      'YouTube bikin bingung, ilmunya loncat-loncat. Di sini runut dari A-Z. Worth every penny, apalagi dapat tools premium gratis.',
    name: 'Gilang',
    role: 'Mahasiswa',
    img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    quote:
      'Awalnya ragu Rp 199.800 bisa apa. Ternyata ini shortcut. Saya dapat project content creation AI pertama saya, nilainya 5 juta. Balik modal!',
    name: 'Sarah',
    role: 'Freelancer',
    img: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1200&auto=format&fit=crop',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    quote:
      'Target saya cuma biar bisa bikin konten buat jualan online. Sekarang malah keterusan jadi AI Content Creator. Income tambahan 8 juta/bulan.',
    name: 'Tyo',
    role: 'Pengusaha UMKM',
    img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    quote:
      'Materinya praktikal banget, langsung praktik. Komunitasnya aktif dan suportif.',
    name: 'Lina',
    role: 'Content Creator',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
];

const VideoModal = ({ open, onClose, src }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={onClose}>
      <div className="relative w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
        <video controls autoPlay className="w-full rounded-xl">
          <source src={src} type="video/mp4" />
        </video>
        <button onClick={onClose} className="absolute -top-3 -right-3 rounded-full bg-white text-black px-3 py-1 text-sm font-semibold shadow">Close</button>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [modal, setModal] = useState({ open: false, src: '' });

  return (
    <section className="bg-neutral-950 text-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold">Apa Kata Mereka</h3>
          <p className="mt-2 text-neutral-300">Cerita nyata yang menghapus keraguan.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testiData.map((t, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <div className="relative aspect-video w-full">
                <img src={t.img} alt={t.name} className="h-full w-full object-cover" />
                <button
                  onClick={() => setModal({ open: true, src: t.video })}
                  className="absolute inset-0 grid place-items-center"
                  aria-label={`Play video testimonial ${t.name}`}
                >
                  <div className="h-14 w-14 rounded-full bg-amber-400/90 text-black grid place-items-center shadow-lg">
                    <Play className="h-7 w-7" />
                  </div>
                </button>
              </div>
              <div className="p-5">
                <p className="text-sm text-neutral-200 italic">“{t.quote}”</p>
                <p className="mt-3 text-sm text-neutral-400">{t.name} • {t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <VideoModal open={modal.open} src={modal.src} onClose={() => setModal({ open: false, src: '' })} />
    </section>
  );
};

export default Testimonials;
