
import React from 'react';

const QuoteIcon = () => (
    <svg className="w-12 h-12 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.621-3.75a11.955 11.955 0 01-2.978-5.472A11.959 11.959 0 0112 2.75z"></path></svg>
);

const TruckIcon = () => (
  <svg className="w-12 h-12 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8l2-2z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16h2a1 1 0 001-1V7a1 1 0 00-1-1h-2"></path></svg>
);

const HaulAwayIcon = () => (
  <svg className="w-12 h-12 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
);


const Step: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="text-center p-6 bg-white/40 backdrop-blur-lg rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/30 h-full transform hover:-translate-y-2">
    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-green-100/80 mx-auto mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold font-heading text-brand-blue mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-brand-blue">
            Our 3-Step Battle Plan
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Reclaiming your space is a decisive victory.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="scroll-animate" style={{ animationDelay: '100ms' }}>
            <Step 
              icon={<QuoteIcon />}
              title="1. Get a Quote"
              description="Call us or fill out our online form. We'll give you a free, no-obligation estimate for your junk removal job."
            />
          </div>
          <div className="scroll-animate" style={{ animationDelay: '200ms' }}>
            <Step 
              icon={<TruckIcon />}
              title="2. We Deploy"
              description="Our disciplined and efficient squad will arrive on schedule, ready for the mission. We'll confirm the strategy and cost before engagement."
            />
          </div>
          <div className="scroll-animate" style={{ animationDelay: '300ms' }}>
            <Step 
              icon={<HaulAwayIcon />}
              title="3. Objective Cleared"
              description="You identify the targets, we neutralize the clutter. We remove all items with military efficiency, leaving your territory clear."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;