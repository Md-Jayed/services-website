import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Homeowner',
    content: 'Locked myself out of the house at 11 PM. DFW Rapid Locksmith was there in 15 minutes and got me back in within seconds. Professional and well-priced!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    name: 'Robert Davis',
    role: 'Local Business Owner',
    content: 'Upgraded our entire office with a master key system. The technician was extremely knowledgeable and provided excellent advice on high-security locks.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=robert'
  },
  {
    name: 'Michael Chen',
    role: 'Car Owner',
    content: 'Locked my keys in the trunk with the engine running at the shopping mall. They arrived incredibly fast and opened the door quickly without a scratch. Fantastic service!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=michael'
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-gold/10 text-brand-gold px-4 py-1 rounded-full mb-4 font-bold text-xs tracking-widest"
          >
            <Star size={14} className="fill-current" />
            CLIENT TESTIMONIALS
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
            Hear From Our <span className="text-brand-gold">Clients</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-brand-bg p-6 rounded-[2.5rem] relative group hover:bg-brand-navy hover:text-white transition-all duration-500 shadow-lg shadow-gray-200/50"
            >
              <Quote className="absolute top-6 right-6 text-brand-gold/20 group-hover:text-brand-gold/10 transition-colors" size={40} />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-gold text-brand-gold" />
                ))}
              </div>

              <p className="text-base italic leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-brand-gold object-cover"
                />
                <div>
                  <div className="font-display font-bold text-lg">{testimonial.name}</div>
                  <div className="text-xs text-gray-500 group-hover:text-white/60 font-medium">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 text-xl font-display font-bold text-brand-navy justify-center">
              Dedicated to 5-Star Service
            </div>
            <div className="flex gap-1 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-brand-gold text-brand-gold" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
