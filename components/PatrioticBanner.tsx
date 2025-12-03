import React from 'react';

const PatrioticBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 to-blue-700 text-white py-3 px-6 text-center shadow-md">
      <p className="font-semibold text-sm md:text-base drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.4)' }}>
        <span role="img" aria-label="American flag">🇺🇸</span> Support Trump and americans fighting for better america.
      </p>
    </div>
  );
};

export default PatrioticBanner;