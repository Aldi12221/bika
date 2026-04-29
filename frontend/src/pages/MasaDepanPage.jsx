import { FiBriefcase, FiClock, FiFileText, FiLayout, FiTarget } from 'react-icons/fi';

const cvTips = [
  'Gunakan format ringkas maksimal 1-2 halaman.',
  'Tulis pengalaman dengan fokus hasil dan angka capaian.',
  'Sesuaikan skill dan kata kunci dengan posisi yang dilamar.',
  'Pastikan CV mudah dibaca sistem ATS.',
];

const portfolioTips = [
  'Pilih 3-5 karya terbaik yang paling relevan.',
  'Sertakan studi kasus: masalah, proses, dan hasil.',
  'Cantumkan peranmu secara jelas pada setiap project.',
  'Sediakan kontak aktif agar recruiter mudah menghubungi.',
];

export default function MasaDepanPage() {
  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-2xl gradient-primary p-8 lg:p-10">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative z-10">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">Masa Depan</h1>
          <p className="text-white/90 max-w-2xl">
            Tempat kamu menyiapkan karir lewat lowongan kerja serta tutorial CV dan portofolio.
          </p>
        </div>
      </section>

      <section className="glass rounded-2xl p-6 sm:p-7">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center text-white">
            <FiBriefcase />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-text-primary">Link Lowongan Kerja</h2>
            <p className="text-sm text-text-secondary">Daftar link lowongan akan ditambahkan kemudian.</p>
          </div>
        </div>

        <div className="bg-bg-card border border-border rounded-xl p-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-text-secondary text-sm">
            <FiClock />
            <span>Status: nanti disiapkan</span>
          </div>
          <button
            disabled
            className="px-4 py-2 rounded-lg bg-bg-surface border border-border text-text-muted text-sm cursor-not-allowed"
          >
            Segera Hadir
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <article className="glass rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <FiFileText className="text-primary" />
            <h2 className="text-lg font-semibold text-text-primary">Tutorial Bikin CV</h2>
          </div>
          <ul className="space-y-3">
            {cvTips.map((tip) => (
              <li key={tip} className="bg-bg-card border border-border rounded-xl p-3 text-sm text-text-secondary">
                {tip}
              </li>
            ))}
          </ul>
        </article>

        <article className="glass rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <FiLayout className="text-secondary" />
            <h2 className="text-lg font-semibold text-text-primary">Tutorial Bikin Portofolio</h2>
          </div>
          <ul className="space-y-3">
            {portfolioTips.map((tip) => (
              <li key={tip} className="bg-bg-card border border-border rounded-xl p-3 text-sm text-text-secondary">
                {tip}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="glass rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-2">
          <FiTarget className="text-success" />
          <h2 className="text-lg font-semibold text-text-primary">Target Mingguan</h2>
        </div>
        <p className="text-sm text-text-secondary">
          Minimal 1 CV final, 1 draft portofolio, dan daftar 5 posisi target sebelum akhir minggu.
        </p>
      </section>
    </div>
  );
}
