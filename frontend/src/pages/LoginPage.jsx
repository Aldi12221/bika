import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { jwtDecode } from 'jwt-decode';
import api from '../utils/api';
import { FiArrowRight, FiShield, FiBookOpen, FiBriefcase } from 'react-icons/fi';

export default function LoginPage() {
  const navigate = useNavigate();
  const { loginUser } = useAuth();

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      const userData = {
        googleId: decoded.sub,
        nama: decoded.name,
        email: decoded.email,
        foto: decoded.picture
      };

      const result = await api.loginGoogle(userData);
      loginUser(result.data);
      navigate('/masa-depan');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const features = [
    { icon: <FiArrowRight />, title: 'Masa Depan', desc: 'Temukan lowongan & buat CV terbaik' },
    { icon: <FiBookOpen />, title: 'Tutorial', desc: 'Kuis, tips wawancara & psikotes' },
    { icon: <FiBriefcase />, title: 'Usaha', desc: 'Panduan memulai & mengelola bisnis' },
  ];

  return (
    <div className="min-h-screen bg-bg-body flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/3 blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8 animate-slide-up">
          <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center font-bold text-white text-2xl mx-auto mb-4 shadow-xl shadow-primary/25 animate-float">
            BK
          </div>
          <h1 className="text-3xl font-bold gradient-text mb-2">BiKA</h1>
          <p className="text-text-secondary text-sm">Bimbingan Karir — Siapkan Masa Depanmu</p>
        </div>

        {/* Login Card */}
        <div className="glass rounded-2xl p-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="text-center mb-6">
            <FiShield className="text-primary mx-auto mb-3" size={28} />
            <h2 className="text-xl font-semibold text-text-primary mb-1">Selamat Datang</h2>
            <p className="text-text-secondary text-sm">Masuk dengan akun Google untuk melanjutkan</p>
          </div>

          <div className="flex justify-center mb-6">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => console.log('Login Failed')}
              theme="filled_black"
              size="large"
              shape="pill"
              text="continue_with"
              locale="id"
            />
          </div>

          <div className="border-t border-border pt-6">
            <p className="text-xs text-text-muted text-center mb-4">Apa yang bisa kamu lakukan di BiKA?</p>
            <div className="space-y-3">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-bg-card/50 hover:bg-bg-card transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center text-white text-sm flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">{f.title}</p>
                    <p className="text-xs text-text-muted">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Admin Link */}
        <div className="text-center mt-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <a href="/admin/login" className="text-xs text-text-muted hover:text-primary transition-colors no-underline">
            Login sebagai Admin →
          </a>
        </div>
      </div>
    </div>
  );
}
