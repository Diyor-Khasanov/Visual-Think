import React from 'react';
import { Upload, Mic, Send, Sparkles, Palette, Edit3, UploadCloud, Check, ChevronLeft, ChevronRight, Sparkle, Twitter, Linkedin } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './App.css'

const App = () => {
  const steps = [
    {
      icon: <Palette className="text-indigo-400" size={24} />,
      title: "Compose your dream",
    },
    {
      icon: <Edit3 className="text-indigo-400" size={24} />,
      title: "Tune/Change as you need",
    },
    {
      icon: <UploadCloud className="text-indigo-400" size={24} />,
      title: "Export to any cloud",
    },
  ];

  const plans = [
    {
      name: "Free",
      price: "0",
      features: ["1 project", "10 changes per month", "Realtime preview", "Export any cloud", "Public projects"],
      buttonText: "Get started",
      footer: "No credit cards required"
    },
    {
      name: "Starter",
      price: "20",
      features: ["1 projects", "40 changes per month", "Export any cloud", "Git integration", "Support by E-mail"],
      buttonText: "Select",
      footer: "Free 14 Days trial. No credit cards required",
      highlighted: true
    },
    {
      name: "Pro",
      tag: "Most popular",
      price: "50",
      features: ["3 projects", "200 changes per month", "Export any cloud + ZIP download", "Git integration + GitOps", "Support by E-mail"],
      buttonText: "Select",
      footer: "Refund within 14 days when <20% resources used",
      isPro: true
    },
    {
      name: "Ultimate",
      tag: "Beta",
      price: "100",
      features: ["5 projects", "400 changes per month", "Realtime preview", "Export any cloud + ZIP download", "Git integration + GitOps", "Private projects", "Extended project capabilities", "Support by E-mail"],
      buttonText: "Select"
    }
  ];

  return (
    <div className="relative min-h-[600px] w-full bg-[#050714] text-white overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 z-0 opacity-30">
        <img src="../public/Vector.png" alt="" className='mt-80' />
        <img src="../public/Vector (1).png" alt="" className='-mt-120' />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-100 w-full bg-[#050714]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="text-3xl font-medium tracking-tight font-indie text-white">
            Visual think
          </div>
          <div className="hidden md:flex space-x-10 text-lg text-gray-400">
            <a href="#how" className="hover:text-white transition">How it works</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#about" className="hover:text-white transition">About Us</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-5 py-2 text-sm text-gray-300 hover:text-white transition">
              Log in
            </button>
            <button className="px-6 py-2 text-sm bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-500 shadow-lg shadow-indigo-500/30 transition active:scale-95">
              Start for free
            </button>
          </div>
        </div>
      </nav>

      <div className="relative z-10 flex flex-col items-center justify-center grow w-full px-4 text-center">
        <Sparkles className="absolute top-20 left-1/4 text-blue-400 opacity-60" size={12} />
        <Sparkles className="absolute bottom-40 right-1/4 text-blue-400 opacity-60" size={12} />

        <h1 className="text-7xl md:text-9xl font-normal mb-105 tracking-tight font-indie mt-30">
          Visual think
        </h1>

        <div className="absolute w-full max-w-4xl h-64 pointer-events-none mt-20">
          <div className="absolute left-10 top-20 flex items-center space-x-2 text-sm text-gray-300">
            <Sparkles size={14} className="text-indigo-400" />
            <span>AI Visual edit</span>
          </div>
          <div className="absolute left-1/3 bottom-12 flex items-center space-x-2 text-sm text-gray-300">
            <Sparkles size={14} className="text-indigo-400" />
            <span>Voice action edit</span>
          </div>
          <div className="absolute right-1/4 top-0 flex items-center space-x-2 text-sm text-gray-300">
            <Sparkles size={14} className="text-indigo-400" />
            <span>Drag & drop edit</span>
          </div>
          <div className="absolute right-10 bottom-4 flex items-center space-x-2 text-sm text-gray-300">
            <Sparkles size={14} className="text-indigo-400" />
            <span>Edit with promt</span>
          </div>
        </div>

        <div className="w-full max-w-2xl bg-white rounded-full p-1.5 flex items-center shadow-2xl shadow-indigo-500/20 mt-28 mb-12">
          <input
            type="text"
            placeholder="Compose your dream startup here..."
            className="grow bg-transparent px-6 py-3 text-gray-800 outline-none placeholder-gray-400"
          />
          <div className="flex items-center space-x-2 px-2">
            <button className="p-2.5 text-indigo-600 bg-indigo-50 rounded-full hover:bg-indigo-100 transition">
              <Upload size={20} />
            </button>
            <button className="p-2.5 text-indigo-600 bg-indigo-50 rounded-full hover:bg-indigo-100 transition">
              <Mic size={20} />
            </button>
            <button className="flex items-center space-x-2 bg-indigo-600 px-6 py-2.5 rounded-full font-medium hover:bg-indigo-500 transition group">
              <span>Send</span>
              <Send size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <section className="py-24 px-8 flex flex-col items-center overflow-hidden">
        <div className="relative mb-20">
          <div className="absolute -left-36 -top-4 w-32 h-20 opacity-80 pointer-events-none">
            <svg viewBox="0 0 150 100" fill="none" className="w-full h-full stroke-white/60">
              <path d="M10 80 C 40 10, 80 10, 100 40 C 110 60, 90 70, 80 60 C 70 50, 80 30, 130 40" strokeWidth="2" strokeLinecap="round" />
              <path d="M120 30 L 135 40 L 122 52" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          <h2 className="text-white text-7xl font-normal tracking-tight flex items-center gap-4 font-indie">
            How it works
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-6xl w-full">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="relative group w-full md:w-72 h-48 bg-[#161b33]/40 border border-white/10 rounded-2xl flex flex-col items-center justify-center p-6 transition-all hover:bg-[#1c2242]/60 hover:border-white/20">
                <div className="w-14 h-14 rounded-full bg-linear-to-b from-gray-700 to-gray-900 flex items-center justify-center mb-6 shadow-inner border border-white/5">
                  <div className="bg-indigo-500/10 p-2 rounded-full">
                    {step.icon}
                  </div>
                </div>

                <p className="text-gray-300 text-center font-medium leading-tight px-4">
                  {step.title}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block w-12 h-8 opacity-60">
                  <svg viewBox="0 0 50 30" fill="none" className="w-full h-full stroke-white/40">
                    <path d="M5 15 Q 25 5, 45 15" strokeWidth="2" strokeLinecap="round" />
                    <path d="M38 8 L 46 15 L 38 22" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      <section className="py-20 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16 relative">
            <h2 className="text-7xl font-light relative font-indie flex items-center justify-center gap-10">
              Pricing
              <div className='w-[170px]'>
                <img src="../public/priceVector.png" alt="" className='' />
              </div>
            </h2>
          </div>

          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            initialSlide={1}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3, centeredSlides: false },
              1280: { slidesPerView: 4, centeredSlides: false },
            }}
            className="pb-12 overflow-visible!"
          >
            {plans.map((plan, index) => (
              <SwiperSlide key={index} className="h-auto">
                {({ isActive }) => (
                  <div className={`
                  h-full p-8 rounded-[40px] border transition-all duration-500 flex flex-col
                  ${plan.isPro ? 'bg-indigo-600 border-indigo-400' : 'bg-[#1a1d33] border-white/10'}
                  ${plan.highlighted && !plan.isPro ? 'ring-2 ring-indigo-500/50' : ''}
                  hover:scale-105 hover:z-10 hover:opacity-100 hover:shadow-2xl hover:shadow-indigo-500/20 scale-95 opacity-50'
                `}>

                    {plan.tag && (
                      <span className="absolute top-8 right-8 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-white/20">
                        {plan.tag}
                      </span>
                    )}

                    <div className="mb-8">
                      <h3 className="text-2xl font-medium mb-4">{plan.name}</h3>
                      <div className="flex items-baseline">
                        <span className="text-5xl font-bold">${plan.price}</span>
                        <span className="text-gray-400 text-sm ml-1">/month</span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-10 grow">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-[13px]">
                          <div className="mt-1">
                            <Check size={12} className="text-white" />
                          </div>
                          <span className={`${feature.includes('+') ? 'text-yellow-400 font-semibold' : 'text-gray-300'}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <button className={`w-full py-4 rounded-full font-bold transition-all active:scale-95
                    ${plan.isPro || isActive ? 'bg-white text-indigo-900' : 'bg-gray-700 text-gray-300'}
                  `}>
                      {plan.buttonText}
                    </button>

                    {plan.footer && (
                      <p className="mt-4 text-[10px] text-center text-gray-400 uppercase tracking-tight leading-tight">
                        {plan.footer}
                      </p>
                    )}
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="py-32 px-6 flex flex-col items-center relative overflow-hidden text-white">
        <div className="relative mb-8 flex items-center justify-center gap-10">
            <img src="../public/vectorAbout.png" alt="" className='w-[170px]' />

          <h2 className="text-7xl font-indie font-light tracking-tight">About us</h2>

          <Sparkle
            className="absolute -right-24 top-4 text-blue-400 opacity-60 animate-pulse"
            size={16}
          />
        </div>

        {/* Content Text */}
        <div className="max-w-3xl w-full text-center space-y-8 mt-12">
          <div className="space-y-2">
            <p className="text-xl md:text-2xl text-gray-300">
              We are startup from company <span className="text-white font-medium">SamIT Global</span>
            </p>
            <p className="text-xl md:text-2xl text-gray-300 relative inline-block">
              Our goal make development
              <span className="text-indigo-400 italic ml-2 relative">
                easier, fun and efficient.
                {/* Decorative underline */}
                <svg className="absolute -bottom-2 left-0 w-full h-2 opacity-60" viewBox="0 0 200 10">
                  <path d="M5 5 Q 100 12, 195 5" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-gray-400 leading-relaxed px-4 md:px-0">
              Our all team from Samarkand, Uzbekistan and we do our
              all the best effort to make your experience better.
              We always happy to hear any feedback
            </p>
          </div>
        </div>
      </section>

      <footer className="w-full text-white pt-20 pb-10 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col md:flex-row justify-between items-start">

            <div className="space-y-4 mb-10 md:mb-0">
              <h4 className="text-lg font-bold tracking-tight">Our contacts:</h4>
              <div className="space-y-1 text-gray-400 text-lg">
                <p>+1 (234) 567-89-00</p>
                <p className="hover:text-white transition-colors cursor-pointer">
                  cooperation@samit.global
                </p>
              </div>
            </div>

            <div className="flex flex-col md:items-end space-y-3 text-lg">
              <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
              <a href="#career" className="text-gray-400 hover:text-white transition-colors">Career</a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-10 gap-6">
            <div className="text-gray-500 text-sm leading-relaxed text-center md:text-left">
              Copyright (c) 2025 SamIT Global <br />
              All rights reserved
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <Twitter size={20} className="text-[#050714] fill-current" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <Linkedin size={20} className="text-[#050714] fill-current" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
