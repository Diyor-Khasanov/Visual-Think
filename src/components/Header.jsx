import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  User,
  Sparkles,
  Circle,
  LogOut,
  Settings as SettingsIcon,
  LayoutDashboard,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);

  const [user, setUser] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const checkAuth = () => {
    const savedUserData = localStorage.getItem('userData');
    const plan = localStorage.getItem('userPlan') || 'Free';

    if (savedUserData) {
      setUser({
        ...JSON.parse(savedUserData),
        plan: plan
      });
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    checkAuth();
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setIsMenuOpen(false);
    };

    window.addEventListener('storage', checkAuth);
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('storage', checkAuth);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [location]);

  useEffect(() => {
    setIsMobileNavOpen(false);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('userData');
    localStorage.removeItem('isLoggedIn');
    setUser(null);
    navigate('/login');
  };

  const headerStyles = `fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-500 ${isScrolled || isMobileNavOpen
      ? 'bg-[#050714]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl'
      : 'bg-transparent border-b border-transparent py-5 md:py-6'
    }`;

  if (user) {
    return (
      <header className={headerStyles}>
        <div className="max-w-[1920px] mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center gap-2 md:gap-3 group">
            <div className="w-8 h-8 md:w-9 md:h-9 bg-indigo-600 rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform">
              <Sparkles size={18} className="text-white" />
            </div>
            <span className="text-xl md:text-2xl font-light tracking-tight font-indie text-white">Visual think</span>
          </Link>

          <div className="flex items-center gap-3 md:gap-6">
            <div className={`flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full border text-[10px] md:text-[11px] font-bold uppercase tracking-widest transition-all ${user.plan === 'Pro' ? 'bg-indigo-500/10 border-indigo-500/40 text-indigo-400' : 'bg-gray-800/40 border-gray-700 text-gray-500'
              }`}>
              {user.plan === 'Pro' ? <Sparkles size={12} /> : <Circle size={8} className="fill-current" />}
              <span className="hidden xs:inline">{user.plan}</span>
            </div>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center gap-2 p-1 md:pr-3 rounded-full border border-gray-700 hover:border-gray-500 transition-all bg-gray-800/30"
              >
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold uppercase">
                  {user.firstName?.charAt(0) || <User size={14} />}
                </div>
                <ChevronDown size={14} className={`text-gray-500 transition-transform hidden md:block ${isMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {isMenuOpen && (
                <div className="absolute right-0 mt-3 w-52 md:w-56 bg-[#0D0F1F] border border-gray-800 rounded-2xl shadow-2xl p-2 animate-in fade-in zoom-in-95 duration-200">
                  <div className="px-4 py-3 border-b border-gray-800/50 mb-1">
                    <p className="text-sm font-medium text-white truncate">{user.firstName} {user.lastName}</p>
                    <p className="text-[10px] text-gray-500 truncate">{user.email}</p>
                  </div>
                  <Link to="/dashboard" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors">
                    <LayoutDashboard size={16} /> Dashboard
                  </Link>
                  <Link to="/settings" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors">
                    <SettingsIcon size={16} /> Settings
                  </Link>
                  <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-400 hover:bg-red-500/10 rounded-xl transition-colors font-medium mt-1 text-left">
                    <LogOut size={16} /> Log Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className={headerStyles}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        <Link to="/" className="text-2xl md:text-3xl font-medium tracking-tight font-indie text-white z-[110]">
          Visual think
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {['How it works', 'Pricing', 'About Us'].map((item) => (
            <button key={item} className="text-sm font-semibold text-gray-400 hover:text-white transition-colors">{item}</button>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-4 z-110">
          <Link to="/login" className="hidden sm:block px-4 md:px-6 py-2.5 text-sm font-bold text-gray-300 hover:text-white transition-all">
            Log in
          </Link>
          <Link to="/register" className="px-5 md:px-7 py-2 md:py-2.5 text-xs md:text-sm bg-white text-black rounded-full font-bold hover:bg-gray-200 shadow-xl transition-all active:scale-95">
            Start<span className="hidden xs:inline"> for free</span>
          </Link>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          >
            {isMobileNavOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileNavOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#050714] border-b border-white/10 py-8 px-6 flex flex-col gap-6 animate-in slide-in-from-top-5 duration-300">
          {['How it works', 'Pricing', 'About Us'].map((item) => (
            <button key={item} className="text-xl font-medium text-gray-300 hover:text-white text-left">{item}</button>
          ))}
          <div className="h-px bg-white/5 w-full my-2" />
          <Link to="/login" className="text-xl font-medium text-gray-300">Log in</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
