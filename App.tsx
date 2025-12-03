
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Services from './components/Services';
import OurWork from './components/OurWork';
import WhyChooseUs from './components/WhyChooseUs';
import Team from './components/Team';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import CheckoutForm from './components/CheckoutForm';
import SupportBanner from './components/SupportBanner';
import PatrioticBanner from './components/PatrioticBanner';

interface Plan {
  title: string;
  price: string;
  originalPrice?: string;
  promo?: string;
}

const App: React.FC = () => {
  const [showButton, setShowButton] = useState(false);
  const [checkoutPlan, setCheckoutPlan] = useState<Plan | null>(null);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showButton && window.pageYOffset > 400) {
        setShowButton(true);
      } else if (showButton && window.pageYOffset <= 400) {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showButton]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach(el => observer.observe(el));
    
    return () => elements.forEach(el => observer.unobserve(el));
}, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleBookNow = (plan: Plan) => {
    setCheckoutPlan(plan);
  };

  const handleCloseCheckout = () => {
    setCheckoutPlan(null);
  };

  return (
    <div className="bg-brand-light font-sans text-brand-dark">
      <Header />
      <SupportBanner />
      <main>
        <Hero />
        <HowItWorks />
        <Pricing onBookNow={handleBookNow} />
        <Services />
        <OurWork />
        <WhyChooseUs />
        <Team />
        <CTASection />
      </main>
      <PatrioticBanner />
      <Footer />
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-brand-blue text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center focus:outline-none hover:bg-brand-green transition-all duration-300 z-50 animate-fade-in"
          aria-label="Go to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
      {checkoutPlan && (
        <CheckoutForm 
          plan={checkoutPlan}
          onClose={handleCloseCheckout}
        />
      )}
    </div>
  );
};

export default App;
