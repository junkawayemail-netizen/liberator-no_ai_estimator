import React from 'react';

// A generic icon for items.
const ItemIcon: React.FC<{ d: string }> = ({ d }) => (
    <svg className="w-10 h-10 mb-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={d}></path>
    </svg>
);

const ServiceCard: React.FC<{ title: string; iconPath: string; }> = ({ title, iconPath }) => (
    <div className="bg-white/40 backdrop-blur-lg border border-white/30 p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 h-full">
        <div className="flex justify-center">
            <ItemIcon d={iconPath} />
        </div>
        <h3 className="font-bold text-lg text-brand-blue">{title}</h3>
    </div>
);

const Services: React.FC = () => {
    const servicesList = [
        { title: 'Turnover Cleanouts', iconPath: 'M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z' },
        { title: 'Furniture Removal', iconPath: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
        { title: 'Appliance Recycling', iconPath: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
        { title: 'Yard Waste Disposal', iconPath: 'M14.121 15.121A3 3 0 0112 16.5c-1.282 0-2.45-.8-2.873-2.022M7.5 7.5a3 3 0 013-3h3a3 3 0 013 3v3a3 3 0 01-3 3h-3a3 3 0 01-3-3v-3z' },
        { title: 'Construction Debris', iconPath: 'M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
        { title: 'E-Waste Recycling', iconPath: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
        { title: 'General Junk', iconPath: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' },
        { title: 'Move Out Cleaning', iconPath: 'M10 3L7.5 7.5 3 10l4.5 2.5L10 17l2.5-4.5L17 10l-4.5-2.5z' }
    ];

    return (
        <section id="services" className="py-20 bg-transparent">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 scroll-animate">
                    <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-brand-blue">
                        Our Services
                    </h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                        From single items to full property cleanouts, we can handle almost anything.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {servicesList.map((service, index) => (
                        <div key={service.title} className="scroll-animate" style={{ animationDelay: `${index * 50}ms` }}>
                            <ServiceCard title={service.title} iconPath={service.iconPath} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;