import React, { useState } from "react";
import { IMAGES } from "../data/content.ts";
import { PageId } from "../components/Navbar.tsx";

interface ServicesProps {
  onNavigate: (page: PageId) => void;
  onRequestQuoteWithEstimate?: (scope: string, estimate: string) => void;
  onOpenColorVisualizer: () => void;
  onOpenHowItWorks: () => void;
}

type ServiceCategory =
  | "all"
  | "residential"
  | "commercial"
  | "specialty"
  | "cabinet";

export const Services: React.FC<ServicesProps> = ({
  onNavigate,
  onRequestQuoteWithEstimate,
  onOpenColorVisualizer,
  onOpenHowItWorks,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<ServiceCategory>("all");

  // Interactive Calculator State
  const [scopeType, setScopeType] = useState<"1" | "3" | "6">("3");
  const [scopeName, setScopeName] = useState("Interior (2 Rooms)");
  const [sqft, setSqft] = useState(650);

  // Compute estimate range
  const multiplier = scopeType === "1" ? 2.1 : scopeType === "3" ? 1.9 : 1.65;
  const baseMin = Math.round(sqft * multiplier);
  const baseMax = Math.round(sqft * (multiplier + 0.55));
  const formattedEstimate = `$${baseMin.toLocaleString()} - $${baseMax.toLocaleString()}`;

  const servicesList = [
    {
      id: "interior",
      category: "residential",
      tag: "Residential",
      title: "Interior House Painting",
      image: IMAGES.interiorHouseAlt,

      description:
        "Refresh living rooms, bedrooms, stairwells, and accent walls with dustless sanding, caulked seams, and seamless high-durability color coats.",
      bullets: [
        "Drywall patching & seamless trim caulking",
        "Zero-VOC low-odor washable formulations",
        "Complete furniture masking & floor protection",
      ],
      pricingBadge: "From $1.85 / sq.ft",
      actionLabel: "Explore Interior",
    },
    {
      id: "exterior",
      category: "residential",
      tag: "Weather-Proof",
      title: "Exterior Home Painting",
      image: IMAGES.exteriorHomeAlt,

      description:
        "Defend your home against harsh UV radiation, rain, and humidity with premium elastomeric coatings, masonry sealers, and mildew resistance.",
      bullets: [
        "Power washing, scraping & primer sealing",
        "Wood, stucco, vinyl siding & brick masonry",
        "Fade-resistant weather-shield formulas",
      ],
      pricingBadge: "Free Inspection",
      actionLabel: "Explore Exterior",
    },
    {
      id: "commercial",
      category: "commercial",
      tag: "Commercial",
      title: "Commercial & Office Painting",
      image: IMAGES.commercialOfficeAlt,

      description:
        "Minimal disruption to your workday. Flexible night and weekend crews for tech headquarters, retail storefronts, and industrial spaces.",
      bullets: [
        "Off-hours and weekend shift availability",
        "Heavy-traffic scuff-resistant urethane coatings",
        "Detailed safety compliance and project management",
      ],
      pricingBadge: "B2B Proposals",
      actionLabel: "Explore Commercial",
    },
    {
      id: "cabinet",
      category: "cabinet",
      tag: "Specialty Finish",
      title: "Cabinet Refinishing & Spraying",
      image: IMAGES.cabinetRefinish,

      description:
        "Get the look of brand-new luxury cabinetry at one-third the cost of replacement. HVLP spray finish with no brush marks or roller texture.",
      bullets: [
        "Off-site spray booth curing for cabinet doors",
        "Commercial bonding primers that never peel",
        "Hardware replacement & soft-close adjustments",
      ],
      pricingBadge: "Save up to 70%",
      actionLabel: "Explore Cabinets",
    },
    {
      id: "wood-staining",
      category: "specialty",
      tag: "Wood Care",
      title: "Deck, Fence & Wood Staining",
      image: IMAGES.woodStaining,

      description:
        "Restore greyed, weathered outdoor lumber with deep chemical stripping, pressure wash prep, and penetrating natural wood sealers.",
      bullets: [
        "Deep wood brightening & mold eradication",
        "Semi-transparent, transparent & solid stains",
        "Hydrophobic barrier preventing warping & rot",
      ],
      pricingBadge: "Annual Service",
      actionLabel: "Explore Staining",
    },
    {
      id: "color-consult",
      category: "specialty",
      tag: "Design Tech",
      title: "Color Consultation & Visualizer",
      image: IMAGES.colorConsultation,

      description:
        "Take the guesswork out of color selection. Work with certified color consultants and preview custom palettes on 3D models before paint touches wall.",
      bullets: [
        "Photorealistic digital room rendering",
        "Oversized real paint sample swatches delivered",
        "Harmonious undertone & lighting analysis",
      ],
      pricingBadge: "Complimentary",
      actionLabel: "Open Visualizer",
      isVisualizer: true,
    },
  ];

  const filteredServices = servicesList.filter((s) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "residential") return s.category === "residential";
    if (selectedFilter === "commercial") return s.category === "commercial";
    if (selectedFilter === "specialty") return s.category === "specialty";
    if (selectedFilter === "cabinet") return s.category === "cabinet";
    return true;
  });

  const handleLockEstimate = () => {
    if (onRequestQuoteWithEstimate) {
      onRequestQuoteWithEstimate(scopeName, formattedEstimate);
    } else {
      onNavigate("contact");
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Decorative Paint Splashes & Header Banner */}
      <section className="relative w-full overflow-hidden bg-surface pt-10 pb-16 lg:pb-24">
        <div className="absolute -top-16 -right-16 w-96 h-96 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-surface-variant/40 blur-3xl pointer-events-none"></div>

        <div className="max-w-10/12 mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container/15 text-secondary mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
              <span className="text-[12px] uppercase tracking-wider font-bold">
                Our Expertise &amp; Craftsmanship
              </span>
            </div>
            <h1 className="text-[40px] lg:text-[56px] lg:leading-[64px] font-extrabold text-on-surface tracking-tight mb-6">
              Comprehensive Painting Services{" "}
              <span className="relative inline-block text-secondary-container">
                Tailored To You.
              </span>
            </h1>
            <p className="text-[18px] text-on-surface-variant leading-relaxed m-0">
              From full residential interior refresh to heavy-duty commercial
              coatings, our licensed painters bring precision brushwork,
              zero-mess protocols, and a comprehensive 5-year quality guarantee.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
              {[
                { id: "all", label: "All Services" },
                { id: "residential", label: "Residential" },
                { id: "commercial", label: "Commercial" },
                { id: "specialty", label: "Specialty Finishes" },
                { id: "cabinet", label: "Cabinet & Trim" },
              ].map((pill) => {
                const isActive = selectedFilter === pill.id;
                return (
                  <button
                    key={pill.id}
                    onClick={() =>
                      setSelectedFilter(pill.id as ServiceCategory)
                    }
                    className={`px-6 py-2.5 rounded-full text-[14px] font-bold transition-all border-none cursor-pointer ${
                      isActive
                        ? "bg-primary-container text-surface shadow-md hover:-translate-y-0.5"
                        : "bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high shadow-sm"
                    }`}
                  >
                    {pill.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Grid Section */}
      <section className="w-full bg-surface-container-low py-16 lg:py-24">
        <div className="max-w-10/12 mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-[#fea619] font-bold uppercase tracking-widest block mb-2">
                Our Painting Services
              </span>
              <h2 className="text-[32px] lg:text-[40px] font-extrabold text-on-surface tracking-tight m-0">
                Precision Craft Across Every Surface
              </h2>
            </div>
            <p className="text-[15px] text-on-surface-variant max-w-md m-0 leading-relaxed">
              Each project begins with meticulous surface prep and ends with a
              spotless walkthrough. Select a service below to explore
              specifications and color scopes.
            </p>
          </div>

          {/* 6-Card Bento/Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0_10px_25px_-5px_rgba(11,25,44,0.06)] hover:shadow-[0_20px_35px_-5px_rgba(11,25,44,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
              >
                <div className="relative w-full h-56 overflow-hidden bg-surface-container">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={service.title}
                    src={service.image}
                  />
                  <span className="absolute top-4 left-4 bg-primary-container/85 backdrop-blur-md text-surface text-[11px] px-3 py-1 rounded-full uppercase tracking-wider font-bold">
                    {service.tag}
                  </span>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-[20px] font-bold text-on-surface group-hover:text-secondary-container transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[15px] text-on-surface-variant mb-6 flex-grow leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2.5 mb-6 text-on-surface-variant text-[13px] list-none p-0">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-secondary-container text-base shrink-0">
                          check_circle
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-surface-container flex items-center justify-between mt-auto">
                    <button
                      onClick={() => {
                        if (service.isVisualizer) {
                          onOpenColorVisualizer();
                        } else {
                          onNavigate("contact");
                        }
                      }}
                      className="text-[14px] font-bold text-on-surface group-hover:text-secondary-container inline-flex items-center gap-2 transition-colors bg-transparent border-none p-0 cursor-pointer text-left"
                    >
                      <span>{service.actionLabel}</span>
                      <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </button>
                    <span className="text-[11px] px-2.5 py-1 rounded-md bg-surface-container font-semibold text-on-surface-variant">
                      {service.pricingBadge}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step 'Our Flawless Process' Section */}
      <section className="w-full bg-surface py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-10/12 mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[12px] text-secondary font-bold uppercase tracking-widest block mb-2">
              How We Work
            </span>
            <h2 className="text-[32px] lg:text-[40px] font-extrabold text-on-surface mb-4">
              Our 4-Step Flawless Process
            </h2>
            <p className="text-[15px] text-on-surface-variant leading-relaxed m-0">
              We treat your space with uncompromising respect. Our streamlined
              system guarantees pristine surfaces and clean results every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Step 1 */}
            <div
              onClick={onOpenHowItWorks}
              className="bg-surface-container-lowest p-8 rounded-2xl shadow-[0_10px_25px_-5px_rgba(11,25,44,0.04)] relative flex flex-col group hover:-translate-y-1 transition-transform cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary-container text-on-secondary-container text-[20px] flex items-center justify-center font-bold mb-6 shadow-sm">
                01
              </div>
              <h3 className="text-[20px] font-bold text-on-surface mb-3">
                Free In-Home Scope
              </h3>
              <p className="text-[15px] text-on-surface-variant leading-relaxed">
                We inspect wall textures, measure laser-accurate square
                footages, inspect moisture levels, and give you an itemized
                fixed-price proposal.
              </p>
              <div className="mt-6 pt-4 flex items-center gap-2 text-secondary text-[11px] font-bold uppercase tracking-wider">
                <span>Guaranteed Quote</span>
                <span className="material-symbols-outlined text-sm">done</span>
              </div>
            </div>

            {/* Step 2 */}
            <div
              onClick={onOpenHowItWorks}
              className="bg-surface-container-lowest p-8 rounded-2xl shadow-[0_10px_25px_-5px_rgba(11,25,44,0.04)] relative flex flex-col group hover:-translate-y-1 transition-transform cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-surface-container text-on-surface text-[20px] flex items-center justify-center font-bold mb-6 shadow-sm group-hover:bg-primary-container group-hover:text-surface transition-colors">
                02
              </div>
              <h3 className="text-[20px] font-bold text-on-surface mb-3">
                Surface Prep &amp; Shield
              </h3>
              <p className="text-[15px] text-on-surface-variant leading-relaxed">
                80% of paint longevity is preparation. We protect all floors,
                mask trims, patch drywall holes, and prime for absolute paint
                adhesion.
              </p>
              <div className="mt-6 pt-4 flex items-center gap-2 text-secondary text-[11px] font-bold uppercase tracking-wider">
                <span>Zero Dust Protocol</span>
                <span className="material-symbols-outlined text-sm">done</span>
              </div>
            </div>

            {/* Step 3 */}
            <div
              onClick={onOpenHowItWorks}
              className="bg-surface-container-lowest p-8 rounded-2xl shadow-[0_10px_25px_-5px_rgba(11,25,44,0.04)] relative flex flex-col group hover:-translate-y-1 transition-transform cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-surface-container text-on-surface text-[20px] flex items-center justify-center font-bold mb-6 shadow-sm group-hover:bg-primary-container group-hover:text-surface transition-colors">
                03
              </div>
              <h3 className="text-[20px] font-bold text-on-surface mb-3">
                Precision Application
              </h3>
              <p className="text-[15px] text-on-surface-variant leading-relaxed">
                Our trade certified painters apply two continuous premium coats
                using specialized roller and spray equipment for an even,
                saturated luster.
              </p>
              <div className="mt-6 pt-4 flex items-center gap-2 text-secondary text-[11px] font-bold uppercase tracking-wider">
                <span>Sharp Clean Edges</span>
                <span className="material-symbols-outlined text-sm">done</span>
              </div>
            </div>

            {/* Step 4 */}
            <div
              onClick={onOpenHowItWorks}
              className="bg-surface-container-lowest p-8 rounded-2xl shadow-[0_10px_25px_-5px_rgba(11,25,44,0.04)] relative flex flex-col group hover:-translate-y-1 transition-transform cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary text-surface text-[20px] flex items-center justify-center font-bold mb-6 shadow-sm">
                04
              </div>
              <h3 className="text-[20px] font-bold text-on-surface mb-3">
                Walkthrough &amp; Signoff
              </h3>
              <p className="text-[15px] text-on-surface-variant leading-relaxed">
                We clean thoroughly, remove all tape and plastic, and conduct a
                detailed room-by-room walkthrough with you before certifying the
                5-year warranty.
              </p>
              <div className="mt-6 pt-4 flex items-center gap-2 text-secondary text-[11px] font-bold uppercase tracking-wider">
                <span>100% Satisfaction</span>
                <span className="material-symbols-outlined text-sm">done</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Navy Banner with Instant Cost Estimator */}
      <section className="w-full max-w-10/12 mx-auto px-6 lg:px-12 pb-20 lg:pb-28">
        <div className="relative w-full rounded-3xl bg-primary-container text-inverse-on-surface overflow-hidden shadow-[0_25px_50px_-12px_rgba(11,25,44,0.35)] p-8 md:p-14 lg:p-16">
          {/* Decorative Brush Stroke Illustration */}
          <svg
            className="absolute top-0 right-0 w-80 lg:w-[460px] h-full text-secondary-container/10 pointer-events-none"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 500 500"
          >
            <path
              d="M150 0 C 300 80, 200 240, 500 280 L 500 0 Z"
              fill="currentColor"
            ></path>
            <path
              d="M50 500 C 250 420, 320 280, 500 200 L 500 500 Z"
              fill="currentColor"
            ></path>
          </svg>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[11px] font-bold uppercase tracking-wider mb-4">
                <span className="material-symbols-outlined text-sm">
                  calculate
                </span>
                <span>Instant Estimator</span>
              </div>
              <h2 className="text-[32px] lg:text-[48px] font-extrabold text-surface tracking-tight mb-4">
                Know Your Project Cost in Under{" "}
                <span className="text-secondary-container">60 Seconds</span>
              </h2>
              <p className="text-[18px] text-primary-fixed-dim mb-8 max-w-xl leading-relaxed">
                No unexpected fees or hidden markups. Enter your room dimensions
                or approximate square footage to view transparent materials and
                labor ranges.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                <button
                  onClick={handleLockEstimate}
                  className="inline-flex items-center justify-center gap-3 bg-secondary-container text-on-secondary-container text-[14px] font-bold px-8 py-4 rounded-full hover:bg-secondary-fixed transition-all shadow-lg hover:-translate-y-0.5 cursor-pointer border-none"
                >
                  <span>Calculate Your Project Cost</span>
                  <span className="material-symbols-outlined text-xl">
                    arrow_forward
                  </span>
                </button>
                <a
                  href="tel:+12345678900"
                  className="inline-flex items-center justify-center gap-2 text-surface text-[14px] font-bold px-6 py-4 rounded-full bg-inverse-surface hover:bg-inverse-surface/80 transition-all text-center"
                >
                  <span className="material-symbols-outlined text-xl text-secondary-container">
                    call
                  </span>
                  <span>Speak to an Estimator</span>
                </a>
              </div>

              {/* Quick bullet trust stats below CTA */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 mt-8 border-t border-inverse-surface text-primary-fixed-dim text-[13px]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-container text-base">
                    check
                  </span>
                  <span>Fixed-Price Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-container text-base">
                    check
                  </span>
                  <span>All Materials Included</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-container text-base">
                    check
                  </span>
                  <span>No Deposit Required</span>
                </div>
              </div>
            </div>

            {/* Right Column: Live Interactive Quick Calculator Card */}
            <div className="lg:col-span-5">
              <div className="bg-surface-container-lowest text-on-surface p-6 sm:p-8 rounded-2xl shadow-2xl">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-surface-container">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-secondary-container flex items-center justify-center text-on-secondary-container">
                      <span className="material-symbols-outlined text-lg">
                        tune
                      </span>
                    </div>
                    <h4 className="text-[16px] font-bold text-on-surface m-0">
                      Quick Cost Calculator
                    </h4>
                  </div>
                  <span className="text-[11px] text-secondary font-bold">
                    Standard Spec
                  </span>
                </div>

                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between items-center text-on-surface text-[14px] mb-2">
                      <span className="font-semibold">Project Scope</span>
                      <span className="font-bold text-secondary">
                        {scopeName}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        {
                          id: "1",
                          label: "1 Room",
                          fullName: "1 Room / Accent",
                        },
                        {
                          id: "3",
                          label: "3-4 Rooms",
                          fullName: "3-4 Rooms (Full Flat)",
                        },
                        {
                          id: "6",
                          label: "Whole House",
                          fullName: "Whole House Interior",
                        },
                      ].map((btn) => (
                        <button
                          key={btn.id}
                          type="button"
                          onClick={() => {
                            setScopeType(btn.id as "1" | "3" | "6");
                            setScopeName(btn.fullName);
                          }}
                          className={`py-2 px-3 rounded-lg text-[12px] font-bold transition-all border-none cursor-pointer ${
                            scopeType === btn.id
                              ? "bg-secondary-container text-on-secondary-container shadow-sm"
                              : "bg-surface-container text-on-surface hover:bg-surface-container-high"
                          }`}
                        >
                          {btn.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center text-on-surface text-[14px] mb-1">
                      <span className="font-semibold">
                        Estimated Surface Area
                      </span>
                      <span className="font-bold text-on-surface">
                        {sqft.toLocaleString()} sq. ft
                      </span>
                    </div>
                    <input
                      type="range"
                      min={200}
                      max={3500}
                      step={50}
                      value={sqft}
                      onChange={(e) => setSqft(parseInt(e.target.value, 10))}
                      className="w-full accent-secondary-container cursor-pointer h-2 bg-surface-container rounded-lg"
                    />
                  </div>

                  {/* Output Display */}
                  <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1">
                    <span className="text-[11px] text-on-surface-variant uppercase font-bold tracking-wider">
                      Estimated Project Range
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-[28px] text-on-surface font-extrabold">
                        {formattedEstimate}
                      </span>
                      <span className="text-[13px] text-on-surface-variant">
                        incl. paint &amp; prep
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleLockEstimate}
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary text-on-primary py-3 rounded-xl text-[14px] font-bold hover:bg-secondary hover:text-on-secondary transition-colors cursor-pointer border-none"
                  >
                    <span>Lock In This Estimate</span>
                    <span className="material-symbols-outlined text-base">
                      check
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
