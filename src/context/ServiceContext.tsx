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
    subtitle: 'Vehicle Unlock & Ignition Repair Services',
    description: 'Locked out of your car or dealing with a broken ignition cylinder? We provide specialized on-site automotive locksmith services including quick vehicle unlock solutions, ignition repairs, and broken key extractions. No towing needed—we come directly to your location.',
    image: 'https://images.unsplash.com/photo-1510133769068-68884a127238?q=80&w=2670&auto=format&fit=crop',
    iconType: 'Car',
    features: [
      'Emergency Car & Trunk Unlocks',
      'Ignition Cylinder Repair',
      'Broken Key Extraction',
      'Door Lock & Tumbler Repair',
      'All Vehicle Makes & Models'
    ],
    subServices: [
      { title: 'Ignition Repair', desc: 'Fixing tumblers or replacing faulty ignition lock assemblies.' },
      { title: 'Vehicle Unlocks', desc: 'Safely and quickly opening locked car doors without damage.' },
      { title: 'Key Extraction', desc: 'Removing broken or snapped keys from door locks and ignitions.' },
      { title: 'Trunk Opening', desc: 'Emergency access to locked trunks and utility compartments.' }
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
    const saved = localStorage.getItem('dfw_rapid_services_v2');
    return saved ? JSON.parse(saved) : DEFAULT_SERVICES;
  });

  useEffect(() => {
    localStorage.setItem('dfw_rapid_services_v2', JSON.stringify(services));
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
