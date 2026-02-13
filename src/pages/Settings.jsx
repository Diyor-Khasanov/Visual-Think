import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, CheckCircle2, Trash2, Sparkles } from 'lucide-react';
import Header from '../components/Header';

const Settings = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Account');
  const [userData, setUserData] = useState({ firstName: 'John', lastName: 'Doe', email: '' });
  const [currentPlan, setCurrentPlan] = useState('Pro');
  const [securitySettings, setSecuritySettings] = useState({ twoFactor: true, passkey: false, yubiKey: true });
  const [addOns, setAddOns] = useState({ changes: 1, exports: 1 });

  const changePrice = 10;
  const exportPrice = 1;
  const totalPrice = (addOns.changes * changePrice) + (addOns.exports * exportPrice);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('userData'));
    const savedPlan = localStorage.getItem('userPlan') || 'Pro';
    setCurrentPlan(savedPlan);
    if (savedUser) setUserData(savedUser);
  }, []);

  const menuItems = ['General', 'Security', 'Plan', 'Add-on', 'Account'];

  const renderContent = () => {
    switch (activeTab) {
      case 'Account':
        return (
          <div className="space-y-6 md:space-y-10 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="space-y-4 md:space-y-8 max-w-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-gray-400 sm:text-gray-200">Name</span>
                <div className="bg-white/5 border border-gray-700 rounded-xl px-4 py-2 text-gray-300 sm:w-48 text-center sm:text-left">
                  {userData.firstName} {userData.lastName}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-gray-400 sm:text-gray-200">Email</span>
                <div className="bg-white/5 border border-gray-700 rounded-xl px-4 py-2 text-gray-400 italic truncate sm:w-48 text-center sm:text-left">
                  {userData.email?.toLowerCase()}
                </div>
              </div>
            </div>
            <button onClick={() => { localStorage.clear(); navigate('/login'); }} className="text-red-500 hover:bg-red-500/10 px-4 py-2 rounded-xl transition-all flex items-center gap-2 mx-auto sm:mx-0">
              <Trash2 size={18} /> Delete account
            </button>
          </div>
        );
      case 'Add-on':
        return (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="space-y-4">
              {['changes', 'exports'].map((type) => (
                <div key={type} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <span className="text-gray-200 capitalize">Additional 100 {type}</span>
                  <input
                    type="number"
                    value={addOns[type]}
                    onChange={(e) => setAddOns(prev => ({ ...prev, [type]: Math.max(0, parseInt(e.target.value) || 0) }))}
                    className="w-full sm:w-32 bg-gray-900 border border-gray-700 rounded-xl px-4 py-2 text-center text-xl outline-none focus:border-indigo-500"
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between pt-6 border-t border-gray-800">
              <span className="text-2xl font-medium">Total</span>
              <span className="text-xl font-medium text-indigo-400">+${totalPrice}/mo</span>
            </div>
          </div>
        );
      case 'Plan':
        return (
          <div className="flex flex-col lg:flex-row gap-6 mt-2 animate-in fade-in duration-500">
            <div className={`flex-1 border rounded-[32px] p-6 md:p-8 flex flex-col justify-between min-h-[480px] md:h-[520px] transition-all ${currentPlan === 'Free' ? 'bg-[#3A3C4D]/40 border-indigo-400' : 'bg-[#3A3C4D]/20 border-gray-800 opacity-80'}`}>
              <div>
                <h3 className="text-3xl md:text-4xl font-semibold mb-2">Free</h3>
                <p className="text-xl md:text-2xl font-medium mb-8">$ 0 <span className="text-gray-500 text-sm">/month</span></p>
                <ul className="space-y-4">
                  {['1 project', '10 changes', 'Realtime preview', 'Public projects'].map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle2 size={18} className="text-indigo-400 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                disabled={currentPlan === 'Free'}
                onClick={() => {
                  setCurrentPlan('Free');
                  localStorage.setItem('userPlan', 'Free');
                  window.dispatchEvent(new Event('storage'));
                }}
                className={`w-full py-4 rounded-full font-bold mt-8 transition-all ${currentPlan === 'Free' ? 'bg-gray-700 text-gray-500' : 'bg-white text-black active:scale-95'}`}
              >
                {currentPlan === 'Free' ? 'Current' : 'Select'}
              </button>
            </div>

            <div className={`flex-1 rounded-[32px] p-6 md:p-8 flex flex-col justify-between min-h-[480px] md:h-[520px] relative transition-all ${currentPlan === 'Pro' ? 'bg-[#4f4dbd] ring-2 ring-white/30 shadow-2xl shadow-indigo-500/20' : 'bg-[#5E5CE6]'}`}>
              <div className="absolute top-6 right-6 bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase">Popular</div>
              <div>
                <h3 className="text-3xl md:text-4xl font-semibold mb-2">Pro</h3>
                <p className="text-xl md:text-2xl font-medium mb-8">$ 50 <span className="text-white/70 text-sm">/month</span></p>
                <ul className="space-y-4">
                  {['3 projects', '200 changes', 'ZIP Download', 'Git Integration'].map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 size={18} className="shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                disabled={currentPlan === 'Pro'}
                onClick={() => {
                  setCurrentPlan('Pro');
                  localStorage.setItem('userPlan', 'Pro');
                  window.dispatchEvent(new Event('storage'));
                }}
                className={`w-full py-4 rounded-full font-bold mt-8 transition-all ${currentPlan === 'Pro' ? 'bg-indigo-300/20 text-white/50' : 'bg-white text-indigo-600 active:scale-95'}`}
              >
                {currentPlan === 'Pro' ? 'Current' : 'Select'}
              </button>
            </div>
          </div>
        );
      case 'Security':
        return (
          <div className="space-y-4 animate-in fade-in duration-300">
            {Object.keys(securitySettings).map((key) => (
              <div key={key} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                <span className="text-gray-200 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                <button onClick={() => setSecuritySettings(s => ({ ...s, [key]: !s[key] }))}
                  className={`w-12 h-6 rounded-full relative transition-colors ${securitySettings[key] ? 'bg-[#5E5CE6]' : 'bg-gray-600'}`}>
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${securitySettings[key] ? 'left-7' : 'left-1'}`} />
                </button>
              </div>
            ))}
          </div>
        );
      default:
        return (
          <div className="space-y-3 animate-in fade-in duration-300">
            {['Quick login', 'SEO Privacy', 'Accessibility'].map((item) => (
              <div key={item} className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all group cursor-pointer">
                <span className="text-gray-200">{item}</span>
                <ChevronRight size={18} className="text-gray-700 group-hover:text-indigo-400 transition-all" />
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#050714] text-white font-sans flex flex-col">
      <Header />
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 md:px-12 py-10 mt-20 md:mt-28">

        <div className="mb-8 md:mb-16 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-medium font-indie">Settings</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-20">

          <nav className="grid grid-cols-3 sm:flex sm:flex-wrap md:flex-col gap-2 md:w-48 shrink-0">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`text-center md:text-left px-3 md:px-8 py-2 md:py-3.5 rounded-xl md:rounded-2xl text-xs sm:text-sm md:text-xl transition-all font-medium ${
                  activeTab === item ? 'bg-[#3A3C4D] text-white shadow-lg' : 'bg-white/5 md:bg-transparent text-gray-500 hover:text-gray-300'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="hidden md:block w-px bg-gray-800/60 self-stretch" />

          <section className="flex-1 pb-10">
            <h2 className="text-2xl md:text-4xl font-medium mb-6 md:mb-12 text-indigo-400/80 font-indie md:uppercase md:tracking-widest md:text-sm md:opacity-50">
              {activeTab}
            </h2>
            {renderContent()}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Settings;
