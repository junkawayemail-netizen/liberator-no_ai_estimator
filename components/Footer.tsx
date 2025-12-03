import React from 'react';

const LiberatorLogo: React.FC = () => (
    <div className="flex items-center space-x-3">
      <svg width="36" height="36" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <g>
            <path d="M0 64 V 54 L 8 60 L 15 52 L 25 62 L 32 50 L 42 60 L 50 55 L 58 62 L 64 58 V 64 Z" fill="#4A5568"/>
            <path d="M4 56 L 12 50 L 20 58 L 28 50 L 38 58 L 48 52 L 56 60 L 62 56" stroke="#718096" strokeWidth="1" fill="none"/>
            <path className="text-brand-green" fill="currentColor" d="M4 52 L 5 45 H 34 V 30 H 42 L 54 38 V 52 H 59 L 61 56 H 58 V 60 H 50 V 56 H 20 V 60 H 12 V 56 H 2 Z"/>
            <path className="text-brand-blue" fill="currentColor" d="M34 52 V 30 H 42 L 54 38 V 52 Z"/>
            <path fill="#A0AEC0" d="M36 33 H 45 L 51 39 H 36 Z"/>
            <circle cx="16" cy="56" r="6" fill="#2D3748"/><circle cx="16" cy="56" r="3" fill="#A0AEC0"/>
            <circle cx="54" cy="56" r="6" fill="#2D3748"/><circle cx="54"cy="56" r="3" fill="#A0AEC0"/>
            <path fill="#718096" d="M6 30 L 8 22 L 14 28 L 18 20 L 24 30 L 28 25 L 32 30 H 6 Z"/>
            <path fill="#A0AEC0" d="M10 28 L 12 18 L 16 26 L 20 20 L 26 29 L 30 24" stroke="#4A5568" strokeWidth="0.5" />
        </g>
      </svg>
      <div>
        <span className="font-heading text-xl font-bold text-white block leading-tight">LIBERATOR</span>
        <span className="text-[10px] text-gray-400 font-medium tracking-wider uppercase">Junk Rescue Operations</span>
      </div>
    </div>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-dark text-gray-300">
            <div className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <LiberatorLogo />
                        <p>Our mission: your total liberation from clutter. Dominating the Bay Area.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#services" className="hover:text-brand-green transition-colors">Services</a></li>
                            <li><a href="#work" className="hover:text-brand-green transition-colors">Our Work</a></li>
                            <li><a href="#team" className="hover:text-brand-green transition-colors">Our Team</a></li>
                            <li><a href="#about" className="hover:text-brand-green transition-colors">Why Choose Us</a></li>
                            <li><a href="#contact" className="hover:text-brand-green transition-colors">Get a Quote</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-white mb-4">Contact Us</h4>
                        <ul className="space-y-2">
                            <li><a href="tel:415-509-8778" className="hover:text-brand-green transition-colors">(415) 509-8778</a></li>
                            <li><a href="mailto:contact@liberatorjunk.com" className="hover:text-brand-green transition-colors">contact@liberatorjunk.com</a></li>
                            <li>Serving the San Francisco Bay Area</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Liberator Junk Removal. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;