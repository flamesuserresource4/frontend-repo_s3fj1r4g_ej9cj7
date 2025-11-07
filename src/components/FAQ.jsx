import React from 'react';
import Accordion from './Accordion';

const data = [
  {
    title: 'Kursus ini cocok untuk siapa?',
    content: 'Untuk pemula total hingga yang ingin mempercepat workflow konten dengan AI. Tidak perlu latar belakang teknis.',
  },
  {
    title: 'Apakah saya perlu bisa coding?',
    content: 'Tidak. Semua materi disusun zero-code. Anda cukup mengikuti langkah yang ditunjukkan di layar.',
  },
  {
    title: 'Berapa lama sampai bisa hasil?',
    content: 'Rata-rata siswa kami menghasilkan konten pertama dalam 24-72 jam dengan belajar 30 menit/hari.',
  },
  {
    title: 'Apakah ada garansi uang kembali?',
    content: 'Kami memberikan garansi hasil berupa coaching tambahan gratis hingga bisa. Tidak ada risiko untuk Anda.',
  },
  {
    title: 'Apakah dapat akses seumur hidup?',
    content: 'Ya. Semua update materi dan tools baru akan otomatis Anda dapatkan.',
  },
  {
    title: 'Apakah ada komunitas?',
    content: 'Ada. Anda akan bergabung di komunitas JR GROUP untuk diskusi, review, dan bimbingan.',
  },
  {
    title: 'Bisa diakses dari HP?',
    content: 'Bisa. Semua materi dioptimalkan untuk perangkat mobile dan desktop.',
  },
  {
    title: 'Apakah materi ini berbeda dari YouTube?',
    content: 'Sangat berbeda. Kurikulum kami runut A-Z, siap praktik, dan dilengkapi tools premium.',
  },
  {
    title: 'Butuh aplikasi berbayar?',
    content: 'Kami siapkan opsi gratis dan premium. Anda bisa mulai tanpa biaya tambahan.',
  },
  {
    title: 'Kapan kelas dimulai?',
    content: 'Akses langsung setelah pembayaran. Tidak perlu menunggu.',
  },
  {
    title: 'Apakah ada sertifikat?',
    content: 'Ada. Sertifikat digital setelah menyelesaikan modul inti.',
  },
];

const FAQ = () => {
  return (
    <section className="bg-[#101010] text-white py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold">❓ Masih Ragu? Temukan Jawaban Anda di Sini (FAQ)</h3>
        </div>
        <Accordion items={data} accent="#F0B90B" />
      </div>
    </section>
  );
};

export default FAQ;
