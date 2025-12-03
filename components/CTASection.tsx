
import React from 'react';

const CTASection: React.FC = () => {
    return (
        <section id="contact" className="bg-brand-blue text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-white/5 rounded-full"></div>
            <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-white/5 rounded-full"></div>
            <div className="container mx-auto px-6 py-20 text-center relative z-10 scroll-animate">
                <h2 className="text-3xl md:text-4xl font-extrabold font-heading mb-4">
                    Ready to Be Liberated from Your Junk?
                </h2>
                <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
                    Contact us today for a fast, free, no-nonsense strategic estimate. Your clutter-free territory is just one command away.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                    <a href="#contact-form" className="bg-brand-green/80 backdrop-blur-sm border border-white/20 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-brand-green transition-all duration-300 transform hover:scale-105 inline-block shadow-lg w-full sm:w-auto">
                        Request a Battle Plan
                    </a>
                    <div className="text-center">
                         <p className="text-gray-300">Or Call Your Commanders!</p>
                         <a href="tel:415-509-8778" className="text-2xl font-bold text-white hover:text-brand-green transition-colors">
                            (415) 509-8778
                         </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;