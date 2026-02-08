
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Features from './components/Features';
import ChaosToSystem from './components/ChaosToSystem';
import Benefits from './components/Benefits';
import Services from './components/Services';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ThankYou from './components/ThankYou';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUsage from './components/TermsOfUsage';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<string>('home');
  const [isVisible, setIsVisible] = useState(false);

  // Global navigation handler to avoid anchor tag issues
  const navigateTo = (view: string) => {
    window.location.hash = view === 'home' ? '' : view;
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setIsVisible(true);
    
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      const view = hash.split('?')[0] || 'home';
      // Only update if it's one of our known "page" views
      if (['home', 'thank-you', 'privacy-policy', 'terms-of-usage'].includes(view)) {
        setCurrentView(view);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); 

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderView = () => {
    switch (currentView) {
      case 'thank-you':
        return <ThankYou onNavigate={navigateTo} />;
      case 'privacy-policy':
        return <PrivacyPolicy onNavigate={navigateTo} />;
      case 'terms-of-usage':
        return <TermsOfUsage onNavigate={navigateTo} />;
      default:
        return (
          <>
            <Hero onNavigate={navigateTo} />
            <Problems />
            <Features />
            <ChaosToSystem />
            <Benefits onNavigate={navigateTo} />
            <Services />
            <FAQ />
            <CTA onNavigate={navigateTo} />
          </>
        );
    }
  };

  return (
    <div className={`min-h-screen transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar onNavigate={navigateTo} />
      <main className="min-h-screen">
        {renderView()}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
