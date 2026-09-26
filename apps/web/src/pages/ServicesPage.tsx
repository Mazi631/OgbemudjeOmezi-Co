import React from 'react';
import { PracticeAreasSection } from '../components/sections/PracticeAreasSection';

export const ServicesPage: React.FC = () => {
  return (
    <div className="pt-24 bg-[#F6F3EC] min-h-screen">
      {/* Page Header */}
      <section className="bg-[#38291B] text-white py-16 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="text-xs uppercase font-bold tracking-[0.2em] text-[#D4AF37]">
            Legal Services
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold">
            Our Practice Areas
          </h1>
          <p className="text-base text-gray-300 max-w-2xl font-normal leading-relaxed">
            Specialized legal counsel across banking, taxation, petroleum, maritime, aviation, intellectual property, arbitration, and real estate practice in Nigeria.
          </p>
        </div>
      </section>

      {/* Main Practice Areas Section */}
      <PracticeAreasSection />
    </div>
  );
};
