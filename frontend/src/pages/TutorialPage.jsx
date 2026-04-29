<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiBookOpen, FiMessageSquare, FiPlay, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import api from '../utils/api';
=======
import { FiBookOpen, FiClock, FiHelpCircle, FiMessageCircle, FiUserCheck } from 'react-icons/fi';
>>>>>>> 74cdaa9270bf364eebb2185b2e549a0ec419c348

const interviewTips = [
  'Kenali profil perusahaan sebelum wawancara.',
  'Siapkan jawaban untuk pertanyaan umum seperti kelebihan dan kelemahan.',
  'Gunakan struktur STAR saat menjelaskan pengalaman kerja.',
  'Perhatikan bahasa tubuh, kontak mata, dan intonasi bicara.',
  'Siapkan pertanyaan balik untuk interviewer.',
];

const psychotestTips = [
  'Kerjakan soal logika dan numerik secara rutin.',
  'Latih manajemen waktu agar tidak panik saat tes.',
  'Pahami instruksi tiap jenis tes sebelum menjawab.',
  'Jaga kondisi fisik: tidur cukup dan makan sebelum tes.',
];

export default function TutorialPage() {
  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-2xl gradient-accent p-8 lg:p-10">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative z-10">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">Tutorial</h1>
          <p className="text-white/90 max-w-2xl">
            Belajar lewat kuis, tips wawancara, dan latihan psikotes untuk persiapan dunia kerja.
          </p>
        </div>
      </section>

      <section className="glass rounded-2xl p-6 sm:p-7">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white">
            <FiBookOpen />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-text-primary">Kuis</h2>
            <p className="text-sm text-text-secondary">Link kuis akan disediakan pada update berikutnya.</p>
          </div>
        </div>
        <div className="bg-bg-card border border-border rounded-xl p-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <FiClock />
            <span>Status: link kuis nanti disiapkan</span>
          </div>
          <button
            disabled
            className="px-4 py-2 rounded-lg bg-bg-surface border border-border text-text-muted text-sm cursor-not-allowed"
          >
            Segera Hadir
          </button>
        </div>
      </section>

      <section className="glass rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <FiMessageCircle className="text-primary" />
          <h2 className="text-lg font-semibold text-text-primary">Tips and Trick Wawancara</h2>
        </div>
        <ul className="space-y-3">
          {interviewTips.map((tip) => (
            <li key={tip} className="bg-bg-card border border-border rounded-xl p-3 text-sm text-text-secondary">
              {tip}
            </li>
          ))}
        </ul>
      </section>

      <section className="glass rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <FiUserCheck className="text-secondary" />
          <h2 className="text-lg font-semibold text-text-primary">Test Psikotes</h2>
        </div>
        <ul className="space-y-3 mb-4">
          {psychotestTips.map((tip) => (
            <li key={tip} className="bg-bg-card border border-border rounded-xl p-3 text-sm text-text-secondary">
              {tip}
            </li>
          ))}
        </ul>
        <div className="rounded-xl border border-border bg-bg-card p-4 text-xs text-text-muted flex items-center gap-2">
          <FiHelpCircle />
          <span>Bagian latihan soal psikotes online bisa ditautkan saat link kuis sudah siap.</span>
        </div>
      </section>
    </div>
  );
}
