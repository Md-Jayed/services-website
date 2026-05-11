import React from 'react';
import { useForm } from 'react-hook-form';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'motion/react';

type FormData = {
  name: string;
  phone: string;
  address: string;
  service: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    console.log(data);
    await new Promise(resolve => setTimeout(resolve, 1500));
    alert('Quote request sent successfully! We will call you within 15 minutes.');
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Info Side */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Get a <span className="text-brand-gold">Fast Quote</span>
            </h2>
            <p className="text-base text-gray-600 mb-8 max-w-lg">
              Fill out the form below or call us directly for an immediate estimate. 
              Our mobile units are ready to assist you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-gold/10 text-brand-gold rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Phone</div>
                  <div className="text-xl font-bold text-brand-navy">(800) 555-0199</div>
                  <div className="text-green-600 font-semibold flex items-center gap-2 mt-0.5 text-xs">
                    <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
                    Available Now
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-gold/10 text-brand-gold rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Service Area</div>
                  <div className="text-lg font-bold text-brand-navy">Greater Austin Metropolitan Area</div>
                  <div className="text-xs text-gray-500 font-medium">Headquarters: Austin, TX 78701</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-gold/10 text-brand-gold rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Email</div>
                  <div className="text-lg font-bold text-brand-navy">help@dfwrapidlocksmith.com</div>
                  <div className="text-xs text-gray-500 font-medium">Quick responses on all inquiries</div>
                </div>
              </div>
            </div>
            
            {/* Simple Map Placeholder */}
            <div className="mt-12 w-full h-[300px] bg-brand-bg rounded-3xl overflow-hidden grayscale border border-gray-100 relative group cursor-pointer">
               <img 
                 src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop" 
                 alt="Map" 
                 className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-brand-navy text-white px-6 py-3 rounded-full font-bold shadow-2xl flex items-center gap-3">
                   <MapPin size={20} className="text-brand-gold" />
                   View Interactive Map
                 </div>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-bg p-6 md:p-8 rounded-[2.5rem] shadow-xl border border-gray-100"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-brand-navy ml-1">Full Name</label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      placeholder="John Doe"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all text-sm"
                    />
                    {errors.name && <span className="text-red-500 text-[10px] ml-1">{errors.name.message}</span>}
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-brand-navy ml-1">Phone Number</label>
                    <input
                      {...register('phone', { required: 'Phone is required' })}
                      placeholder="(512) 555-0123"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all text-sm"
                    />
                    {errors.phone && <span className="text-red-500 text-[10px] ml-1">{errors.phone.message}</span>}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-brand-navy ml-1">Service Address / Location</label>
                  <input
                    {...register('address', { required: 'Location is required' })}
                    placeholder="123 Street Name, City"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all text-sm"
                  />
                  {errors.address && <span className="text-red-500 text-[10px] ml-1">{errors.address.message}</span>}
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-brand-navy ml-1">Service Needed</label>
                  <select
                    {...register('service', { required: 'Please select a service' })}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all appearance-none text-sm"
                  >
                    <option value="">Select a service...</option>
                    <option value="emergency">Emergency Lockout</option>
                    <option value="automotive">Automotive Locksmith</option>
                    <option value="residential">Residential Locksmith</option>
                    <option value="commercial">Commercial Locksmith</option>
                    <option value="key-replacement">Key Replacement</option>
                    <option value="other">Other / Security Consultation</option>
                  </select>
                  {errors.service && <span className="text-red-500 text-[10px] ml-1">{errors.service.message}</span>}
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-brand-navy ml-1">Message / Details</label>
                  <textarea
                    {...register('message')}
                    placeholder="Briefly describe your situation..."
                    rows={3}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all resize-none text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-navy text-white py-3.5 rounded-xl font-bold text-base flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-brand-navy/20 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send size={20} />
                      REQUEST FREE QUOTE
                    </>
                  )}
                </button>
                <p className="text-xs text-center text-gray-500 mt-4">
                  By clicking, you agree to our terms of service and privacy policy. 
                  We typically respond to web requests within 10-15 minutes.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
