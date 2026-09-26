import React, { useEffect } from 'react';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { PracticeAreaItem } from './cards/PracticeCard';

export interface PracticeDetailModalProps {
  area: PracticeAreaItem | null;
  onClose: () => void;
}

export const PracticeDetailModal: React.FC<PracticeDetailModalProps> = ({ area, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (area) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [area, onClose]);

  if (!area) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fadeIn">
      {/* Backdrop overlay */}
      <div
        className="absolute inset-0 cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative bg-[#FCFBFA] border border-[#E6E1D5] rounded-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl text-[#1A1A1A] z-10 flex flex-col">
        {/* Header Image / Gradient */}
        <div className="relative w-full h-48 sm:h-56 bg-[#E6E1D5] shrink-0 overflow-hidden">
          {area.image ? (
            <img
              src={area.image}
              alt={area.title}
              className="w-full h-full object-cover brightness-[0.7]"
            />
          ) : (
            <div className="w-full h-full bg-[#EBE6DC] flex items-center justify-center text-6xl opacity-40">
              ⚖️
            </div>
          )}

          {/* Cancel button directly on image */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-30 bg-[#1A1A1A] hover:bg-[#B8860B] text-white px-3.5 py-1.5 rounded-full transition-colors cursor-pointer shadow-md flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
            <span>Cancel</span>
          </button>

          <div className="absolute bottom-4 left-6 right-6 flex items-center gap-3">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white shadow-sm">
              {area.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 flex-1">
          <div>
            <h4 className="text-[0.73rem] font-bold tracking-[0.16em] uppercase text-[#B8860B] mb-2">
              Practice Overview
            </h4>
            <p className="text-sm sm:text-base text-[#2D2A26] leading-relaxed font-normal">
              {area.description}
            </p>
          </div>

          {area.items && area.items.length > 0 && (
            <div>
              <h4 className="text-[0.73rem] font-bold tracking-[0.16em] uppercase text-[#B8860B] mb-3">
                Key Legal Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {area.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 bg-[#F5F2EB] p-3 rounded-xs border border-[#E6E1D5]">
                    <CheckCircle2 className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#1A1A1A] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-[#E6E1D5] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#59544B] font-normal">
              Require legal counsel in {area.title.toLowerCase()}?
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href="#contact"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 bg-[#1A1A1A] hover:bg-[#B8860B] text-white font-bold text-xs uppercase tracking-wider rounded-xs transition-colors text-center inline-flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Contact Chambers</span> <ArrowRight className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-3 border border-[#E6E1D5] hover:bg-stone-200 text-[#1A1A1A] text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
