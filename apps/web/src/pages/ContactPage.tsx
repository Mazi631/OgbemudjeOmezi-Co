import React from 'react';
import { ContactSection } from '../components/sections/ContactSection';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 bg-[#F6F3EC] min-h-screen">
      {/* Page Header */}
      <section className="bg-[#38291B] text-white py-16 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="text-xs uppercase font-bold tracking-[0.2em] text-[#D4AF37]">
            Chambers Inquiry
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold">
            Contact Chambers
          </h1>
          <p className="text-base text-gray-300 max-w-2xl font-normal leading-relaxed">
            Reach out to our Victoria Island chambers to consult with our managing partners regarding your legal requirements.
          </p>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <ContactSection />
    </div>
  );
};
