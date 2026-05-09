import React from 'react';
import { Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-40 lg:hidden pointer-events-none">
      <motion.a
        href="tel:18005550199"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="pointer-events-auto w-16 h-16 bg-brand-gold text-brand-navy rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden"
      >
        <span className="absolute inset-0 bg-white/20 animate-ping rounded-full"></span>
        <Phone size={28} className="relative z-10" />
      </motion.a>
      
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-1/2 -left-48 translate-y-1/2 bg-brand-navy text-white px-4 py-2 rounded-lg text-sm font-bold shadow-xl border border-white/10"
      >
        Locked Out? Call Now!
      </motion.div>
    </div>
  );
}
