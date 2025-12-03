
import React from 'react';

interface Plan {
    title: string;
    price: string;
    originalPrice?: string;
    promo?: string;
}

const PricingCard: React.FC<{
  title: string;
  price: string;
  description: string;
  popular?: boolean;
  originalPrice?: string;
  promo?: string;
  onBookNow: (plan: Plan) => void;
}> = ({ title, price, description, popular, originalPrice, promo, onBookNow }) => {
  const isPromo = !!promo;

  const handleBookClick = () => {
    onBookNow({ title, price, originalPrice, promo });
  };

  return (
    <div className={`relative flex flex-col h-full overflow-hidden rounded-lg text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-white/40 backdrop-blur-lg ${
        isPromo 
        ? 'border-2 border-brand-green shadow-lg' 
        : popular 
        ? 'border-2 border-brand-green shadow-lg' 
        : 'border border-white/30 shadow-md'
      }`}
    >
      {/* Promo Banner */}
      {isPromo && (
        <div className="bg-brand-green/90 backdrop-blur-sm p-4 text-white">
          <p className="text-sm font-bold uppercase tracking-wider">Seasonal Promotion</p>
          <p className="text-2xl font-extrabold drop-shadow-md">{promo}</p>
        </div>
      )}

      {/* Popular Tag (only if not a promo) */}
      {popular && !isPromo && (
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <span className="rounded-full bg-brand-green px-4 py-1 text-xs font-bold uppercase text-white shadow-lg">Most Popular</span>
        </div>
      )}
      
      {/* Card Content */}
      <div className="flex flex-grow flex-col p-8">
        <div className="flex-grow">
          <h3 className="font-heading text-2xl font-bold text-brand-blue mb-2">{title}</h3>
          <div className="mb-4 flex items-baseline justify-center gap-2 text-5xl font-extrabold text-brand-blue">
            {originalPrice && (
              <span className="text-3xl text-gray-400 line-through">{originalPrice}</span>
            )}
            <span>{price}</span>
            <span className="text-3xl font-semibold text-brand-green">*</span>
          </div>
          <p className="text-gray-600">{description}</p>
        </div>
        
        <div className="mt-8 flex flex-col gap-3">
          <button 
            onClick={handleBookClick}
            className={`inline-block w-full rounded-full py-3 px-8 font-bold transition-all duration-300 shadow-md border border-white/20 backdrop-blur-sm ${
              (popular || isPromo) 
              ? 'bg-brand-green/80 text-white hover:bg-brand-green' 
              : 'bg-brand-blue/80 text-white hover:bg-brand-blue'
            }`}
          >
            Book Now
          </button>
          <a href="tel:415-509-8778" className={`inline-block w-full rounded-full py-3 px-8 font-bold transition-all duration-300 shadow-md border border-white/20 backdrop-blur-sm ${
              (popular || isPromo) 
              ? 'bg-brand-blue/80 text-white hover:bg-brand-blue' 
              : 'bg-brand-green/80 text-white hover:bg-brand-green'
            }`}
          >
            Call Now
          </a>
          <a href="#contact" className={`inline-block w-full rounded-full border py-3 px-8 font-bold transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/80 ${
              (popular || isPromo) 
              ? 'border-brand-green text-brand-green' 
              : 'border-brand-blue text-brand-blue'
            }`}
          >
            Get a Quote
          </a>
          <p className="mt-2 text-sm font-medium text-brand-green">Book online &amp; save 10%!</p>
        </div>
      </div>
    </div>
  );
};


const Pricing: React.FC<{ onBookNow: (plan: Plan) => void }> = ({ onBookNow }) => {
  return (
    <section id="pricing" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-brand-blue">
            Clear & Upfront Pricing
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            No hidden fees. You only pay for the space your junk occupies in our truck.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto items-stretch">
          <div className="scroll-animate" style={{ animationDelay: '100ms' }}>
            <PricingCard
              title="Single Item"
              price="$99+"
              description="Perfect for a mattress, sofa, or appliance."
              onBookNow={onBookNow}
            />
          </div>
          <div className="scroll-animate" style={{ animationDelay: '200ms' }}>
            <PricingCard
              title="1/4 Truck Load"
              price="$249"
              description="Fits about 2 pickup truck beds of junk."
              onBookNow={onBookNow}
            />
          </div>
          <div className="scroll-animate" style={{ animationDelay: '300ms' }}>
            <PricingCard
              title="1/2 Truck Load"
              price="$399"
              description="Our most common choice for bigger cleanouts."
              popular
              onBookNow={onBookNow}
            />
          </div>
          <div className="scroll-animate" style={{ animationDelay: '400ms' }}>
            <PricingCard
              title="Full Truck"
              price="$599"
              originalPrice="$799"
              promo="Save $200"
              description="Seasonal special for entire estate, garage, or office cleanouts."
              onBookNow={onBookNow}
            />
          </div>
        </div>
        <div className="text-center mt-10 max-w-5xl mx-auto scroll-animate">
            <p className="text-sm text-gray-600">
                *Dump fees are a separate, additional charge. Fees and disposal rules vary by facility.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
