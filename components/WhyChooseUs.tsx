
import React from 'react';

const CheckIcon = () => (
    <svg className="w-6 h-6 text-white bg-brand-green rounded-full p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

const Feature: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="flex items-start space-x-4">
        <div>
            <CheckIcon />
        </div>
        <div>
            <h3 className="text-lg font-bold text-brand-blue">{title}</h3>
            <p className="text-gray-600 mt-1">{description}</p>
        </div>
    </div>
);

const WhyChooseUs: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-white/80 backdrop-blur-sm">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 scroll-animate" style={{ animationDelay: '100ms' }}>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-brand-blue mb-4">
                                The Liberator Doctrine
                            </h2>
                            <p className="text-lg text-gray-600">
                                We are more than a junk hauling service. We are a disciplined force dedicated to liberating you from the tyranny of clutter.
                            </p>
                        </div>
                        <Feature
                            title="Eco-Friendly Disposal Pros"
                            description="As recycling pros, we adhere to EPA guidelines to recycle and donate whenever possible, minimizing landfill waste and giving items a second life."
                        />
                        <Feature
                            title="Licensed & Insured"
                            description="Your property is in safe hands. Our team is fully licensed and insured for your peace of mind."
                        />
                        <Feature
                            title="Safety is Our Priority"
                            description="Our squad is trained to follow strict safety protocols, adhering to CalOSHA standards to ensure every job is done safely and efficiently."
                        />
                         <Feature
                            title="Upfront, Transparent Pricing"
                            description="No hidden fees. We provide a clear, all-inclusive quote before any work begins, so you know exactly what to expect."
                        />
                         <Feature
                            title="Same-Day Service"
                            description="Urgent situation? We deploy same-day and next-day missions to secure your space."
                        />
                    </div>
                    <div className="scroll-animate" style={{ animationDelay: '200ms' }}>
                        <img 
                            src="https://images.unsplash.com/photo-1563453392212-9a3b5d83a152?q=80&w=600&auto=format&fit=crop" 
                            alt="The Liberator junk removal squad" 
                            className="rounded-lg shadow-2xl w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;