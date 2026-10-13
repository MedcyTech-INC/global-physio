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
      className="relative w-full bg-[#FAF7F2] font-sans py-2 sm:py-2.5 lg:py-3 box-border overflow-hidden lg:h-[calc(100vh-85px)] lg:min-h-[580px] flex flex-col justify-center"
    >
      {/* ── SHARED CENTERED CONTAINER: HOUSES UNIFIED HERO CANVAS ── */}
      <div className="w-full max-w-[1400px] xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col">
        
        {/* ── LARGE ROUNDED BACKGROUND CONTAINER ── */}
        <div className="relative w-full h-full flex-1 rounded-3xl border border-[#EAD9B7] bg-gradient-to-br from-[#FAF7F2] via-[#FAF7F2] to-[#FAF4E8] shadow-xs overflow-hidden p-5 sm:p-6 lg:p-7 xl:p-8 flex flex-col justify-between">
          
          {/* 1. Background Radiant Spine Image (Anchored within right side of Hero Canvas) */}
          <div className="absolute top-0 right-0 w-full lg:w-[54%] xl:w-[50%] h-full pointer-events-none overflow-hidden z-0 flex items-center justify-end">
            <img
              src="/radiant-spine.png"
              alt="Radiant Spine Medical Illustration"
              className="w-full h-full object-cover object-right select-none opacity-95 scale-100 lg:scale-105 origin-center transition-transform duration-500"
            />

            {/* Soft Golden Background Overlay Gradient from Left */}
            <div 
              className="absolute inset-0 hidden lg:block pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, #FAF7F2 0%, #FAF7F2 22%, rgba(250, 247, 242, 0.92) 40%, rgba(250, 247, 242, 0.2) 72%, transparent 100%)'
              }}
            />

            {/* Bottom soft gradient fade so image seamlessly blends into hero container background */}
            <div 
              className="absolute inset-0 hidden lg:block pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, transparent 55%, rgba(250, 247, 242, 0.85) 80%, #FAF7F2 100%)'
              }}
            />

            {/* Mobile / Tablet Full Soft Overlay for 100% Contrast */}
            <div 
              className="absolute inset-0 lg:hidden pointer-events-none"
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

          {/* ── 2. MAIN HERO CONTENT AREA (TOP/MIDDLE) ── */}
          <div className="relative z-10 max-w-[620px] text-left pt-1 sm:pt-2 my-auto">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D9A74A]/40 bg-[#FFFDF9]/95 shadow-2xs backdrop-blur-sm mb-2.5 sm:mb-3">
              <span className="w-2 h-2 rounded-full bg-[#B87A0C] border border-[#D9A74A] flex items-center justify-center shrink-0">
                <span className="w-1 h-1 rounded-full bg-white" />
              </span>
              <span className="text-[#996204] font-bold text-xs tracking-wider uppercase">
                EXPERT PHYSIOTHERAPY CARE
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[48px] font-black tracking-tight leading-[1.12] text-[#1F170D] font-serif">
              Move Better.{' '}
              <span 
                className="block sm:inline lg:block text-[#B87A0C]"
                style={{
                  textShadow: '0 2px 24px rgba(184, 122, 12, 0.12)'
                }}
              >
                Live Stronger.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-2.5 sm:mt-3 text-[#4A3E31] text-sm sm:text-base lg:text-[15px] leading-relaxed font-normal max-w-[540px]">
              Personalized physiotherapy treatments to reduce pain, restore movement, and help you get back to the life you love.
            </p>

            {/* Four Core Benefit Items */}
            <div className="mt-3.5 sm:mt-4 pt-0.5">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 lg:gap-3.5 items-center">
                
                {/* Benefit 1: Pain Relief */}
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#F5E6C4] border border-[#E8D4A2] flex items-center justify-center shrink-0 text-[#996204] shadow-2xs">
                    <Activity className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[#2C1E0A] text-xs sm:text-[13px] font-bold whitespace-nowrap">
                    Pain Relief
                  </span>
                </div>

                {/* Benefit 2: Faster Recovery */}
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#F5E6C4] border border-[#E8D4A2] flex items-center justify-center shrink-0 text-[#996204] shadow-2xs">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[#2C1E0A] text-xs sm:text-[13px] font-bold whitespace-nowrap">
                    Faster Recovery
                  </span>
                </div>

                {/* Benefit 3: Improved Mobility */}
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#F5E6C4] border border-[#E8D4A2] flex items-center justify-center shrink-0 text-[#996204] shadow-2xs">
                    <TrendingUp className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[#2C1E0A] text-xs sm:text-[13px] font-bold whitespace-nowrap">
                    Improved Mobility
                  </span>
                </div>

                {/* Benefit 4: Better Quality of Life */}
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#F5E6C4] border border-[#E8D4A2] flex items-center justify-center shrink-0 text-[#996204] shadow-2xs">
                    <Heart className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[#2C1E0A] text-xs sm:text-[13px] font-bold whitespace-nowrap">
                    Better Quality of Life
                  </span>
                </div>

              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              
              {/* Primary CTA */}
              <button
                onClick={onBookClick}
                className="group inline-flex items-center justify-center gap-2.5 px-6.5 py-3 rounded-full font-bold text-xs sm:text-sm text-white transition-all duration-300 shadow-md shadow-[#B87A0C]/25 hover:shadow-[#B87A0C]/40 hover:-translate-y-0.5 cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #B87A0C 0%, #996204 100%)'
                }}
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 text-white shrink-0 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={onExploreClick}
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-[#996204] border border-[#D9A74A]/70 bg-white/90 hover:bg-white hover:border-[#B87A0C] transition-all duration-300 hover:-translate-y-0.5 shadow-2xs cursor-pointer"
              >
                <span className="w-5 h-5 rounded-full bg-[#B87A0C] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </span>
                <span>Watch Our Approach</span>
              </button>

            </div>

          </div>

          {/* ── 3. FOREGROUND WHITE STATISTICS BAR (HORIZONTALLY ALIGNED INSIDE BACKGROUND CONTAINER) ── */}
          <div className="mt-4 sm:mt-5 lg:mt-auto w-full relative z-20 pt-2 lg:pt-3">
            <div className="w-full bg-white/95 backdrop-blur-sm rounded-2xl border border-[#EAD9B7] shadow-sm p-3.5 sm:p-4 lg:py-3.5 lg:px-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-amber-100/90 items-center">
                
                {/* Stat 1: 1000+ Happy Patients */}
                <div className="flex items-center justify-center sm:justify-start lg:justify-center gap-3 px-2 sm:px-4 py-2 sm:py-1">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF4E8] border border-[#EAD9B7] flex items-center justify-center text-[#B87A0C] shrink-0 shadow-2xs">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-lg sm:text-xl lg:text-2xl font-black text-[#1F170D] tracking-tight leading-none">
                      1000+
                    </div>
                    <div className="text-[11px] sm:text-xs font-semibold text-[#665643] mt-1 whitespace-nowrap">
                      Happy Patients
                    </div>
                  </div>
                </div>

                {/* Stat 2: 95% Recovery Rate */}
                <div className="flex items-center justify-center sm:justify-start lg:justify-center gap-3 px-2 sm:px-4 py-2 sm:py-1 pt-3 sm:pt-1">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF4E8] border border-[#EAD9B7] flex items-center justify-center text-[#B87A0C] shrink-0 shadow-2xs">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-lg sm:text-xl lg:text-2xl font-black text-[#1F170D] tracking-tight leading-none">
                      95%
                    </div>
                    <div className="text-[11px] sm:text-xs font-semibold text-[#665643] mt-1 whitespace-nowrap">
                      Recovery Rate
                    </div>
                  </div>
                </div>

                {/* Stat 3: 5+ Years of Excellence */}
                <div className="flex items-center justify-center sm:justify-start lg:justify-center gap-3 px-2 sm:px-4 py-2 sm:py-1 pt-3 sm:pt-1">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF4E8] border border-[#EAD9B7] flex items-center justify-center text-[#B87A0C] shrink-0 shadow-2xs">
                    <Award className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-lg sm:text-xl lg:text-2xl font-black text-[#1F170D] tracking-tight leading-none">
                      5+ Years
                    </div>
                    <div className="text-[11px] sm:text-xs font-semibold text-[#665643] mt-1 whitespace-nowrap">
                      of Excellence
                    </div>
                  </div>
                </div>

                {/* Stat 4: Personalized Care Plans */}
                <div className="flex items-center justify-center sm:justify-start lg:justify-center gap-3 px-2 sm:px-4 py-2 sm:py-1 pt-3 sm:pt-1">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF4E8] border border-[#EAD9B7] flex items-center justify-center text-[#B87A0C] shrink-0 shadow-2xs">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-lg sm:text-xl lg:text-2xl font-black text-[#1F170D] tracking-tight leading-none">
                      Personalized
                    </div>
                    <div className="text-[11px] sm:text-xs font-semibold text-[#665643] mt-1 whitespace-nowrap">
                      Care Plans
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
