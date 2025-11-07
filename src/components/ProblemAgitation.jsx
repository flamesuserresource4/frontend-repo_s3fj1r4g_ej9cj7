import React from 'react';
import { AlertTriangle, Zap, BookOpen } from 'lucide-react';

const cards = [
  {
    icon: AlertTriangle,
    text: 'Takut Ketinggalan Tren Gen-AI dan Bingung Mulai dari Mana?',
  },
  {
    icon: Zap,
    text: 'Pernah Coba Tools AI Tapi Hasilnya Jelek atau Fitur Terbatas?',
  },
  {
    icon: BookOpen,
    text: 'Beli Kursus Mahal Tapi Isinya Cuma Teori dan E-book Membosankan?',
  },
];

const ProblemAgitation = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {cards.map(({ icon: Icon, text }) => (
            <div key={text} className="rounded-2xl border border-white/10 bg-white/5 p-6 flex items-start gap-4">
              <div className="shrink-0 rounded-full p-2 bg-amber-400/10">
                <Icon className="h-6 w-6 text-amber-400" />
              </div>
              <p className="font-semibold text-sm sm:text-base">{text}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-base sm:text-lg font-medium text-amber-300">
          Jika YA, Anda Berada di Tempat yang Tepat.
        </p>
      </div>
    </section>
  );
};

export default ProblemAgitation;
