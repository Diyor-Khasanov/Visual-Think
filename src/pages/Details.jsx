import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Upload,
  Mic,
  SendHorizontal,
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [projectTitle, setProjectTitle] = useState('Project');

  useEffect(() => {
    console.log(`Fetching data for project ID: ${id}`);
  }, [id]);

  return (
    <div className="min-h-screen bg-[#050714] text-white font-sans flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col items-center pt-24 md:pt-32 pb-10 px-4 md:px-6">

        <div className="w-full max-w-5xl mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-4 text-sm group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
          </button>

          <h1 className="text-4xl md:text-7xl font-medium tracking-wide text-gray-200 font-indie break-words">
            {projectTitle} <span className="text-gray-600 text-xs md:text-sm block md:inline md:ml-2">ID: {id}</span>
          </h1>
        </div>

        <div className="w-full max-w-5xl mb-12">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4">
            <div className="flex-1 relative flex flex-col sm:flex-row items-center bg-[#0a0d1d] border border-gray-800 rounded-2xl p-2 sm:pl-6 shadow-2xl">
              <input
                type="text"
                placeholder="Compose your dream startup here..."
                className="w-full sm:flex-1 bg-transparent border-none outline-none text-gray-300 placeholder-gray-500 text-sm py-4 sm:py-3"
              />
              <div className="flex items-center justify-between w-full sm:w-auto gap-2 sm:mr-2 border-t sm:border-t-0 border-gray-800/50 pt-2 sm:pt-0">
                <div className="flex gap-1">
                  <button className="p-2 hover:bg-white/5 rounded-lg text-gray-400 transition-colors">
                    <Upload size={18} />
                  </button>
                  <button className="p-2 hover:bg-white/5 rounded-lg text-gray-400 transition-colors">
                    <Mic size={18} />
                  </button>
                </div>
                <button className="bg-[#5E5CE6] hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2 active:scale-95">
                  Send <SendHorizontal size={16} />
                </button>
              </div>
            </div>

            <button className="bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 px-6 py-4 rounded-2xl font-medium hover:bg-indigo-500/20 transition-all flex items-center justify-center gap-2 active:scale-95">
              Finish <Sparkles size={18} />
            </button>
          </div>
        </div>

        <div className="w-full max-w-5xl bg-black rounded-t-[30px] md:rounded-t-[40px] border-x border-t border-gray-800 shadow-2xl overflow-hidden min-h-[800px] p-6 md:p-12">

          <header className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-16">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-white rounded-lg opacity-90 shrink-0"></div>
              <span className="sm:hidden font-bold tracking-tighter uppercase text-[10px]">Logo</span>
            </div>
            <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest">
              {['Feature', 'Pricing', 'About', 'Contact'].map(link => (
                <span key={link} className="hover:text-white cursor-pointer transition-colors">{link}</span>
              ))}
            </nav>
            <button className="bg-yellow-400 text-black px-4 py-1.5 rounded text-[10px] md:text-xs font-bold uppercase active:scale-95">Ready</button>
          </header>

          <section className="flex flex-col lg:flex-row gap-12 items-center mb-24">
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                Landing <br className="hidden md:block" /> Page <br className="hidden md:block" /> Builder
              </h2>
              <p className="text-gray-500 max-w-sm mx-auto lg:mx-0 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
              </p>
              <button className="border border-white/20 px-8 py-3 rounded-md text-xs font-medium hover:bg-white/5 transition-all">Action</button>
            </div>

            <div className="flex-1 relative h-[300px] md:h-[400px] w-full bg-white/5 rounded-3xl overflow-hidden flex items-center justify-center border border-white/10 mt-8 lg:mt-0">
              <div className="absolute top-10 right-4 md:right-10 w-32 md:w-48 h-48 md:h-64 bg-white rounded-xl md:rounded-2xl rotate-6 shadow-2xl p-4 transition-transform hover:rotate-0 cursor-pointer">
                <p className="text-black font-bold text-sm md:text-lg">Your text</p>
              </div>
              <div className="absolute bottom-10 left-4 md:left-10 w-32 md:w-48 h-48 md:h-64 bg-gray-800 rounded-xl md:rounded-2xl -rotate-12 shadow-2xl p-4 transition-transform hover:rotate-0 cursor-pointer border border-white/10">
                <p className="text-white font-bold text-sm md:text-lg">Visual</p>
              </div>
            </div>
          </section>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10 border-y border-white/10 py-8 mb-24">
            {['Company', 'Company', 'Company', 'Company'].map((c, i) => (
              <div key={i} className="flex items-center gap-2 text-[10px] md:text-xs text-gray-400 font-medium whitespace-nowrap">
                <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-white/20"></div> {c}
              </div>
            ))}
          </div>

          <section className="space-y-6 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <h3 className="text-2xl md:text-3xl font-bold leading-snug">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="bg-green-400 text-black px-4 py-2 rounded text-[10px] font-bold uppercase tracking-wider">Feature Highlight</button>
              <button className="text-gray-500 text-[10px] uppercase font-bold tracking-widest hover:text-white transition-colors">Learn more</button>
            </div>
          </section>

          <div className="mt-32 text-center">
            <h4 className="text-3xl md:text-4xl font-bold mb-4 italic tracking-tighter">Roadmap</h4>
            <div className="h-1 w-full max-w-[150px] md:max-w-[200px] mx-auto bg-white/10 rounded-full"></div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Details;
