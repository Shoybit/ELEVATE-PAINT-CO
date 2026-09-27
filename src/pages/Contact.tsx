import React, { useState } from "react";
import { IMAGES } from "../data/content.ts";
import { PageId } from "../components/Navbar.tsx";

interface ContactProps {
  onNavigate: (page: PageId) => void;
}

export const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Interior Painting",
    propertyType: "Single Family Home",
    timeline: "Within 2 Weeks",
    contactMethod: "Phone",
    message: "",
  });

  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Service Area Zip Checker state
  const [zipInput, setZipInput] = useState("");
  const [zipResult, setZipResult] = useState<{
    available: boolean;
    text: string;
  } | null>(null);

  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!zipInput.trim()) return;
    const cleanZip = zipInput.trim();
    // Check general 5-digit zip
    if (/^\d{5}$/.test(cleanZip)) {
      setZipResult({
        available: true,
        text: `Great news! ZIP ${cleanZip} is in our primary same-week service zone. Our local crew can schedule an in-person walkthrough within 24-48 hours.`,
      });
    } else {
      setZipResult({
        available: false,
        text: "Please enter a valid 5-digit ZIP code.",
      });
    }
  };

  const handleSimulatedUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const names = Array.from(e.target.files).map((f) => f.name);
      setUploadedFiles((prev) => [...prev, ...names]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="bg-[#f8f9ff] min-h-screen text-[#131c2b] pt-6 pb-20 overflow-x-hidden">
      {/* Header Banner */}
      <section className="w-full max-w-full mx-auto px-4 sm:px-6 lg:max-w-10/12 lg:px-8 pt-24 sm:pt-28 lg:pt-24 pb-10 sm:pb-16 lg:pb-24 text-center">
<h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#131c2b] mb-4 font-headline leading-[1.15] sm:leading-[1.1]">
  Let's Bring Your Vision <br />
  <span className="relative inline-block text-[#fea619]">
    To Life.
  </span>
</h1>
        <p className="text-base sm:text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
          Speak directly with our project leads. We provide upfront fixed-price
          bids, transparent material schedules, and reliable start dates.
        </p>
      </section>

      <section className="w-full max-w-full mx-auto px-4 sm:px-6 lg:max-w-10/12 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Details & Process */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Contact Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-4 pb-6 border-b border-slate-100">
                <img
                  src={IMAGES.contactPainterAvatar}
                  alt="Lead Estimator"
                  className="w-16 h-16 rounded-2xl object-cover ring-2 ring-[#fe7624]"
                />
                <div>
                  <h3 className="text-lg font-bold font-headline text-[#131c2b]">
                    Marcus Vance
                  </h3>
                  <p className="text-xs font-semibold text-[#fea619]">
                    Master Craftsman & Project Lead
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full mt-1 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Available for consultations today
                  </span>
                </div>
              </div>

              <div className="space-y-4 pt-6 text-sm">
                <a
                  href="tel:5553827468"
                  className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-slate-50 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#fff0e6] text-[#fea619] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold">
                      Direct Call or SMS
                    </div>
                    <div className="font-bold text-[#131c2b] text-base group-hover:text-[#fea619] transition-colors">
                      (555) 382-7468
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:quotes@paintercontractors.com"
                  className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-slate-50 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#eef3ff] text-[#131c2b] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold">
                      Email Proposals
                    </div>
                    <div className="font-bold text-[#131c2b] text-sm group-hover:text-[#fea619] transition-colors">
                      quotes@paintercontractors.com
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 p-3 rounded-2xl">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold">
                      Studio & Warehouse
                    </div>
                    <div className="text-xs font-medium text-slate-700">
                      742 Evergreen Terrace, Suite 400
                      <br />
                      Los Angeles, CA 90028
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-2xl">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold">
                      Operating Hours
                    </div>
                    <div className="text-xs font-medium text-slate-700">
                      Monday – Saturday: 7:00 AM – 7:00 PM
                      <br />
                      Emergency & Commercial Night Shifts Available
                    </div>
                  </div>
                </div>
              </div>

              {/* License Strip */}
              <div className="mt-6 pt-5 border-t border-slate-100 bg-[#f8f9ff] -mx-6 -mb-6 p-6 rounded-b-3xl text-[11px] text-slate-500">
                <div className="font-bold text-[#131c2b] mb-1">
                  Credentials & Assurance
                </div>
                <div>CA Contractor Lic. #1084920 · EPA Lead-Safe Certified</div>
                <div>
                  Bonded & Insured: $2,000,000 General Commercial Liability
                </div>
              </div>
            </div>

            {/* Service Area Zip Checker */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm">
              <h4 className="text-sm font-bold font-headline text-[#131c2b] mb-1">
                Check Your Service Availability
              </h4>
              <p className="text-xs text-slate-500 mb-4">
                Enter your 5-digit postal code to verify same-week crew
                availability.
              </p>
              <form onSubmit={handleZipCheck} className="flex gap-2">
                <input
                  type="text"
                  maxLength={5}
                  placeholder="e.g. 90210"
                  value={zipInput}
                  onChange={(e) => setZipInput(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#fe7624]"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-[#131c2b] text-white text-xs font-bold rounded-xl hover:bg-[#1e2e44] transition-colors shrink-0 cursor-pointer"
                >
                  Verify
                </button>
              </form>
              {zipResult && (
                <div
                  className={`mt-3 p-3 rounded-xl text-xs ${
                    zipResult.available
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  {zipResult.text}
                </div>
              )}
            </div>

            {/* What Happens Next Stepper */}
            <div className="bg-gradient-to-br from-[#131c2b] to-[#1e2e44] text-white rounded-3xl p-6 sm:p-7 shadow-lg">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#fea619] mb-4">
                What Happens After You Submit:
              </h4>
              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fe7624] text-white font-bold flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div>
                    <div className="font-bold text-white">
                      2-Hour Initial Review
                    </div>
                    <p className="text-slate-300">
                      Our lead estimator reviews your room count, surface
                      photos, and requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 text-white font-bold flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div>
                    <div className="font-bold text-white">
                      In-Home or Digital Walkthrough
                    </div>
                    <p className="text-slate-300">
                      We inspect drywall texture, lighting, and laser-measure
                      exact square footage.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 text-white font-bold flex items-center justify-center shrink-0">
                    3
                  </div>
                  <div>
                    <div className="font-bold text-white">
                      Fixed-Price Written Contract
                    </div>
                    <p className="text-slate-300">
                      A transparent quote itemizing paints, primers, dates, and
                      warranty.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-12 sm:py-16">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold font-headline text-[#131c2b] mb-2">
                  Request Received!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mb-8">
                  Thank you,{" "}
                  <span className="font-bold text-[#131c2b]">
                    {formData.name}
                  </span>
                  . Marcus or our project coordinator will contact you via{" "}
                  {formData.contactMethod.toLowerCase()} within 2 hours.
                </p>
                <div className="bg-slate-50 rounded-2xl p-4 max-w-sm mx-auto text-xs text-left space-y-2 border border-slate-200 mb-8">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Project Type:</span>
                    <span className="font-semibold text-slate-800">
                      {formData.projectType}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Timeline:</span>
                    <span className="font-semibold text-slate-800">
                      {formData.timeline}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Confirmation Sent:</span>
                    <span className="font-semibold text-[#fea619]">
                      {formData.email}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs font-bold text-[#fea619] hover:underline"
                >
                  ← Submit another inquiry or modify details
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold font-headline text-[#131c2b] mb-1">
                    Request a Guaranteed Proposal
                  </h3>
                  <p className="text-xs text-slate-500">
                    Fill out the form below. We never share your data or use
                    aggressive follow-up tactics.
                  </p>
                </div>

                {/* Scope selector pills */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    Project Category
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      "Interior Painting",
                      "Exterior Facade",
                      "Commercial",
                      "Cabinet Refinish",
                    ].map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, projectType: cat })
                        }
                        className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all text-center ${
                          formData.projectType === cat
                            ? "bg-[#131c2b] text-white shadow-sm"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Robert Smith"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs text-[#131c2b] focus:outline-none focus:ring-2 focus:ring-[#fe7624]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs text-[#131c2b] focus:outline-none focus:ring-2 focus:ring-[#fe7624]"
                    />
                  </div>
                </div>

                {/* Email & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="robert@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs text-[#131c2b] focus:outline-none focus:ring-2 focus:ring-[#fe7624]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Desired Kickoff Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) =>
                        setFormData({ ...formData, timeline: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs text-[#131c2b] focus:outline-none focus:ring-2 focus:ring-[#fe7624] bg-white"
                    >
                      <option>Immediately (Urgent)</option>
                      <option>Within 2 Weeks</option>
                      <option>Within a Month</option>
                      <option>Just Planning / Gathering Estimates</option>
                    </select>
                  </div>
                </div>

                {/* Message details */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Project Scope & Wall Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about the space (e.g. 3 bedrooms + hallways, 10ft ceiling height, need minor hole repairs on living room wall)..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs text-[#131c2b] focus:outline-none focus:ring-2 focus:ring-[#fe7624]"
                  />
                </div>

                {/* Optional Photo Attachment */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Attach Room or Facade Photos (Optional)
                  </label>
                  <div className="border-2 border-dashed border-slate-200 hover:border-[#fe7624] rounded-2xl p-4 text-center cursor-pointer relative bg-slate-50/50 transition-colors">
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleSimulatedUpload}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                    <div className="flex flex-col items-center justify-center pointer-events-none">
                      <svg
                        className="w-6 h-6 text-slate-400 mb-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-xs font-semibold text-slate-600">
                        Drag photos here or click to browse
                      </span>
                      <span className="text-[10px] text-slate-400">
                        PNG, JPG, HEIC up to 25MB
                      </span>
                    </div>
                  </div>

                  {uploadedFiles.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {uploadedFiles.map((file, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-lg text-xs font-medium border border-emerald-200"
                        >
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {file}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    Preferred Communication
                  </label>
                  <div className="flex gap-4">
                    {["Phone", "Text Message", "Email"].map((method) => (
                      <label
                        key={method}
                        className="flex items-center gap-2 cursor-pointer text-xs text-slate-700"
                      >
                        <input
                          type="radio"
                          name="contactMethod"
                          checked={formData.contactMethod === method}
                          onChange={() =>
                            setFormData({ ...formData, contactMethod: method })
                          }
                          className="text-[#fea619] focus:ring-[#fe7624]"
                        />
                        <span>{method}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-3 bg-secondary-container text-on-secondary-container text-[14px] font-bold px-8 py-4 rounded-full shadow-[0_10px_25px_-5px_rgba(11,25,44,0.12)] hover:bg-secondary-fixed hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer border-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Transmitting Proposal Request...</span>
                    </>
                  ) : (
                    <span>Submit For Guaranteed Written Quote</span>
                  )}
                </button>
                <p className="text-[11px] text-center text-slate-400">
                  By submitting, you agree to our respectful communication
                  policy. No spam or 3rd party brokers.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};