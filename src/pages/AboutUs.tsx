import React from "react";
import { IMAGES, TEAM_MEMBERS } from "../data/content.ts";
import { PageId } from "../components/Navbar.tsx";

interface AboutUsProps {
  onNavigate: (page: PageId) => void;
  onRequestQuote: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({
  onNavigate,
  onRequestQuote,
}) => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden pt-10 pb-16 lg:pb-24 bg-surface">
        <div className="absolute top-12 right-0 w-[550px] h-[550px] bg-secondary-container/15 rounded-full blur-3xl pointer-events-none -z-10 translate-x-1/3"></div>
        <div className="absolute top-48 left-10 w-72 h-72 bg-surface-container-highest/40 rounded-full blur-2xl pointer-events-none -z-10"></div>

        <div className="max-w-10/12 mx-auto px-6 lg:px-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Text Column */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <h1 className="text-[40px] leading-[48px] lg:text-[56px] lg:leading-[64px] font-extrabold text-on-surface tracking-tight mb-4">
                Built on Quality.{" "} <br />
                <span className="text-secondary-container ">
                  Trusted by People.
                  <svg
                    className="absolute -bottom-2.5 left-0 w-full text-secondary-container/60 h-3"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 200 12"
                  >
                    <path
                      d="M2 9C50 3 150 1 198 8"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="4"
                    />
                  </svg>
                </span>
              </h1>
              <p className="text-[18px] text-on-surface-variant max-w-xl mb-8 leading-relaxed">
                We believe great painting is more than applying color. It is
                about craftsmanship, obsessive attention to detail, reliable
                timelines, and creating vibrant spaces people truly love to live
                and work in.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#our-story"
                  className="inline-flex items-center justify-center gap-2.5 bg-secondary-container text-on-secondary-container text-[14px] font-bold px-7 py-3.5 rounded-full hover:bg-secondary-fixed transition-all shadow-[0_10px_25px_-5px_rgba(11,25,44,0.12)] hover:-translate-y-0.5 group no-underline"
                >
                  <span>Explore Our Story</span>
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                    arrow_downward
                  </span>
                </a>
                <button
                  onClick={() => onNavigate("projects")}
                  className="inline-flex items-center justify-center gap-2.5 bg-surface-container text-on-surface text-[14px] font-bold px-6 py-3.5 rounded-full hover:bg-surface-container-high transition-all cursor-pointer border-none"
                >
                  <span className="material-symbols-outlined text-lg text-secondary">
                    palette
                  </span>
                  <span>View Portfolio</span>
                </button>
              </div>

              {/* Trust Sub-badge */}
              <div className="mt-8 pt-4 flex items-center gap-4">
                <div className="flex -space-x-2.5">
                  <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container text-[12px] font-bold shadow-sm ring-2 ring-surface">
                    JC
                  </div>
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface text-[12px] font-bold shadow-sm ring-2 ring-surface">
                    ER
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary text-[12px] font-bold shadow-sm ring-2 ring-surface">
                    MV
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-secondary-container">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span
                        key={s}
                        className="material-symbols-outlined text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                    <span className="text-[14px] font-bold text-on-surface ml-1">
                      4.9 / 5.0
                    </span>
                  </div>
                  <p className="text-[13px] text-on-surface-variant m-0">
                    Backed by 500+ verified residential &amp; commercial reviews
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-6 relative mt-8 lg:mt-0">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <div className="absolute -top-6 -right-6 w-full h-full bg-secondary-container/20 rounded-[2.5rem] transform rotate-3 -z-10"></div>
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-surface-container-lowest">
                  <img
                    className="w-full h-[460px] lg:h-[520px] object-cover hover:scale-105 transition-transform duration-700"
                    alt="Professional painter with roller working on interior wall"
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop"
                  />

                  {/* Floating Detail Card */}
                  <div className="absolute top-6 left-6 bg-surface/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container">
                      <span className="material-symbols-outlined text-xl">
                        verified
                      </span>
                    </div>
                    <div>
                      <p className="text-[11px] text-on-surface-variant m-0">
                        Licensed &amp; Bonded
                      </p>
                      <p className="text-[14px] text-on-surface font-bold m-0">
                        100% Guaranteed
                      </p>
                    </div>
                  </div>

                  {/* Floating 15+ Years Badge */}
                  <div className="absolute bottom-6 right-6 bg-primary-container text-surface px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary-container/20 flex items-center justify-center text-secondary-container">
                      <span className="material-symbols-outlined text-3xl">
                        workspace_premium
                      </span>
                    </div>
                    <div>
                      <div className="text-[28px] text-secondary-container font-extrabold leading-none">
                        10+ Years
                      </div>
                      <p className="text-[11px] text-primary-fixed-dim tracking-wider uppercase mt-1 m-0">
                        Of Unbroken Trust
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars Key Highlights Ribbon */}
      <section className="w-full py-4 bg-surface">
        <div className="max-w-10/12 mx-auto px-6 lg:px-12">
          <div className="bg-surface-container-lowest rounded-3xl p-6 lg:p-8 shadow-[0_10px_30px_-5px_rgba(11,25,44,0.06)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-4 p-2">
              <div className="w-12 h-12 rounded-2xl bg-secondary-container/15 flex items-center justify-center text-secondary shrink-0">
                <span className="material-symbols-outlined text-2xl">
                  alarm_on
                </span>
              </div>
              <div>
                <h3 className="text-[16px] text-on-surface font-bold m-0">
                  Punctual Schedules
                </h3>
                <p className="text-[13px] text-on-surface-variant m-0">
                  Zero delays with firm daily delivery benchmarks.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-2">
              <div className="w-12 h-12 rounded-2xl bg-secondary-container/15 flex items-center justify-center text-secondary shrink-0">
                <span className="material-symbols-outlined text-2xl">
                  request_quote
                </span>
              </div>
              <div>
                <h3 className="text-[16px] text-on-surface font-bold m-0">
                  Upfront Estimates
                </h3>
                <p className="text-[13px] text-on-surface-variant m-0">
                  Itemized transparent pricing, no hidden surcharges.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-2">
              <div className="w-12 h-12 rounded-2xl bg-secondary-container/15 flex items-center justify-center text-secondary shrink-0">
                <span className="material-symbols-outlined text-2xl">air</span>
              </div>
              <div>
                <h3 className="text-[16px] text-on-surface font-bold m-0">
                  Low-VOC Formulas
                </h3>
                <p className="text-[13px] text-on-surface-variant m-0">
                  Safe for families, pets, and workplace environments.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-2">
              <div className="w-12 h-12 rounded-2xl bg-secondary-container/15 flex items-center justify-center text-secondary shrink-0">
                <span className="material-symbols-outlined text-2xl">
                  sentiment_very_satisfied
                </span>
              </div>
              <div>
                <h3 className="text-[16px] text-on-surface font-bold m-0">
                  100% Satisfaction
                </h3>
                <p className="text-[13px] text-on-surface-variant m-0">
                  Comprehensive walkthrough until every wall is flawless.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section
        className="w-full py-20 lg:py-24 bg-surface-container-low relative"
        id="our-story"
      >
        <div className="max-w-10/12 mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Side Visual */}
            <div className="lg:col-span-5 order-2 lg:order-1 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_45px_-20px_rgba(11,25,44,0.2)] bg-surface-container-lowest ring-1 ring-black/[0.03]">
                <img
                  className="w-full h-[420px] object-cover"
                  alt="Living room signature finish detail"
                  src={IMAGES.aboutStoryDetail}
                />
                <div className="p-6 bg-surface-container-lowest">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] text-secondary font-bold uppercase tracking-[0.12em]">
                      Our Signature Finish
                    </span>
                    <span className="text-[12.5px] text-on-surface-variant">
                      Est. 2012
                    </span>
                  </div>
                  <p className="text-[15px] text-on-surface font-bold m-0 leading-snug">
                    "Every surface tells a story of care, chemistry, and
                    disciplined hands."
                  </p>
                </div>
              </div>

              {/* Overlapping Mini Metric Box — ekhon TOP e */}
              <div
                className="absolute -top-6 -right-6 hidden sm:flex bg-surface-container p-5 rounded-2xl
                  shadow-[0_18px_35px_-15px_rgba(11,25,44,0.22)]
                  ring-1 ring-black/[0.03] items-center gap-4 max-w-xs"
              >
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                  <span className="material-symbols-outlined text-xl">
                    brush
                  </span>
                </div>
                <div>
                  <p className="text-[20px] text-on-surface font-extrabold m-0 tracking-[-0.02em]">
                    3,200+
                  </p>
                  <p className="text-[12.5px] text-on-surface-variant m-0 leading-tight">
                    Gallons applied with laser precision
                  </p>
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
              {/* Eyebrow — hand-drawn tick instead of pill */}
              <div className="inline-flex items-center gap-3 mb-3">
                <span className="w-6 h-[1.5px] bg-secondary-container rounded-full" />
                <span className="text-[11px] text-secondary font-bold uppercase tracking-[0.14em]">
                  Our Background
                </span>
              </div>

              {/* Headline — tighter tracking, italic human accent */}
              <h2
                className="text-[28px] lg:text-[40px] lg:leading-[1.15] text-on-surface
                 tracking-[-0.025em] mb-5 font-extrabold"
              >
                Turning Ordinary Spaces Into Places{" "}
                <span className="text-secondary-container">People Love .</span>
              </h2>

              {/* Story paragraphs — better rhythm, subtle word-emphasis */}
              <div className="space-y-4 text-[15px] text-on-surface-variant leading-[1.75] max-w-[58ch]">
                <p>
                  Painter Contractors began in{" "}
                  <span className="font-semibold text-on-surface">2012</span>{" "}
                  with a simple observation: property owners were routinely let
                  down by inconsistent work, messy cleanups, and volatile
                  estimates. We set out to redefine painting as a disciplined,
                  white-glove trade service.
                </p>
                <p>
                  Over the last decade, we have honed our craft by pairing
                  old-school surface preparation—sanding, compounding, priming,
                  and multi-stage masking—with contemporary paint technologies.
                  We utilize{" "}
                  <span className="font-semibold text-on-surface">
                    commercial-grade, ultra-low VOC
                  </span>{" "}
                  and odor-free coatings from industry leaders like Benjamin
                  Moore and Sherwin-Williams.
                </p>
                <p>
                  From revitalizing cozy residential living rooms to coating
                  expansive commercial office campuses, our certified painters
                  bring respectful professionalism, immaculate work areas, and
                  guaranteed results to every single square foot.
                </p>
              </div>

              {/* Feature Checks Grid — softer, tactile, aligned */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 mt-8 w-full">
                {[
                  "Skilled & Background-Checked Painters",
                  "Eco-Friendly, Non-Toxic Coatings",
                  "Zero-Drip Worksite Protection",
                  "5-Year Workmanship Warranty",
                ].map((item, idx) => (
                  <div key={idx} className="group flex items-start gap-3 py-1">
                    {/* warm clay check, filled, subtle ring */}
                    <div
                      className="w-6 h-6 rounded-full bg-secondary-container text-on-secondary-container
                        flex items-center justify-center shrink-0 mt-0.5
                        ring-1 ring-secondary-container/40
                        group-hover:bg-secondary-fixed transition-colors duration-300"
                    >
                      <span
                        className="material-symbols-outlined text-[13px]"
                        style={{
                          fontVariationSettings: "'FILL' 1, 'wght' 600",
                        }}
                      >
                        check
                      </span>
                    </div>
                    <span className="text-[13.5px] text-on-surface font-semibold leading-[1.5]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-20 lg:py-24 bg-surface">
        <div className="max-w-10/12 mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-3 mb-3">
                <span className="w-6 h-[1.5px] bg-secondary-container rounded-full" />
                <span className="text-[11px] text-secondary font-bold uppercase tracking-[0.14em]">
                  Why Choose Us

                </span>
              </div>
            <h2 className="text-[28px] lg:text-[36px] font-extrabold text-on-surface tracking-tight mb-2">
              The Precision Standard in Every Coat
            </h2>
            <p className="text-[15px] text-on-surface-variant m-0">
              We combine structural trade discipline with creative visual flair
              so your property retains lasting elegance and increased market
              value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-[0_10px_25px_-5px_rgba(11,25,44,0.05)] hover:-translate-y-1 hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-secondary-container/20 flex items-center justify-center text-secondary mb-4 group-hover:bg-secondary-container group-hover:text-on-secondary-container transition-colors">
                  <span className="material-symbols-outlined text-3xl">
                    format_paint
                  </span>
                </div>
                <h3 className="text-[20px] font-bold text-on-surface mb-2">
                  Expert Craftsmanship
                </h3>
                <p className="text-[14px] text-on-surface-variant leading-relaxed">
                  Master painters with rigorous vocational training, specialized
                  tape cutting, and strict zero-drip protocols across every
                  room.
                </p>
              </div>
              <div className="mt-6 pt-4 flex items-center text-secondary text-[14px] font-bold">
                <span>Rigorous Standards</span>
                <span className="material-symbols-outlined text-base ml-1">
                  arrow_forward
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-[0_10px_25px_-5px_rgba(11,25,44,0.05)] hover:-translate-y-1 hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-secondary-container/20 flex items-center justify-center text-secondary mb-4 group-hover:bg-secondary-container group-hover:text-on-secondary-container transition-colors">
                  <span className="material-symbols-outlined text-3xl">
                    science
                  </span>
                </div>
                <h3 className="text-[20px] font-bold text-on-surface mb-2">
                  Premium Materials
                </h3>
                <p className="text-[14px] text-on-surface-variant leading-relaxed">
                  Commercial-grade paints, zero-VOC primers, and
                  UV/moisture-resistant sealants engineered for enduring
                  vibrancy.
                </p>
              </div>
              <div className="mt-6 pt-4 flex items-center text-secondary text-[14px] font-bold">
                <span>Grade-A Formulations</span>
                <span className="material-symbols-outlined text-base ml-1">
                  arrow_forward
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-[0_10px_25px_-5px_rgba(11,25,44,0.05)] hover:-translate-y-1 hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-secondary-container/20 flex items-center justify-center text-secondary mb-4 group-hover:bg-secondary-container group-hover:text-on-secondary-container transition-colors">
                  <span className="material-symbols-outlined text-3xl">
                    more_time
                  </span>
                </div>
                <h3 className="text-[20px] font-bold text-on-surface mb-2">
                  Reliable Service
                </h3>
                <p className="text-[14px] text-on-surface-variant leading-relaxed">
                  Guaranteed start and finish calendars, punctual on-site
                  arrivals, and comprehensive dust-free daily site cleanups.
                </p>
              </div>
              <div className="mt-6 pt-4 flex items-center text-secondary text-[14px] font-bold">
                <span>Guaranteed Timelines</span>
                <span className="material-symbols-outlined text-base ml-1">
                  arrow_forward
                </span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-[0_10px_25px_-5px_rgba(11,25,44,0.05)] hover:-translate-y-1 hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-secondary-container/20 flex items-center justify-center text-secondary mb-4 group-hover:bg-secondary-container group-hover:text-on-secondary-container transition-colors">
                  <span className="material-symbols-outlined text-3xl">
                    verified_user
                  </span>
                </div>
                <h3 className="text-[20px] font-bold text-on-surface mb-2">
                  5-Year Warranty
                </h3>
                <p className="text-[14px] text-on-surface-variant leading-relaxed">
                  We stand firmly behind our work. 100% sign-off approval backed
                  by an unconditional multi-year touchup warranty.
                </p>
              </div>
              <div className="mt-6 pt-4 flex items-center text-secondary text-[14px] font-bold">
                <span>Peace of Mind</span>
                <span className="material-symbols-outlined text-base ml-1">
                  arrow_forward
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Navy Stats Ribbon */}
      <section className="w-full relative overflow-hidden bg-primary-container text-surface py-16">
        <div className="max-w-10/12 mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="flex items-center gap-4 lg:gap-5 justify-start lg:justify-center">
              <div className="w-14 h-14 rounded-2xl bg-secondary-container/15 flex items-center justify-center text-secondary-container shrink-0">
                <span className="material-symbols-outlined text-3xl">
                  engineering
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[36px] lg:text-[44px] text-surface font-extrabold tracking-tight leading-none">
                  500+
                </span>
                <span className="text-[14px] text-primary-fixed-dim mt-1">
                  Projects Completed
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 lg:gap-5 justify-start lg:justify-center">
              <div className="w-14 h-14 rounded-2xl bg-secondary-container/15 flex items-center justify-center text-secondary-container shrink-0">
                <span className="material-symbols-outlined text-3xl">
                  sentiment_satisfied
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[36px] lg:text-[44px] text-surface font-extrabold tracking-tight leading-none">
                  98%
                </span>
                <span className="text-[14px] text-primary-fixed-dim mt-1">
                  Happy Customers
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 lg:gap-5 justify-start lg:justify-center">
              <div className="w-14 h-14 rounded-2xl bg-secondary-container/15 flex items-center justify-center text-secondary-container shrink-0">
                <span className="material-symbols-outlined text-3xl">
                  emoji_events
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[36px] lg:text-[44px] text-surface font-extrabold tracking-tight leading-none">
                  10+
                </span>
                <span className="text-[14px] text-primary-fixed-dim mt-1">
                  Years Experience
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 lg:gap-5 justify-start lg:justify-center">
              <div className="w-14 h-14 rounded-2xl bg-secondary-container/15 flex items-center justify-center text-secondary-container shrink-0">
                <span className="material-symbols-outlined text-3xl">
                  location_city
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[36px] lg:text-[44px] text-surface font-extrabold tracking-tight leading-none">
                  25+
                </span>
                <span className="text-[14px] text-primary-fixed-dim mt-1">
                  Cities Served
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="w-full py-20 lg:py-24 bg-surface">
        <div className="max-w-10/12 mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-3 mb-3">
                <span className="w-6 h-[1.5px] bg-secondary-container rounded-full" />
                <span className="text-[11px] text-secondary font-bold uppercase tracking-[0.14em]">
                  Our Culture
                </span>
              </div>
              <h2 className="text-[28px] lg:text-[40px] font-extrabold text-on-surface tracking-tight m-0">
                The Values Guiding Every Brushstroke
              </h2>
            </div>
            <p className="text-[15px] text-on-surface-variant max-w-md mt-4 lg:mt-0 leading-relaxed">
              We pride ourselves on transparent communication, uncompromising
              technical standards, and treating client homes with supreme
              respect.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface-container-low rounded-3xl p-6 lg:p-8 hover:bg-surface-container transition-colors">
              <span className="text-3xl font-extrabold text-secondary-container mb-4 block">
                01
              </span>
              <h3 className="text-[20px] font-bold text-on-surface mb-2">
                Quality First
              </h3>
              <p className="text-[14px] text-on-surface-variant leading-relaxed m-0">
                No cutting corners on prep work. 80% of our paint durability
                comes from meticulous sanding, scraping, and primed bonding.
              </p>
            </div>

            <div className="bg-surface-container-low rounded-3xl p-6 lg:p-8 hover:bg-surface-container transition-colors">
              <span className="text-3xl font-extrabold text-secondary-container mb-4 block">
                02
              </span>
              <h3 className="text-[20px] font-bold text-on-surface mb-2">
                Radical Honesty
              </h3>
              <p className="text-[14px] text-on-surface-variant leading-relaxed m-0">
                Clear cost estimates, direct timelines, and straightforward
                advice regarding what your specific surfaces require.
              </p>
            </div>

            <div className="bg-surface-container-low rounded-3xl p-6 lg:p-8 hover:bg-surface-container transition-colors">
              <span className="text-3xl font-extrabold text-secondary-container mb-4 block">
                03
              </span>
              <h3 className="text-[20px] font-bold text-on-surface mb-2">
                Rock-Solid Reliability
              </h3>
              <p className="text-[14px] text-on-surface-variant leading-relaxed m-0">
                We show up on time in clean uniforms, protect your furniture
                with fresh tarps, and finish on the promised date.
              </p>
            </div>

            <div className="bg-surface-container-low rounded-3xl p-6 lg:p-8 hover:bg-surface-container transition-colors">
              <span className="text-3xl font-extrabold text-secondary-container mb-4 block">
                04
              </span>
              <h3 className="text-[20px] font-bold text-on-surface mb-2">
                Customer First
              </h3>
              <p className="text-[14px] text-on-surface-variant leading-relaxed m-0">
                Our job is not finished until you walk the premises, examine
                every angle, and give your enthusiastic sign-off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Crew */}
      <section className="w-full py-20 lg:py-24 bg-surface-container-low">
        <div className="max-w-10/12 mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-3 mb-3">
                <span className="w-6 h-[1.5px] bg-secondary-container rounded-full" />
                <span className="text-[11px] text-secondary font-bold uppercase tracking-[0.14em]">
                 Leadership &amp; Crew
                </span>
              </div>
            <h2 className="text-[28px] lg:text-[35px] font-extrabold text-on-surface tracking-tight mb-2">
              Meet the Craftspeople Behind the Brush
            </h2>
            <p className="text-[15px] text-on-surface-variant m-0">
              Experienced industry professionals dedicated to technical
              precision, color theory, and flawless site execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-[0_10px_25px_-5px_rgba(11,25,44,0.05)] hover:-translate-y-1.5 transition-all flex flex-col group"
              >
                <div className="relative overflow-hidden h-72 bg-surface-container">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={member.name}
                    src={member.image}
                  />
                  <div className="absolute top-4 right-4 bg-secondary-container text-on-secondary-container text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                    {member.badge}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-[20px] font-bold text-on-surface mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[12px] text-secondary font-semibold uppercase tracking-wider mb-3">
                    {member.role}
                  </p>
                  <p className="text-[14px] text-on-surface-variant mb-6 flex-grow leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex items-center gap-2 text-on-surface-variant text-[13px] border-t border-surface-container pt-3">
                    <span className="material-symbols-outlined text-base text-secondary">
                      verified
                    </span>
                    <span>{member.subBadge}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Project Estimator Teaser */}
      <section className="w-full py-16 bg-surface">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="bg-surface-container rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-secondary-container flex items-center justify-center text-on-secondary-container shrink-0 shadow-md">
                <span className="material-symbols-outlined text-3xl">
                  calculate
                </span>
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-on-surface mb-1">
                  Curious About Your Project Cost?
                </h3>
                <p className="text-[15px] text-on-surface-variant m-0">
                  Get a ballpark estimate in 60 seconds with our instant room
                  &amp; square footage calculator.
                </p>
              </div>
            </div>
            <button
              onClick={() => onNavigate("pricing")}
              className="inline-flex items-center gap-2 bg-surface-container-lowest text-on-surface text-[14px] font-bold px-6 py-3.5 rounded-full hover:bg-secondary-container hover:text-on-secondary-container transition-colors shadow-sm whitespace-nowrap cursor-pointer border-none"
            >
              <span>Calculate Pricing</span>
              <span className="material-symbols-outlined text-base">east</span>
            </button>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="w-full py-16 pb-24 bg-surface">
        <div className="max-w-10/12 mx-auto px-6 lg:px-12">
          <div className="relative bg-primary-container rounded-[2.5rem] overflow-hidden text-surface shadow-2xl p-8 sm:p-12 lg:p-16">
            <div className="absolute -right-16 -top-16 w-80 h-80 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -left-16 -bottom-16 w-80 h-80 bg-tertiary-container/50 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 flex flex-col items-start">
                <div className="w-12 h-12 rounded-xl bg-secondary-container/20 flex items-center justify-center text-secondary-container mb-4">
                  <span className="material-symbols-outlined text-2xl">
                    format_paint
                  </span>
                </div>
                <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] lg:leading-[64px] font-extrabold text-surface tracking-tight mb-4">
                  Ready to Transform <br className="hidden sm:inline" />
                  Your Space?
                </h2>
                <p className="text-[18px] text-primary-fixed-dim max-w-xl mb-8 leading-relaxed">
                  Book a complimentary in-person walkthrough and professional
                  color consultation. Let's make your walls vibrant, fresh, and
                  beautiful.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={onRequestQuote}
                    className="inline-flex items-center justify-center gap-2 bg-secondary-container text-on-secondary-container text-[14px] font-bold px-8 py-4 rounded-full hover:bg-secondary-fixed transition-all shadow-lg hover:-translate-y-0.5 cursor-pointer border-none"
                  >
                    <span>Request a Free Quote</span>
                    <span className="material-symbols-outlined text-lg">
                      arrow_forward
                    </span>
                  </button>
                  <a
                    href="tel:+12345678900"
                    className="flex items-center gap-2 text-primary-fixed-dim px-4 py-2 hover:text-surface transition-colors"
                  >
                    <span className="material-symbols-outlined text-secondary-container text-xl">
                      call
                    </span>
                    <span className="text-[14px] font-semibold">
                      +1 234 567 8900
                    </span>
                  </a>
                </div>
              </div>

              {/* Mini Testimonial Quote */}
              <div className="lg:col-span-4 bg-inverse-surface/60 backdrop-blur-md rounded-2xl p-6 border border-surface/5">
                <div className="flex items-center gap-1 text-secondary-container mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span
                      key={s}
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="text-[14px] text-surface-variant italic mb-4 leading-relaxed">
                  "Painter Contractors transformed our entire 3-story
                  headquarters in under five days without a drop of spilled
                  paint or business interruption. Simply world-class."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold text-sm">
                    TL
                  </div>
                  <div>
                    <p className="text-[13px] text-surface font-bold m-0">
                      Thomas Lansing
                    </p>
                    <p className="text-[11px] text-on-primary-container m-0">
                      Managing Partner, Lansing &amp; Co.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
