import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, Compass } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import heroBg from '../assets/hero_bg.png';

interface ContactPageProps {
  onBookClick?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    CLINIC_INFO.address
  )}`;

  const googleMapsViewUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Global Physiotherapy Clinic ' + CLINIC_INFO.address
  )}`;

  return (
    <main className="w-full bg-[#FFFDF8] text-[#24190F] min-h-[85vh] font-sans">
      {/* 1. Clean Compact Header with Unified Background */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF8] via-[#FAF4E8] to-[#FFFDF8] border-b border-[#EAD9B7] text-center pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-12 lg:pb-14">
        {/* Subtle Background Image */}
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img
            src={heroBg}
            alt="Global Physiotherapy Contact & Location"
            className="absolute inset-0 w-full h-full object-cover object-center filter saturate-50 mix-blend-multiply select-none"
          />
        </div>

        {/* Ambient Light Gradients */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] bg-[#F8EAC9]/60 pointer-events-none z-10" />
        <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] rounded-full blur-[140px] bg-[#FAF4E8]/80 pointer-events-none z-10" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 relative z-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF4E8] border border-[#EAD9B7] text-[#B87908] font-bold text-xs tracking-[0.2em] uppercase mb-4 shadow-2xs">
            <Compass className="w-3.5 h-3.5 text-[#B87908]" />
            <span>VISIT OUR CLINIC • ANANTAPUR</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-serif font-black text-[#24190F] tracking-tight leading-[1.18] mb-3.5">
            Contact & Location
          </h1>

          <p className="text-sm sm:text-base lg:text-[17px] text-[#65594B] max-w-xl mx-auto leading-relaxed">
            Find our clinic easily in Anantapur or call our desk directly for inquiries.
          </p>
        </div>
      </section>

      {/* 2. Main Section: Address Details & Live Google Map */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* LEFT: Address & Contact Details (5 Cols) */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#EAD9B7] shadow-lg shadow-[#913d12]/5 flex flex-col justify-between space-y-6">
              
              <div className="space-y-6">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#B87908] block mb-1">
                    CLINICAL FACILITY
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#24190F] tracking-tight">
                    {CLINIC_INFO.name}
                  </h2>
                </div>

                {/* 1. Address Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF4E8] border border-[#EAD9B7] flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#B87908] border border-[#EAD9B7] flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#65594B]/70 block mb-0.5">
                      FULL ADDRESS
                    </span>
                    <p className="text-[#24190F] font-bold text-sm leading-snug">
                      {CLINIC_INFO.address}
                    </p>
                    <p className="text-xs text-[#65594B] mt-1.5">
                      Landmark: Beside Punjab National Bank. Easy road access and parking available.
                    </p>
                  </div>
                </div>

                {/* 2. Direct Phone Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF4E8] border border-[#EAD9B7] flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#D99B24] border border-[#EAD9B7] flex items-center justify-center shrink-0 shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#65594B]/70 block mb-0.5">
                      PHONE NUMBER
                    </span>
                    <a
                      href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                      className="text-[#24190F] hover:text-[#B87908] font-black text-base transition-colors leading-snug block"
                    >
                      {CLINIC_INFO.phone}
                    </a>
                    <p className="text-xs text-[#65594B] mt-1">
                      Direct line for patient queries and appointments.
                    </p>
                  </div>
                </div>

                {/* 3. Timings Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF4E8] border border-[#EAD9B7] flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#B87908] border border-[#EAD9B7] flex items-center justify-center shrink-0 shadow-xs">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#65594B]/70 block mb-0.5">
                      OPENING HOURS
                    </span>
                    <p className="text-[#24190F] font-bold text-sm leading-snug">
                      {CLINIC_INFO.hours}
                    </p>
                    <p className="text-xs text-[#65594B] mt-1">
                      Open all 7 days of the week.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#EAD9B7] flex flex-col sm:flex-row gap-3">
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#B87908] to-[#D99B24] hover:opacity-95 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md shadow-[#B87908]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={googleMapsViewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-6 rounded-xl bg-white border border-[#EAD9B7] hover:border-[#B87908] text-[#24190F] font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#B87908]" />
                </a>
              </div>

            </div>

            {/* RIGHT: Live Google Maps Embed (7 Cols) */}
            <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-[#EAD9B7] shadow-lg shadow-[#913d12]/5 min-h-[420px] sm:min-h-[500px] bg-[#FAF4E8] flex flex-col">
              <iframe
                title="Global Physiotherapy Clinic Location Map"
                src="https://maps.google.com/maps?q=Punjab%20National%20Bank%2C%20Housing%20Board%20Colony%2C%20Anantapur%2C%20Andhra%20Pradesh%20515001&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[420px] flex-1 border-0 filter brightness-[0.98] contrast-[1.02]"
                loading="lazy"
                allowFullScreen
              />

              {/* Bottom Quick Map Label */}
              <div className="bg-white/95 backdrop-blur-md p-4 sm:p-5 border-t border-[#EAD9B7] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF4E8] text-[#B87908] border border-[#EAD9B7] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#24190F] block">
                      Global Physiotherapy Clinic
                    </span>
                    <span className="text-[11px] text-[#65594B]">
                      Beside Punjab National Bank, Housing Board Colony, Anantapur
                    </span>
                  </div>
                </div>

                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#B87908] hover:text-[#966205] transition-colors shrink-0"
                >
                  <span>Directions</span>
                  <Navigation className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
