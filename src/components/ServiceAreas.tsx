import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { motion } from 'motion/react';

const cities = [
  'Austin', 'Round Rock', 'Cedar Park', 'Pflugerville', 'Georgetown', 'San Marcos', 'Kyle', 'Buda', 
  'Dripping Springs', 'Lakeway', 'Bee Cave', 'Bastrop', 'Elgin', 'Lockhart', 'Manor', 'Hutto'
];

export default function ServiceAreas() {
  return (
    <section className="py-16 bg-brand-bg relative overflow-hidden">
      {/* Decorative Map Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
            Local Service <span className="text-brand-gold">Areas</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Our fleet of mobile locksmith units is strategically stationed throughout the region 
            to ensure response times of 15-20 minutes or less.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {cities.map((city, index) => (
            <motion.div
              key={city}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.02 }}
              viewport={{ once: true }}
              className="group bg-white p-4 rounded-2xl border border-gray-100 hover:border-brand-gold/30 hover:shadow-lg transition-all flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-brand-navy/5 text-brand-navy rounded-xl flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors">
                  <MapPin size={16} />
                </div>
                <span className="font-bold text-sm text-brand-navy">{city}, TX</span>
              </div>
              <Navigation size={16} className="text-brand-gold opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all" />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 bg-white p-6 md:p-8 rounded-[2.5rem] shadow-xl border border-gray-100 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h3 className="text-xl font-display font-bold text-brand-navy mb-2">Don't see your city?</h3>
            <p className="text-sm text-gray-600">
              We cover the entire greater Austin metropolitan area. If you're within a 50-mile radius, we can help you.
            </p>
          </div>
          <a
            href="tel:18005550199"
            className="w-full md:w-auto bg-brand-navy text-white px-8 py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-3 hover:scale-105 transition-transform"
          >
            Check Availability
          </a>
        </div>
      </div>
    </section>
  );
}
