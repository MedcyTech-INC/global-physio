import React from 'react';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroBg from '../../assets/hero_bg.png';

interface PatientJourneyHeroProps {
  onBookClick: () => void;
}

export const PatientJourneyHero: React.FC<PatientJourneyHeroProps> = ({ onBookClick }) => {
  const navigate = useNavigate();

  const handleScrollToTimeline = () => {
    const el = document.getElementById('journey-timeline');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFFDF8] via-[#FAF4E8] to-[#FFFDF8] flex items-center justify-center pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-12 lg:pb-14 font-sans border-b border-[#EAD9B7]">
      {/* 1. Subtle Background Image */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <img
          src={heroBg}
          alt="Global Physiotherapy Patient Journey"
          className="absolute inset-0 w-full h-full object-cover object-center filter saturate-50 mix-blend-multiply select-none"
        />
      </div>

      {/* 2. Atmospheric Gradients */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] bg-[#F8EAC9]/60 pointer-events-none z-10" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] rounded-full blur-[140px] bg-[#FAF4E8]/80 pointer-events-none z-10" />

      {/* 3. Centered Hero Content */}
      <div className="relative z-20 w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 text-center flex flex-col items-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#FAF4E8] border border-[#EAD9B7] backdrop-blur-md mb-4 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#B87908] animate-pulse" />
          <span className="text-[#B87908] font-bold text-xs sm:text-xs tracking-[0.2em] uppercase">
            YOUR RECOVERY JOURNEY
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black text-[#24190F] tracking-tight leading-[1.18] max-w-3xl mb-3.5 font-serif">
          Every Recovery Starts{' '}
          <span className="bg-gradient-to-r from-[#B87908] via-[#D99B24] to-[#24190F] bg-clip-text text-transparent block sm:inline">
            With One Step.
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="text-sm sm:text-base lg:text-[17px] text-[#65594B] font-normal leading-relaxed max-w-2xl mb-6 text-balance">
          From your initial consultation to progressive reconditioning, we guide you through an objective, milestone-driven rehabilitation pathway.
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#B87908] to-[#D99B24] hover:from-[#A06806] hover:to-[#C48A1D] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#B87908]/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => navigate('/services')}
            className="w-full sm:w-auto px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl bg-white hover:bg-[#FAF4E8] text-[#24190F] border border-[#EAD9B7] font-bold text-sm sm:text-base shadow-2xs transition-all flex items-center justify-center gap-2 cursor-pointer group"
          >
            <Sparkles className="w-4 h-4 text-[#B87908]" />
            <span>Explore Clinical Services</span>
          </button>
        </div>

        {/* Scroll hint */}
        <button
          onClick={handleScrollToTimeline}
          className="mt-6 sm:mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#65594B] hover:text-[#B87908] transition-colors cursor-pointer"
        >
          <span>View 5-Phase Pathway</span>
          <ChevronDown className="w-3.5 h-3.5 text-[#B87908] animate-bounce" />
        </button>
      </div>
    </section>
  );
};

