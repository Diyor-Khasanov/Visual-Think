import React from 'react';
import { Home, ArrowLeft, Sparkles } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#050714] text-white flex flex-col items-center justify-center px-6 overflow-hidden relative">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none">
        <svg width="300" height="150" viewBox="0 0 300 150" fill="none" className="stroke-white">
          <path
            d="M10 80 C 80 10, 150 10, 180 60 C 200 100, 160 120, 140 100 C 120 80, 160 40, 280 70"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="8 8"
          />
        </svg>
      </div>

      <div className="relative z-10 text-center">
        <div className="relative inline-block">
          <h1 className="text-[12rem] md:text-[16rem] font-bold leading-none tracking-tighter opacity-10">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <Sparkles className="text-indigo-400 absolute -top-4 right-0 animate-pulse" size={32} />
            <p className="text-2xl md:text-4xl font-light tracking-wide">
              Page vanished into <span className="text-indigo-400 italic">space.</span>
            </p>
          </div>
        </div>

        <p className="mt-8 text-gray-400 max-w-md mx-auto text-lg leading-relaxed">
          The startup dream you're looking for has moved to a different orbit or never existed in this galaxy.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-all text-gray-300"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

          <a
            href="/"
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-500/20 transition-all active:scale-95 font-medium"
          >
            <Home size={18} />
            Return Home
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 text-gray-600 text-sm font-indie tracking-widest">
        VISUAL THINK
      </div>
    </div>
  );
};

export default NotFound;
