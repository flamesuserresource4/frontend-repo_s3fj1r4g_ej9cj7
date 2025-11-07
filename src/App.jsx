import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import CTAButton from './components/CTAButton';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main className="pt-14">
        <Hero />
        <ValueProps />

        {/* Mini CTA section */}
        <section className="bg-gradient-to-b from-neutral-950 to-black py-16">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold">Mulai Hari Ini, Rasakan Bedanya Minggu Ini</h2>
            <p className="mt-3 text-neutral-300">Akses materi lengkap, studi kasus, dan prompt siap pakai untuk menyalakan mesin konten Anda.</p>
            <div className="mt-6">
              <CTAButton href="#mulai">Ambil Diskon 97% Sekarang</CTAButton>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 bg-black/70">
          <div className="mx-auto max-w-7xl px-6 py-8 text-center text-sm text-neutral-400">
            © {new Date().getFullYear()} ViralX AI. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
