import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Phone, Clock, ArrowRight, MessageSquare } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface ClinicSectionProps {
  onBookClick?: () => void;
}

export const ClinicSection: React.FC<ClinicSectionProps> = () => {
  const navigate = useNavigate();

  const handleGoToContact = () => {
    navigate('/contact');
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#FAF4E8] relative overflow-hidden font-sans border-t border-[#EAD9B7]">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F8EAC9]/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#FFFDF8]/80 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Main Interactive Contact Container Card */}
        <div 
          onClick={handleGoToContact}
          className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#EAD9B7] shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group relative overflow-hidden"
        >
          {/* Top Brand Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#B87908] via-[#D99B24] to-[#B87908]" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            
            {/* Left Column: Heading & Information */}
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF4E8] border border-[#EAD9B7] text-[#B87908] text-xs font-extrabold uppercase tracking-widest shadow-xs">
                <MessageSquare className="w-3.5 h-3.5 text-[#B87908]" />
                <span>CONTACT & CLINIC LOCATION</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#24190F] tracking-tight leading-[1.15] font-serif">
                Contact Global <br />
                <span className="bg-gradient-to-r from-[#B87908] via-[#D99B24] to-[#24190F] bg-clip-text text-transparent">
                  Physiotherapy Clinic
                </span>
              </h2>

              <p className="text-sm sm:text-base text-[#65594B] leading-relaxed">
                Have questions about treatments, doctor availability, or location? Click to visit our contact page for full details, inquiry form, and interactive map directions.
              </p>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleGoToContact();
                  }}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#B87908] to-[#D99B24] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md shadow-[#B87908]/20 group-hover:from-[#A06806] group-hover:to-[#C48A1D] transition-all cursor-pointer"
                >
                  <span>Go to Contact Page</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: 3 Clean Quick-Detail Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3.5 w-full lg:max-w-md">
              {/* Address Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF4E8] border border-[#EAD9B7] flex items-start gap-3.5 transition-all group-hover:bg-[#FFFDF8] group-hover:border-[#B87908]/40 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-white text-[#B87908] border border-[#EAD9B7] flex items-center justify-center shrink-0 shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#65594B]/70 block mb-0.5">
                    CLINIC ADDRESS
                  </span>
                  <p className="text-[#24190F] font-bold text-xs sm:text-sm leading-snug">
                    Beside Punjab National Bank, Housing Board Colony, Anantapur
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF4E8] border border-[#EAD9B7] flex items-start gap-3.5 transition-all group-hover:bg-[#FFFDF8] group-hover:border-[#B87908]/40 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-white text-[#D99B24] border border-[#EAD9B7] flex items-center justify-center shrink-0 shadow-xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#65594B]/70 block mb-0.5">
                    PHONE & APPOINTMENTS
                  </span>
                  <p className="text-[#24190F] font-bold text-xs sm:text-sm leading-snug">
                    {CLINIC_INFO.phone}
                  </p>
                </div>
              </div>

              {/* Operating Hours Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF4E8] border border-[#EAD9B7] flex items-start gap-3.5 transition-all group-hover:bg-[#FFFDF8] group-hover:border-[#B87908]/40 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-white text-[#B87908] border border-[#EAD9B7] flex items-center justify-center shrink-0 shadow-xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#65594B]/70 block mb-0.5">
                    CONSULTATION TIMINGS
                  </span>
                  <p className="text-[#24190F] font-bold text-xs sm:text-sm leading-snug">
                    {CLINIC_INFO.hours}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ClinicSection;
