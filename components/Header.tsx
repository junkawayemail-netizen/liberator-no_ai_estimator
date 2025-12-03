import React, { useState } from 'react';

const LiberatorLogo: React.FC = () => (
  <div className="flex items-center space-x-3">
    <svg width="48" height="48" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
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
      <span className="font-heading text-2xl font-bold text-brand-blue block leading-tight">LIBERATOR</span>
      <span className="text-[10px] text-gray-500 font-medium tracking-wider uppercase">Junk Rescue Operations</span>
    </div>
  </div>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#pricing', label: 'Pricing' },
    { href: '#services', label: 'Services' },
    { href: '#work', label: 'Our Work' },
    { href: '#team', label: 'Team' },
    { href: '#about', label: 'Why Us' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm border-b border-white/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <LiberatorLogo />
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-brand-dark font-medium hover:text-brand-green transition-colors duration-300">
                {link.label}
              </a>
            ))}
            <a href="#contact" className="bg-brand-green/80 backdrop-blur-sm border border-white/20 shadow-md text-white font-bold py-2 px-6 rounded-full hover:bg-brand-green transition-all duration-300 transform hover:scale-105">
              Free Quote
            </a>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-blue focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-brand-dark font-medium hover:text-brand-green transition-colors duration-300 text-center py-2" onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
              <a href="#contact" className="bg-brand-green text-white font-bold py-3 px-6 rounded-full hover:brightness-90 transition-colors duration-300 text-center" onClick={() => setIsMenuOpen(false)}>
                Free Quote
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;