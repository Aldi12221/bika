import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { FiUser, FiMail, FiLink, FiFileText, FiSave, FiEdit3, FiX } from 'react-icons/fi';
import api from '../utils/api';

export default function ProfilPage() {
  const { user, setUser } = useAuth();
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ nama: user?.nama || '', portofolio_link: user?.portofolio_link || '', cv_path: user?.cv_path || '' });
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState('');

  if (!user) return <Navigate to="/login" replace />;

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await api.updateProfile(user.id, form);
      if (res.data) { setUser(res.data); setMsg('Profil berhasil diperbarui!'); setEditing(false); }
    } catch { setMsg('Gagal menyimpan.'); }
    setSaving(false);
    setTimeout(() => setMsg(''), 3000);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold gradient-text">Profil Saya</h1>

      {msg && <div className="p-3 rounded-xl bg-success/10 border border-success/30 text-success text-sm animate-fade-in">{msg}</div>}

      {/* Avatar Card */}
      <div className="glass rounded-2xl p-8 text-center">
        <div className="relative inline-block mb-4">
          {user.foto ? (
            <img src={user.foto} alt="" className="w-24 h-24 rounded-full object-cover border-4 border-primary/30 shadow-xl" />
          ) : (
            <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center text-white text-3xl font-bold shadow-xl">{user.nama?.charAt(0)}</div>
          )}
          <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full gradient-success flex items-center justify-center text-white text-xs shadow-lg">✓</div>
        </div>
        <h2 className="text-xl font-bold text-text-primary">{user.nama}</h2>
        <p className="text-sm text-text-secondary">{user.email}</p>
      </div>

      {/* Info Card */}
      <div className="glass rounded-2xl p-6 space-y-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-text-primary">Informasi Profil</h3>
          <button onClick={() => setEditing(!editing)} className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer border-none bg-bg-card text-text-secondary hover:text-primary hover:bg-primary/10">
            {editing ? <><FiX /> Batal</> : <><FiEdit3 /> Edit</>}
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-xs text-text-muted flex items-center gap-2 mb-1.5"><FiUser size={14} /> Nama Lengkap</label>
            {editing ? (
              <input value={form.nama} onChange={e => setForm({ ...form, nama: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-bg-input border border-border text-text-primary focus:outline-none focus:border-primary/50 transition-all" />
            ) : (
              <p className="text-text-primary font-medium px-4 py-2.5 bg-bg-card rounded-xl">{user.nama}</p>
            )}
          </div>

          <div>
            <label className="text-xs text-text-muted flex items-center gap-2 mb-1.5"><FiMail size={14} /> Email</label>
            <p className="text-text-primary font-medium px-4 py-2.5 bg-bg-card rounded-xl">{user.email}</p>
          </div>

          <div>
            <label className="text-xs text-text-muted flex items-center gap-2 mb-1.5"><FiLink size={14} /> Link Portofolio</label>
            {editing ? (
              <input value={form.portofolio_link} onChange={e => setForm({ ...form, portofolio_link: e.target.value })} placeholder="https://..."
                className="w-full px-4 py-2.5 rounded-xl bg-bg-input border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 transition-all" />
            ) : (
              <p className="text-text-primary font-medium px-4 py-2.5 bg-bg-card rounded-xl">{user.portofolio_link || <span className="text-text-muted italic">Belum diisi</span>}</p>
            )}
          </div>

          <div>
            <label className="text-xs text-text-muted flex items-center gap-2 mb-1.5"><FiFileText size={14} /> Link CV</label>
            {editing ? (
              <input value={form.cv_path} onChange={e => setForm({ ...form, cv_path: e.target.value })} placeholder="Link Google Drive CV..."
                className="w-full px-4 py-2.5 rounded-xl bg-bg-input border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 transition-all" />
            ) : (
              <p className="text-text-primary font-medium px-4 py-2.5 bg-bg-card rounded-xl">{user.cv_path || <span className="text-text-muted italic">Belum diisi</span>}</p>
            )}
          </div>
        </div>

        {editing && (
          <button onClick={handleSave} disabled={saving}
            className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50">
            <FiSave /> {saving ? 'Menyimpan...' : 'Simpan Perubahan'}
          </button>
        )}
      </div>
    </div>
  );
}
