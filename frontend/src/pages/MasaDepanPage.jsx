import { useState, useEffect } from 'react';
import { FiExternalLink, FiFileText, FiLayout, FiSearch, FiStar, FiArrowRight } from 'react-icons/fi';
import api from '../utils/api';

const lokerSites = [
  { name: 'LinkedIn Jobs', url: 'https://www.linkedin.com/jobs/', desc: 'Platform profesional terbesar', color: '#0077B5' },
  { name: 'Glints', url: 'https://glints.com/id', desc: 'Lowongan untuk fresh graduate', color: '#6C63FF' },
  { name: 'JobStreet', url: 'https://www.jobstreet.co.id/', desc: 'Portal karir terpercaya', color: '#FF6B35' },
  { name: 'Kalibrr', url: 'https://www.kalibrr.com/', desc: 'Rekrutmen berbasis AI', color: '#00D9FF' },
  { name: 'Karir.com', url: 'https://www.karir.com/', desc: 'Situs lowongan Indonesia', color: '#00E676' },
  { name: 'Indeed', url: 'https://id.indeed.com/', desc: 'Pencari lowongan global', color: '#FF6B9D' },
];

const cvTips = [
  { title: 'Format ATS-Friendly', desc: 'Hindari tabel & grafik rumit agar bisa dibaca sistem.', icon: '📄' },
  { title: 'Sesuaikan dengan Posisi', desc: 'Highlight skill yang relevan dengan posisi.', icon: '🎯' },
  { title: 'Gunakan Action Words', desc: 'Mulai dengan: Mengembangkan, Memimpin, Menganalisis.', icon: '✍️' },
  { title: 'Cantumkan Pencapaian', desc: 'Tulis apa yang dicapai, gunakan angka & metrik.', icon: '🏆' },
  { title: 'Maksimal 2 Halaman', desc: 'Recruiter hanya baca CV 6-7 detik. Buat ringkas.', icon: '📏' },
  { title: 'Desain Profesional', desc: 'Font mudah dibaca, spacing konsisten, warna netral.', icon: '🎨' },
];

const portoTips = [
  { title: 'Pilih Platform Tepat', desc: 'GitHub untuk dev, Behance untuk designer, atau buat website sendiri.', icon: '🌐' },
  { title: 'Showcase Project Terbaik', desc: 'Tampilkan 3-5 project terbaik dengan penjelasan detail.', icon: '⭐' },
  { title: 'Tambahkan Case Study', desc: 'Jelaskan proses kerja dari awal hingga akhir.', icon: '📊' },
  { title: 'Sertakan Testimonial', desc: 'Tambahkan feedback dari klien atau rekan kerja.', icon: '💬' },
];

export default function MasaDepanPage() {
  const [contents, setContents] = useState([]);
  const [activeTab, setActiveTab] = useState('loker');
  const [search, setSearch] = useState('');

  useEffect(() => {
    api.getContents('lowongan').then(d => Array.isArray(d) && setContents(d)).catch(() => {});
  }, []);

  const tabs = [
    { id: 'loker', label: 'Lowongan Kerja', icon: <FiSearch /> },
    { id: 'cv', label: 'Tutorial CV', icon: <FiFileText /> },
    { id: 'porto', label: 'Portofolio', icon: <FiLayout /> },
  ];

  const filtered = lokerSites.filter(s => s.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-8">
      <div className="relative overflow-hidden rounded-2xl gradient-primary p-8 lg:p-12">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative z-10">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3">🚀 Masa Depan</h1>
          <p className="text-white/80 text-lg max-w-2xl">Siapkan karirmu dengan lowongan kerja, panduan CV, dan tips portofolio.</p>
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

      {activeTab === 'loker' && (
        <div className="space-y-6 animate-fade-in">
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
            <input type="text" placeholder="Cari situs lowongan..." value={search} onChange={e => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-bg-card border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 transition-all" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="group glass rounded-2xl p-6 no-underline card-hover block">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg" style={{ background: s.color }}>{s.name.charAt(0)}</div>
                  <FiExternalLink className="text-text-muted group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-1">{s.name}</h3>
                <p className="text-sm text-text-secondary">{s.desc}</p>
              </a>
            ))}
          </div>
          {contents.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2"><FiStar className="text-warning" /> Dari Admin</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contents.map(item => (
                  <a key={item.id} href={item.link_eksternal || '#'} target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-5 no-underline card-hover flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center text-white flex-shrink-0"><FiFileText /></div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-text-primary truncate">{item.judul}</h4>
                      <p className="text-xs text-text-muted truncate">{item.deskripsi}</p>
                    </div>
                    <FiArrowRight className="text-text-muted group-hover:text-primary transition-colors flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {activeTab === 'cv' && (
        <div className="space-y-6 animate-fade-in">
          <div className="glass rounded-2xl p-6">
            <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2"><FiFileText className="text-primary" /> Tips CV Menarik</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cvTips.map((t, i) => (
                <div key={i} className="bg-bg-card rounded-xl p-5 card-hover border border-border">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{t.icon}</span>
                    <div><h3 className="text-sm font-semibold text-text-primary mb-1">{t.title}</h3><p className="text-xs text-text-secondary">{t.desc}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">🔗 Template CV Gratis</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[{ name: 'Canva CV', url: 'https://www.canva.com/resumes/templates/' }, { name: 'Resume.io', url: 'https://resume.io/' }, { name: 'Novoresume', url: 'https://novoresume.com/' }, { name: 'Zety', url: 'https://zety.com/' }].map((t, i) => (
                <a key={i} href={t.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-bg-card hover:bg-bg-card-hover transition-all no-underline group">
                  <FiExternalLink className="text-primary flex-shrink-0" /><span className="text-sm text-text-primary group-hover:text-primary transition-colors">{t.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'porto' && (
        <div className="space-y-6 animate-fade-in">
          <div className="glass rounded-2xl p-6">
            <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2"><FiLayout className="text-secondary" /> Bangun Portofolio</h2>
            <div className="space-y-4">
              {portoTips.map((t, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-bg-card rounded-xl border border-border card-hover">
                  <span className="text-3xl">{t.icon}</span>
                  <div><h3 className="text-sm font-semibold text-text-primary mb-1">{t.title}</h3><p className="text-xs text-text-secondary">{t.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">🌐 Platform Portofolio</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[{ name: 'GitHub', url: 'https://github.com', desc: 'Developer' }, { name: 'Behance', url: 'https://www.behance.net', desc: 'Designer' }, { name: 'Dribbble', url: 'https://dribbble.com', desc: 'UI/UX' }, { name: 'Medium', url: 'https://medium.com', desc: 'Penulis' }, { name: 'WordPress', url: 'https://wordpress.com', desc: 'Website' }, { name: 'Notion', url: 'https://notion.so', desc: 'Workspace' }].map((p, i) => (
                <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-bg-card hover:bg-bg-card-hover border border-border transition-all no-underline card-hover group">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">{p.name.charAt(0)}</div>
                  <div><span className="text-sm font-medium text-text-primary block">{p.name}</span><span className="text-xs text-text-muted">{p.desc}</span></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
