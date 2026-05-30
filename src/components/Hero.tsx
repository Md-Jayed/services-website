import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center pt-36 pb-8 overflow-hidden bg-brand-navy">
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 100">
          <rect width="100" height="100" fill="none" stroke="white" strokeWidth="0.1"/>
          <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="0.05" fill="none"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <span className="inline-block bg-brand-gold text-brand-navy px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest mb-6">
              Certified Expert Locksmiths
            </span>
            
            <h1 className="text-4xl lg:text-5xl font-black text-white leading-[1.1] mb-6">
              Locked Out? <br />
              <span className="text-brand-gold">We'll Be There In 15.</span>
            </h1>
            
            <p className="text-blue-100 text-base md:text-lg mb-8 max-w-lg leading-relaxed">
              Professional, fast, and affordable emergency locksmith services for your home, car, or business. 
              Average arrival time: 15-20 minutes.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:2149230223"
                className="bg-brand-gold hover:bg-brand-gold/90 text-brand-navy px-8 py-4 rounded-xl font-black text-lg flex items-center gap-3 shadow-2xl transition-all hover:scale-105 active:scale-95"
              >
                <Phone size={20} fill="currentColor" />
                CALL NOW
              </a>
              <button className="border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/5 transition-all">
                VIEW PRICING
              </button>
            </div>

            {/* Bottom Stats */}
            <div className="mt-10 flex flex-wrap gap-8 md:gap-12">
              <div className="flex flex-col">
                <span className="text-brand-gold text-2xl font-black">10,000+</span>
                <span className="text-[10px] text-blue-200 font-bold uppercase tracking-widest mt-1">Happy Clients</span>
              </div>
              <div className="hidden md:block w-px h-10 bg-white/10"></div>
              <div className="flex flex-col">
                <span className="text-brand-gold text-2xl font-black">30+</span>
                <span className="text-[10px] text-blue-200 font-bold uppercase tracking-widest mt-1">Years Exp.</span>
              </div>
              <div className="hidden md:block w-px h-10 bg-white/10"></div>
              <div className="flex flex-col">
                <span className="text-brand-gold text-2xl font-black">5★</span>
                <span className="text-[10px] text-blue-200 font-bold uppercase tracking-widest mt-1">Customer Rating</span>
              </div>
            </div>
          </motion.div>

          {/* Right Sidebar Form (High Density Theme Pattern) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[420px]"
          >
            <div className="bg-white p-6 rounded-[2rem] shadow-2xl border border-white/10">
              <h3 className="text-brand-navy text-xl font-black mb-1">Request a Quote</h3>
              <p className="text-gray-500 text-[10px] mb-6 uppercase font-bold tracking-widest">Instant response guaranteed</p>
              
              <form className="space-y-3">
                <div>
                  <label className="block text-[10px] font-black text-gray-500 uppercase mb-1 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2.5 bg-brand-bg border border-gray-200 rounded-xl focus:outline-none focus:border-brand-gold font-medium text-sm" 
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-500 uppercase mb-1 ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2.5 bg-brand-bg border border-gray-200 rounded-xl focus:outline-none focus:border-brand-gold font-medium text-sm" 
                    placeholder="(800) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-500 uppercase mb-1 ml-1">Service Type</label>
                  <select className="w-full px-4 py-2.5 bg-brand-bg border border-gray-200 rounded-xl focus:outline-none focus:border-brand-gold font-medium text-sm appearance-none">
                    <option>Emergency Lockout</option>
                    <option>Automotive Lockout</option>
                    <option>Residential Lock Repair</option>
                    <option>Smart Lock Installation</option>
                  </select>
                </div>
                <button className="w-full bg-brand-navy text-white font-black py-3 rounded-xl shadow-xl hover:scale-[1.02] active:scale-95 transition-all mt-2">
                  GET INSTANT PRICE
                </button>
                <p className="text-center text-[10px] text-gray-400 mt-4 leading-relaxed px-4">
                  By clicking, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>

            {/* Float Badges */}
            <div className="mt-8 flex justify-center gap-4">
               <div className="flex items-center gap-2 text-white/50 text-[10px] font-bold uppercase tracking-widest">
                 <ShieldCheck size={14} className="text-brand-gold" />
                 Licensed & Insured
               </div>
               <div className="flex items-center gap-2 text-white/50 text-[10px] font-bold uppercase tracking-widest">
                 <MapPin size={14} className="text-brand-gold" />
                 100% Local
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
