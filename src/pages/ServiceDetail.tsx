import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useServices } from '../context/ServiceContext';
import { 
  Phone, 
  CheckCircle2, 
  ShieldCheck,
  Clock,
  MapPin,
  ChevronRight,
  Send,
  AlertTriangle,
  Car,
  Home as HomeIcon,
  Building2,
  Lock,
  Key,
  Wrench,
  Smartphone,
  Vault
} from 'lucide-react';
import { motion } from 'motion/react';
import EmergencyBanner from '../components/EmergencyBanner';
import Trust from '../components/Trust';
import { useForm } from 'react-hook-form';

const ICON_MAP: Record<string, React.ReactNode> = {
  AlertTriangle: <AlertTriangle />,
  Car: <Car />,
  Home: <HomeIcon />,
  Building2: <Building2 />,
  Lock: <Lock />,
  Key: <Key />,
  Wrench: <Wrench />,
  Smartphone: <Smartphone />,
  Vault: <Vault />
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { getServiceBySlug } = useServices();
  const service = slug ? getServiceBySlug(slug) : null;
  const { register, handleSubmit, formState: { isSubmitting } } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
    await new Promise(resolve => setTimeout(resolve, 1500));
    alert('Quote request sent successfully!');
  };

  if (!service) {
    return (
      <div className="pt-40 pb-20 text-center min-h-screen bg-brand-bg flex flex-col items-center justify-center">
        <h1 className="text-4xl font-black text-brand-navy uppercase tracking-widest">Service Not Found</h1>
        <Link to="/" className="bg-brand-navy text-white px-8 py-3 rounded-xl mt-8 font-bold hover:scale-105 transition-all">
          Return to Homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* 1. Header (Left: Title, Right: Image) */}
      <section className="pt-32 pb-16 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100"><rect width="100" height="100" fill="none" stroke="white" strokeWidth="0.1"/></svg>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-block bg-brand-gold text-brand-navy px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest mb-6">
                Premium Security Service
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-white leading-[1.05] mb-4 uppercase tracking-tighter">
                {service.title} <br />
                <span className="text-brand-gold break-words">{service.subtitle}</span>
              </h1>
              <p className="text-blue-100 text-base md:text-lg mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Professional locksmith expertise available 24/7. We arrive in 15-20 minutes with fully equipped mobile units.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a href="tel:2149230223" className="bg-brand-gold hover:bg-white text-brand-navy px-8 py-4 rounded-xl font-black text-lg flex items-center gap-3 shadow-2xl transition-all hover:scale-105">
                  <Phone size={20} fill="currentColor" />
                  (214) 923-0223
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 w-full">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-3 rounded-[2.5rem] shadow-2xl transform lg:rotate-3"
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="rounded-[2rem] w-full h-[250px] md:h-[350px] object-cover" 
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Content Area */}
      <section className="py-16 bg-brand-bg relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-10 relative">
            
            {/* Left Side: Service Content (Scrolls) */}
            <div className="flex-1 space-y-10">
              {/* About Service */}
              <div>
                <h2 className="text-xl font-black text-brand-navy mb-4 uppercase tracking-widest flex items-center gap-3">
                  <span className="w-8 h-1 bg-brand-gold"></span>
                  EXPERTISE
                </h2>
                <p className="text-gray-500 text-base md:text-lg leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-xl font-black text-brand-navy mb-4 uppercase tracking-widest flex items-center gap-3">
                  <span className="w-8 h-1 bg-brand-gold"></span>
                  CORE CAPABILITIES
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 group shadow-sm">
                      <CheckCircle2 className="text-brand-gold flex-shrink-0" size={20} />
                      <span className="text-brand-navy font-black uppercase text-[10px] tracking-widest leading-none">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sub Services */}
              <div>
                <h2 className="text-xl font-black text-brand-navy mb-4 uppercase tracking-widest flex items-center gap-3">
                  <span className="w-8 h-1 bg-brand-gold"></span>
                  SERVICE DETAILS
                </h2>
                <div className="grid gap-4">
                  {service.subServices.map((sub, i) => (
                    <div key={i} className="p-6 bg-white rounded-[2rem] border border-gray-100 shadow-xl">
                      <h3 className="text-brand-navy font-black text-xs uppercase tracking-widest mb-2">{sub.title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed font-medium">{sub.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Sticky Form (Fixed when scroll down) */}
            <div className="w-full lg:w-[400px]">
              <div className="sticky top-24">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-brand-navy p-6 rounded-[2rem] shadow-2xl border border-white/10 overflow-hidden relative"
                >
                  {/* Decorative background for form */}
                  <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100"><rect width="100" height="100" fill="none" stroke="white" strokeWidth="0.5"/></svg>
                  </div>

                  <h3 className="text-white text-xl font-black mb-1 leading-none tracking-tighter relative z-10">Request Quote</h3>
                  <p className="text-brand-gold text-[10px] font-black uppercase tracking-widest mb-6 relative z-10">Instant Response Guaranteed</p>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 relative z-10">
                    <div className="space-y-1">
                      <label className="text-[10px] text-blue-200/50 uppercase font-black tracking-widest ml-1">Full Name</label>
                      <input 
                        {...register('name', { required: true })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-gold font-bold text-white text-xs"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] text-blue-200/50 uppercase font-black tracking-widest ml-1">Phone Number</label>
                      <input 
                        {...register('phone', { required: true })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-gold font-bold text-white text-xs"
                        placeholder="(800) 000-0000"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] text-blue-200/50 uppercase font-black tracking-widest ml-1">Service</label>
                      <select
                        {...register('service')}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-gold font-bold text-white text-xs appearance-none"
                      >
                        <option value={service.slug} className="bg-brand-navy">{service.title}</option>
                        <option value="emergency" className="bg-brand-navy">Emergency Lockout</option>
                        <option value="repair" className="bg-brand-navy">Lock Repair</option>
                      </select>
                    </div>
                    <button className="w-full bg-brand-gold text-brand-navy font-black py-4 rounded-xl shadow-xl hover:scale-[1.02] active:scale-95 transition-all mt-2 flex items-center justify-center gap-3 text-sm">
                      {isSubmitting ? 'SENDING...' : 'GET INSTANT PRICE'}
                      <Send size={16} />
                    </button>
                    
                    <div className="flex items-center justify-center gap-4 mt-6">
                       <div className="flex items-center gap-2 text-white/50 text-[10px] font-bold uppercase tracking-widest">
                         <ShieldCheck size={14} className="text-brand-gold" />
                         Insured
                       </div>
                       <div className="w-px h-3 bg-white/10"></div>
                       <div className="flex items-center gap-2 text-white/50 text-[10px] font-bold uppercase tracking-widest">
                         <Clock size={14} className="text-brand-gold" />
                         24/7
                       </div>
                    </div>
                  </form>
                </motion.div>
                
                {/* Extra Trust Badge below sticky form */}
                <div className="mt-8 p-6 bg-white rounded-3xl border border-gray-100 flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <h4 className="font-black text-brand-navy text-xs uppercase tracking-widest">Certified Locksmith</h4>
                    <p className="text-[10px] text-gray-400 font-bold">Background checked technicians only.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <EmergencyBanner />
      <Trust />
    </div>
  );
}
