import React from 'react';

const SupportBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-yellow-400 text-white py-3 px-6 text-center shadow-md">
      <p className="font-semibold text-sm md:text-base drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.4)' }}>
        <span role="img" aria-label="Ukrainian flag">🇺🇦</span> We support Ukraine in its fight against Putin's aggression. #StandWithUkraine
      </p>
    </div>
  );
};

export default SupportBanner;