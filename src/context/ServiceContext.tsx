import React, { createContext, useContext, useState, useEffect } from 'react';

export interface SubService {
  title: string;
  desc: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  subServices: SubService[];
  iconType: string;
}

interface ServiceContextType {
  services: Service[];
  addService: (service: Service) => void;
  updateService: (service: Service) => void;
  deleteService: (id: string) => void;
  getServiceBySlug: (slug: string) => Service | undefined;
}

const DEFAULT_SERVICES: Service[] = [
  {
    id: '1',
    slug: 'emergency',
    title: 'Emergency Locksmith',
    subtitle: '24/7 Rapid Response Lockout Services',
    description: 'When you are locked out, every minute counts. Our emergency dispatch units are stationed throughout the area, ready to reach you in 15-20 minutes. We handle car, home, and office lockouts with professional precision and no damage to your property.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2670&auto=format&fit=crop',
    iconType: 'AlertTriangle',
    features: [
      '24/7 Availability (Holidays Included)',
      '15-20 Minute Average Response Time',
      'Non-Destructive Entry Methods',
      'Burglary Damage Repairs',
      'Emergency Lock Rekeying'
    ],
    subServices: [
      { title: 'House Lockouts', desc: 'Fast entry to your home using specialized lock picking tools.' },
      { title: 'Car Lockouts', desc: 'Safely opening vehicles of all makes and models.' },
      { title: 'Office Lockouts', desc: 'Emergency access to commercial buildings and suites.' },
      { title: 'Broken Key Extraction', desc: 'Removing snapped keys from cylinders without damage.' }
    ]
  },
  {
    id: '2',
    slug: 'automotive',
    title: 'Automotive Locksmith',
    subtitle: 'Car Key Replacement & Vehicle Security',
    description: 'Lost or broken car keys? We provide on-site automotive locksmith services including transponder key programming, ignition repairs, and fob replacements. We eliminate the need for an expensive tow to the dealership.',
    image: 'https://images.unsplash.com/photo-1510133769068-68884a127238?q=80&w=2670&auto=format&fit=crop',
    iconType: 'Car',
    features: [
      'Transponder Key Programming',
      'Ignition Cylinder Repair',
      'Key Fob Replacement',
      'Laser-Cut Key Duplication',
      'Motorcycle Key Services'
    ],
    subServices: [
      { title: 'Key Replacement', desc: 'Cutting and programming new keys for 99% of vehicles.' },
      { title: 'Fob Programming', desc: 'Syncing new remote fobs and proximity keys.' },
      { title: 'Ignition Repair', desc: 'Fixing tumblers or replacing entire ignition units.' },
      { title: 'Trunk Opening', desc: 'Emergency access to locked trunks and glove boxes.' }
    ]
  },
  {
    id: '3',
    slug: 'residential',
    title: 'Residential Locksmith',
    subtitle: 'Home Security & Lock Installation',
    description: 'Ensure your family is safe with our comprehensive residential security solutions. From rekeying locks for new homeowners to installing high-security deadbolts and smart home integration, we are your local home security partners.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2670&auto=format&fit=crop',
    iconType: 'Home',
    features: [
      'Lock Rekeying & Mastering',
      'Deadbolt Installation',
      'Smart Lock Setup',
      'High-Security Hardware',
      'Mailbox Lock Replacement'
    ],
    subServices: [
      { title: 'Lock Rekeying', desc: 'Changing the internal pins so old keys no longer work.' },
      { title: 'Smart Locks', desc: 'Installation of August, Schlage, and Yale smart devices.' },
      { title: 'Master Keying', desc: 'One key for all doors, separate keys for individual occupants.' },
      { title: 'Door Hardware', desc: 'Upgrading handles, levers, and architectural hardware.' }
    ]
  },
  {
    id: '4',
    slug: 'commercial',
    title: 'Commercial Locksmith',
    subtitle: 'Business Security & High-Volume Solutions',
    description: 'We provide specialized security for commercial properties, offices, and warehouses. Our services include industrial-grade hardware, panic bar installations, and advanced access control systems designed for high-traffic environments.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2670&auto=format&fit=crop',
    iconType: 'Building2',
    features: [
      'Master Key Systems',
      'Panic Bar Installation',
      'Magnetic Lock Systems',
      'IC Core Cylinders',
      'Door Closer Maintenance'
    ],
    subServices: [
      { title: 'Access Control', desc: 'Keyless entry systems using cards, fobs, or biometrics.' },
      { title: 'Panic Bars', desc: 'Bringing buildings up to fire code with high-quality exit devices.' },
      { title: 'Commercial Rekey', desc: 'Cost-effective security updates for tenant turnover.' },
      { title: 'Master Keys', desc: 'Complex hierarchy systems for multi-unit buildings.' }
    ]
  }
];

const ServiceContext = createContext<ServiceContextType | undefined>(undefined);

export const ServiceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [services, setServices] = useState<Service[]>(() => {
    const saved = localStorage.getItem('securepath_services');
    return saved ? JSON.parse(saved) : DEFAULT_SERVICES;
  });

  useEffect(() => {
    localStorage.setItem('securepath_services', JSON.stringify(services));
  }, [services]);

  const addService = (service: Service) => {
    setServices([...services, { ...service, id: Date.now().toString() }]);
  };

  const updateService = (updatedService: Service) => {
    setServices(services.map(s => s.id === updatedService.id ? updatedService : s));
  };

  const deleteService = (id: string) => {
    setServices(services.filter(s => s.id !== id));
  };

  const getServiceBySlug = (slug: string) => {
    return services.find(s => s.slug === slug);
  };

  return (
    <ServiceContext.Provider value={{ services, addService, updateService, deleteService, getServiceBySlug }}>
      {children}
    </ServiceContext.Provider>
  );
};

export const useServices = () => {
  const context = useContext(ServiceContext);
  if (!context) throw new Error('useServices must be used within a ServiceProvider');
  return context;
};
