import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Emergency', href: '/services/emergency' },
    { name: 'Automotive', href: '/services/automotive' },
    { name: 'Residential', href: '/services/residential' },
    { name: 'Commercial', href: '/services/commercial' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-brand-navy text-white py-1.5 px-4 md:px-8 flex justify-between items-center text-[9px] md:text-[10px] tracking-wider fixed top-0 left-0 right-0 z-[60]">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 font-bold text-brand-gold">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
            NOW AVAILABLE: 15 MINUTE RESPONSE TIME
          </span>
          <span className="opacity-30 hidden sm:inline">|</span>
          <span className="opacity-80 hidden md:inline font-medium uppercase">Serving DFW & Surrounding Areas</span>
        </div>
        <div className="font-bold opacity-80 uppercase tracking-widest hidden sm:block italic">License #TX-94821</div>
      </div>

      <header
        className={cn(
          'fixed top-[28px] left-0 right-0 z-50 transition-all duration-300 border-b border-white/10',
          scrolled ? 'bg-brand-navy/95 shadow-lg py-2' : 'bg-brand-navy py-3'
        )}
      >
        <div className="container mx-auto px-4 md:px-8">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center group">
              <img 
                src="https://i.ibb.co/tpkq9b2V/dfw-logo.jpg" 
                alt="DFW Logo" 
                className="h-14 w-auto rounded-lg shadow-md"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-white hover:text-brand-gold font-bold transition-colors text-[10px] uppercase tracking-widest"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <a
                href="tel:2149230223"
                className="bg-brand-gold hover:bg-brand-gold/90 text-brand-navy px-5 py-2 rounded-full font-black text-xs transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-gold/20 flex items-center gap-2"
              >
                <Phone size={14} fill="currentColor" />
                (214) 923-0223
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-brand-navy fixed inset-0 top-[96px] z-40 overflow-hidden"
            >
              <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-display font-bold text-white hover:text-brand-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <a
                  href="tel:2149230223"
                  className="mt-4 bg-brand-gold text-brand-navy w-full max-w-sm py-4 rounded-xl font-bold flex items-center justify-center gap-3 text-xl shadow-xl shadow-brand-gold/20"
                >
                  <Phone size={24} />
                  <span>Call Now: (214) 923-0223</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
