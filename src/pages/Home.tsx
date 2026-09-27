import React from "react";
import { IMAGES } from "../data/content.ts";
import { PageId } from "../components/Navbar.tsx";

interface HomeProps {
  onNavigate: (page: PageId) => void;
  onRequestQuote: () => void;
  onOpenHowItWorks: () => void;
}

export const Home: React.FC<HomeProps> = ({
  onNavigate,
  onRequestQuote,
  onOpenHowItWorks,
}) => {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-surface pt-20 sm:pt-24 lg:pt-12 pb-16 lg:pb-28">
        <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:max-w-10/12 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column — vertically centered */}
            <div className="lg:col-span-6 flex flex-col items-start justify-center z-10 animate-fadeInUp">

              <h1 className="text-[32px] leading-[38px] sm:text-[44px] sm:leading-12.5 md:text-[52px] md:leading-14.5 lg:text-[64px] lg:leading-18 text-on-surface font-extrabold tracking-tight mb-6">
                We Paint Spaces.
                <br />
                You Live{" "}
                <span className="  text-secondary-container">
                  Better.
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-secondary-container"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 160 12"
                  >
                    <path
                      d="M2 9C40 2 120 2 158 8"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="4"
                    />
                  </svg>
                </span>
              </h1>
              <p className="text-[16px] sm:text-[18px] text-on-surface-variant max-w-lg mb-8 leading-relaxed">
                Quality finishes, vibrant colors, and flawless results that
                bring your residential or commercial space to life with
                guaranteed satisfaction.
              </p>

              {/* Dual CTAs */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <button
                  onClick={() => onNavigate("services")}
                  className="inline-flex items-center gap-3 bg-secondary-container text-on-secondary-container text-[14px] font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-[0_10px_25px_-5px_rgba(11,25,44,0.12)] hover:bg-secondary-fixed hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer border-none"
                >
                  <span>Explore Services</span>
                  <span className="material-symbols-outlined text-lg">
                    arrow_forward
                  </span>
                </button>
                <button
                  onClick={onOpenHowItWorks}
                  className="inline-flex items-center gap-3 bg-surface-container-lowest text-on-surface text-[14px] font-bold px-5 sm:px-7 py-3.5 sm:py-4 rounded-full shadow-sm hover:bg-surface-container transition-all duration-200 cursor-pointer border-none"
                >
                  <span className="w-7 h-7 rounded-full bg-primary-container text-surface flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm ml-0.5">
                      play_arrow
                    </span>
                  </span>
                  <span>How It Works</span>
                </button>
              </div>

              {/* Social Proof Cluster */}
              <div className="flex items-center gap-4 pt-2 border-none">
                <div className="flex -space-x-3"></div>
              </div>
            </div>

            {/* Right Hero Visual Column — image middle aligned */}
            <div className="lg:col-span-6 relative flex items-center justify-center animate-fadeInUp delay-200">
              <div className="relative w-full lg:pt-8">
                {/* Modern Living Room Context Panel */}
                <div className="w-full aspect-[4/3] lg:aspect-[5/4] rounded-3xl overflow-hidden bg-surface-container-low shadow-[0_20px_40px_-15px_rgba(11,25,44,0.08)] relative">
                  <img
                    className="w-full h-full object-cover"
                    alt="Warm contemporary interior living room with rich mustard yellow accent wall"
                    src="https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=1600&auto=format&fit=crop"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-container/20 via-transparent to-transparent"></div>
                </div>

                {/* Overlay Badge: 10+ Years of Experience */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-14 lg:right-6 bg-primary-container text-surface-container-lowest px-3.5 sm:px-5 py-2.5 sm:py-3.5 rounded-2xl shadow-xl flex items-center gap-2.5 sm:gap-3 backdrop-blur-md animate-scaleIn delay-500">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-lg sm:text-xl">
                      workspace_premium
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[15px] sm:text-[18px] leading-tight font-extrabold text-surface">
                      10+ Years
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-primary-fixed-dim uppercase tracking-wider">
                      of Experience
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 4-PILL VALUE PROPOSITION FEATURE STRIP */}
      <section className="w-full relative z-20 -mt-6 lg:-mt-10 mb-16 lg:mb-24">
        <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:max-w-10/12 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {/* Pill 1: On-Time Guarantee */}
            <div
              className="group relative bg-white rounded-2xl p-5 lg:p-6
                      ring-1 ring-black/4
                      shadow-[0_2px_8px_-2px_rgba(11,25,44,0.04),0_12px_28px_-12px_rgba(11,25,44,0.10)]
                      hover:shadow-[0_6px_16px_-4px_rgba(11,25,44,0.06),0_20px_40px_-16px_rgba(11,25,44,0.16)]
                      hover:-translate-y-1 transition-all duration-300 ease-out
                      flex items-start gap-4 overflow-hidden animate-fadeInUp delay-100"
            >
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-[#E9D7C4]/0 group-hover:bg-[#E9D7C4]/40 blur-2xl transition-all duration-500 pointer-events-none" />

              <div
                className="relative w-12 h-12 rounded-xl bg-[#FBF2E8] text-[#A9693B]
                        flex items-center justify-center shrink-0
                        ring-1 ring-[#E9D7C4]/60
                        group-hover:bg-[#F5E6D6] transition-colors duration-300"
              >
                <span
                  className="material-symbols-outlined text-[22px]"
                  style={{ fontVariationSettings: "'FILL' 1, 'wght' 500" }}
                >
                  alarm_on
                </span>
              </div>

              <div className="flex flex-col relative">
                <h4 className="text-[15.5px] font-bold text-[#1E1B18] leading-tight mb-1.5 tracking-[-0.01em]">
                  On-Time Guarantee
                </h4>
                <p className="text-[13px] text-[#4E4A44] m-0 leading-[1.55]">
                  We value your time &amp; stick rigorously to the agreed
                  schedule.
                </p>
              </div>
            </div>

            {/* Pill 2: Transparent Pricing */}
            <div
              className="group relative bg-white rounded-2xl p-5 lg:p-6
                      ring-1 ring-black/[0.04]
                      shadow-[0_2px_8px_-2px_rgba(11,25,44,0.04),0_12px_28px_-12px_rgba(11,25,44,0.10)]
                      hover:shadow-[0_6px_16px_-4px_rgba(11,25,44,0.06),0_20px_40px_-16px_rgba(11,25,44,0.16)]
                      hover:-translate-y-1 transition-all duration-300 ease-out
                      flex items-start gap-4 overflow-hidden animate-fadeInUp delay-200"
            >
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-[#D6E0D5]/0 group-hover:bg-[#D6E0D5]/40 blur-2xl transition-all duration-500 pointer-events-none" />

              <div
                className="relative w-12 h-12 rounded-xl bg-[#EDF3EC] text-[#4F6B4A]
                        flex items-center justify-center shrink-0
                        ring-1 ring-[#C9D9C7]/60
                        group-hover:bg-[#E1EBE0] transition-colors duration-300"
              >
                <span
                  className="material-symbols-outlined text-[22px]"
                  style={{ fontVariationSettings: "'FILL' 1, 'wght' 500" }}
                >
                  receipt_long
                </span>
              </div>

              <div className="flex flex-col relative">
                <h4 className="text-[15.5px] font-bold text-[#1E1B18] leading-tight mb-1.5 tracking-[-0.01em]">
                  Transparent Pricing
                </h4>
                <p className="text-[13px] text-[#4E4A44] m-0 leading-[1.55]">
                  No hidden fees, surprise add-ons, or fluctuating quotes. Ever.
                </p>
              </div>
            </div>

            {/* Pill 3: Premium Quality */}
            <div
              className="group relative bg-white rounded-2xl p-5 lg:p-6
                      ring-1 ring-black/[0.04]
                      shadow-[0_2px_8px_-2px_rgba(11,25,44,0.04),0_12px_28px_-12px_rgba(11,25,44,0.10)]
                      hover:shadow-[0_6px_16px_-4px_rgba(11,25,44,0.06),0_20px_40px_-16px_rgba(11,25,44,0.16)]
                      hover:-translate-y-1 transition-all duration-300 ease-out
                      flex items-start gap-4 overflow-hidden animate-fadeInUp delay-300"
            >
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-[#E9D7C4]/0 group-hover:bg-[#E9D7C4]/40 blur-2xl transition-all duration-500 pointer-events-none" />

              <div
                className="relative w-12 h-12 rounded-xl bg-[#FBF2E8] text-[#A9693B]
                        flex items-center justify-center shrink-0
                        ring-1 ring-[#E9D7C4]/60
                        group-hover:bg-[#F5E6D6] transition-colors duration-300"
              >
                <span
                  className="material-symbols-outlined text-[22px]"
                  style={{ fontVariationSettings: "'FILL' 1, 'wght' 500" }}
                >
                  workspace_premium
                </span>
              </div>

              <div className="flex flex-col relative">
                <h4 className="text-[15.5px] font-bold text-[#1E1B18] leading-tight mb-1.5 tracking-[-0.01em]">
                  Premium Quality
                </h4>
                <p className="text-[13px] text-[#4E4A44] m-0 leading-[1.55]">
                  Top-grade low-VOC paints and multi-layer primer for lasting
                  depth.
                </p>
              </div>
            </div>

            {/* Pill 4: 100% Satisfaction */}
            <div
              className="group relative bg-white rounded-2xl p-5 lg:p-6
                      ring-1 ring-black/[0.04]
                      shadow-[0_2px_8px_-2px_rgba(11,25,44,0.04),0_12px_28px_-12px_rgba(11,25,44,0.10)]
                      hover:shadow-[0_6px_16px_-4px_rgba(11,25,44,0.06),0_20px_40px_-16px_rgba(11,25,44,0.16)]
                      hover:-translate-y-1 transition-all duration-300 ease-out
                      flex items-start gap-4 overflow-hidden animate-fadeInUp delay-400"
            >
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-[#F5DDD3]/0 group-hover:bg-[#F5DDD3]/50 blur-2xl transition-all duration-500 pointer-events-none" />

              <div
                className="relative w-12 h-12 rounded-xl bg-[#FCEFEA] text-[#B54B3A]
                        flex items-center justify-center shrink-0
                        ring-1 ring-[#F2CFC6]/60
                        group-hover:bg-[#F8E2DB] transition-colors duration-300"
              >
                <span
                  className="material-symbols-outlined text-[22px]"
                  style={{ fontVariationSettings: "'FILL' 1, 'wght' 500" }}
                >
                  sentiment_very_satisfied
                </span>
              </div>

              <div className="flex flex-col relative">
                <h4 className="text-[15.5px] font-bold text-[#1E1B18] leading-tight mb-1.5 tracking-[-0.01em]">
                  100% Satisfaction
                </h4>
                <p className="text-[13px] text-[#4E4A44] m-0 leading-[1.55]">
                  We don't pack our brushes until every corner meets your smile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PAINTING SERVICES SECTION */}
      <section className="w-full bg-surface-container-low/60 py-16 lg:py-24">
        <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:max-w-10/12 lg:px-12 flex flex-col items-center">
          {/* Section Header */}
          <div className="text-center max-w-2xl mb-14 animate-fadeInUp">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-6 h-[1.5px] bg-secondary-container rounded-full" />
              <span className="text-[11px] text-secondary font-bold uppercase tracking-[0.14em]">
                What We Do
              </span>
            </div>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] lg:leading-[52px] font-extrabold text-on-surface tracking-tight mb-4">
              Our Painting Services
            </h2>
            <p className="text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed m-0">
              From residential sanctuaries to sprawling corporate headquarters,
              we provide end-to-end painting solutions tailored to your unique
              architectural needs.
            </p>
          </div>

          {/* 3 Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-12">
            {/* Card 1: Interior Painting */}
            <div className="group bg-surface-container-lowest rounded-3xl overflow-hidden shadow-[0_10px_25px_-5px_rgba(11,25,44,0.06)] hover:shadow-[0_20px_35px_-5px_rgba(11,25,44,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col animate-fadeInUp delay-100">
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Interior Painting"
                  src={IMAGES.interiorLiving}
                />
              </div>
              <div className="p-7 pt-9 flex flex-col flex-grow">
                <h3 className="text-[20px] font-bold text-on-surface mb-2">
                  Interior Painting
                </h3>
                <p className="text-[15px] text-on-surface-variant mb-6 leading-relaxed flex-grow">
                  Refresh your interiors with smooth, clean, and beautiful
                  finishes that enhance natural lighting and personal comfort.
                </p>
                <button
                  onClick={() => onNavigate("services")}
                  className="inline-flex items-center gap-2 text-[14px] font-bold text-on-surface group-hover:text-secondary-container transition-colors bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  <span>Learn More</span>
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>

            {/* Card 2: Exterior Painting */}
            <div className="group bg-surface-container-lowest rounded-3xl overflow-hidden shadow-[0_10px_25px_-5px_rgba(11,25,44,0.06)] hover:shadow-[0_20px_35px_-5px_rgba(11,25,44,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col animate-fadeInUp delay-200">
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Exterior Painting"
                  src={IMAGES.exteriorModern}
                />
              </div>
              <div className="p-7 pt-9 flex flex-col flex-grow">
                <h3 className="text-[20px] font-bold text-on-surface mb-2">
                  Exterior Painting
                </h3>
                <p className="text-[15px] text-on-surface-variant mb-6 leading-relaxed flex-grow">
                  Weather-resistant coatings and sealing paints that protect
                  against moisture, UV rays, and elevate curb appeal.
                </p>
                <button
                  onClick={() => onNavigate("services")}
                  className="inline-flex items-center gap-2 text-[14px] font-bold text-on-surface group-hover:text-secondary-container transition-colors bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  <span>Learn More</span>
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>

            {/* Card 3: Commercial Painting */}
            <div className="group bg-surface-container-lowest rounded-3xl overflow-hidden shadow-[0_10px_25px_-5px_rgba(11,25,44,0.06)] hover:shadow-[0_20px_35px_-5px_rgba(11,25,44,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col animate-fadeInUp delay-300">
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Commercial Painting"
                  src={IMAGES.commercialBuilding}
                />
              </div>
              <div className="p-7 pt-9 flex flex-col flex-grow">
                <h3 className="text-[20px] font-bold text-on-surface mb-2">
                  Commercial Painting
                </h3>
                <p className="text-[15px] text-on-surface-variant mb-6 leading-relaxed flex-grow">
                  Efficient, high-durability solutions for busy offices, retail
                  storefronts, and large-scale architectural facilities.
                </p>
                <button
                  onClick={() => onNavigate("services")}
                  className="inline-flex items-center gap-2 text-[14px] font-bold text-on-surface group-hover:text-secondary-container transition-colors bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  <span>Learn More</span>
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={() => onNavigate("services")}
            className="inline-flex items-center gap-3 bg-primary-container text-surface text-[14px] font-bold px-8 py-3.5 rounded-full hover:bg-inverse-surface transition-all duration-200 shadow-md cursor-pointer border-none animate-fadeInUp"
          >
            <span>View All Services</span>
            <span className="material-symbols-outlined text-lg">
              arrow_forward
            </span>
          </button>
        </div>
      </section>

      {/* DEEP NAVY STATISTICS BANNER */}
      <section className="w-full bg-primary-container text-inverse-on-surface relative overflow-hidden py-14 lg:py-20">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-secondary-container/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-on-tertiary-container/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:max-w-10/12 lg:px-12 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {/* Metric 1 */}
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left sm:items-center gap-3 sm:gap-4 lg:gap-5 animate-fadeInUp delay-100">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-inverse-surface flex items-center justify-center text-secondary-container shrink-0 shadow-inner">
                <span className="material-symbols-outlined text-2xl sm:text-3xl">
                  handyman
                </span>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-[28px] sm:text-[36px] lg:text-[42px] lg:leading-[46px] font-extrabold text-surface tracking-tight">
                  500+
                </span>
                <span className="text-[12px] sm:text-[13px] text-primary-fixed-dim">
                  Projects Completed
                </span>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left sm:items-center gap-3 sm:gap-4 lg:gap-5 animate-fadeInUp delay-200">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-inverse-surface flex items-center justify-center text-secondary-container shrink-0 shadow-inner">
                <span className="material-symbols-outlined text-2xl sm:text-3xl">
                  sentiment_very_satisfied
                </span>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-[28px] sm:text-[36px] lg:text-[42px] lg:leading-[46px] font-extrabold text-surface tracking-tight">
                  98%
                </span>
                <span className="text-[12px] sm:text-[13px] text-primary-fixed-dim">
                  Happy Customers
                </span>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left sm:items-center gap-3 sm:gap-4 lg:gap-5 animate-fadeInUp delay-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-inverse-surface flex items-center justify-center text-secondary-container shrink-0 shadow-inner">
                <span className="material-symbols-outlined text-2xl sm:text-3xl">
                  military_tech
                </span>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-[28px] sm:text-[36px] lg:text-[42px] lg:leading-[46px] font-extrabold text-surface tracking-tight">
                  10+
                </span>
                <span className="text-[12px] sm:text-[13px] text-primary-fixed-dim">
                  Years of Experience
                </span>
              </div>
            </div>

            {/* Metric 4 */}
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left sm:items-center gap-3 sm:gap-4 lg:gap-5 animate-fadeInUp delay-400">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-inverse-surface flex items-center justify-center text-secondary-container shrink-0 shadow-inner">
                <span className="material-symbols-outlined text-2xl sm:text-3xl">
                  location_city
                </span>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-[28px] sm:text-[36px] lg:text-[42px] lg:leading-[46px] font-extrabold text-surface tracking-tight">
                  25+
                </span>
                <span className="text-[12px] sm:text-[13px] text-primary-fixed-dim">
                  Cities Served
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US & CTA SPLIT SECTION */}
      <section className="w-full py-16 lg:py-28 bg-surface">
        <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:max-w-10/12 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left: Why Choose Us & Armchair Vignette */}
            <div className="lg:col-span-6 flex flex-col animate-fadeInUp">
              <div className="inline-flex items-center gap-3 mb-3">
                <span className="w-6 h-[1.5px] bg-secondary-container rounded-full" />
                <span className="text-[11px] text-secondary font-bold uppercase tracking-[0.14em]">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-[26px] sm:text-[32px] lg:text-[42px] lg:leading-[50px] font-extrabold text-on-surface tracking-tight mb-8">
                We Bring{" "}
                <span className="decoration-secondary-container decoration-wavy decoration-2">
                  Color
                </span>{" "}
                To Your World
              </h2>

              {/* Feature Checklist */}
              <div className="space-y-4 mb-10">
                {[
                  "Skilled & Experienced Painters",
                  "High-Quality & Eco-Friendly Paints",
                  "Neat, Clean & Hassle-Free Service",
                  "On-Time Project Completion",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-sm font-extrabold">
                        check
                      </span>
                    </div>
                    <span className="text-[15px] sm:text-[16px] text-on-surface font-semibold">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Armchair Vignette Photo */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-surface-container shadow-md">
                <img
                  className="w-full h-full object-cover"
                  alt="Modern yellow armchair interior"
                  src={IMAGES.armchairYellow}
                />
              </div>
            </div>

            {/* Right: Navy CTA Promo Box */}
            <div className="lg:col-span-6 animate-fadeInUp delay-200">
              <div className="relative rounded-3xl bg-primary-container p-6 sm:p-8 lg:p-14 overflow-hidden shadow-[0_25px_50px_-12px_rgba(11,25,44,0.35)] flex flex-col items-start justify-between min-h-[400px] sm:min-h-[460px]">
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary-container/15 rounded-full blur-2xl pointer-events-none"></div>

                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-secondary-container/20 border-none text-secondary-container flex items-center justify-center mb-6 sm:mb-8">
                  <span className="material-symbols-outlined text-2xl sm:text-3xl">
                    brush
                  </span>
                </div>

                <div className="relative z-10 max-w-md mb-8">
                  <h3 className="text-[24px] sm:text-[30px] lg:text-[40px] lg:leading-[48px] font-bold text-surface mb-4">
                    Ready to Transform Your Space?
                  </h3>
                  <p className="text-[15px] sm:text-[16px] text-primary-fixed-dim leading-relaxed">
                    Let's make your walls beautiful, protected, and inspiring.
                    Reach out today for a free, transparent in-person quote.
                  </p>
                </div>

                <div className="relative z-10 w-full flex flex-col sm:flex-row items-center gap-4">
                  <button
                    onClick={onRequestQuote}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-secondary-container text-on-secondary-container text-[14px] font-bold px-8 py-4 rounded-full hover:bg-secondary-fixed transition-all duration-300 shadow-md hover:-translate-y-0.5 cursor-pointer border-none"
                  >
                    <span>Get a Free Quote</span>
                    <span className="material-symbols-outlined text-lg">
                      arrow_forward
                    </span>
                  </button>
                  <span className="text-on-primary-container text-[12px]">
                    No commitment required
                  </span>
                </div>

                {/* Stylized Paint Stroke SVG flourish */}
                <svg
                  className="absolute -bottom-6 -right-6 w-36 h-36 text-secondary-container/10 pointer-events-none"
                  fill="currentColor"
                  viewBox="0 0 100 100"
                >
                  <path d="M0,50 Q25,25 50,50 T100,50 L100,100 L0,100 Z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};