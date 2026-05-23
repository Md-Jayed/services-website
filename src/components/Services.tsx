import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useServices } from '../context/ServiceContext';
import { 
  AlertTriangle, 
  Car, 
  Home as HomeIcon, 
  Building2, 
  Wrench, 
  Key, 
  Lock, 
  Smartphone, 
  Vault, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';

const ICON_MAP: Record<string, React.ReactNode> = {
  AlertTriangle: <AlertTriangle size={24} />,
  Car: <Car size={24} />,
  Home: <HomeIcon size={24} />,
  Building2: <Building2 size={24} />,
  Wrench: <Wrench size={24} />,
  Key: <Key size={24} />,
  Lock: <Lock size={24} />,
  Smartphone: <Smartphone size={24} />,
  Vault: <Vault size={24} />,
  ShieldCheck: <ShieldCheck size={24} />
};

export default function Services() {
  const navigate = useNavigate();
  const { services } = useServices();

  return (
    <section id="services" className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-black text-brand-navy mb-2"
            >
              Our Professional <span className="text-brand-gold">Services</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base text-gray-500 font-medium"
            >
              Certified locksmiths providing premium security solutions for DFW homeowners and business owners since 2009.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <a href="#contact" className="bg-brand-bg text-brand-navy px-6 py-3 rounded-xl font-bold border border-gray-200 hover:border-brand-gold transition-all inline-block">
              View All Services
            </a>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => navigate(`/services/${service.slug}`)}
              className="flex gap-4 p-5 rounded-2xl hover:bg-brand-bg transition-all cursor-pointer group border border-transparent hover:border-gray-200 text-left"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-navy text-white flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold group-hover:text-brand-navy group-hover:scale-110 group-hover:-rotate-3 transition-all shadow-lg shadow-black/5">
                {ICON_MAP[service.iconType] || <Lock size={20} />}
              </div>
              <div className="flex flex-col">
                <h4 className="font-black text-brand-navy text-sm group-hover:text-brand-gold transition-colors">{service.title}</h4>
                <p className="text-[11px] text-gray-500 mt-1 leading-relaxed font-medium line-clamp-2">
                  {service.description}
                </p>
                <div className="mt-2 flex items-center gap-1 text-[10px] font-black text-brand-navy uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ChevronRight size={12} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
