import React, { useEffect } from 'react';
import type { PracticeArea } from '../../constants/data';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';

interface PracticeDetailModalProps {
  area: PracticeArea | null;
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
      {/* Backdrop overlay */}
      <div
        className="absolute inset-0 cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative bg-[var(--color-ink)] border border-[var(--color-gold)]/40 rounded-md max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl text-white z-10 flex flex-col">
        {/* Header Image / Gradient */}
        <div className="relative w-full h-48 sm:h-56 bg-slate-900 shrink-0 overflow-hidden">
          {area.image ? (
            <img
              src={area.image}
              alt={area.title}
              className="w-full h-full object-cover brightness-[0.6]"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-[var(--color-slate)] to-[var(--color-ink)] flex items-center justify-center text-6xl opacity-30">
              {area.icon}
            </div>
          )}

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/60 hover:bg-[var(--color-gold)] hover:text-[var(--color-ink)] text-white p-2 rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 flex items-center gap-3">
            <span className="text-3xl bg-black/40 p-2 rounded-md backdrop-blur-md border border-white/10">
              {area.icon}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white">
              {area.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 flex-1">
          <div>
            <h4 className="text-[0.75rem] font-semibold tracking-[0.16em] uppercase text-[var(--color-gold)] mb-2">
              Practice Overview
            </h4>
            <p className="text-[0.95rem] text-white/80 leading-relaxed font-light">
              {area.description}
            </p>
          </div>

          {area.items && area.items.length > 0 && (
            <div>
              <h4 className="text-[0.75rem] font-semibold tracking-[0.16em] uppercase text-[var(--color-gold)] mb-3">
                Key Legal Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {area.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 bg-white/5 p-3 rounded-xs border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-gold)] shrink-0 mt-0.5" />
                    <span className="text-[0.85rem] text-white/85 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[0.8rem] text-white/50 font-light">
              Require legal counsel in {area.title.toLowerCase()}?
            </span>
            <a
              href="/contact"
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 bg-[var(--color-gold)] text-[var(--color-ink)] font-semibold text-[0.8rem] uppercase tracking-wider rounded-xs hover:bg-[var(--color-gold-bright)] transition-colors text-center inline-flex items-center justify-center gap-2"
            >
              Contact Chambers <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
