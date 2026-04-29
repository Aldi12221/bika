import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiBookOpen, FiMessageSquare, FiPlay, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import api from '../utils/api';

const interviewTips = [
  { q: 'Ceritakan tentang diri Anda', a: 'Fokus pada pengalaman profesional, skill utama, dan pencapaian yang relevan. Jangan ceritakan kehidupan pribadi terlalu detail. Gunakan format: Masa Lalu → Sekarang → Masa Depan.' },
  { q: 'Apa kelebihan Anda?', a: 'Sebutkan 2-3 kelebihan spesifik yang relevan dengan posisi. Berikan contoh konkret bagaimana kelebihan tersebut membantu pekerjaan sebelumnya.' },
  { q: 'Apa kelemahan Anda?', a: 'Sebutkan kelemahan genuine tapi bukan yang fatal untuk posisi tersebut. Tunjukkan bahwa kamu sedang berusaha memperbaikinya.' },
  { q: 'Mengapa ingin bekerja di sini?', a: 'Riset perusahaan terlebih dahulu. Hubungkan visi perusahaan dengan tujuan karirmu. Tunjukkan antusiasme yang tulus.' },
  { q: 'Di mana Anda 5 tahun ke depan?', a: 'Tunjukkan ambisi yang realistis dan selaras dengan jenjang karir di perusahaan tersebut.' },
  { q: 'Mengapa kami harus memilih Anda?', a: 'Rangkum skill, pengalaman, dan value unik yang kamu bawa. Hubungkan dengan kebutuhan perusahaan.' },
];

export default function TutorialPage() {
  const [quizzes, setQuizzes] = useState([]);
  const [activeTab, setActiveTab] = useState('kuis');
  const [openTip, setOpenTip] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    api.getQuizzes().then(d => Array.isArray(d) && setQuizzes(d)).catch(() => {});
  }, []);

  const umumQuizzes = quizzes.filter(q => q.kategori === 'umum');
  const psikotesQuizzes = quizzes.filter(q => q.kategori === 'psikotes');

  const tabs = [
    { id: 'kuis', label: 'Kuis', icon: <FiBookOpen /> },
    { id: 'wawancara', label: 'Tips Wawancara', icon: <FiMessageSquare /> },
    { id: 'psikotes', label: 'Tes Psikotes', icon: <FiBrain /> },
  ];

  return (
    <div className="space-y-8">
      <div className="relative overflow-hidden rounded-2xl gradient-accent p-8 lg:p-12">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative z-10">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3">📚 Tutorial</h1>
          <p className="text-white/80 text-lg max-w-2xl">Asah kemampuanmu dengan kuis interaktif, tips wawancara, dan latihan psikotes.</p>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {tabs.map(t => (
          <button key={t.id} onClick={() => setActiveTab(t.id)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 cursor-pointer border-none ${activeTab === t.id ? 'gradient-primary text-white shadow-lg shadow-primary/25' : 'bg-bg-card text-text-secondary hover:bg-bg-card-hover'}`}>
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      {/* Kuis Tab */}
      {activeTab === 'kuis' && (
        <div className="space-y-4 animate-fade-in">
          {umumQuizzes.length === 0 ? (
            <div className="glass rounded-2xl p-12 text-center">
              <FiBookOpen className="mx-auto text-text-muted mb-3" size={40} />
              <p className="text-text-secondary">Belum ada kuis. Admin akan menambahkan segera!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {umumQuizzes.map(quiz => (
                <div key={quiz.id} className="glass rounded-2xl p-6 card-hover">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-white text-xl">📝</div>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">Umum</span>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-1">{quiz.judul}</h3>
                  <p className="text-sm text-text-secondary mb-4">{quiz.deskripsi || 'Kuis interaktif'}</p>
                  <button onClick={() => navigate(`/quiz/${quiz.id}`)}
                    className="btn-primary text-sm flex items-center gap-2 w-full justify-center">
                    <FiPlay /> Mulai Kuis
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tips Wawancara Tab */}
      {activeTab === 'wawancara' && (
        <div className="space-y-3 animate-fade-in">
          <div className="glass rounded-2xl p-6 mb-4">
            <h2 className="text-lg font-bold text-text-primary mb-2">💡 Tips Umum Wawancara</h2>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li className="flex items-start gap-2"><span className="text-success mt-0.5">✓</span> Datang 15 menit lebih awal</li>
              <li className="flex items-start gap-2"><span className="text-success mt-0.5">✓</span> Riset perusahaan sebelum wawancara</li>
              <li className="flex items-start gap-2"><span className="text-success mt-0.5">✓</span> Berpakaian rapi dan profesional</li>
              <li className="flex items-start gap-2"><span className="text-success mt-0.5">✓</span> Bawa CV dan portofolio fisik</li>
              <li className="flex items-start gap-2"><span className="text-success mt-0.5">✓</span> Jaga kontak mata dan bahasa tubuh positif</li>
              <li className="flex items-start gap-2"><span className="text-success mt-0.5">✓</span> Siapkan pertanyaan untuk interviewer</li>
            </ul>
          </div>
          <h3 className="text-lg font-semibold text-text-primary">🎤 Pertanyaan yang Sering Ditanyakan</h3>
          {interviewTips.map((tip, i) => (
            <div key={i} className="glass rounded-xl overflow-hidden card-hover">
              <button onClick={() => setOpenTip(openTip === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer text-text-primary">
                <span className="font-medium text-sm">{tip.q}</span>
                {openTip === i ? <FiChevronUp className="text-primary flex-shrink-0" /> : <FiChevronDown className="text-text-muted flex-shrink-0" />}
              </button>
              {openTip === i && (
                <div className="px-5 pb-5 animate-fade-in">
                  <p className="text-sm text-text-secondary leading-relaxed bg-bg-card p-4 rounded-xl">{tip.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Psikotes Tab */}
      {activeTab === 'psikotes' && (
        <div className="space-y-4 animate-fade-in">
          <div className="glass rounded-2xl p-6 mb-4">
            <h2 className="text-lg font-bold text-text-primary mb-2">🧠 Tentang Tes Psikotes</h2>
            <p className="text-sm text-text-secondary">Tes psikotes mengukur kemampuan kognitif, kepribadian, dan kecerdasan emosional. Latihan rutin dapat meningkatkan skor kamu.</p>
          </div>
          {psikotesQuizzes.length === 0 ? (
            <div className="glass rounded-2xl p-12 text-center">
              <FiBrain className="mx-auto text-text-muted mb-3" size={40} />
              <p className="text-text-secondary">Belum ada tes psikotes. Segera hadir!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {psikotesQuizzes.map(quiz => (
                <div key={quiz.id} className="glass rounded-2xl p-6 card-hover">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center text-white text-xl">🧠</div>
                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">Psikotes</span>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-1">{quiz.judul}</h3>
                  <p className="text-sm text-text-secondary mb-4">{quiz.deskripsi || 'Tes psikotes'}</p>
                  <button onClick={() => navigate(`/quiz/${quiz.id}`)}
                    className="btn-primary text-sm flex items-center gap-2 w-full justify-center">
                    <FiPlay /> Mulai Tes
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
