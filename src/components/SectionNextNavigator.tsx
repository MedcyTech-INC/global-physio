import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Activity,
  BookOpen,
  Star,
  CheckCircle2,
  Compass,
  Sparkles
} from 'lucide-react';

interface PageItem {
  path: string;
  step: number;
  title: string;
  subtitle: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ABOUT_PAGES: PageItem[] = [
  {
    path: '/about',
    step: 1,
    title: 'About Our Center',
    subtitle: 'Our Core Standards, Care Principles & Clinical Philosophy',
    badge: 'Center Overview',
    icon: ShieldCheck,
  },
  {
    path: '/doctor',
    step: 2,
    title: 'Dr. K. Bhavendra PT',
    subtitle: 'Lead Consultant, Sports Medicine & Physical Rehabilitation',
    badge: 'Doctor Profile',
    icon: Award,
  },
  {
    path: '/clinic',
    step: 3,
    title: '18 Modern Modalities',
    subtitle: 'Advanced Spinal Decompression, Laser & Healing Spaces',
    badge: 'Clinic Facilities',
    icon: Activity,
  },
];

const INSIGHTS_PAGES: PageItem[] = [
  {
    path: '/blog',
    step: 1,
    title: 'Clinical Articles & Guides',
    subtitle: 'Evidence-Based Recovery Tips, Posture Advice & Health Guides',
    badge: 'Knowledge Hub',
    icon: BookOpen,
  },
  {
    path: '/patient-stories',
    step: 2,
    title: 'Patient Case Stories',
    subtitle: 'Real Recovery Journeys, Verified Google Reviews & Outcomes',
    badge: 'Patient Stories',
    icon: Star,
  },
];

interface SectionNextNavigatorProps {
  section?: 'about' | 'insights';
}

export const SectionNextNavigator: React.FC<SectionNextNavigatorProps> = ({ section }) => {
  const location = useLocation();

  // Auto-detect section if not provided
  const activeSection =
    section ||
    (['/blog', '/patient-stories'].includes(location.pathname) ? 'insights' : 'about');

  const pages = activeSection === 'about' ? ABOUT_PAGES : INSIGHTS_PAGES;
  const sectionTitle = activeSection === 'about' ? 'About Clinic' : 'Clinical Insights';

  const currentIndex = pages.findIndex((p) => p.path === location.pathname);
  const activeIndex = currentIndex !== -1 ? currentIndex : 0;
  const nextIndex = (activeIndex + 1) % pages.length;
  const nextPage = pages[nextIndex];

  return (
    <section className="py-14 sm:py-20 bg-[#FAF4E8] border-t border-[#EAD9B7] relative overflow-hidden font-sans">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#F8EAC9]/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#FAF4E8]/80 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#EAD9B7]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#EAD9B7] text-[#B87908] text-[11px] font-extrabold uppercase tracking-widest mb-3 shadow-xs">
              <Compass className="w-3.5 h-3.5 text-[#B87908]" />
              <span>IN THIS SECTION • {sectionTitle.toUpperCase()}</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black text-[#24190F] tracking-tight">
              Next in This Section
            </h3>
            
            <p className="text-xs sm:text-sm text-[#65594B] mt-1.5 max-w-xl leading-relaxed">
              Explore every page in the <strong>{sectionTitle}</strong> section so you don't miss any clinical details, doctor background, or patient outcomes.
            </p>
          </div>

          {/* Quick "Go to Next" Primary Action Button */}
          <Link
            to={nextPage.path}
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#B87908] to-[#D99B24] hover:opacity-95 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md shadow-[#B87908]/20 transition-all hover:scale-[1.02] active:scale-[0.98] shrink-0 group cursor-pointer"
          >
            <span>Next: {nextPage.title}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Section Cards Grid */}
        <div
          className={`grid grid-cols-1 ${
            pages.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'
          } gap-5`}
        >
          {pages.map((item) => {
            const isCurrent = item.path === location.pathname;
            const isNext = item.path === nextPage.path;
            const Icon = item.icon;

            return (
              <div
                key={item.path}
                className={`relative rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-white border-2 border-[#B87908]/60 shadow-md'
                    : isNext
                    ? 'bg-white border-2 border-[#B87908] shadow-lg shadow-[#B87908]/10 hover:-translate-y-1'
                    : 'bg-white/80 border border-[#EAD9B7] hover:bg-white hover:border-[#B87908]/40 hover:-translate-y-0.5 shadow-xs'
                }`}
              >
                {/* Top Badge Row */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#65594B]/70">
                      Step {item.step} of {pages.length}
                    </span>

                    {isCurrent ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FAF4E8] text-[#B87908] text-[10px] font-black border border-[#EAD9B7] uppercase tracking-wider">
                        <CheckCircle2 className="w-3 h-3 text-[#B87908]" />
                        You Are Here
                      </span>
                    ) : isNext ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#B87908] text-white text-[10px] font-black uppercase tracking-wider shadow-xs">
                        <Sparkles className="w-3 h-3" />
                        Next Page
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold text-[#65594B]/60 uppercase tracking-wider">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${
                        isCurrent || isNext
                          ? 'bg-[#FAF4E8] text-[#B87908] border-[#EAD9B7]'
                          : 'bg-[#FAF4E8]/60 text-[#65594B] border-[#EAD9B7]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-[#24190F] tracking-tight leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#65594B] mt-1 leading-relaxed line-clamp-2">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-4 mt-2 border-t border-[#EAD9B7]/50">
                  {isCurrent ? (
                    <span className="text-xs font-bold text-[#65594B]/70 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#B87908]" />
                      Currently Viewing
                    </span>
                  ) : (
                    <Link
                      to={item.path}
                      className={`inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider transition-all group ${
                        isNext ? 'text-[#B87908] hover:text-[#966205]' : 'text-[#24190F] hover:text-[#B87908]'
                      }`}
                    >
                      <span>{isNext ? 'Go to Next Page' : 'View Page'}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
