/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ServiceProvider } from './context/ServiceContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Trust from './components/Trust';
import EmergencyBanner from './components/EmergencyBanner';
import About from './components/About';
import ServiceAreas from './components/ServiceAreas';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import ServiceDetail from './pages/ServiceDetail';
import Admin from './pages/Admin';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Trust />
      <EmergencyBanner />
      <About />
      <ServiceAreas />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}

// Simulated dynamic page for SEO keywords
function CityServicePage() {
  const { pathname } = useLocation();
  const slug = pathname.slice(1); // e.g. "locksmith-in-austin"
  const parts = slug.split('-in-');
  const serviceName = parts[0] ? parts[0].split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : 'Locksmith';
  const cityName = parts[1] ? parts[1].split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : 'Local Area';

  return (
    <>
      <section className="pt-40 pb-20 bg-brand-navy text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            {serviceName} in <span className="text-brand-gold">{cityName}</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Professional 24/7 {serviceName.toLowerCase()} services available right now in {cityName}. 
            Fast response times and expert technicians.
          </p>
          <div className="mt-10">
            <a href="tel:18005550199" className="bg-brand-gold text-brand-navy px-10 py-4 rounded-xl font-bold text-xl inline-block">
              Call {cityName} Technician
            </a>
          </div>
        </div>
      </section>
      <Trust />
      <EmergencyBanner />
      <Services />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <ServiceProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/admin" element={<Admin />} />
              {/* SEO catch-all for dynamic location/service pages */}
              <Route path="/:slug" element={<CityServicePage />} />
            </Routes>
          </main>
          <Footer />
          <FloatingCTA />
        </div>
      </Router>
    </ServiceProvider>
  );
}
