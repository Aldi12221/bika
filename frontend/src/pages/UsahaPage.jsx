import { FiDollarSign, FiTarget, FiTrendingUp } from 'react-icons/fi';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const businessTips = [
  'Mulai dari masalah nyata yang sering dialami target pelanggan.',
  'Uji ide produk dengan versi sederhana terlebih dahulu.',
  'Bangun promosi konsisten lewat media sosial dan komunitas.',
  'Catat feedback pelanggan lalu perbaiki produk secara bertahap.',
];

const financeTips = [
  'Pisahkan rekening pribadi dan rekening usaha.',
  'Catat pemasukan dan pengeluaran setiap hari.',
  'Siapkan dana darurat operasional minimal 3 bulan.',
  'Tetapkan gaji untuk diri sendiri agar cashflow stabil.',
  'Review laporan keuangan setiap akhir bulan.',
];

const chartData = {
  labels: ['Bln 1', 'Bln 2', 'Bln 3', 'Bln 4', 'Bln 5', 'Bln 6', 'Bln 7', 'Bln 8', 'Bln 9', 'Bln 10', 'Bln 11', 'Bln 12'],
  datasets: [
    {
      label: 'Pendapatan (Rp)',
      data: [700000, 1200000, 1700000, 2600000, 3500000, 4600000, 5800000, 6900000, 7900000, 9000000, 10300000, 12000000],
      borderColor: '#6C63FF',
      backgroundColor: 'rgba(108, 99, 255, 0.16)',
      fill: true,
      tension: 0.35,
      pointRadius: 4,
      pointBackgroundColor: '#6C63FF',
    },
    {
      label: 'Biaya Operasional (Rp)',
      data: [2300000, 2200000, 2100000, 2200000, 2400000, 2600000, 2800000, 3000000, 3200000, 3400000, 3600000, 3900000],
      borderColor: '#00D9FF',
      backgroundColor: 'rgba(0, 217, 255, 0.12)',
      fill: true,
      tension: 0.35,
      pointRadius: 4,
      pointBackgroundColor: '#00D9FF',
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: '#9A9BBF',
      },
    },
  },
  scales: {
    x: {
      ticks: { color: '#6B6D8A' },
      grid: { color: 'rgba(42, 45, 74, 0.55)' },
    },
    y: {
      ticks: {
        color: '#6B6D8A',
        callback: (value) => `Rp ${(Number(value) / 1000000).toFixed(1)} jt`,
      },
      grid: { color: 'rgba(42, 45, 74, 0.55)' },
    },
  },
};

export default function UsahaPage() {
  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-2xl gradient-success p-8 lg:p-10">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative z-10">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">Usaha</h1>
          <p className="text-white/90 max-w-2xl">
            Pelajari langkah memulai usaha, cara mengatur keuangan, dan contoh kurva pendapatan.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <article className="glass rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <FiTarget className="text-primary" />
            <h2 className="text-lg font-semibold text-text-primary">Tips and Trick Memulai Usaha</h2>
          </div>
          <ul className="space-y-3">
            {businessTips.map((tip) => (
              <li key={tip} className="bg-bg-card border border-border rounded-xl p-3 text-sm text-text-secondary">
                {tip}
              </li>
            ))}
          </ul>
        </article>

        <article className="glass rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <FiDollarSign className="text-secondary" />
            <h2 className="text-lg font-semibold text-text-primary">Tips and Trick Mengatur Keuangan</h2>
          </div>
          <ul className="space-y-3">
            {financeTips.map((tip) => (
              <li key={tip} className="bg-bg-card border border-border rounded-xl p-3 text-sm text-text-secondary">
                {tip}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="glass rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-2">
          <FiTrendingUp className="text-primary" />
          <h2 className="text-lg font-semibold text-text-primary">Kurva Pendapatan Jika Membuat Usaha</h2>
        </div>
        <p className="text-sm text-text-secondary mb-5">
          Simulasi ini menggambarkan pola kenaikan pendapatan dan biaya operasional selama 12 bulan pertama.
        </p>

        <div className="h-80">
          <Line data={chartData} options={chartOptions} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5">
          <div className="bg-bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-xs text-text-muted mb-1">Perkiraan titik impas</p>
            <p className="text-lg font-semibold text-success">Bulan 4-5</p>
          </div>
          <div className="bg-bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-xs text-text-muted mb-1">Pendapatan akhir tahun</p>
            <p className="text-lg font-semibold text-primary">Rp 12,0 jt</p>
          </div>
          <div className="bg-bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-xs text-text-muted mb-1">Margin bulan ke-12</p>
            <p className="text-lg font-semibold text-secondary">Rp 8,1 jt</p>
          </div>
        </div>
      </section>
    </div>
  );
}
