import React, { useState } from "react";
import { IMAGES, PROJECTS_DATA, ProjectCaseStudy } from "../data/content.ts";
import { PageId } from "../components/Navbar.tsx";

interface ProjectsProps {
  onNavigate: (page: PageId) => void;
  onRequestQuote: () => void;
  onOpenCaseStudy: (project: ProjectCaseStudy) => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  onNavigate,
  onRequestQuote,
  onOpenCaseStudy,
}) => {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "interior" | "exterior" | "commercial" | "residential"
  >("all");
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === "all") return true;
    return project.categories.includes(activeFilter);
  });

  const handleSliderMove = (clientX: number, rect: DOMRect) => {
    const offsetX = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (e.touches[0]) {
      handleSliderMove(e.touches[0].clientX, rect);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.clientX, rect);
  };

  return (
    <div className="bg-[#f8f9ff] min-h-screen text-[#131c2b] pt-6 pb-20">
      {/* Hero Section */}
      <section className="max-w-10/12 mx-auto px-4 sm:px-6 lg:px-8 lg:py-24 py-10 sm:py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#131c2b] mb-5 font-headline leading-[1.15] sm:leading-[1.1]">
            Transformative Work,{" "}
            <span className="relative inline-block text-[#fea619]">
              Flawlessly Executed.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            From historical residences to modern commercial tech centers,
            explore our real-world projects featuring surgical preparation,
            premium coatings, and five-star client satisfaction.
          </p>
        </div>
      </section>

      {/* Interactive Before & After Showcase */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#fea619]">
                Live Interactive Comparison
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-headline text-[#131c2b] mt-1">
                Pasadena Craftsman Restoration
              </h2>
              <p className="text-sm text-slate-500 mt-1 max-w-xl">
                Drag the interactive slider horizontally to reveal the striking
                difference between the weathered facade and our Sherwin-Williams
                Emerald elastomeric coat.
              </p>
            </div>
            <div className="flex items-center gap-2 bg-[#f0f4fc] px-4 py-2 rounded-xl text-xs font-semibold text-[#131c2b] shrink-0 self-start md:self-auto">
              <svg
                className="w-4 h-4 text-[#fea619]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                />
              </svg>
              <span>Slide left / right</span>
            </div>
          </div>

          {/* Interactive Split Viewer Container */}
          <div
            className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden cursor-ew-resize select-none
             border border-slate-200 shadow-inner group bg-slate-100"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              handleSliderMove(e.clientX, rect);
            }}
          >
            {/* After Image — FULL visible, no crop */}
            <img
              src="/after.png"
              alt="After Paint Restoration"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              draggable={false}
            />
            <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg z-10 shadow-md">
              AFTER · Emerald Finish
            </div>

            {/* Before Image — same contain, clipped */}
            <img
              src="/before.png"
              alt="Before Restoration"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              draggable={false}
              style={{
                clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
              }}
            />
            <div className="absolute top-4 left-4 bg-[#131c2b]/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md z-10">
              BEFORE · Weathered
            </div>

            {/* Divider Line & Handle */}
            <div
              className="absolute inset-y-0 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)] z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white text-[#131c2b] rounded-full shadow-2xl flex items-center justify-center border-2 border-[#fe7624]">
                <svg
                  className="w-5 h-5 text-[#131c2b]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M8 7l-5 5 5 5M16 7l5 5-5 5"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 px-1">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#fe7624]"></span>
              Project Scope: Full scraping, primer lock, 2 finish coats + trim
              contrast
            </span>
            <button
              onClick={() => onNavigate("contact")}
              className="font-bold text-[#fea619] hover:underline inline-flex items-center gap-1"
            >
              Get a quote for your exterior →
            </button>
          </div>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="max-w-10/12 mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {[
            { id: "all", label: "All Projects" },
            { id: "interior", label: "Interior Painting" },
            { id: "exterior", label: "Exterior Facades" },
            { id: "commercial", label: "Commercial & Retail" },
            { id: "residential", label: "Residential Homes" },
          ].map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  isActive
                    ? "bg-[#131c2b] text-white shadow-md"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-10/12 mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#131c2b] shadow-sm">
                  {project.tagLabel}
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-[#fea619]"
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
                  {project.duration}
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-2">
                    <svg
                      className="w-3.5 h-3.5 text-[#fea619]"
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
                    {project.location}
                  </div>
                  <h3 className="text-xl font-bold font-headline text-[#131c2b] mb-2.5 group-hover:text-[#fea619] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-2 mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onOpenCaseStudy(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#fea619] group-hover:translate-x-1 transition-transform"
                  >
                    <span>View Case Study</span>
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                  <span className="text-[11px] font-semibold text-slate-400">
                    Warranty Certified
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Numerical Impact Strip */}
      <section className="bg-[#131c2b] text-white py-16 mb-20">
        <div className="max-w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-5xl font-black font-headline text-[#fea619] mb-1">
                450+
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                Projects Completed
              </p>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-5xl font-black font-headline text-white mb-1">
                99.4%
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                On-Time Completion Rate
              </p>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-5xl font-black font-headline text-[#fea619] mb-1">
                12
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                Master Craftsmen On Crew
              </p>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-5xl font-black font-headline text-white mb-1">
                5-Year
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                Transferable Warranty
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Spotlight / Testimonial */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-sm relative">
          <div className="w-12 h-12 rounded-full bg-[#fff4eb] text-[#fea619] flex items-center justify-center mx-auto mb-6">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <p className="text-base sm:text-xl font-medium text-[#131c2b] italic leading-relaxed mb-6">
            &ldquo;Painter Contractors took our outdated 1980s ranch exterior
            and turned it into the showpiece of our block. Clean lines,
            immaculate masking, and not a single drop of paint left on the
            pavers. Marcus and his crew run a masterclass in contractor
            professionalism.&rdquo;
          </p>
          <div className="flex items-center justify-center gap-4">
            <img
              src={IMAGES.avatar1}
              alt="Sarah Jenkins"
              className="w-12 h-12 rounded-full object-cover ring-2 ring-[#fe7624]"
            />
            <div className="text-left">
              <h4 className="font-bold text-sm text-[#131c2b]">
                Sarah Jenkins
              </h4>
              <p className="text-xs text-slate-500">
                Pasadena Homeowner · Whole Exterior Facade
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#131c2b] to-[#1e2e44] rounded-3xl p-8 sm:p-12 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-headline mb-3">
              Ready to create your own transformation?
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Get an accurate, fixed-price proposal in minutes. Zero surprise
              fees, zero pressure.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <button
              onClick={onRequestQuote}
              className="w-full sm:w-auto bg-[#fe7624] hover:bg-[#e06115] text-white px-7 py-3.5 rounded-full text-sm font-bold shadow-lg shadow-[#fe7624]/20 transition-all cursor-pointer"
            >
              Get Free Estimate
            </button>
            <button
              onClick={() => onNavigate("pricing")}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-full text-sm font-semibold transition-all cursor-pointer"
            >
              View Pricing Tiers
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
