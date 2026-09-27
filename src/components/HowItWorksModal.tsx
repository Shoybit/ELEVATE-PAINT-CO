import React, { useState } from 'react';

interface HowItWorksModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: () => void;
}

export const HowItWorksModal: React.FC<HowItWorksModalProps> = ({
  isOpen,
  onClose,
  onRequestQuote
}) => {
  const [activeStep, setActiveStep] = useState(0);

  if (!isOpen) return null;

  const steps = [
    {
      num: '01',
      title: 'Free In-Home Scope & Laser Measurement',
      desc: 'Our lead estimator arrives with digital moisture meters and laser rangefinders. We inspect drywall condition, calculate exact wall area, discuss color aspirations, and present a guaranteed fixed-price estimate with zero hidden fees.',
      highlight: 'Guaranteed Quote within 24 Hours',
      icon: 'straighten'
    },
    {
      num: '02',
      title: 'Flawless Masking & Zero-Dust Surface Prep',
      desc: '80% of paint longevity is preparation. We protect all flooring with heavy-duty neoprene tarps, seal furnishings with static-free plastic, caulk trim seams, patch minor nail holes, and dustlessly sand every inch.',
      highlight: 'Zero Dust & Spill Protection Protocol',
      icon: 'shield'
    },
    {
      num: '03',
      title: 'Precision Dual-Coat Application',
      desc: 'Using high-efficiency low-VOC paints from Benjamin Moore and Sherwin-Williams, our certified journeyman painters apply two full saturated coats with precision cut-in edges and uniform roller saturation.',
      highlight: 'Sherwin-Williams & Benjamin Moore Premium',
      icon: 'format_paint'
    },
    {
      num: '04',
      title: 'Detailed Walkthrough & 5-Year Warranty',
      desc: 'We inspect every corner under high-output inspection lamps with you. We do not pack our tools until you are 100% delighted, and we provide touch-up jars and a signed 5-year workmanship certificate.',
      highlight: '100% Satisfaction or We Recoat Free',
      icon: 'verified'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b1c30]/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-surface-container-lowest rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors border-none cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/20 text-secondary font-bold text-[12px] uppercase tracking-wider mb-3">
          <span className="material-symbols-outlined text-sm">play_circle</span>
          <span>Craftsmanship Protocol</span>
        </div>

        <h2 className="text-[26px] font-extrabold text-on-surface mb-2 tracking-tight">
          How It Works: Our 4-Step System
        </h2>
        <p className="text-[14px] text-on-surface-variant mb-6">
          See how our trade discipline transforms your residential or commercial space with zero mess and predictable timelines.
        </p>

        {/* Step Selector Tabs */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          {steps.map((step, idx) => (
            <button
              key={step.num}
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-2xl flex flex-col items-center gap-1 transition-all border-none cursor-pointer ${
                activeStep === idx
                  ? 'bg-secondary-container text-on-secondary-container shadow-md font-bold'
                  : 'bg-surface-container-low text-on-surface hover:bg-surface-container'
              }`}
            >
              <span className="text-[16px] font-extrabold">{step.num}</span>
              <span className="text-[11px] truncate max-w-full">
                {idx === 0 ? 'Scope' : idx === 1 ? 'Prep' : idx === 2 ? 'Paint' : 'Warranty'}
              </span>
            </button>
          ))}
        </div>

        {/* Active Step Content */}
        <div className="bg-surface-container-low p-6 rounded-2xl mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container shadow-sm shrink-0">
              <span className="material-symbols-outlined text-2xl">
                {steps[activeStep].icon}
              </span>
            </div>
            <div>
              <span className="text-[12px] font-bold text-secondary uppercase tracking-widest block">
                Step {steps[activeStep].num} of 04
              </span>
              <h3 className="text-[18px] font-extrabold text-on-surface">
                {steps[activeStep].title}
              </h3>
            </div>
          </div>

          <p className="text-[14px] text-on-surface-variant leading-relaxed mb-4">
            {steps[activeStep].desc}
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container text-secondary font-bold text-[12px]">
            <span className="material-symbols-outlined text-sm">verified_user</span>
            <span>{steps[activeStep].highlight}</span>
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => {
              onClose();
              onRequestQuote();
            }}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-secondary-container text-on-secondary-container font-bold text-[14px] py-3.5 px-6 rounded-full hover:bg-secondary-fixed transition-all shadow-md cursor-pointer border-none"
          >
            <span>Start Step 1: Free Estimate</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </button>
          <button
            onClick={onClose}
            className="px-6 py-3.5 rounded-full bg-surface-container text-on-surface font-semibold text-[14px] hover:bg-surface-container-high transition-colors cursor-pointer border-none"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
