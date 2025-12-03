
import React from 'react';

const WorkCard: React.FC<{
  title: string;
  beforeImg: string;
  afterImg: string;
}> = ({ title, beforeImg, afterImg }) => (
  <div className="bg-white/40 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 border border-white/30">
    <div className="grid grid-cols-2 gap-px bg-gray-200">
      <div className="relative">
        <img src={beforeImg} alt={`Before ${title}`} className="w-full h-48 object-cover" />
        <div className="absolute top-2 left-2 bg-black/50 text-white text-xs font-bold uppercase px-2 py-1 rounded">Before</div>
      </div>
      <div className="relative">
        <img src={afterImg} alt={`After ${title}`} className="w-full h-48 object-cover" />
        <div className="absolute top-2 left-2 bg-brand-green text-white text-xs font-bold uppercase px-2 py-1 rounded">After</div>
      </div>
    </div>
    <div className="p-4">
      <h3 className="font-bold text-lg text-brand-blue">{title}</h3>
    </div>
  </div>
);

const OurWork: React.FC = () => {
  return (
    <section id="work" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-brand-blue">
            Mission Accomplished: Before & After
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            See the results of our strategic clutter-clearing operations.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="scroll-animate" style={{ animationDelay: '100ms' }}>
            <WorkCard
              title="Garage Cleanout"
              beforeImg="https://images.unsplash.com/photo-1618520332371-3397a6167879?q=80&w=600&auto=format&fit=crop"
              afterImg="https://images.unsplash.com/photo-1583609015946-4a17c244726b?q=80&w=600&auto=format&fit=crop"
            />
          </div>
          <div className="scroll-animate" style={{ animationDelay: '200ms' }}>
            <WorkCard
              title="Backyard Debris Removal"
              beforeImg="https://images.unsplash.com/photo-1563200085-709039a67414?q=80&w=600&auto=format&fit=crop"
              afterImg="https://images.unsplash.com/photo-1587582423116-8c2921936338?q=80&w=600&auto=format&fit=crop"
            />
          </div>
          <div className="scroll-animate" style={{ animationDelay: '300ms' }}>
            <WorkCard
              title="Estate Liquidation"
              beforeImg="https://images.unsplash.com/photo-1598618433281-c75b8b9d62ba?q=80&w=600&auto=format&fit=crop"
              afterImg="https://images.unsplash.com/photo-1556020685-ae41abfc9365?q=80&w=600&auto=format&fit=crop"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
