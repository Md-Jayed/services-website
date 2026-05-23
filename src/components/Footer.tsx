import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-bg border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img 
                src="https://i.ibb.co/tpkq9b2V/dfw-logo.jpg" 
                alt="DFW Logo" 
                className="h-12 w-auto rounded-lg shadow-md"
              />
            </Link>
            <p className="text-gray-500 font-medium leading-relaxed text-xs">
              Premium 24/7 locksmith services for automotive, residential, and commercial needs. 
              Proudly serving the entire DFW Metroplex including Dallas, Fort Worth, Arlington, Addison, Plano, Irving, Frisco, McKinney, Denton, Garland, Grapevine, Southlake, Flower Mound, Lewisville, Carrollton, Richardson, Mesquite, Rockwall, Mansfield, and surrounding North Texas communities.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-brand-navy hover:bg-brand-gold hover:border-brand-gold transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-brand-navy uppercase tracking-widest">Company</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/#about' },
                { name: 'Service Areas', href: '/#service-areas' },
                { name: 'FAQ', href: '/#faq' },
                { name: 'Contact Us', href: '/#contact' },
                { name: 'Admin', href: '/admin' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-500 hover:text-brand-gold font-bold text-xs transition-colors block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-brand-navy uppercase tracking-widest">Services</h4>
            <ul className="space-y-2">
              {[
                { name: 'Emergency Lockout', href: '/services/emergency' },
                { name: 'Car Key Replacement', href: '/services/automotive' },
                { name: 'Smart Lock Install', href: '/services/residential' },
                { name: 'Lock Rekeying', href: '/services/residential' },
                { name: 'Residential Security', href: '/services/residential' },
                { name: 'Commercial Systems', href: '/services/commercial' }
              ].map((service) => (
                <li key={service.name}>
                  <Link to={service.href} className="text-gray-500 hover:text-brand-gold font-bold text-xs transition-colors block">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-brand-navy uppercase tracking-widest">Connect</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-xs font-bold text-brand-navy">
                <MapPin className="text-brand-gold flex-shrink-0" size={16} />
                <span>Dallas, TX 75201</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-brand-navy">
                <Phone className="text-brand-gold flex-shrink-0" size={16} />
                <span><a href="tel:2149230223" className="hover:text-brand-gold transition-colors">(214) 923-0223</a></span>
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-brand-navy">
                <Mail className="text-brand-gold flex-shrink-0" size={16} />
                <span>help@dfwrapidlocksmith.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Support Areas (Theme Specific) */}
        <div className="py-4 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2">
            <span className="text-[9px] font-black text-gray-500 tracking-widest uppercase">We Support:</span>
            {['DALLAS', 'FORT WORTH', 'ARLINGTON', 'PLANO', 'FRISCO', 'IRVING', 'MCKINNEY', 'GRAPEVINE'].map(area => (
              <span key={area} className="text-[9px] text-gray-400 font-bold">{area}</span>
            ))}
          </div>
          <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">© {currentYear} DFW Rapid Locksmith. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
