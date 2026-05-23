import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="flex-1 relative max-w-md mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2670&auto=format&fit=crop"
                alt="Expert Locksmith Technician"
                className="rounded-[2rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full h-[300px] object-cover"
              />
            </motion.div>
            {/* Background Shape */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/20 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-brand-navy/5 rounded-[3rem] -z-10 rotate-12"></div>
            
            <div className="absolute bottom-10 right-10 bg-brand-navy text-white p-6 rounded-3xl shadow-2xl max-w-[240px] hidden md:block">
              <div className="text-3xl font-bold text-brand-gold mb-1">15+</div>
              <div className="text-xs font-semibold uppercase tracking-widest text-white/60">Years in business</div>
              <div className="mt-4 text-xs text-white/80">Serving our local community with pride since 2009.</div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4 leading-tight">
              About DFW Rapid <br />
              <span className="text-brand-gold">Locksmith Services</span>
            </h2>
            <p className="text-base text-gray-600 mb-4 leading-relaxed">
              Founded on the principles of speed, reliability, and unparalleled trust, DFW Rapid Locksmith 
              started as a small local mobile service and has grown into the area's premier security solution provider.
            </p>
            <p className="text-base text-gray-600 mb-6 leading-relaxed font-medium">
              We specialize in advanced security systems while maintaining our roots in traditional 
              locksmithing. Our team consists of master locksmiths who are as passionate about your 
              security as you are.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Certified Master Locksmiths',
                'Advanced Mobile Equipment',
                'Transparent Flat-Rate Pricing',
                'Fully Bonded and Insured',
                'High-Security Lock Experts',
                'Smart Home Integration Pros'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-gold" size={20} />
                  <span className="font-semibold text-sm text-brand-navy">{item}</span>
                </div>
              ))}
            </div>

            <button className="mt-8 bg-brand-navy hover:bg-brand-navy/90 text-white px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-105">
              READ FULL STORY
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
