import React, { useState } from 'react';
import {
  X,
  Calendar,
  Clock,
  Phone,
  User,
  CheckCircle2,
  FileText,
  Activity,
  MapPin,
  Sparkles,
  MessageCircle
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    condition: 'General Physical Therapy Consultation',
    date: new Date().toISOString().split('T')[0],
    timeSlot: 'Morning (09:00 AM – 01:00 PM)',
    notes: '',
  });
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  if (!isOpen) return null;

  // Official clinic recipient WhatsApp number for Dr. Bhavendra: +91 733 088 5190
  const TARGET_WHATSAPP_NUMBER = '917330885190';

  const conditionOptions = [
    'General Physical Therapy Consultation',
    'Back & Neck Pain / Spine Care',
    'Knee Joint & Arthritis Pain',
    'Sports Injury & Conditioning (Hamstring, ACL, Tendon)',
    'Shoulder & Rotator Cuff Care',
    'Post-Surgery Orthopaedic Rehabilitation',
    'Neurological Recovery (Stroke, Parkinson’s, Bell’s Palsy)',
    'Pediatric Movement & Milestone Support',
    'Senior Mobility & Fall Prevention',
    'Other Mobility Concern'
  ];

  const timeSlots = [
    'Morning (09:00 AM – 01:00 PM)',
    'Afternoon (02:00 PM – 05:00 PM)',
    'Evening (05:00 PM – 09:00 PM)'
  ];

  const generateWhatsAppUrl = () => {
    const formattedBookingTime = new Date().toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });

    const formattedPreferredDate = formData.date
      ? new Date(formData.date + 'T00:00:00').toLocaleDateString('en-IN', {
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        })
      : formData.date;

    const notesSection = formData.notes.trim()
      ? `\n*Notes / Symptoms:* ${formData.notes.trim()}`
      : '';

    const text =
`*Global Physiotherapy Clinic, Anantapur*
----------------------------------------
*Patient Name:* ${formData.name.trim()}
*Contact Number:* ${formData.phone.trim()}
*Concern/Condition:* ${formData.condition}
*Preferred Date:* ${formattedPreferredDate}
*Preferred Window:* ${formData.timeSlot}${notesSection}

*Booking Time:* ${formattedBookingTime}
----------------------------------------
_Please confirm my consultation slot. Thank you!_`;

    return `https://wa.me/${TARGET_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; phone?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your contact phone number';
    } else if (formData.phone.trim().replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const url = generateWhatsAppUrl();
    setWhatsappLink(url);
    setIsSubmitted(true);

    // Automatically open WhatsApp with details directed to doctor's number
    try {
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch {
      // Fallback handled by the on-screen WhatsApp button
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setWhatsappLink('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#24190F]/60 backdrop-blur-md transition-opacity overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#FFFDF8] border border-[#EAD9B7] rounded-3xl p-5 sm:p-8 shadow-2xl overflow-hidden my-auto animate-fadeIn max-h-[92vh] flex flex-col justify-between">
        
        {/* Subtle Decorative Ambient Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F8EAC9]/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FAF4E8]/60 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="relative z-10 flex items-start justify-between pb-4 border-b border-[#EAD9B7]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF4E8] border border-[#EAD9B7] text-[#B87908] text-[11px] font-extrabold uppercase tracking-wider mb-1">
              <Sparkles className="w-3 h-3 text-[#B87908]" />
              <span>DIRECT CLINIC APPOINTMENT</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#24190F] tracking-tight">
              {isSubmitted ? 'Appointment Confirmed' : 'Book an Appointment'}
            </h3>
            <p className="text-xs text-[#65594B] mt-0.5">
              {CLINIC_INFO.doctor} • {CLINIC_INFO.name}, Anantapur
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-full bg-[#FAF4E8] text-[#65594B] hover:text-[#24190F] hover:bg-[#F8EAC9] transition-colors cursor-pointer shrink-0"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="relative z-10 py-3 overflow-y-auto flex-1">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-[#65594B] leading-relaxed">
                Please fill out your details below. Our clinic desk will confirm your scheduled slot immediately.
              </p>

              {/* Full Name & Phone Number Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#24190F] mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#B87908]" />
                    <span>Full Name <span className="text-red-500">*</span></span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    className={`w-full p-3 rounded-xl bg-white border text-[#24190F] placeholder-[#65594B]/50 text-xs sm:text-sm focus:outline-none transition-all shadow-xs ${
                      errors.name ? 'border-red-400 focus:border-red-500' : 'border-[#EAD9B7] focus:border-[#B87908]'
                    }`}
                  />
                  {errors.name && <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#24190F] mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#B87908]" />
                    <span>Phone Number <span className="text-red-500">*</span></span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98765 43210"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: undefined });
                    }}
                    className={`w-full p-3 rounded-xl bg-white border text-[#24190F] placeholder-[#65594B]/50 text-xs sm:text-sm focus:outline-none transition-all shadow-xs ${
                      errors.phone ? 'border-red-400 focus:border-red-500' : 'border-[#EAD9B7] focus:border-[#B87908]'
                    }`}
                  />
                  {errors.phone && <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.phone}</p>}
                </div>
              </div>

              {/* Clinical Condition / Concern Dropdown */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#24190F] mb-1.5 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#B87908]" />
                  <span>Clinical Concern or Condition</span>
                </label>
                <select
                  value={formData.condition}
                  onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                  className="w-full p-3 rounded-xl bg-white border border-[#EAD9B7] text-[#24190F] text-xs sm:text-sm focus:outline-none focus:border-[#B87908] transition-all shadow-xs cursor-pointer"
                >
                  {conditionOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Date & Time Slot Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#24190F] mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#B87908]" />
                    <span>Preferred Date</span>
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full p-3 rounded-xl bg-white border border-[#EAD9B7] text-[#24190F] text-xs sm:text-sm focus:outline-none focus:border-[#B87908] transition-all shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#24190F] mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#B87908]" />
                    <span>Preferred Window</span>
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full p-3 rounded-xl bg-white border border-[#EAD9B7] text-[#24190F] text-xs sm:text-sm focus:outline-none focus:border-[#B87908] transition-all shadow-xs cursor-pointer"
                  >
                    {timeSlots.map((ts) => (
                      <option key={ts} value={ts}>
                        {ts}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Notes / Symptoms (Optional) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#24190F] mb-1.5 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#B87908]" />
                  <span>Brief Notes or Symptoms (Optional)</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Pain for 2 weeks when walking, doctor recommendation..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-3 rounded-xl bg-white border border-[#EAD9B7] text-[#24190F] placeholder-[#65594B]/50 text-xs sm:text-sm focus:outline-none focus:border-[#B87908] transition-all shadow-xs resize-none"
                />
              </div>

              {/* Direct Call Quick Bar */}
              <div className="p-3 rounded-2xl bg-[#FAF4E8] border border-[#EAD9B7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2 text-[#65594B]">
                  <Phone className="w-3.5 h-3.5 text-[#B87908] shrink-0" />
                  <span>Prefer to book over call?</span>
                </div>
                <a
                  href={`tel:${CLINIC_INFO.rawPhone}`}
                  className="font-bold text-[#B87908] hover:underline"
                >
                  Call Clinic: {CLINIC_INFO.phone}
                </a>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#B87908] to-[#D99B24] hover:opacity-95 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md shadow-[#B87908]/20 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>Confirm & Send via WhatsApp</span>
                </button>
                <p className="text-[11px] text-center text-[#65594B]/80 mt-2">
                  Details will be forwarded directly to Dr. Bhavendra (+91 733 088 5190)
                </p>
              </div>
            </form>
          ) : (
            /* Confirmation Success State */
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#FAF4E8] text-[#B87908] flex items-center justify-center mx-auto border border-[#EAD9B7] shadow-xs">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-xl font-black text-[#24190F]">Appointment Details Sent!</h4>
                <p className="text-[#65594B] text-xs sm:text-sm max-w-md mx-auto leading-relaxed mt-1">
                  Thank you, <strong className="text-[#B87908]">{formData.name}</strong>. Your appointment request has been forwarded directly to <strong className="text-[#24190F]">Dr. Bhavendra PT (+91 733 088 5190)</strong>.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF4E8] border border-[#EAD9B7] text-left text-xs space-y-2 max-w-md mx-auto text-[#65594B]">
                <p><strong className="text-[#24190F]">Patient:</strong> {formData.name}</p>
                <p><strong className="text-[#24190F]">Contact:</strong> {formData.phone}</p>
                <p><strong className="text-[#24190F]">Condition:</strong> {formData.condition}</p>
                <p><strong className="text-[#24190F]">Requested Slot:</strong> {formData.date} • {formData.timeSlot}</p>
                {formData.notes && <p><strong className="text-[#24190F]">Notes:</strong> {formData.notes}</p>}
                <p className="flex items-start gap-1.5 pt-2 text-[#65594B] border-t border-[#EAD9B7]">
                  <MapPin className="w-3.5 h-3.5 text-[#B87908] shrink-0 mt-0.5" />
                  <span>{CLINIC_INFO.address}</span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
                {whatsappLink && (
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#25D366]/20 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Open in WhatsApp</span>
                  </a>
                )}
                <a
                  href={`tel:${CLINIC_INFO.rawPhone}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#FAF4E8] hover:bg-[#F8EAC9] border border-[#EAD9B7] text-[#24190F] font-bold text-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B87908]" />
                  <span>Call Desk: {CLINIC_INFO.phone}</span>
                </a>
                <button
                  onClick={handleClose}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#B87908] hover:bg-[#966205] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
