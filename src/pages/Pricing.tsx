import React, { useState } from "react";
import { IMAGES, FAQS_DATA } from "../data/content.ts";
import { PageId } from "../components/Navbar.tsx";

interface PricingProps {
  onNavigate: (page: PageId) => void;
  onRequestQuoteWithEstimate: (scope: string, estimate: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({
  onNavigate,
  onRequestQuoteWithEstimate,
}) => {
  // Live Cost Estimator State
  const [projectType, setProjectType] = useState<
    "interior" | "exterior" | "commercial"
  >("interior");
  const [roomCount, setRoomCount] = useState<number>(3);
  const [exteriorSqFt, setExteriorSqFt] = useState<number>(2400);
  const [prepLevel, setPrepLevel] = useState<"light" | "standard" | "heavy">(
    "standard",
  );
  const [paintTier, setPaintTier] = useState<"standard" | "premium" | "ultra">(
    "premium",
  );

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Compute live estimate
  const computeEstimate = () => {
    let base = 0;
    if (projectType === "interior") {
      // average $450 base per room
      base = roomCount * 450;
    } else if (projectType === "exterior") {
      // average $1.85 per sq ft
      base = exteriorSqFt * 1.85;
    } else {
      // commercial baseline
      base = 3200 + roomCount * 300;
    }

    // Prep multipliers
    const prepMultiplier =
      prepLevel === "light" ? 0.9 : prepLevel === "standard" ? 1.0 : 1.25;
    // Paint grade multipliers
    const paintMultiplier =
      paintTier === "standard" ? 0.95 : paintTier === "premium" ? 1.1 : 1.28;

    const finalAmount = Math.round(base * prepMultiplier * paintMultiplier);
    const low = Math.round(finalAmount * 0.92);
    const high = Math.round(finalAmount * 1.08);

    return {
      low: low.toLocaleString(),
      high: high.toLocaleString(),
      raw: finalAmount,
      summary: `${projectType === "interior" ? `${roomCount} Interior Rooms` : projectType === "exterior" ? `${exteriorSqFt} sq.ft Exterior` : "Commercial Facility"} (${prepLevel} prep, ${paintTier} paint)`,
    };
  };

  const calculated = computeEstimate();

  const handleLockEstimate = () => {
    onRequestQuoteWithEstimate(
      calculated.summary,
      `$${calculated.low} - $${calculated.high}`,
    );
  };

  return (
    <div className="bg-[#f8f9ff] min-h-screen text-[#131c2b] pt-6 pb-20 overflow-x-hidden">
      {/* Header Banner */}
      <section className="w-full max-w-full mx-auto px-4 sm:px-6 lg:max-w-10/12 lg:px-8 pt-24 sm:pt-28 lg:pt-24 pb-10 sm:pb-16 lg:pb-24 text-center">
<h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#131c2b] mb-5 font-headline leading-[1.15] sm:leading-[1.1]">
  Transparent Investment. <br />
  <span className="relative inline-block text-secondary-container">
    Zero Hidden Fees.
  </span>
</h1>
        <p className="text-base sm:text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
          Every estimate includes complete floor & furniture masking, Level 4
          drywall surface preparation, premium zero-VOC paints, and our
          certified 5-year workmanship guarantee.
        </p>
      </section>

      {/* 3 Core Packages */}
      <section className="w-full max-w-full mx-auto px-4 sm:px-6 lg:max-w-10/12 lg:px-8 mb-16 sm:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {/* Package 1: Essential Refresh */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                Essential Refresh
              </div>
              <h3 className="text-2xl font-bold font-headline text-[#131c2b] mb-2">
                Room Refresh
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Ideal for rentals, lease turnovers, or refreshing pre-existing
                wall colors.
              </p>
              <div className="mb-6">
                <div className="text-4xl font-extrabold text-[#131c2b]">
                  $299
                  <span className="text-base font-normal text-slate-500">
                    {" "}
                    / room
                  </span>
                </div>
                <span className="text-xs text-slate-400">
                  Standard 12x12 room · Walls only
                </span>
              </div>

              <div className="space-y-3 pt-6 border-t border-slate-100 mb-8">
                <div className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                  Included in package:
                </div>
                {[
                  "Minor nail hole patching & light spackle",
                  "2 coats of commercial-grade zero-VOC latex",
                  "Floor drop cloths & basic furniture draping",
                  "Standard 9ft ceiling height coverage",
                  "1-year workmanship warranty",
                  "Leftover touch-up container provided",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-slate-600"
                  >
                    <svg
                      className="w-4 h-4 text-[#fea619] shrink-0 mt-0.5"
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
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() =>
                onRequestQuoteWithEstimate(
                  "Room Refresh Package",
                  "$299 / room",
                )
              }
              className="w-full py-3.5 rounded-2xl bg-[#131c2b] hover:bg-[#1e2e44] text-white text-xs font-bold tracking-wide transition-all cursor-pointer"
            >
              Choose Room Refresh
            </button>
          </div>

          {/* Package 2: Full Transformation (Popular) */}
          <div className="bg-gradient-to-b from-white to-[#fffbf7] rounded-3xl p-6 sm:p-8 border-2 border-[#fea619] shadow-xl relative flex flex-col justify-between transform lg:-translate-y-2">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#fea619] text-white text-xs font-extrabold uppercase px-4 py-1 rounded-full shadow-md whitespace-nowrap">
              Most Popular Choice
            </div>
            <div>
              <div className="inline-block px-3 py-1 bg-[#fff0e6] text-[#fea619] rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                Signature Interior & Exterior
              </div>
              <h3 className="text-2xl font-bold font-headline text-[#131c2b] mb-2">
                Full Transformation
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Our complete craftsmanship overhaul including trim, doors, and
                surface smoothing.
              </p>
              <div className="mb-6">
                <div className="text-4xl font-extrabold text-[#131c2b]">
                  $749
                  <span className="text-base font-normal text-slate-500">
                    {" "}
                    / room
                  </span>
                </div>
                <span className="text-xs text-[#fea619] font-semibold">
                  Walls, baseboards, doors & ceilings
                </span>
              </div>

              <div className="space-y-3 pt-6 border-t border-amber-100 mb-8">
                <div className="text-xs font-bold uppercase text-[#fea619] tracking-wider">
                  Everything in Refresh, plus:
                </div>
                {[
                  "Level 4 drywall skim coating & deep crack sealing",
                  "Sherwin-Williams Emerald or Benjamin Moore Regal",
                  "Baseboards, door casings & door slabs included",
                  "Peel-and-stick color swatch consultation in your lighting",
                  "Surgical edge lines with precision tape scoring",
                  "HEPA air filtration during prep & sanding",
                  "3-year transferable warranty guarantee",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-slate-700 font-medium"
                  >
                    <svg
                      className="w-4 h-4 text-[#fea619] shrink-0 mt-0.5"
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
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() =>
                onRequestQuoteWithEstimate(
                  "Full Transformation Package",
                  "$749 / room",
                )
              }
              className="w-full py-3.5 inline-flex items-center justify-center gap-3 bg-secondary-container text-on-secondary-container text-[14px] font-bold px-8 py-4 rounded-full shadow-[0_10px_25px_-5px_rgba(11,25,44,0.12)] hover:bg-secondary-fixed hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer border-none"
            >
              Choose Full Transformation
            </button>
          </div>

          {/* Package 3: Architectural & Commercial */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                Architectural & Commercial
              </div>
              <h3 className="text-2xl font-bold font-headline text-[#131c2b] mb-2">
                Whole-Home & Commercial
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Tailored for extensive residential remodels, whole exteriors,
                and commercial spaces.
              </p>
              <div className="mb-6">
                <div className="text-4xl font-extrabold text-[#131c2b]">
                  Custom
                  <span className="text-base font-normal text-slate-500">
                    {" "}
                    / starting $1,800
                  </span>
                </div>
                <span className="text-xs text-slate-400">
                  Dedicated project manager & split crews
                </span>
              </div>

              <div className="space-y-3 pt-6 border-t border-slate-100 mb-8">
                <div className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                  Enterprise-grade inclusions:
                </div>
                {[
                  "Pressure washing, caulking & elastomeric masonry coats",
                  "Cabinet HVLP spray refinishing with conversion varnish",
                  "After-hours & weekend schedules for zero downtime",
                  "Benjamin Moore Aura or Scuff-X commercial coatings",
                  "Dedicated onsite Master Craftsman project manager",
                  "Formal 5-year transferable warranty contract",
                  "Annual complimentary inspection & touch-up visit",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-slate-600"
                  >
                    <svg
                      className="w-4 h-4 text-[#fea619] shrink-0 mt-0.5"
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
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() =>
                onRequestQuoteWithEstimate(
                  "Architectural & Commercial Scope",
                  "Custom Proposal",
                )
              }
              className="w-full py-3.5 rounded-2xl bg-[#131c2b] hover:bg-[#1e2e44] text-white text-xs font-bold tracking-wide transition-all cursor-pointer"
            >
              Request Custom Walkthrough
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Live Cost Estimator Calculator */}
      <section className="w-full max-w-full mx-auto px-4 sm:px-6 lg:max-w-5xl lg:px-8 mb-16 sm:mb-24">
        <div className="bg-white rounded-3xl p-5 sm:p-10 border border-slate-200 shadow-lg">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#fea619]">
              Instant Interactive Tool
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-headline text-[#131c2b] mt-1">
              Live Painting Cost Estimator
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Adjust your project specifications below to calculate an upfront
              preliminary estimate based on current regional material and labor
              rates.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Step 1: Project Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  1. Select Scope Type
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "interior", label: "Interior" },
                    { id: "exterior", label: "Exterior" },
                    { id: "commercial", label: "Commercial" },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setProjectType(t.id as any)}
                      className={`py-2.5 px-2 sm:px-3 rounded-xl text-[11px] sm:text-xs font-bold transition-all ${
                        projectType === t.id
                          ? "bg-[#131c2b] text-white shadow-md"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Size / Rooms Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {projectType === "interior"
                      ? "2. Number of Rooms"
                      : projectType === "exterior"
                        ? "2. Exterior Square Footage"
                        : "2. Number of Office Bays / Rooms"}
                  </label>
                  <span className="text-sm font-black text-[#fea619]">
                    {projectType === "exterior"
                      ? `${exteriorSqFt.toLocaleString()} sq.ft`
                      : `${roomCount} Rooms`}
                  </span>
                </div>
                {projectType === "exterior" ? (
                  <input
                    type="range"
                    min="1000"
                    max="6000"
                    step="200"
                    value={exteriorSqFt}
                    onChange={(e) => setExteriorSqFt(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#fea619]"
                  />
                ) : (
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={roomCount}
                    onChange={(e) => setRoomCount(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#fea619]"
                  />
                )}
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>
                    {projectType === "exterior" ? "1,000 sq.ft" : "1 Room"}
                  </span>
                  <span>
                    {projectType === "exterior" ? "6,000 sq.ft" : "10+ Rooms"}
                  </span>
                </div>
              </div>

              {/* Step 3: Wall Condition */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  3. Wall Surface Condition
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "light", title: "Great", desc: "Minor holes only" },
                    {
                      id: "standard",
                      title: "Average",
                      desc: "Cracks & nail pops",
                    },
                    {
                      id: "heavy",
                      title: "Heavy Prep",
                      desc: "Peeling / texture fixes",
                    },
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPrepLevel(p.id as any)}
                      className={`p-2 sm:p-2.5 rounded-xl border text-left transition-all ${
                        prepLevel === p.id
                          ? "border-[#fea619] bg-[#fffbf7] text-[#131c2b] shadow-sm"
                          : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      <div className="text-[11px] sm:text-xs font-bold">{p.title}</div>
                      <div className="text-[9px] sm:text-[10px] text-slate-400">{p.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Paint Grade */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  4. Paint Grade & Formulation
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    {
                      id: "standard",
                      name: "Commercial Grade",
                      brand: "Low-VOC Finish",
                    },
                    {
                      id: "premium",
                      name: "SW Emerald",
                      brand: "Zero-VOC Luxury",
                    },
                    {
                      id: "ultra",
                      name: "BM Aura",
                      brand: "Color-Lock Velvet",
                    },
                  ].map((tier) => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setPaintTier(tier.id as any)}
                      className={`p-2 sm:p-2.5 rounded-xl border text-left transition-all ${
                        paintTier === tier.id
                          ? "border-[#fea619] bg-[#fffbf7] text-[#131c2b] shadow-sm"
                          : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      <div className="text-[11px] sm:text-xs font-bold">{tier.name}</div>
                      <div className="text-[9px] sm:text-[10px] text-slate-400">
                        {tier.brand}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Estimate Card */}
            <div className="lg:col-span-5 bg-[#131c2b] rounded-3xl p-5 sm:p-8 text-white flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#fea619]">
                    Estimated Range
                  </span>
                  <span className="text-[11px] px-2.5 py-1 bg-white/10 rounded-full font-semibold whitespace-nowrap">
                    Fixed Price Guarantee
                  </span>
                </div>

                <div className="mb-6">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#fea619] font-headline mb-1">
                    ${calculated.low} – ${calculated.high}
                  </div>
                  <p className="text-xs text-slate-300">
                    Includes all labor, materials, masking, two topcoats & full
                    site HEPA cleanup.
                  </p>
                </div>

                <div className="bg-white/5 rounded-2xl p-4 space-y-2 text-xs text-slate-300 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Selected Scope:</span>
                    <span className="font-semibold text-white capitalize">
                      {projectType}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Surface Prep:</span>
                    <span className="font-semibold text-white capitalize">
                      {prepLevel} repair
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Coating Tier:</span>
                    <span className="font-semibold text-white capitalize">
                      {paintTier} grade
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Warranty Coverage:</span>
                    <span className="font-semibold text-[#fea619]">
                      Up to 5 Years
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={handleLockEstimate}
                  className="w-full inline-flex items-center justify-center gap-3 bg-secondary-container text-on-secondary-container text-[14px] font-bold px-8 py-4 rounded-full shadow-[0_10px_25px_-5px_rgba(11,25,44,0.12)] hover:bg-secondary-fixed hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer border-none mb-3"
                >
                  Lock Estimate & Book
                </button>
                <p className="text-[11px] text-center text-slate-400">
                  No payment required today. An expert craftsman reviews
                  measurements before kickoff.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="w-full max-w-full mx-auto px-4 sm:px-6 lg:max-w-6xl lg:px-8 mb-16 sm:mb-24">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold font-headline text-[#131c2b]">
            Detailed Tier Comparison
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Every home and facility has unique needs. Here is how our three
            signature approaches compare.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 overflow-x-auto shadow-sm">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="p-4 text-xs font-bold uppercase text-slate-500">
                  Service Feature
                </th>
                <th className="p-4 text-xs font-bold uppercase text-slate-700">
                  Room Refresh
                </th>
                <th className="p-4 text-xs font-bold uppercase text-[#fea619]">
                  Full Transformation
                </th>
                <th className="p-4 text-xs font-bold uppercase text-slate-700">
                  Architectural
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs text-slate-600">
              <tr>
                <td className="p-4 font-semibold text-[#131c2b]">
                  Surface Preparation
                </td>
                <td className="p-4">Nail holes & light spackle</td>
                <td className="p-4 font-medium text-[#131c2b]">
                  Level 4 drywall skimming & crack sealing
                </td>
                <td className="p-4">
                  Level 5 mirror skim & masonry power wash
                </td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-[#131c2b]">
                  Paint Formulation
                </td>
                <td className="p-4">Commercial Low-VOC Latex</td>
                <td className="p-4 font-medium text-[#131c2b]">
                  SW Emerald / BM Regal Zero-VOC
                </td>
                <td className="p-4">BM Aura / Marine Elastomeric / Urethane</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-[#131c2b]">
                  Trim, Doors & Baseboards
                </td>
                <td className="p-4 text-slate-400">Optional add-on</td>
                <td className="p-4 text-emerald-600 font-bold">✓ Included</td>
                <td className="p-4 text-emerald-600 font-bold">
                  ✓ Included + HVLP Spray
                </td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-[#131c2b]">
                  Color Consultation
                </td>
                <td className="p-4 text-slate-400">Digital palette guide</td>
                <td className="p-4 text-emerald-600 font-bold">
                  ✓ On-site lighting swatches
                </td>
                <td className="p-4 text-emerald-600 font-bold">
                  ✓ Certified IIDA Colorist
                </td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-[#131c2b]">
                  Warranty Period
                </td>
                <td className="p-4">1 Year</td>
                <td className="p-4 font-bold text-[#fea619]">
                  3 Years Transferable
                </td>
                <td className="p-4 font-bold text-[#fea619]">
                  5 Years Full Coverage
                </td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-[#131c2b]">
                  Air Filtration & Dust Guard
                </td>
                <td className="p-4">Standard drop cloths</td>
                <td className="p-4 text-emerald-600 font-bold">
                  ✓ HEPA air scrubbers
                </td>
                <td className="p-4 text-emerald-600 font-bold">
                  ✓ Full hermetic plastic zip barriers
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="w-full max-w-full mx-auto px-4 sm:px-6 lg:max-w-4xl lg:px-8 mb-16 sm:mb-24">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#fea619]">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-headline text-[#131c2b] mt-1">
            Everything You Need To Know
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Have questions about our scheduling, paint materials, or warranty?
            Find answers below.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#131c2b] hover:bg-slate-50 cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center bg-slate-100 text-slate-600 shrink-0 transition-transform ${isOpen ? "rotate-180 bg-[#fff0e6] text-[#fea619]" : ""}`}
                  >
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
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Strip */}
      <section className="w-full max-w-full mx-auto px-4 sm:px-6 lg:max-w-5xl lg:px-8">
        <div className="bg-[#131c2b] rounded-3xl p-6 sm:p-12 text-white text-center flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-bold font-headline mb-3">
            Ready For Your Free, Detailed In-Home Estimate?
          </h2>
          <p className="text-sm text-slate-300 max-w-lg mb-8">
            Marcus or one of our lead craftsmen will personally evaluate your
            space, offer wall finish advice, and deliver a guaranteed written
            quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate("contact")}
              className="bg-secondary-container text-on-secondary-container text-[14px] font-bold px-6 sm:px-8 py-4 rounded-full shadow-[0_10px_25px_-5px_rgba(11,25,44,0.12)] hover:bg-secondary-fixed hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer border-none"
            >
              Schedule Free Walkthrough
            </button>
            <button
              onClick={() => onNavigate("projects")}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 sm:px-8 py-4 rounded-full text-sm font-semibold transition-all cursor-pointer"
            >
              Browse Recent Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};