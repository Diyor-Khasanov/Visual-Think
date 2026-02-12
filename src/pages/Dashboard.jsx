import React from 'react';
import {
  Plus,
  Search,
  Upload,
  Mic,
  SendHorizontal,
  Lock,
  User,
  LogOut,
  Linkedin,
  Facebook,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import '../App.css'

const Dashboard = () => {

  const projectData = [
    { id: 1, title: 'Agenmark landing', edited: 'Edited 1 day ago', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80', locked: false },
    { id: 2, title: 'Agenmark landing', edited: 'Edited month ago', img: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=500&q=80', locked: false },
    { id: 3, title: 'Agenmark landing', edited: 'Edited 1 day ago', img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=500&q=80', locked: false },
    { id: 4, title: 'Agenmark landing', edited: 'Edited 1 day ago', img: '', locked: true },
  ];

  return (
    <div className="min-h-screen bg-[#050714] text-white font-sans flex flex-col">

      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-800/50">
        <div className="text-3xl font-light tracking-tight font-indie">Visual think</div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs">
            <span className="text-indigo-400 font-bold">✦</span>
            <span className="text-gray-300">Pro</span>
          </div>
          <div className="text-sm text-gray-400 font-medium">
            $ 3,27
          </div>
          <div className="group relative">
            <Link to={'/settings'} className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600/20 border border-indigo-600/40 text-indigo-400 overflow-hidden">
              <User size={20} />
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-6xl mx-auto w-full px-8 py-10 space-y-12">

        <div className="max-w-3xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative flex items-center bg-[#0a0d1d] border border-indigo-500/30 rounded-2xl p-2 pl-6 shadow-2xl">
              <input
                type="text"
                placeholder="Compose your dream startup here..."
                className="flex-1 bg-transparent border-none outline-none text-gray-300 placeholder-gray-500 text-sm py-3"
              />
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-white/5 rounded-lg text-gray-400 transition-colors">
                  <Upload size={18} />
                </button>
                <button className="p-2 hover:bg-white/5 rounded-lg text-gray-400 transition-colors">
                  <Mic size={18} />
                </button>
                <button className="flex items-center gap-2 bg-[#5E5CE6] hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all active:scale-95 shadow-lg shadow-indigo-600/30">
                  Send <SendHorizontal size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-4xl font-medium tracking-tight font-indie">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {projectData.map((project) => (
              <Link to={`/project/${project.id}`} key={project.id} className="group relative bg-[#0a0d1d] border border-gray-800/60 rounded-3xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 shadow-sm hover:shadow-indigo-500/10">

                <div className="aspect-video w-full bg-[#050714] overflow-hidden relative">
                  {project.locked ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-4 bg-indigo-900/10">
                      <div className="w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                        <Lock size={32} />
                      </div>
                      <p className="text-sm text-gray-400 max-w-[200px]">
                        Purchase additional changes in <span className="text-yellow-400">Settings</span> to unlock
                      </p>
                    </div>
                  ) : (
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-medium mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-500">{project.edited}</p>
                </div>
              </Link>
            ))}
          </div>

          <button className="w-full flex items-center justify-center gap-3 py-4 border-2 border-dashed border-gray-800 rounded-3xl text-gray-500 hover:text-gray-300 hover:border-gray-700 hover:bg-white/5 transition-all">
            Add new project <Plus size={18} />
          </button>
        </div>
      </main>

      <footer className="mt-auto px-12 py-12 bg-[#050714] border-t border-gray-800/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Our contacts:</h4>
            <div className="text-gray-400 space-y-1">
              <p>+1 (234) 567-89-00</p>
              <p>cooperation@samit.global</p>
            </div>
            <div className="pt-8 text-sm text-gray-500">
              Copyright (c) 2025 SamIT Global<br />
              All rights reserved
            </div>
          </div>

          <div className="flex flex-col items-end gap-10">
            <div className="flex flex-col items-end gap-4 text-lg">
              <p className="hover:text-indigo-400 transition-colors cursor-pointer">Pricing</p>
              <p className="hover:text-indigo-400 transition-colors cursor-pointer">Career</p>
              <p className="hover:text-indigo-400 transition-colors cursor-pointer font-medium">About Us</p>
            </div>
            <div className="flex gap-4">
              <p className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all">
                <Facebook size={25} />
              </p>
              <p className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all">
                <Linkedin size={25} />
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
