import React from 'react';
import {
  Plus,
  Upload,
  Mic,
  SendHorizontal,
  Lock,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Dashboard = () => {
  const projectData = [
    { id: 1, title: 'Agenmark landing', edited: 'Edited 1 day ago', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80', locked: false },
    { id: 2, title: 'Agenmark landing', edited: 'Edited month ago', img: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=500&q=80', locked: false },
    { id: 3, title: 'Agenmark landing', edited: 'Edited 1 day ago', img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=500&q=80', locked: false },
    { id: 4, title: 'Agenmark landing', edited: 'Edited 1 day ago', img: '', locked: true },
  ];

  return (
    <div className="min-h-screen bg-[#050714] text-white font-sans flex flex-col">
      <Header />

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-8 py-8 md:py-12 mt-16 md:mt-20 space-y-12">

        <div className="max-w-3xl mx-auto w-full">
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative flex flex-col sm:flex-row items-center bg-[#0a0d1d] border border-indigo-500/30 rounded-2xl p-2 sm:pl-6 shadow-2xl">
              <input
                type="text"
                placeholder="Compose your dream startup here..."
                className="w-full sm:flex-1 bg-transparent border-none outline-none text-gray-300 placeholder-gray-500 text-sm py-4 sm:py-3 px-4 sm:px-0"
              />

              <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-2 p-2 sm:p-0 border-t sm:border-t-0 border-gray-800/50">
                <div className="flex items-center gap-1">
                  <button className="p-2.5 hover:bg-white/5 rounded-lg text-gray-400 transition-colors active:bg-white/10">
                    <Upload size={18} />
                  </button>
                  <button className="p-2.5 hover:bg-white/5 rounded-lg text-gray-400 transition-colors active:bg-white/10">
                    <Mic size={18} />
                  </button>
                </div>

                <button className="flex items-center justify-center gap-2 bg-[#5E5CE6] hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all active:scale-95 shadow-lg shadow-indigo-600/30 shrink-0">
                  <span className="hidden xs:block">Send</span> <SendHorizontal size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight font-indie text-center md:text-left">
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {projectData.map((project) => (
              <Link
                to={`/project/${project.id}`}
                key={project.id}
                className="group relative bg-[#0a0d1d] border border-gray-800/60 rounded-[2rem] overflow-hidden hover:border-indigo-500/50 transition-all duration-300 shadow-sm"
              >
                <div className="aspect-[16/10] sm:aspect-video w-full bg-[#050714] overflow-hidden relative">
                  {project.locked ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-4 bg-indigo-900/10 backdrop-blur-[2px]">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                        <Lock size={28} />
                      </div>
                      <p className="text-xs md:text-sm text-gray-400 max-w-[200px]">
                        Purchase additional changes in <span className="text-yellow-400">Settings</span> to unlock
                      </p>
                    </div>
                  ) : (
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                  )}
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-medium mb-1 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wider text-[10px] md:text-xs">
                    {project.edited}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <button className="w-full flex items-center justify-center gap-3 py-6 md:py-8 border-2 border-dashed border-gray-800/80 rounded-[2rem] text-gray-500 hover:text-indigo-400 hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all active:scale-[0.99]">
            <span className="text-lg font-medium">Add new project</span>
            <Plus size={22} />
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
