import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  Upload,
  Mic,
  SendHorizontal,
  User,
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import '../App.css'

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [projectTitle, setProjectTitle] = useState('Project');

  useEffect(() => {
    console.log(`Fetching data for project ID: ${id}`);
  }, [id]);

  return (
    <div className="min-h-screen bg-[#050714] text-white font-sans flex flex-col">

      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-800/50 bg-[#050714] sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/dashboard')}
            className="p-2 hover:bg-white/5 rounded-lg text-gray-400 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="text-3xl font-light tracking-tight font-indie">Visual think</div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs">
            <span className="text-indigo-400 font-bold">✦</span>
            <span className="text-gray-300">Pro</span>
          </div>
          <div className="text-sm text-gray-400 font-medium">$ 3,27</div>
          <Link to={'/settings'} className="w-10 h-10 rounded-full bg-indigo-600/20 border border-indigo-600/40 text-indigo-400 overflow-hidden flex items-center justify-center">
            <User size={20} />
          </Link>
        </div>
      </nav>

      <main className="flex-1 flex flex-col items-center py-10 px-6 overflow-y-auto">

        <div className="w-full max-w-4xl mb-8">
          <h1 className="text-7xl font-medium tracking-wide text-gray-200 font-indie">
            {projectTitle} <span className="text-gray-600 text-sm ml-2">ID: {id}</span>
          </h1>
        </div>

        <div className="w-full max-w-4xl mb-12">
          <div className="flex items-center gap-3">
            <div className="flex-1 relative flex items-center bg-[#0a0d1d] border border-gray-800 rounded-2xl p-2 pl-6 shadow-2xl">
              <input
                type="text"
                placeholder="Compose your dream startup here..."
                className="flex-1 bg-transparent border-none outline-none text-gray-300 placeholder-gray-500 text-sm py-3"
              />
              <div className="flex items-center gap-2 mr-2">
                <button className="p-2 hover:bg-white/5 rounded-lg text-gray-400 transition-colors">
                  <Upload size={18} />
                </button>
                <button className="p-2 hover:bg-white/5 rounded-lg text-gray-400 transition-colors">
                  <Mic size={18} />
                </button>
                <button className="bg-[#5E5CE6] hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2">
                  Send <SendHorizontal size={16} />
                </button>
              </div>
            </div>

            <button className="bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 px-6 py-4 rounded-2xl font-medium hover:bg-indigo-500/20 transition-all flex items-center gap-2">
              Finish <Sparkles size={18} />
            </button>
          </div>
        </div>

        <div className="w-full max-w-5xl bg-black rounded-t-[40px] border-x border-t border-gray-800 shadow-2xl overflow-hidden min-h-[1000px] p-12">

          <header className="flex justify-between items-center mb-16">
            <div className="w-8 h-8 bg-white rounded-lg opacity-90"></div>
            <nav className="flex gap-6 text-[10px] text-gray-500 uppercase tracking-widest">
              <span>Feature</span><span>Pricing</span><span>About</span><span>Contact</span>
            </nav>
            <button className="bg-yellow-400 text-black px-4 py-1.5 rounded text-xs font-bold uppercase">Ready</button>
          </header>

          <section className="flex flex-col md:flex-row gap-12 items-center mb-24">
            <div className="flex-1 space-y-6">
              <h2 className="text-6xl font-bold leading-tight">Landing <br /> Page <br /> Builder</h2>
              <p className="text-gray-500 max-w-sm text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
              </p>
              <button className="border border-white/20 px-8 py-3 rounded-md text-xs font-medium hover:bg-white/5 transition-all">Action</button>
            </div>
            <div className="flex-1 relative h-[400px] w-full bg-white/5 rounded-3xl overflow-hidden flex items-center justify-center border border-white/10">
              <div className="absolute top-10 right-10 w-48 h-64 bg-white rounded-2xl rotate-6 shadow-2xl p-4">
                <p className="text-black font-bold text-lg">Your text</p>
              </div>
              <div className="absolute bottom-10 left-10 w-48 h-64 bg-gray-800 rounded-2xl -rotate-12 shadow-2xl p-4">
                <p className="text-white font-bold text-lg">Visual</p>
              </div>
            </div>
          </section>

          <div className="flex justify-center gap-10 border-y border-white/10 py-6 mb-24">
            {['Company', 'Company', 'Company', 'Company'].map((c, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-gray-400 font-medium">
                <div className="w-3 h-3 rounded-full bg-white/20"></div> {c}
              </div>
            ))}
          </div>

          <section className="space-y-4 max-w-2xl">
            <h3 className="text-3xl font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <div className="flex gap-4">
              <button className="bg-green-400 text-black px-4 py-1 rounded text-[10px] font-bold">Feature Highlight</button>
              <button className="text-gray-500 text-[10px]">Learn more</button>
            </div>
          </section>

          <div className="mt-32 text-center">
            <h4 className="text-4xl font-bold mb-4 italic tracking-tighter">Roadmap</h4>
            <div className="h-1 w-full max-w-[200px] mx-auto bg-white/10 rounded-full"></div>
          </div>

        </div>
      </main>

      <footer className="px-12 py-12 bg-[#050714] border-t border-gray-800/50">
        <div className="max-w-6xl mx-auto flex justify-between text-gray-500 text-xs">
          <div>© 2025 SamIT Global</div>
          <div className="flex gap-6 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">Career</a>
            <a href="#" className="hover:text-white transition-colors font-medium text-white">About Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Details;
