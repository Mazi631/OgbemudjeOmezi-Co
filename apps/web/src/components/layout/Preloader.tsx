import React, { useEffect, useState, useRef } from 'react';
import { CONTACT_INFO } from '../../constants/data';
import statueImg from '../../assets/Statue.png';

export const Preloader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const animFrameRef = useRef<number | null>(null);
  const phaseRef = useRef(0);

  // Animate the liquid wave crest continuously
  useEffect(() => {
    let active = true;
    const animateWave = () => {
      if (!active) return;
      phaseRef.current += 0.08;
      setPhase(phaseRef.current);
      animFrameRef.current = requestAnimationFrame(animateWave);
    };
    animFrameRef.current = requestAnimationFrame(animateWave);

    return () => {
      active = false;
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Vertical rising progress from 0% to 100% over 5s
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const duration = 5000; // 5s fill animation
    const intervalTime = 20;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            // Signal the entire website to start its entrance reveal animation
            if (typeof window !== 'undefined') {
              (window as any).__WEBSITE_LOADED__ = true;
              window.dispatchEvent(new CustomEvent('website-loaded'));
            }
            setIsFading(true);
            setTimeout(() => {
              setIsLoading(false);
              document.body.style.overflow = '';
              document.documentElement.style.overflow = '';
            }, 650);
          }, 300);
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, intervalTime);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  if (!isLoading) return null;

  // Generate normalized liquid wave polygon for SVG clipPath (0 to 1 objectBoundingBox)
  // Rises vertically from bottom (y=1) to top (y=-0.05)
  const getLiquidWavePath = () => {
    const y = 1.05 - (progress / 100) * 1.15;
    const damp = Math.sin((Math.min(Math.max(progress, 0), 100) / 100) * Math.PI);
    const amp = 0.038 * damp;

    const y0 = y + amp * Math.sin(phase);
    const y1 = y + amp * Math.sin(phase + 1.6);
    const y2 = y + amp * Math.sin(phase + 3.2);
    const y3 = y + amp * Math.sin(phase + 4.8);
    const y4 = y + amp * Math.sin(phase + 6.4);

    return (
      `M 0 1.2 ` +
      `L 0 ${y0.toFixed(4)} ` +
      `C 0.125 ${((y0 + y1) / 2).toFixed(4)}, 0.125 ${((y0 + y1) / 2).toFixed(4)}, 0.25 ${y1.toFixed(4)} ` +
      `C 0.375 ${((y1 + y2) / 2).toFixed(4)}, 0.375 ${((y1 + y2) / 2).toFixed(4)}, 0.50 ${y2.toFixed(4)} ` +
      `C 0.625 ${((y2 + y3) / 2).toFixed(4)}, 0.625 ${((y2 + y3) / 2).toFixed(4)}, 0.75 ${y3.toFixed(4)} ` +
      `C 0.875 ${((y3 + y4) / 2).toFixed(4)}, 0.875 ${((y3 + y4) / 2).toFixed(4)}, 1.00 ${y4.toFixed(4)} ` +
      `L 1 1.2 Z`
    );
  };

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-[#F6F3EC] flex items-center justify-center overflow-hidden transition-opacity duration-700 ease-out select-none ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* SVG Definitions for Dynamic Liquid Wave Mask */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="liquid-wave-clip" clipPathUnits="objectBoundingBox">
            <path d={getLiquidWavePath()} />
          </clipPath>
        </defs>
      </svg>

      {/* Center: ONLY the icon preloading with vertical liquid gold fill */}
      <div className="relative z-20 flex flex-col items-center justify-center px-6">
        <div className="relative w-72 h-36 sm:w-96 sm:h-48 md:w-[440px] md:h-[220px] lg:w-[500px] lg:h-[250px] flex items-center justify-center">
          
          {/* Layer 1: Monochrome Base Silhouette Logo (Empty State) */}
          <img
            src={CONTACT_INFO.logoUrl}
            alt="Ogbemudje, Omezi & Co. Logo Base"
            className="w-full h-full object-contain filter grayscale opacity-20 contrast-125 select-none"
          />

          {/* Layer 2: Gleaming Liquid Gold Filled Logo (Clipped strictly within the logo silhouette by vertical wavy liquid clipPath) */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              clipPath: 'url(#liquid-wave-clip)',
              WebkitClipPath: 'url(#liquid-wave-clip)',
            }}
          >
            <img
              src={CONTACT_INFO.logoUrl}
              alt="Ogbemudje, Omezi & Co. Gold Fill Logo"
              className="w-full h-full object-contain filter sepia(95%) saturate(350%) hue-rotate(5deg) contrast(1.15) brightness(0.95) drop-shadow-[0_4px_16px_rgba(184,134,11,0.35)] select-none"
            />
          </div>
        </div>
      </div>

      {/* Bottom Right: Statue PNG from Hero Section */}
      <div className="absolute -bottom-4 right-0 sm:right-6 md:right-10 lg:right-16 z-10 pointer-events-none">
        <img
          src={statueImg}
          alt="Lady Justice Statue"
          className="h-[280px] sm:h-[380px] md:h-[460px] lg:h-[540px] w-auto object-contain object-bottom drop-shadow-2xl opacity-90 transition-transform duration-1000 ease-out"
          style={{
            transform: isFading ? 'translateY(24px) scale(0.98)' : 'translateY(0) scale(1)',
          }}
        />
      </div>
    </div>
  );
};
