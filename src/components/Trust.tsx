import React from 'react';
import { Shield, Clock, Zap, Map, DollarSign, Users } from 'lucide-react';
import { motion } from 'motion/react';

const reasons = [
  {
    icon: <Shield className="text-brand-gold" size={32} />,
    title: 'Licensed & Insured',
    description: 'We are a fully licensed and insured business. Your safety and property are in good hands.'
  },
  {
    icon: <Clock className="text-brand-gold" size={32} />,
    title: '24/7 Availability',
    description: 'Our mobile technicians are on standby 24 hours a day, 7 days a week, including holidays.'
  },
  {
    icon: <Zap className="text-brand-gold" size={32} />,
    title: 'Fast Response Time',
    description: 'When you call, we dispatch the nearest technician immediately. Average arrival is 15-20 mins.'
  },
  {
    icon: <Map className="text-brand-gold" size={32} />,
    title: 'Mobile Locksmith',
    description: 'Our vans are fully equipped workshops on wheels, allowing us to finish any job on-site.'
  },
  {
    icon: <DollarSign className="text-brand-gold" size={32} />,
    title: 'Fair & Fast Pricing',
    description: 'Transparent, upfront pricing with no hidden fees. We provide high-quality service at competitive rates.'
  },
  {
    icon: <Users className="text-brand-gold" size={32} />,
    title: 'Expert Technicians',
    description: 'Highly trained professionals with years of experience in all lock and security systems.'
  }
];

export default function Trust() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4 leading-tight">
              Why Homeowners & Businesses <span className="text-brand-gold">Trust Us</span>
            </h2>
            <p className="text-base text-gray-600 mb-6 leading-relaxed">
              With over 15 years of experience serving the local community, we pride ourselves on being 
              the most reliable locksmith service. Our commitment to quality and customer satisfaction 
              is what sets us apart.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-4 bg-brand-bg p-3 rounded-xl">
                <div className="bg-brand-gold text-brand-navy p-2 rounded-lg font-bold text-lg">
                  15+
                </div>
                <div className="font-semibold text-sm text-brand-navy">Years of Excellence</div>
              </div>
              <div className="flex items-center gap-4 bg-brand-bg p-3 rounded-xl">
                <div className="bg-brand-gold text-brand-navy p-2 rounded-lg font-bold text-lg">
                  10k+
                </div>
                <div className="font-semibold text-sm text-brand-navy">Satisfied Clients</div>
              </div>
              <div className="flex items-center gap-4 bg-brand-bg p-3 rounded-xl">
                <div className="bg-brand-gold text-brand-navy p-2 rounded-lg font-bold text-lg">
                  4.9★
                </div>
                <div className="font-semibold text-sm text-brand-navy">Average Rating</div>
              </div>
            </div>
          </motion.div>

          <div className="flex-1 grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-5 bg-brand-bg rounded-[2rem] border border-gray-100 hover:border-brand-gold hover:bg-white hover:shadow-xl transition-all"
              >
                <div className="mb-4 transform group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                  {reason.icon}
                </div>
                <h3 className="text-sm font-black text-brand-navy uppercase tracking-widest mb-2">{reason.title}</h3>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
