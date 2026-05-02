import { FiBookOpen, FiClock, FiHelpCircle, FiMessageCircle, FiUserCheck } from 'react-icons/fi';

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
    <div className="min-h-screen bg-[#F8FAFC] overflow-x-hidden">
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="fixed bottom-0 left-0 w-[400px] h-[400px] bg-red-50/60 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <section className="relative px-6 lg:px-12 pt-28 pb-24">
        <div className="max-w-7xl mx-auto space-y-8">
          <section className="relative overflow-hidden rounded-[42px] bg-gradient-to-br from-blue-700 via-blue-600 to-red-500 px-8 py-10 lg:px-12 lg:py-14 shadow-[0_40px_80px_-35px_rgba(37,99,235,0.75)]">
            <div className="absolute -top-16 -right-10 w-56 h-56 bg-white/15 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-20 -left-14 w-64 h-64 bg-red-300/25 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tight mb-3">Tutorial</h1>
              <p className="text-blue-50 text-lg max-w-2xl leading-relaxed font-medium">
                Belajar lewat kuis, tips wawancara, dan latihan psikotes untuk persiapan dunia kerja.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-[36px] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] p-6 sm:p-8">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-100">
                <FiBookOpen size={20} />
              </div>
              <div>
                <h2 className="text-2xl font-black text-blue-950 tracking-tight">Kuis</h2>
                <p className="text-sm text-slate-500 font-medium mt-1">Link kuis akan disediakan pada update berikutnya.</p>
              </div>
            </div>
            <div className="rounded-[24px] border border-slate-100 bg-slate-50/70 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                <FiClock />
                <span>Status: kuis akan segera hadir</span>
              </div>
              <button
                disabled
                className="px-4 py-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-400 text-sm font-bold cursor-not-allowed w-full sm:w-auto"
              >
                Segera Hadir
              </button>
            </div>
          </section>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <section className="bg-white rounded-[36px] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-red-500/10 text-red-500 flex items-center justify-center">
                  <FiMessageCircle size={20} />
                </div>
                <h2 className="text-2xl font-black text-blue-950 tracking-tight">Tips and Trick Wawancara</h2>
              </div>
              <ul className="space-y-3">
                {interviewTips.map((tip) => (
                  <li key={tip} className="bg-slate-50/80 border border-slate-100 rounded-[20px] p-4 text-sm text-slate-600 leading-relaxed font-medium">
                    {tip}
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white rounded-[36px] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-blue-600/10 text-blue-600 flex items-center justify-center">
                  <FiUserCheck size={20} />
                </div>
                <h2 className="text-2xl font-black text-blue-950 tracking-tight">Test Psikotes</h2>
              </div>
              <ul className="space-y-3 mb-5">
                {psychotestTips.map((tip) => (
                  <li key={tip} className="bg-slate-50/80 border border-slate-100 rounded-[20px] p-4 text-sm text-slate-600 leading-relaxed font-medium">
                    {tip}
                  </li>
                ))}
              </ul>
              <div className="rounded-[20px] border border-slate-100 bg-slate-50/70 p-4 text-xs text-slate-500 flex items-center gap-2 font-medium">
                <FiHelpCircle />
                <span>Bagian latihan soal psikotes online bisa ditautkan saat link kuis sudah siap.</span>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
