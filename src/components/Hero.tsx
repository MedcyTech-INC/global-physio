import React from 'react';
import {
  ArrowRight,
  Play,
  Activity,
  Zap,
  TrendingUp,
  Heart,
  Award,
  ShieldCheck,
  UserCheck,
  Users
} from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreClick }) => {
  return (
    <section 
      data-hero
      className="relative w-full bg-[#FAF7F2] overflow-hidden font-sans pt-3 pb-6 sm:pt-4 sm:pb-8 lg:pt-4 lg:pb-8"
    >
      {/* ── SHARED CONTAINER: CENTERS BOTH HERO CANVAS AND STATISTICS CARD ── */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* ── 1. MAIN HERO CANVAS (ROUNDED OUTLINE CONTAINER) ── */}
        <div className="relative w-full rounded-3xl border border-[#EAD9B7] bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2] to-[#FAF4E8] shadow-sm overflow-hidden p-6 sm:p-8 lg:p-9 xl:p-10">
          
          {/* Background Radiant Spine Image (Anchored within right side of Hero Canvas) */}
          <div className="absolute top-0 right-0 w-full lg:w-[56%] xl:w-[52%] h-full pointer-events-none overflow-hidden z-0">
            <img
              src="/radiant-spine.png"
              alt="Radiant Spine Medical Illustration"
              className="w-full h-full object-cover object-right select-none opacity-95"
            />

            {/* Soft Golden Background Overlay Gradient from Left */}
            <div 
              className="absolute inset-0 hidden lg:block"
              style={{
                background: 'linear-gradient(90deg, #FAF7F2 0%, #FAF7F2 30%, rgba(250, 247, 242, 0.94) 48%, rgba(250, 247, 242, 0.25) 75%, transparent 100%)'
              }}
            />

            {/* Mobile / Tablet Full Soft Overlay for 100% Contrast */}
            <div 
              className="absolute inset-0 lg:hidden"
              style={{
                background: 'linear-gradient(180deg, rgba(250, 247, 242, 0.96) 0%, rgba(250, 247, 242, 0.88) 60%, #FAF7F2 100%)'
              }}
            />
          </div>

          {/* Subtle Ambient Radial Glow */}
          <div 
            className="absolute top-0 left-0 w-[420px] h-[420px] rounded-full opacity-35 blur-3xl pointer-events-none z-0"
            style={{ background: 'radial-gradient(circle, #F5E6C4 0%, #EBD5A2 40%, transparent 70%)' }}
          />

          {/* Left Hero Content Area */}
          <div className="relative z-10 max-w-[620px] text-left">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D9A74A]/40 bg-[#FFFDF9]/90 shadow-2xs backdrop-blur-sm mb-3">
              <span className="w-2 h-2 rounded-full bg-[#B87A0C] border border-[#D9A74A] flex items-center justify-center shrink-0">
                <span className="w-1 h-1 rounded-full bg-white" />
              </span>
              <span className="text-[#996204] font-bold text-xs tracking-wider uppercase">
                EXPERT PHYSIOTHERAPY CARE
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[54px] font-black tracking-tight leading-[1.08] text-[#1F170D]">
              Move Better.
              <span 
                className="block mt-1 text-[#B87A0C]"
                style={{
                  textShadow: '0 2px 20px rgba(184, 122, 12, 0.15)'
                }}
              >
                Live Stronger.
              </span>
            </h1>

            {/* Description (Gap: ~14px) */}
            <p className="mt-3.5 text-[#4A3E31] text-sm sm:text-base lg:text-[16.5px] leading-relaxed font-medium max-w-xl">
              Personalized physiotherapy treatments to reduce pain, restore movement, and help you get back to the life you love.
            </p>

            {/* Four Core Benefit Items (Gap: ~18px) */}
            <div className="mt-4.5 pt-0.5">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 items-center">
                
                {/* Benefit 1: Pain Relief */}
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#F5E6C4] border border-[#E8D4A2] flex items-center justify-center shrink-0 text-[#996204] shadow-2xs">
                    <Activity className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[#2C1E0A] text-xs lg:text-[13px] font-bold whitespace-nowrap">
                    Pain Relief
                  </span>
                </div>

                {/* Benefit 2: Faster Recovery */}
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#F5E6C4] border border-[#E8D4A2] flex items-center justify-center shrink-0 text-[#996204] shadow-2xs">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[#2C1E0A] text-xs lg:text-[13px] font-bold whitespace-nowrap">
                    Faster Recovery
                  </span>
                </div>

                {/* Benefit 3: Improved Mobility */}
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#F5E6C4] border border-[#E8D4A2] flex items-center justify-center shrink-0 text-[#996204] shadow-2xs">
                    <TrendingUp className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[#2C1E0A] text-xs lg:text-[13px] font-bold whitespace-nowrap">
                    Improved Mobility
                  </span>
                </div>

                {/* Benefit 4: Better Quality of Life */}
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#F5E6C4] border border-[#E8D4A2] flex items-center justify-center shrink-0 text-[#996204] shadow-2xs">
                    <Heart className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[#2C1E0A] text-xs lg:text-[13px] font-bold whitespace-nowrap">
                    Better Quality of Life
                  </span>
                </div>

              </div>
            </div>

            {/* CTA Buttons (Gap: ~22px) */}
            <div className="mt-5.5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              
              {/* Primary CTA */}
              <button
                onClick={onBookClick}
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-white transition-all duration-300 shadow-md shadow-[#B87A0C]/25 hover:shadow-[#B87A0C]/40 hover:-translate-y-0.5 cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #B87A0C 0%, #996204 100%)'
                }}
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-3.5 h-3.5 text-white shrink-0 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={onExploreClick}
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-[#996204] border-2 border-[#D9A74A]/60 bg-white hover:bg-[#FFFDF9] hover:border-[#B87A0C] transition-all duration-300 hover:-translate-y-0.5 shadow-2xs cursor-pointer"
              >
                <span className="w-5 h-5 rounded-full bg-[#B87A0C] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </span>
                <span>Watch Our Approach</span>
              </button>

            </div>

          </div>
        </div>

        {/* ── 2. STATISTICS CARD (IDENTICALLY ALIGNED TO HERO CANVAS EDGES) ── */}
        <div className="mt-5 sm:mt-6 lg:mt-6 w-full">
          <div className="w-full bg-white rounded-2xl shadow-lg shadow-amber-950/5 border border-[#EAD9B7] p-4 sm:p-5 relative z-20 box-border">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-amber-100/90">
              
              {/* Stat 1 */}
              <div className="flex flex-col items-center text-center p-1 sm:p-1.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F5E6C4] border border-[#E8D4A2] flex items-center justify-center text-[#996204] mb-1.5 shadow-2xs">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#1F170D]">1000+</div>
                <div className="text-[11px] sm:text-xs font-semibold text-[#665643] mt-0.5">Happy Patients</div>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center text-center p-1 sm:p-1.5 pt-3 lg:pt-1.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F5E6C4] border border-[#E8D4A2] flex items-center justify-center text-[#996204] mb-1.5 shadow-2xs">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#1F170D]">95%</div>
                <div className="text-[11px] sm:text-xs font-semibold text-[#665643] mt-0.5">Recovery Rate</div>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center text-center p-1 sm:p-1.5 pt-3 lg:pt-1.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F5E6C4] border border-[#E8D4A2] flex items-center justify-center text-[#996204] mb-1.5 shadow-2xs">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#1F170D]">5+ Years</div>
                <div className="text-[11px] sm:text-xs font-semibold text-[#665643] mt-0.5">of Excellence</div>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col items-center text-center p-1 sm:p-1.5 pt-3 lg:pt-1.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F5E6C4] border border-[#E8D4A2] flex items-center justify-center text-[#996204] mb-1.5 shadow-2xs">
                  <Users className="w-4 h-4" />
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#1F170D]">Personalized</div>
                <div className="text-[11px] sm:text-xs font-semibold text-[#665643] mt-0.5">Care Plans</div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
