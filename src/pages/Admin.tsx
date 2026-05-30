import React, { useState } from 'react';
import { useServices, Service, SubService } from '../context/ServiceContext';
import { Plus, Edit2, Trash2, Save, X, Image as ImageIcon, Layout, Type, List } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Admin() {
  const { services, addService, updateService, deleteService } = useServices();
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const emptyService: Service = {
    id: '',
    slug: '',
    title: '',
    subtitle: '',
    description: '',
    image: '',
    features: [],
    subServices: [],
    iconType: 'Lock'
  };

  const [formData, setFormData] = useState<Service>(emptyService);

  const handleEdit = (service: Service) => {
    setEditingService(service);
    setFormData(service);
    setIsAdding(false);
  };

  const handleAddStart = () => {
    setEditingService(null);
    setFormData(emptyService);
    setIsAdding(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingService) {
      updateService(formData);
    } else {
      addService(formData);
    }
    setEditingService(null);
    setIsAdding(false);
  };

  const handleFeatureAdd = () => {
    setFormData({ ...formData, features: [...formData.features, ''] });
  };

  const handleFeatureChange = (index: number, value: string) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData({ ...formData, features: newFeatures });
  };

  const handleFeatureRemove = (index: number) => {
    setFormData({ ...formData, features: formData.features.filter((_, i) => i !== index) });
  };

  const handleSubServiceAdd = () => {
    setFormData({ ...formData, subServices: [...formData.subServices, { title: '', desc: '' }] });
  };

  const handleSubServiceChange = (index: number, field: keyof SubService, value: string) => {
    const newSubServices = [...formData.subServices];
    newSubServices[index] = { ...newSubServices[index], [field]: value };
    setFormData({ ...formData, subServices: newSubServices });
  };

  const handleSubServiceRemove = (index: number) => {
    setFormData({ ...formData, subServices: formData.subServices.filter((_, i) => i !== index) });
  };

  return (
    <div className="pt-32 pb-20 bg-brand-bg min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-black text-brand-navy uppercase tracking-tighter">Admin <span className="text-brand-gold">Dashboard</span></h1>
            <p className="text-gray-500 font-medium mt-1">Manage your service pages and content</p>
          </div>
          <button 
            onClick={handleAddStart}
            className="bg-brand-navy text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-all shadow-xl shadow-brand-navy/20"
          >
            <Plus size={20} />
            Add New Service
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Service List */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Existing Services</h2>
            {services.map(service => (
              <div 
                key={service.id}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between group ${editingService?.id === service.id ? 'bg-white border-brand-gold shadow-lg' : 'bg-white/50 border-gray-200'}`}
                onClick={() => handleEdit(service)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-navy rounded-lg flex items-center justify-center text-brand-gold">
                    <ImageIcon size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-brand-navy">{service.title}</div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{service.slug}</div>
                  </div>
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={(e) => { e.stopPropagation(); deleteService(service.id); }} className="p-2 text-red-500 hover:bg-red-50 rounded-lg">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Edit / Add Form */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {(editingService || isAdding) ? (
                <motion.div
                  key={editingService?.id || 'new'}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-gray-100"
                >
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-black text-brand-navy uppercase tracking-widest">
                      {isAdding ? 'Adding New Service' : `Editing: ${editingService?.title}`}
                    </h2>
                    <button onClick={() => { setEditingService(null); setIsAdding(false); }} className="text-gray-400 hover:text-brand-navy transition-colors">
                      <X size={24} />
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Basic Info */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                          <Type size={12} /> Service Title
                        </label>
                        <input 
                          required
                          value={formData.title}
                          onChange={e => setFormData({ ...formData, title: e.target.value })}
                          className="w-full bg-brand-bg border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-gold font-bold text-brand-navy"
                          placeholder="Automotive Lockout"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                          <Layout size={12} /> URL Slug (unique)
                        </label>
                        <input 
                          required
                          value={formData.slug}
                          onChange={e => setFormData({ ...formData, slug: e.target.value })}
                          className="w-full bg-brand-bg border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-gold font-bold text-brand-navy"
                          placeholder="automotive-lockout"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Subtitle / Headline</label>
                      <input 
                        value={formData.subtitle}
                        onChange={e => setFormData({ ...formData, subtitle: e.target.value })}
                        className="w-full bg-brand-bg border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-gold font-bold text-brand-navy"
                        placeholder="Emergency Vehicle Door & Trunk Unlock Solutions"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Description</label>
                      <textarea 
                        value={formData.description}
                        onChange={e => setFormData({ ...formData, description: e.target.value })}
                        className="w-full bg-brand-bg border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-gold font-medium text-gray-600 resize-none"
                        rows={4}
                        placeholder="Detailed service description..."
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Image URL</label>
                      <input 
                        value={formData.image}
                        onChange={e => setFormData({ ...formData, image: e.target.value })}
                        className="w-full bg-brand-bg border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-gold font-medium"
                        placeholder="https://images.unsplash.com/..."
                      />
                    </div>

                    {/* Features */}
                    <div className="space-y-4 pt-4 border-t border-gray-100">
                      <div className="flex justify-between items-center">
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                          <List size={12} /> Core Features
                        </label>
                        <button type="button" onClick={handleFeatureAdd} className="text-[10px] font-black text-brand-gold hover:text-brand-navy transition-colors">
                          + ADD FEATURE
                        </button>
                      </div>
                      <div className="space-y-2">
                        {formData.features.map((feature, i) => (
                          <div key={i} className="flex gap-2">
                            <input 
                              value={feature}
                              onChange={e => handleFeatureChange(i, e.target.value)}
                              className="flex-1 bg-brand-bg border border-gray-200 rounded-lg px-3 py-2 text-sm font-bold"
                              placeholder="e.g. 24/7 Availability"
                            />
                            <button type="button" onClick={() => handleFeatureRemove(i)} className="p-2 text-red-500">
                              <X size={16} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Sub Services */}
                    <div className="space-y-4 pt-4 border-t border-gray-100">
                      <div className="flex justify-between items-center">
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Sub-Services / Details</label>
                        <button type="button" onClick={handleSubServiceAdd} className="text-[10px] font-black text-brand-gold hover:text-brand-navy transition-colors">
                          + ADD DETAIL
                        </button>
                      </div>
                      <div className="space-y-4">
                        {formData.subServices.map((sub, i) => (
                          <div key={i} className="p-4 bg-brand-bg rounded-xl space-y-2 relative">
                            <button type="button" onClick={() => handleSubServiceRemove(i)} className="absolute top-2 right-2 p-1 text-red-500">
                              <X size={14} />
                            </button>
                            <input 
                              value={sub.title}
                              onChange={e => handleSubServiceChange(i, 'title', e.target.value)}
                              className="w-full bg-white border border-gray-100 rounded-lg px-3 py-2 text-sm font-black uppercase tracking-widest"
                              placeholder="Detail Title"
                            />
                            <textarea 
                              value={sub.desc}
                              onChange={e => handleSubServiceChange(i, 'desc', e.target.value)}
                              className="w-full bg-white border border-gray-100 rounded-lg px-3 py-2 text-xs font-medium resize-none shadow-inner"
                              rows={2}
                              placeholder="Detail Description"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-8 border-t border-gray-100">
                      <button 
                        type="submit"
                        className="w-full bg-brand-navy text-white py-5 rounded-2xl font-black text-lg shadow-2xl shadow-brand-navy/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
                      >
                        <Save size={24} />
                        {isAdding ? 'CREATE SERVICE PAGE' : 'SAVE CHANGES'}
                      </button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-white/50 border-2 border-dashed border-gray-200 rounded-[3rem]">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mb-6">
                    <Edit2 size={32} />
                  </div>
                  <h3 className="text-xl font-black text-brand-navy uppercase tracking-widest">No Service Selected</h3>
                  <p className="text-gray-400 max-w-xs mt-2">Select a service from the left or create a new one to start editing.</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
