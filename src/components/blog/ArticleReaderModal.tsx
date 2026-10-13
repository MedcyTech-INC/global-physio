import React, { useEffect } from 'react';
import {
  X,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  Award,
  Share2,
  ArrowLeft
} from 'lucide-react';
import type { BlogArticle } from '../../data/blogData';

interface ArticleReaderModalProps {
  article: BlogArticle | null;
  isOpen: boolean;
  onClose: () => void;
  onBookClick: () => void;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({
  article,
  isOpen,
  onClose,
  onBookClick
}) => {
  // ESC key listener & body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !article) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.description,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-md flex justify-center items-start p-3 sm:p-5 lg:p-8 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#FFFDF8] rounded-3xl overflow-hidden border border-[#EAD9B7] shadow-2xl text-[#24190F] my-4 sm:my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── 1. STICKY TOP NAVIGATION BAR ── */}
        <div className="sticky top-0 z-30 bg-[#FFFDF8]/95 backdrop-blur-md border-b border-[#EAD9B7]/80 px-4 sm:px-6 py-3.5 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#65594B] hover:text-[#B87908] transition-colors py-1.5 px-3 rounded-xl hover:bg-[#FAF4E8] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#B87908]" />
            <span>Back to Guides</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              title="Share Guide"
              className="w-9 h-9 rounded-full bg-[#FAF4E8] hover:bg-[#F8EAC9] text-[#65594B] hover:text-[#B87908] border border-[#EAD9B7] flex items-center justify-center transition-all cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              title="Close Guide"
              className="w-9 h-9 rounded-full bg-[#FAF4E8] hover:bg-[#B87908] text-[#65594B] hover:text-white border border-[#EAD9B7] flex items-center justify-center transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ── 2. FEATURED IMAGE BANNER ── */}
        <div className="relative w-full h-56 sm:h-72 lg:h-84 overflow-hidden bg-[#24190F]">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#24190F]/90 via-[#24190F]/40 to-transparent" />
          
          {/* Category & Topic Badges on Image */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-8 z-10 flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#B87908] text-white font-extrabold text-xs uppercase tracking-wider shadow-sm">
              {article.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#24190F] font-bold text-xs uppercase tracking-wider shadow-sm">
              {article.topic}
            </span>
          </div>
        </div>

        {/* ── 3. MAIN EDITORIAL CONTENT ── */}
        <div className="p-6 sm:p-8 lg:p-12 space-y-8">
          
          {/* Header Metadata & Title */}
          <div>
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-[#65594B] mb-3">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#B87908]" />
                {article.date}
              </span>
              <span>&bull;</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#B87908]" />
                {article.readingTime}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black text-[#24190F] tracking-tight leading-[1.2]">
              {article.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[#65594B] leading-relaxed">
              {article.description}
            </p>
          </div>

          {/* Author / Clinical Reviewer Badge */}
          <div className="p-4 rounded-2xl bg-[#FAF4E8] border border-[#EAD9B7] flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#B87908] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                KB
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-[#24190F]">
                    {article.author || 'Dr. K. Bhavendra PT'}
                  </span>
                  <Award className="w-3.5 h-3.5 text-[#B87908]" />
                </div>
                <span className="text-xs text-[#65594B]">
                  {article.authorRole || 'Lead Physiotherapist • MPT (Sports Medicine)'}
                </span>
              </div>
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#B87908] bg-white px-3 py-1 rounded-full border border-[#EAD9B7]">
              Clinically Reviewed
            </span>
          </div>

          {/* Clinical Tip Box */}
          {article.clinicalTip && (
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#FAF4E8] to-[#FFFDF8] border-l-4 border-[#B87908] border-t border-r border-b border-[#EAD9B7] shadow-xs">
              <div className="flex items-center gap-2 text-xs font-black text-[#B87908] uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Dr. Bhavendra's Clinical Pearl</span>
              </div>
              <p className="text-sm sm:text-base text-[#24190F] font-medium leading-relaxed italic">
                "{article.clinicalTip}"
              </p>
            </div>
          )}

          {/* Body Sections */}
          <div className="space-y-8 pt-2">
            {article.sections && article.sections.map((sec, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#24190F] tracking-tight">
                  {sec.heading}
                </h2>

                <div className="space-y-3">
                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-sm sm:text-base text-[#4A3E31] leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>

                {/* Key Points / Bullet Takeaways */}
                {sec.keyPoints && sec.keyPoints.length > 0 && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#EAD9B7] space-y-2.5 shadow-2xs">
                    <span className="text-xs font-bold text-[#B87908] uppercase tracking-wider block mb-1">
                      Key Clinical Takeaways:
                    </span>
                    {sec.keyPoints.map((pt, ptIdx) => (
                      <div key={ptIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#24190F]">
                        <CheckCircle2 className="w-4 h-4 text-[#B87908] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Frequently Asked Questions */}
          {article.faqs && article.faqs.length > 0 && (
            <div className="pt-6 border-t border-[#EAD9B7] space-y-4">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#B87908]" />
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#24190F]">
                  Frequently Asked Questions
                </h3>
              </div>

              <div className="space-y-3">
                {article.faqs.map((faq, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-4 sm:p-5 rounded-2xl bg-white border border-[#EAD9B7] space-y-2 shadow-2xs"
                  >
                    <h4 className="text-sm sm:text-base font-bold text-[#24190F]">
                      {faq.question}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#65594B] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Consultation Call-to-Action Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#FAF4E8] via-[#FFFDF8] to-[#FAF4E8] border border-[#EAD9B7] shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center sm:text-left">
              <span className="text-xs font-black uppercase tracking-wider text-[#B87908]">
                Personalized Care In Anantapur
              </span>
              <h4 className="text-lg sm:text-xl font-serif font-bold text-[#24190F]">
                Experiencing Similar Symptoms?
              </h4>
              <p className="text-xs sm:text-sm text-[#65594B] max-w-md">
                Get an objective, 1:1 clinical movement evaluation and tailored recovery plan with Dr. K. Bhavendra PT.
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                onBookClick();
              }}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#B87908] to-[#D99B24] hover:from-[#966205] hover:to-[#C48A1D] text-white font-bold text-sm shadow-lg shadow-[#B87908]/20 hover:scale-[1.02] transition-all flex items-center gap-2 cursor-pointer shrink-0"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
