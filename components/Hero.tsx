
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-brand-blue text-white py-20 md:py-32">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582593445342-ce7151e563b7?q=80&w=1600&auto=format&fit=crop')" }}>
      </div>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-6 text-center relative z-10 scroll-animate in-view">
        <h1 className="text-4xl md:text-6xl font-extrabold font-heading mb-4 leading-tight">
          Vanquish Your Clutter. Reclaim Your Freedom.
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">
          Liberator is your elite squad for junk removal, waging war on unwanted items with tactical speed and precision.
        </p>
        <a href="#contact" className="bg-brand-green/80 backdrop-blur-sm border border-white/20 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-brand-green transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2 shadow-lg">
          <span>Get Your Free Quote Now</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;