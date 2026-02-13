import { Facebook, Linkedin, Mail, Phone } from 'lucide-react';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full px-6 md:px-12 py-12 bg-[#050714] border-t border-gray-800/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12 text-center md:text-left">

        <div className="flex flex-col items-center md:items-start space-y-6 order-2 md:order-1">
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-white tracking-tight">Our contacts:</h4>
            <div className="text-gray-400 space-y-3">
              <a href="tel:+12345678900" className="flex items-center justify-center md:justify-start gap-3 hover:text-indigo-400 transition-colors">
                <Phone size={18} className="text-indigo-500" />
                <span>+1 (234) 567-89-00</span>
              </a>
              <a href="mailto:cooperation@samit.global" className="flex items-center justify-center md:justify-start gap-3 hover:text-indigo-400 transition-colors">
                <Mail size={18} className="text-indigo-500" />
                <span>cooperation@samit.global</span>
              </a>
            </div>
          </div>

          <div className="pt-4 md:pt-8 text-xs md:text-sm text-gray-500 leading-relaxed">
            Copyright (c) {currentYear} SamIT Global<br />
            All rights reserved
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-10 order-1 md:order-2 w-full md:w-auto">
          <nav className="flex flex-wrap justify-center md:flex-col items-center md:items-end gap-6 md:gap-4 text-base md:text-lg">
            <a href="#pricing" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Pricing</a>
            <a href="#career" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Career</a>
            <a href="#about" className="text-white hover:text-indigo-400 transition-colors cursor-pointer font-medium">About Us</a>
          </nav>

          <div className="flex gap-4">
            <p
              className="w-12 h-12 md:w-10 md:h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all duration-300 border border-white/5"
            >
              <Facebook size={22} />
            </p>
            <p
              className="w-12 h-12 md:w-10 md:h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all duration-300 border border-white/5"
            >
              <Linkedin size={22} />
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
