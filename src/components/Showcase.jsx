import React from 'react';

const samples = [
  { prompt: 'Kucing astronot sinematik', img: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=1200&auto=format&fit=crop' },
  { prompt: 'Kota cyberpunk hujan neon', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop' },
  { prompt: 'Samurai futuristik di padang pasir', img: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1200&auto=format&fit=crop' },
  { prompt: 'Makro partikel emas berkilau', img: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?q=80&w=1200&auto=format&fit=crop' },
  { prompt: 'Hutan berkabut ala film', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop' },
  { prompt: 'Arsitektur minimalis monokrom', img: 'https://images.unsplash.com/photo-1529429612779-c8e40ef2f36e?q=80&w=1200&auto=format&fit=crop' },
  { prompt: 'Portrait neon rimlight', img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop' },
  { prompt: 'Gunung es sinematik', img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop' },
];

const Showcase = () => {
  // Duplicate for seamless loop
  const list = [...samples, ...samples];
  return (
    <section className="bg-black text-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold">Lihat Apa yang Dibuat Siswa Kami (Hanya dalam Hitungan Menit).</h3>
          <p className="mt-2 text-neutral-300">Mereka Mulai dari Nol, Sama Seperti Anda.</p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex animate-[scroll_30s_linear_infinite] gap-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            {list.map((item, idx) => (
              <div key={idx} className="relative w-[380px] shrink-0 rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
                <div className="p-4 text-sm text-neutral-300">Prompt: <span className="text-white font-medium">{item.prompt}</span></div>
                <div className="aspect-video w-full">
                  <img src={item.img} alt={item.prompt} className="h-full w-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </section>
  );
};

export default Showcase;
