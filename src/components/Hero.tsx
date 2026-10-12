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
      className="relative w-full bg-[#FAF7F2] overflow-hidden font-sans flex flex-col justify-between lg:h-[calc(100svh-5rem)] lg:min-h-[580px] lg:max-h-[960px]"
    >
      {/* ── 1. BACKGROUND RADIANT SPINE IMAGE (ANCHORED SEAMLESSLY TO HERO) ── */}
      <div className="absolute top-0 right-0 w-full lg:w-[72%] xl:w-[68%] 2xl:w-[65%] h-[calc(100%-7.5rem)] pointer-events-none overflow-hidden z-0">
        <img
          src="/radiant-spine.png"
          alt="Radiant Spine Medical Illustration"
          className="w-full h-full object-cover object-right select-none opacity-95 scale-105 sm:scale-110 lg:scale-122 xl:scale-130 origin-top-right transition-transform duration-500"
        />

        {/* Soft Golden Background Overlay Gradient from Left */}
        <div 
          className="absolute inset-0 hidden lg:block"
          style={{
            background: 'linear-gradient(90deg, #FAF7F2 0%, #FAF7F2 22%, rgba(250, 247, 242, 0.92) 40%, rgba(250, 247, 242, 0.15) 70%, transparent 100%)'
          }}
        />

        {/* Bottom fade to ensure no baked-in card artifact from the image ever appears */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/90 to-transparent pointer-events-none" />

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

      {/* ── 2. MAIN CONTENT & TRUST STRIP CONTAINER ── */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 flex-1 flex flex-col justify-between py-4 sm:py-5 lg:py-6 relative z-10">
        
        {/* Top / Main Left Content Area */}
        <div className="max-w-[620px] text-left my-auto pt-1 sm:pt-2">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D9A74A]/40 bg-[#FFFDF9]/90 shadow-2xs backdrop-blur-sm mb-2.5">
            <span className="w-2 h-2 rounded-full bg-[#B87A0C] border border-[#D9A74A] flex items-center justify-center shrink-0">
              <span className="w-1 h-1 rounded-full bg-white" />
            </span>
            <span className="text-[#996204] font-bold text-xs tracking-wider uppercase">
              EXPERT PHYSIOTHERAPY CARE
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-black tracking-tight leading-[1.08] text-[#1F170D]">
            Move Better.
            <span 
              className="block mt-0.5 text-[#B87A0C]"
              style={{
                textShadow: '0 2px 20px rgba(184, 122, 12, 0.15)'
              }}
            >
              Live Stronger.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-2.5 sm:mt-3 text-[#4A3E31] text-xs sm:text-sm lg:text-[15.5px] leading-relaxed font-medium max-w-xl">
            Personalized physiotherapy treatments to reduce pain, restore movement, and help you get back to the life you love.
          </p>

          {/* Four Core Benefit Items */}
          <div className="mt-3.5 sm:mt-4 pt-0.5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 items-center">
              
              {/* Benefit 1: Pain Relief */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-6.5 h-6.5 rounded-full bg-[#F5E6C4] border border-[#E8D4A2] flex items-center justify-center shrink-0 text-[#996204] shadow-2xs">
                  <Activity className="w-3.5 h-3.5" />
                </div>
                <span className="text-[#2C1E0A] text-xs lg:text-[12.5px] font-bold whitespace-nowrap">
                  Pain Relief
                </span>
              </div>

              {/* Benefit 2: Faster Recovery */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-6.5 h-6.5 rounded-full bg-[#F5E6C4] border border-[#E8D4A2] flex items-center justify-center shrink-0 text-[#996204] shadow-2xs">
                  <Zap className="w-3.5 h-3.5" />
                </div>
                <span className="text-[#2C1E0A] text-xs lg:text-[12.5px] font-bold whitespace-nowrap">
                  Faster Recovery
                </span>
              </div>

              {/* Benefit 3: Improved Mobility */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-6.5 h-6.5 rounded-full bg-[#F5E6C4] border border-[#E8D4A2] flex items-center justify-center shrink-0 text-[#996204] shadow-2xs">
                  <TrendingUp className="w-3.5 h-3.5" />
                </div>
                <span className="text-[#2C1E0A] text-xs lg:text-[12.5px] font-bold whitespace-nowrap">
                  Improved Mobility
                </span>
              </div>

              {/* Benefit 4: Better Quality of Life */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-6.5 h-6.5 rounded-full bg-[#F5E6C4] border border-[#E8D4A2] flex items-center justify-center shrink-0 text-[#996204] shadow-2xs">
                  <Heart className="w-3.5 h-3.5" />
                </div>
                <span className="text-[#2C1E0A] text-xs lg:text-[12.5px] font-bold whitespace-nowrap">
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
              className="group inline-flex items-center justify-center gap-2.5 px-6 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm text-white transition-all duration-300 shadow-md shadow-[#B87A0C]/25 hover:shadow-[#B87A0C]/40 hover:-translate-y-0.5 cursor-pointer"
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
              className="group inline-flex items-center justify-center gap-2.5 px-6 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm text-[#996204] border-2 border-[#D9A74A]/60 bg-white hover:bg-[#FFFDF9] hover:border-[#B87A0C] transition-all duration-300 hover:-translate-y-0.5 shadow-2xs cursor-pointer"
            >
              <span className="w-4.5 h-4.5 rounded-full bg-[#B87A0C] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
              </span>
              <span>Watch Our Approach</span>
            </button>

          </div>

        </div>

        {/* ── 3. BOTTOM TRUST STRIP BAR (STATISTICS CARD) ── */}
        <div className="w-full pt-3 lg:pt-4">
          <div className="w-full bg-white rounded-2xl shadow-lg shadow-amber-950/5 p-3.5 sm:p-4 lg:p-4.5 relative z-20 box-border">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-amber-100/90">
              
              {/* Stat 1: 1000+ Happy Patients */}
              <div className="flex flex-col items-center text-center p-1 sm:p-1.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F5E6C4] border border-[#E8D4A2] flex items-center justify-center text-[#996204] mb-1 shadow-2xs">
                  <UserCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#1F170D]">1000+</div>
                <div className="text-[11px] sm:text-xs font-semibold text-[#665643] mt-0.5">Happy Patients</div>
              </div>

              {/* Stat 2: 95% Recovery Rate */}
              <div className="flex flex-col items-center text-center p-1 sm:p-1.5 pt-2.5 lg:pt-1.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F5E6C4] border border-[#E8D4A2] flex items-center justify-center text-[#996204] mb-1 shadow-2xs">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#1F170D]">95%</div>
                <div className="text-[11px] sm:text-xs font-semibold text-[#665643] mt-0.5">Recovery Rate</div>
              </div>

              {/* Stat 3: 5+ Years of Excellence */}
              <div className="flex flex-col items-center text-center p-1 sm:p-1.5 pt-2.5 lg:pt-1.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F5E6C4] border border-[#E8D4A2] flex items-center justify-center text-[#996204] mb-1 shadow-2xs">
                  <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#1F170D]">5+ Years</div>
                <div className="text-[11px] sm:text-xs font-semibold text-[#665643] mt-0.5">of Excellence</div>
              </div>

              {/* Stat 4: Personalized Care Plans */}
              <div className="flex flex-col items-center text-center p-1 sm:p-1.5 pt-2.5 lg:pt-1.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F5E6C4] border border-[#E8D4A2] flex items-center justify-center text-[#996204] mb-1 shadow-2xs">
                  <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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

