import { useState, useEffect, useRef } from 'react';
import { FiTrendingUp, FiDollarSign, FiTarget, FiBookOpen } from 'react-icons/fi';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';
import api from '../utils/api';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const businessTips = [
  { title: 'Temukan Masalah untuk Dipecahkan', desc: 'Bisnis terbaik lahir dari solusi nyata. Amati masalah sehari-hari di sekitarmu dan pikirkan solusi kreatif.', icon: '💡' },
  { title: 'Buat MVP (Minimum Viable Product)', desc: 'Jangan tunggu sempurna. Luncurkan versi sederhana produkmu, dapatkan feedback, lalu perbaiki.', icon: '🚀' },
  { title: 'Kenali Target Pasar', desc: 'Pahami siapa pelangganmu: usia, kebiasaan, masalah, dan apa yang mereka rela bayar.', icon: '🎯' },
  { title: 'Manfaatkan Media Sosial', desc: 'Promosi gratis dan efektif. Buat konten yang menarik di Instagram, TikTok, atau YouTube.', icon: '📱' },
  { title: 'Jaga Kualitas Konsisten', desc: 'Kualitas yang konsisten membangun kepercayaan dan loyalitas pelanggan jangka panjang.', icon: '⭐' },
  { title: 'Belajar dari Kegagalan', desc: 'Setiap pengusaha sukses pernah gagal. Yang penting adalah bangkit dan belajar dari kesalahan.', icon: '💪' },
];

const financeTips = [
  { title: 'Pisahkan Keuangan Pribadi & Bisnis', desc: 'Buat rekening terpisah untuk bisnis agar arus kas lebih jelas dan tercatat rapi.', color: 'primary' },
  { title: 'Catat Semua Pemasukan & Pengeluaran', desc: 'Gunakan aplikasi atau spreadsheet untuk mencatat setiap transaksi, sekecil apapun.', color: 'secondary' },
  { title: 'Sisihkan Dana Darurat', desc: 'Siapkan dana darurat minimal 3-6 bulan biaya operasional bisnis.', color: 'success' },
  { title: 'Investasikan Kembali Keuntungan', desc: 'Alokasikan 30-50% keuntungan untuk pengembangan bisnis di awal.', color: 'warning' },
  { title: 'Kelola Hutang dengan Bijak', desc: 'Jika harus berhutang, pastikan untuk hal produktif dan kemampuan bayar terjamin.', color: 'accent' },
  { title: 'Review Keuangan Bulanan', desc: 'Evaluasi laporan keuangan setiap bulan untuk identifikasi area perbaikan.', color: 'danger' },
];

export default function UsahaPage() {
  const [contents, setContents] = useState([]);
  const [activeTab, setActiveTab] = useState('tips');

  useEffect(() => {
    api.getContents('usaha').then(d => Array.isArray(d) && setContents(d)).catch(() => {});
  }, []);

  const chartData = {
    labels: ['Bulan 1', 'Bulan 2', 'Bulan 3', 'Bulan 4', 'Bulan 5', 'Bulan 6', 'Bulan 7', 'Bulan 8', 'Bulan 9', 'Bulan 10', 'Bulan 11', 'Bulan 12'],
    datasets: [
      {
        label: 'Pendapatan (Rp)',
        data: [500000, 800000, 1200000, 1800000, 2500000, 3200000, 4000000, 5000000, 6200000, 7500000, 9000000, 11000000],
        borderColor: '#6C63FF', backgroundColor: 'rgba(108,99,255,0.1)',
        fill: true, tension: 0.4, pointRadius: 5, pointBackgroundColor: '#6C63FF',
      },
      {
        label: 'Pengeluaran (Rp)',
        data: [2000000, 1800000, 1700000, 1600000, 1800000, 2000000, 2200000, 2400000, 2600000, 2800000, 3000000, 3200000],
        borderColor: '#FF6B9D', backgroundColor: 'rgba(255,107,157,0.1)',
        fill: true, tension: 0.4, pointRadius: 5, pointBackgroundColor: '#FF6B9D',
      },
    ],
  };

  const chartOpts = {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { labels: { color: '#9A9BBF', font: { family: 'Inter' } } } },
    scales: {
      x: { ticks: { color: '#6B6D8A', font: { size: 11 } }, grid: { color: 'rgba(42,45,74,0.5)' } },
      y: { ticks: { color: '#6B6D8A', callback: v => `${(v/1000000).toFixed(1)}jt` }, grid: { color: 'rgba(42,45,74,0.5)' } },
    },
  };

  const tabs = [
    { id: 'tips', label: 'Tips Usaha', icon: <FiTarget /> },
    { id: 'keuangan', label: 'Atur Keuangan', icon: <FiDollarSign /> },
    { id: 'kurva', label: 'Kurva Pendapatan', icon: <FiTrendingUp /> },
  ];

  return (
    <div className="space-y-8">
      <div className="relative overflow-hidden rounded-2xl gradient-success p-8 lg:p-12">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative z-10">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3">💼 Usaha</h1>
          <p className="text-white/80 text-lg max-w-2xl">Pelajari cara memulai usaha, mengelola keuangan, dan memahami kurva pendapatan bisnis.</p>
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

      {activeTab === 'tips' && (
        <div className="space-y-6 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {businessTips.map((t, i) => (
              <div key={i} className="glass rounded-2xl p-6 card-hover">
                <span className="text-3xl mb-3 block">{t.icon}</span>
                <h3 className="text-base font-semibold text-text-primary mb-2">{t.title}</h3>
                <p className="text-sm text-text-secondary">{t.desc}</p>
              </div>
            ))}
          </div>
          {contents.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2"><FiBookOpen className="text-primary" /> Konten dari Admin</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contents.map(item => (
                  <a key={item.id} href={item.link_eksternal || '#'} target="_blank" rel="noopener noreferrer"
                    className="glass rounded-xl p-5 no-underline card-hover block">
                    <h4 className="text-sm font-semibold text-text-primary mb-1">{item.judul}</h4>
                    <p className="text-xs text-text-muted">{item.deskripsi}</p>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {activeTab === 'keuangan' && (
        <div className="space-y-4 animate-fade-in">
          {financeTips.map((t, i) => (
            <div key={i} className="glass rounded-xl p-5 card-hover flex items-start gap-4">
              <div className={`w-10 h-10 rounded-xl bg-${t.color}/15 flex items-center justify-center text-${t.color} flex-shrink-0`}>
                <FiDollarSign size={20} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text-primary mb-1">{t.title}</h3>
                <p className="text-xs text-text-secondary">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'kurva' && (
        <div className="space-y-6 animate-fade-in">
          <div className="glass rounded-2xl p-6">
            <h2 className="text-lg font-bold text-text-primary mb-2 flex items-center gap-2"><FiTrendingUp className="text-primary" /> Proyeksi Pendapatan vs Pengeluaran</h2>
            <p className="text-sm text-text-secondary mb-6">Simulasi kurva bisnis kecil selama 12 bulan pertama. Break-even point biasanya di bulan ke-4 hingga ke-6.</p>
            <div className="h-80">
              <Line data={chartData} options={chartOpts} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass rounded-xl p-5 text-center">
              <p className="text-xs text-text-muted mb-1">Break-Even Point</p>
              <p className="text-2xl font-bold text-success">Bulan 4-6</p>
            </div>
            <div className="glass rounded-xl p-5 text-center">
              <p className="text-xs text-text-muted mb-1">Pendapatan Bulan 12</p>
              <p className="text-2xl font-bold text-primary">Rp 11 Jt</p>
            </div>
            <div className="glass rounded-xl p-5 text-center">
              <p className="text-xs text-text-muted mb-1">Profit Bulan 12</p>
              <p className="text-2xl font-bold gradient-text">Rp 7.8 Jt</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
