import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FiBookOpen, FiBriefcase, FiUser, FiMenu, FiX, FiLogOut, FiTrendingUp } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logoutUser } = useAuth();
  const location = useLocation();

  const navLinks = [
    { path: '/masa-depan', label: 'Masa Depan', icon: <FiTrendingUp /> },
    { path: '/tutorial', label: 'Tutorial', icon: <FiBookOpen /> },
    { path: '/usaha', label: 'Usaha', icon: <FiBriefcase /> },
    { path: '/profil', label: 'Profil', icon: <FiUser /> },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 no-underline">
            <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center font-bold text-white text-sm shadow-lg">
              BK
            </div>
            <span className="text-xl font-bold gradient-text">BiKA</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium no-underline transition-all duration-300 ${
                  isActive(link.path)
                    ? 'gradient-primary text-white shadow-lg shadow-primary/25'
                    : 'text-text-secondary hover:text-text-primary hover:bg-bg-card'
                }`}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </div>

          {/* User / Login Button */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  {user.foto ? (
                    <img src={user.foto} alt="" className="w-8 h-8 rounded-full object-cover border-2 border-primary/30" />
                  ) : (
                    <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white text-xs font-bold">
                      {user.nama?.charAt(0)}
                    </div>
                  )}
                  <span className="text-sm font-medium text-text-primary">{user.nama}</span>
                </div>
                <button
                  onClick={logoutUser}
                  className="p-2 rounded-lg text-text-muted hover:text-danger hover:bg-danger/10 transition-all duration-300 cursor-pointer bg-transparent border-none"
                >
                  <FiLogOut size={18} />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="btn-primary text-sm no-underline"
              >
                Masuk
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-text-primary bg-transparent border-none cursor-pointer hover:bg-bg-card transition-all"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-strong border-t border-border animate-slide-up">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium no-underline transition-all duration-300 ${
                  isActive(link.path)
                    ? 'gradient-primary text-white'
                    : 'text-text-secondary hover:text-text-primary hover:bg-bg-card'
                }`}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
            <div className="border-t border-border pt-3 mt-3">
              {user ? (
                <button
                  onClick={() => { logoutUser(); setIsOpen(false); }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-danger hover:bg-danger/10 transition-all w-full bg-transparent border-none cursor-pointer"
                >
                  <FiLogOut />
                  Keluar
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block text-center btn-primary text-sm no-underline"
                >
                  Masuk
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
