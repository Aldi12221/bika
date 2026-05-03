import { useEffect, useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight, FiBookOpen, FiBriefcase, FiTrendingUp, FiUser } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import api from '../utils/api';

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const IS_GOOGLE_READY = GOOGLE_CLIENT_ID && GOOGLE_CLIENT_ID !== 'YOUR_GOOGLE_CLIENT_ID';

const featureList = [
  {
    icon: <FiTrendingUp />,
    title: 'Masa Depan',
    desc: 'Link lowongan kerja dan tutorial CV/portofolio.',
  },
  {
    icon: <FiUser />,
    title: 'Profil',
    desc: 'Atur nama, foto profil, dan upload berkas CV.',
  },
  {
    icon: <FiBookOpen />,
    title: 'Tutorial',
    desc: 'Kuis, tips wawancara, dan latihan psikotes.',
  },
  {
    icon: <FiBriefcase />,
    title: 'Usaha',
    desc: 'Tips usaha, keuangan, dan kurva pendapatan.',
  },
];

function buildLocalUserFromGoogle(decoded) {
  return {
    id: `local-${decoded.sub || Date.now()}`,
    googleId: decoded.sub,
    nama: decoded.name,
    email: decoded.email,
    foto: decoded.picture,
  };
}

export default function LoginPage() {
  const navigate = useNavigate();
  const { user, loginUser } = useAuth();
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (user) {
      navigate('/', { replace: true });
    }
  }, [user, navigate]);

  const finishLogin = (userData) => {
    loginUser(userData);
    navigate('/');
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      const localUser = buildLocalUserFromGoogle(decoded);

      try {
        const response = await api.loginGoogle(localUser);
        finishLogin(response?.data || localUser);
      } catch {
        // Fallback supaya frontend tetap bisa dipakai saat backend belum siap.
        finishLogin(localUser);
        setMessage('Masuk berhasil dengan mode lokal (backend belum terhubung).');
      }
    } catch {
      setMessage('Login Google gagal. Silakan coba lagi.');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] overflow-x-hidden relative">
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="fixed bottom-0 left-0 w-[420px] h-[420px] bg-red-50/60 rounded-full blur-[110px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10 px-6 lg:px-12 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 xl:gap-14 items-start">
          <section className="space-y-8 text-center w-full mx-auto">
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-full shadow-sm border border-slate-100">
                <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">
                LOGIN
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-blue-950 leading-[1.05] tracking-tight">
                Masuk ke
                {' '}
                <span className="text-red-500">BIKA</span>
              </h1>
              <p className="text-slate-500 text-lg max-w-xl leading-relaxed font-medium text-center mx-auto">
                Akses pembelajaran dan persiapan karir dalam pengalaman yang sederhana dan cepat.
              </p>
            </div>
          </section>

          <section className="w-full max-w-2xl mx-auto bg-white rounded-[36px] border border-slate-100 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.12)] p-6 sm:p-8">
            <div className="rounded-[20px] border border-slate-100 bg-slate-50/70 p-4 mb-4">
              <div className="flex items-center gap-2 mb-1.5">
                <FiUser className="text-blue-600" />
                <p className="text-sm font-black text-blue-950">Login Siswa</p>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Masuk dengan akun Google untuk mengakses fitur Masa Depan, Profil, Tutorial, dan Usaha.
              </p>
            </div>

            {IS_GOOGLE_READY ? (
              <div className="flex justify-center rounded-[20px] border border-slate-100 bg-white p-4">
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={() => setMessage('Login Google gagal. Silakan coba lagi.')}
                  theme="outline"
                  size="large"
                  shape="pill"
                  text="continue_with"
                  locale="id"
                />
              </div>
            ) : (
              <div className="rounded-[20px] border border-amber-200 bg-amber-50 p-4 text-sm text-amber-700">
                Google Client ID belum diset. Untuk sementara kamu bisa pakai mode demo.
              </div>
            )}

            {!IS_GOOGLE_READY && (
              <button
                type="button"
                onClick={handleDemoLogin}
                className="w-full mt-4 inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 text-sm font-bold transition-colors"
              >
                Masuk Mode Demo <FiArrowRight />
              </button>
            )}

            {message && (
              <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50 p-3 text-xs text-blue-700">
                {message}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
