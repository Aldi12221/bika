import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { FiEdit2, FiFileText, FiImage, FiSave, FiUpload, FiUser } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import api from '../utils/api';

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function ProfilPage() {
  const { user, setUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  const createFormFromUser = (source) => ({
    nama: source?.nama || '',
    foto: source?.foto || '',
    cv_file_name: source?.cv_file_name || '',
    portfolio_file_name: source?.portfolio_file_name || '',
    cv_path: source?.cv_path || '',
    portofolio_link: source?.portofolio_link || '',
  });

  const [form, setForm] = useState(() => createFormFromUser(user));

  if (!user) return <Navigate to="/login" replace />;

  const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(''), 3000);
  };

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handlePhotoUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const base64 = await readFileAsDataUrl(file);
      handleChange('foto', base64);
      showMessage('Foto profil berhasil dipilih.');
    } catch {
      showMessage('Gagal membaca file foto.');
    }
  };

  const handleCvUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    handleChange('cv_file_name', file.name);
    showMessage('File CV berhasil dipilih.');
  };

  const handlePortfolioUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    handleChange('portfolio_file_name', file.name);
    showMessage('File portofolio berhasil dipilih.');
  };

  const handleSave = async () => {
    setSaving(true);
    const payload = {
      nama: form.nama,
      foto: form.foto,
      cv_path: form.cv_path || form.cv_file_name,
      portofolio_link: form.portofolio_link || form.portfolio_file_name,
      cv_file_name: form.cv_file_name,
      portfolio_file_name: form.portfolio_file_name,
    };

    try {
      const response = await api.updateProfile(user.id, payload);
      const nextUser = response?.data ? { ...user, ...response.data } : { ...user, ...payload };
      setUser(nextUser);
      showMessage('Profil berhasil diperbarui.');
      setIsEditing(false);
    } catch {
      // Fallback local supaya halaman tetap fungsional saat API belum siap.
      setUser({ ...user, ...payload });
      showMessage('Profil tersimpan lokal (backend belum terhubung).');
      setIsEditing(false);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold gradient-text">Profil</h1>

      {message && (
        <div className="rounded-xl border border-primary/30 bg-primary/10 p-3 text-sm text-text-primary">
          {message}
        </div>
      )}

      <section className="glass rounded-2xl p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-5">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/25 bg-bg-card flex items-center justify-center flex-shrink-0">
            {form.foto ? (
              <img src={form.foto} alt="Foto profil" className="w-full h-full object-cover" />
            ) : (
              <span className="text-2xl font-bold text-text-secondary">{(form.nama || user.nama || 'U').charAt(0)}</span>
            )}
          </div>

          <div className="flex-1">
            <p className="text-xl font-semibold text-text-primary">{form.nama || 'Nama belum diisi'}</p>
            <p className="text-sm text-text-secondary">{user.email}</p>
          </div>

          <button
            onClick={() => {
              const nextEditing = !isEditing;
              if (nextEditing) setForm(createFormFromUser(user));
              setIsEditing(nextEditing);
            }}
            className="px-4 py-2 rounded-xl bg-bg-card text-text-secondary hover:text-primary hover:bg-primary/10 text-sm border border-border flex items-center gap-2 cursor-pointer"
          >
            <FiEdit2 />
            {isEditing ? 'Selesai Edit' : 'Edit Profil'}
          </button>
        </div>
      </section>

      <section className="glass rounded-2xl p-6 space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs text-text-muted flex items-center gap-2">
              <FiUser size={14} />
              Nama
            </label>
            <input
              value={form.nama}
              disabled={!isEditing}
              onChange={(event) => handleChange('nama', event.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-bg-input border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 transition-all disabled:opacity-60"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs text-text-muted flex items-center gap-2">
              <FiImage size={14} />
              Ganti Foto
            </label>
            <input
              type="file"
              accept="image/*"
              disabled={!isEditing}
              onChange={handlePhotoUpload}
              className="w-full rounded-xl bg-bg-input border border-border text-sm text-text-secondary file:mr-3 file:px-3 file:py-2 file:border-0 file:rounded-lg file:bg-primary/20 file:text-primary disabled:opacity-60"
            />
          </div>
        </div>

        <div className="border-t border-border pt-5">
          <h2 className="text-lg font-semibold text-text-primary mb-4">Upload CV dan Portofolio</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs text-text-muted flex items-center gap-2">
                <FiUpload size={14} />
                Upload CV
              </label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                disabled={!isEditing}
                onChange={handleCvUpload}
                className="w-full rounded-xl bg-bg-input border border-border text-sm text-text-secondary file:mr-3 file:px-3 file:py-2 file:border-0 file:rounded-lg file:bg-secondary/20 file:text-secondary disabled:opacity-60"
              />
              <p className="text-xs text-text-muted">
                {form.cv_file_name ? `File terpilih: ${form.cv_file_name}` : 'Belum ada file CV.'}
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-text-muted flex items-center gap-2">
                <FiUpload size={14} />
                Upload Portofolio
              </label>
              <input
                type="file"
                accept=".pdf,.ppt,.pptx,.zip,.rar"
                disabled={!isEditing}
                onChange={handlePortfolioUpload}
                className="w-full rounded-xl bg-bg-input border border-border text-sm text-text-secondary file:mr-3 file:px-3 file:py-2 file:border-0 file:rounded-lg file:bg-secondary/20 file:text-secondary disabled:opacity-60"
              />
              <p className="text-xs text-text-muted">
                {form.portfolio_file_name ? `File terpilih: ${form.portfolio_file_name}` : 'Belum ada file portofolio.'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="space-y-2">
              <label className="text-xs text-text-muted flex items-center gap-2">
                <FiFileText size={14} />
                Link CV (opsional)
              </label>
              <input
                value={form.cv_path}
                disabled={!isEditing}
                onChange={(event) => handleChange('cv_path', event.target.value)}
                placeholder="https://drive.google.com/..."
                className="w-full px-4 py-2.5 rounded-xl bg-bg-input border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 transition-all disabled:opacity-60"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs text-text-muted flex items-center gap-2">
                <FiFileText size={14} />
                Link Portofolio (opsional)
              </label>
              <input
                value={form.portofolio_link}
                disabled={!isEditing}
                onChange={(event) => handleChange('portofolio_link', event.target.value)}
                placeholder="https://behance.net/..."
                className="w-full px-4 py-2.5 rounded-xl bg-bg-input border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 transition-all disabled:opacity-60"
              />
            </div>
          </div>
        </div>

        {isEditing && (
          <button
            onClick={handleSave}
            disabled={saving}
            className="w-full btn-primary text-sm flex items-center justify-center gap-2 disabled:opacity-60"
          >
            <FiSave />
            {saving ? 'Menyimpan...' : 'Simpan Perubahan'}
          </button>
        )}
      </section>
    </div>
  );
}
