import React from 'react';
import { Phone, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function EmergencyBanner() {
  return (
    <section className="relative py-8 bg-white">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="bg-brand-navy rounded-[3rem] p-6 md:p-10 flex flex-col lg:flex-row items-center justify-between shadow-2xl gap-8 overflow-hidden relative">
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100"><rect width="100" height="100" fill="none" stroke="white" strokeWidth="0.5"/></svg>
          </div>

          <div className="text-center lg:text-left flex-1 relative z-10">
            <span className="inline-block bg-brand-gold text-brand-navy px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest mb-4">
              Priority Response
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
              Need Help <span className="text-brand-gold">Now?</span> 
            </h2>
            <p className="text-base text-blue-100/70 font-medium max-w-lg">
              Call us immediately and we'll dispatch a specialized mobile technician to your location within 15 minutes.
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-3 relative z-10">
            <a
              href="tel:2149230223"
              className="bg-brand-gold hover:bg-white text-brand-navy px-8 py-4 rounded-2xl flex items-center gap-4 text-2xl md:text-3xl font-black shadow-xl shadow-brand-gold/20 transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              <Phone size={28} fill="currentColor" />
              (214) 923-0223
            </a>
            <div className="text-brand-gold/70 font-bold flex items-center gap-2 text-xs uppercase tracking-widest">
              <span className="w-2 h-2 bg-brand-gold rounded-full animate-pulse"></span>
              Emergency Dispatch Units Active
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
