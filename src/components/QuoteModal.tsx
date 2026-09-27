import React, { useState, useEffect } from 'react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialScope?: string;
  initialEstimate?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialScope,
  initialEstimate
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState(initialScope || 'Interior');
  const [propertyType, setPropertyType] = useState('Single Family Home');
  const [budget, setBudget] = useState('$1,500 - $3,500');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialScope) {
      setProjectType(initialScope);
    }
    if (initialEstimate) {
      setMessage(`Locking in estimate: ${initialEstimate}.`);
    }
  }, [initialScope, initialEstimate]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b1c30]/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-surface-container-lowest rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors border-none cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/20 text-secondary font-bold text-[12px] uppercase tracking-wider mb-3 inline-flex">
              <span className="material-symbols-outlined text-sm">schedule</span>
              <span>24-Hour Guaranteed Turnaround</span>
            </div>
            <h2 className="text-[26px] font-extrabold text-on-surface mb-2 tracking-tight">
              Request Your Free Project Quote
            </h2>
            <p className="text-[14px] text-on-surface-variant mb-6 leading-relaxed">
              Complete this quick form. A master contractor will evaluate your specs and provide an itemized fixed-price proposal.
            </p>

            {initialEstimate && (
              <div className="mb-5 p-3.5 bg-secondary-fixed/30 rounded-xl flex items-center justify-between">
                <span className="text-[13px] font-bold text-on-secondary-fixed">Selected Estimate Range:</span>
                <span className="text-[15px] font-extrabold text-secondary">{initialEstimate}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-bold text-on-surface mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Sarah Jenkins"
                    className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface text-[14px] border border-outline-variant/30 focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary-container outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-on-surface mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sarah@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface text-[14px] border border-outline-variant/30 focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary-container outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-bold text-on-surface mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface text-[14px] border border-outline-variant/30 focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary-container outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-[13px] font-bold text-on-surface mb-1.5">
                  Project Scope
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['Interior', 'Exterior', 'Commercial', 'Cabinets'].map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setProjectType(type)}
                      className={`py-2 px-3 rounded-xl text-[13px] font-bold transition-all border-none cursor-pointer ${
                        projectType === type
                          ? 'bg-secondary-container text-on-secondary-container shadow-sm'
                          : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-bold text-on-surface mb-1.5">
                    Property Type
                  </label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface text-[14px] border border-outline-variant/30 focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary-container outline-none transition-all"
                  >
                    <option value="Single Family Home">Single Family Home</option>
                    <option value="Condo / Apartment">Condo / Apartment</option>
                    <option value="Commercial Office">Commercial Office</option>
                    <option value="Retail / Restaurant">Retail / Restaurant</option>
                    <option value="HOA / Multi-Unit">HOA / Multi-Unit</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-on-surface mb-1.5">
                    Estimated Budget
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface text-[14px] border border-outline-variant/30 focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary-container outline-none transition-all"
                  >
                    <option value="$500 - $1,500">$500 – $1,500 (Room / Accent)</option>
                    <option value="$1,500 - $3,500">$1,500 – $3,500 (Multi-Room)</option>
                    <option value="$3,500 - $7,000">$3,500 – $7,000 (Full House)</option>
                    <option value="$7,000+">$7,000+ (Commercial / Luxury)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-bold text-on-surface mb-1.5">
                  Project Notes &amp; Preferred Start Date
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about room sizes, ceiling heights, or preferred colors..."
                  className="w-full p-4 rounded-xl bg-surface-container-low text-on-surface text-[14px] border border-outline-variant/30 focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary-container outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-8 rounded-full bg-secondary-container text-on-secondary-container font-bold text-[15px] flex items-center justify-center gap-2 hover:bg-secondary-fixed transition-all shadow-md hover:shadow-lg cursor-pointer border-none"
              >
                {isSubmitting ? (
                  <>
                    <span className="material-symbols-outlined text-lg animate-spin">progress_activity</span>
                    <span>Submitting Request...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Quote Request</span>
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </>
                )}
              </button>

              <p className="text-[12px] text-on-surface-variant text-center flex items-center justify-center gap-1.5 m-0 pt-1">
                <span className="material-symbols-outlined text-sm text-secondary">lock</span>
                <span>Your information is encrypted &amp; never shared. $2M Bonded.</span>
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-secondary-container/20 text-secondary flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-3xl font-bold">check_circle</span>
            </div>
            <h3 className="text-[24px] font-extrabold text-on-surface mb-2">
              Quote Request Received!
            </h3>
            <p className="text-[15px] text-on-surface-variant max-w-md mx-auto mb-6 leading-relaxed">
              Thank you, <span className="font-bold text-on-surface">{fullName || 'Valued Client'}</span>. We have dispatched your project details to our chief estimator. You will receive an itemized proposal via email within 24 hours.
            </p>
            <div className="p-4 bg-surface-container-low rounded-2xl max-w-sm mx-auto text-left mb-6 text-[13px] space-y-1">
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Scope:</span>
                <span className="font-bold text-on-surface">{projectType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Phone:</span>
                <span className="font-bold text-on-surface">{phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Assigned Estimator:</span>
                <span className="font-bold text-secondary">Marcus Vance</span>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="px-8 py-3.5 rounded-full bg-primary-container text-surface font-bold text-[14px] hover:bg-inverse-surface transition-colors cursor-pointer border-none"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
